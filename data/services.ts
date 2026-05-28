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
    title: "Google Maps mas completo y confiable",
    shortTitle: "Google Maps",
    description:
      "Mejoramos tu ficha para que turistas y vecinos entiendan rapido que ofreces, donde estas y como contactarte.",
    problem:
      "Si tu ficha tiene pocas fotos, datos incompletos o malas resenas, la gente duda y sigue mirando.",
    result:
      "Tu negocio se ve mas profesional y queda listo para recibir mas llamadas, mensajes e indicaciones.",
    icon: Map,
    features: [
      "Perfil de Google Business optimizado",
      "Datos, categorias y textos claros",
      "Fotos y llamados a la accion",
      "Mejoras para busquedas locales",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "local-seo",
    title: "SEO local para Punilla",
    shortTitle: "SEO Local",
    description:
      "Trabajamos las busquedas que importan para tu zona: cabanas, hoteles, restaurantes, bares y servicios turisticos.",
    problem:
      "Tus competidores aparecen antes en Villa Carlos Paz, Cosquin, La Falda o Capilla del Monte.",
    result:
      "Mas visibilidad en Google y mas oportunidades de consulta cuando la gente esta buscando.",
    icon: Search,
    features: [
      "Keywords locales por localidad",
      "Estructura SEO para web y landings",
      "Contenido orientado a consultas",
      "Reportes simples de avance",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "whatsapp",
    title: "WhatsApp preparado para vender mejor",
    shortTitle: "WhatsApp Business",
    description:
      "Ordenamos tu WhatsApp para responder mas claro, mas rapido y con mensajes que ayuden a cerrar consultas.",
    problem:
      "Muchas consultas se pierden por respuestas tardias, mensajes confusos o falta de informacion.",
    result:
      "El cliente recibe una respuesta mas clara y vos tenes un proceso mas simple para atender.",
    icon: MessageSquare,
    features: [
      "Perfil profesional de WhatsApp",
      "Respuestas rapidas",
      "Mensajes de bienvenida",
      "Botones directos desde web y Google",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "landing-pages",
    title: "Paginas web para conseguir consultas",
    shortTitle: "Paginas Web",
    description:
      "Creamos landings simples, rapidas y claras para que tu negocio se vea profesional y convierta visitas en mensajes.",
    problem:
      "Una web lenta, vieja o confusa puede hacer que el cliente no confie o no sepa como reservar.",
    result:
      "Una pagina enfocada en mostrar valor, responder dudas y llevar al usuario a WhatsApp.",
    icon: CalendarCheck,
    features: [
      "Landing responsive",
      "Copy orientado a conversion",
      "SEO tecnico basico",
      "Botones de reserva y contacto",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "ai-automations",
    title: "Automatizaciones simples",
    shortTitle: "Automatizaciones",
    description:
      "Automatizamos respuestas frecuentes, seguimientos y recordatorios para que no pierdas tiempo en lo repetido.",
    problem:
      "Responder siempre lo mismo cansa y te saca tiempo de atender el negocio.",
    result:
      "Tus respuestas son mas rapidas y ordenadas, sin perder el trato humano cuando hace falta.",
    icon: Bot,
    features: [
      "Respuestas frecuentes",
      "Mensajes de seguimiento",
      "Recordatorios",
      "Flujos simples de atencion",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "google-ads",
    title: "Publicidad para temporada",
    shortTitle: "Google Ads",
    description:
      "Campanas puntuales para aparecer cuando la gente busca alojamiento, comida o actividades en Punilla.",
    problem:
      "Gastar en publicidad sin foco puede traer visitas que no consultan.",
    result:
      "Avisos orientados a busquedas con intencion real y seguimiento de consultas.",
    icon: BarChart3,
    features: [
      "Campanas por zona",
      "Anuncios para busquedas locales",
      "Control de presupuesto",
      "Medicion de contactos",
    ],
    gradient: "from-red-600 to-rose-500",
  },
  {
    id: "reviews",
    title: "Mas confianza con resenas",
    shortTitle: "Resenas",
    description:
      "Te ayudamos a pedir, ordenar y responder resenas para que tu negocio transmita confianza.",
    problem:
      "Pocas resenas o respuestas descuidadas hacen que el cliente dude.",
    result:
      "Mas prueba social y una imagen mas seria frente a turistas y vecinos.",
    icon: Star,
    features: [
      "Sistema para pedir resenas",
      "Respuestas profesionales",
      "Alertas y seguimiento",
      "Mejora de reputacion local",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "photography",
    title: "Fotos que hacen elegir tu negocio",
    shortTitle: "Fotografia",
    description:
      "Mostramos tu espacio, platos, habitaciones o productos con imagenes mas claras y vendibles.",
    problem:
      "Fotos oscuras o viejas bajan la confianza, aunque el lugar sea excelente.",
    result:
      "Tu negocio se ve mas profesional en Google, web, redes y WhatsApp.",
    icon: Camera,
    features: [
      "Fotos para Google Maps",
      "Imagenes para web",
      "Contenido para redes",
      "Seleccion de fotos clave",
    ],
    gradient: "from-sky-600 to-indigo-500",
  },
]
