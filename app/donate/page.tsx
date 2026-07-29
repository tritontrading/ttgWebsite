import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ApplyCtaBand, EditorialLabel, EditorialSection } from "@/components/editorial/PageSections";
import { donatePage as page } from "@/lib/pages/donate";

export const metadata: Metadata = {
  title: "Donate - Triton Trading Group",
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M1 7h12M7 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DonatePage() {
  return (
    <SiteLayout>
      <section className="page-hero-padding border-b border-editorial/6">
        <div className="site-container">
          <span
            className="page-hero-reveal label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50"
            style={{ animationDelay: "0ms" }}
          >
            {page.label}
          </span>
          <h1
            className="page-hero-reveal heading-gap font-heading text-4xl font-normal leading-none text-heading sm:text-5xl md:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            {page.titleLines[0]}
            <br />
            {page.titleLines[1]}
          </h1>
          {page.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className="page-hero-reveal mb-4 max-w-2xl text-base leading-relaxed text-text/60 last:mb-12"
              style={{ animationDelay: `${200 + index * 50}ms` }}
            >
              {paragraph}
            </p>
          ))}
          <a
            href={page.goFundMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="page-hero-reveal inline-flex items-center gap-4 rounded-md border border-gold bg-gold px-8 py-4 font-mono text-sm tracking-[0.24em] uppercase text-navy transition-all duration-200 hover:bg-transparent hover:text-navy"
            style={{ animationDelay: "300ms" }}
          >
            Donate on GoFundMe
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="border-b border-editorial/6 section-padding-tight">
        <div className="site-container grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {page.stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-4 font-heading text-4xl font-normal text-heading md:text-5xl">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-text/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <EditorialSection className="border-editorial/6" border>
        <div className="layout-grid-gap-lg grid grid-cols-1 lg:grid-cols-2">
          <div>
            <EditorialLabel>Why We Built This</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <h2 className="mb-6 font-heading text-3xl font-normal text-heading md:text-4xl">
              {page.whyTitle}
            </h2>
            {page.whyParagraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-sm leading-relaxed text-text/60 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <EditorialLabel>Who We&apos;re Asking</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <div className="divide-y divide-card-border border-y border-card-border">
              {page.audiences.map((audience) => (
                <div key={audience.label} className="py-6">
                  <span className="mb-3 block font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
                    {audience.label}
                  </span>
                  <p className="text-sm leading-relaxed text-text/60">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="border-editorial/6" border>
        <EditorialLabel>Where the $500K Goes</EditorialLabel>
        <div className="mb-8 border-t border-editorial/6" />
        <div className="divide-y divide-card-border surface-card overflow-hidden">
          {page.allocations.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-4 px-6 py-6 transition-colors duration-200 hover:bg-cream-hover md:px-8"
            >
              <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] uppercase tracking-widest text-gold">
                0{index + 1}
              </span>
              <div>
                <span className="mb-1 block font-mono text-[10px] tracking-[0.22em] uppercase text-text/70">
                  {item.title}
                </span>
                <p className="text-sm leading-relaxed text-text/55">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      <ApplyCtaBand
        eyebrow="Make an Impact"
        title="Ready to support?"
        description="Any amount helps. 100% tax-deductible. Every donor receives an official receipt with our EIN."
        buttonLabel="Donate Now"
        href={page.goFundMeUrl}
      />
    </SiteLayout>
  );
}
