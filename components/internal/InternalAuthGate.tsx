"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export function InternalAuthGate({ children }: { children: ReactNode }) {
  const pathname = usePathname(); const router = useRouter(); const [ready, setReady] = useState(false);
  const publicPage = pathname === "/internal/login" || pathname === "/internal/register";
  useEffect(() => { if (publicPage) { setReady(true); return; } fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001"}/api/v1/auth/me`, { credentials: "include" }).then((response) => { if (!response.ok) router.replace("/internal/login"); else setReady(true); }).catch(() => router.replace("/internal/login")); }, [publicPage, router]);
  return publicPage || ready ? <>{children}</> : <main className="grid min-h-screen place-items-center bg-[#101010] text-sm text-white/60">Checking member access…</main>;
}
