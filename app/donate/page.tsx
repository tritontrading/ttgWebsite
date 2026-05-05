import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Donate - Triton Trading Group',
  description:
    'Support Triton Trading Group and help us build the next generation of financial analysts, quantitative researchers, and strategic consultants at UCSD.',
}

const IMPACT_ITEMS = [
  {
    label: 'EVENTS & SPEAKERS',
    detail:
      'Fund industry speaker events, networking dinners, and finance competitions that give members real access to professionals.',
  },
  {
    label: 'TOOLS & RESOURCES',
    detail:
      'Cover subscriptions to data platforms, modeling software, and research databases that power our work.',
  },
  {
    label: 'MEMBER DEVELOPMENT',
    detail:
      'Support training programs, workshops, and recruiting prep sessions that help members land roles in finance and consulting.',
  },
  {
    label: 'COMMUNITY & CULTURE',
    detail:
      'Help run socials, retreats, and team-building activities that make TTG a real community, not just a résumé line.',
  },
]

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      {/* ── HERO ── */}
      <section className="border-b border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <span
            className="page-hero-reveal mb-6 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50"
            style={{ animationDelay: '0ms' }}
          >
            SUPPORT TTG
          </span>
          <h1
            className="page-hero-reveal mb-6 font-serif text-4xl font-bold leading-none text-[#080808] sm:text-5xl md:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            Help Us Build
            <br />
            What&apos;s Next
          </h1>
          <p
            className="page-hero-reveal mb-10 max-w-2xl text-base leading-relaxed text-[#080808]/60"
            style={{ animationDelay: '200ms' }}
          >
            Triton Trading Group is a student-run organization at UCSD. Every dollar goes directly toward
            resources, events, and experiences that give our members a genuine edge — in the classroom and
            in their careers.
          </p>
          <a
            href="https://gofund.me/5648b15d5"
            target="_blank"
            rel="noopener noreferrer"
            className="page-hero-reveal inline-flex items-center gap-3 border-2 border-[#c79a3b] bg-[#c79a3b] px-8 py-4 font-mono text-sm tracking-[0.24em] uppercase text-[#0d1b3d] transition-all duration-200 hover:bg-transparent hover:text-[#0d1b3d]"
            style={{ animationDelay: '300ms' }}
          >
            Donate on GoFundMe
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── WHERE IT GOES ── */}
      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                WHERE IT GOES
              </span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <div className="grid grid-cols-1 gap-px bg-[#080808]/15 sm:grid-cols-2">
                {IMPACT_ITEMS.map((item) => (
                  <div key={item.label} className="card-hover bg-cream p-6 md:p-8">
                    <span className="mb-3 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#c79a3b]">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed text-[#080808]/60">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="px-5 py-20 md:px-12 md:py-24">
        <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-2 border-[#080808]/20 p-6 md:flex-row md:items-center md:p-10">
          <div>
            <span className="mb-3 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
              MAKE AN IMPACT
            </span>
            <h2 className="mb-2 font-serif text-3xl font-bold text-[#080808]">
              Ready to support?
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#080808]/55">
              Any amount helps. Your contribution directly funds the programs, tools, and community
              that make TTG one of UCSD&apos;s most rigorous student finance organizations.
            </p>
          </div>
          <a
            href="https://gofund.me/5648b15d5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-3 border-2 border-[#c79a3b] bg-[#c79a3b] px-10 py-4 font-mono text-sm tracking-widest uppercase text-[#0d1b3d] transition-all duration-200 hover:bg-transparent hover:text-[#0d1b3d] sm:w-auto"
          >
            Donate Now
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
