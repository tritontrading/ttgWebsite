import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { EditorialLabel, EditorialSection } from "@/components/editorial/PageSections";
import { ButtonLink } from "@/components/ui/Button";
import { donatePage as page } from "@/lib/pages/donate";

export const metadata: Metadata = {
  alternates: { canonical: "/donate" },
  title: "Donate - Triton Finance Group",
  description: page.description,
};

export default function DonatePage() {
  return (
    <SiteLayout>
      <section className="page-hero-padding border-b border-editorial/6">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <EditorialLabel>{page.label}</EditorialLabel>
            <h1 className="heading-gap font-heading text-4xl leading-none text-heading sm:text-5xl md:text-7xl">
              {page.titleLines[0]}<br />{page.titleLines[1]}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-text/65">{page.description}</p>
          </div>
          <div className="bg-navy p-8 md:p-12">
            <p className="ui-label mb-10 text-sm uppercase text-gold-light">Give through GoFundMe</p>
            <h2 className="mb-6 font-heading text-3xl text-cream md:text-4xl">Back the next generation of finance talent.</h2>
            <p className="mb-8 leading-relaxed text-cream/75">Your contribution supports the resources behind student learning.</p>
            <ButtonLink
              href={page.goFundMeUrl}
              variant="gold"
              arrow="external"
              className="w-full px-5"
            >
              Donate on GoFundMe
            </ButtonLink>
            <p className="mt-4 text-xs leading-relaxed text-cream/65">Opens our fundraiser on GoFundMe.</p>
          </div>
        </div>
      </section>

      <EditorialSection id="impact">
        <EditorialLabel>Your impact</EditorialLabel>
        <h2 className="mb-12 font-heading text-4xl text-heading md:text-5xl">Where your support goes.</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {page.allocations.map((item, index) => (
            <div key={item.title} className="border-t border-card-border pt-6">
              <span className="ui-label text-xs text-gold">0{index + 1}</span>
              <h3 className="my-4 font-heading text-2xl text-heading">{item.title}</h3>
              <p className="max-w-lg leading-relaxed text-text/70">{item.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>
    </SiteLayout>
  );
}
