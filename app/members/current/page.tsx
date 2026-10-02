import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ApplyCtaBand, PageHero } from "@/components/editorial/PageSections";
import { MembersSectionNav } from "@/components/team/MembersSectionNav";
import { TeamMembersSection } from "@/components/team/TeamMemberCard";
import { boardDivisions, memberDivisions } from "@/lib/pages/members";

export const metadata: Metadata = {
  title: "Current Members - Triton Trading Group",
};

export default function CurrentMembersPage() {
  return (
    <SiteLayout>
      <PageHero
        title={
          <>
            The People
            <br />
            Behind TTG
          </>
        }
        description="Meet the students who lead TTG's teams and contribute to research, investment, and client projects."
        descriptionAlign="right"
        belowTitle={<MembersSectionNav />}
        className="!pb-16 md:!pb-20"
      />

      <TeamMembersSection id="board" label="Board" divisions={boardDivisions} />
      <TeamMembersSection id="general-members" label="General Members" divisions={memberDivisions} />

      <ApplyCtaBand
        eyebrow="Join The Team"
        title="Want to be part of this?"
        description="Applications open each academic quarter. We recruit across all majors — what matters is curiosity, commitment, and a drive to do serious work."
        href="https://docs.google.com/forms/d/e/1FAIpQLSdfXBTLXA6OsW1Kaco9lp6bi-726-bZoRD9FWYwBUjH_2Ckbg/viewform"
      />
    </SiteLayout>
  );
}
