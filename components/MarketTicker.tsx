import { tickerItems } from "@/lib/content";

export function MarketTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-10 w-full">
      <div className="overflow-hidden border-t border-border/60 bg-background/40 py-3 backdrop-blur-[2px]">
        <div className="flex animate-ticker gap-10 whitespace-nowrap">
          {items.map((item, index) => (
            <span
              key={`${item.symbol}-${index}`}
              className="shrink-0 font-mono text-xs tracking-wide text-text/40"
            >
              <span className="text-text/50">{item.symbol}</span>{" "}
              <span className={item.positive ? "text-gold/55" : "text-text/30"}>
                {item.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
