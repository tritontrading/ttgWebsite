'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { TIMELINE_STEPS } from '@/lib/constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

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
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: node, start: 'top 75%', once: true },
        })
      })
    }, container)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="timeline" className="border-t-2 border-[#080808]/20 bg-cream px-5 py-20 md:px-12 md:py-32">
      <div ref={containerRef} className="mx-auto max-w-4xl">
        <div className="mb-6">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
            MEMBER JOURNEY
          </span>
        </div>
        <div className="mb-10 border-t-2 border-[#080808]/20 md:mb-16" />
        <h2 className="mb-12 font-serif text-4xl font-bold tracking-tight text-[#080808] md:mb-20 md:text-5xl">
          From Recruit to Analyst
        </h2>

        <div className="relative">
          <div className="pointer-events-none absolute top-0 bottom-0 left-[5px] md:left-[calc(50%-1px)]">
            <svg className="h-full w-px" preserveAspectRatio="none" viewBox="0 0 1 1000">
              <line x1="0.5" y1="0" x2="0.5" y2="1000" stroke="rgba(8,8,8,0.08)" strokeWidth="2" />
              <line ref={lineRef} x1="0.5" y1="0" x2="0.5" y2="0" stroke="#0066ff" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {TIMELINE_STEPS.map((step, i) => {
              const isLeft = i % 2 === 1

              return (
                <div
                  key={i}
                  className="timeline-step relative grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 md:grid-cols-[1fr_auto_1fr] md:gap-8"
                >
                  <div className={`${isLeft ? 'md:order-1' : 'md:order-1 md:flex md:flex-col md:items-end md:text-right'} hidden md:block`}>
                    {!isLeft && (
                      <>
                        <span className="mb-2 block font-mono text-[10px] tracking-widest uppercase text-[#0066ff]">
                          {step.year}
                        </span>
                        <h3 className="mb-2 text-xl font-bold text-[#080808]">{step.title}</h3>
                        <p className="max-w-xs text-sm leading-relaxed text-[#080808]/50">
                          {step.description}
                        </p>
                        {step.image && (
                          <div className="mt-4 inline-block border border-[#080808]/20">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={240}
                              height={160}
                              className="h-40 w-60 object-cover opacity-80"
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex flex-col items-center pt-1 md:order-2">
                    <div className="relative z-10 h-3 w-3 border-2 border-[#0066ff] bg-cream" />
                  </div>

                  <div className="md:order-3">
                    <div className="md:hidden">
                      <span className="mb-2 block font-mono text-[10px] tracking-widest uppercase text-[#0066ff]">
                        {step.year}
                      </span>
                      <h3 className="mb-2 text-xl font-bold text-[#080808]">{step.title}</h3>
                      <p className="max-w-sm text-sm leading-relaxed text-[#080808]/50">
                        {step.description}
                      </p>
                      {step.image && (
                        <div className="mt-4 inline-block max-w-full border border-[#080808]/20">
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={240}
                            height={160}
                            className="h-auto w-full max-w-[240px] object-cover opacity-80"
                          />
                        </div>
                      )}
                    </div>

                    {isLeft && (
                      <div className="hidden md:block">
                        <span className="mb-2 block font-mono text-[10px] tracking-widest uppercase text-[#0066ff]">
                          {step.year}
                        </span>
                        <h3 className="mb-2 text-xl font-bold text-[#080808]">{step.title}</h3>
                        <p className="max-w-xs text-sm leading-relaxed text-[#080808]/50">
                          {step.description}
                        </p>
                        {step.image && (
                          <div className="mt-4 inline-block border border-[#080808]/20">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={240}
                              height={160}
                              className="h-40 w-60 object-cover opacity-80"
                            />
                          </div>
                        )}
                      </div>
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
