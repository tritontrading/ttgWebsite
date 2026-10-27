import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ClientsSection } from "@/components/ClientsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Departments } from "@/components/Departments";
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/primitives";
import { mission } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhoWeAreSection />
      <SectionShell id="mission">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:gap-10">
          <h2 className="font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
            {mission.title}
          </h2>
          <div className="flex flex-col gap-6 text-base leading-loose text-text/75 md:gap-7 md:text-lg">
            {mission.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </SectionShell>
      <Departments />
      <ClientsSection />
      <NetworkSection />
      <CommunitySection />
      <section className="border-t border-border bg-navy">
        <div className="site-container flex flex-col items-center gap-10 py-20 text-center md:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.24em] text-cream/50 uppercase">Fall 2026 recruitment</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-cream md:text-6xl">
              Build practical experience before you graduate.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-loose text-cream/70 md:text-lg">
              Study markets, work on client projects, and practice presenting your analysis.
            </p>
          </div>
          <ButtonLink href="/recruitment" variant="secondary">
            View recruitment
          </ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
