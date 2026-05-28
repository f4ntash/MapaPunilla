import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

export const metadata: Metadata = buildMetadata({
  title: "SEO Local para negocios turisticos en Punilla y Cordoba",
  description:
    "SEO local para cabanas, hoteles, restaurantes y emprendimientos turisticos de Punilla. Mejor visibilidad en Google sin promesas falsas.",
  path: "/servicios/seo-local-cordoba",
  keywords: [
    "seo local punilla",
    "marketing turistico Punilla",
    "seo para hoteles Cordoba",
    "marketing para restaurantes en Punilla",
    "paginas web para cabanas",
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      title="SEO Local para negocios turisticos en Punilla"
      subtitle="Mejor presencia cuando turistas buscan donde dormir, comer o visitar"
      heroDescription="Trabajamos contenidos, estructura tecnica, Google Business y mensajes locales para que Google entienda mejor que ofrece tu negocio y en que zona trabaja."
      problem="Los turistas buscan cabanas en Carlos Paz, restaurantes en Cosquin u hoteles en La Falda. Si tu web y tu perfil no explican bien tu servicio, perdes oportunidades de consulta."
      solution="Aplicamos SEO local realista: orden tecnico, contenido local, mejoras en Google Business, resenas y paginas claras orientadas a consultas."
      sections={[
        {
          title: "Que incluye el SEO local",
          items: [
            "Revision tecnica de tu web",
            "Contenido con busquedas locales naturales",
            "Mejora de Google Business Profile",
            "Estructura para servicios y localidades",
            "Recomendaciones de resenas y confianza",
            "Reporte simple de avances",
          ],
        },
        {
          title: "Resultados que buscamos",
          items: [
            "Mas visibilidad en busquedas relevantes",
            "Mas visitas con intencion de consulta",
            "Mas mensajes por WhatsApp y telefono",
            "Mejor confianza antes de reservar",
            "Menos dependencia de publicaciones sueltas",
            "Presencia digital mas estable",
          ],
        },
      ]}
      faqs={[
        {
          question: "Cuanto tarda el SEO local?",
          answer:
            "Depende de la competencia y del estado actual del sitio. Es un trabajo progresivo: primero ordenamos lo basico y luego medimos avances.",
        },
        {
          question: "Es mejor que publicidad?",
          answer:
            "Son herramientas distintas. La publicidad puede acelerar consultas; el SEO local construye presencia mas estable. Muchas veces conviene combinarlas.",
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
