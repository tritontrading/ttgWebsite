"use client";

import { usePathname, useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter(); const pathname = usePathname();
  async function logout() { await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001"}/api/v1/auth/logout`, { method: "POST", credentials: "include" }); router.replace("/internal/login"); router.refresh(); }
  return pathname === "/internal/login" || pathname === "/internal/register" ? null : <button onClick={logout} className="border border-transparent px-3 py-2 hover:border-[#c79a3b] hover:text-[#c79a3b]">SIGN OUT</button>;
}
