import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

export const metadata: Metadata = buildMetadata({
  title: "Google Business Profile para negocios del Valle de Punilla",
  description:
    "Optimizacion de Google Business para negocios turisticos en Cosquin, La Falda, Tanti, Capilla del Monte y todo Punilla.",
  path: "/servicios/google-business-punilla",
  keywords: [
    "google business punilla",
    "google business cosquin",
    "google business la falda",
    "marketing digital Punilla",
    "negocios turisticos en Punilla",
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      title="Google Business Profile para el Valle de Punilla"
      subtitle="Una ficha mas clara para que turistas y vecinos confien antes de escribir"
      heroDescription="Cosquin, La Falda, Tanti, Capilla del Monte, Bialet Masse y Santa Maria de Punilla reciben turistas que buscan en Maps. Tu perfil necesita explicar bien que ofreces y como contactarte."
      problem="Si tu ficha esta incompleta, con fotos flojas o sin respuestas claras, el cliente puede dudar aunque tu negocio sea bueno."
      solution="Mejoramos informacion, categorias, textos, fotos sugeridas, resenas y botones para que tu presencia local se vea mas seria."
      sections={[
        {
          title: "Cobertura en todo el Valle de Punilla",
          items: [
            "Cosquin, La Falda, Tanti y Capilla del Monte",
            "Bialet Masse, Santa Maria de Punilla y Huerta Grande",
            "Perfil adaptado a localidad y rubro",
            "Palabras clave locales usadas con naturalidad",
            "Recomendaciones para resenas y fotos",
            "Seguimiento simple por WhatsApp",
          ],
        },
        {
          title: "Tipos de negocio que ayudamos",
          items: [
            "Cabanas, hoteles y alojamientos temporarios",
            "Restaurantes, bares y confiterias",
            "Actividades turisticas y excursiones",
            "Tiendas, artesanos y comercios locales",
            "Complejos turisticos",
            "Emprendimientos chicos y medianos",
          ],
        },
      ]}
      faqs={[
        {
          question: "Sirve si mi pueblo es chico?",
          answer:
            "Si. En localidades chicas una presencia clara puede marcar mucha diferencia, porque la decision suele pasar por confianza, fotos y contacto rapido.",
        },
        {
          question: "Pueden ayudar si ya tengo ficha?",
          answer:
            "Si. Revisamos lo que ya existe, corregimos lo necesario y armamos una lista simple de mejoras.",
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
