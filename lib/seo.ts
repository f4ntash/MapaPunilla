import type { Metadata } from "next"
import { config } from "./config"

type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  publishedTime?: string
  author?: string
}

export function buildMetadata(page: PageMeta): Metadata {
  const url = `${config.site.url}${page.path}`
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: `${page.title} | ${config.site.name}`,
      description: page.description,
      url,
      siteName: config.site.name,
      locale: "es_AR",
      type: page.publishedTime ? "article" : "website",
      ...(page.ogImage && { images: [{ url: page.ogImage }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${config.site.name}`,
      description: page.description,
    },
    alternates: { canonical: url },
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${config.site.url}${item.path}`,
    })),
  }
}

export function faqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  publishedTime,
  authorName = config.site.name,
}: {
  title: string
  description: string
  path: string
  image?: string
  publishedTime: string
  authorName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${config.site.url}/og-default.jpg`,
    datePublished: publishedTime,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: config.site.name,
      logo: {
        "@type": "ImageObject",
        url: `${config.site.url}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${config.site.url}${path}`,
    },
  }
}

export function localServiceJsonLd(service: {
  name: string
  description: string
  areaServed?: string[]
  providerName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "LocalBusiness",
      name: service.providerName || config.site.name,
    },
    name: service.name,
    description: service.description,
    areaServed: service.areaServed || config.zones,
    audience: {
      "@type": "Audience",
      audienceType: "Negocios turísticos",
    },
  }
}

export const siteMapPages = [
  { path: "/", priority: 1, changeFreq: "weekly" as const },
  { path: "/servicios", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/precios", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/nosotros", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/contacto", priority: 0.6, changeFreq: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFreq: "weekly" as const },
  { path: "/nuestro-mapa", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/google-maps-negocios-punilla", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/marketing-turistico-punilla", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/marketing-cabanas-punilla", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/automatizacion-whatsapp-turismo", priority: 0.85, changeFreq: "monthly" as const },
  {
    path: "/servicios/google-maps-villa-carlos-paz",
    priority: 0.8,
    changeFreq: "monthly" as const,
  },
  {
    path: "/servicios/google-business-punilla",
    priority: 0.8,
    changeFreq: "monthly" as const,
  },
  {
    path: "/servicios/seo-local-cordoba",
    priority: 0.8,
    changeFreq: "monthly" as const,
  },
  {
    path: "/servicios/whatsapp-business-hoteles",
    priority: 0.7,
    changeFreq: "monthly" as const,
  },
  {
    path: "/servicios/reservas-directas-cabanas",
    priority: 0.7,
    changeFreq: "monthly" as const,
  },
]

export const zoneLocations: Record<
  string,
  { lat: string; lon: string; placename: string }
> = {
  "Villa Carlos Paz": { lat: "-31.4201", lon: "-64.4978", placename: "Villa Carlos Paz" },
  Cosquín: { lat: "-31.2459", lon: "-64.4664", placename: "Cosquín" },
  "La Falda": { lat: "-31.0884", lon: "-64.4900", placename: "La Falda" },
  Tanti: { lat: "-31.3566", lon: "-64.5897", placename: "Tanti" },
  "Capilla del Monte": { lat: "-30.8667", lon: "-64.5167", placename: "Capilla del Monte" },
}
