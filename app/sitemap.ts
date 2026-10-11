import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

function page(
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"],
): Entry {
  return {
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; priority: number; freq: Entry["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.95, freq: "weekly" },
    { path: "/contact", priority: 0.95, freq: "monthly" },
    { path: "/about", priority: 0.9, freq: "monthly" },
    { path: "/solutions", priority: 0.85, freq: "monthly" },
    { path: "/industries", priority: 0.85, freq: "monthly" },
    { path: "/portfolio", priority: 0.8, freq: "weekly" },
    { path: "/seo", priority: 0.85, freq: "monthly" },
    { path: "/digital-marketing", priority: 0.85, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/careers", priority: 0.6, freq: "monthly" },
    { path: "/faqs", priority: 0.75, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  // Avoid duplicating service slugs already listed above for priority boost
  const boosted = new Set(["/seo", "/digital-marketing"]);

  return [
    ...staticPages.map((p) => page(p.path, p.priority, p.freq)),
    ...services
      .filter((s) => !boosted.has(`/${s.slug}`))
      .map((s) => page(`/${s.slug}`, 0.85, "monthly")),
    ...projects.map((p) => page(`/portfolio/${p.slug}`, 0.55, "yearly")),
  ];
}
