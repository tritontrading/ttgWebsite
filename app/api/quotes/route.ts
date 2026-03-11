import { NextResponse } from 'next/server'

const STOCK_SYMBOLS = [
  'SPY', 'QQQ', 'NVDA', 'TSLA', 'AAPL', 'MSFT',
  'GLD', 'JPM', 'GS', 'MS', 'IWM', 'TLT', 'XLE',
] as const

const CRYPTO_SYMBOLS = ['BTC', 'ETH'] as const

// 15 symbols total — well within the 25/day limit.
// Cache for 23 hours so one refetch per calendar day with headroom.
const CACHE_TTL_MS = 23 * 60 * 60 * 1_000

export interface Quote {
  symbol: string
  price: number
  changePercent: number
}

// Module-level in-memory cache — persists across requests within the same
// server process. Only refreshes once per CACHE_TTL_MS window regardless
// of how many clients hit the endpoint.
let _cache: { quotes: Quote[]; fetchedAt: number } | null = null

function alphaUrl(params: Record<string, string>) {
  return `https://www.alphavantage.co/query?${new URLSearchParams(params).toString()}`
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(10_000),
    // No next.revalidate — we manage caching ourselves above.
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Alpha Vantage responded ${res.status}`)
  }

  return res.json() as Promise<T>
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

async function fetchStockQuote(symbol: string, apiKey: string): Promise<Quote | null> {
  type GlobalQuoteResponse = {
    'Global Quote'?: {
      '05. price'?: string
      '10. change percent'?: string
    }
    Note?: string
    Information?: string
    ErrorMessage?: string
  }

  const json = await fetchJson<GlobalQuoteResponse>(alphaUrl({
    function: 'GLOBAL_QUOTE',
    symbol,
    apikey: apiKey,
  }))

  if (json.Note || json.Information || json.ErrorMessage) {
    throw new Error(json.Note ?? json.Information ?? json.ErrorMessage)
  }

  const quote = json['Global Quote']
  const price = Number.parseFloat(quote?.['05. price'] ?? '')
  const changePercent = Number.parseFloat(
    (quote?.['10. change percent'] ?? '').replace('%', '')
  )

  if (!Number.isFinite(price) || !Number.isFinite(changePercent)) return null

  return { symbol, price, changePercent }
}

async function fetchCryptoQuote(symbol: string, apiKey: string): Promise<Quote | null> {
  type DigitalCurrencyResponse = {
    'Time Series (Digital Currency Daily)'?: Record<string, {
      '4a. close (USD)'?: string
    }>
    Note?: string
    Information?: string
    ErrorMessage?: string
  }

  const json = await fetchJson<DigitalCurrencyResponse>(alphaUrl({
    function: 'DIGITAL_CURRENCY_DAILY',
    symbol,
    market: 'USD',
    apikey: apiKey,
  }))

  if (json.Note || json.Information || json.ErrorMessage) {
    throw new Error(json.Note ?? json.Information ?? json.ErrorMessage)
  }

  const series = json['Time Series (Digital Currency Daily)']
  if (!series) return null

  const [d0, d1] = Object.keys(series).sort((a, b) => b.localeCompare(a))
  const latest   = Number.parseFloat(series[d0]?.['4a. close (USD)'] ?? '')
  const previous = Number.parseFloat(series[d1]?.['4a. close (USD)'] ?? '')

  if (!Number.isFinite(latest) || !Number.isFinite(previous) || previous === 0) return null

  return {
    symbol: `${symbol}-USD`,
    price: latest,
    changePercent: ((latest - previous) / previous) * 100,
  }
}

// Fetch all symbols sequentially with a small gap between calls to stay well
// under Alpha Vantage's 5 requests/minute per-minute limit.
async function fetchAllQuotes(apiKey: string): Promise<Quote[]> {
  const results: Quote[] = []

  for (const symbol of STOCK_SYMBOLS) {
    try {
      const q = await fetchStockQuote(symbol, apiKey)
      if (q) results.push(q)
    } catch (err) {
      console.warn(`[/api/quotes] stock ${symbol} failed:`, err)
    }
    await delay(300) // ~3 req/s — safe under 5/min cap
  }

  for (const symbol of CRYPTO_SYMBOLS) {
    try {
      const q = await fetchCryptoQuote(symbol, apiKey)
      if (q) results.push(q)
    } catch (err) {
      console.warn(`[/api/quotes] crypto ${symbol} failed:`, err)
    }
    await delay(300)
  }

  return results
}

export async function GET() {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY

  if (!apiKey) {
    console.warn('[/api/quotes] Missing ALPHA_VANTAGE_API_KEY')
    return NextResponse.json([], { status: 200 })
  }

  // Serve from memory cache if fresh.
  if (_cache && Date.now() - _cache.fetchedAt < CACHE_TTL_MS) {
    return NextResponse.json(_cache.quotes, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    })
  }

  try {
    const quotes = await fetchAllQuotes(apiKey)

    if (quotes.length > 0) {
      _cache = { quotes, fetchedAt: Date.now() }
    }

    return NextResponse.json(quotes, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    })
  } catch (err) {
    console.error('[/api/quotes]', err)

    // Return stale cache if we have it rather than nothing.
    if (_cache) {
      return NextResponse.json(_cache.quotes, {
        headers: { 'Cache-Control': 'public, s-maxage=0, stale-while-revalidate=86400' },
      })
    }

    return NextResponse.json([], { status: 200 })
  }
}
