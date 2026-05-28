import { Map, Search, MessageSquare, CalendarCheck, Bot, BarChart3, Star, Camera } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  problem: string
  result: string
  icon: LucideIcon
  features: string[]
  gradient: string
}

export const services: Service[] = [
  {
    id: "google-maps",
    title: "Que los turistas te encuentren en Google Maps",
    shortTitle: "Google Maps",
    description:
      "Cuando un turista busca dónde comer, dormir o comprar en Punilla, tu negocio aparece primero.",
    problem:
      "El 87% de los turistas busca en Google Maps antes de decidir. Si no aparecés, perdés clientes.",
    result:
      "Más clientes caminan hasta tu puerta. Aparecés en cada búsqueda relevante de tu zona.",
    icon: Map,
    features: [
      "Perfil de Google Maps optimizado",
      "Fotos profesionales de tu negocio",
      "Respuestas automáticas a reseñas",
      "Tu negocio aparece en cada búsqueda",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "local-seo",
    title: "Aparecé en cada búsqueda de tu zona",
    shortTitle: "SEO Local",
    description:
      "Cuando busquen hoteles, cabañas o restaurantes en Punilla, que encuentren tu negocio primero.",
    problem:
      "Tus competidores aparecen antes. Los clientes ni siquiera saben que existís.",
    result:
      "Tu negocio es el primero que ven. Más consultas, más llamadas, más clientes.",
    icon: Search,
    features: [
      "Tu negocio aparece en las búsquedas locales",
      "Optimización para tu zona específica",
      "Posicionamiento en Google Maps",
      "Reportes de resultados mensuales",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "whatsapp",
    title: "Atendé clientes automáticamente por WhatsApp",
    shortTitle: "WhatsApp Business",
    description:
      "Respondé consultas al instante, las 24 horas. Sin tener a alguien mirando el teléfono todo el día.",
    problem:
      "Perdés ventas porque no respondés rápido. Los clientes se van con la competencia.",
    result:
      "Respondés a todos al instante. Más consultas convertidas en ventas.",
    icon: MessageSquare,
    features: [
      "WhatsApp configurado profesionalmente",
      "Respuestas automáticas a preguntas comunes",
      "Catálogo de productos o servicios",
      "Estadísticas de conversación",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "landing-pages",
    title: "Recibí reservas directas sin comisiones",
    shortTitle: "Reservas Online",
    description:
      "Una página simple donde los clientes reservan directo. Sin Booking, sin Mercado Libre, sin comisiones.",
    problem:
      "Las plataformas de reservas te cobran hasta 25% por cada reserva. Perdés plata y control.",
    result:
      "Recibís reservas directas. Cobrás el 100%. Sin depender de intermediarios.",
    icon: CalendarCheck,
    features: [
      "Página web simple con reservas online",
      "Calendario de disponibilidad automático",
      "Cobrá directo sin comisiones",
      "Notificaciones al instante",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "ai-automations",
    title: "Automatizá las tareas que te hacen perder tiempo",
    shortTitle: "Automatizaciones",
    description:
      "Chatbots que responden clientes, mensajes automáticos, recordatorios de reservas. Todo funciona solo.",
    problem:
      "Pasás horas respondiendo las mismas preguntas. Perdés tiempo que podrías usar en tu negocio.",
    result:
      "La tecnología trabaja por vos. Te dedicás a lo importante mientras todo funciona automáticamente.",
    icon: Bot,
    features: [
      "Chatbot que atiende clientes 24/7",
      "Mensajes automáticos de seguimiento",
      "Recordatorios de reservas",
      "Informes automáticos semanales",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "google-ads",
    title: "Atraé más turistas con avisos en Google",
    shortTitle: "Google Ads",
    description:
      "Llegá justo a las personas que están buscando servicios como los tuyos en este momento.",
    problem:
      "La publicidad tradicional no funciona. Gastás plata sin saber si llega a los clientes correctos.",
    result:
      "Llegás exactamente a quien está buscando tu servicio. Pagás solo por resultados.",
    icon: BarChart3,
    features: [
      "Avisos en Google y Google Maps",
      "Llegás solo a quienes buscan tu servicio",
      "Campanas que se ajustan solas",
      "Ves exactamente cuánto ganás",
    ],
    gradient: "from-red-600 to-rose-500",
  },
  {
    id: "reviews",
    title: "Más reseñas = más clientes",
    shortTitle: "Gestión de Reseñas",
    description:
      "Los turistas eligen negocios con buenas reseñas. Te ayudamos a conseguirlas y mantenerlas.",
    problem:
      "Tenés pocas reseñas o algunas malas. Los clientes dudan y eligen a otro.",
    result:
      "Decenas de reseñas positivas. Los clientes confían y eligen tu negocio.",
    icon: Star,
    features: [
      "Pedimos reseñas a tus clientes automáticamente",
      "Respondemos por vos a cada reseña",
      "Analizamos lo que dicen de tu negocio",
      "Alertas si recibís una reseña negativa",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "photography",
    title: "Fotos profesionales que hacen elegir tu negocio",
    shortTitle: "Fotografía",
    description:
      "Mostrá tu negocio en su mejor versión. Fotos que hacen que los clientes te elijan a vos.",
    problem:
      "Fotos de mala calidad o sin fotos. Los clientes eligen al que mejor se ve.",
    result:
      "Fotos que venden. Tu negocio se ve profesional, atractivo, confiable.",
    icon: Camera,
    features: [
      "Sesión de fotos profesional en tu local",
      "Fotos de tus productos o servicios",
      "Imágenes optimizadas para Google y web",
      "Contenido para redes sociales",
    ],
    gradient: "from-sky-600 to-indigo-500",
  },
]
