import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { EXEC_BOARD, ADDITIONAL_LEADERSHIP, MEMBER_CLASSES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Team — Triton Trading Group',
  description:
    'Meet the leadership team behind Triton Trading Group — the executive board, department leads, and general members driving TTG\'s research, investments, and consulting work.',
}

export default function TeamPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 border-b border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-6">
            LEADERSHIP & TEAM
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#080808] leading-none mb-6">
            The People<br />Behind TTG
          </h1>
          <p className="text-[#080808]/60 text-base leading-relaxed max-w-2xl">
            Triton Trading Group is led by a team of student leaders responsible for guiding the organization&apos;s strategy, investment activities, consulting engagements, and member development.
          </p>
        </div>
      </section>

      {/* ── Executive Board ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-b border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
              EXECUTIVE BOARD
            </span>
            <div className="border-t border-[#080808]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#080808]/8">
            {EXEC_BOARD.map((member) => (
              <div key={member.role} className="bg-cream p-8 flex flex-col gap-3">
                {/* Name placeholder */}
                <div className="h-10 border border-[#080808]/8 bg-cream flex items-center px-3 mb-1">
                  <span className="font-mono text-[10px] text-[#080808]/25 tracking-widest uppercase">
                   {member.role}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#080808] text-base leading-tight mb-0.5">{member.name || "Member"}</h3>
                  <span className="font-mono text-[10px] text-[#0066ff] tracking-wider">{member.title}</span>
                </div>
                <p className="text-[#080808]/50 text-sm leading-relaxed border-t border-[#080808]/8 pt-3 mt-auto">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Leadership ─────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-b border-[#080808]/20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
              ADDITIONAL LEADERSHIP
            </span>
            <div className="border-t border-[#080808]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#080808]/8">
            {ADDITIONAL_LEADERSHIP.map((member) => (
              <div key={member.role} className="bg-cream p-8 flex flex-col gap-3">
                <div className="h-10 border border-[#080808]/8 bg-cream flex items-center px-3 mb-1">
                  <span className="font-mono text-[10px] text-[#080808]/25 tracking-widest uppercase">
                    — Name TBA —
                  </span>
                </div>
                <h3 className="font-bold text-[#080808] text-base">{member.role}</h3>
                <p className="text-[#080808]/50 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board Members ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-b border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
                BOARD MEMBERS
              </span>
              <div className="border-t border-[#080808]/20 mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#080808] tracking-tight mb-4">
                Department Leads
              </h2>
              <p className="text-[#080808]/60 text-sm leading-relaxed mb-8">
                Board Members support the Executive Board and help lead teams within TTG departments. They bridge strategy and execution — managing projects, mentoring members, and driving results.
              </p>
              <div className="space-y-3 text-sm text-[#080808]/60">
                {[
                  'Leading sector research teams in Asset Management',
                  'Managing project teams in FP&A engagements',
                  'Supporting quantitative research initiatives',
                  'Mentoring general members',
                ].map((resp) => (
                  <div key={resp} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#0066ff] mt-2 shrink-0" />
                    {resp}
                  </div>
                ))}
              </div>
            </div>

            {/* Board placeholder grid */}
            <div className="grid grid-cols-2 gap-px bg-[#080808]/8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-cream p-6 flex flex-col gap-2">
                  <div className="h-8 border border-[#080808]/8 bg-cream flex items-center px-2">
                    <span className="font-mono text-[9px] text-[#080808]/20 tracking-widest uppercase">Name TBA</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#080808]/30 tracking-wider uppercase">
                    Board Member
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── General Members ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-b border-[#080808]/20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
              GENERAL MEMBERS
            </span>
            <div className="border-t border-[#080808]/20" />
          </div>

          <p className="text-[#080808]/60 text-sm leading-relaxed mb-12 max-w-2xl">
            General Members contribute to research, investment analysis, and company advisory projects across TTG departments. Members are organized by graduating class.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#080808]/8">
            {MEMBER_CLASSES.map((cls) => (
              <div key={cls.year} className="bg-cream p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#080808] text-lg">{cls.year}</h3>
                  <span className="font-mono text-[10px] text-[#0066ff] tracking-widest border border-[#0066ff]/30 px-2 py-0.5">
                    {cls.status}
                  </span>
                </div>
                <p className="text-[#080808]/50 text-sm leading-relaxed mb-6">{cls.desc}</p>

                {/* Placeholder member slots */}
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-8 border border-[#080808]/8 bg-cream flex items-center px-3">
                      <span className="font-mono text-[9px] text-[#080808]/20 tracking-widest uppercase">— Member TBA —</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisors ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
                ADVISORS
              </span>
              <div className="border-t border-[#080808]/20 mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#080808] tracking-tight mb-4">
                Industry Mentors
              </h2>
              <p className="text-[#080808]/60 text-sm leading-relaxed mb-6">
                Triton Trading Group is supported by advisors and industry professionals who provide mentorship and strategic guidance.
              </p>
              <p className="text-[#080808]/60 text-sm leading-relaxed mb-8">
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
                    <span className="w-1 h-1 bg-[#080808]/30 shrink-0" />
                    <span className="text-[#080808]/50 text-sm">{bg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisor placeholder grid */}
            <div className="grid grid-cols-1 gap-px bg-[#080808]/8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-cream p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 border border-[#080808]/8 bg-cream shrink-0 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-[#080808]/20">TBA</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-cream w-32 mb-2" />
                    <div className="h-3 bg-cream w-24 mb-3" />
                    <div className="h-3 bg-cream w-full" />
                  </div>
                </div>
              ))}
              <div className="bg-cream p-6">
                <span className="font-mono text-[10px] text-[#080808]/30 tracking-widest uppercase">
                  Advisor positions being finalized
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-t border-[#080808]/20 bg-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#080808] mb-2">Want to join the team?</h2>
            <p className="text-[#080808]/50 text-sm">Applications open each academic quarter. All majors and backgrounds welcome.</p>
          </div>
          <a
            href="/#recruitment"
            className="font-mono text-sm tracking-widest uppercase border border-[#080808] text-[#080808] px-10 py-4 hover:bg-[#080808] hover:text-white transition-all duration-200 shrink-0"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
