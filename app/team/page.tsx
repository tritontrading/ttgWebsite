import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'
import { ADDITIONAL_LEADERSHIP, EXEC_BOARD, MEMBER_CLASSES } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Team - Triton Trading Group',
  description:
    'Meet the leadership team behind Triton Trading Group - the executive board, department leads, and general members driving TTG\'s research, investments, and consulting work.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      <section className="border-b border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <span
            className="page-hero-reveal mb-6 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50"
            style={{ animationDelay: '0ms' }}
          >
            LEADERSHIP & TEAM
          </span>
          <h1
            className="page-hero-reveal mb-6 font-serif text-4xl font-bold leading-none text-[#080808] sm:text-5xl md:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            The People
            <br />
            Behind TTG
          </h1>
          <p
            className="page-hero-reveal max-w-2xl text-base leading-relaxed text-[#080808]/60"
            style={{ animationDelay: '200ms' }}
          >
            Triton Trading Group is led by a team of student leaders responsible for guiding the organization&apos;s strategy, investment activities, consulting engagements, and member development.
          </p>
        </div>
      </section>

      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                EXECUTIVE BOARD
              </span>
              <div className="border-t border-[#080808]/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {EXEC_BOARD.map((member) => (
              <div key={member.role} data-reveal className="card-hover flex flex-col gap-3 bg-cream p-6 md:p-8">
                <div className="mb-1 flex h-10 items-center border border-[#080808]/8 bg-cream px-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#080808]/25">
                    {member.role}
                  </span>
                </div>
                <div>
                  <h3 className="mb-0.5 text-base font-bold leading-tight text-[#080808]">
                    {member.name || 'Member'}
                  </h3>
                  <span className="font-mono text-[10px] tracking-wider text-[#0066ff]">{member.title}</span>
                </div>
                <p className="mt-auto border-t border-[#080808]/8 pt-3 text-sm leading-relaxed text-[#080808]/50">
                  {member.desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-[#080808]/20 bg-cream px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                ADDITIONAL LEADERSHIP
              </span>
              <div className="border-t border-[#080808]/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8 md:grid-cols-2" stagger={0.08}>
            {ADDITIONAL_LEADERSHIP.map((member) => (
              <div key={member.role} data-reveal className="card-hover flex flex-col gap-3 bg-cream p-6 md:p-8">
                <div className="mb-1 flex h-10 items-center border border-[#080808]/8 bg-cream px-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#080808]/25">
                    Name TBA
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#080808]">{member.role}</h3>
                <p className="text-sm leading-relaxed text-[#080808]/50">{member.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                  BOARD MEMBERS
                </span>
                <div className="mb-8 border-t border-[#080808]/20" />
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#080808] md:text-4xl">
                  Department Leads
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-[#080808]/60">
                  Board Members support the Executive Board and help lead teams within TTG departments. They bridge strategy and execution - managing projects, mentoring members, and driving results.
                </p>
                <div className="space-y-3 text-sm text-[#080808]/60">
                  {[
                    'Leading sector research teams in Asset Management',
                    'Managing project teams in FP&A engagements',
                    'Supporting quantitative research initiatives',
                    'Mentoring general members',
                  ].map((resp) => (
                    <div key={resp} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[#0066ff]" />
                      {resp}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8 sm:grid-cols-2" stagger={0.06} delay={0.1}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} data-reveal className="card-hover flex flex-col gap-2 bg-cream p-6">
                  <div className="flex h-8 items-center border border-[#080808]/8 bg-cream px-2">
                    <span className="font-mono text-[9px] tracking-widest uppercase text-[#080808]/20">Name TBA</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[#080808]/30">
                    Board Member
                  </span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[#080808]/20 bg-cream px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                GENERAL MEMBERS
              </span>
              <div className="border-t border-[#080808]/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mb-12 max-w-2xl text-sm leading-relaxed text-[#080808]/60">
              General Members contribute to research, investment analysis, and company advisory projects across TTG departments. Members are organized by graduating class.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8 md:grid-cols-3" stagger={0.09}>
            {MEMBER_CLASSES.map((cls) => (
              <div key={cls.year} data-reveal className="card-hover bg-cream p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#080808]">{cls.year}</h3>
                  <span className="border border-[#0066ff]/30 px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#0066ff]">
                    {cls.status}
                  </span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-[#080808]/50">{cls.desc}</p>

                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex h-8 items-center border border-[#080808]/8 bg-cream px-3">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#080808]/20">Member TBA</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                  ADVISORS
                </span>
                <div className="mb-8 border-t border-[#080808]/20" />
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#080808] md:text-4xl">
                  Industry Mentors
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-[#080808]/60">
                  Triton Trading Group is supported by advisors and industry professionals who provide mentorship and strategic guidance.
                </p>
                <p className="mb-8 text-sm leading-relaxed text-[#080808]/60">
                  Advisors assist the organization by providing insight into financial markets and business strategy, mentoring students pursuing careers in finance and consulting, and supporting the development of TTG programs and partnerships.
                </p>
                <div className="space-y-2">
                  {[
                    'Asset management',
                    'Investment banking',
                    'Venture capital',
                    'Consulting',
                    'Financial technology',
                  ].map((bg) => (
                    <div key={bg} className="flex items-center gap-3">
                      <span className="h-1 w-1 shrink-0 bg-[#080808]/30" />
                      <span className="text-sm text-[#080808]/50">{bg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8" delay={0.1}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#080808]/8 bg-cream">
                    <span className="font-mono text-[9px] text-[#080808]/20">TBA</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 h-4 w-32 bg-cream" />
                    <div className="mb-3 h-3 w-24 bg-cream" />
                    <div className="h-3 w-full bg-cream" />
                  </div>
                </div>
              ))}
              <div className="bg-cream p-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#080808]/30">
                  Advisor positions being finalized
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#080808]/20 bg-cream px-5 py-20 md:px-12 md:py-24">
        <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#080808]">Want to join the team?</h2>
            <p className="text-sm text-[#080808]/50">Applications open each academic quarter. All majors and backgrounds welcome.</p>
          </div>
          <ApplyNowLink className="w-full shrink-0 border border-[#080808] px-10 py-4 text-center font-mono text-sm tracking-widest uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white sm:w-auto">
            Apply Now
          </ApplyNowLink>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
