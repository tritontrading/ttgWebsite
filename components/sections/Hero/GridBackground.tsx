'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export function GridBackground() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const handleMouseMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 20
      const yPct = (e.clientY / window.innerHeight - 0.5) * 20
      gsap.to(el, { x: xPct, y: yPct, ease: 'none', duration: 0 })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={gridRef}
      className="absolute inset-[-5%] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(8,8,8,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(8,8,8,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  )
}
