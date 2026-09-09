import { tickerItems } from "@/lib/content";

export function MarketTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-10 w-full">
      <div className="overflow-hidden border-t border-border/60 bg-background/40 py-3 backdrop-blur-[2px]">
        <div className="flex animate-ticker gap-10 whitespace-nowrap">
          {items.map((symbol, index) => (
            <span
              key={`${symbol}-${index}`}
              className="shrink-0 font-mono text-xs tracking-wide text-text/40"
            >
              <span className="text-text/50">{symbol}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
