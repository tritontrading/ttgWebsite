'use client'

import { StatCounter } from './StatCounter'
import { TextReveal } from './TextReveal'

export function About() {
  return (
    <section id="about" className="border-t-2 border-[#080808]/20 bg-cream px-5 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
            ABOUT
          </span>
        </div>
        <div className="mb-10 border-t border-[#080808]/20 md:mb-16" />

        <div className="mb-14 grid grid-cols-1 gap-10 md:mb-24 md:gap-16 lg:grid-cols-2">
          <div>
            <TextReveal
              text="Triton Trading Group is a student-run nonprofit organization dedicated to advancing financial education, investment literacy, and professional development at UC San Diego."
              className="font-serif text-2xl font-bold leading-snug text-[#080808] md:text-3xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm leading-relaxed text-[#080808]/60">
              Our mission is to provide members with practical exposure to capital markets, financial analysis, business strategy, and technological innovation in finance through structured training programs and real-world experiences.
            </p>
            <p className="text-sm leading-relaxed text-[#080808]/60">
              Through our departments in asset management, financial planning and analysis, and quantitative finance, TTG bridges the gap between academic learning and professional practice. As a nonprofit, we reinvest resources into educational programming and research initiatives.
            </p>
            <p className="font-mono text-[11px] leading-relaxed text-[#080808]/30">
              Skills developed: equity research · financial modeling · algorithmic strategy · consulting · valuation analysis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border border-[#080808]/20 md:grid-cols-3">
          <StatCounter value={3} suffix="" label="Core Departments" />
          <div className="border-t border-[#080808]/20 md:border-l md:border-t-0">
            <StatCounter value={50} suffix="+" label="Active Members" />
          </div>
          <div className="border-t border-[#080808]/20 md:border-l md:border-t-0">
            <StatCounter value={2025} suffix="" label="Founded" />
          </div>
        </div>
      </div>
    </section>
  )
}
