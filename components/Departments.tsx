import Link from "next/link";
import { departments } from "@/lib/content";

export function Departments() {
  return (
    <section id="departments" className="section-padding border-t border-border bg-background">
      <div className="site-container">
        <h2 className="section-block-gap mx-auto max-w-3xl text-center font-heading text-4xl font-normal leading-[1.05] text-heading md:text-5xl">
          {departments.headline}
        </h2>

        <div className="layout-grid-gap-lg grid grid-cols-1 lg:grid-cols-3">
          {departments.branches.map((branch) => (
            <Link
              key={branch.href}
              href={branch.href}
              className="group flex h-full flex-col overflow-hidden lg:border-l lg:border-card-border lg:pl-12 lg:first:border-l-0 lg:first:pl-0"
            >
              <div
                aria-hidden="true"
                className="relative flex aspect-4/3 items-center justify-center border-b border-card-border bg-surface"
              >
                <span className="select-none font-heading text-7xl leading-none text-heading/10 transition-colors duration-500 group-hover:text-heading/20 md:text-8xl">
                  {branch.department.charAt(0)}
                </span>
              </div>

              <div className="flex h-full flex-col content-block-gap-lg pt-8 md:pt-10">
                <div className="text-stack">
                  <span className="font-mono text-xs tracking-[0.22em] uppercase text-text/50">
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
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-none bg-text/25" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
