import { SiteLayout } from "@/components/layout/SiteLayout";
import { ClientsSection } from "@/components/ClientsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Departments } from "@/components/Departments";
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { ButtonLink } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhoWeAreSection />
      <Departments />
      <ClientsSection />
      <NetworkSection />
      <CommunitySection />
      <section className="border-t border-border bg-navy">
        <div className="site-container grid gap-10 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.24em] text-gold uppercase">Fall 2026 recruitment</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-cream md:text-6xl">
              Build your edge before you graduate.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-loose text-cream/70 md:text-lg">
              Join a team that studies markets, solves client problems, and turns curiosity into practical experience.
            </p>
          </div>
          <ButtonLink href="/recruitment" variant="gold" className="self-start md:self-auto">
            View recruitment
          </ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
