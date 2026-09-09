import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/internal/login") return NextResponse.next();
  const api = process.env.TTG_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
  try {
    const response = await fetch(`${api}/api/v1/auth/me`, { headers: { cookie: request.headers.get("cookie") ?? "" }, cache: "no-store" });
    if (response.ok) return NextResponse.next();
  } catch { /* Treat an unavailable identity service like an unauthenticated request. */ }
  const login = new URL("/internal/login", request.url); login.searchParams.set("next", request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.redirect(login);
}

export const config = { matcher: ["/internal/:path*"] };
