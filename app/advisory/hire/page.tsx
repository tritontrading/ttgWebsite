import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { AdvisoryBackground } from '@/components/sections/Advisory/AdvisoryBackground'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Hire TTG Advisory - Triton Trading Group',
  description:
    'Explore TTG advisory services for early-stage teams across operations, strategy, growth, finance, and technology.',
}

const WHY_US = [
  {
    title: 'Research-Driven Clarity',
    body:
      'We deliver research-driven clarity, powered by top-tier student talent and rigorous internal review, so teams can explore options and defend decisions with sharper conviction.',
  },
  {
    title: 'Measurable Impact',
    body:
      'Every engagement is structured around outputs you can use immediately and maintain after handoff, from decision memos to operating models and implementation plans.',
  },
]

const VALUES = [
  {
    eyebrow: '01',
    title: 'Excellence',
    body:
      'We operate with client-grade rigor. Our work is evidence-based, internally reviewed, and built to stand up in front of investors, advisors, and leadership teams.',
  },
  {
    eyebrow: '02',
    title: 'Adaptability',
    body:
      'We do not copy-paste frameworks. We tailor analysis, deliverables, and communication style to the client stage, industry, and constraints.',
  },
  {
    eyebrow: '03',
    title: 'Commitment',
    body:
      'We prioritize responsiveness, clarity, and follow-through, working closely with one client at a time so you are not competing for attention.',
  },
]

const SERVICES = [
  {
    title: 'Operations and Strategy',
    items: ['Customer identification', 'Market positioning strategy', 'Sales process structuring', 'CRM design and cleanup'],
  },
  {
    title: 'Marketing & Growth Strategy',
    items: ['Ad creation support', 'Influencer strategy and vetting', 'Marketing tracking systems', 'Sample disbursement SOPs'],
  },
  {
    title: 'Finance',
    items: ['Cash flow analysis', 'SWOT analysis', 'Financial modeling', 'Startup credit analysis and auditing', 'Unit economics'],
  },
  {
    title: 'Technology',
    items: ['AI infrastructure', 'Automation', 'Cloud tooling and security workflows', 'Distributed data analytics'],
  },
]

const CONTACT_POINTS = [
  'Early-stage companies needing structured analysis',
  'Founders preparing for capital or growth decisions',
  'Teams looking for scoped finance or operations support',
]

export default function AdvisoryHirePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream">
      <AdvisoryBackground />
      <Nav />

      <section className="relative z-10 border-b-2 border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <Link href="/advisory" className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35 hover:text-[#080808]">
              {'<-'} Back To Advisory Paths
            </Link>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 md:gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="mb-6 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                FOR FOUNDERS & TEAMS
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-[0.96] text-[#080808] sm:text-5xl md:text-7xl">
                Advisory That
                <br />
                Fits Early-Stage
                <br />
                Reality
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#080808]/60">
                TTG helps early-stage teams make high-stakes decisions with clarity. We turn uncertain questions into structured choices around runway, unit economics, pricing, go-to-market tradeoffs, and operational execution.
              </p>
            </div>

            <div className="border border-[#080808]/15 bg-[#f4f5ec] p-6 md:p-8">
              <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
                START HERE
              </span>
              <p className="mb-6 text-sm leading-7 text-[#080808]/60">
                If you are evaluating a scoped engagement, send a short overview of your team, stage, and the decision or system you need help with.
              </p>
              <a
                href="mailto:tritontradinggroup@ucsd.edu?subject=TTG%20Advisory%20Inquiry"
                className="inline-flex w-full items-center justify-center border border-[#080808] px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white"
              >
                Email TTG Advisory
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="WHY US"
            title="Why Teams Choose TTG"
            description="Everything you need to evaluate options, make decisions, and act with sharper conviction."
            className="mb-10 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2">
            {WHY_US.map((item) => (
              <div key={item.title} className="bg-cream p-6 md:p-8">
                <h3 className="mb-3 font-serif text-2xl font-bold text-[#080808]">{item.title}</h3>
                <p className="text-sm leading-7 text-[#080808]/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-[#080808]/10 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6 text-sm leading-8 text-[#080808]/60 md:text-base">
            <p>
              We exist to help early-stage teams make high-stakes decisions with clarity, turning uncertain questions into structured choices that founders can defend with investors, customers, and operators.
            </p>
            <p>
              We deliver this through a student-run model designed for leverage: tight scope, fast iteration, and rigorous internal review. Every engagement is built around transparent assumptions, clean methodology, and practical outputs that clients can use immediately.
            </p>
            <p>
              By staying focused on one client at a time, we protect accountability and produce measurable outcomes while training TTG members on real constraints, real standards, and real responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="PROCESS"
            title="How We Operate"
            description="The service model is intentionally narrow: tight scope, high accountability, and work product built to be used after handoff."
            className="mb-10 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-[#f7f8ef] p-6 md:p-8">
                <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/30">
                  {value.eyebrow}
                </span>
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#080808]">{value.title}</h3>
                <p className="text-sm leading-7 text-[#080808]/55">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 border-t border-[#080808]/10 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="SERVICES"
            title="What We Can Help With"
            description="Scoped advisory work across operations, growth, finance, and technical systems."
            className="mb-10 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-cream p-6 md:p-8">
                <h3 className="mb-5 font-serif text-2xl font-bold text-[#080808]">{service.title}</h3>
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#080808]/60">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[#0066ff]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border border-[#080808]/15 bg-[#f4f5ec] p-6 md:grid-cols-[1.1fr_.9fr] md:p-10">
          <div>
            <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
              CONTACT
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#080808] md:text-5xl">
              Reach Us Anytime
            </h2>
            <p className="mb-8 max-w-xl text-sm leading-7 text-[#080808]/60">
              If you are evaluating a scoped engagement, send us a short note about your team, your current stage, and the decision or system you need help with.
            </p>

            <div className="space-y-3">
              {CONTACT_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-[#080808]/65">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[#0066ff]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#080808]/15 bg-cream p-6">
            <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
              NEW INQUIRIES
            </span>
            <h3 className="mb-4 font-serif text-2xl font-bold text-[#080808]">
              Start The Conversation
            </h3>
            <p className="mb-6 text-sm leading-7 text-[#080808]/60">
              Email TTG with a short overview of your business, timeline, and advisory need.
            </p>
            <a
              href="mailto:tritontradinggroup@ucsd.edu?subject=TTG%20Advisory%20Inquiry"
              className="inline-flex w-full items-center justify-center border border-[#080808] px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white"
            >
              Email TTG Advisory
            </a>
            <div className="mt-6 border-t border-[#080808]/10 pt-5">
              <p className="font-mono text-[11px] leading-6 text-[#080808]/35">
                tritontradinggroup@ucsd.edu
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  )
}
