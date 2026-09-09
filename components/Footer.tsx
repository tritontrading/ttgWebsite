import { footer, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-footer-border bg-footer-bg px-8 py-16 text-footer-text md:px-16 md:py-24">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-start md:gap-16">
          <div>
            <span className="mb-4 block font-mono text-sm font-semibold text-footer-text">
              {site.name.toUpperCase()}
            </span>
            <span className="font-mono text-sm leading-relaxed text-footer-text/80">{site.university}</span>
            <a
              href={`mailto:${footer.email}`}
              className="mt-4 block font-mono text-sm text-footer-link transition-colors duration-200 hover:text-footer-text"
            >
              {footer.email}
            </a>
            <span className="mt-4 block font-mono text-xs leading-relaxed text-footer-text/80">
              {footer.address}
            </span>
            <span className="block font-mono text-xs leading-relaxed text-footer-text/80">
              EIN {footer.ein}
            </span>
          </div>

          <div className="min-w-56">
            <span className="mb-4 block font-mono text-sm font-semibold text-footer-text">
              Connect With Us
            </span>
            <div className="grid gap-4">
              {footer.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-4 border-b border-footer-border pb-3 font-mono text-sm text-footer-link transition-colors duration-200 hover:text-footer-text"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-footer-text/60 normal-case">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-left md:max-w-xs md:text-right">
            <span className="font-mono text-xs leading-relaxed text-footer-text/80">
              Copyright {year} {site.name}. All rights reserved.
            </span>
            <span className="font-mono text-xs leading-relaxed text-footer-text/70">{footer.disclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
