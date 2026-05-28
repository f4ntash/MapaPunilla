import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const meta = {
  title: "SEO Local para negocios turísticos en Córdoba",
  description:
    "Posicioná tu negocio turístico en Google para toda Córdoba y Punilla. Aparecé primero en búsquedas locales sin pagar publicidad.",
  path: "/servicios/seo-local-cordoba",
  keywords: [
    "seo local cordoba",
    "posicionamiento web cordoba",
    "seo turismo cordoba",
    "marketing digital cordoba",
    "seo para hoteles cordoba",
    "posicionamiento google cordoba",
  ],
}

export const metadata: Metadata = buildMetadata(meta)

export default function Page() {
  return (
    <SeoLandingPage
      title="SEO Local para negocios turísticos en Córdoba"
      subtitle="Aparecé en Google cuando los turistas te busquen"
      heroDescription="El 86% de los turistas busca en Google antes de elegir. Con SEO local, tu negocio aparece primero en las búsquedas de Córdoba y el Valle de Punilla. Sin pagar por clic, sin publicidad."
      problem="Los turistas buscan 'cabañas en Carlos Paz', 'restaurantes en Cosquín' o 'hoteles en La Falda'. Si tu web no está optimizada para esas búsquedas, tus competidores aparecen primero y se llevan los clientes."
      solution="Aplicamos una estrategia completa de SEO local: optimización técnica de tu sitio web, creación de contenido local, generación de reseñas, presencia en directorios y construcción de enlaces locales. Resultados sostenibles en el tiempo."
      sections={[
        {
          title: "¿Qué incluye el SEO local?",
          items: [
            "Auditoría técnica de tu sitio web",
            "Optimización de contenido con palabras clave locales",
            "Creación y optimización de Google Business Profile",
            "Gestión de reseñas en Google y otros portales",
            "Presencia en directorios turísticos de Córdoba",
            "Reportes mensuales de posicionamiento",
          ],
        },
        {
          title: "Resultados que podés esperar",
          items: [
            "Primeras posiciones en búsquedas locales de tu rubro",
            "Más tráfico a tu sitio web desde Google",
            "Más consultas por WhatsApp y teléfono",
            "Más reservas directas sin comisiones",
            "Menor dependencia de plataformas terceras",
            "Visibilidad constante sin pagar por clic",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Cuánto tarda el SEO local en dar resultados?",
          answer:
            "Los primeros resultados se ven entre 30 y 90 días. El SEO es una inversión a mediano plazo, pero los resultados son sostenibles y no requieren pagar por cada visita.",
        },
        {
          question: "¿Es mejor que Google Ads?",
          answer:
            "Son complementarios. El SEO local te da visibilidad constante sin costo por clic. Google Ads te da resultados inmediatos pero pagás por cada visita. Lo ideal es tener ambos.",
        },
        {
          question: "¿Trabajan con negocios de toda Córdoba?",
          answer:
            "Sí. Nuestra especialidad es el Valle de Punilla, pero trabajamos con negocios turísticos de toda la provincia de Córdoba.",
        },
      ]}
      breadcrumbItems={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "SEO Local Córdoba", path: "/servicios/seo-local-cordoba" },
      ]}
      zoneName="Córdoba"
    />
  )
}
