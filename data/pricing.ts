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
    name: "Maps Inicial",
    subtitle: "Empezá a aparecer en Google Maps",
    description:
      "Para negocios que casi no tienen presencia digital y quieren empezar a aparecer en las búsquedas.",
    price: config.formatPrice(config.prices.basic),
    badge: "Para empezar",
    features: [
      "Perfil de Google Maps optimizado",
      "5 fotos profesionales de tu negocio",
      "Respuestas automáticas a reseñas",
      "Reporte mensual de resultados",
    ],
    cta: "Quiero empezar",
    whatsapp: "Hola%21+Quiero+el+plan+Maps+Inicial",
  },
  {
    id: "maps-profesional",
    name: "Maps Profesional",
    subtitle: "Aparecé primero y atraé más clientes",
    description:
      "Para hoteles, restaurantes y cabañas que quieren ser los primeros en cada búsqueda local.",
    price: config.formatPrice(config.prices.pro),
    badge: "Recomendado",
    highlighted: true,
    features: [
      "Todo lo de Maps Inicial",
      "SEO local para tu zona",
      "Avisos en Google Ads",
      "10 fotos profesionales",
      "WhatsApp Business automatizado",
      "Reportes semanales de resultados",
    ],
    cta: "Quiero más clientes",
    whatsapp: "Hola%21+Quiero+el+plan+Maps+Profesional",
  },
  {
    id: "reservas-directas",
    name: "Reservas Directas",
    subtitle: "Recibí reservas sin pagar comisiones",
    description:
      "Para hoteles, cabañas y restaurantes que quieren recibir reservas directas sin intermediarios.",
    price: config.formatPrice(config.prices.reservas),
    badge: "Sin comisiones",
    features: [
      "Landing page con reservas online",
      "Calendario de disponibilidad automático",
      "Chatbot que atiende reservas 24/7",
      "WhatsApp automatizado",
      "Sin comisiones en reservas",
      "Reportes en tiempo real",
    ],
    cta: "Quiero reservas directas",
    whatsapp: "Hola%21+Quiero+el+plan+Reservas+Directas",
  },
  {
    id: "servicio-integral",
    name: "Servicio Integral",
    subtitle: "Todo lo que tu negocio necesita",
    description:
      "Una solución personalizada para negocios que quieren tener todo cubierto sin preocuparse.",
    price: "A medida",
    features: [
      "Diagnóstico digital gratuito",
      "Estrategia personalizada",
      "Todo lo anterior incluido",
      "Automatizaciones inteligentes",
      "Soporte prioritario 24/7",
      "Reuniones semanales de seguimiento",
    ],
    cta: "Hablar con un asesor",
    whatsapp: "Hola%21+Quiero+una+soluci%C3%B3n+a+medida",
  },
]
