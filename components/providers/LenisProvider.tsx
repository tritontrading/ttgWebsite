'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from '@/lib/gsap'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = new Lenis(
      reducedMotion
        ? undefined
        : {
            duration: 0.82,
            wheelMultiplier: 0.92,
            touchMultiplier: 0.95,
          }
    )
    const onTick = (time: number) => lenis.raf(time * 1000)

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
