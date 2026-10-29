import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeroSplit, EditorialLabel, EditorialSection } from "@/components/editorial/PageSections";
import { ButtonLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata: Metadata = {
  alternates: { canonical: "/advisory" },
  title: "FP&A Student Training - Triton Finance Group",
  description: "A hands-on training ground for financial modeling, business research, and project communication at UC San Diego.",
};

const training = [
  {
    title: "Build the model",
    description: "Practice cash-flow forecasting, unit economics, and scenario analysis. Learn to explain the assumptions behind the numbers.",
    output: "A financial model with clear assumptions.",
  },
  {
    title: "Research the question",
    description: "Use market and company research to frame a business problem, compare options, and support a recommendation.",
    output: "A concise research brief.",
  },
  {
    title: "Present the answer",
    description: "Work with peers and project leads to turn analysis into a useful deliverable. Present your reasoning and improve it through feedback.",
    output: "A presentation and documented handoff.",
  },
] as const;

export default function AdvisoryPage() {
  return (
    <SiteLayout>
      <PageHeroSplit
        label="For Students / Financial Planning & Analysis"
        title="A training ground for real business questions."
        description="Build financial models, research companies, and learn to communicate a recommendation. FP&A turns classroom concepts into team-based practice."
        media={<SiteImage src="/images/meetings/image1.png" alt="TFG students working together at a meeting" width={784} height={523} className="h-auto w-full object-cover" />}
      />
      <EditorialSection id="training">
        <EditorialLabel>Learn by doing</EditorialLabel>
        <h2 className="mb-12 max-w-2xl font-heading text-4xl text-heading md:text-5xl">Three skills. Work you can show.</h2>
        <div className="grid gap-10 lg:grid-cols-3">
          {training.map((item, index) => (
            <div key={item.title} className="border-t border-card-border pt-6">
              <span className="ui-label text-xs text-gold">0{index + 1}</span>
              <h3 className="my-5 font-heading text-2xl text-heading">{item.title}</h3>
              <p className="mb-6 leading-relaxed text-text/70">{item.description}</p>
              <p className="border-t border-card-border pt-4 text-sm leading-relaxed text-text/65">
                <span className="font-medium text-heading">What you’ll make: </span>{item.output}
              </p>
            </div>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <EditorialLabel>Keep exploring</EditorialLabel>
            <h2 className="mb-6 font-heading text-3xl text-heading">Find your place in the team.</h2>
            <ButtonLink href="/for-students" variant="secondary" arrow="right">The student experience</ButtonLink>
          </div>
          <div className="border-t border-card-border pt-6">
            <h2 className="mb-4 font-heading text-2xl text-heading">Looking for project support?</h2>
            <p className="mb-6 leading-relaxed text-text/70">Our client page covers services, project scope, and how to get in touch.</p>
            <ButtonLink href="/for-clients" variant="secondary" arrow="right">Work with us</ButtonLink>
          </div>
        </div>
      </EditorialSection>
    </SiteLayout>
  );
}
