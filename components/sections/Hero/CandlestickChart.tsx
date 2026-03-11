'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { CANDLES } from '@/lib/chartData'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const WIDTH = 420
const HEIGHT = 160
const CANDLE_WIDTH = 10
const GAP = 4

export function CandlestickChart() {
  const svgRef = useRef<SVGSVGElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const bodies = svg.querySelectorAll<SVGRectElement>('.candle-body')
    const wicks  = svg.querySelectorAll<SVGLineElement>('.candle-wick')

    if (reducedMotion) {
      gsap.set(bodies, { scaleY: 1 })
      gsap.set(wicks,  { opacity: 1 })
      return
    }

    gsap.set(bodies, { scaleY: 0, transformOrigin: 'bottom center' })
    gsap.set(wicks,  { opacity: 0 })

    const ctx = gsap.context(() => {
      gsap.to(bodies, { scaleY: 1, duration: 0.6, stagger: 0.03, ease: 'power2.out', delay: 0.3 })
      gsap.to(wicks,  { opacity: 1, duration: 0.3, stagger: 0.03, delay: 0.5 })
    }, svg)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <svg
      ref={svgRef}
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="opacity-40"
      aria-hidden="true"
    >
      {CANDLES.map((candle, i) => {
        const x = i * (CANDLE_WIDTH + GAP)
        const isGreen = candle.close >= candle.open
        // On white bg: use dark green / dark red
        const color = isGreen ? '#00994d' : '#cc2222'
        const scale = (v: number) => HEIGHT - (v / 100) * HEIGHT
        const bodyTop    = scale(Math.max(candle.open, candle.close))
        const bodyBottom = scale(Math.min(candle.open, candle.close))
        const bodyHeight = Math.max(bodyBottom - bodyTop, 2)
        const wickTop    = scale(candle.high)
        const wickBottom = scale(candle.low)
        const centerX    = x + CANDLE_WIDTH / 2
        return (
          <g key={i}>
            <line className="candle-wick"
              x1={centerX} y1={wickTop} x2={centerX} y2={wickBottom}
              stroke={color} strokeWidth={1}
            />
            <rect className="candle-body"
              x={x} y={bodyTop} width={CANDLE_WIDTH} height={bodyHeight}
              fill={color} fillOpacity={0.85}
            />
          </g>
        )
      })}
    </svg>
  )
}
