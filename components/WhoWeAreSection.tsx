import { whoWeAre } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/primitives";

export function WhoWeAreSection() {
  return (
    <SectionShell id="who-we-are">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:gap-10">
        <h2 className="font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
          {whoWeAre.title}
        </h2>

        <div className="flex flex-col gap-6 text-base leading-loose text-text/75 md:gap-7 md:text-lg">
          {whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <ButtonLink href="/members/current" variant="secondary">
          Meet the team
        </ButtonLink>
      </div>
    </SectionShell>
  );
}
