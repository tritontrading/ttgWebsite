import { site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export function HeroContent() {
  const { headline, description } = site.hero;

  return (
    <div className="site-container relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-10 pb-24 pt-40 text-center md:gap-12 md:pb-32 md:pt-48">
      <p className="hero-reveal font-mono text-xs tracking-widest text-text/50 uppercase">
        Formerly Triton Trading Group
      </p>
      <h1 className="hero-reveal mx-auto max-w-3xl font-heading text-[2.5rem] leading-[1.14] tracking-[-0.025em] text-heading sm:text-[2.875rem] md:text-[3.75rem] lg:text-[4rem]">
        {headline}
      </h1>

      <p className="hero-reveal mx-auto max-w-xl font-heading text-lg leading-relaxed text-text/70 md:text-xl">
        {description}
      </p>

      <div className="hero-reveal">
        <ButtonLink
          href="/advisory"
          variant="primary"
          className="px-6 py-2.5 text-xs tracking-[0.2em]"
        >
          Work with us
        </ButtonLink>
      </div>
    </div>
  );
}
