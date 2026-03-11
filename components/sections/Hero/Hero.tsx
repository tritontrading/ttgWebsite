'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'
import { GridBackground } from './GridBackground'
import { MarketTicker } from './MarketTicker'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = containerRef.current?.querySelectorAll('.hero-reveal')
      if (!targets) return

      if (reducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 })
        return
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden bg-cream">
      <GridBackground />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-10 px-5 pb-12 pt-24 md:gap-16 md:px-14 md:pb-16 md:pt-28 lg:flex-row"
      >
        <div className="flex flex-1 flex-col items-start">
          <div className="hero-reveal mb-5 opacity-0 md:mb-6">
            <span className="border border-[#080808]/25 px-3 py-1 font-mono text-xs tracking-widest uppercase text-[#080808]/40">
              University of California, San Diego
            </span>
          </div>

          <h1
            className="hero-reveal mb-4 font-serif text-[#080808] opacity-0 tracking-tight leading-[0.98] md:mb-5"
            style={{ fontSize: 'clamp(2.85rem, 13vw, 5.5rem)' }}
          >
            Triton Trading
            <br />
            Group
          </h1>

          <p className="hero-reveal mb-3 max-w-md text-base leading-relaxed text-[#080808]/60 opacity-0">
            Asset management, quantitative finance, and real-world business advisory.
          </p>
          <p className="hero-reveal mb-8 max-w-sm font-mono text-xs tracking-wide text-[#080808]/35 opacity-0 md:mb-10">
            A student-run nonprofit bridging academic learning and professional practice at UCSD.
          </p>

          <div className="hero-reveal flex w-full flex-col gap-3 opacity-0 sm:w-auto sm:flex-row sm:flex-wrap md:gap-4">
            <ApplyNowLink className="border-2 border-[#080808] px-6 py-3 text-center font-mono text-sm tracking-widest uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-cream">
              Apply Now
            </ApplyNowLink>
            <a
              href="#about"
              className="border-2 border-[#080808]/25 px-6 py-3 text-center font-mono text-sm tracking-widest uppercase text-[#080808]/50 transition-all duration-200 hover:border-[#080808]/60 hover:text-[#080808]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-reveal w-full max-w-xl flex-1 self-stretch opacity-0 lg:self-auto">
          <div className="overflow-hidden border-2 border-[#080808]/20">
            <Image
              src="/images/brand/group_photoshoot.png"
              alt="Triton Trading Group"
              width={700}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <MarketTicker />
      </div>
    </section>
  )
}
