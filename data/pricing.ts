import { config } from "@/lib/config"

export interface PricingPlan {
  id: string
  name: string
  subtitle: string
  description: string
  price: string
  badge?: string
  features: string[]
  highlighted?: boolean
  cta: string
  whatsapp?: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "maps-inicial",
    name: "Presencia Inicial",
    subtitle: "Para ordenar lo basico y empezar bien",
    description:
      "Ideal si tu negocio aparece poco, tiene fotos flojas o no comunica claro que ofrece.",
    price: config.formatPrice(config.prices.basic),
    badge: "Para empezar",
    features: [
      "Diagnostico digital inicial",
      "Perfil de Google Maps optimizado",
      "Mejoras de texto, fotos y datos clave",
      "WhatsApp y llamados a la accion claros",
      "Reporte mensual simple",
    ],
    cta: "Pedir diagnostico gratis",
    whatsapp: "Hola! Quiero un diagnostico gratis para mi negocio",
  },
  {
    id: "maps-profesional",
    name: "Mas Consultas",
    subtitle: "Para aparecer mejor y generar mas contactos",
    description:
      "Para cabanas, hoteles y restaurantes que quieren competir mejor en Google y temporada.",
    price: config.formatPrice(config.prices.pro),
    badge: "Recomendado",
    highlighted: true,
    features: [
      "Todo lo de Presencia Inicial",
      "SEO local para tu zona y rubro",
      "Mejoras de confianza y resenas",
      "Campanas o contenidos orientados a consultas",
      "Seguimiento por WhatsApp",
      "Reporte de avances y proximos pasos",
    ],
    cta: "Quiero mas consultas",
    whatsapp: "Hola! Quiero mas consultas para mi negocio",
  },
  {
    id: "reservas-directas",
    name: "Reservas Directas",
    subtitle: "Para recibir consultas sin depender tanto de plataformas",
    description:
      "Pensado para alojamientos y servicios turisticos que quieren una presencia mas profesional.",
    price: config.formatPrice(config.prices.reservas),
    badge: "Sin comisiones",
    features: [
      "Pagina web o landing orientada a reservas",
      "Botones directos a WhatsApp",
      "Copy claro para generar confianza",
      "SEO local y estructura tecnica",
      "Integracion con tu proceso actual",
      "Ajustes segun temporada",
    ],
    cta: "Quiero reservas directas",
    whatsapp: "Hola! Quiero recibir mas reservas directas",
  },
  {
    id: "servicio-integral",
    name: "Plan Integral",
    subtitle: "Todo lo necesario para crecer online",
    description:
      "Una estrategia a medida para negocios que quieren delegar marketing, web, SEO y automatizaciones.",
    price: "A medida",
    features: [
      "Diagnostico digital gratuito",
      "Estrategia personalizada",
      "Web, Google, SEO local y WhatsApp",
      "Automatizaciones y seguimiento",
      "Acompanamiento paso a paso",
      "Prioridades claras por temporada",
    ],
    cta: "Hablar por WhatsApp",
    whatsapp: "Hola! Quiero una solucion integral para mi negocio",
  },
]
