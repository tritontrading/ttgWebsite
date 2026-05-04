import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'
import { BOARD_MEMBERS, EXEC_BOARD } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Team - Triton Trading Group',
  description:
    'Meet the C-Suite and board members leading Triton Trading Group — student leaders driving TTG\'s investment research, quantitative finance, and FP&A consulting operations at UCSD.',
}

export default function TeamPage() {
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
            TTG is run by a tight team of student leaders across finance, strategy, and technology. Our C-Suite sets the vision and direction. Our board members lead the departments, manage the work, and keep standards high day to day.
          </p>
        </div>
      </section>

      {/* ── C-SUITE ── */}
      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                C-SUITE
              </span>
              <div className="border-t border-[#080808]/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {EXEC_BOARD.map((member) => (
              <div key={member.role} data-reveal className="card-hover flex flex-col overflow-hidden bg-cream">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#eff0e7]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name || member.role}
                      fill
                      className="board-headshot object-cover object-top"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#080808]/20">
                        Photo TBA
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-3 p-6 md:p-8">
                  <div className="flex h-10 items-center border border-[#080808]/8 px-3">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#080808]/25">
                      {member.role}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-base font-bold leading-tight text-[#080808]">
                      {member.name || 'Name TBA'}
                    </h3>
                    <span className="font-mono text-[10px] tracking-wider text-[#0066ff]">{member.title}</span>
                  </div>
                  <p className="border-t border-[#080808]/8 pt-3 text-sm leading-relaxed text-[#080808]/50">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOARD MEMBERS ── */}
      <section className="border-b border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                BOARD MEMBERS
              </span>
              <div className="border-t border-[#080808]/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 gap-px bg-[#080808]/8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {BOARD_MEMBERS.map((member) => (
              <div key={member.role} data-reveal className="card-hover flex flex-col overflow-hidden bg-cream">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#eff0e7]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name || member.role}
                      fill
                      className="board-headshot object-cover object-top"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#080808]/20">
                        Photo TBA
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-3 p-6 md:p-8">
                  <div className="flex h-10 items-center border border-[#080808]/8 px-3">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#080808]/25">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-base font-bold leading-tight text-[#080808]">
                    {member.name || 'Name TBA'}
                  </h3>
                  <p className="border-t border-[#080808]/8 pt-3 text-sm leading-relaxed text-[#080808]/50">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-20 md:px-12 md:py-24">
        <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-[#080808]/15 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <span className="mb-3 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
              JOIN THE TEAM
            </span>
            <h2 className="mb-2 font-serif text-3xl font-bold text-[#080808]">Want to be part of this?</h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#080808]/55">
              Applications open each academic quarter. We recruit across all majors — what matters is curiosity, commitment, and a drive to do serious work.
            </p>
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
