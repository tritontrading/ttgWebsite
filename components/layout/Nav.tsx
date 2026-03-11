'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

export function Nav() {
  const pathname = usePathname()
  const [activeAnchor, setActiveAnchor] = useState<string>('')
  const [scrolled, setScrolled]         = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section via IntersectionObserver (home page only)
  useEffect(() => {
    if (!isHome) return
    const ids = ['about', 'departments', 'simulation', 'tools', 'timeline', 'recruitment']
    const observers: IntersectionObserver[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveAnchor(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [isHome])

  const isLinkActive = (link: typeof NAV_LINKS[0]) => {
    if (link.anchor) return isHome && activeAnchor === 'about'
    return pathname.startsWith(link.href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/92 backdrop-blur-md border-b-2 border-[#080808]/20'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mr-auto">
        <Image
          src="/images/brand/logo.png"
          alt="TTG"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
        <span className="font-mono text-[#080808] font-semibold text-sm tracking-wider">TTG</span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const active = isLinkActive(link)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                active
                  ? 'text-[#080808]'
                  : 'text-[#080808]/40 hover:text-[#080808]/80'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
        <Link
          href="/#recruitment"
          className="font-mono text-xs tracking-widest uppercase border border-[#080808] text-[#080808] px-4 py-1.5 hover:bg-[#080808] hover:text-white transition-all duration-200"
        >
          APPLY
        </Link>
      </div>
    </nav>
  )
}
