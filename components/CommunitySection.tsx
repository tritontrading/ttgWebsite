import { community } from "@/lib/content";
import { CommunityCarousel } from "@/components/CommunityCarousel";
import { SectionShell } from "@/components/ui/primitives";

export function CommunitySection() {
  return (
    <SectionShell id="community" className="!pb-36 md:!pb-52" innerClassName="!px-0">
      <div className="site-container">
        <div className="section-block-gap layout-grid-gap-lg grid grid-cols-1 items-end lg:grid-cols-2">
          <h2 className="font-heading text-4xl font-normal leading-[1.05] tracking-tight text-heading md:text-5xl">
            {community.title}
          </h2>
          <p className="text-base leading-loose text-text/80">{community.description}</p>
        </div>
      </div>

      <CommunityCarousel />
    </SectionShell>
  );
}
