import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'

export const metadata: Metadata = {
  title: 'Community - Triton Trading Group',
  description:
    'Explore the TTG community: mentorship, socials, recruiting support, alumni connections, and the member culture built around learning together.',
}

const COMMUNITY_PILLARS = [
  {
    title: 'Peer Learning',
    desc: 'Members improve quickly by working in tight teams, sharing research standards, and reviewing each other\'s thinking in public.',
  },
  {
    title: 'Mentorship',
    desc: 'Older members and leadership help newer analysts ramp across markets, modeling, recruiting, and presentation skills.',
  },
  {
    title: 'Social Events',
    desc: 'The group runs socials, hangouts, and informal gatherings that make the club feel like a real operating community instead of a loose roster.',
  },
  {
    title: 'Professional Network',
    desc: 'TTG connects members with alumni, speakers, and recruiting brands that widen the path into finance, consulting, and technology roles.',
  },
  {
    title: 'Accountability',
    desc: 'Teams are expected to show up prepared, produce work on time, and contribute to a culture where serious effort is normal.',
  },
  {
    title: 'Shared Ambition',
    desc: 'The community is built around people who want to get sharper together and hold a higher standard than the average campus org.',
  },
]

const PHOTO_GRID = [
  {
    src: '/images/socials/GroupPicUsc.jpeg',
    alt: 'TTG members at a community event',
    span: 'md:col-span-2 md:row-span-2',
    height: 'min-h-[20rem] md:min-h-[30rem]',
  },
  {
    src: '/images/socials/GuysPicUsc.JPG',
    alt: 'TTG members together as a group',
    span: 'md:col-span-1 md:row-span-1',
    height: 'min-h-[16rem]',
  },
  {
    src: '/images/socials/GirlsUsc.JPG',
    alt: 'TTG community photo',
    span: 'md:col-span-1 md:row-span-1',
    height: 'min-h-[16rem]',
  },
  {
    src: '/images/socials/hutPic.JPG',
    alt: 'TTG members networking together',
    span: 'md:col-span-1 md:row-span-1',
    height: 'min-h-[16rem]',
  },
  {
    src: '/images/socials/image1.png',
    alt: 'TTG social gathering',
    span: 'md:col-span-2 md:row-span-1',
    height: 'min-h-[18rem]',
  },
]

const CADENCE = [
  'Weekly meetings with branch-specific work and full-group updates',
  'Technical and market education sessions led by members and leadership',
  'Mock interviews, recruiting preparation, and peer feedback',
  'Socials that keep the group cohesive outside formal meetings',
  'Guest speakers and network-facing programming throughout the quarter',
]

const BENEFITS = [
  'Mentorship from older members and board leads',
  'A built-in peer group across finance, strategy, and quant',
  'Access to recruiting guidance and professional resources',
  'A place to test ideas, ask better questions, and improve fast',
  'Community momentum that makes consistent work easier to sustain',
]

const TOUCHPOINTS = [
  {
    label: 'ONBOARDING',
    detail: 'New members learn the norms, expectations, and working style quickly through structured early support.',
  },
  {
    label: 'SOCIALS',
    detail: 'Informal events help members build real familiarity across branches and graduating classes.',
  },
  {
    label: 'ALUMNI',
    detail: 'Students benefit from examples, advice, and recruiting context from people who have already gone through the process.',
  },
  {
    label: 'RECRUITING',
    detail: 'Resume reviews, interview prep, and peer support turn the club into a practical career accelerator.',
  },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      <section className="border-b-2 border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-6 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                COMMUNITY
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-none text-[#080808] sm:text-5xl md:text-7xl">
                Built Like
                <br />
                A Real Team
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-[#080808]/60">
                TTG is more than a set of technical tracks. It is a community built around disciplined work,
                ambitious peers, consistent mentorship, and a social culture that keeps members connected across
                branches, graduating classes, and career paths.
              </p>
            </div>
            <div className="overflow-hidden border-2 border-[#080808]/20">
              <Image
                src="/images/socials/image1.png"
                alt="TTG community event"
                width={700}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                COMMUNITY GALLERY
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#080808] md:text-5xl">
                The page should look lived in.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#080808]/55">
              TTG works hard, but it also looks like an actual community. This gallery leans into that:
              shared events, cross-branch interaction, mentorship, and the social texture around the work.
            </p>
          </div>
          <div className="mb-12 border-t-2 border-[#080808]/20" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[12rem]">
            {PHOTO_GRID.map((photo, index) => (
              <article
                key={`${photo.src}-${index}`}
                className={`group relative overflow-hidden border-2 border-[#080808]/20 bg-[#f4f5ec] ${photo.span} ${photo.height}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                RHYTHM OF THE GROUP
              </span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
                {CADENCE.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 px-5 py-5 md:px-6">
                    <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#0066ff]">
                      0{index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[#080808]/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                CULTURE SNAPSHOT
              </span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden border-2 border-[#080808]/20">
                  <Image
                    src="/images/socials/image2.png"
                    alt="TTG members together"
                    width={320}
                    height={360}
                    className="h-[15rem] w-full object-cover md:h-[18rem]"
                  />
                </div>
                <div className="relative overflow-hidden border-2 border-[#080808]/20">
                  <Image
                    src="/images/socials/image1.png"
                    alt="TTG event photo"
                    width={320}
                    height={360}
                    className="h-[15rem] w-full object-cover md:h-[18rem]"
                  />
                </div>
                <div className="col-span-2 border-2 border-[#080808]/20 bg-[#f4f5ec] p-5 md:p-6">
                  <h3 className="mb-3 font-serif text-2xl font-bold text-[#080808]">
                    Community is part of the product.
                  </h3>
                  <p className="text-sm leading-relaxed text-[#080808]/60">
                    People stay engaged when the group feels real. TTG blends serious technical work with a visible,
                    social, and high-trust member environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="mb-4 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
                WHY IT MATTERS
              </span>
              <div className="mb-8 border-t-2 border-[#080808]/20" />
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#080808] md:text-4xl">
                Strong communities compound.
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#080808]/60">
                Members do better work when they are surrounded by people who care, challenge them directly,
                and make the process sustainable. TTG treats community as infrastructure, not decoration.
              </p>
              <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {COMMUNITY_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="border border-[#080808]/15 bg-[#f7f8ef] p-4">
                    <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#0066ff]">
                      {pillar.title}
                    </span>
                    <p className="text-sm leading-relaxed text-[#080808]/55">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-sm text-[#080808]/70">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#0066ff]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-[#080808]/15 sm:grid-cols-2">
              {TOUCHPOINTS.map((point) => (
                <div key={point.label} className="bg-cream p-6 md:p-8">
                  <span className="mb-3 block font-mono text-[10px] tracking-[0.22em] uppercase text-[#0066ff]">
                    {point.label}
                  </span>
                  <p className="text-sm leading-relaxed text-[#080808]/55">{point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-2 border-[#080808]/20 p-6 md:flex-row md:items-center md:p-10">
          <div>
            <span className="mb-3 block font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
              JOIN THE COMMUNITY
            </span>
            <h2 className="mb-2 font-serif text-3xl font-bold text-[#080808]">
              Want in?
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#080808]/55">
              TTG is built for people who want a real peer group, serious standards, and a stronger path into
              finance, strategy, and quantitative work.
            </p>
          </div>
          <ApplyNowLink className="w-full shrink-0 border-2 border-[#080808] px-10 py-4 text-center font-mono text-sm tracking-widest uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-cream sm:w-auto">
            Apply Now
          </ApplyNowLink>
        </div>
      </section>

      <Footer />
    </main>
  )
}
