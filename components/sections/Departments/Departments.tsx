'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const DEPTS = [
  {
    num: '01',
    label: 'Asset Management',
    subtitle: 'Student Managed Investment Fund',
    body: 'The Asset Management department manages TTG\'s student-led investment portfolio. Members conduct equity research, develop financial models, and present investment ideas through a structured investment committee process. The portfolio follows a disciplined investment framework focused on risk management, diversification, and long-term value creation.',
    items: [
      'Conduct company and sector research',
      'Build financial models and valuation frameworks',
      'Write investment memos',
      'Present investment ideas to the Investment Committee',
      'Monitor portfolio positions and performance',
    ],
    careersLabel: 'CAREERS',
    careers: 'Asset management · Hedge funds · Investment banking',
    photo: '/images/meetings/image1.png',
  },
  {
    num: '02',
    label: 'Financial Planning & Analysis',
    subtitle: 'Real-World Experience with Companies',
    body: 'The FP&A department provides hands-on experience working directly with companies, startups, and organizations. Members participate in real consulting-style projects where they help organizations analyze financial performance, improve operations, and develop strategic solutions. This department combines elements of corporate finance, consulting, and operational strategy.',
    items: [
      'Financial analysis and forecasting',
      'Market research and competitive analysis',
      'Business strategy development',
      'Technology consulting and system implementation',
      'AI integration and API systems',
    ],
    careersLabel: 'CAREERS',
    careers: 'Consulting · Venture capital · Corporate strategy · Entrepreneurship',
    photo: '/images/tabling/image1.png',
  },
  {
    num: '03',
    label: 'Quantitative Finance',
    subtitle: 'Data-Driven Investing & Algorithmic Trading',
    body: 'The Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies. Members develop systematic investment models using Python, QuantConnect, Alpaca, and statistical research workflows. The quant team is specifically sponsored by QuantConnect and combines finance, mathematics, and computer science to analyze markets and develop automated trading strategies.',
    items: [
      'Algorithmic trading strategies',
      'Factor-based investing',
      'Statistical arbitrage',
      'Market data analysis',
      'Machine learning applications in finance',
    ],
    careersLabel: 'CAREERS',
    careers: 'Quant trading · Hedge funds · Fintech · Data science',
    photo: '/images/meetings/image2.png',
  },
]

function TextPanel({ dept, align }: { dept: typeof DEPTS[0]; align: 'left' | 'right' }) {
  return (
    <div className="h-full flex flex-col justify-center gap-6 items-start">
      <div className="space-y-1">
        <span className="font-mono text-[11px] text-[#080808]/40 tracking-widest uppercase">
          {dept.num} — {dept.label}
        </span>
        <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#080808] leading-tight">
          {dept.subtitle}
        </h3>
      </div>

      <p className="text-[#080808]/60 text-sm leading-relaxed max-w-sm">
        {dept.body}
      </p>

      <ul className="space-y-2">
        {dept.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-[#080808]">
            <span className="mt-1.5 w-1 h-1 shrink-0 bg-blue rounded-none" />
            {item}
          </li>
        ))}
      </ul>

      <div>
        <span className="font-mono text-[10px] text-[#080808]/30 tracking-widest uppercase block mb-1">
          {dept.careersLabel}
        </span>
        <span className="font-mono text-[11px] text-[#080808]/50">{dept.careers}</span>
      </div>
    </div>
  )
}

export function Departments() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Initial states set via JSX style props — no gsap.set needed here

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })

      if (reducedMotion) {
        gsap.set('.dept-text-am',    { opacity: 1, x: 0 })
        gsap.set('.dept-graphic-wrap', { left: '50%' })
        return
      }

      // ── Phase 0: Entry — AM appears ──────────────────────────────────────
      tl.to('.dept-text-am',       { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' })
      tl.to('.dept-graphic-wrap',  { opacity: 1, duration: 0.6, ease: 'power2.out' }, '<')

      // ── Phase 1: Hold AM ─────────────────────────────────────────────────
      tl.to('.dept-text-am', { opacity: 1, duration: 2.5 })

      // ── Phase 2: Transition AM → FPA ─────────────────────────────────────
      tl.to('.dept-text-am', { opacity: 0, x: -40, duration: 0.5, ease: 'power2.in' })
      tl.to('.dept-graphic-wrap', { left: '0%', duration: 2.2, ease: 'power2.inOut' }, '<')
      tl.to('.dept-photo-am',  { opacity: 0, duration: 0.6 }, '<+=0.8')
      tl.to('.dept-photo-fpa', { opacity: 1, duration: 0.6 }, '<')
      tl.to('.dept-text-fpa', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '<+=0.5')

      // ── Phase 3: Hold FPA ─────────────────────────────────────────────────
      tl.to('.dept-text-fpa', { opacity: 1, duration: 2.5 })

      // ── Phase 4: Transition FPA → Quant ──────────────────────────────────
      tl.to('.dept-text-fpa', { opacity: 0, x: 40, duration: 0.5, ease: 'power2.in' })
      tl.to('.dept-graphic-wrap', { left: '50%', duration: 2.2, ease: 'power2.inOut' }, '<')
      tl.to('.dept-photo-fpa',   { opacity: 0, duration: 0.6 }, '<+=0.8')
      tl.to('.dept-photo-quant', { opacity: 1, duration: 0.6 }, '<')
      tl.to('.dept-text-quant', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '<+=0.5')

      // ── Phase 5: Hold Quant ──────────────────────────────────────────────
      tl.to('.dept-text-quant', { opacity: 1, duration: 2.5 })
    }, container)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      id="departments"
      ref={containerRef}
      className="relative bg-cream"
      style={{ height: '600vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-cream">

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 h-16 border-b border-[#080808]/20 flex items-center px-8 md:px-14 z-20 bg-cream">
          <span className="font-mono text-[11px] text-[#080808]/35 tracking-widest uppercase">
            DEPARTMENTS
          </span>
          <div className="ml-auto flex gap-8 font-mono text-[11px] tracking-wider text-[#080808]/25">
            {DEPTS.map((d) => (
              <span key={d.num}>{d.num} — {d.label}</span>
            ))}
          </div>
        </div>

        {/* ── AM text (left side) ───────────────────────────────────────── */}
        <div
          className="dept-text-am absolute top-16 bottom-0 left-0 w-1/2 flex items-center px-8 md:px-14 pointer-events-none"
          style={{ opacity: 0, transform: 'translateX(-40px)' }}
        >
          <TextPanel dept={DEPTS[0]} align="left" />
        </div>

        {/* ── FPA text (right side) ─────────────────────────────────────── */}
        <div
          className="dept-text-fpa absolute top-16 bottom-0 right-0 w-1/2 flex items-center px-8 md:px-14 pointer-events-none"
          style={{ opacity: 0, transform: 'translateX(40px)' }}
        >
          <TextPanel dept={DEPTS[1]} align="right" />
        </div>

        {/* ── Quant text (left side) ────────────────────────────────────── */}
        <div
          className="dept-text-quant absolute top-16 bottom-0 left-0 w-1/2 flex items-center px-8 md:px-14 pointer-events-none"
          style={{ opacity: 0, transform: 'translateX(-40px)' }}
        >
          <TextPanel dept={DEPTS[2]} align="left" />
        </div>

        {/* ── Traveling photo panel ─────────────────────────────────────── */}
        <div
          className="dept-graphic-wrap absolute top-16 bottom-0 w-1/2"
          style={{ left: '50%' }}
        >
          <div className="absolute inset-x-6 inset-y-8 border-2 border-[#080808]/20 overflow-hidden bg-[#f0f1e8]">
            {/* AM photo */}
            <div className="dept-photo-am absolute inset-0">
              <Image
                src={DEPTS[0].photo}
                alt={DEPTS[0].label}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            {/* FPA photo */}
            <div className="dept-photo-fpa absolute inset-0" style={{ opacity: 0 }}>
              <Image
                src={DEPTS[1].photo}
                alt={DEPTS[1].label}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            {/* Quant photo */}
            <div className="dept-photo-quant absolute inset-0" style={{ opacity: 0 }}>
              <Image
                src={DEPTS[2].photo}
                alt={DEPTS[2].label}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="dept-progress-dot w-1.5 h-1.5 bg-[#080808]/20"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
