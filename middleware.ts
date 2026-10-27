import { NextRequest, NextResponse } from "next/server";

// Permanent, path- and query-preserving redirect from the old public hosts to
// tritonfinance.org. internal.tritontradinggroup.org is a separate Railway
// service and never reaches this app; old-domain mail records are DNS-side
// and unaffected. Rollback: revert this file (old hosts serve content again).
const OLD_HOSTS = new Set(["tritontradinggroup.org", "www.tritontradinggroup.org"]);
const NEW_ORIGIN = "https://tritonfinance.org";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0];
  if (!host || !OLD_HOSTS.has(host)) return NextResponse.next();
  const target = new URL(request.nextUrl.pathname + request.nextUrl.search, NEW_ORIGIN);
  return NextResponse.redirect(target, 301);
}

export const config = { matcher: "/:path*" };
