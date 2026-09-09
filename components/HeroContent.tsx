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
        <div className="relative aspect-[4/3] overflow-hidden border border-border sm:aspect-[3/2] lg:aspect-[5/4]">
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
        </div>
      </div>
    </div>
  );
}
