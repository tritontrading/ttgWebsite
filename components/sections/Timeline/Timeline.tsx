'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { TIMELINE_STEPS } from '@/lib/constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Image from 'next/image'

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const container = containerRef.current
    const line = lineRef.current
    if (!container || !line) return

    const nodes = container.querySelectorAll('.timeline-step')

    if (reducedMotion) {
      gsap.set(line, { attr: { y2: 1000 } })
      gsap.set(nodes, { opacity: 1, x: 0 })
      return
    }

    gsap.set(nodes, { opacity: 0, x: 30 })
    const svgHeight = 1000
    gsap.set(line, { attr: { y2: line.getAttribute('y1') || '0' } })

    const ctx = gsap.context(() => {
      gsap.to(line, {
        attr: { y2: svgHeight },
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 1,
        },
      })
      nodes.forEach((node) => {
        gsap.to(node, {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: node, start: 'top 75%', once: true },
        })
      })
    }, container)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="timeline" className="bg-cream py-32 px-6 md:px-12 border-t-2 border-[#080808]/20">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <div className="mb-6">
          <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase">
            MEMBER JOURNEY
          </span>
        </div>
        <div className="border-t-2 border-[#080808]/20 mb-16" />
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#080808] tracking-tight mb-20">
          From Recruit to Analyst
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 pointer-events-none">
            <svg className="w-px h-full" preserveAspectRatio="none" viewBox="0 0 1 1000">
              <line x1="0.5" y1="0" x2="0.5" y2="1000"
                stroke="rgba(8,8,8,0.08)" strokeWidth="2" />
              <line ref={lineRef} x1="0.5" y1="0" x2="0.5" y2="0"
                stroke="#0066ff" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex flex-col gap-16">
            {TIMELINE_STEPS.map((step, i) => {
              const isLeft = i % 2 === 1
              return (
                <div
                  key={i}
                  className="timeline-step relative grid grid-cols-[1fr_auto_1fr] gap-8 items-start"
                >
                  <div className={isLeft ? '' : 'text-right flex flex-col items-end'}>
                    {!isLeft && (
                      <>
                        <span className="font-mono text-[10px] text-[#0066ff] tracking-widest uppercase mb-2 block">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-bold text-[#080808] mb-2">{step.title}</h3>
                        <p className="text-[#080808]/50 text-sm leading-relaxed max-w-xs">
                          {step.description}
                        </p>
                        {step.image && (
                          <div className="mt-4 border border-[#080808]/20 inline-block">
                            <Image src={step.image} alt={step.title}
                              width={240} height={160}
                              className="w-60 h-40 object-cover opacity-80" />
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex flex-col items-center pt-1">
                    <div className="w-3 h-3 border-2 border-[#0066ff] bg-cream relative z-10" />
                  </div>

                  <div>
                    {isLeft && (
                      <>
                        <span className="font-mono text-[10px] text-[#0066ff] tracking-widest uppercase mb-2 block">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-bold text-[#080808] mb-2">{step.title}</h3>
                        <p className="text-[#080808]/50 text-sm leading-relaxed max-w-xs">
                          {step.description}
                        </p>
                        {step.image && (
                          <div className="mt-4 border border-[#080808]/20 inline-block">
                            <Image src={step.image} alt={step.title}
                              width={240} height={160}
                              className="w-60 h-40 object-cover opacity-80" />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
