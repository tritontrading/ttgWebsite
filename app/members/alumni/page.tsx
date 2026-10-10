import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ApplyCtaBand, PageHero } from "@/components/editorial/PageSections";
import { TeamGrid } from "@/components/team/TeamMemberCard";
import { alumniMembers } from "@/lib/pages/alumni";

export const metadata: Metadata = {
  alternates: { canonical: "/members/alumni" },
  title: "Alumni - Triton Finance Group",
};

export default function AlumniPage() {
  return (
    <SiteLayout>
      <PageHero
        title="TFG Alumni"
        description="Meet former TFG members."
      />

      <TeamGrid label="Class of 2026" members={alumniMembers} />

      <ApplyCtaBand
        eyebrow="Stay Connected"
        title="Are you a TFG alum?"
        description="Reach out if you'd like to be featured here or stay connected with current members through recruiting and mentorship."
        buttonLabel="Get In Touch"
        href="mailto:tritontradinggroup@ucsd.edu"
      />
    </SiteLayout>
  );
}
