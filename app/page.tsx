import { SiteLayout } from "@/components/layout/SiteLayout";
import { ClientsSection } from "@/components/ClientsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Departments } from "@/components/Departments";
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhoWeAreSection />
      <Departments />
      <ClientsSection />
      <NetworkSection />
      <CommunitySection />
    </SiteLayout>
  );
}
