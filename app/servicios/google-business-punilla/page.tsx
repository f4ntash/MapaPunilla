import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const meta = {
  title: "Google Business Profile para el Valle de Punilla",
  description:
    "Optimizá tu perfil de Google Business para todo el Valle de Punilla: Cosquín, La Falda, Tanti, Capilla del Monte. Más visibilidad, más clientes.",
  path: "/servicios/google-business-punilla",
  keywords: [
    "google business punilla",
    "google business cosquín",
    "google my business la falda",
    "google business tanti",
    "google business capilla del monte",
    "perfil google maps punilla",
  ],
}

export const metadata: Metadata = buildMetadata(meta)

export default function Page() {
  return (
    <SeoLandingPage
      title="Google Business Profile para el Valle de Punilla"
      subtitle="Tu negocio visible en todos los pueblos de Punilla"
      heroDescription="Cosquín, La Falda, Tanti, Capilla del Monte... cada pueblo de Punilla recibe turistas que buscan en Google Maps. Optimizamos tu perfil de Google Business para que aparezcas en cada búsqueda local de la región."
      problem="Los turistas no solo buscan en Carlos Paz. También buscan alojamiento en Cosquín, restaurantes en La Falda, actividades en Capilla del Monte. Si tu perfil de Google Business no está optimizado para cada localidad, perdés clientes en todo el valle."
      solution="Optimizamos tu perfil de Google Business Profile con información precisa para cada localidad de Punilla. Categorías correctas, fotos profesionales, reseñas gestionadas y palabras clave locales para que aparezcas en todo el valle."
      sections={[
        {
          title: "Cobertura en todo el Valle de Punilla",
          items: [
            "Optimización para búsquedas en Cosquín, La Falda, Tanti",
            "Presencia en Capilla del Monte y pueblos cercanos",
            "Perfil adaptado a cada localidad y su temporada",
            "Palabras clave específicas para cada zona",
            "Gestión de reseñas en toda la región",
            "Reportes por localidad",
          ],
        },
        {
          title: "Tipos de negocio que posicionamos",
          items: [
            "Hoteles, hosterías y cabañas en todo Punilla",
            "Restaurantes, bares y confiterías",
            "Actividades turísticas y excursiones",
            "Tiendas de regalos y artesanías",
            "Servicios profesionales (médicos, bancos, etc.)",
            "Estacionamientos y estaciones de servicio",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Mi negocio aparece en todas las localidades de Punilla?",
          answer:
            "Depende de tu ubicación real. Si tenés un negocio en Cosquín, aparecés en búsquedas de Cosquín y alrededores. Si tenés varios locales, podemos optimizar cada perfil por separado.",
        },
        {
          question: "¿Qué pasa si mi negocio está en un pueblo chico?",
          answer:
            "Mejor. Menos competencia significa que con una optimización básica ya podés estar en los primeros resultados. Aprovechamos eso para posicionarte rápido.",
        },
        {
          question: "¿Atienden negocios de toda la provincia?",
          answer:
            "Nuestro foco principal es el Valle de Punilla, pero trabajamos con negocios de toda Córdoba. Consultanos por tu localidad.",
        },
      ]}
      breadcrumbItems={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "Google Business Punilla", path: "/servicios/google-business-punilla" },
      ]}
      zoneName="Valle de Punilla"
    />
  )
}
