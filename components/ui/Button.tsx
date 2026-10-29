import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

type ButtonVariant = "primary" | "secondary" | "gold" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
  arrow?: "right" | "external";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-navy bg-navy text-cream hover:border-gold hover:bg-gold hover:text-navy",
  secondary:
    "border border-border bg-surface text-heading hover:border-heading hover:bg-cream-hover",
  gold: "border border-gold bg-gold text-navy hover:bg-navy hover:text-gold",
  ghost:
    "border border-navy bg-navy text-cream hover:border-gold hover:bg-gold hover:text-navy",
};

const baseClasses =
  "ui-button inline-flex items-center justify-center gap-3 rounded-md px-8 py-4 text-center font-sans text-sm uppercase transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
  arrow,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${fullWidth ? "w-full sm:w-auto" : ""} ${className}`;
  const content = <>{children}{arrow ? <ArrowIcon direction={arrow} /> : null}</>;

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function NavButtonLink({
  href,
  children,
  variant = "gold",
}: Omit<ButtonProps, "className" | "fullWidth" | "arrow">) {
  const base =
    "ui-button inline-flex items-center rounded-md border px-4 py-2 font-sans text-sm transition-colors duration-200";
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
