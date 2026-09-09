import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ApplyCtaBand, PageHero } from "@/components/editorial/PageSections";
import { MembersSectionNav } from "@/components/team/MembersSectionNav";
import { TeamGrid, TeamMembersSection } from "@/components/team/TeamMemberCard";
import { memberDivisions } from "@/lib/pages/members";
import { cSuite } from "@/lib/pages/team";

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

      <TeamGrid
        id="exec"
        label="Exec"
        members={cSuite}
        compactHeader
        className="!pt-16 md:!pt-20"
      />
      <TeamMembersSection id="members" label="Members" divisions={memberDivisions} />

      <ApplyCtaBand
        eyebrow="Join The Team"
        title="Want to be part of this?"
        description="Applications open each academic quarter. We recruit across all majors — what matters is curiosity, commitment, and a drive to do serious work."
        href="https://docs.google.com/forms/d/e/1FAIpQLSf5iQbS2NwGXnqd-L0uw4LxIIB7bJtzA8ZUCeg6xoZP6TbQsA/viewform"
      />
    </SiteLayout>
  );
}
