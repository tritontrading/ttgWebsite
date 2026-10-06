import { site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

export function HeroContent() {
  const { headline, description, image, alt } = site.hero;

  return (
    <div className="site-container relative z-10 flex w-full flex-1 flex-col justify-center gap-14 pb-24 pt-40 md:gap-16 md:pb-32 md:pt-48 lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-20 xl:gap-24">
      <div className="flex flex-col items-start gap-8 md:gap-10 lg:max-w-none lg:pr-6 xl:pr-10">
        <h1 className="hero-reveal max-w-3xl font-heading text-[2.5rem] leading-[1.14] tracking-[-0.025em] text-heading sm:text-[2.875rem] md:text-[3.75rem] lg:max-w-[42rem] lg:text-[4rem]">
          {headline}
        </h1>

        <p className="hero-reveal max-w-2xl text-base leading-loose text-text/75 md:text-lg">
          {description}
        </p>

        <div className="hero-reveal flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-5">
          <ButtonLink
            href="/recruitment"
            variant="primary"
            className="px-6 py-2.5 text-xs tracking-[0.2em]"
          >
            Join our team
          </ButtonLink>
          <ButtonLink
            href="/advisory"
            variant="secondary"
            className="px-6 py-2.5 text-xs tracking-[0.2em] text-navy"
          >
            Work with us
          </ButtonLink>
        </div>
      </div>

      <div className="hero-reveal relative w-full lg:justify-self-end">
        <div className="relative aspect-[4/3] overflow-hidden border border-border sm:aspect-[3/2] lg:aspect-[5/4]">
          <SiteImage
            src={image}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
