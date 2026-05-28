import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

export const metadata: Metadata = buildMetadata({
  title: "SEO Local para negocios turísticos en Punilla y Córdoba",
  description:
    "SEO local para cabañas, hoteles, restaurantes y emprendimientos turísticos de Punilla. Mejor visibilidad en Google sin promesas falsas.",
  path: "/servicios/seo-local-cordoba",
  keywords: [
    "seo local punilla",
    "marketing turístico Punilla",
    "seo para hoteles Córdoba",
    "marketing para restaurantes en Punilla",
    "páginas web para cabañas",
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      title="SEO Local para negocios turísticos en Punilla"
      subtitle="Mejor presencia cuando turistas buscan dónde dormir, comer o visitar"
      heroDescription="Trabajamos contenidos, estructura técnica, Google Business y mensajes locales para que Google entienda mejor qué ofrece tu negocio y en qué zona trabaja."
      problem="Los turistas buscan cabañas en Carlos Paz, restaurantes en Cosquín u hoteles en La Falda. Si tu web y tu perfil no explican bien tu servicio, perdés oportunidades de consulta."
      solution="Aplicamos SEO local realista: orden técnico, contenido local, mejoras en Google Business, reseñas y páginas claras orientadas a consultas."
      sections={[
        {
          title: "Qué incluye el SEO local",
          items: [
            "Revisión técnica de tu web",
            "Contenido con búsquedas locales naturales",
            "Mejora de Google Business Profile",
            "Estructura para servicios y localidades",
            "Recomendaciones de reseñas y confianza",
            "Reporte simple de avances",
          ],
        },
        {
          title: "Resultados que buscamos",
          items: [
            "Más visibilidad en búsquedas relevantes",
            "Más visitas con intención de consulta",
            "Más mensajes por WhatsApp y teléfono",
            "Mejor confianza antes de reservar",
            "Menos dependencia de publicaciones sueltas",
            "Presencia digital más estable",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Cuánto tarda el SEO local?",
          answer:
            "Depende de la competencia y del estado actual del sitio. Es un trabajo progresivo: primero ordenamos lo básico y luego medimos avances.",
        },
        {
          question: "¿Es mejor que la publicidad?",
          answer:
            "Son herramientas distintas. La publicidad puede acelerar consultas; el SEO local construye presencia más estable. Muchas veces conviene combinarlas.",
        },
      ]}
      breadcrumbItems={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "SEO Local Punilla", path: "/servicios/seo-local-cordoba" },
      ]}
      zoneName="Valle de Punilla"
    />
  )
}
