import { Bot, CalendarCheck, Camera, Map, Megaphone, MessageSquare, Palette, Search, Star, Store } from "lucide-react"
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
    title: "Aparecer mejor en Google Maps",
    shortTitle: "Google Maps",
    description:
      "Ordenamos tu ficha para que turistas y vecinos entiendan rápido qué ofrecés, dónde estás y cómo escribirte.",
    problem:
      "Si tu ficha tiene pocas fotos, datos incompletos o reseñas sin responder, la gente duda y sigue mirando.",
    result:
      "Más claro para Google. Más fácil para tus clientes.",
    icon: Map,
    features: [
      "Datos, categorías y horarios claros",
      "Fotos que ayudan a elegir",
      "Botones hacia WhatsApp e indicaciones",
      "Recomendaciones para reseñas",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "local-seo",
    title: "Ser más fácil de encontrar en Punilla",
    shortTitle: "Visibilidad local",
    description:
      "Trabajamos búsquedas reales del valle: cabañas, hoteles, restaurantes, bares, complejos y experiencias.",
    problem:
      "Muchos negocios buenos no aparecen cuando el turista busca por localidad, rubro o necesidad.",
    result:
      "Tu lugar gana contexto local y mejores caminos de descubrimiento.",
    icon: Search,
    features: [
      "Palabras locales usadas con naturalidad",
      "Landings y contenidos por intención",
      "Links internos dentro del ecosistema Mapa Punilla",
      "Guías útiles para turistas y negocios",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "whatsapp",
    title: "Recibir más consultas por WhatsApp",
    shortTitle: "WhatsApp",
    description:
      "Dejamos tu WhatsApp preparado para responder mejor, orientar rápido y no perder consultas por falta de claridad.",
    problem:
      "En temporada, una respuesta tarde o incompleta puede mandar al cliente a otra opción.",
    result:
      "De la búsqueda al WhatsApp con menos fricción.",
    icon: MessageSquare,
    features: [
      "Perfil y mensajes de bienvenida",
      "Respuestas rápidas para preguntas frecuentes",
      "Textos simples para reservas y ubicación",
      "Botones desde web, Google e Instagram",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "landing-pages",
    title: "Tener una web clara y simple",
    shortTitle: "Web simple",
    description:
      "Creamos páginas livianas para explicar tu negocio, mostrar confianza y llevar a la persona a consultar.",
    problem:
      "Una web vieja, lenta o confusa hace que el cliente no entienda cómo reservar o qué incluye tu servicio.",
    result:
      "Una presencia directa, mobile first y conectada a WhatsApp.",
    icon: CalendarCheck,
    features: [
      "Landing responsive",
      "Texto pensado para turistas",
      "SEO técnico básico",
      "Botones de consulta y reserva",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "ai-automations",
    title: "Automatizar respuestas sin perder trato humano",
    shortTitle: "Automatizaciones",
    description:
      "Armamos respuestas automáticas simples para horarios, ubicación, disponibilidad, precios y consultas repetidas.",
    problem:
      "Responder siempre lo mismo cansa y te saca tiempo de atender el negocio.",
    result:
      "Nadie queda sin una primera respuesta clara.",
    icon: Bot,
    features: [
      "WhatsApp automático",
      "Instagram automático",
      "Derivación a una persona",
      "Mensajes revisables y humanos",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: "content",
    title: "Crear contenido que la gente quiera guardar",
    shortTitle: "Contenido",
    description:
      "Diseñamos piezas para mostrar tu lugar, responder dudas y hacer que tu negocio se recuerde.",
    problem:
      "Publicar sin idea clara consume tiempo y muchas veces no genera consultas.",
    result:
      "Redes más útiles, guardables y conectadas con lo que la gente pregunta.",
    icon: Palette,
    features: [
      "Ideas por temporada",
      "Historias y placas",
      "Textos con tono local",
      "Puente hacia WhatsApp",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "photography",
    title: "Mejorar cómo se ve tu negocio online",
    shortTitle: "Fotos",
    description:
      "Mostramos habitaciones, platos, espacios, vistas o productos con imágenes más claras y confiables.",
    problem:
      "Fotos oscuras o viejas bajan la confianza, aunque el lugar sea excelente.",
    result:
      "Tu negocio se ve más real, cuidado y fácil de elegir.",
    icon: Camera,
    features: [
      "Fotos para Google Maps",
      "Imágenes para web y redes",
      "Selección de fotos clave",
      "Criterios para actualizar por temporada",
    ],
    gradient: "from-sky-600 to-indigo-500",
  },
  {
    id: "reviews",
    title: "Construir confianza con reseñas",
    shortTitle: "Reseñas",
    description:
      "Te ayudamos a pedir, ordenar y responder reseñas para que la prueba social trabaje a favor.",
    problem:
      "Pocas reseñas o respuestas descuidadas hacen que el cliente dude.",
    result:
      "Más confianza antes del primer mensaje.",
    icon: Star,
    features: [
      "Sistema para pedir reseñas",
      "Respuestas humanas",
      "Seguimiento simple",
      "Mejora de reputación local",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "local-branding",
    title: "Tener una identidad con tonada local",
    shortTitle: "Branding local",
    description:
      "Ordenamos nombre, tono, colores, mensajes y detalles visuales para que tu negocio sea más recordable.",
    problem:
      "Muchos lugares se ven parecidos y cuesta recordar cuál era cuál.",
    result:
      "Una presencia más propia, más humana y más conectada con Punilla.",
    icon: Store,
    features: [
      "Tono de marca",
      "Mensajes principales",
      "Identidad visual simple",
      "Uso en redes, mapa y web",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    id: "visual-signage",
    title: "Unificar cartelería, redes y mapa",
    shortTitle: "Visuales",
    description:
      "Adaptamos piezas para cartel, redes, WhatsApp y Google para que todo cuente la misma historia.",
    problem:
      "Cuando cada canal dice algo distinto, el cliente se confunde.",
    result:
      "Un recorrido más claro desde la ruta, el mapa, Instagram o WhatsApp.",
    icon: Megaphone,
    features: [
      "Piezas para promociones",
      "Visuales para WhatsApp",
      "Destacados de Instagram",
      "Coherencia de marca",
    ],
    gradient: "from-red-600 to-rose-500",
  },
]
