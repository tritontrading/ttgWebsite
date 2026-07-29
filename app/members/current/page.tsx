import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ApplyCtaBand, PageHero } from "@/components/editorial/PageSections";
import { MembersSectionNav } from "@/components/team/MembersSectionNav";
import { TeamGrid, TeamMembersSection } from "@/components/team/TeamMemberCard";
import { advisors, memberDivisions } from "@/lib/pages/members";
import { boardMembers, cSuite } from "@/lib/pages/team";

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
        description="TTG is powered by a team of student leaders across finance, strategy, and technology. Our leadership structure brings together executives who define our strategic direction, directors who lead specialized teams, and members who collaborate to deliver impactful research, investments, and client solutions."
        descriptionAlign="right"
        belowTitle={<MembersSectionNav />}
        className="!pb-16 md:!pb-20"
      />

      <TeamGrid
        id="exec"
        label="Exec"
        members={cSuite}
        compactHeader
        className="!pt-16 md:!pt-20"
      />
      <TeamGrid id="board" label="Board" members={boardMembers} />
      <TeamMembersSection id="members" label="Members" divisions={memberDivisions} />
      <TeamGrid id="advisors" label="Advisors" members={advisors} />

      <ApplyCtaBand
        eyebrow="Join The Team"
        title="Want to be part of this?"
        description="Applications open each academic quarter. We recruit across all majors — what matters is curiosity, commitment, and a drive to do serious work."
        href="https://docs.google.com/forms/d/e/1FAIpQLSf5iQbS2NwGXnqd-L0uw4LxIIB7bJtzA8ZUCeg6xoZP6TbQsA/viewform"
      />
    </SiteLayout>
  );
}
