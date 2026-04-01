'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

export function Nav() {
  const pathname = usePathname()
  const [activeAnchor, setActiveAnchor] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return

    const ids = ['about', 'departments', 'simulation', 'tools', 'timeline', 'recruitment']
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveAnchor(id)
        },
        { threshold: 0.3 }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [isHome])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isLinkActive = (link: typeof NAV_LINKS[0]) => {
    if (link.anchor) return isHome && activeAnchor === 'about'
    return pathname.startsWith(link.href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 md:px-12 ${
        scrolled
          ? 'border-b border-[#c79a3b]/50 bg-cream/95 backdrop-blur-md shadow-[0_10px_30px_rgba(13,27,61,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex h-16 w-full items-center gap-4">
        <Link href="/" className="mr-auto flex items-center gap-3.5">
          <Image
            src="/images/brand/logo.png"
            alt="TTG"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-mono text-base font-semibold tracking-[0.22em] text-[#0d1b3d]">TTG</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-sm tracking-[0.24em] uppercase transition-colors duration-200 ${
                  active
                    ? 'text-[#1f5eff]'
                    : 'text-[#0d1b3d]/72 hover:text-[#c79a3b]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/#recruitment"
            className="border border-[#0d1b3d] bg-[#0d1b3d] px-4 py-2 font-mono text-sm tracking-[0.24em] uppercase text-[#f8f1df] transition-all duration-200 hover:border-[#c79a3b] hover:bg-[#c79a3b] hover:text-[#0d1b3d]"
          >
            APPLY
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex h-10 w-10 items-center justify-center border border-[#c79a3b]/45 bg-cream/90 text-[#0d1b3d] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 top-0 h-px w-full bg-[#0d1b3d] transition-all duration-200 ${menuOpen ? 'top-[6px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[6px] h-px w-full bg-[#0d1b3d] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-px w-full bg-[#0d1b3d] transition-all duration-200 ${menuOpen ? 'top-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${menuOpen ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-[#c79a3b]/35 bg-[#fbf4e4]/95 pb-4 pt-3">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-1 py-3 font-mono text-sm tracking-[0.22em] uppercase transition-colors duration-200 ${
                    active ? 'text-[#0d1b3d]' : 'text-[#0d1b3d]/72'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/#recruitment"
              className="mt-2 inline-flex w-full items-center justify-center border border-[#0d1b3d] bg-[#0d1b3d] px-4 py-3 font-mono text-sm tracking-[0.22em] uppercase text-[#f8f1df] transition-all duration-200 hover:border-[#c79a3b] hover:bg-[#c79a3b] hover:text-[#0d1b3d]"
              onClick={() => setMenuOpen(false)}
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
