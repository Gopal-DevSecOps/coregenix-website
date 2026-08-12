import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { services } from "@/data/services";
import { allLandingUrlSlugs } from "@/data/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/it-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/career`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const landingRoutes: MetadataRoute.Sitemap = allLandingUrlSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const rankingRoutes: MetadataRoute.Sitemap = [
    `${base}/no-1-cyber-security-company-india`,
    `${base}/top-cyber-security-company-india`,
    `${base}/best-cyber-security-company-india`,
    `${base}/top-5-cyber-security-companies-india`,
  ].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes, ...landingRoutes, ...rankingRoutes];
}
