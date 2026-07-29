"use client";

import { useEffect, useRef } from "react";
import { recruitment } from "@/lib/content";
import {
  SectionDivider,
  SectionLabel,
  SectionShell,
} from "@/components/ui/primitives";

const ACTIVE_OFFSET = 78;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInQuad(t: number) {
  return t * t;
}

export function RecruitmentTimeline() {
  const { schedule } = recruitment;
  const wrapRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(-1);
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const wrapEl = wrapRef.current;
    const dateEl = dateRef.current;
    const titleEl = titleRef.current;
    if (!wrapEl || !dateEl || !titleEl) return;

    const events = [...wrapEl.querySelectorAll<HTMLElement>(".recruitment-tl-ev")];
    if (!events.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const updateActive = () => {
      let nextIndex = events.findIndex(
        (event) => event.querySelector("h3")!.getBoundingClientRect().top > ACTIVE_OFFSET,
      );
      if (nextIndex === -1) {
        nextIndex = events.length - 1;
      }

      if (nextIndex === activeIndexRef.current) return;

      activeIndexRef.current = nextIndex;
      events.forEach((event, index) => {
        event.classList.toggle("is-active", index === nextIndex);
      });

      const active = events[nextIndex];
      if (!active) return;

      dateEl.style.opacity = "0";
      titleEl.style.opacity = "0";
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
      fadeTimeoutRef.current = window.setTimeout(() => {
        dateEl.textContent = active.dataset.date ?? "";
        titleEl.textContent = active.dataset.title ?? "";
        dateEl.style.opacity = "1";
        titleEl.style.opacity = "1";
      }, 150);
    };

    const animate = () => {
      updateActive();

      if (!reduceMotion) {
        const viewportHeight = window.innerHeight;

        events.forEach((event) => {
          const inner = event.querySelector<HTMLElement>(".recruitment-tl-ev-inner");
          if (!inner) return;

          const rect = event.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const progress = 1 - Math.min(1, Math.max(0, center / viewportHeight));

          let translateY = 0;
          let opacity = 1;

          if (progress < 0.45) {
            const eased = easeOutCubic(progress / 0.45);
            translateY = (1 - eased) * 78;
            opacity = 0.2 + eased * 0.8;
          } else if (progress < 0.86) {
            translateY = 0;
            opacity = 1;
          } else {
            const eased = easeInQuad((progress - 0.86) / 0.14);
            translateY = -eased * 12;
            opacity = 1 - eased * 0.45;
          }

          inner.style.transform = `translateY(${translateY}px)`;
          inner.style.opacity = String(opacity);
        });
      }

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [schedule.events.length]);

  const firstEvent = schedule.events[0];

  return (
    <SectionShell id="recruitment-schedule" narrow>
      <SectionLabel>Recruitment Timeline</SectionLabel>
      <SectionDivider />

      <div className="section-block-gap max-w-2xl">
        <h2 className="font-heading text-3xl font-normal leading-[1.05] text-heading md:text-4xl">
          {schedule.title}
        </h2>
        <p className="mt-6 text-base leading-loose text-text/70">{schedule.description}</p>
      </div>

      <div ref={wrapRef} className="recruitment-tl-wrap">
        <div className="recruitment-tl-rail">
          <div ref={dateRef} className="recruitment-tl-rail-date">
            {firstEvent?.date}
          </div>
          <div ref={titleRef} className="recruitment-tl-rail-title">
            {firstEvent?.title}
          </div>
        </div>

        <div className="recruitment-tl-events">
          {schedule.events.map((event, index) => (
            <article
              key={event.title}
              className={`recruitment-tl-ev${index === 0 ? " is-active" : ""}`}
              data-date={event.date}
              data-title={event.title}
            >
              <div className="recruitment-tl-ev-inner">
                <span className="recruitment-tl-mobile-date">{event.date}</span>
                <h3 className="font-heading text-xl font-normal text-heading md:text-2xl">
                  {event.title}
                </h3>
                <p className="max-w-lg text-base leading-loose text-text/75">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
