'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
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

function TextPanel({ dept }: { dept: typeof DEPTS[0] }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-6">
      <div className="space-y-1">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/40">
          {dept.num} - {dept.label}
        </span>
        <h3 className="font-serif text-3xl font-bold leading-tight text-[#080808] lg:text-4xl">
          {dept.subtitle}
        </h3>
      </div>

      <p className="max-w-sm text-sm leading-relaxed text-[#080808]/60">
        {dept.body}
      </p>

      <ul className="space-y-2">
        {dept.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-[#080808]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-none bg-blue" />
            {item}
          </li>
        ))}
      </ul>

      <div>
        <span className="mb-1 block font-mono text-[10px] tracking-widest uppercase text-[#080808]/30">
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
    if (window.matchMedia('(max-width: 1023px)').matches) return

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
        gsap.set('.dept-text-am', { opacity: 1, x: 0 })
        gsap.set('.dept-graphic-wrap', { left: '50%' })
        return
      }

      tl.to('.dept-text-am', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' })
      tl.to('.dept-graphic-wrap', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '<')

      tl.to('.dept-text-am', { opacity: 1, duration: 2.5 })

      tl.to('.dept-text-am', { opacity: 0, x: -40, duration: 0.5, ease: 'power2.in' })
      tl.to('.dept-graphic-wrap', { left: '0%', duration: 2.2, ease: 'power2.inOut' }, '<')
      tl.to('.dept-photo-am', { opacity: 0, duration: 0.6 }, '<+=0.8')
      tl.to('.dept-photo-fpa', { opacity: 1, duration: 0.6 }, '<')
      tl.to('.dept-text-fpa', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '<+=0.5')

      tl.to('.dept-text-fpa', { opacity: 1, duration: 2.5 })

      tl.to('.dept-text-fpa', { opacity: 0, x: 40, duration: 0.5, ease: 'power2.in' })
      tl.to('.dept-graphic-wrap', { left: '50%', duration: 2.2, ease: 'power2.inOut' }, '<')
      tl.to('.dept-photo-fpa', { opacity: 0, duration: 0.6 }, '<+=0.8')
      tl.to('.dept-photo-quant', { opacity: 1, duration: 0.6 }, '<')
      tl.to('.dept-text-quant', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '<+=0.5')

      tl.to('.dept-text-quant', { opacity: 1, duration: 2.5 })
    }, container)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="departments" className="border-t border-[#080808]/20 bg-cream">
      <div className="px-5 py-20 md:px-12 lg:hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/35">
              DEPARTMENTS
            </span>
          </div>
          <div className="mb-10 border-t border-[#080808]/20" />

          <div className="space-y-6">
            {DEPTS.map((dept) => (
              <article key={dept.num} className="border border-[#080808]/20 bg-[#f7f8ef]">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#080808]/15">
                  <Image
                    src={dept.photo}
                    alt={dept.label}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="p-5">
                  <TextPanel dept={dept} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section
        ref={containerRef}
        className="relative hidden bg-cream lg:block"
        style={{ height: '600vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-cream">
          <div className="absolute top-0 left-0 right-0 z-20 flex h-16 items-center border-b border-[#080808]/20 bg-cream px-8 md:px-14">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/35">
              DEPARTMENTS
            </span>
            <div className="ml-auto flex gap-8 font-mono text-[11px] tracking-wider text-[#080808]/25">
              {DEPTS.map((d) => (
                <span key={d.num}>{d.num} - {d.label}</span>
              ))}
            </div>
          </div>

          <div
            className="dept-text-am pointer-events-none absolute top-16 bottom-0 left-0 flex w-1/2 items-center px-8 md:px-14"
            style={{ opacity: 0, transform: 'translateX(-40px)' }}
          >
            <TextPanel dept={DEPTS[0]} />
          </div>

          <div
            className="dept-text-fpa pointer-events-none absolute top-16 right-0 bottom-0 flex w-1/2 items-center px-8 md:px-14"
            style={{ opacity: 0, transform: 'translateX(40px)' }}
          >
            <TextPanel dept={DEPTS[1]} />
          </div>

          <div
            className="dept-text-quant pointer-events-none absolute top-16 bottom-0 left-0 flex w-1/2 items-center px-8 md:px-14"
            style={{ opacity: 0, transform: 'translateX(-40px)' }}
          >
            <TextPanel dept={DEPTS[2]} />
          </div>

          <div
            className="dept-graphic-wrap absolute top-16 bottom-0 w-1/2"
            style={{ left: '50%' }}
          >
            <div className="absolute inset-x-6 inset-y-8 overflow-hidden border-2 border-[#080808]/20 bg-[#f0f1e8]">
              <div className="dept-photo-am absolute inset-0">
                <Image
                  src={DEPTS[0].photo}
                  alt={DEPTS[0].label}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="dept-photo-fpa absolute inset-0" style={{ opacity: 0 }}>
                <Image
                  src={DEPTS[1].photo}
                  alt={DEPTS[1].label}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
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

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="dept-progress-dot h-1.5 w-1.5 bg-[#080808]/20" />
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
