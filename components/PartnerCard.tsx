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
      className={`flex items-center justify-center ${
        compact ? "px-4 py-8 md:px-6 md:py-10" : "p-8 md:p-10"
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
    </div>
  );
}
