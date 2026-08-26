"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function InternalLogin() {
  const router = useRouter(); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const form = new FormData(event.currentTarget); const endpoint = `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001"}/api/v1/auth/login`;
    try { const response = await fetch(endpoint, { method: "POST", credentials: "include", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) }); if (!response.ok) throw new Error("Invalid email or password"); router.push("/internal"); router.refresh(); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to sign in"); } finally { setLoading(false); }
  }
  return <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-[1440px] place-items-center px-5 py-12"><form onSubmit={submit} className="w-full max-w-md border border-white/15 bg-white/5 p-7 md:p-10"><p className="mb-4 text-[10px] font-bold tracking-[.22em] text-[#c79a3b]">MEMBER ACCESS</p><h1 className="mb-8 text-5xl leading-none">Enter the record.</h1><label className="mb-5 block text-xs font-bold tracking-[.12em] text-white/65">EMAIL<input required name="email" type="email" className="mt-2 w-full border border-white/20 bg-transparent px-3 py-3 text-base outline-none focus:border-[#c79a3b]" /></label><label className="mb-6 block text-xs font-bold tracking-[.12em] text-white/65">PASSWORD<input required name="password" type="password" className="mt-2 w-full border border-white/20 bg-transparent px-3 py-3 text-base outline-none focus:border-[#c79a3b]" /></label>{error && <p role="alert" className="mb-4 text-sm text-[#ff9f7d]">{error}</p>}<button disabled={loading} className="w-full bg-[#c79a3b] px-4 py-3 text-xs font-bold tracking-[.16em] text-[#101010] disabled:opacity-50">{loading ? "SIGNING IN…" : "SIGN IN"}</button></form></div>;
}
