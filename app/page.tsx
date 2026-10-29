import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/Hero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/primitives";
import { PartnerCard } from "@/components/PartnerCard";
import { EditorialLabel } from "@/components/editorial/PageSections";
import { advisoryPage as page } from "@/lib/pages/advisory";
import { site } from "@/lib/content";

const title = "Financial Analysis & Project Support - Triton Finance Group";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title,
  description: site.hero.description,
  openGraph: {
    title,
    description: site.hero.description,
    url: "/",
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
};

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <SectionShell id="services" className="scroll-mt-18 border-t border-border">
        <EditorialLabel>Work with us</EditorialLabel>
        <h2 className="mb-12 max-w-2xl font-heading text-4xl text-heading md:text-5xl">Focused support for your business.</h2>
        <div className="grid gap-10 lg:grid-cols-3">
          {[...page.services, page.automation].map((service, index) => (
            <div key={service.title} className="border-t border-card-border pt-6">
              <span className="ui-label text-xs text-gold">0{index + 1}</span>
              <h3 className="my-5 font-heading text-2xl text-heading">{service.title}</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-text/70">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/for-clients" variant="secondary" arrow="right">Explore client services</ButtonLink>
        </div>
      </SectionShell>
      <SectionShell id="clients" className="border-t border-border">
        <EditorialLabel>Clients</EditorialLabel>
        <h2 className="mb-10 font-heading text-4xl text-heading md:text-5xl">Who we work with.</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {page.clients.map((client) => <PartnerCard key={client.name} {...client} />)}
        </div>
      </SectionShell>
      <SectionShell id="process" className="border-t border-border">
        <EditorialLabel>From question to deliverable</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">How it works.</h2>
        <div className="grid gap-10 lg:grid-cols-3">
          {page.process.map((step) => (
            <div key={step.step} className="border-t border-card-border pt-6">
              <span className="ui-label text-xs text-gold">{step.step}</span>
              <h3 className="my-5 font-heading text-2xl text-heading">{step.title}</h3>
              <p className="leading-relaxed text-text/70">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>
      <SectionShell id="why-us" className="border-t border-border">
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
      </SectionShell>
      <section className="bg-navy">
        <div className="site-container section-padding grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="ui-label mb-5 text-xs uppercase text-gold-light">Get in touch</p>
            <h2 className="font-heading text-4xl text-cream md:text-5xl">What are you working on?</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-cream/75">Share your organization, project goals, and timeline. We’ll discuss fit and agree on a clear scope.</p>
          </div>
          <ButtonLink href={`mailto:${page.email}`} variant="gold" arrow="right">Discuss a project</ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
