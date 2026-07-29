import Link from "next/link";

const sections = [
  { label: "Exec", href: "#exec" },
  { label: "Board", href: "#board" },
  { label: "Members", href: "#members" },
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
