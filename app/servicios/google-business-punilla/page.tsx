import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

export const metadata: Metadata = buildMetadata({
  title: "Google Business Profile para negocios del Valle de Punilla",
  description:
    "Optimización de Google Business para negocios turísticos en Cosquín, La Falda, Tanti, Capilla del Monte y todo Punilla.",
  path: "/servicios/google-business-punilla",
  keywords: [
    "google business punilla",
    "google business cosquin",
    "google business la falda",
    "marketing digital Punilla",
    "negocios turísticos en Punilla",
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      title="Google Business Profile para el Valle de Punilla"
      subtitle="Una ficha más clara para que turistas y vecinos confíen antes de escribir"
      heroDescription="Cosquín, La Falda, Tanti, Capilla del Monte, Bialet Massé y Santa María de Punilla reciben turistas que buscan en Maps. Tu perfil necesita explicar bien qué ofrecés y cómo contactarte."
      problem="Si tu ficha esta incompleta, con fotos flojas o sin respuestas claras, el cliente puede dudar aunque tu negocio sea bueno."
      solution="Mejoramos información, categorías, textos, fotos sugeridas, reseñas y botones para que tu presencia local se vea más seria."
      sections={[
        {
          title: "Cobertura en todo el Valle de Punilla",
          items: [
            "Cosquín, La Falda, Tanti y Capilla del Monte",
            "Bialet Massé, Santa María de Punilla y Huerta Grande",
            "Perfil adaptado a localidad y rubro",
            "Palabras clave locales usadas con naturalidad",
            "Recomendaciones para reseñas y fotos",
            "Seguimiento simple por WhatsApp",
          ],
        },
        {
          title: "Tipos de negocio que ayudamos",
          items: [
            "Cabañas, hoteles y alojamientos temporarios",
            "Restaurantes, bares y confiterias",
            "Actividades turisticas y excursiones",
            "Tiendas, artesanos y comercios locales",
            "Complejos turísticos",
            "Emprendimientos chicos y medianos",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Sirve si mi pueblo es chico?",
          answer:
            "Sí. En localidades chicas una presencia clara puede marcar mucha diferencia, porque la decisión suele pasar por confianza, fotos y contacto rápido.",
        },
        {
          question: "¿Pueden ayudar si ya tengo ficha?",
          answer:
            "Sí. Revisamos lo que ya existe, corregimos lo necesario y armamos una lista simple de mejoras.",
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
