import { HeroContent } from "@/components/HeroContent";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background"
    >
      <HeroContent />
    </section>
  );
}
