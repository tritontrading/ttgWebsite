"use client";

import { useEffect, useState } from "react";

const labels = [
  ["am", "Research theses", "theses"],
  ["am", "Portfolios", "portfolios"],
  ["quant", "Active models", "models"],
  ["quant", "Backtest runs", "backtests"],
  ["admin", "Members", "members"],
  ["admin", "Open tasks", "open_tasks"],
] as const;

export function InternalDashboardClient() {
  const [data, setData] = useState<Record<string, string | number>>({});
  const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
  useEffect(() => { Promise.all(["am", "quant", "admin"].map(async (workspace) => { const response = await fetch(`${api}/api/v1/workspaces/${workspace}`, { credentials: "include" }); if (!response.ok) throw new Error(); return response.json(); })).then((responses) => setData(Object.assign({}, ...responses.map((response) => response.data)))).catch(() => setData({})); }, [api]);
  return <div className="mt-8 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">{labels.map(([workspace, label, key]) => <div key={key} className="border-b border-r border-white/15 p-5"><p className="text-[10px] font-bold tracking-[.16em] text-white/45 uppercase">{workspace} · {label}</p><p className="mt-3 font-heading text-4xl text-[#f8f5ef]">{data[key] ?? "—"}</p></div>)}</div>;
}
