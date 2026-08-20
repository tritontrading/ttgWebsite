import type { ReactNode } from "react";
import Link from "next/link";

const sections = [
  ["AM", "/internal/am", "Asset management"],
  ["Q", "/internal/quant", "Model library"],
  ["OPS", "/internal/admin", "Operations"],
] as const;

export default function InternalLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-[#101010] text-[#f8f5ef]">
    <header className="border-b border-white/15 px-5 py-4 md:px-8">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
        <Link href="/internal" className="font-heading text-xl tracking-tight">TTG <span className="text-[#c79a3b]">/</span> INTERNAL</Link>
        <nav aria-label="Internal navigation" className="flex items-center gap-1 text-[11px] font-bold tracking-[.16em] text-white/60">
          {sections.map(([short, href, label]) => <Link key={href} href={href} title={label} className="border border-transparent px-3 py-2 hover:border-[#c79a3b] hover:text-[#c79a3b]">{short}</Link>)}
          <Link href="/" className="ml-2 border-l border-white/15 px-3 py-2 hover:text-[#c79a3b]">PUBLIC</Link>
        </nav>
      </div>
    </header>
    {children}
  </main>;
}
