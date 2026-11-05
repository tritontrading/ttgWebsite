import Link from "next/link";
import { footer, primaryLinks, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-footer-border bg-footer-bg px-8 py-16 text-footer-text md:px-16 md:py-24">
      <div className="site-container">
        <div className="grid items-start gap-12 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="max-w-md">
            <span className="mb-4 block font-mono text-sm font-semibold text-footer-text">
              {site.name}
            </span>
            <p className="font-mono text-xs leading-relaxed text-footer-text/80">{footer.description}</p>
            <address className="mt-4 font-mono text-xs not-italic leading-relaxed text-footer-text/80">
              {footer.address}
            </address>
            <p className="font-mono text-xs leading-relaxed text-footer-text/80">Legal entity: {site.legalName}. EIN: {footer.ein}</p>
            <p className="font-mono text-xs leading-relaxed text-footer-text/80">
              Official Website:{" "}
              <a
                href={`https://${footer.website}`}
                className="text-footer-link transition-colors duration-200 hover:text-footer-text"
              >
                {footer.website}
              </a>
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="mt-4 block font-mono text-sm text-footer-link transition-colors duration-200 hover:text-footer-text"
            >
              {footer.email}
            </a>
          </div>

          <div className="min-w-0">
            <span className="mb-4 block font-mono text-sm font-semibold text-footer-text">Explore</span>
            <div className="grid gap-3 font-mono text-sm text-footer-link">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-footer-text">{link.label}</Link>
              ))}
              <Link href="/community" className="hover:text-footer-text">Members & community</Link>
              <span className="mt-4 font-semibold text-footer-text">Recruitment</span>
              <p className="max-w-56 text-xs leading-relaxed text-footer-text/80">
                Applications are currently closed. Follow our social channels for future recruitment updates.
              </p>
            </div>
          </div>

          <div className="min-w-0 md:col-span-2 xl:col-span-1 xl:justify-self-end">
            <span className="mb-4 block font-mono text-sm font-semibold text-footer-text xl:text-right">
              Connect With Us
            </span>
            <div className="grid min-w-56 gap-4">
              {footer.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-4 border-b border-footer-border pb-3 font-mono text-sm text-footer-link transition-colors duration-200 hover:text-footer-text"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-footer-text/60">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-footer-border pt-8 font-mono text-xs leading-relaxed text-footer-text/70 md:flex-row md:items-baseline md:justify-between">
          <span>{footer.disclaimer}</span>
          <a href="/disclaimer" className="underline">Website disclaimer</a>
        </div>
        <p className="mt-6 font-mono text-xs text-footer-text/60">
          Copyright {year} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
