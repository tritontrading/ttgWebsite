import { SiteImage } from "@/components/ui/SiteImage";

export type TeamMember = {
  name: string;
  role: string;
  title?: string | null;
  bio?: string;
  image?: string | null;
  linkedin?: string;
  photoTba?: boolean;
};

function MemberName({ member }: { member: TeamMember }) {
  const className = "font-heading text-base font-normal leading-tight text-heading";

  return (
    <h3 className={className}>
      {member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-brand-blue"
        >
          {member.name}
        </a>
      ) : (
        member.name
      )}
    </h3>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const displayTitle = member.title ?? member.role;

  return (
    <div className="flex flex-col">
      <div className="relative aspect-2/3 w-full overflow-hidden border border-card-border bg-editorial-muted">
        {member.photoTba || !member.image ? (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-text/20">
              Photo TBA
            </span>
          </div>
        ) : (
          <SiteImage
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        )}
      </div>
      <div className="flex flex-col gap-1 pt-4">
        <MemberName member={member} />
        <p className="font-mono text-[11px] leading-snug tracking-wide text-text/55">{displayTitle}</p>
      </div>
    </div>
  );
}

export function TeamGrid({
  label,
  members,
  id,
  className = "",
  compactHeader = false,
}: {
  label: string;
  members: TeamMember[];
  id?: string;
  className?: string;
  compactHeader?: boolean;
}) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-24 border-b border-editorial/6 ${className}`}
    >
      <div className="site-container">
        <div className={compactHeader ? "section-block-gap-compact" : "section-block-gap"}>
          <span className="label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50">
            {label}
          </span>
          <div className="border-t border-editorial/6" />
        </div>
        <MemberCardGrid members={members} />
      </div>
    </section>
  );
}

function MemberCardGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="layout-grid-gap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <TeamMemberCard key={member.name} member={member} />
      ))}
    </div>
  );
}

function MemberDirectory({ members }: { members: TeamMember[] }) {
  return (
    <div>
      <div className="hidden grid-cols-[minmax(0,1fr)_minmax(12rem,0.65fr)] gap-8 border-y border-editorial/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text/40 md:grid">
        <span>Name</span>
        <span>Role</span>
      </div>
      <div className="border-t border-editorial/10 md:border-t-0">
        {members.map((member) => (
          <div
            key={member.name}
            className="grid gap-1 border-b border-editorial/10 px-4 py-5 transition-colors duration-200 hover:bg-editorial/3 md:grid-cols-[minmax(0,1fr)_minmax(12rem,0.65fr)] md:items-center md:gap-8 md:py-4"
          >
            <MemberName member={member} />
            <p className="font-mono text-[11px] leading-snug tracking-wide text-text/55">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TeamMembersSection({
  label,
  divisions,
  id,
}: {
  label: string;
  divisions: readonly { label: string; members: TeamMember[] }[];
  id?: string;
}) {
  return (
    <section id={id} className="section-padding scroll-mt-24 border-b border-editorial/6">
      <div className="site-container">
        <div className="section-block-gap">
          <span className="label-gap block font-mono text-[13px] tracking-widest uppercase text-text/50">
            {label}
          </span>
          <div className="border-t border-editorial/6" />
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          {divisions.map((division) => (
            <div key={division.label}>
              <span className="mb-6 block font-mono text-xs tracking-wide text-text/45">
                {division.label}
              </span>
              <MemberDirectory members={division.members} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
