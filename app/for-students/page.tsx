import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeroSplit, EditorialSection, EditorialLabel } from "@/components/editorial/PageSections";
import { SiteImage } from "@/components/ui/SiteImage";
import { ButtonLink } from "@/components/ui/Button";
import { CommunitySection } from "@/components/CommunitySection";
import { NetworkSection } from "@/components/NetworkSection";
import { departments } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Students - Triton Trading Group",
  description: "Explore hands-on financial education, team research, mentorship, and the TTG student experience at UC San Diego.",
};

export default function ForStudentsPage() {
  return (
    <SiteLayout>
      <PageHeroSplit label="For Students" title="Build skills. Put them to work."
        description="Learn alongside UC San Diego students through structured training, research, and real project experience."
        media={<SiteImage src="/images/meetings/image2.png" alt="TTG students in a training session" width={784} height={523} className="h-auto w-full object-cover" />} />
      <EditorialSection>
        <EditorialLabel>The experience</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">From learning to doing.</h2>
        <div className="layout-grid-gap-lg grid md:grid-cols-3">
          {[
            { title: "Learn the foundations", description: "Practice financial modeling, valuation, Python, and quantitative methods through structured training." },
            { title: "Contribute to a team", description: "Research companies, develop investment ideas, or help organizations solve finance and operating questions." },
            { title: "Share your work", description: "Present findings, get feedback from peers and leadership, and build confidence explaining your analysis." },
          ].map((item, index) => (
            <div key={item.title} className="border-t border-card-border pt-6">
              <span className="font-mono text-xs text-gold">0{index + 1}</span>
              <h3 className="my-5 font-heading text-2xl text-heading">{item.title}</h3>
              <p className="leading-loose text-text/70">{item.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection>
        <EditorialLabel>Find your focus</EditorialLabel>
        <div className="divide-y divide-card-border border-y border-card-border">
          {departments.branches.map((branch) => (
            <div key={branch.href} className="grid gap-5 py-8 md:grid-cols-2">
              <h2 className="font-heading text-3xl text-heading">{branch.department}</h2>
              <div>
                <p className="mb-5 leading-loose text-text/70">{branch.description}</p>
                <ButtonLink href={branch.href} variant="secondary">Explore the division</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>
      <CommunitySection />
      <EditorialSection>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <EditorialLabel>People & mentorship</EditorialLabel>
            <h2 className="font-heading text-4xl text-heading md:text-5xl">Meet the people behind the work.</h2>
            <p className="mt-6 max-w-xl leading-loose text-text/70">Get to know our members and explore the community built around shared curiosity and practical learning.</p>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonLink href="/members/current" variant="primary">Meet our members</ButtonLink>
            <ButtonLink href="/community" variant="secondary">Our community</ButtonLink>
          </div>
        </div>
      </EditorialSection>
      <NetworkSection />
    </SiteLayout>
  );
}
