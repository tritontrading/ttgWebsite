'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ToolCard } from './ToolCard'
import { SPONSORS } from '@/lib/constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const TOOL_DESCRIPTIONS: Record<string, string> = {
  amazon: 'Brand and technology sponsor.',
  amazonkdp: 'Publishing and creator platform partner.',
  apple: 'Technology sponsor and recruiting brand.',
  goldmansachs: 'Recruiting partner. Alumni placed in IBD, S&T, and Markets.',
  jpmorganchase: 'Recruiting partner. Full-time and internship pipeline.',
  bainandcompany: 'Strategy consulting partner. Case prep and recruiting.',
  ochyoconsulting: 'Consulting partner supporting member development.',
  pinterest: 'Technology sponsor and recruiting brand.',
  pwc: 'Audit, advisory, and deals practice recruiting.',
  quantconnect: 'Specific sponsor of the quant team for algorithmic trading research and backtesting.',
  socialpremiermarketing: 'Marketing partner supporting outreach and brand growth.',
  stanford: 'Academic brand represented in the TTG network.',
  ucsdradyschooolofmgmt: 'Campus academic partner supporting business education.',
  marketcrunchai: 'AI-powered market analysis platform. Member access provided.',
  upennwharton: 'Academic partnership for quantitative finance curriculum.',
  zum: 'Technology and operations sponsor.',
}

export function IndustryTools() {
  const gridRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll('.tool-card-wrapper')

    if (reducedMotion) {
      gsap.set(cards, { opacity: 1, y: 0 })
      return
    }

    gsap.set(cards, { opacity: 0, y: 30 })

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: grid, start: 'top 80%', once: true },
      })
    }, grid)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="tools" className="border-t border-[#c79a3b]/40 bg-cream px-5 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="font-mono text-xs tracking-[0.24em] uppercase text-[#c79a3b]">
            INDUSTRY PARTNERS
          </span>
        </div>
        <div className="mb-10 border-t border-[#c79a3b]/35 md:mb-12" />

        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-16 md:gap-16 lg:grid-cols-2">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#0d1b3d] md:text-5xl">
            Who We Work With
          </h2>
          <p className="text-base leading-relaxed text-[#102347]/80">
            Triton Trading Group works with industry platforms that provide members with access to professional tools and financial technology used in the investment industry. Recruiting partnerships, sponsored tools, and academic collaborations with leading firms.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-px bg-[#c79a3b]/28 sm:grid-cols-2 md:grid-cols-3">
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.slug} className="tool-card-wrapper">
              <ToolCard
                name={sponsor.name}
                logo={sponsor.logo}
                description={TOOL_DESCRIPTIONS[sponsor.slug]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
