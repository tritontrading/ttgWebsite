'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ScrollTrigger is already registered in lib/gsap.ts
    // Refresh on route changes if needed
    ScrollTrigger.refresh()
  }, [])

  return <>{children}</>
}
