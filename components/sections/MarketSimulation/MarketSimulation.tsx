'use client'

import { useRef } from 'react'
import { EquityCurve } from './EquityCurve'

export function MarketSimulation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="simulation" ref={containerRef} className="bg-[#f5f5f5] py-32 px-6 md:px-12 border-t border-[#080808]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase">
            MARKET SIMULATION
          </span>
        </div>
        <div className="border-t border-[#080808]/10 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#080808] tracking-tight mb-4">
              Live Strategy Performance
            </h2>
            <p className="text-[#080808]/50 text-sm leading-relaxed">
              Members run backtests and live paper-trading portfolios tracked against benchmark indices. Results updated quarterly.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            {['MOMENTUM', 'MEAN REVERSION', 'MULTI-FACTOR'].map((s, i) => (
              <button
                key={i}
                className={`font-mono text-[11px] tracking-wider px-4 py-2 border transition-colors ${
                  i === 0
                    ? 'border-[#080808] bg-[#080808] text-white'
                    : 'border-[#080808]/20 text-[#080808]/40 hover:text-[#080808]/70'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white border border-[#080808]/10 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[10px] text-[#080808]/30 tracking-widest uppercase">
              CUMULATIVE RETURNS — PAPER PORTFOLIO
            </span>
            <span className="font-mono text-[11px] text-[#0066ff]">+840% TOTAL RETURN</span>
          </div>
          <EquityCurve />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#080808]/10 bg-white">
          {[
            { label: 'Sharpe Ratio',  value: '1.84',   note: 'Risk-adjusted return' },
            { label: 'Max Drawdown',  value: '-14.2%', note: '2020 COVID crash' },
            { label: 'CAGR',          value: '+22.6%', note: 'Annualized since 2019' },
          ].map((stat, i) => (
            <div key={i} className={`p-8 flex flex-col gap-2 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-[#080808]/10' : ''}`}>
              <span className="font-mono text-[10px] text-[#080808]/30 tracking-widest uppercase">
                {stat.label}
              </span>
              <span className="text-4xl font-bold text-[#080808]">{stat.value}</span>
              <span className="font-mono text-[11px] text-[#080808]/40">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
