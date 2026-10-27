/** Public origin for canonical URLs, Open Graph, sitemap and robots.
 * Cutover default: tritonfinance.org (HTTPS verified serving on Railway).
 * NEXT_PUBLIC_SITE_URL still overrides at build time; set it to
 * https://tritontradinggroup.org to roll back without a code change. */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://tritonfinance.org",
);

export const canonicalPaths = [
  "/", "/advisory", "/asset-management", "/community", "/donate", "/quant",
  "/recruitment", "/members/current", "/members/founders", "/members/alumni",
  "/disclaimer",
] as const;
