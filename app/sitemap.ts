import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/about", "/services", "/solutions", "/industries", "/portfolio", "/blog", "/careers", "/contact", "/faqs", "/privacy-policy", "/terms"];
  return [
    ...staticPages.map((p) => ({
      url: `${siteConfig.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/services" || p === "/contact" ? 0.9 : p === "/privacy-policy" || p === "/terms" ? 0.3 : 0.7,
    })),
    ...services.map((s) => ({ url: `${siteConfig.url}/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${siteConfig.url}/portfolio/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
