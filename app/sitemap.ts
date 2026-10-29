import type { MetadataRoute } from "next";
import { canonicalPaths, siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return canonicalPaths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
