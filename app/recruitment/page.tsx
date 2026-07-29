import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Recruitment } from "@/components/Recruitment";

export const metadata: Metadata = {
  title: "Recruitment - Triton Trading Group",
};

export default function RecruitmentPage() {
  return (
    <SiteLayout>
      <Recruitment />
    </SiteLayout>
  );
}
