import { SiteLayout } from "@/components/layout/SiteLayout";
import { ClientsSection } from "@/components/ClientsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/primitives";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhoWeAreSection />
      <SectionShell>
        <div className="layout-grid-gap-lg grid md:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl text-heading md:text-5xl">Learn by doing.</h2>
            <p className="my-6 max-w-xl text-base leading-loose text-text/75">
              Explore our mission and three divisions, from company research and financial analysis to systematic investing.
            </p>
            <ButtonLink href="/about" variant="secondary">About TTG</ButtonLink>
          </div>
          <div>
            <h2 className="font-heading text-4xl text-heading md:text-5xl">For students.</h2>
            <p className="my-6 max-w-xl text-base leading-loose text-text/75">
              Develop technical skills through structured training, team projects, and a community of students who share your curiosity.
            </p>
            <ButtonLink href="/for-students" variant="secondary">Explore the experience</ButtonLink>
          </div>
        </div>
      </SectionShell>
      <ClientsSection />
      <NetworkSection />
      <CommunitySection />
    </SiteLayout>
  );
}
