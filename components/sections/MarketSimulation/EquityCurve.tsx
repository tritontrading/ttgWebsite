'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { EQUITY_CURVE } from '@/lib/chartData'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SVG_W = 800
const SVG_H = 300
const PAD_L = 50
const PAD_R = 20
const PAD_T = 30
const PAD_B = 40

function norm(v: number, min: number, max: number) {
  return (v - min) / (max - min)
}

export function EquityCurve() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPolylineElement>(null)
  const reducedMotion = useReducedMotion()

  const minYear = Math.min(...EQUITY_CURVE.map((p) => p.year))
  const maxYear = Math.max(...EQUITY_CURVE.map((p) => p.year))

  const toSVG = (year: number, value: number) => ({
    x: PAD_L + norm(year, minYear, maxYear) * (SVG_W - PAD_L - PAD_R),
    y: PAD_T + (1 - norm(value, 0, 100)) * (SVG_H - PAD_T - PAD_B),
  })

  const points = EQUITY_CURVE.map((p) => {
    const { x, y } = toSVG(p.year, p.value)
    return `${x},${y}`
  }).join(' ')

  const yearMarkers = [2019, 2020, 2021, 2022, 2023, 2024, 2025]

  useLayoutEffect(() => {
    const container = containerRef.current
    const path = pathRef.current
    if (!container || !path) return

    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

    if (reducedMotion) {
      gsap.set(path, { strokeDashoffset: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={containerRef} className="w-full">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full"
        style={{ maxHeight: '300px' }}
        aria-label="Equity curve 2019–2025"
      >
        {/* Grid */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = PAD_T + (1 - norm(v, 0, 100)) * (SVG_H - PAD_T - PAD_B)
          return (
            <g key={v}>
              <line x1={PAD_L} y1={y} x2={SVG_W - PAD_R} y2={y}
                stroke="rgba(8,8,8,0.06)" strokeWidth={1} />
              <text x={PAD_L - 8} y={y + 4} textAnchor="end"
                fill="rgba(8,8,8,0.3)" fontSize="10"
                fontFamily="IBM Plex Mono, monospace">{v}</text>
            </g>
          )
        })}

        {/* Year labels */}
        {yearMarkers.map((year) => {
          const { x } = toSVG(year, 0)
          return (
            <text key={year} x={x} y={SVG_H - 8} textAnchor="middle"
              fill="rgba(8,8,8,0.3)" fontSize="10"
              fontFamily="IBM Plex Mono, monospace">{year}</text>
          )
        })}

        {/* Annotations */}
        {EQUITY_CURVE.filter((p) => p.label).map((p, i) => {
          const { x, y } = toSVG(p.year, p.value)
          return (
            <g key={i}>
              <line x1={x} y1={y - 8} x2={x} y2={y - 24}
                stroke="rgba(8,8,8,0.2)" strokeWidth={1} />
              <text x={x} y={y - 28} textAnchor="middle"
                fill="rgba(8,8,8,0.4)" fontSize="9"
                fontFamily="IBM Plex Mono, monospace">{p.label}</text>
            </g>
          )
        })}

        {/* Main line */}
        <polyline
          ref={pathRef}
          points={points}
          fill="none"
          stroke="#0066ff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dots at annotated points */}
        {EQUITY_CURVE.filter((p) => p.label).map((p, i) => {
          const { x, y } = toSVG(p.year, p.value)
          return <circle key={i} cx={x} cy={y} r={3} fill="#0066ff" />
        })}
      </svg>
    </div>
  )
}
