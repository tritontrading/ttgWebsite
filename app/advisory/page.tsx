import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { AdvisoryBackground } from '@/components/sections/Advisory/AdvisoryBackground'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'

export const metadata: Metadata = {
  title: 'FP&A - Triton Trading Group',
  description:
    "TTG's FP&A division delivers rigorous, data-driven financial analysis and strategic insights tailored to early-stage startups and growing businesses.",
}

const HOW_WE_OPERATE = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We learn your business, challenges, and goals before scoping anything.',
  },
  {
    step: '02',
    title: 'Diagnosis',
    body: 'We assess your current state, gather data, and identify root causes.',
  },
  {
    step: '03',
    title: 'Analysis & Strategy',
    body: 'We build models, surface insights, and develop recommendations.',
  },
  {
    step: '04',
    title: 'Delivery',
    body: 'We present findings, support implementation, and hand off cleanly.',
  },
]

const WHY_CHOOSE = [
  {
    title: 'Built for Early-Stage',
    body: 'We understand startup constraints — constrained resources, evolving needs, and the pressure to execute quickly. Our process is designed around your reality.',
  },
  {
    title: 'Custom-Tailored Work',
    body: 'Every engagement is scoped around your specific problem and goals. No copy-paste frameworks — we tailor analysis, deliverables, and communication style to your stage and constraints.',
  },
  {
    title: 'Structured Division Behind You',
    body: 'You get a team with defined roles and managed delivery — an engagement lead, senior analysts, and specialists all working toward your outcome.',
  },
  {
    title: 'High-Impact, Accessible',
    body: 'Professional quality analysis delivered with the focus and care that early-stage companies deserve. One client at a time so you are never competing for attention.',
  },
]

const SERVICES = [
  {
    title: 'Finance & Business Analysis',
    items: [
      'Financial modeling & forecasting',
      'Cash flow and runway analysis',
      'Unit economics and break-even',
      'Valuation and comparables',
      'Pricing and margin analysis',
      'Scenario and sensitivity modeling',
    ],
  },
  {
    title: 'Operations & Strategy',
    items: [
      'Market research and competitive analysis',
      'Go-to-market planning',
      'Sales process and CRM design',
      'Workflow optimization',
      'KPI tracking and project roadmaps',
    ],
  },
  {
    title: 'Tech & AI Integration',
    items: [
      'Workflow automation',
      'AI tooling and API integration',
      'Digital infrastructure setup',
      'Digitization for SMBs',
    ],
  },
  {
    title: 'Marketing & Growth',
    items: [
      'Paid ad campaigns (Meta, TikTok, Instagram)',
      'Short-form video and content creation',
      'Website development (UI/UX)',
      'Marketing strategy and sales support',
    ],
  },
]

const CLIENTS = [
  { name: 'Neet Sheets', logo: '/images/clients/neet.png' },
  { name: 'Linkkup', logo: '/images/clients/linkkup2.png' },
  { name: 'UC Investments Academy', logo: '/images/clients/ucia.png' },
  { name: 'Triton Investment Banking', logo: '/images/clients/TIB.png' },
]

export default function AdvisoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream">
      <AdvisoryBackground />
      <Nav />

      {/* ── HERO ── */}
      <section className="relative z-10 border-b border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span className="mb-6 block font-mono text-[13px] tracking-[0.28em] uppercase text-[#080808]/50">
              FP&A
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-[0.95] tracking-tight text-[#080808] sm:text-5xl md:text-7xl">
              FP&A
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#080808]/60 md:text-lg">
              Our FP&A division delivers rigorous, data-driven financial analysis and strategic insights tailored to early-stage startups and growing businesses. From cash flow modeling to growth strategy, we help founders and operators understand their numbers — and build a plan around them. All work is done by trained student analysts under structured project management.
            </p>
          </div>

          <div className="border border-[#080808]/15 bg-[#f4f5ec] p-6 md:p-8">
            <span className="mb-3 block font-mono text-[13px] tracking-[0.22em] uppercase text-[#080808]/50">
              NEW INQUIRIES
            </span>
            <p className="mb-6 text-sm leading-7 text-[#080808]/60">
              Send a short overview of your team, stage, and the decision or system you need help with.
            </p>
            <a
              href="mailto:tritontradinggroup@ucsd.edu?"
              className="inline-flex w-full items-center justify-center border border-[#080808] px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white"
            >
              Email TTG FP&A
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW WE OPERATE ── */}
      <section className="relative z-10 border-b border-[#080808]/15 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-16">
            <span className="mb-4 block font-mono text-[13px] tracking-[0.28em] uppercase text-[#080808]/50">
              PROCESS
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#080808] md:text-5xl">
              How We Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_OPERATE.map((item) => (
              <div key={item.step} className="bg-cream p-6 md:p-8">
                <span className="mb-4 block font-mono text-[13px] tracking-[0.22em] uppercase text-[#080808]/50">
                  {item.step}
                </span>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#080808]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#080808]/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE TTG ── */}
      <section className="relative z-10 border-b border-[#080808]/15 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-16">
            <span className="mb-4 block font-mono text-[13px] tracking-[0.28em] uppercase text-[#080808]/50">
              WHY US
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#080808] md:text-5xl">
              Why Choose TTG
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#080808]/55">
              We are a structured consulting division giving early-stage companies access to real analytical depth with personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="bg-[#f7f8ef] p-6 md:p-8">
                <div className="mb-3 flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[#0066ff]" />
                  <h3 className="font-serif text-xl font-bold text-[#080808]">{item.title}</h3>
                </div>
                <p className="pl-4 text-sm leading-7 text-[#080808]/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative z-10 border-b border-[#080808]/15 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-16">
            <span className="mb-4 block font-mono text-[13px] tracking-[0.28em] uppercase text-[#080808]/50">
              SERVICES
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#080808] md:text-5xl">
              What We Can Help With
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#080808]/55">
              Scoped FP&A work across finance, operations, growth, and technical systems.
            </p>
          </div>

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

      {/* ── CLIENTS ── */}
      <section className="relative z-10 border-b border-[#080808]/15 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-16">
            <span className="mb-4 block font-mono text-[13px] tracking-[0.28em] uppercase text-[#080808]/50">
              CLIENTS
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#080808] md:text-5xl">
              Who We Work With
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#080808]/55">
              We partner with early-stage startups, student-run ventures, and small-to-medium businesses that need financial clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#080808]/15 md:grid-cols-4">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center gap-4 bg-[#f7f8ef] p-8 md:p-12"
              >
                {/* Logo placeholder — replace with <Image> once logos are available */}
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={64}
                  className="h-16 w-full max-w-[140px] object-contain"
                />
                <span className="text-center font-mono text-[13px] tracking-[0.18em] uppercase text-[#080808]/50">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY + CONTACT ── */}
      <section className="relative z-10 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Apply */}
          <div className="border border-[#080808]/15 bg-[#f4f5ec] p-6 md:p-10">
            <span className="mb-3 block font-mono text-[13px] tracking-[0.22em] uppercase text-[#080808]/50">
              FOR STUDENTS
            </span>
            <h2 className="mb-3 font-serif text-2xl font-bold text-[#080808] md:text-3xl">
              Interested in the FP&A Track?
            </h2>
            <p className="mb-8 text-sm leading-7 text-[#080808]/60">
              Applications open each academic quarter. The FP&A track gives members structured exposure to consulting-style problem solving, corporate finance, and operator-level execution.
            </p>
            <ApplyNowLink className="inline-flex w-full items-center justify-center border border-[#080808] px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white">
              Apply Now
            </ApplyNowLink>
          </div>

          {/* Contact */}
          <div className="border border-[#080808]/15 bg-cream p-6 md:p-10">
            <span className="mb-3 block font-mono text-[13px] tracking-[0.22em] uppercase text-[#080808]/50">
              FOR FOUNDERS & TEAMS
            </span>
            <h2 className="mb-3 font-serif text-2xl font-bold text-[#080808] md:text-3xl">
              Start The Conversation
            </h2>
            <p className="mb-8 text-sm leading-7 text-[#080808]/60">
              Email TTG with a short overview of your business, timeline, and FP&A need. Early-stage companies, founders preparing for capital decisions, and teams looking for scoped support are all welcome.
            </p>
            <a
              href="mailto:tritontradinggroup@ucsd.edu?"
              className="inline-flex w-full items-center justify-center border border-[#080808] px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white"
            >
              Email TTG FP&A
            </a>
            <div className="mt-6 border-t border-[#080808]/10 pt-5">
              <p className="font-mono text-[13px] leading-6 text-[#080808]/35">
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