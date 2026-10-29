/** Canonical public domain; override for an alternate deployment when needed. */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://tritonfinance.org",
);

export const canonicalPaths = [
  "/", "/about", "/for-clients", "/for-students", "/advisory", "/community", "/donate",
  "/members/current", "/members/founders", "/members/alumni",
  "/disclaimer",
] as const;
