"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { divisionLinks, memberLinks, site } from "@/lib/content";
import { MobileNavGroup, NavDropdown } from "@/components/NavDropdown";
import { NavButtonLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 md:px-12 ${
        scrolled ? "bg-background/95 shadow-[0_1px_0_rgba(227,224,217,0.8)]" : "bg-transparent"
      }`}
    >
      <div className="flex h-18 w-full items-center gap-6">
        <Link href="/" className="mr-auto flex items-center gap-4">
          <SiteImage
            src="/images/brand/logo.png"
            alt={`${site.shortName} logo`}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading text-sm font-normal leading-none tracking-tight text-heading sm:text-base md:text-lg">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <NavDropdown label="Divisions" items={divisionLinks} />
          <Link
            href="/recruitment"
            className="font-mono text-sm text-text/72 transition-colors duration-200 hover:text-gold"
          >
            Recruitment
          </Link>
          <Link
            href="/community"
            className="font-mono text-sm text-text/72 transition-colors duration-200 hover:text-gold"
          >
            Community
          </Link>
          <NavDropdown label="Members" items={memberLinks} />
          <div className="flex items-center gap-4">
            <NavButtonLink href="/donate" variant="secondary">
              Donate
            </NavButtonLink>
            <NavButtonLink href="/recruitment" variant="primary">
              Apply
            </NavButtonLink>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/90 text-heading md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 h-px w-full bg-navy transition-all duration-200 ${
                menuOpen ? "top-[6px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-full bg-navy transition-all duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-navy transition-all duration-200 ${
                menuOpen ? "top-[6px] -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background pb-6 pt-4">
          <div className="flex flex-col gap-4">
            <MobileNavGroup label="Divisions" items={divisionLinks} onNavigate={closeMenu} />
            <Link
              href="/recruitment"
              className="border-b border-border px-2 py-4 font-mono text-sm text-text/72 transition-colors duration-200 hover:text-gold"
              onClick={closeMenu}
            >
              Recruitment
            </Link>
            <Link
              href="/community"
              className="border-b border-border px-2 py-4 font-mono text-sm text-text/72 transition-colors duration-200 hover:text-gold"
              onClick={closeMenu}
            >
              Community
            </Link>
            <MobileNavGroup label="Members" items={memberLinks} onNavigate={closeMenu} />
            <div className="mt-4 flex gap-4">
              <Link
                href="/donate"
                className="inline-flex flex-1 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 font-mono text-sm leading-none text-heading transition-all duration-200 hover:border-heading hover:bg-cream-hover"
                onClick={closeMenu}
              >
                Donate
              </Link>
              <Link
                href="/recruitment"
                className="inline-flex flex-1 items-center justify-center rounded-md border border-navy bg-navy px-4 py-2 font-mono text-sm leading-none text-cream transition-all duration-200 hover:border-gold hover:bg-gold hover:text-navy"
                onClick={closeMenu}
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
