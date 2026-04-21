import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'

export const metadata: Metadata = {
  title: 'Asset Management - Triton Trading Group',
  description:
    "TTG's Asset Management department trains students in equity research, portfolio construction, sector coverage, and investment committee communication.",
}

const SECTORS = [
  {
    name: 'Technology',
    detail: 'Coverage on software, semiconductors, and platform businesses with a focus on durable cash flow and market structure.',
  },
  {
    name: 'Financials',
    detail: 'Banks, insurers, and capital markets names analyzed through balance sheet quality, underwriting, and rate sensitivity.',
  },
  {
    name: 'Healthcare',
    detail: 'Research spanning biopharma, medtech, and services with attention to catalysts, reimbursement, and execution risk.',
  },
  {
    name: 'Industrials',
    detail: 'Coverage on cyclicals, infrastructure, and manufacturing businesses tied to margin discipline and long-cycle demand.',
  },
  {
    name: 'Energy & Defense',
    detail: 'Thesis work around commodity exposure, geopolitics, and capital allocation in supply-constrained industries.',
  },
  {
    name: 'Commodities',
    detail: 'Macro-aware work across commodity-linked equities and related value chains.',
  },
]

const PROCESS = [
  'Idea generation through sector coverage and macro context',
  'Fundamental research using filings, earnings, and competitive analysis',
  'Financial modeling, scenario work, and valuation framing',
  'Written memo development and investment committee presentation',
  'Post-pitch monitoring, sizing discipline, and risk review',
]

const SKILLS = [
  'Equity research and thesis formation',
  'Three-statement and valuation modeling',
  'Investment memo writing',
  'Portfolio construction and diversification logic',
  'Risk management and position review',
  'Clear verbal defense of recommendations',
]

const OUTCOMES = [
  {
    role: 'Asset Management',
    note: 'Public markets research, portfolio teams, and buy-side analyst tracks',
  },
  {
    role: 'Hedge Funds',
    note: 'Fundamental long/short research and catalyst-driven investing',
  },
  {
    role: 'Investment Banking',
    note: 'Valuation, financial statement fluency, and presentation discipline',
  },
  {
    role: 'Equity Research',
    note: 'Structured coverage work and repeatable written analysis',
  },
  {
    role: 'Corporate Finance',
    note: 'Capital allocation judgment and operating-performance analysis',
  },
  {
    role: 'Buyside Internships',
    note: 'Interview-ready investment process and security-selection language',
  },
]

export default function AssetManagementPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      <section className="border-b-2 border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-6 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                01 - ASSET MANAGEMENT
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-none text-[#080808] sm:text-5xl md:text-7xl">
                Fundamental
                <br />
                Investing
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-[#080808]/60">
                The Asset Management department runs TTG&apos;s student-led investment process. Members build
                sector coverage, research public companies, develop valuation work, and present investment ideas
                through a disciplined committee structure centered on risk-adjusted long-term decision making.
              </p>
            </div>
            <div className="overflow-hidden border-2 border-[#080808]/20">
              <Image
                src="/images/meetings/image1.png"
                alt="Asset Management team"
                width={700}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
              SECTOR COVERAGE
            </span>
            <div className="border-t-2 border-[#080808]/20" />
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="flex flex-col gap-3 bg-cream p-6 md:p-8">
                <h2 className="font-serif text-base font-bold leading-tight text-[#080808]">
                  {sector.name}
                </h2>
                <p className="text-sm leading-relaxed text-[#080808]/50">{sector.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                INVESTMENT PROCESS
              </span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
                {PROCESS.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 px-5 py-5 md:px-6">
                    <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#0066ff]">
                      0{index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[#080808]/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                IN PRACTICE
              </span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <div className="overflow-hidden border-2 border-[#080808]/20">
                <Image
                  src="/images/tabling/image2.png"
                  alt="Students discussing portfolio ideas"
                  width={600}
                  height={420}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-20 lg:grid-cols-2">
          <div>
            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
              SKILLS MEMBERS DEVELOP
            </span>
            <div className="mb-8 border-t-2 border-[#080808]/20" />
            <div className="space-y-3">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-sm text-[#080808]">
                  <span className="h-1 w-1 shrink-0 bg-[#0066ff]" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
              CAREER OUTCOMES
            </span>
            <div className="mb-8 border-t-2 border-[#080808]/20" />
            <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
              {OUTCOMES.map((outcome) => (
                <div
                  key={outcome.role}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-serif text-sm font-bold text-[#080808]">{outcome.role}</span>
                  <span className="font-mono text-[10px] text-[#080808]/40 sm:text-right">
                    {outcome.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-[#080808]">
              Interested in Asset Management?
            </h2>
            <p className="text-sm text-[#080808]/50">
              Curiosity, discipline, and strong communication matter more than prior buy-side experience.
            </p>
          </div>
          <ApplyNowLink className="w-full shrink-0 border-2 border-[#080808] px-10 py-4 text-center font-mono text-sm tracking-widest uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-cream sm:w-auto">
            Apply Now
          </ApplyNowLink>
        </div>
      </section>

      <Footer />
    </main>
  )
}
