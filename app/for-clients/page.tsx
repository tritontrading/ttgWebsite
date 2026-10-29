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
      <PageHero label="For Clients" title="A fresh perspective. A focused team." description={page.description}>
        <div className="mt-8"><ButtonLink href={`mailto:${page.email}`} variant="primary">Discuss a project</ButtonLink></div>
      </PageHero>
      <EditorialSection id="services">
        <EditorialLabel>What we do</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">Support where it matters.</h2>
        <div className="layout-grid-gap-lg grid md:grid-cols-2">
          {page.services.map((service) => (
            <div key={service.title} className="border-t border-card-border pt-6">
              <h3 className="mb-6 font-heading text-2xl text-heading">{service.title}</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-text/70">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection>
        <EditorialLabel>Our process</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">Clear scope. Thoughtful delivery.</h2>
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
      <EditorialSection id="contact">
        <EditorialLabel>Work with us</EditorialLabel>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl text-heading md:text-5xl">Tell us what you’re working on.</h2>
            <p className="mt-6 leading-loose text-text/70">Share your organization, project goals, and timeline. We’ll review the fit and follow up about a scoped engagement.</p>
          </div>
          <ButtonLink href={`mailto:${page.email}`} variant="primary">Email TFG</ButtonLink>
        </div>
      </EditorialSection>
    </SiteLayout>
  );
}
