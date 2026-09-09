import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ApplyCtaBand, EditorialLabel, EditorialSection } from "@/components/editorial/PageSections";
import { SiteImage } from "@/components/ui/SiteImage";
import { ButtonLink } from "@/components/ui/Button";
import { advisoryPage as page } from "@/lib/pages/advisory";

export const metadata: Metadata = {
  title: "FP&A - Triton Trading Group",
  description:
    "TTG's FP&A division: student-led financial consulting for founders and teams, plus the training track for prospective members.",
};

export default function AdvisoryPage() {
  return (
    <SiteLayout>
      <section className="page-hero-padding relative z-10 border-b border-editorial/6">
        <div className="site-container layout-grid-gap-lg grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span
              className="page-hero-reveal label-gap block font-mono text-[13px] tracking-[0.28em] uppercase text-text/50"
              style={{ animationDelay: "0ms" }}
            >
              {page.label}
            </span>
            <h1
              className="page-hero-reveal heading-gap font-heading text-4xl font-normal leading-[0.95] tracking-tight text-heading sm:text-5xl md:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              {page.title}
            </h1>
            <p
              className="page-hero-reveal max-w-2xl text-base leading-relaxed text-text/60 md:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              {page.description}
            </p>
          </div>
          <div className="page-hero-reveal border border-editorial/15" style={{ animationDelay: "300ms" }}>
            <div className="p-6 md:p-8">
              <span className="label-gap block font-mono text-[13px] tracking-[0.22em] uppercase text-text/50">
                New Inquiries
              </span>
              <p className="prose-gap text-sm leading-7 text-text/60">
                Send a short overview of your team, stage, and the decision or system you need help
                with.
              </p>
              <a
                href={`mailto:${page.email}`}
                className="inline-flex w-full items-center justify-center border border-editorial px-8 py-4 font-mono text-xs tracking-[0.22em] uppercase text-editorial transition-all duration-200 hover:bg-editorial hover:text-white"
              >
                Email TTG FP&A
              </a>
            </div>
          </div>
        </div>
      </section>

      <EditorialSection className="border-editorial/5" border>
        <div className="section-block-gap">
          <EditorialLabel>Process</EditorialLabel>
          <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">How We Operate</h2>
        </div>
        <div className="divide-y divide-card-border border-y border-card-border">
          {page.process.map((step) => (
            <div key={step.step} className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[6rem_1fr] md:gap-8">
              <span className="font-mono text-[13px] tracking-[0.22em] uppercase text-text/50">
                {step.step}
              </span>
              <div>
                <h3 className="mb-2 font-heading text-xl font-normal text-heading">{step.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-text/55">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection className="border-editorial/5" border>
        <div className="section-block-gap">
          <EditorialLabel>Why Us</EditorialLabel>
          <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">Why Choose TTG</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/55">
            We scope each project around the decision, data, and deliverables the organization needs.
          </p>
        </div>
        <div className="divide-y divide-card-border border-y border-card-border">
          {page.whyUs.map((item) => (
            <div key={item.title} className="py-8">
              <div className="mb-3 flex items-start gap-4">
                <span className="mt-2 h-1 w-1 shrink-0 bg-brand-blue" />
                <h3 className="font-heading text-xl font-normal text-heading">{item.title}</h3>
              </div>
              <p className="pl-4 text-sm leading-7 text-text/55">{item.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection id="services" className="border-editorial/5" border>
        <div className="section-block-gap">
          <EditorialLabel>Services</EditorialLabel>
          <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">Our Services</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/55">
            Support across finance, operations, growth, and systems.
          </p>
        </div>
        <div className="grid grid-cols-1 layout-grid-gap md:grid-cols-2">
          {page.services.map((service) => (
            <div key={service.title} className="border-t border-card-border pt-6">
              <h3 className="mb-6 font-heading text-2xl font-normal text-heading">{service.title}</h3>
              <div className="text-stack">
                {service.items.map((item) => (
                  <div key={item} className="flex items-start gap-4 text-sm text-text/60">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-brand-blue" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection className="border-editorial/5" border>
        <div className="section-block-gap">
          <EditorialLabel>Work With Us</EditorialLabel>
          <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">
            {page.workWithUs.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/55">
            {page.workWithUs.description}
          </p>
        </div>
        <div className="layout-grid-gap grid grid-cols-1 md:grid-cols-3">
          {page.workWithUs.offerings.map((offering) => (
            <div key={offering.title} className="border-t border-card-border pt-6">
              <h3 className="mb-3 font-heading text-lg font-normal text-heading">{offering.title}</h3>
              <p className="text-sm leading-loose text-text/70">{offering.description}</p>
            </div>
          ))}
        </div>
        <div className="layout-grid-gap-lg mt-16 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-heading text-2xl font-normal text-heading">How it works</h3>
            <ol className="text-stack-loose">
              {page.workWithUs.process.map((step, index) => (
                <li key={step} className="flex items-start gap-5 text-base leading-loose text-text/80">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-gold">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-editorial/15 p-8 md:p-10">
            <span className="label-gap block font-mono text-xs tracking-[0.22em] uppercase text-gold">
              Get in touch
            </span>
            <p className="prose-gap text-sm leading-loose text-text/70">
              Email us with a short overview of your organization, timeline, and the support you
              are looking for. We will follow up if there is a strong fit for an upcoming project
              cycle.
            </p>
            <ButtonLink href={`mailto:${page.email}`} variant="secondary" fullWidth>
              Email TTG
            </ButtonLink>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="border-editorial/5" border>
        <div className="section-block-gap">
          <EditorialLabel>For Prospective Members</EditorialLabel>
          <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">
            FP&A As A Training Ground
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/55">
            {page.memberTrack.description}
          </p>
        </div>

        <div className="section-block-gap">
          <h3 className="mb-6 font-heading text-xl font-normal text-heading">Areas of Work</h3>
          <div className="divide-y divide-card-border border-y border-card-border">
            {page.memberTrack.areasOfWork.map((item) => (
              <div key={item.title} className="py-6">
                <h4 className="mb-2 font-heading text-base font-normal text-heading">{item.title}</h4>
                <p className="text-sm leading-relaxed text-text/55">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-block-gap">
          <h3 className="mb-6 font-heading text-xl font-normal text-heading">How Members Work</h3>
          <div className="divide-y divide-card-border border-y border-card-border">
            {page.memberTrack.roles.map((role) => (
              <div key={role.title} className="py-5">
                <h4 className="mb-1 font-heading text-base font-normal text-heading">{role.title}</h4>
                <p className="text-sm leading-relaxed text-text/55">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="layout-grid-gap-lg grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-heading text-xl font-normal text-heading">Skills Members Develop</h3>
            <div className="text-stack">
              {page.memberTrack.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-4 text-sm text-text">
                  <span className="h-1 w-1 shrink-0 bg-brand-blue" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-heading text-xl font-normal text-heading">Related Career Paths</h3>
            <div className="divide-y divide-card-border surface-card overflow-hidden">
              {page.memberTrack.careers.map((career) => (
                <div
                  key={career.role}
                  className="flex flex-col gap-1 px-6 py-4 transition-colors duration-200 hover:bg-cream-hover sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-heading text-sm font-normal text-heading">{career.role}</span>
                  <span className="font-mono text-[10px] text-text/40 sm:text-right">{career.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="border-editorial/5" border>
        <div className="section-block-gap">
          <EditorialLabel>Clients</EditorialLabel>
          <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">
            Who We Work With
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/55">
            We partner with early-stage startups, student-run ventures, and small-to-medium
            businesses that need financial clarity.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-editorial/10 md:grid-cols-4">
          {page.clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center gap-4 bg-background p-8"
            >
              <div className="flex h-16 w-full items-center justify-center md:h-20">
                <SiteImage
                  src={client.image}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-center font-mono text-[13px] tracking-[0.18em] uppercase text-text/50">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </EditorialSection>

      <ApplyCtaBand
        eyebrow="For Students"
        title="Interested in the FP&A Track?"
        description="Applications open each academic quarter. The FP&A track gives members structured exposure to consulting-style problem solving, corporate finance, and operator-level execution."
      />
    </SiteLayout>
  );
}
