"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { community } from "@/lib/content";
import { SiteImage } from "@/components/ui/SiteImage";

type Photo = (typeof community.photos)[number];

const AUTO_ADVANCE_MS = 4000;
const USER_PAUSE_MS = 3500;

function shufflePhotos<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function CommunityCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const userActiveRef = useRef(false);
  const hoveredRef = useRef(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotionRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setPhotos(shufflePhotos(community.photos));
    slideRefs.current = [];
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      reduceMotionRef.current = media.matches;
    };
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  const pauseAutoAdvance = useCallback(() => {
    userActiveRef.current = true;
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      userActiveRef.current = false;
    }, USER_PAUSE_MS);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const el = scrollRef.current;
    const slide = slideRefs.current[index];
    if (!el || !slide) return;

    el.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotionRef.current ? "auto" : "smooth",
    });
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const goToSlide = (index: number) => {
    pauseAutoAdvance();
    scrollToSlide(index);
  };

  useEffect(() => {
    if (photos.length === 0) return;

    const interval = window.setInterval(() => {
      if (userActiveRef.current || hoveredRef.current || reduceMotionRef.current) return;
      const next = (activeIndexRef.current + 1) % photos.length;
      scrollToSlide(next);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(interval);
  }, [photos.length, scrollToSlide]);

  if (photos.length === 0) {
    return <div className="mt-4 h-64 md:mt-6 md:h-80" aria-hidden />;
  }

  return (
    <div className="mt-4 md:mt-6">
      <div
        ref={scrollRef}
        className="community-marquee"
        onMouseEnter={() => {
          hoveredRef.current = true;
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
        }}
        onPointerDown={pauseAutoAdvance}
        onWheel={pauseAutoAdvance}
        onTouchStart={pauseAutoAdvance}
        onKeyDown={pauseAutoAdvance}
        tabIndex={0}
        aria-label="Community photos"
      >
        <div className="flex w-max gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="relative h-64 w-72 shrink-0 overflow-hidden rounded-lg md:h-80 md:w-96"
            >
              <SiteImage
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="384px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="community-dots" role="tablist" aria-label="Community photo slides">
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-label={`Go to photo ${index + 1}`}
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
