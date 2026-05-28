import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const zone = "Villa Carlos Paz"

const meta = {
  title: "Google Maps para tu negocio en Villa Carlos Paz",
  description:
    "Aparecé primero en Google Maps en Carlos Paz. Optimizamos tu perfil para que los turistas te encuentren cuando busquen alojamiento, restaurantes o servicios.",
  path: "/servicios/google-maps-villa-carlos-paz",
  keywords: [
    "google maps villa carlos paz",
    "google business carlos paz",
    "maps carlos paz turismo",
    "posicionamiento google maps",
    "marketing carlos paz",
    "seo local carlos paz",
  ],
}

export const metadata: Metadata = buildMetadata(meta)

export default function Page() {
  return (
    <SeoLandingPage
      title="Google Maps para tu negocio en Villa Carlos Paz"
      subtitle="Aparecé cuando los turistas busquen en Maps"
      heroDescription={`En ${zone}, miles de turistas usan Google Maps todos los días para encontrar dónde comer, dormir y comprar. Si tu negocio no aparece, estás perdiendo clientes. Optimizamos tu perfil para que estés siempre visible.`}
      problem={`Tu negocio en ${zone} compite con cientos de otros en Google Maps. Si tu perfil no está optimizado, los clientes no te encuentran y eligen a la competencia. Además, las reseñas malas o la falta de fotos profesionales hacen que los turistas desconfíen.`}
      solution={`Optimizamos tu perfil de Google Business Profile con fotos profesionales, categorías precisas, descripciones con palabras clave y respuestas automáticas a reseñas. Así tu negocio aparece primero cuando los turistas buscan en ${zone}.`}
      sections={[
        {
          title: "¿Qué incluye la optimización de Google Maps?",
          items: [
            "Perfil de Google Business Profile completo y verificado",
            "Fotos profesionales de tu negocio y productos",
            "Categorías y atributos precisos para tu rubro",
            "Descripciones optimizadas con palabras clave locales",
            "Respuestas automáticas a reseñas de clientes",
            "Reportes mensuales de visibilidad y resultados",
          ],
        },
        {
          title: "Beneficios para tu negocio en Carlos Paz",
          items: [
            "Más turistas te encuentran en Google Maps",
            "Aparecés en búsquedas relacionadas a tu rubro",
            "Más reseñas positivas = más confianza",
            "Sin depender de publicidad paga",
            "Resultados visibles desde la primera semana",
            "Competencia directa con grandes cadenas",
          ],
        },
      ]}
      faqs={[
        {
          question: `¿Cuánto tiempo toma ver resultados en ${zone}?`,
          answer:
            "Los primeros resultados pueden verse en 1 o 2 semanas. La optimización completa del perfil y la generación de reseñas toma entre 30 y 60 días para resultados consistentes.",
        },
        {
          question: "¿Funciona para cualquier tipo de negocio?",
          answer:
            "Sí. Hoteles, cabañas, restaurantes, bares, tiendas, actividades turísticas, estacionamientos, servicios. Cualquier negocio al que los turistas puedan llegar funciona con Google Maps.",
        },
        {
          question: "¿Necesito tener una página web?",
          answer:
            "No es obligatorio, pero ayuda. Con solo el perfil de Google Business Profile bien optimizado ya podés aparecer en Maps. Una página web suma puntos para el posicionamiento.",
        },
        {
          question: "¿Cómo manejan las reseñas negativas?",
          answer:
            "Respondemos profesionalmente cada reseña negativa, ofreciendo soluciones. Una mala reseña bien respondida puede generar más confianza que diez reseñas positivas sin respuesta.",
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
