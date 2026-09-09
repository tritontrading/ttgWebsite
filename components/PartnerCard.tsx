type PartnerCardProps = {
  name: string;
  image?: string;
  initials?: string;
  compact?: boolean;
};

const LOGO_BOX_CLASS = "h-16 w-full md:h-20";

export function PartnerCard({ name, image, initials, compact = false }: PartnerCardProps) {
  return (
    <div
      className={`group flex h-full flex-col items-center justify-center bg-background transition-colors duration-200 ${
        compact ? "gap-4 px-3 py-5 md:px-4 md:py-6" : "gap-8 card-padding"
      }`}
    >
      <div className={`flex items-center justify-center ${LOGO_BOX_CLASS}`}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
        ) : (
          <div
            className={`flex h-full w-full max-w-40 items-center justify-center border border-card-border bg-surface font-mono tracking-[0.16em] text-text/60 transition-colors duration-200 group-hover:text-accent-blue ${
              compact ? "text-xs" : "text-sm"
            }`}
          >
            {initials ?? name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <span
        className={`text-center font-mono normal-case text-text-muted transition-colors duration-200 group-hover:text-accent-blue ${
          compact
            ? "text-[9px] leading-snug tracking-[0.08em] md:text-[10px]"
            : "text-xs tracking-[0.22em] uppercase"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
