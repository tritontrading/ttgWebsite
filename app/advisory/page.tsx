import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Financial Advisory — Triton Trading Group',
  description:
    'TTG\'s Financial Planning & Analysis department provides hands-on consulting experience with companies, startups, and organizations across finance, operations, and strategy.',
}

const AREAS = [
  { label: 'Financial Analysis & Forecasting',         desc: 'Build financial models, conduct variance analysis, and develop multi-year forecasting frameworks for client organizations.' },
  { label: 'Market Research & Competitive Analysis',   desc: 'Conduct industry research, map competitive landscapes, and surface market intelligence to inform strategy.' },
  { label: 'Business Strategy Development',            desc: 'Structure and facilitate strategic planning engagements, from go-to-market planning to growth roadmapping.' },
  { label: 'Operational Improvements',                 desc: 'Identify inefficiencies in business processes and design solutions to improve throughput and reduce cost.' },
  { label: 'Technology Consulting & Implementation',   desc: 'Advise on digital infrastructure, workflow automation, and system implementation for growing organizations.' },
  { label: 'AI Integration & API Systems',             desc: 'Design and implement AI-driven workflows, API integrations, and data automation pipelines.' },
]

const ADDITIONAL = [
  'Website development and digital infrastructure',
  'Workflow optimization and operational systems',
  'Marketing and growth strategy',
  'Financial planning and budgeting',
]

const ROLES = [
  { title: 'Engagement Lead',    desc: 'Manages the project and client relationship. Sets deliverables, timelines, and communication cadence.' },
  { title: 'Senior Consultant',  desc: 'Leads analysis and project coordination. Owns the core work product and guides junior team members.' },
  { title: 'Consultant',         desc: 'Conducts research and develops insights. Builds models, slide decks, and analytical frameworks.' },
  { title: 'Analyst',            desc: 'Supports data gathering and analysis. Executes research tasks and contributes to deliverables.' },
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
  { firm: 'Management Consulting',   note: 'McKinsey, Bain, BCG, Deloitte' },
  { firm: 'Venture Capital',         note: 'Early-stage and growth investing' },
  { firm: 'Corporate Strategy',      note: 'In-house strategy & finance roles' },
  { firm: 'Entrepreneurship',        note: 'Founding and operating startups' },
  { firm: 'Investment Banking',      note: 'Advisory and M&A execution' },
  { firm: 'Private Equity',          note: 'Portfolio operations & value creation' },
]

export default function AdvisoryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 border-b-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-6">
                02 — FINANCIAL PLANNING & ANALYSIS
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#080808] leading-none mb-6">
                Real-World<br />Advisory Work
              </h1>
              <p className="text-[#080808]/60 text-base leading-relaxed max-w-lg">
                The FP&A department provides students with hands-on experience working directly with companies, startups, and organizations. Members participate in real consulting-style projects — helping organizations analyze financial performance, improve operations, and develop strategic solutions.
              </p>
            </div>
            <div className="border-2 border-[#080808]/20 overflow-hidden">
              <Image
                src="/images/tabling/image2.png"
                alt="FP&A Advisory Work"
                width={700}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What we do ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-b-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">AREAS OF WORK</span>
            <div className="border-t-2 border-[#080808]/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#080808]/15">
            {AREAS.map((area) => (
              <div key={area.label} className="bg-cream p-8 flex flex-col gap-3">
                <h3 className="font-serif font-bold text-[#080808] text-base leading-tight">{area.label}</h3>
                <p className="text-[#080808]/50 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-2 border-[#080808]/20 p-8">
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
              MEMBERS MAY ALSO ASSIST COMPANIES WITH
            </span>
            <div className="flex flex-wrap gap-3">
              {ADDITIONAL.map((item) => (
                <span key={item} className="font-mono text-[11px] text-[#080808]/60 border border-[#080808]/20 px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo + Project structure ──────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-b-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">PROJECT STRUCTURE</span>
              <div className="border-t-2 border-[#080808]/20 mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#080808] mb-4">
                How Projects Work
              </h2>
              <p className="text-[#080808]/60 text-sm leading-relaxed mb-8">
                Projects are typically conducted by small, focused teams. Each engagement mirrors the structure of a professional consulting firm — with defined roles, clear deliverables, and direct client interaction.
              </p>
              <div className="border-2 border-[#080808]/20 overflow-hidden mb-8">
                <Image
                  src="/images/socials/image1.png"
                  alt="TTG members at work"
                  width={600}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
              {ROLES.map((role, i) => (
                <div key={role.title} className="p-6 flex gap-4">
                  <span className="font-mono text-[11px] text-[#080808]/25 mt-0.5 shrink-0 w-5">{`0${i + 1}`}</span>
                  <div>
                    <h4 className="font-serif font-bold text-[#080808] mb-1">{role.title}</h4>
                    <p className="text-[#080808]/50 text-sm leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills + Careers ──────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">SKILLS MEMBERS DEVELOP</span>
            <div className="border-t-2 border-[#080808]/20 mb-8" />
            <div className="space-y-3">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-sm text-[#080808]">
                  <span className="w-1 h-1 bg-[#0066ff] shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">CAREER OUTCOMES</span>
            <div className="border-t-2 border-[#080808]/20 mb-8" />
            <div className="border-2 border-[#080808]/20 divide-y-2 divide-[#080808]/15">
              {CAREERS.map((c) => (
                <div key={c.firm} className="flex items-center justify-between px-5 py-4">
                  <span className="font-serif font-bold text-[#080808] text-sm">{c.firm}</span>
                  <span className="font-mono text-[10px] text-[#080808]/40">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-t-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#080808] mb-2">Interested in FP&A?</h2>
            <p className="text-[#080808]/50 text-sm">Applications open each academic quarter. All majors welcome.</p>
          </div>
          <a
            href="/#recruitment"
            className="font-mono text-sm tracking-widest uppercase border-2 border-[#080808] text-[#080808] px-10 py-4 hover:bg-[#080808] hover:text-cream transition-all duration-200 shrink-0"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
