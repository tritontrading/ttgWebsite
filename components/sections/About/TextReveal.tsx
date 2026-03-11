'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TextRevealProps {
  text: string
  className?: string
}

export function TextReveal({ text, className }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    const spans = container.querySelectorAll<HTMLSpanElement>('.word-inner')

    if (reducedMotion) {
      gsap.set(spans, { y: 0 })
      return
    }

    gsap.set(spans, { y: '100%' })

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        y: '0%',
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 80%', once: true },
      })
    }, container)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </div>
  )
}
