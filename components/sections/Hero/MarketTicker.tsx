'use client'

import { useEffect, useState } from 'react'
import type { Quote } from '@/app/api/quotes/route'

// Static fallback shown before the first fetch resolves.
const FALLBACK: Quote[] = [
  { symbol: 'SPY', price: 0, changePercent: 0.4 },
  { symbol: 'QQQ', price: 0, changePercent: -0.2 },
  { symbol: 'NVDA', price: 0, changePercent: 2.3 },
  { symbol: 'TSLA', price: 0, changePercent: 1.1 },
  { symbol: 'AAPL', price: 0, changePercent: -0.1 },
  { symbol: 'GLD', price: 0, changePercent: 0.8 },
  { symbol: 'BTC-USD', price: 0, changePercent: 3.2 },
  { symbol: 'ETH-USD', price: 0, changePercent: 1.9 },
  { symbol: 'JPM', price: 0, changePercent: 0.5 },
  { symbol: 'GS', price: 0, changePercent: 0.7 },
  { symbol: 'MS', price: 0, changePercent: -0.3 },
  { symbol: 'VIX', price: 0, changePercent: -4.1 },
  { symbol: 'TLT', price: 0, changePercent: -0.6 },
  { symbol: 'XLE', price: 0, changePercent: 1.4 },
]

function fmt(q: Quote) {
  const sign = q.changePercent >= 0 ? '+' : ''
  const pct = `${sign}${q.changePercent.toFixed(2)}%`
  const price = q.price > 0 ? ` $${q.price < 10 ? q.price.toFixed(4) : q.price.toFixed(2)}` : ''

  return `${q.symbol}${price} ${pct}`
}

export function MarketTicker() {
  const [quotes, setQuotes] = useState<Quote[]>(FALLBACK)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const res = await fetch('/api/quotes')
        if (!res.ok) return

        const data: Quote[] = await res.json()
        if (mounted && data.length > 0) {
          setQuotes(data)
        }
      } catch {
        // Keep fallback data on network errors.
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  const items = [...quotes, ...quotes]

  return (
    <div className="border-t-2 border-b-2 border-[#080808]/20 overflow-hidden py-2 bg-[#f0f1e8]">
      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {items.map((q, i) => {
          const pos = q.changePercent >= 0

          return (
            <span
              key={i}
              className={`font-mono text-xs tracking-wider shrink-0 ${
                pos ? 'text-[#00994d]' : 'text-[#cc2222]'
              }`}
            >
              {fmt(q)}
            </span>
          )
        })}
      </div>
    </div>
  )
}
