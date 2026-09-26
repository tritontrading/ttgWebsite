import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/editorial/PageSections";
import { TeamGrid } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

export const metadata: Metadata = {
  title: "Founders - Triton Trading Group",
};

export default function FoundersPage() {
  return (
    <SiteLayout>
      <PageHero title="Founders" description="The people who started Triton Trading Group." />
      <TeamGrid
        label="Founders"
        members={[
          { name: "Shaurya Prakaash", role: "Co-Founder", image: "/images/board/shaurya.JPG", linkedin: memberLinkedins["Shaurya Prakaash"] },
          { name: "Anthony Cardoza", role: "Co-Founder" },
        ]}
      />
      <TeamGrid
        label="Founding Team"
        members={[
          { name: "Maya Nayberg", role: "Founding Team", image: "/images/board/maya.JPG", linkedin: memberLinkedins["Maya Nayberg"] },
        ]}
      />
    </SiteLayout>
  );
}
