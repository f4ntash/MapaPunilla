import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { config } from "@/lib/config"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: "Mapa Punilla | Agencia Digital para Turismo en Punilla",
    template: "%s | Mapa Punilla",
  },
  description: config.site.description,
  keywords: [
    "mapa punilla",
    "mapapunilla",
    "google maps carlos paz",
    "google maps punilla",
    "marketing villa carlos paz",
    "agencia marketing punilla",
    "posicionamiento google maps villa carlos paz",
    "google business carlos paz",
    "whatsapp business villa carlos paz",
    "seo local punilla",
    "marketing digital carlos paz",
    "reservas directas carlos paz",
    "agencia digital punilla",
    "optimizacion google maps",
    "seo turismo cordoba",
    "google business cosquin",
    "posicionamiento web la falda",
    "marketing cabanas tanti",
    "seo capilla del monte",
    "publicidad google cordoba",
  ],
  authors: [{ name: "Mapa Punilla" }],
  creator: "Mapa Punilla",
  publisher: "Mapa Punilla",
  metadataBase: new URL(config.site.url),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: config.site.name,
    title: `${config.site.name} | Agencia Digital para Turismo en Punilla`,
    description: config.site.description,
    url: config.site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.site.name} | Agencia Digital para Turismo en Punilla`,
    description: config.site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${config.site.url}/#website`,
      url: config.site.url,
      name: config.site.name,
      description: config.site.description,
      publisher: { "@id": `${config.site.url}/#organization` },
      inLanguage: "es-AR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${config.site.url}/buscar?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${config.site.url}/#organization`,
      name: config.site.name,
      url: config.site.url,
      description: config.site.description,
      telephone: config.phone,
      email: config.email,
      logo: `${config.site.url}/favicon.ico`,
      areaServed: config.zones.map((z) => ({
        "@type": "City",
        name: z,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa Carlos Paz",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: config.phone,
        contactType: "customer service",
        availableLanguage: ["Spanish"],
      },
      sameAs: [
        "https://instagram.com/mapapunilla",
        "https://facebook.com/mapapunilla",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${config.site.url}/#localbusiness`,
      parentOrganization: { "@id": `${config.site.url}/#organization` },
      name: config.site.name,
      description: config.site.description,
      url: config.site.url,
      telephone: config.phone,
      email: config.email,
      areaServed: config.zones,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa Carlos Paz",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "$$",
    },
    {
      "@type": "Service",
      "@id": `${config.site.url}/#service`,
      provider: { "@id": `${config.site.url}/#organization` },
      name: "Optimización Google Maps para negocios turísticos",
      description:
        "Optimizamos tu perfil de Google Business Profile para que aparezcas primero en las búsquedas locales de Punilla.",
      areaServed: config.zones,
      category: "Marketing digital",
      audience: { "@type": "Audience", audienceType: "Negocios turísticos" },
    },
    {
      "@type": "Service",
      "@id": `${config.site.url}/#service-seo`,
      provider: { "@id": `${config.site.url}/#organization` },
      name: "SEO Local para el Valle de Punilla",
      description:
        "Posicionamos tu negocio turístico en los primeros resultados de Google para búsquedas locales.",
      areaServed: config.zones,
      category: "SEO",
      audience: { "@type": "Audience", audienceType: "Negocios turísticos" },
    },
    {
      "@type": "Service",
      "@id": `${config.site.url}/#service-whatsapp`,
      provider: { "@id": `${config.site.url}/#organization` },
      name: "WhatsApp Business Automation",
      description:
        "Automatizamos la atención al cliente por WhatsApp para negocios turísticos.",
      category: "Automatización",
      audience: { "@type": "Audience", audienceType: "Negocios turísticos" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="canonical" href={config.site.url} />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Villa Carlos Paz" />
        <meta name="geo.position" content="-31.4201;-64.4978" />
        <meta name="ICBM" content="-31.4201, -64.4978" />
        <meta name="theme-color" content="#059669" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileCTA />
      </body>
    </html>
  )
}
