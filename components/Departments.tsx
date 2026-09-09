import Link from "next/link";
import { departments } from "@/lib/content";
import { SiteImage } from "@/components/ui/SiteImage";

export function Departments() {
  return (
    <section id="departments" className="section-padding border-t border-border bg-background">
      <div className="site-container">
        <h2 className="section-block-gap max-w-3xl font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
          {departments.headline}
        </h2>

        <div className="layout-grid-gap-lg grid grid-cols-1 lg:grid-cols-3">
          {departments.branches.map((branch) => (
            <Link
              key={branch.href}
              href={branch.href}
              className="group flex h-full flex-col overflow-hidden lg:border-l lg:border-card-border lg:pl-12 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="relative aspect-4/3 overflow-hidden border-b border-card-border">
                <SiteImage
                  src={branch.image}
                  alt={branch.department}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="flex h-full flex-col content-block-gap-lg pt-8 md:pt-10">
                <div className="text-stack">
                  <span className="font-mono text-xs tracking-[0.22em] uppercase text-gold">
                    {branch.department}
                  </span>
                  <h3 className="font-heading text-3xl font-normal leading-snug text-heading">
                    {branch.title}
                  </h3>
                </div>

                <p className="text-base leading-loose text-text/82">{branch.description}</p>

                <ul className="text-stack">
                  {branch.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-base leading-relaxed text-text">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-none bg-gold" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-card-border pt-8">
                  <span className="mb-3 block font-mono text-xs tracking-[0.22em] uppercase text-gold">
                    Careers
                  </span>
                  <span className="block font-mono text-sm leading-relaxed text-text/78">{branch.careers}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
