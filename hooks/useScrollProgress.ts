'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      () => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const total = rect.height - windowHeight
        const scrolled = -rect.top
        const p = Math.max(0, Math.min(1, scrolled / total))
        setProgress(p)
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return progress
}
