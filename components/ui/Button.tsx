import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "gold" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
};

// Secondary is a plain text link: no box, no outline.
const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-navy bg-navy text-cream hover:border-heading hover:bg-heading",
  secondary:
    "!px-0 text-heading underline decoration-text/30 underline-offset-[6px] hover:decoration-heading",
  gold: "border border-cream bg-cream text-navy hover:bg-transparent hover:text-cream",
  ghost: "border border-navy bg-navy text-cream hover:border-heading hover:bg-heading",
};

const baseClasses =
  "ui-button inline-flex items-center justify-center gap-3 rounded-md px-6 py-3 text-center font-sans text-base transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${fullWidth ? "w-full sm:w-auto" : ""} ${className}`;

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function NavButtonLink({
  href,
  children,
  variant = "gold",
}: Omit<ButtonProps, "className" | "fullWidth">) {
  const base =
    "ui-button inline-flex items-center rounded-md border px-4 py-2 font-sans text-sm transition-colors duration-200";
  const classes =
    variant === "secondary"
      ? `${base} border-border bg-surface text-heading hover:border-heading hover:bg-cream-hover`
      : `${base} border-navy bg-navy text-cream hover:border-heading hover:bg-heading`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
