import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const zone = "Villa Carlos Paz"

export const metadata: Metadata = buildMetadata({
  title: "Google Maps para negocios turísticos en Villa Carlos Paz",
  description:
    "Mejoramos tu perfil de Google Maps en Villa Carlos Paz para que tu cabaña, hotel, restaurante o comercio se vea más confiable y reciba más consultas.",
  path: "/servicios/google-maps-villa-carlos-paz",
  keywords: [
    "google maps villa carlos paz",
    "marketing villa carlos paz",
    "google business carlos paz",
    "marketing para cabañas en Carlos Paz",
    "seo local carlos paz",
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      title="Google Maps para tu negocio en Villa Carlos Paz"
      subtitle="Que tu negocio se vea claro, completo y confiable cuando los turistas buscan"
      heroDescription={`En ${zone}, muchos turistas deciden dónde dormir, comer o visitar mirando Google Maps. Te ayudamos a mejorar tu perfil para que transmita confianza y facilite el contacto.`}
      problem={`Tu negocio puede ser excelente, pero si en Maps tiene pocas fotos, información incompleta o mensajes poco claros, el turista puede elegir otra opción.`}
      solution="Ordenamos tu Google Business Profile con información precisa, categorías correctas, textos simples, fotos más vendibles y llamados a la acción hacia WhatsApp."
      sections={[
        {
          title: "Qué incluye la mejora de Google Maps",
          items: [
            "Revisión completa del perfil",
            "Datos, horarios, categorías y servicios claros",
            "Textos orientados a búsquedas locales",
            "Recomendaciones de fotos y reseñas",
            "Botones de contacto visibles",
            "Reporte simple de mejoras aplicadas",
          ],
        },
        {
          title: "Beneficios para tu negocio en Carlos Paz",
          items: [
            "Mejor presentación frente a turistas",
            "Más confianza antes de que te escriban",
            "Más caminos hacia WhatsApp o teléfono",
            "Menos dudas sobre qué ofrecés",
            "Presencia local más prolija",
            "Base lista para SEO local y publicidad",
          ],
        },
      ]}
      faqs={[
        {
          question: `Cuánto tarda en verse una mejora en ${zone}?`,
          answer:
            "Las mejoras de perfil se ven cuando quedan publicadas. La visibilidad en búsquedas depende de competencia, zona, reseñas y trabajo sostenido.",
        },
        {
          question: "¿Funciona para cualquier tipo de negocio?",
          answer:
            "Sí. Es útil para cabañas, hoteles, restaurantes, bares, actividades turisticas, tiendas y servicios locales.",
        },
        {
          question: "¿Necesito tener una página web?",
          answer:
            "No es obligatorio para empezar, pero una página clara ayuda a generar más confianza y ampliar tu presencia en Google.",
        },
      ]}
      breadcrumbItems={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: `Google Maps ${zone}`, path: "/servicios/google-maps-villa-carlos-paz" },
      ]}
      zoneName={zone}
    />
  )
}
