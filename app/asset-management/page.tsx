import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  ApplyCtaBand,
  EditorialLabel,
  EditorialSection,
  PageHeroSplit,
} from "@/components/editorial/PageSections";
import { SiteImage } from "@/components/ui/SiteImage";
import { assetManagementPage as page } from "@/lib/pages/asset-management";

export const metadata: Metadata = {
  title: "Asset Management - Triton Trading Group",
};

export default function AssetManagementPage() {
  return (
    <SiteLayout>
      <PageHeroSplit
        label={page.label}
        title={
          <>
            {page.titleLines[0]}
            <br />
            {page.titleLines[1]}
          </>
        }
        description={page.description}
        media={
          <SiteImage
            src={page.heroImage}
            alt="Asset Management team"
            width={700}
            height={420}
            className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        }
      />

      <EditorialSection>
        <div className="section-block-gap">
          <EditorialLabel>Sector Coverage</EditorialLabel>
          <div className="border-t border-editorial/6" />
        </div>
        <div className="grid grid-cols-1 gap-px bg-editorial/10 md:grid-cols-2 lg:grid-cols-3">
          {page.sectors.map((sector) => (
            <div key={sector.title} className="flex flex-col gap-4 bg-background p-8">
              <h2 className="font-heading text-base font-normal leading-tight text-heading">
                {sector.title}
              </h2>
              <p className="text-sm leading-relaxed text-text/50">{sector.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection>
        <div className="grid grid-cols-1 items-start layout-grid-gap-lg lg:grid-cols-2">
          <div>
            <EditorialLabel>Investment Process</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <div className="divide-y divide-card-border surface-card overflow-hidden">
              {page.process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 px-6 py-6 transition-colors duration-200 hover:bg-cream-hover md:px-6"
                >
                  <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand-blue">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-text/70">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <EditorialLabel>In Practice</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <div className="overflow-hidden surface-card">
              <SiteImage
                src={page.practiceImage}
                alt="Students discussing portfolio ideas"
                width={600}
                height={420}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection border={false}>
        <div className="grid grid-cols-1 layout-grid-gap-lg lg:grid-cols-2">
          <div>
            <EditorialLabel>Skills Members Develop</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <div className="text-stack">
              {page.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-4 text-sm text-text">
                  <span className="h-1 w-1 shrink-0 bg-brand-blue" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <EditorialLabel>Related Career Paths</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <div className="divide-y divide-card-border surface-card overflow-hidden">
              {page.careers.map((career) => (
                <div
                  key={career.role}
                  className="flex flex-col gap-1 px-6 py-4 transition-colors duration-200 hover:bg-cream-hover sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-heading text-sm font-normal text-heading">{career.role}</span>
                  <span className="font-mono text-[10px] text-text/40 sm:text-right">
                    {career.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EditorialSection>

      <ApplyCtaBand
        title="Interested in Asset Management?"
        description="No prior buy-side experience is required. Bring curiosity, discipline, and clear communication."
      />
    </SiteLayout>
  );
}
