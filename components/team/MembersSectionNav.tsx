import Link from "next/link";

const sections = [
  { label: "Exec", href: "#exec" },
  { label: "Founders", href: "#founders" },
  { label: "Fall 2026", href: "#fall-2026" },
  { label: "Spring 2026", href: "#spring-2026" },
] as const;

export function MembersSectionNav() {
  return (
    <nav
      aria-label="Member sections"
      className="page-hero-reveal flex flex-wrap gap-x-6 gap-y-2"
      style={{ animationDelay: "160ms" }}
    >
      {sections.map((section) => (
        <Link
          key={section.href}
          href={section.href}
          className="font-mono text-sm text-text/55 transition-colors duration-200 hover:text-heading"
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
