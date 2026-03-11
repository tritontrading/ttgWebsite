'use client'

import { TextReveal } from './TextReveal'
import { StatCounter } from './StatCounter'

export function About() {
  return (
    <section id="about" className="bg-cream py-32 px-6 md:px-12 border-t-2 border-[#080808]/20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6">
          <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase">
            ABOUT
          </span>
        </div>
        <div className="border-t border-[#080808]/20 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <TextReveal
              text="Triton Trading Group is a student-run nonprofit organization dedicated to advancing financial education, investment literacy, and professional development at UC San Diego."
              className="font-serif text-2xl md:text-3xl font-bold text-[#080808] leading-snug"
            />
          </div>

          <div className="flex flex-col gap-6 justify-center">
            <p className="text-[#080808]/60 text-sm leading-relaxed">
              Our mission is to provide members with practical exposure to capital markets, financial analysis, business strategy, and technological innovation in finance through structured training programs and real-world experiences.
            </p>
            <p className="text-[#080808]/60 text-sm leading-relaxed">
              Through our departments in asset management, financial planning and analysis, and quantitative finance, TTG bridges the gap between academic learning and professional practice. As a nonprofit, we reinvest resources into educational programming and research initiatives.
            </p>
            <p className="font-mono text-[11px] text-[#080808]/30 leading-relaxed">
              Skills developed: equity research · financial modeling · algorithmic strategy · consulting · valuation analysis
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#080808]/20">
          <StatCounter value={3}    suffix=""  label="Core Departments" />
          <div className="border-t md:border-t-0 md:border-l border-[#080808]/20">
            <StatCounter value={50} suffix="+" label="Active Members" />
          </div>
          <div className="border-t md:border-t-0 md:border-l border-[#080808]/20">
            <StatCounter value={2022} suffix="" label="Founded" />
          </div>
        </div>
      </div>
    </section>
  )
}
