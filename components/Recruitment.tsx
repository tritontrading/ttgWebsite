import { recruitment } from "@/lib/content";
import { PageHero } from "@/components/editorial/PageSections";
import { RecruitmentFaqs } from "@/components/RecruitmentFaqs";
import { RecruitmentTimeline } from "@/components/RecruitmentTimeline";
import { ButtonLink } from "@/components/ui/Button";

export function Recruitment() {
  return (
    <>
      <PageHero
        label="Recruitment"
        title={recruitment.title}
        description={recruitment.description}
      >
        <div
          className="page-hero-reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          style={{ animationDelay: "300ms" }}
        >
          <ButtonLink href={recruitment.links.interestForm.href} variant="secondary">
            {recruitment.links.interestForm.label}
          </ButtonLink>
          <ButtonLink href={recruitment.links.application.href} variant="primary">
            {recruitment.links.application.label}
          </ButtonLink>
        </div>
      </PageHero>

      <RecruitmentTimeline />
      <RecruitmentFaqs />
    </>
  );
}
