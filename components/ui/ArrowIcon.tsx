type ArrowIconProps = {
  direction?: "right" | "external";
  className?: string;
};

/** A fine shaft and compact, open arrowhead for directional links. */
export function ArrowIcon({ direction = "right", className = "" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      <path d={direction === "external" ? "M6 18 18 6M12 6h6v6" : "M4 12h16M16 8l4 4-4 4"} />
    </svg>
  );
}
