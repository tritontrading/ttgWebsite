import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Financial Advisory - Triton Trading Group',
  description:
    'Choose the Triton Trading Group financial advisory path that fits you: prospective members exploring the program or organizations looking to hire student advisory services.',
}

const PATHS = [
  {
    href: '/advisory/members',
    eyebrow: 'FOR STUDENTS',
    title: 'Prospective Members',
    body:
      'Learn how TTG members train inside the FP&A track, what projects they work on, and how the advisory program prepares students for consulting, strategy, and finance roles.',
    bullets: [
      'Real client-style project experience',
      'Structured analyst-to-lead progression',
      'Application details and expected skills',
    ],
    cta: 'Explore The Program',
  },
  {
    href: '/advisory/hire',
    eyebrow: 'FOR FOUNDERS & TEAMS',
    title: 'Hire Our Services',
    body:
      'See how TTG supports early-stage companies with finance, operations, growth strategy, and technical implementation through focused student advisory engagements.',
    bullets: [
      'Research-driven deliverables',
      'Scoped advisory for startups and operators',
      'Direct inquiry path for new engagements',
    ],
    cta: 'View Service Offerings',
  },
]

export default function AdvisoryHubPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      <section className="border-b border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span className="mb-6 block font-mono text-[11px] tracking-[0.28em] uppercase text-[#080808]/35">
              FINANCIAL ADVISORY
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-[0.95] tracking-tight text-[#080808] sm:text-5xl md:text-7xl">
              Advisory Built
              <br />
              For Two Audiences
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#080808]/60 md:text-lg">
              TTG&apos;s advisory work serves both sides of the program: students developing real operating judgment, and organizations looking for structured support across finance, strategy, and execution.
            </p>
          </div>

          <div className="border border-[#080808]/15 bg-[#f4f5ec] p-6 md:p-8">
            <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
              HOW TO NAVIGATE THIS
            </span>
            <p className="text-sm leading-7 text-[#080808]/60">
              If you are a student evaluating TTG, start with the member track. If you are a founder, startup, or operator exploring support, go to the services page.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="PATHS"
            title="Choose Your Entry Point"
            description="The structure is simple on purpose: one route explains the internal member experience, and the other explains the external client offering."
            className="mb-10 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PATHS.map((path, index) => (
              <Link
                key={path.href}
                href={path.href}
                className={`group border border-[#080808]/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#080808]/40 md:p-8 ${
                  index === 0 ? 'bg-cream' : 'bg-[#f0f1e8]'
                }`}
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
                    {path.eyebrow}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/20 transition-transform duration-300 group-hover:translate-x-1">
                    OPEN
                  </span>
                </div>

                <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-[#080808] md:text-4xl">
                  {path.title}
                </h2>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#080808]/60 md:text-[15px]">
                  {path.body}
                </p>

                <div className="mb-10 space-y-3">
                  {path.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm text-[#080808]/70">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[#0066ff]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-[#080808]/15 pt-5">
                  <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#080808]">
                    {path.cta}
                  </span>
                  <span className="text-lg text-[#080808]/40 transition-transform duration-300 group-hover:translate-x-1">
                    -
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#080808]/15 px-5 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border border-[#080808]/15 bg-[#f7f8ef] p-6 md:grid-cols-3 md:p-8">
          <div>
            <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
              MEMBER TRACK
            </span>
            <p className="text-sm leading-relaxed text-[#080808]/60">
              Built for students who want applied exposure to consulting, corporate finance, and operator-style problem solving.
            </p>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
              CLIENT SERVICES
            </span>
            <p className="text-sm leading-relaxed text-[#080808]/60">
              Built for founders and teams looking for scoped support across finance, growth, operations, and technical execution.
            </p>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[11px] tracking-[0.22em] uppercase text-[#080808]/35">
              SHARED STANDARD
            </span>
            <p className="text-sm leading-relaxed text-[#080808]/60">
              Both paths run on the same TTG model: disciplined analysis, tight scope, and outputs designed to be used in real decision-making.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
