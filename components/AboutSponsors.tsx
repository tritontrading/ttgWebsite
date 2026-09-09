import { sponsors } from "@/lib/content";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionLabel } from "@/components/ui/primitives";

export function AboutSponsors() {
  return (
    <div className="mt-14 surface-card p-6 md:mt-20 md:p-8">
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <SectionLabel>Our Sponsors</SectionLabel>
          <h3 className="mt-3 font-heading text-3xl font-normal tracking-tight text-heading md:text-4xl">
            {sponsors.title}
          </h3>
        </div>
        <p className="text-base leading-relaxed text-text/80">{sponsors.description}</p>
      </div>

      <div className="grid grid-cols-1 layout-grid-gap md:grid-cols-2">
        {sponsors.items.map((sponsor) => (
          <PartnerCard key={sponsor.name} name={sponsor.name} image={sponsor.image} />
        ))}
      </div>
    </div>
  );
}
