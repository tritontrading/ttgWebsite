import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Donate - Triton Trading Group',
  description:
    'Support Triton Trading Group — a UCSD 501(c)(3) nonprofit that has outperformed the S&P 500 roughly 5x in its first three months. Help us fund analyst training, a flagship student finance conference, an incubator, and a live student-managed fund.',
}

const STATS = [
  { value: '$500K', label: 'FUNDRAISING GOAL' },
  { value: '~5×', label: 'S&P 500 OUTPERFORMANCE' },
  { value: '$1M+', label: 'CUMULATIVE P&L' },
  { value: '35', label: 'ACTIVE POSITIONS' },
]

const FUND_USE = [
  {
    label: 'ANALYST TRAINING',
    detail:
      'A rigorous curriculum that turns undergrads into analysts who can actually compete — real modeling, real process, real review cadence.',
  },
  {
    label: 'STUDENT FINANCE CONFERENCE',
    detail:
      'A flagship annual conference bringing together student investors, practitioners, and researchers from across the country.',
  },
  {
    label: 'ENTREPRENEURSHIP INCUBATOR',
    detail:
      'A structured program for student founders and operators to build alongside TTG\'s finance and strategy talent.',
  },
  {
    label: 'ALUMNI NETWORK',
    detail:
      'Formalize the alumni pipeline — connecting current members with TTG graduates who are already working in the industry.',
  },
  {
    label: 'LIVE FUND SEED CAPITAL',
    detail:
      'Seed capital to transition our paper trading portfolio — already generating over $1M in cumulative P&L — into a live, student-managed fund.',
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
            501(c)(3) EDUCATIONAL NONPROFIT · TAX-DEDUCTIBLE
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
            className="page-hero-reveal mb-4 max-w-2xl text-base leading-relaxed text-[#080808]/60"
            style={{ animationDelay: '200ms' }}
          >
            Three months ago we started TTG&apos;s paper trading portfolio with one question: can a student-run
            team actually compete with the market? Today we have 35 positions, over $1M in cumulative P&L,
            and roughly 5× the S&P 500&apos;s return over the same window.
          </p>
          <p
            className="page-hero-reveal mb-10 max-w-2xl text-base leading-relaxed text-[#080808]/60"
            style={{ animationDelay: '250ms' }}
          >
            We&apos;re raising $500,000 to fund the next phase — analyst training, a flagship student finance
            conference, an entrepreneurship incubator, alumni network buildout, and seed capital for a live
            student-managed fund. Donations are 100% tax-deductible.
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

      {/* ── STATS ── */}
      <section className="border-b border-[#080808]/20 px-5 py-16 md:px-12 md:py-20">
        <ScrollReveal className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#080808]/15 md:grid-cols-4" stagger={0.08}>
          {STATS.map((stat) => (
            <div key={stat.label} data-reveal className="bg-cream px-6 py-8 md:px-10 md:py-10">
              <div className="mb-2 font-serif text-4xl font-bold text-[#0d1b3d] md:text-5xl">{stat.value}</div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#080808]/50">{stat.label}</div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* ── THE STORY ── */}
      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-12 md:gap-20 lg:grid-cols-2">
              <div>
                <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                  WHY WE BUILT THIS
                </span>
                <div className="mb-8 border-t-2 border-[#080808]/20" />
                <h2 className="mb-6 font-serif text-3xl font-bold text-[#080808] md:text-4xl">
                  The existing path wasn&apos;t producing the talent the industry needs.
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-[#080808]/60">
                  Résumé-padded clubs, slow-moving committees, recruiting pipelines that reward who you know
                  over what you can do. We started TTG because that system wasn&apos;t working — for students
                  or for the industry.
                </p>
                <p className="text-sm leading-relaxed text-[#080808]/60">
                  The discipline is institutional. The team is undergrads. We&apos;ve spent months trying to
                  formalize a Student Managed Investment Fund with UCSD. That conversation hasn&apos;t moved.
                  We&apos;re not waiting anymore.
                </p>
              </div>
              <div>
                <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                  WHO WE&apos;RE ASKING
                </span>
                <div className="mb-8 border-t-2 border-[#080808]/20" />
                <div className="space-y-5">
                  <div className="border border-[#080808]/15 bg-[#f7f8ef] p-5">
                    <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#c79a3b]">UC ALUMNI</span>
                    <p className="text-sm leading-relaxed text-[#080808]/60">
                      If you remember needing a break early in your career — and wish there had been a group
                      doing what TTG is doing — this is how you pay it forward.
                    </p>
                  </div>
                  <div className="border border-[#080808]/15 bg-[#f7f8ef] p-5">
                    <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#c79a3b]">PHILANTHROPISTS</span>
                    <p className="text-sm leading-relaxed text-[#080808]/60">
                      If you believe student-led institutions can outwork the bureaucracies above them —
                      the track record is already here. We&apos;re asking for your support to scale it.
                    </p>
                  </div>
                  <div className="border border-[#080808]/15 bg-[#f7f8ef] p-5">
                    <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#c79a3b]">TAX DEDUCTIBILITY</span>
                    <p className="text-sm leading-relaxed text-[#080808]/60">
                      TTG is a registered 501(c)(3) educational nonprofit. Donations are 100% tax-deductible.
                      Every donor receives an official receipt with our EIN. IRS determination letter available on request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHERE IT GOES ── */}
      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
              WHERE THE $500K GOES
            </span>
            <div className="mb-8 border-t-2 border-[#080808]/20" />
            <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
              {FUND_USE.map((item, index) => (
                <div key={item.label} className="flex items-start gap-5 px-5 py-6 transition-colors duration-200 hover:bg-[#f4f5ec] md:px-8">
                  <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#c79a3b]">
                    0{index + 1}
                  </span>
                  <div>
                    <span className="mb-1 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#080808]/70">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed text-[#080808]/55">{item.detail}</p>
                  </div>
                </div>
              ))}
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
              Any amount helps. 100% tax-deductible. Every donor receives an official receipt with our EIN.
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
