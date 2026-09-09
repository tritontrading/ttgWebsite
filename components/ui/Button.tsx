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

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-navy bg-navy text-cream hover:border-gold hover:bg-gold hover:text-navy",
  secondary:
    "border border-border bg-surface text-heading hover:border-heading hover:bg-cream-hover",
  gold: "border border-gold bg-gold text-navy hover:bg-transparent hover:text-navy",
  ghost:
    "border border-navy bg-navy text-cream hover:border-gold hover:bg-gold hover:text-navy",
};

const baseClasses =
  "inline-block rounded-md px-8 py-4 text-center font-mono text-sm tracking-[0.24em] uppercase transition-all duration-200";

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
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
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
    "inline-flex items-center rounded-md border px-4 py-2 font-mono text-sm leading-none transition-all duration-200";
  const classes =
    variant === "secondary"
      ? `${base} border-border bg-surface text-heading hover:border-heading hover:bg-cream-hover`
      : variant === "gold"
        ? `${base} border-gold bg-transparent text-navy hover:bg-gold hover:text-navy`
        : `${base} border-navy bg-navy text-cream hover:border-gold hover:bg-gold hover:text-navy`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
