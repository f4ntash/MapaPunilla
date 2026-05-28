import { BarChart3, Bot, CalendarCheck, Camera, Map, Megaphone, MessageSquare, Palette, Search, Star, Store } from "lucide-react"
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
    title: "Google Maps más completo y confiable",
    shortTitle: "Google Maps",
    description:
      "Mejoramos tu ficha para que turistas y vecinos entiendan rápido qué ofrecés, dónde estás y cómo contactarte.",
    problem:
      "Si tu ficha tiene pocas fotos, datos incompletos o malas reseñas, la gente duda y sigue mirando.",
    result:
      "Tu negocio se ve más profesional y queda listo para recibir más llamadas, mensajes e indicaciones.",
    icon: Map,
    features: [
      "Perfil de Google Business optimizado",
      "Datos, categorías y textos claros",
      "Fotos y llamados a la acción",
      "Mejoras para búsquedas locales",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "local-seo",
    title: "SEO local para Punilla",
    shortTitle: "SEO Local",
    description:
      "Trabajamos las búsquedas que importan para tu zona: cabañas, hoteles, restaurantes, bares y servicios turísticos.",
    problem:
      "Tus competidores aparecen antes en Villa Carlos Paz, Cosquín, La Falda o Capilla del Monte.",
    result:
      "Más visibilidad en Google y más oportunidades de consulta cuando la gente está buscando.",
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
      "Ordenamos tu WhatsApp para responder más claro, más rápido y con mensajes que ayuden a cerrar consultas.",
    problem:
      "Muchas consultas se pierden por respuestas tardías, mensajes confusos o falta de información.",
    result:
      "El cliente recibe una respuesta más clara y vos tenés un proceso más simple para atender.",
    icon: MessageSquare,
    features: [
      "Perfil profesional de WhatsApp",
      "Respuestas rápidas",
      "Mensajes de bienvenida",
      "Botones directos desde web y Google",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "landing-pages",
    title: "Páginas web para conseguir consultas",
    shortTitle: "Páginas Web",
    description:
      "Creamos landings simples, rápidas y claras para que tu negocio se vea profesional y convierta visitas en mensajes.",
    problem:
      "Una web lenta, vieja o confusa puede hacer que el cliente no confíe o no sepa cómo reservar.",
    result:
      "Una página enfocada en mostrar valor, responder dudas y llevar al usuario a WhatsApp.",
    icon: CalendarCheck,
    features: [
      "Landing responsive",
      "Copy orientado a conversión",
      "SEO técnico básico",
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
      "Tus respuestas son más rápidas y ordenadas, sin perder el trato humano cuando hace falta.",
    icon: Bot,
    features: [
      "Respuestas frecuentes",
      "Mensajes de seguimiento",
      "Recordatorios",
      "Flujos simples de atención",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "google-ads",
    title: "Publicidad para temporada",
    shortTitle: "Google Ads",
    description:
      "Campañas puntuales para aparecer cuando la gente busca alojamiento, comida o actividades en Punilla.",
    problem:
      "Gastar en publicidad sin foco puede traer visitas que no consultan.",
    result:
      "Avisos orientados a búsquedas con intención real y seguimiento de consultas.",
    icon: BarChart3,
    features: [
      "Campañas por zona",
      "Anuncios para búsquedas locales",
      "Control de presupuesto",
      "Medición de contactos",
    ],
    gradient: "from-red-600 to-rose-500",
  },
  {
    id: "reviews",
    title: "Más confianza con reseñas",
    shortTitle: "Reseñas",
    description:
      "Te ayudamos a pedir, ordenar y responder reseñas para que tu negocio transmita confianza.",
    problem:
      "Pocas reseñas o respuestas descuidadas hacen que el cliente dude.",
    result:
      "Más prueba social y una imagen más seria frente a turistas y vecinos.",
    icon: Star,
    features: [
      "Sistema para pedir reseñas",
      "Respuestas profesionales",
      "Alertas y seguimiento",
      "Mejora de reputación local",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "photography",
    title: "Fotos que hacen elegir tu negocio",
    shortTitle: "Fotografía",
    description:
      "Mostramos tu espacio, platos, habitaciones o productos con imágenes más claras y vendibles.",
    problem:
      "Fotos oscuras o viejas bajan la confianza, aunque el lugar sea excelente.",
    result:
      "Tu negocio se ve más profesional en Google, web, redes y WhatsApp.",
    icon: Camera,
    features: [
      "Fotos para Google Maps",
      "Imágenes para web",
      "Contenido para redes",
      "Selección de fotos clave",
    ],
    gradient: "from-sky-600 to-indigo-500",
  },
  {
    id: "social-management",
    title: "Manejo de redes con tonada local",
    shortTitle: "Manejo de redes",
    description:
      "Publicaciones pensadas para mostrar tu lugar, responder dudas y acercar turistas sin hablar dificil.",
    problem:
      "Publicar sin idea clara consume tiempo y muchas veces no genera consultas.",
    result:
      "Redes más ordenadas, humanas y conectadas con lo que la gente quiere saber antes de escribir.",
    icon: MessageSquare,
    features: [
      "Calendario simple",
      "Ideas por temporada",
      "Textos claros",
      "Puente hacia WhatsApp",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "content-design",
    title: "Diseño de contenido",
    shortTitle: "Contenido",
    description:
      "Piezas visuales para redes, historias, destacados y promociones que se sientan propias de tu negocio.",
    problem:
      "Una imagen improvisada puede hacer que un lugar lindo parezca poco cuidado.",
    result:
      "Tu comunicación se ve más prolija, local y fácil de recordar.",
    icon: Palette,
    features: [
      "Plantillas visuales",
      "Historias y placas",
      "Promos de temporada",
      "Estilo coherente",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "local-branding",
    title: "Branding local",
    shortTitle: "Branding",
    description:
      "Ordenamos nombre, tono, colores, mensajes y detalles visuales para que tu negocio tenga identidad propia.",
    problem:
      "Muchos negocios se ven parecidos y cuesta recordar cual era cual.",
    result:
      "Una presencia con personalidad, más reconocible y más conectada con Punilla.",
    icon: Store,
    features: [
      "Tono de marca",
      "Mensajes principales",
      "Identidad visual simple",
      "Uso en redes y web",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "visual-signage",
    title: "Carteleria y redes visuales",
    shortTitle: "Visuales",
    description:
      "Adaptamos piezas para cartel, redes, WhatsApp y Google para que todo cuente la misma historia.",
    problem:
      "Cuando cada canal dice algo distinto, el cliente se confunde.",
    result:
      "Un recorrido más claro desde la ruta, el mapa, Instagram o WhatsApp.",
    icon: Megaphone,
    features: [
      "Piezas para promos",
      "Visuales para WhatsApp",
      "Destacados de Instagram",
      "Coherencia de marca",
    ],
    gradient: "from-red-600 to-rose-500",
  },
]
