import { recruitment } from "@/lib/content";
import { PageHero } from "@/components/editorial/PageSections";
import { RecruitmentFaqs } from "@/components/RecruitmentFaqs";
import { RecruitmentTimeline } from "@/components/RecruitmentTimeline";

export function Recruitment() {
  return (
    <>
      <PageHero
        label="Recruitment"
        title={recruitment.title}
        description={recruitment.description}
      >
        <p
          className="page-hero-reveal mt-10 font-mono text-[13px] tracking-widest uppercase text-text/50"
          style={{ animationDelay: "300ms" }}
        >
          Applications are currently closed.
        </p>
      </PageHero>

      <RecruitmentTimeline />
      <RecruitmentFaqs />
    </>
  );
}
