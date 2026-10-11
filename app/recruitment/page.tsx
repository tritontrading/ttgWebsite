import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Recruitment } from "@/components/Recruitment";

export const metadata: Metadata = {
  alternates: { canonical: "/recruitment" },
  title: "Recruitment - Triton Finance Group",
};

export default function RecruitmentPage() {
  return (
    <SiteLayout>
      <Recruitment />
    </SiteLayout>
  );
}
