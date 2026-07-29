import { SiteImage } from "@/components/ui/SiteImage";

export type TeamMember = {
  name: string;
  role: string;
  title?: string | null;
  bio?: string;
  image?: string | null;
  photoTba?: boolean;
};

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
        <h3 className="font-heading text-base font-normal leading-tight text-heading">{member.name}</h3>
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
              <MemberCardGrid members={division.members} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
