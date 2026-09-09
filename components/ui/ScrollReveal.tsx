'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  /** Seconds between staggered [data-reveal] children. 0 = animate wrapper as one unit. */
  stagger?: number
  /** Initial Y offset in px */
  y?: number
  /** Animation delay in seconds */
  delay?: number
  /** ScrollTrigger start position */
  start?: string
}

export function ScrollReveal({
  children,
  className,
  stagger = 0,
  y = 22,
  delay = 0,
  start = 'top 86%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current
      if (!el || reducedMotion) return

      if (stagger > 0) {
        const targets = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'))
        if (targets.length === 0) return
        gsap.set(targets, { opacity: 0, y })
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          ease: 'power2.out',
          delay,
          scrollTrigger: { trigger: el, start, once: true },
        })
      } else {
        gsap.set(el, { opacity: 0, y })
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          delay,
          scrollTrigger: { trigger: el, start, once: true },
        })
      }
    }, ref)

    return () => ctx.revert()
  }, [reducedMotion, stagger, y, delay, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
