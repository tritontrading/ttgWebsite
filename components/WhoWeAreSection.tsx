import { whoWeAre } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/primitives";

export function WhoWeAreSection() {
  return (
    <SectionShell id="who-we-are">
      <div className="layout-grid-gap-lg grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
        <h2 className="font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
          {whoWeAre.title}
        </h2>

        <div className="flex flex-col gap-6 md:gap-7">
          <div className="flex flex-col gap-6 text-base leading-loose text-text/75 md:gap-7 md:text-lg md:leading-loose">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty md:text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="font-mono text-sm leading-relaxed text-text/62 md:text-[0.9375rem]">
            <span className="text-text/72">{whoWeAre.skillsLabel}:</span>{" "}
            {whoWeAre.skills.join(" / ")}
          </p>

          <ButtonLink href="/members/current" variant="secondary" className="self-start">
            Meet the team
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
