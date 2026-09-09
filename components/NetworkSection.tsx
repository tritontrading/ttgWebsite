import { network } from "@/lib/content";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionShell } from "@/components/ui/primitives";

export function NetworkSection() {
  return (
    <SectionShell id="connections">
      <div className="section-block-gap layout-grid-gap-lg grid grid-cols-1 items-end lg:grid-cols-2">
        <h2 className="font-heading text-4xl font-normal leading-[1.05] tracking-tight text-heading md:text-5xl">
          {network.title}
        </h2>
        <p className="text-base leading-loose text-text/80">{network.description}</p>
      </div>

      <div className="layout-grid-gap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {network.partners.map((partner) => (
          <PartnerCard key={partner.name} name={partner.name} image={partner.image} compact />
        ))}
      </div>
    </SectionShell>
  );
}
