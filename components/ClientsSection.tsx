import Link from "next/link";
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

          <Link
            href={clients.href}
            className="inline-flex w-full items-center justify-center rounded-md border border-navy bg-navy px-8 py-4 font-mono text-sm tracking-[0.24em] uppercase text-cream transition-all duration-200 hover:border-gold hover:bg-gold hover:text-navy sm:w-auto"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
