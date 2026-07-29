"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type NavMenuItem = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  items: readonly NavMenuItem[];
  onNavigate?: () => void;
};

export function NavDropdown({ label, items, onNavigate }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const close = () => setOpen(false);

  const openNow = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };

  const closeSoon = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 font-mono text-sm text-text/72 transition-colors duration-200 hover:text-gold"
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={`relative -top-px h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2.5 4.5 6 8 9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 min-w-[13rem] border border-t-0 border-border bg-background"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block border-b border-border px-4 py-3 font-mono text-sm text-text/72 transition-colors duration-200 last:border-b-0 hover:bg-cream-hover hover:text-gold"
              onClick={() => {
                close();
                onNavigate?.();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

type MobileNavGroupProps = {
  label: string;
  items: readonly NavMenuItem[];
  onNavigate?: () => void;
};

export function MobileNavGroup({ label, items, onNavigate }: MobileNavGroupProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border pb-2">
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between px-1 py-3 font-mono text-sm text-text/72"
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={`relative -top-px h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2.5 4.5 6 8 9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 pl-3 pt-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-1 py-2 font-mono text-sm text-text/60 transition-colors duration-200 hover:text-gold"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
