"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/lib/content";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  SectionDivider,
  SectionLabel,
  SectionShell,
} from "@/components/ui/primitives";

type TimelineStep = (typeof timeline.steps)[number];

function TimelineContent({ step }: { step: TimelineStep }) {
  return (
    <>
      <span className="mb-2 block font-mono text-[10px] tracking-[0.18em] uppercase text-text/40">
        {step.id}
      </span>
      <h3 className="mb-4 font-heading text-xl font-normal text-heading">{step.title}</h3>
      <p className="max-w-xs text-base leading-relaxed text-text/80 max-md:max-w-sm">
        {step.description}
      </p>
      {"image" in step && step.image && (
        <div className="mt-6 inline-block max-w-full surface-card p-2">
          <SiteImage
            src={step.image}
            alt={step.title}
            width={240}
            height={160}
            className="h-auto w-full max-w-[240px] object-cover opacity-90 md:h-40 md:w-60 md:max-w-none"
          />
        </div>
      )}
    </>
  );
}

function TimelineMarker({
  step,
  isActive,
  labelPosition,
  onClick,
}: {
  step: TimelineStep;
  isActive: boolean;
  labelPosition: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={step.title}
      aria-current={isActive ? "step" : undefined}
      onClick={onClick}
      className="group relative flex h-8 w-8 items-center justify-center"
    >
      <span
        className={`block transition-all duration-300 ${
          isActive
            ? "h-[7px] w-[7px] bg-gold shadow-[0_0_0_3px_rgba(199,154,59,0.12)]"
            : "h-[5px] w-[5px] border border-text/20 bg-background group-hover:border-text/35"
        }`}
      />
      <span
        className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-mono text-[10px] tracking-wide text-text/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block ${
          labelPosition === "left"
            ? "right-full mr-3 text-right"
            : "left-full ml-3 text-left"
        } ${isActive ? "text-gold/80 opacity-100" : ""}`}
      >
        {step.title}
      </span>
    </button>
  );
}

export function Timeline() {
  const [activeId, setActiveId] = useState<string>(timeline.steps[0]?.id ?? "");
  const stepRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const elements = timeline.steps
      .map((step) => stepRefs.current[step.id])
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target instanceof HTMLElement) {
          const id = visible[0].target.dataset.stepId;
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollToStep = (id: string) => {
    stepRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <SectionShell id="timeline" narrow>
      <SectionLabel>Member Journey</SectionLabel>
      <SectionDivider />

      <h2 className="section-block-gap font-heading text-4xl font-normal tracking-tight text-heading md:text-5xl">
        {timeline.title}
      </h2>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute top-2 bottom-2 left-[15px] w-px bg-border md:left-1/2 md:-translate-x-1/2"
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {timeline.steps.map((step) => {
            const isActive = activeId === step.id;

            return (
              <article
                key={step.id}
                ref={(node) => {
                  stepRefs.current[step.id] = node;
                }}
                data-step-id={step.id}
                className="relative grid grid-cols-[auto_1fr] items-start gap-x-8 gap-y-4 md:grid-cols-[1fr_auto_1fr] md:gap-x-12"
              >
                {step.align === "left" ? (
                  <div className="hidden text-right md:flex md:flex-col md:items-end">
                    <TimelineContent step={step} />
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                <div className="flex flex-col items-center md:col-start-2">
                  <TimelineMarker
                    step={step}
                    isActive={isActive}
                    labelPosition={step.align === "left" ? "left" : "right"}
                    onClick={() => scrollToStep(step.id)}
                  />
                </div>

                <div className={step.align === "left" ? "md:hidden" : "md:col-start-3"}>
                  <TimelineContent step={step} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
