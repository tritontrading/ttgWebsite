import Link from "next/link";
import { clients } from "@/lib/content";

export function ClientsSection() {
  return (
    <section id="clients" className="border-t border-border bg-background">
      <div className="site-container section-padding">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <h2 className="font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
            {clients.title}
          </h2>
          <p className="text-base leading-loose text-text/75">{clients.description}</p>

          <Link
            href={clients.href}
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-8 py-4 font-mono text-sm tracking-[0.24em] uppercase text-heading transition-all duration-200 hover:border-heading hover:bg-cream-hover"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
