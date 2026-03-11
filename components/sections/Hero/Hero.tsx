'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { GridBackground } from './GridBackground'
import { MarketTicker } from './MarketTicker'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Image from 'next/image'

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
    <section id="hero" className="relative min-h-screen flex flex-col bg-cream overflow-hidden">
      <GridBackground />

      <div
        ref={containerRef}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center flex-1 px-6 md:px-14 pt-28 pb-16 gap-16 max-w-7xl mx-auto w-full"
      >
        {/* Left — text */}
        <div className="flex-1 flex flex-col items-start">
          <div className="hero-reveal opacity-0 mb-6">
            <span className="font-mono text-xs tracking-widest uppercase text-[#080808]/40 border border-[#080808]/25 px-3 py-1">
              University of California, San Diego
            </span>
          </div>

          <h1
            className="hero-reveal opacity-0 font-serif font-bold text-[#080808] tracking-tight mb-5 leading-[1.05]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Triton Trading<br />Group
          </h1>

          <p className="hero-reveal opacity-0 text-[#080808]/60 text-base leading-relaxed mb-3 max-w-md">
            Asset management, quantitative finance, and real-world business advisory.
          </p>
          <p className="hero-reveal opacity-0 font-mono text-[#080808]/35 text-xs tracking-wide mb-10 max-w-sm">
            A student-run nonprofit bridging academic learning and professional practice at UCSD.
          </p>

          <div className="hero-reveal opacity-0 flex gap-4 flex-wrap">
            <a
              href="#recruitment"
              className="font-mono text-sm tracking-widest uppercase border-2 border-[#080808] text-[#080808] px-8 py-3 hover:bg-[#080808] hover:text-cream transition-all duration-200"
            >
              Apply Now
            </a>
            <a
              href="#about"
              className="font-mono text-sm tracking-widest uppercase border-2 border-[#080808]/25 text-[#080808]/50 px-8 py-3 hover:border-[#080808]/60 hover:text-[#080808] transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hero-reveal opacity-0 flex-1 w-full max-w-xl">
          <div className="border-2 border-[#080808]/20 overflow-hidden">
            <Image
              src="/images/brand/group_photoshoot.png"
              alt="Triton Trading Group"
              width={700}
              height={480}
              className="w-full h-auto object-cover"
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
