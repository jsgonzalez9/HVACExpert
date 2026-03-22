import { getAllPartNumbers, getAllSymptomSlugs } from "@/lib/supabase";
import { headers } from "next/headers";

export async function GET() {
  const headersList = await headers();
  const host = headersList.get("host") || "hvacexpert.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const partNumbers = await getAllPartNumbers(5000);
  const symptomSlugs = await getAllSymptomSlugs(1000);

  const staticRoutes = [
    { path: "/", priority: "1.0" },
    { path: "/symptoms", priority: "0.8" },
    { path: "/compare", priority: "0.8" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map((route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route.priority}</priority>
  </url>`)
    .join("")}
  ${partNumbers
    .map((num) => `
  <url>
    <loc>${baseUrl}/p/${num}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
    .join("")}
  ${symptomSlugs
    .map((slug) => `
  <url>
    <loc>${baseUrl}/symptom/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`)
    .join("")}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
