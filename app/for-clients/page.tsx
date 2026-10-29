import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, EditorialSection, EditorialLabel } from "@/components/editorial/PageSections";
import { ButtonLink } from "@/components/ui/Button";
import { PartnerCard } from "@/components/PartnerCard";
import { advisoryPage as page } from "@/lib/pages/advisory";

export const metadata: Metadata = {
  alternates: { canonical: "/for-clients" },
  title: "For Clients - Triton Finance Group",
  description: page.description,
};

export default function ForClientsPage() {
  return (
    <SiteLayout>
      <PageHero label="For Clients" title="Work with us." description={page.description}>
        <div id="contact" className="mt-8 flex scroll-mt-24 flex-wrap items-center gap-5">
          <ButtonLink href={`mailto:${page.email}`} arrow="right">Get in touch</ButtonLink>
          <p className="max-w-sm text-sm leading-relaxed text-text/65">Tell us your goals and timeline. We’ll start with a focused scope.</p>
        </div>
        <div id="services" className="mt-16 grid scroll-mt-24 gap-10 lg:mt-20 lg:grid-cols-3">
          {[...page.services, page.automation].map((service, index) => (
            <div key={service.title} className="border-t border-card-border pt-6">
              <span className="ui-label text-xs text-gold">0{index + 1}</span>
              <h2 className="my-5 font-heading text-2xl text-heading">{service.title}</h2>
              <ul className="space-y-3 text-sm leading-relaxed text-text/70">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </PageHero>
      <EditorialSection id="process">
        <EditorialLabel>Our process</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">How it works.</h2>
        <div className="divide-y divide-card-border border-y border-card-border">
          {page.process.map((step) => (
            <div key={step.step} className="grid gap-4 py-8 md:grid-cols-[4rem_1fr_2fr]">
              <span className="font-mono text-xs text-gold">{step.step}</span>
              <h3 className="font-heading text-2xl text-heading">{step.title}</h3>
              <p className="text-base leading-loose text-text/70">{step.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection>
        <EditorialLabel>Clients</EditorialLabel>
        <h2 className="mb-10 font-heading text-4xl text-heading md:text-5xl">Who we work with.</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {page.clients.map((client) => <PartnerCard key={client.name} {...client} />)}
        </div>
      </EditorialSection>
      <EditorialSection id="why-us">
        <EditorialLabel>The TFG approach</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">Why choose us.</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {page.whyUs.map((reason) => (
            <div key={reason.title} className="border-t border-card-border pt-6">
              <h3 className="mb-4 font-heading text-2xl text-heading">{reason.title}</h3>
              <p className="max-w-lg leading-relaxed text-text/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>
    </SiteLayout>
  );
}
