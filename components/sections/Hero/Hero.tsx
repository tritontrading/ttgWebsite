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
            <span className="border border-[#1f5eff]/35 bg-[#1f5eff]/6 px-3 py-1 font-mono text-xs tracking-[0.24em] uppercase text-[#1f5eff] shadow-[0_6px_18px_rgba(31,94,255,0.10)]">
              University of California, San Diego
            </span>
          </div>

          <div className="hero-reveal mb-3 h-px w-16 bg-gradient-to-r from-[#1f5eff]/60 to-[#c79a3b]/60 opacity-0" />
          <h1
            className="hero-reveal mb-4 font-serif leading-[0.98] tracking-tight text-[#0d1b3d] opacity-0 md:mb-5"
            style={{ fontSize: 'clamp(2.85rem, 13vw, 5.5rem)' }}
          >
            Triton Trading
            <br />
            Group
          </h1>

          <p className="hero-reveal mb-3 max-w-md text-lg leading-relaxed text-[#102347]/86 opacity-0">
            Asset management, quantitative finance, and real-world business advisory.
          </p>
          <p className="hero-reveal mb-8 max-w-sm font-mono text-sm tracking-[0.08em] text-[#102347]/74 opacity-0 md:mb-10">
            A student-run organization bridging academic learning and professional practice at UCSD.
          </p>

          <div className="hero-reveal flex w-full flex-col gap-3 opacity-0 sm:w-auto sm:flex-row sm:flex-wrap md:gap-4">
            <ApplyNowLink className="border-2 border-[#0d1b3d] bg-[#0d1b3d] px-6 py-3 text-center font-mono text-sm tracking-[0.24em] uppercase text-[#f8f1df] transition-all duration-200 hover:border-[#c79a3b] hover:bg-[#c79a3b] hover:text-[#0d1b3d]">
              Apply Now
            </ApplyNowLink>
            <a
              href="#about"
              className="border-2 border-[#c79a3b]/65 bg-[#fff8ea]/80 px-6 py-3 text-center font-mono text-sm tracking-[0.24em] uppercase text-[#0d1b3d] transition-all duration-200 hover:border-[#0d1b3d] hover:bg-[#fff2d2]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-reveal relative w-full max-w-xl flex-1 self-stretch opacity-0 lg:self-auto">
          <div className="absolute -inset-3 rounded-none bg-gradient-to-br from-[#1f5eff]/10 via-transparent to-[#c79a3b]/14 blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden border border-[#c79a3b]/45 bg-[#efe1bd] p-2 shadow-[0_30px_80px_rgba(13,27,61,0.16)]">
            <Image
              src="/images/big_group_picture-2.png"
              alt="Triton Trading Group members together"
              width={900}
              height={620}
              className="h-auto w-full border border-[#0d1b3d]/10 object-cover"
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
