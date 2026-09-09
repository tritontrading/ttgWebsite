import type { ReactNode } from "react";
import { colors, gridPattern } from "@/lib/theme";

type PlaceholderImageProps = {
  alt: string;
  variant?: "hero" | "meeting" | "tabling" | "quant" | "group" | "logo";
  className?: string;
  aspectRatio?: string;
};

const variantStyles: Record<
  NonNullable<PlaceholderImageProps["variant"]>,
  { from: string; to: string; accent: string }
> = {
  hero: { from: "#1a2f5c", to: "#c79a3b", accent: "#1f5eff" },
  meeting: { from: "#0d1b3d", to: "#2a4a8a", accent: "#c79a3b" },
  tabling: { from: "#102347", to: "#5a4a2a", accent: "#1f5eff" },
  quant: { from: "#0d1b3d", to: "#1f5eff", accent: "#c79a3b" },
  group: { from: "#1a2744", to: "#8b6a24", accent: "#efd8a4" },
  logo: { from: colors.navy, to: colors.gold, accent: colors.blue },
};

export function PlaceholderImage({
  alt,
  variant = "hero",
  className = "",
  aspectRatio,
}: PlaceholderImageProps) {
  const style = variantStyles[variant];

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-linear-to-br ${className}`}
      style={{
        aspectRatio,
        backgroundImage: `linear-gradient(135deg, ${style.from} 0%, ${style.to} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridPattern.color} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridPattern.color} 1px, transparent 1px)`,
          backgroundSize: `${gridPattern.size} ${gridPattern.size}`,
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.24em] uppercase text-gold-light/60"
        aria-hidden
      >
        Photo Placeholder
      </div>
    </div>
  );
}

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  narrow?: boolean;
};

export function SectionShell({
  id,
  children,
  className = "",
  innerClassName = "",
  narrow = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-padding border-t border-border bg-background ${className}`}
    >
      <div className={`${narrow ? "site-container-narrow" : "site-container"} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="label-gap block font-mono text-xs tracking-[0.24em] uppercase text-gold">
      {children}
    </span>
  );
}

export function SectionDivider({ className = "section-divider-gap" }: { className?: string }) {
  return <div className={`border-t border-border ${className}`} />;
}
