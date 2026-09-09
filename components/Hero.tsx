import { HeroContent } from "@/components/HeroContent";
import { MarketTicker } from "@/components/MarketTicker";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background"
    >
      <HeroContent />
      <div className="relative z-10 mt-auto w-full shrink-0">
        <MarketTicker />
      </div>
    </section>
  );
}
