'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const el  = numRef.current
    const box = boxRef.current
    if (!el || !box) return

    if (reducedMotion) {
      el.textContent = `${value}${suffix}`
      return
    }

    const obj = { val: 0 }
    el.textContent = '0' + suffix

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
        scrollTrigger: { trigger: box, start: 'top 80%', once: true },
      })
    }, box)

    return () => ctx.revert()
  }, [value, suffix, reducedMotion])

  return (
    <div ref={boxRef} className="p-8 flex flex-col gap-2">
      <span className="font-mono text-[10px] text-[#080808]/30 tracking-widest uppercase">
        {label}
      </span>
      <span className="text-4xl font-bold text-[#080808] tracking-tight">
        <span ref={numRef}>{value}{suffix}</span>
      </span>
    </div>
  )
}
