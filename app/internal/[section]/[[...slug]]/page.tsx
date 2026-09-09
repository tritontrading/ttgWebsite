import Link from "next/link";
import { WorkspaceClient } from "@/components/internal/WorkspaceClient";

type Area = { title: string; eyebrow: string; intro: string; items: string[]; note: string };
const areas: Record<string, Area> = {
  am: { title: "Asset Management", eyebrow: "RESEARCH DESK", intro: "Issuer research, investment decisions, and a shared simulated portfolio.", items: ["Portfolio", "Portfolio Performance", "Market Research", "Technical", "Competitive", "Corporate Structure", "DCF", "Market Comparison", "Peer Research", "Headlines", "Earnings", "Screener", "Market Signals", "Macro", "Coverage", "Theses", "Pitches", "Discussion", "Orders", "Trades", "Leaderboard"], note: "Every proposed trade is tied to a thesis. Pitches are voted on, officer-approved, and filled against the portfolio with an auditable cash and position update." },
  quant: { title: "Quant", eyebrow: "MODEL LIBRARY", intro: "The durable record of models and their imported research evidence—without an execution engine.", items: ["Dashboard", "Model library", "Model details", "Source versions", "Run artifacts", "Seen / unseen comparison"], note: "Quant stores models, source versions, raw artifacts, normalized metrics, and seen-versus-unseen comparisons in the shared API." },
  admin: { title: "Operations", eyebrow: "ORGANIZATION SYSTEM", intro: "The operating record for people, commitments, meetings, projects, and repeatable work.", items: ["Profile", "Tasks", "Deadlines", "People", "Projects", "Divisions", "Teams", "Events", "Deliverables", "Roles", "Assignment Rules", "Workflow Templates", "Workflow Runs", "Recurrence Rules", "Meetings", "Announcements", "Dashboard", "Notifications", "Audit History"], note: "Actions are capability-gated and recorded in the organization audit log. Workflow runs resolve role capabilities into assigned tasks." },
};
const itemSlug = (item: string) => item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function InternalSection({ params }: { params: Promise<{ section: string; slug?: string[] }> }) {
  const { section, slug = [] } = await params; const area = areas[section];
  if (!area) return <div className="p-8">Workspace not found.</div>;
  const active = slug.map((part) => part.replaceAll("-", " ")).join(" / ") || "Overview";
  return <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-8">
    <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="md:border-r md:border-white/15 md:pr-6"><p className="mb-7 text-[10px] font-bold tracking-[.22em] text-[#c79a3b]">{area.eyebrow}</p><nav className="grid gap-1">{area.items.map((item) => <Link key={item} href={`/internal/${section}/${itemSlug(item)}`} className="border-l border-white/15 px-3 py-2 text-sm text-white/65 hover:border-[#c79a3b] hover:text-white">{item}</Link>)}</nav></aside>
      <section>
        <div className="border-b border-white/15 pb-8"><p className="mb-3 text-[11px] font-bold tracking-[.18em] text-[#c79a3b]">{active.toUpperCase()}</p><h1 className="mb-5 text-5xl leading-none md:text-6xl">{area.title}</h1><p className="max-w-2xl text-lg leading-7 text-white/65">{area.intro}</p></div>
        <div className="mt-8 border-l-2 border-[#c79a3b] bg-white/5 p-6 text-sm leading-6 text-white/70">{area.note}</div>
        <WorkspaceClient section={section} slug={slug} />
      </section>
    </div>
  </div>;
}
