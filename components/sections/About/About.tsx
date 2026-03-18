'use client'

import { StatCounter } from './StatCounter'
import { TextReveal } from './TextReveal'

export function About() {
  return (
    <section id="about" className="border-t border-[#c79a3b]/40 bg-cream px-5 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="font-mono text-xs tracking-[0.24em] uppercase text-[#c79a3b]">
            ABOUT
          </span>
        </div>
        <div className="mb-10 border-t border-[#c79a3b]/35 md:mb-16" />

        <div className="mb-14 grid grid-cols-1 gap-10 md:mb-24 md:gap-16 lg:grid-cols-2">
          <div>
            <TextReveal
              text="Triton Trading Group is a student-run nonprofit organization dedicated to advancing financial education, investment literacy, and professional development at UC San Diego."
              className="font-serif text-2xl font-bold leading-snug text-[#0d1b3d] md:text-3xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="border-l-2 border-[#1f5eff]/40 pl-4 text-base leading-relaxed text-[#102347]/82">
              Our mission is to provide members with practical exposure to capital markets, financial analysis, business strategy, and technological innovation in finance through structured training programs and real-world experiences.
            </p>
            <p className="text-base leading-relaxed text-[#102347]/82">
              Through our departments in asset management, financial planning and analysis, and quantitative finance, TTG bridges the gap between academic learning and professional practice. As a nonprofit, we reinvest resources into educational programming and research initiatives.
            </p>
            <p className="font-mono text-sm leading-relaxed text-[#8b6a24]">
              Skills developed: equity research / financial modeling / algorithmic strategy / consulting / valuation analysis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border border-[#c79a3b]/35 bg-gradient-to-br from-[#fff8ea]/90 via-[#fff8ea]/72 to-[#eef2ff]/40 md:grid-cols-2">
          <StatCounter value={3} suffix="" label="Core Departments" />
          <div className="border-t border-[#c79a3b]/30 md:border-l md:border-t-0">
            <StatCounter value={50} suffix="+" label="Active Members" />
          </div>
          {/*<div className="border-t border-[#c79a3b]/30 md:border-l md:border-t-0">
            <StatCounter value={2025} suffix="" label="Founded" />
          </div>*/}
        </div>
      </div>
    </section>
  )
}
