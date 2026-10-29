import { ButtonLink } from "@/components/ui/Button";
import { clients } from "@/lib/content";

export function ClientsSection() {
  return (
    <section id="clients" className="border-t border-border bg-background">
      <div className="site-container section-padding">
        <div className="layout-grid-gap-lg grid grid-cols-1 items-end lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
              {clients.title}
            </h2>
            <p className="mt-6 text-base leading-loose text-text/75">{clients.description}</p>
          </div>

          <ButtonLink href={clients.href} arrow="right">
            Learn more
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
