import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  ApplyCtaBand,
  EditorialLabel,
  EditorialSection,
  PageHeroSplit,
} from "@/components/editorial/PageSections";
import { SiteImage } from "@/components/ui/SiteImage";
import { CommunityCarousel } from "@/components/CommunityCarousel";

export const metadata: Metadata = {
  title: "Community - Triton Trading Group",
  description:
    "Explore the TTG community: mentorship, socials, recruiting support, alumni connections, and the member culture built around learning together.",
};

const COMMUNITY_PILLARS = [
  {
    title: "Peer Learning",
    desc: "Members work together on research, projects, and presentations.",
  },
  {
    title: "Mentorship",
    desc: "Members share advice on markets, modeling, recruiting, and presentations.",
  },
  {
    title: "Social Events",
    desc: "Socials and informal gatherings help members get to know one another.",
  },
  {
    title: "Professional Network",
    desc: "Members can connect with alumni and speakers through TTG programming.",
  },
];

const CADENCE = [
  "Weekly meetings with branch-specific work and full-group updates",
  "Technical and market education sessions led by members and leadership",
  "Mock interviews, recruiting preparation, and peer feedback",
  "Socials that keep the group cohesive outside formal meetings",
  "Guest speakers and network-facing programming throughout the quarter",
];

const TOUCHPOINTS = [
  {
    label: "Onboarding",
    detail: "New members learn the norms, expectations, and working style quickly through structured early support.",
  },
  {
    label: "Socials",
    detail: "Informal events help members build real familiarity across branches and graduating classes.",
  },
  {
    label: "Alumni",
    detail: "Students benefit from examples, advice, and recruiting context from people who have already gone through the process.",
  },
  {
    label: "Recruiting",
    detail: "Resume reviews, interview prep, and peer support turn the club into a practical career accelerator.",
  },
];

export default function CommunityPage() {
  return (
    <SiteLayout>
      <PageHeroSplit
        label="Community"
        title="Meet the TTG community"
        description="TTG brings together students working across asset management, FP&A, and quantitative finance."
        media={
          <SiteImage
            src="/images/socials/image1.png"
            alt="TTG community event"
            width={700}
            height={420}
            className="h-auto w-full object-cover"
          />
        }
      />

      <EditorialSection>
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <EditorialLabel>Community Gallery</EditorialLabel>
            <h2 className="font-heading text-3xl font-normal text-heading md:text-5xl">
              Community
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-text/55">
            Photos from socials, mentorship sessions, and cross-branch events — the parts of TTG
            that don&apos;t show up in a strategy writeup.
          </p>
        </div>
        <CommunityCarousel />
      </EditorialSection>

      <EditorialSection>
        <div className="grid grid-cols-1 layout-grid-gap-lg lg:grid-cols-2">
          <div>
            <EditorialLabel>Rhythm Of The Group</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <div className="divide-y divide-card-border surface-card overflow-hidden">
              {CADENCE.map((item, index) => (
                <div key={item} className="flex items-start gap-4 px-6 py-6">
                  <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand-blue">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-text/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <EditorialLabel>Culture Snapshot</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <p className="mb-6 text-sm leading-relaxed text-text/55">
              Members show up because the work is real and so are the people doing it — technical
              rigor alongside an actual social life.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <SiteImage
                src="/images/socials/image2.png"
                alt="TTG members together"
                width={320}
                height={360}
                className="h-[15rem] w-full object-cover md:h-[18rem]"
              />
              <SiteImage
                src="/images/socials/image1.png"
                alt="TTG event photo"
                width={320}
                height={360}
                className="h-[15rem] w-full object-cover md:h-[18rem]"
              />
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <div className="grid grid-cols-1 items-center layout-grid-gap-lg lg:grid-cols-2">
          <div>
            <EditorialLabel>Why It Matters</EditorialLabel>
            <div className="mb-8 border-t border-editorial/6" />
            <h2 className="mb-4 font-heading text-3xl font-normal text-heading md:text-4xl">
              Learn alongside other students.
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-text/60">
              Community gives members a place to share work, ask questions, and build connections
              outside formal meetings.
            </p>
            <div className="divide-y divide-card-border border-y border-card-border">
              {COMMUNITY_PILLARS.map((pillar) => (
                <div key={pillar.title} className="py-4">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.22em] uppercase text-brand-blue">
                    {pillar.title}
                  </span>
                  <p className="text-sm leading-relaxed text-text/55">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-editorial/10 sm:grid-cols-2">
            {TOUCHPOINTS.map((point) => (
              <div key={point.label} className="bg-background p-6 md:p-8">
                <span className="mb-3 block font-mono text-[10px] tracking-[0.22em] uppercase text-brand-blue">
                  {point.label}
                </span>
                <p className="text-sm leading-relaxed text-text/55">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSection>

      <ApplyCtaBand
        title="Interested in TTG?"
        description="Apply to learn with students working across finance, strategy, and quantitative research."
      />
    </SiteLayout>
  );
}
