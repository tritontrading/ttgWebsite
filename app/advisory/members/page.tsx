import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'

export const metadata: Metadata = {
  title: 'Advisory For Members - Triton Trading Group',
  description:
    'Learn how TTG members train and operate inside the Financial Planning & Analysis advisory track.',
}

const AREAS = [
  { label: 'Financial Analysis & Forecasting', desc: 'Build financial models, conduct variance analysis, and develop multi-year forecasting frameworks for client organizations.' },
  { label: 'Market Research & Competitive Analysis', desc: 'Conduct industry research, map competitive landscapes, and surface market intelligence to inform strategy.' },
  { label: 'Business Strategy Development', desc: 'Structure and facilitate strategic planning engagements, from go-to-market planning to growth roadmapping.' },
  { label: 'Operational Improvements', desc: 'Identify inefficiencies in business processes and design solutions to improve throughput and reduce cost.' },
  { label: 'Technology Consulting & Implementation', desc: 'Advise on digital infrastructure, workflow automation, and system implementation for growing organizations.' },
  { label: 'AI Integration & API Systems', desc: 'Design and implement AI-driven workflows, API integrations, and data automation pipelines.' },
]

const ADDITIONAL = [
  'Website development and digital infrastructure',
  'Workflow optimization and operational systems',
  'Marketing and growth strategy',
  'Financial planning and budgeting',
]

const ROLES = [
  { title: 'Engagement Lead', desc: 'Manages the project and client relationship. Sets deliverables, timelines, and communication cadence.' },
  { title: 'Senior Consultant', desc: 'Leads analysis and project coordination. Owns the core work product and guides junior team members.' },
  { title: 'Consultant', desc: 'Conducts research and develops insights. Builds models, slide decks, and analytical frameworks.' },
  { title: 'Analyst', desc: 'Supports data gathering and analysis. Executes research tasks and contributes to deliverables.' },
]

const SKILLS = [
  'Business analysis',
  'Financial modeling',
  'Technology consulting',
  'Strategic thinking',
  'Client communication',
  'Operational design',
]

const CAREERS = [
  { firm: 'Management Consulting', note: 'McKinsey, Bain, BCG, Deloitte' },
  { firm: 'Venture Capital', note: 'Early-stage and growth investing' },
  { firm: 'Corporate Strategy', note: 'In-house strategy & finance roles' },
  { firm: 'Entrepreneurship', note: 'Founding and operating startups' },
  { firm: 'Investment Banking', note: 'Advisory and M&A execution' },
  { firm: 'Private Equity', note: 'Portfolio operations & value creation' },
]

export default function AdvisoryMembersPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      <section className="border-b-2 border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <a href="/advisory" className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35 hover:text-[#080808]">
              ← Back To Advisory Paths
            </a>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-6 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                FOR PROSPECTIVE MEMBERS
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-none text-[#080808] sm:text-5xl md:text-7xl">
                Advisory As
                <br />
                A Training Ground
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-[#080808]/60">
                The FP&A advisory track gives TTG members structured exposure to consulting-style problem solving, corporate finance, and operator-level execution. Members learn by working through real business questions with clear deliverables and accountability.
              </p>
            </div>
            <div className="overflow-hidden border-2 border-[#080808]/20">
              <Image
                src="/images/tabling/image2.png"
                alt="FP&A Advisory Work"
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
            <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">AREAS OF WORK</span>
            <div className="border-t-2 border-[#080808]/20" />
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <div key={area.label} className="flex flex-col gap-3 bg-cream p-6 md:p-8">
                <h3 className="font-serif text-base font-bold leading-tight text-[#080808]">{area.label}</h3>
                <p className="text-sm leading-relaxed text-[#080808]/50">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-2 border-[#080808]/20 p-5 md:p-8">
            <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
              MEMBERS MAY ALSO ASSIST COMPANIES WITH
            </span>
            <div className="flex flex-wrap gap-3">
              {ADDITIONAL.map((item) => (
                <span key={item} className="border border-[#080808]/20 px-3 py-1.5 font-mono text-[11px] text-[#080808]/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">PROJECT STRUCTURE</span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#080808] md:text-4xl">
                How Members Work
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#080808]/60">
                Projects are typically conducted by small, focused teams. Each engagement mirrors the structure of a professional consulting firm, with defined roles, clear deliverables, and direct client interaction.
              </p>
              <div className="mb-8 overflow-hidden border-2 border-[#080808]/20">
                <Image
                  src="/images/socials/image1.png"
                  alt="TTG members at work"
                  width={600}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
              {ROLES.map((role, i) => (
                <div key={role.title} className="flex gap-4 p-5 md:p-6">
                  <span className="mt-0.5 w-5 shrink-0 font-mono text-[11px] text-[#080808]/25">{`0${i + 1}`}</span>
                  <div>
                    <h4 className="mb-1 font-serif font-bold text-[#080808]">{role.title}</h4>
                    <p className="text-sm leading-relaxed text-[#080808]/50">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-20 lg:grid-cols-2">
          <div>
            <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">SKILLS MEMBERS DEVELOP</span>
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
            <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">CAREER OUTCOMES</span>
            <div className="mb-8 border-t-2 border-[#080808]/20" />
            <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
              {CAREERS.map((c) => (
                <div key={c.firm} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="font-serif text-sm font-bold text-[#080808]">{c.firm}</span>
                  <span className="font-mono text-[10px] text-[#080808]/40 sm:text-right">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-[#080808]">Interested in the advisory track?</h2>
            <p className="text-sm text-[#080808]/50">Applications open each academic quarter. All majors welcome.</p>
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
