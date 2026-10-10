import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/editorial/PageSections";

export const metadata: Metadata = {
  title: "Website Disclaimer - Triton Finance Group",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHero title="Website Disclaimer" description="Educational content and organization information." />
      <section className="site-container space-y-6 pb-24 text-base leading-loose text-text/75">
        <p>Triton Finance Group is the public-facing name of Triton Trading Group. The legal entity name and EIN remain unchanged pending verification of an approved name amendment.</p>
        <p>This website provides educational information, not investment, legal, or tax advice. Research, portfolio exercises, and strategy examples should not be treated as recommendations to buy or sell securities. Simulated results are not actual investment performance.</p>
        <p>We are a student organization. University sponsorship or endorsement is not implied. Member and alumni experience with an organization does not establish sponsorship, partnership, or endorsement by that organization.</p>
        <p>External links lead to services operated by other parties. Review their terms and privacy information before using them.</p>
      </section>
    </SiteLayout>
  );
}
