'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const FUNNEL_STAGES = [
  { label: 'Step 1 — Application',        note: 'Submit interests & experience',       width: 100 },
  { label: 'Step 2 — Interview',           note: 'Selected applicants meet leadership', width: 68 },
  { label: 'Step 3 — Final Selection',     note: 'Offers extended to top candidates',   width: 42 },
]

export function ApplicationFunnel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    const stages = container.querySelectorAll('.funnel-stage')
    if (reducedMotion) {
      gsap.set(stages, { opacity: 1, y: 0 })
      return
    }
    gsap.set(stages, { opacity: 0, y: -20 })
    const ctx = gsap.context(() => {
      gsap.to(stages, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: container, start: 'top 75%', once: true },
      })
    }, container)
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={containerRef} className="space-y-1">
      {FUNNEL_STAGES.map((stage, i) => (
        <div key={i} className="funnel-stage">
          <div className="flex justify-between items-center mb-1">
            <span className="font-mono text-[11px] text-[#080808] font-medium">{stage.label}</span>
            <span className="font-mono text-[10px] text-[#080808]/40">{stage.note}</span>
          </div>
          <div className="flex justify-start">
            <div
              className="h-8 border border-[#080808]/15 bg-[#080808]/5 flex items-center px-3"
              style={{
                width: `${stage.width}%`,
                clipPath: i < FUNNEL_STAGES.length - 1
                  ? `polygon(0 0, 100% 0, ${100 - (100 - FUNNEL_STAGES[i + 1]?.width) / 2}% 100%, ${(100 - FUNNEL_STAGES[i + 1]?.width) / 2}% 100%)`
                  : undefined,
              }}
            />
          </div>
        </div>
      ))}
      <p className="font-mono text-[10px] text-[#080808]/30 pt-4">
        We welcome students from all majors. Prior finance experience is not required.
      </p>
    </div>
  )
}
