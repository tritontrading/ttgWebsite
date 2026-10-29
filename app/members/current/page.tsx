import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/editorial/PageSections";
import { MembersSectionNav } from "@/components/team/MembersSectionNav";
import { TeamMembersSection } from "@/components/team/TeamMemberCard";
import { boardDivisions, memberDivisions } from "@/lib/pages/members";

export const metadata: Metadata = {
  alternates: { canonical: "/members/current" },
  title: "Current Members - Triton Finance Group",
};

export default function CurrentMembersPage() {
  return (
    <SiteLayout>
      <PageHero
        title={
          <>
            The People
            <br />
            Behind TFG
          </>
        }
        description="Meet the students who lead TFG's teams and contribute to research, investment, and client projects."
        descriptionAlign="right"
        belowTitle={<MembersSectionNav />}
        className="!pb-16 md:!pb-20"
      />

      <TeamMembersSection id="board" label="Board" divisions={boardDivisions} />
      <TeamMembersSection id="general-members" label="General Members" divisions={memberDivisions} />

    </SiteLayout>
  );
}
