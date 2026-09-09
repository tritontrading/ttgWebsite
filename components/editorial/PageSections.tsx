import type { ReactNode } from "react";

type PageHeroProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  belowTitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  borderClass?: string;
  descriptionAlign?: "left" | "right";
};

export function PageHero({
  label,
  title,
  description,
  belowTitle,
  children,
  className = "",
  borderClass = "border-b border-editorial/6",
  descriptionAlign = "left",
}: PageHeroProps) {
  const splitDescription = descriptionAlign === "right";

  return (
    <section className={`page-hero-padding ${borderClass} ${className}`}>
      <div className="site-container">
        <div
          className={
            splitDescription
              ? "layout-grid-gap-lg grid grid-cols-1 items-end lg:grid-cols-2"
              : undefined
          }
        >
          <div>
            {label ? (
              <span
                className="page-hero-reveal label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50"
                style={{ animationDelay: "0ms" }}
              >
                {label}
              </span>
            ) : null}
            <h1
              className="page-hero-reveal heading-gap font-heading text-4xl font-normal leading-none text-heading sm:text-5xl md:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              {title}
            </h1>
            {belowTitle}
            {description && !splitDescription && (
              <div
                className="page-hero-reveal text-base leading-relaxed text-text/60"
                style={{ animationDelay: "200ms" }}
              >
                {description}
              </div>
            )}
          </div>
          {description && splitDescription && (
            <div
              className="page-hero-reveal max-w-lg text-base leading-relaxed text-text/60 lg:ml-auto lg:text-right"
              style={{ animationDelay: "200ms" }}
            >
              {description}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHeroSplit({
  label,
  title,
  description,
  media,
  borderClass = "border-b border-editorial/6",
}: {
  label: string;
  title: ReactNode;
  description: ReactNode;
  media: ReactNode;
  borderClass?: string;
}) {
  return (
    <section className={`page-hero-padding ${borderClass}`}>
      <div className="site-container">
        <div className="layout-grid-gap-lg grid grid-cols-1 items-center lg:grid-cols-2">
          <div>
            <span
              className="page-hero-reveal label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50"
              style={{ animationDelay: "0ms" }}
            >
              {label}
            </span>
            <h1
              className="page-hero-reveal heading-gap font-heading text-4xl font-normal leading-none text-heading sm:text-5xl md:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              {title}
            </h1>
            <div
              className="page-hero-reveal max-w-lg text-base leading-relaxed text-text/60"
              style={{ animationDelay: "200ms" }}
            >
              {description}
            </div>
          </div>
          <div
            className="page-hero-reveal overflow-hidden rounded-lg border border-editorial/6"
            style={{ animationDelay: "280ms" }}
          >
            {media}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EditorialLabel({ children }: { children: ReactNode }) {
  return (
    <span className="label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50">
      {children}
    </span>
  );
}

export function EditorialDivider({ heavy = false }: { heavy?: boolean }) {
  return (
    <div className={`section-divider-gap border-t border-editorial/6 ${heavy ? "" : "md:mb-20"}`} />
  );
}

export function EditorialSection({
  children,
  className = "",
  border = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  border?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`section-padding ${border ? "border-b border-editorial/6" : ""} ${className}`}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="section-block-gap">
      <EditorialLabel>{label}</EditorialLabel>
      <EditorialDivider />
      {typeof title === "string" ? (
        <h2 className="font-heading text-base font-normal leading-tight text-heading">{title}</h2>
      ) : (
        title
      )}
      {description}
    </div>
  );
}

export function ApplyCtaBand({
  eyebrow,
  title,
  description,
  buttonLabel = "Apply Now",
  href = "https://docs.google.com/forms/d/e/1FAIpQLSf5iQbS2NwGXnqd-L0uw4LxIIB7bJtzA8ZUCeg6xoZP6TbQsA/viewform",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="section-padding border-t border-editorial/6">
      <div className="site-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          {eyebrow ? (
            <span className="label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mb-4 font-heading text-3xl font-normal text-heading">{title}</h2>
          <p className="text-sm text-text/50">{description}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="w-full shrink-0 rounded-md border border-editorial px-8 py-4 text-center font-mono text-sm tracking-widest uppercase text-editorial transition-all duration-200 hover:bg-editorial hover:text-cream sm:w-auto"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
