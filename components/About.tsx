import { about } from "@/lib/content";
import { AboutSponsors } from "@/components/AboutSponsors";
import {
  SectionDivider,
  SectionLabel,
  SectionShell,
} from "@/components/ui/primitives";

export function About() {
  const headlineWords = about.headline.split(" ");

  return (
    <SectionShell id="about">
      <SectionLabel>About</SectionLabel>
      <SectionDivider className="section-block-gap" />

      <div className="mb-16 grid grid-cols-1 layout-grid-gap-lg md:mb-24 lg:grid-cols-2">
        <div>
          <div className="font-heading text-2xl font-normal leading-snug text-heading md:text-3xl">
            {headlineWords.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-[0.3em] inline-block overflow-hidden">
                <span className="word-inner inline-block">{word}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <p className="border-l border-accent-blue/18 pl-4 text-base leading-relaxed text-text/82">
            {about.mission}
          </p>
          <p className="text-base leading-relaxed text-text/82">{about.description}</p>
          <p className="font-mono text-sm leading-relaxed text-text-muted">{about.skills}</p>
        </div>
      </div>

      <div className="surface-card grid grid-cols-1 overflow-hidden md:grid-cols-2">
        {about.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-2 bg-surface p-8 ${
              index === 1 ? "border-t border-card-border md:border-l md:border-t-0" : ""
            }`}
          >
            <span className="font-mono text-xs tracking-[0.22em] uppercase text-gold">
              {stat.label}
            </span>
            <span className="font-heading text-4xl font-normal tracking-tight text-heading">{stat.value}</span>
          </div>
        ))}
      </div>

      <AboutSponsors />
    </SectionShell>
  );
}
