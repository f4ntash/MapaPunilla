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

export interface AutomationPlan {
  id: string
  name: string
  idealFor: string
  description: string
  features: string[]
  cta: string
  whatsapp: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "ruta-inicial",
    name: "Ruta Inicial",
    subtitle: "Primera parada para ordenar tu presencia",
    description:
      "Para negocios que necesitan verse más claros y confiables cuando alguien los encuentra en Google o Maps.",
    price: config.formatPrice(config.prices.basic),
    badge: "Primera parada",
    features: [
      "Diagnóstico digital inicial",
      "Google Maps más completo",
      "Textos, fotos y datos clave ordenados",
      "WhatsApp y caminos de contacto claros",
      "Reporte simple de mejoras",
    ],
    cta: "Empezar la ruta",
    whatsapp: "Hola! Quiero empezar con Ruta Inicial",
  },
  {
    id: "ruta-visibilidad",
    name: "Ruta Visibilidad",
    subtitle: "Para que tu lugar sea más fácil de descubrir",
    description:
      "Para cabañas, hoteles y restaurantes que quieren mejorar búsquedas locales, confianza y consultas.",
    price: config.formatPrice(config.prices.pro),
    badge: "Recomendada",
    highlighted: true,
    features: [
      "Todo lo de Ruta Inicial",
      "SEO local para tu zona y rubro",
      "Mejoras de reseñas y confianza",
      "Contenido orientado a consultas",
      "Seguimiento por WhatsApp",
      "Reporte de avances y próximas paradas",
    ],
    cta: "Quiero más visibilidad",
    whatsapp: "Hola! Quiero más visibilidad para mi negocio",
  },
  {
    id: "ruta-reservas",
    name: "Ruta Reservas",
    subtitle: "De la búsqueda al WhatsApp",
    description:
      "Para alojamientos y servicios turísticos que necesitan una web simple, clara y orientada a reservas directas.",
    price: config.formatPrice(config.prices.reservas),
    badge: "Para alojamientos",
    features: [
      "Página web o landing de reserva",
      "Botones directos a WhatsApp",
      "Copy que responde dudas",
      "SEO local y estructura clara",
      "Integracion con tu forma de trabajar",
      "Ajustes según temporada",
    ],
    cta: "Abrir ruta de reservas",
    whatsapp: "Hola! Quiero abrir una ruta de reservas directas",
  },
  {
    id: "ruta-completa",
    name: "Ruta Completa",
    subtitle: "Un mapa entero para tu presencia digital",
    description:
      "Para negocios que quieren delegar web, Google, contenido, WhatsApp y automatizaciones con acompañamiento simple.",
    price: "A medida",
    features: [
      "Diagnóstico digital gratuito",
      "Estrategia por temporada",
      "Web, Google, SEO local y WhatsApp",
      "Automatizaciones útiles",
      "Acompañamiento paso a paso",
      "Prioridades claras por localidad",
    ],
    cta: "Armar mi ruta",
    whatsapp: "Hola! Quiero armar una ruta completa para mi negocio",
  },
]

export const automationPlans: AutomationPlan[] = [
  {
    id: "whatsapp-automatico",
    name: "WhatsApp Automático",
    idealFor: "Consultas básicas, horarios, ubicación, reservas y preguntas frecuentes.",
    description:
      "Una ayuda simple para responder mejor cuando no podés estar mirando el teléfono todo el día.",
    features: [
      "Mensaje de bienvenida",
      "Respuestas rápidas",
      "Información de ubicación y horarios",
      "Derivación a una persona cuando hace falta",
    ],
    cta: "Ordenar mi WhatsApp",
    whatsapp: "Hola! Quiero ordenar mi WhatsApp con respuestas automaticas",
  },
  {
    id: "instagram-automatico",
    name: "Instagram Automático",
    idealFor: "Responder mensajes, enviar información y captar consultas.",
    description:
      "Para que quien te escribe por Instagram reciba una primera respuesta clara y no quede esperando.",
    features: [
      "Respuestas a preguntas comunes",
      "Envío de información básica",
      "Puente hacia WhatsApp",
      "Mensajes simples, humanos y revisables",
    ],
    cta: "Mejorar mensajes de Instagram",
    whatsapp: "Hola! Quiero automatizar respuestas simples de Instagram",
  },
  {
    id: "reservas-inteligentes",
    name: "Reservas Inteligentes",
    idealFor: "Derivar consultas, organizar pedidos y mejorar tiempos de respuesta.",
    description:
      "Un recorrido más claro para que la persona pregunte por fechas, disponibilidad o servicios sin perderse.",
    features: [
      "Preguntas guiadas",
      "Derivación a WhatsApp",
      "Organizacion de datos de consulta",
      "Menos mensajes repetidos",
    ],
    cta: "Ordenar mis reservas",
    whatsapp: "Hola! Quiero organizar mejor mis consultas de reserva",
  },
  {
    id: "automatizacion-a-medida",
    name: "Automatización a Medida",
    idealFor: "Negocios que atienden de una forma particular.",
    description:
      "Creamos automatizaciones adaptadas a cómo funciona tu negocio.",
    features: [
      "Relevamos tu proceso actual",
      "Armamos respuestas simples",
      "Conectamos canales útiles",
      "Ajustamos sin hacerlo complicado",
    ],
    cta: "Crear mi automatización",
    whatsapp: "Hola! Quiero una automatización adaptada a mi negocio",
  },
]
