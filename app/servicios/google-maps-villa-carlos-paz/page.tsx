import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const zone = "Villa Carlos Paz"

export const metadata: Metadata = buildMetadata({
  title: "Google Maps para negocios turisticos en Villa Carlos Paz",
  description:
    "Mejoramos tu perfil de Google Maps en Villa Carlos Paz para que tu cabana, hotel, restaurante o comercio se vea mas confiable y reciba mas consultas.",
  path: "/servicios/google-maps-villa-carlos-paz",
  keywords: [
    "google maps villa carlos paz",
    "marketing villa carlos paz",
    "google business carlos paz",
    "marketing para cabanas en Carlos Paz",
    "seo local carlos paz",
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      title="Google Maps para tu negocio en Villa Carlos Paz"
      subtitle="Que tu negocio se vea claro, completo y confiable cuando los turistas buscan"
      heroDescription={`En ${zone}, muchos turistas deciden donde dormir, comer o visitar mirando Google Maps. Te ayudamos a mejorar tu perfil para que transmita confianza y facilite el contacto.`}
      problem={`Tu negocio puede ser excelente, pero si en Maps tiene pocas fotos, informacion incompleta o mensajes poco claros, el turista puede elegir otra opcion.`}
      solution="Ordenamos tu Google Business Profile con informacion precisa, categorias correctas, textos simples, fotos mas vendibles y llamados a la accion hacia WhatsApp."
      sections={[
        {
          title: "Que incluye la mejora de Google Maps",
          items: [
            "Revision completa del perfil",
            "Datos, horarios, categorias y servicios claros",
            "Textos orientados a busquedas locales",
            "Recomendaciones de fotos y resenas",
            "Botones de contacto visibles",
            "Reporte simple de mejoras aplicadas",
          ],
        },
        {
          title: "Beneficios para tu negocio en Carlos Paz",
          items: [
            "Mejor presentacion frente a turistas",
            "Mas confianza antes de que te escriban",
            "Mas caminos hacia WhatsApp o telefono",
            "Menos dudas sobre que ofreces",
            "Presencia local mas prolija",
            "Base lista para SEO local y publicidad",
          ],
        },
      ]}
      faqs={[
        {
          question: `Cuanto tarda en verse una mejora en ${zone}?`,
          answer:
            "Las mejoras de perfil se ven cuando quedan publicadas. La visibilidad en busquedas depende de competencia, zona, resenas y trabajo sostenido.",
        },
        {
          question: "Funciona para cualquier tipo de negocio?",
          answer:
            "Si. Es util para cabanas, hoteles, restaurantes, bares, actividades turisticas, tiendas y servicios locales.",
        },
        {
          question: "Necesito tener una pagina web?",
          answer:
            "No es obligatorio para empezar, pero una pagina clara ayuda a generar mas confianza y ampliar tu presencia en Google.",
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
