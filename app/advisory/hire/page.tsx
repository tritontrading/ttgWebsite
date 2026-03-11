import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

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
      'We do not copy-paste frameworks. We tailor analysis, deliverables, and communication style to the client’s stage, industry, and constraints.',
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
    <main className="min-h-screen bg-[#05091a] text-white">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,58,122,0.55),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="mb-6">
            <a href="/advisory" className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-white">
              ← Back To Advisory Paths
            </a>
          </div>
          <div className="mb-8 flex justify-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
            <span>Triton Trading Group</span>
            <span>/</span>
            <span>Hire Advisory</span>
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl font-serif text-4xl font-bold leading-[0.92] tracking-tight sm:text-5xl md:text-7xl">
            Student-Run,
            <br />
            Founder-Focused,
            <br />
            Data-First
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            TTG helps early-stage teams make high-stakes decisions with clarity. We turn uncertain questions into structured choices around runway, unit economics, pricing, go-to-market tradeoffs, and operational execution.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:tritontradinggroup@ucsd.edu?subject=TTG%20Advisory%20Inquiry"
              className="inline-flex min-w-[220px] items-center justify-center border border-white bg-white px-8 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#05091a] transition-all duration-200 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-white"
            >
              Book An Appointment
            </a>
            <a
              href="#services"
              className="inline-flex min-w-[220px] items-center justify-center border border-white/20 px-8 py-3 font-mono text-xs tracking-[0.22em] uppercase text-white/75 transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              Review Services
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
              WHY US
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl">
              Why Teams Choose TTG
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/50">
              Everything you need to evaluate options, make decisions, and act with sharper conviction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {WHY_US.map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <h3 className="mb-3 font-serif text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-white/50">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-12 md:pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
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

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
              PROCESS
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl">
              Our Values
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/50">
              How we operate our services, specialized for early-stage teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-white/[0.03] p-6 md:p-8">
                <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-white/30">
                  {value.eyebrow}
                </span>
                <h3 className="mb-4 font-serif text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-sm leading-7 text-white/50">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
              SERVICES
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl">
              What We Can Help With
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/50">
              Scoped advisory work across operations, growth, finance, and technical systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {SERVICES.map((service) => (
              <div key={service.title} className="border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <h3 className="mb-5 font-serif text-2xl font-bold text-white">{service.title}</h3>
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-white/55">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-white/35" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1.15fr_.85fr] md:p-10">
          <div>
            <span className="mb-4 block font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
              CONTACT
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl">
              Reach Us Anytime
            </h2>
            <p className="mb-8 max-w-xl text-sm leading-7 text-white/50">
              If you are evaluating a scoped engagement, send us a short note about your team, your current stage, and the decision or system you need help with.
            </p>

            <div className="space-y-3">
              {CONTACT_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[#c9a84c]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-[#081125] p-6">
            <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
              NEW INQUIRIES
            </span>
            <h3 className="mb-4 font-serif text-2xl font-bold text-white">
              Start The Conversation
            </h3>
            <p className="mb-6 text-sm leading-7 text-white/50">
              Email TTG with a short overview of your business, timeline, and advisory need.
            </p>
            <a
              href="mailto:tritontradinggroup@ucsd.edu?subject=TTG%20Advisory%20Inquiry"
              className="inline-flex w-full items-center justify-center border border-white bg-white px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase text-[#05091a] transition-all duration-200 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-white"
            >
              Email TTG Advisory
            </a>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-mono text-[11px] leading-6 text-white/35">
                `tritontradinggroup@ucsd.edu`
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
