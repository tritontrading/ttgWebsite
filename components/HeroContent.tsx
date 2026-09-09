"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

const INTERVAL_MS = 3200;

export function HeroContent() {
  const { headline, divisions } = site.hero;
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const phrases = useMemo(() => divisions.map((division) => division.label), [divisions]);
  const sizerPhrase = useMemo(
    () =>
      phrases.reduce(
        (longest, phrase) => (phrase.length > longest.length ? phrase : longest),
        phrases[0] ?? "",
      ),
    [phrases],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReduceMotion(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || divisions.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % divisions.length);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [divisions.length, reduceMotion]);

  const activeIndex = reduceMotion ? 0 : index;
  const activePhrase = phrases[activeIndex] ?? phrases[0];
  const terminalRows = [
    ["MARKET BETA", "1.04", "+0.12"],
    ["RISK MODEL", "ACTIVE", "LOW VOL"],
    ["RESEARCH", "03", "LIVE"],
  ];

  return (
    <div className="site-container relative z-10 flex w-full flex-1 flex-col justify-center gap-14 pb-24 pt-40 md:gap-16 md:pb-32 md:pt-48 lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-20 xl:gap-24">
      <div className="flex flex-col items-start gap-8 md:gap-10 lg:max-w-none lg:pr-6 xl:pr-10">
        <h1 className="hero-reveal max-w-3xl font-heading text-[2.5rem] leading-[1.14] tracking-[-0.025em] text-heading sm:text-[2.875rem] md:text-[3.75rem] lg:max-w-[42rem] lg:text-[4rem]">
          {headline}{" "}
          <span className="hero-rotating-subtitle" aria-live="polite" aria-atomic="true">
            <span className="invisible whitespace-nowrap" aria-hidden="true">
              {sizerPhrase}
            </span>
            <span
              key={reduceMotion ? "static" : activeIndex}
              className="hero-rotating-phrase whitespace-nowrap"
            >
              {activePhrase}
            </span>
          </span>
        </h1>

        <div className="hero-reveal flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-5">
          <ButtonLink
            href="/recruitment"
            variant="primary"
            className="px-6 py-2.5 text-xs tracking-[0.2em]"
          >
            Join our team
          </ButtonLink>
          <ButtonLink
            href="/advisory"
            variant="secondary"
            className="px-6 py-2.5 text-xs tracking-[0.2em] text-navy"
          >
            Work with us
          </ButtonLink>
        </div>
      </div>

      <div className="hero-reveal relative w-full lg:justify-self-end">
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-navy sm:aspect-[3/2] lg:aspect-[5/4]">
          {divisions.map((division, divisionIndex) => (
            <SiteImage
              key={division.image}
              src={division.image}
              alt={division.alt}
              fill
              priority={divisionIndex === 0}
              className={`object-cover transition-opacity duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                divisionIndex === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          ))}
          <div className="absolute inset-0 bg-navy/72" />
          <div className="terminal-grid absolute inset-0 opacity-45" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-cream/20 px-4 py-3 font-mono text-[10px] tracking-[0.2em] text-cream/65 uppercase sm:px-5">
            <span>TTG // Research Terminal</span>
            <span className="text-gold">● Live</span>
          </div>

          <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:inset-x-5 sm:bottom-5">
            <div className="border border-cream/25 bg-navy/85 p-4 backdrop-blur-sm sm:p-5">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-cream/50 uppercase">Model portfolio</p>
                  <p className="mt-1 font-heading text-3xl leading-none text-cream sm:text-4xl">+18.6%</p>
                </div>
                <p className="font-mono text-[10px] text-gold">YTD // SIMULATED</p>
              </div>
              <svg viewBox="0 0 300 62" className="h-14 w-full" role="img" aria-label="Rising simulated portfolio performance chart">
                <path d="M0 55 L24 49 L46 51 L71 39 L95 43 L121 30 L147 36 L174 21 L200 25 L228 13 L253 20 L278 7 L300 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                <path d="M0 61 H300" stroke="currentColor" strokeWidth="1" className="text-cream/25" />
              </svg>
            </div>

            <div className="grid grid-cols-3 border border-cream/20 bg-navy/85 backdrop-blur-sm">
              {terminalRows.map(([label, value, detail]) => (
                <div key={label} className="min-w-0 border-r border-cream/15 p-3 last:border-r-0 sm:p-4">
                  <p className="truncate font-mono text-[9px] tracking-[0.14em] text-cream/45 uppercase">{label}</p>
                  <p className="mt-2 truncate font-mono text-sm text-cream sm:text-base">{value}</p>
                  <p className="mt-1 truncate font-mono text-[10px] text-gold">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
