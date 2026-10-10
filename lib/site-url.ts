/** Stay on the working domain until the owner approves the DNS/HTTPS cutover. */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://tritontradinggroup.org",
);

export const canonicalPaths = [
  "/", "/advisory", "/asset-management", "/community", "/donate", "/quant",
  "/recruitment", "/members/current", "/members/founders", "/members/alumni",
  "/disclaimer",
] as const;
