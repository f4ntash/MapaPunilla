import type { MetadataRoute } from "next"
import { config } from "@/lib/config"
import { getAllSlugs } from "@/data/blog"
import { seoLandings } from "@/data/seo-landings"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.site.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/precios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/nuestro-mapa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ]

  const seoPages: MetadataRoute.Sitemap = [
    ...seoLandings
      .filter((page) => page.slug !== "nuestro-mapa")
      .map((page) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    { url: `${baseUrl}/servicios/google-maps-villa-carlos-paz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/servicios/google-business-punilla`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/servicios/seo-local-cordoba`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/servicios/whatsapp-business-hoteles`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/servicios/reservas-directas-cabanas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]

  const blogSlugs = getAllSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...seoPages, ...blogPages]
}
