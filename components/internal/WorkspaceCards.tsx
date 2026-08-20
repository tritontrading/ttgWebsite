"use client";

type Row = Record<string, unknown>;
const uuid = /^[0-9a-f]{8}-[1-5][0-9a-f-]{34}$/i;
const date = (value: unknown) => value ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(String(value))) : null;
function title(row: Row) { return String(row.name ?? row.title ?? row.ticker ?? row.email ?? row.id ?? "Untitled"); }
function summary(row: Row) { const values = [row.status, row.priority, row.department, row.exchange, row.owner_id ? "assigned" : null, row.due_at ? `due ${date(row.due_at)}` : null, row.created_at ? `created ${date(row.created_at)}` : null].filter(Boolean); return values.join(" · "); }
export function WorkspaceCards({ rows, section, resource, loading }: { rows: unknown[]; section: string; resource: string; loading: boolean }) {
  if (loading) return <p className="mt-7 border border-white/15 p-5 text-sm text-white/55">Loading workspace…</p>;
  if (!rows.length) return <div className="mt-7 border border-dashed border-white/20 p-8 text-sm text-white/55">Nothing here yet. Use the action above to create the first item.</div>;
  return <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{rows.map((item, index) => { const row = item as Row; const id = typeof row.id === "string" && uuid.test(row.id) ? row.id : null; const href = id ? `/internal/${section}/${resource}/${id}` : null; return <article key={String(row.id ?? index)} className="group border border-white/15 bg-white/5 p-5 transition hover:border-[#c79a3b]/70 hover:bg-white/[.08]"><div className="flex items-start justify-between gap-3"><div><p className="text-lg font-medium">{title(row)}</p><p className="mt-2 text-xs leading-5 text-white/55">{summary(row) || "Open workspace item"}</p></div>{href && <a href={href} className="border border-white/20 px-2 py-1 text-[10px] font-bold tracking-[.1em] text-[#f0cb7b]">OPEN</a>}</div>{typeof row.body === "string" && <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/65">{row.body}</p>}{typeof row.description === "string" && <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/65">{row.description}</p>}</article>; })}</div>;
}
