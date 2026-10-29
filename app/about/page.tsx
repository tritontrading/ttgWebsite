import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, EditorialSection, EditorialLabel } from "@/components/editorial/PageSections";
import { ButtonLink } from "@/components/ui/Button";
import { departments, mission } from "@/lib/content";

export const metadata: Metadata = {
  title: "About - Triton Trading Group",
  description: "Our mission and divisions: Asset Management, Financial Planning & Analysis, and Quantitative Finance.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero label="About" title="Finance in practice."
        description="A student-run nonprofit connecting financial education with hands-on research, client work, and quantitative exploration at UC San Diego." />
      <EditorialSection id="mission">
        <div className="layout-grid-gap-lg grid lg:grid-cols-2">
          <h2 className="font-heading text-4xl text-heading md:text-5xl">{mission.title}</h2>
          <div className="space-y-6 text-base leading-loose text-text/75">
            {mission.paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </EditorialSection>
      <EditorialSection id="divisions">
        <EditorialLabel>Our divisions</EditorialLabel>
        <h2 className="mb-12 max-w-3xl font-heading text-4xl text-heading md:text-5xl">{departments.headline}</h2>
        <div className="divide-y divide-card-border border-t border-card-border">
          {departments.branches.map((branch, index) => (
            <section key={branch.href} id={branch.href.split("#")[1]} className="grid scroll-mt-24 gap-6 py-10 md:grid-cols-[4rem_1fr_1fr] md:gap-10 md:py-14">
              <span className="font-mono text-xs tracking-widest text-gold">0{index + 1}</span>
              <div>
                <h3 className="mb-4 font-heading text-3xl text-heading">{branch.department}</h3>
                <p className="text-base leading-loose text-text/75">{branch.description}</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-text/75">
                {branch.bullets.map((bullet) => <li key={bullet} className="border-b border-card-border pb-3">{bullet}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </EditorialSection>
      <section className="bg-navy">
        <div className="site-container section-padding flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gold">Work with us</p>
            <h2 className="font-heading text-4xl text-cream md:text-5xl">Bring a question. Build a solution.</h2>
            <p className="mt-6 max-w-xl leading-loose text-cream/70">Work with a student team on a focused finance, strategy, or systems project.</p>
          </div>
          <ButtonLink href="/for-clients" variant="gold">Work with us</ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
