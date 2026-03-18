import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const STOCK_SYMBOLS = [
  'SPY', 'QQQ', 'NVDA', 'TSLA', 'AAPL', 'MSFT',
  'GLD', 'JPM', 'GS', 'MS', 'IWM', 'TLT', 'XLE',
] as const

const CRYPTO_SYMBOLS = ['BTC', 'ETH'] as const

const DAY_IN_SECONDS = 24 * 60 * 60
const CACHE_TTL_MS = DAY_IN_SECONDS * 1_000
const REQUEST_DELAY_MS = 1_000
const CACHE_DIR = path.join(process.cwd(), '.cache')
const CACHE_FILE = path.join(CACHE_DIR, 'quotes.json')
const CACHE_CONTROL_HEADER =
  `public, max-age=${DAY_IN_SECONDS}, s-maxage=${DAY_IN_SECONDS}, stale-while-revalidate=${DAY_IN_SECONDS}`

export interface Quote {
  symbol: string
  price: number
  changePercent: number
}

interface QuoteCache {
  quotes: Quote[]
  fetchedAt: number
}

let memoryCache: QuoteCache | null = null
let inFlightRefresh: Promise<Quote[]> | null = null

function alphaUrl(params: Record<string, string>) {
  return `https://www.alphavantage.co/query?${new URLSearchParams(params).toString()}`
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(10_000),
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

function isFresh(cache: QuoteCache | null): cache is QuoteCache {
  return cache !== null && Date.now() - cache.fetchedAt < CACHE_TTL_MS
}

async function readPersistentCache(): Promise<QuoteCache | null> {
  try {
    const raw = await readFile(CACHE_FILE, 'utf8')
    const parsed = JSON.parse(raw) as Partial<QuoteCache>

    if (!Array.isArray(parsed.quotes) || typeof parsed.fetchedAt !== 'number') {
      return null
    }

    const quotes = parsed.quotes.filter((quote): quote is Quote => (
      Boolean(quote)
      && typeof quote.symbol === 'string'
      && typeof quote.price === 'number'
      && Number.isFinite(quote.price)
      && typeof quote.changePercent === 'number'
      && Number.isFinite(quote.changePercent)
    ))

    return { quotes, fetchedAt: parsed.fetchedAt }
  } catch {
    return null
  }
}

async function writePersistentCache(cache: QuoteCache) {
  await mkdir(CACHE_DIR, { recursive: true })
  await writeFile(CACHE_FILE, JSON.stringify(cache), 'utf8')
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
  const latest = Number.parseFloat(series[d0]?.['4a. close (USD)'] ?? '')
  const previous = Number.parseFloat(series[d1]?.['4a. close (USD)'] ?? '')

  if (!Number.isFinite(latest) || !Number.isFinite(previous) || previous === 0) return null

  return {
    symbol: `${symbol}-USD`,
    price: latest,
    changePercent: ((latest - previous) / previous) * 100,
  }
}

async function fetchAllQuotes(apiKey: string): Promise<Quote[]> {
  const results: Quote[] = []

  for (const symbol of STOCK_SYMBOLS) {
    try {
      const quote = await fetchStockQuote(symbol, apiKey)
      if (quote) results.push(quote)
    } catch (err) {
      console.warn(`[/api/quotes] stock ${symbol} failed:`, err)
    }

    await delay(REQUEST_DELAY_MS)
  }

  for (const symbol of CRYPTO_SYMBOLS) {
    try {
      const quote = await fetchCryptoQuote(symbol, apiKey)
      if (quote) results.push(quote)
    } catch (err) {
      console.warn(`[/api/quotes] crypto ${symbol} failed:`, err)
    }

    await delay(REQUEST_DELAY_MS)
  }

  return results
}

async function refreshQuotes(apiKey: string) {
  const quotes = await fetchAllQuotes(apiKey)

  if (quotes.length > 0) {
    const nextCache = { quotes, fetchedAt: Date.now() }
    memoryCache = nextCache
    await writePersistentCache(nextCache)
  }

  return quotes
}

function jsonResponse(quotes: Quote[]) {
  return NextResponse.json(quotes, {
    headers: { 'Cache-Control': CACHE_CONTROL_HEADER },
  })
}

export async function GET() {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY

  if (!apiKey) {
    console.warn('[/api/quotes] Missing ALPHA_VANTAGE_API_KEY')
    return NextResponse.json([], { status: 200 })
  }

  const freshMemoryCache = memoryCache
  if (isFresh(freshMemoryCache)) {
    return jsonResponse(freshMemoryCache.quotes)
  }

  const persistentCache = await readPersistentCache()
  const freshPersistentCache = persistentCache
  if (isFresh(freshPersistentCache)) {
    memoryCache = freshPersistentCache
    return jsonResponse(freshPersistentCache.quotes)
  }

  try {
    if (!inFlightRefresh) {
      inFlightRefresh = refreshQuotes(apiKey).finally(() => {
        inFlightRefresh = null
      })
    }

    const quotes = await inFlightRefresh
    return jsonResponse(quotes.length > 0 ? quotes : (persistentCache?.quotes ?? []))
  } catch (err) {
    console.error('[/api/quotes]', err)

    if (memoryCache) {
      const staleQuotes = memoryCache.quotes
      return jsonResponse(staleQuotes)
    }

    if (persistentCache) {
      const staleQuotes = persistentCache.quotes
      return jsonResponse(staleQuotes)
    }

    return NextResponse.json([], { status: 200 })
  }
}
