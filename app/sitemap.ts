import type { MetadataRoute } from "next";

const baseUrl = "https://portfoliopatphiletas.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/graphisme`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
