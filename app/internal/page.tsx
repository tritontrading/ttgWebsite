import Link from "next/link";
import { InternalDashboardClient } from "@/components/internal/InternalDashboardClient";

const areas = [
  { code: "01", title: "Asset Management", href: "/internal/am", detail: "Issuer research, SEC filings, DCF evidence, portfolios, theses, pitches, and orders.", links: ["Issuer research", "DCF", "Portfolio", "Pitches"] },
  { code: "02", title: "Quant", href: "/internal/quant", detail: "A durable library for models, source versions, imported evidence, and comparison.", links: ["Model library", "Run artifacts", "Comparison"] },
  { code: "03", title: "Operations", href: "/internal/admin", detail: "The organization’s work: people, projects, decisions, meetings, and accountability.", links: ["Tasks", "Projects", "Workflows", "People"] },
];

export default function InternalHome() {
  return <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-16">
    <div className="mb-5 flex items-center justify-between gap-5"><p className="text-xs font-bold tracking-[.22em] text-[#c79a3b]">ONE ORGANIZATION / THREE WORKSPACES</p><div className="flex gap-2"><Link href="/internal/register" className="border border-white/25 px-3 py-2 text-[10px] font-bold tracking-[.16em] hover:border-[#c79a3b] hover:text-[#c79a3b]">REGISTER</Link><Link href="/internal/login" className="border border-white/25 px-3 py-2 text-[10px] font-bold tracking-[.16em] hover:border-[#c79a3b] hover:text-[#c79a3b]">MEMBER SIGN IN</Link></div></div>
    <div className="mb-16 grid gap-8 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr]">
      <h1 className="max-w-3xl text-5xl leading-[.94] md:text-7xl">The daily record of <em className="text-[#c79a3b]">how</em> TTG thinks and works.</h1>
      <p className="self-end max-w-md text-base leading-7 text-white/65">Shared identity and evidence, purpose-built workspaces. Every sensitive action is organization-scoped and auditable.</p>
    </div>
    <div className="grid border-l border-t border-white/15 md:grid-cols-3">
      {areas.map((area) => <Link key={area.href} href={area.href} className="group min-h-80 border-b border-r border-white/15 p-6 transition-colors hover:bg-[#f1eee8] hover:text-[#101010] md:p-8">
        <div className="mb-16 flex justify-between text-xs font-bold tracking-[.16em] text-[#c79a3b]"><span>{area.code}</span><span>OPEN ↗</span></div>
        <h2 className="mb-4 text-4xl leading-none">{area.title}</h2>
        <p className="mb-8 max-w-sm leading-6 opacity-70">{area.detail}</p>
        <p className="text-xs font-bold tracking-[.12em] opacity-60">{area.links.join("  ·  ")}</p>
      </Link>)}
    </div>
    <InternalDashboardClient />
  </div>;
}
