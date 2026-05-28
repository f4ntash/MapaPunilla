export type SeoLanding = {
  slug: string
  title: string
  metaTitle: string
  description: string
  eyebrow: string
  intro: string
  intent: string
  audience: string[]
  work: string[]
  proof: string[]
  faqs: { question: string; answer: string }[]
  related: { label: string; href: string }[]
}

export const seoLandings: SeoLanding[] = [
  {
    slug: "google-maps-negocios-punilla",
    title: "Google Maps para negocios turísticos en Punilla",
    metaTitle: "Google Maps para negocios en Punilla",
    description:
      "Mejoramos fichas de Google Maps para cabañas, hoteles, restaurantes y negocios turísticos de Punilla: fotos, reseñas, horarios, categorías y WhatsApp.",
    eyebrow: "Visibilidad local",
    intro:
      "Cuando alguien llega al valle, muchas decisiones empiezan en Maps. Si tu ficha está incompleta, con fotos flojas o datos confusos, el turista puede pasar de largo aunque tu lugar sea excelente.",
    intent:
      "Ordenamos tu Google Business Profile para que explique qué ofrecés, dónde estás, cuándo atendés y cómo escribirte por WhatsApp.",
    audience: [
      "Cabañas, hoteles chicos y complejos turísticos",
      "Restaurantes, bares y cafeterías",
      "Actividades, excursiones y comercios locales",
      "Negocios de Villa Carlos Paz, Cosquín, La Falda, Tanti y Capilla del Monte",
    ],
    work: [
      "Revisión de categorías, horarios, servicios y datos de contacto",
      "Textos claros con palabras locales sin repetir de más",
      "Criterios para fotos que generen confianza antes de la consulta",
      "Mejora de llamados a WhatsApp, indicaciones y reservas",
      "Plan simple para pedir y responder reseñas",
    ],
    proof: [
      "Más claro para Google. Más fácil para turistas y vecinos.",
      "Sin vueltas técnicas: te explicamos qué cambiamos y por qué.",
      "Pensado para negocios reales del Valle de Punilla.",
    ],
    faqs: [
      {
        question: "¿Tengo que crear una ficha nueva?",
        answer:
          "No siempre. Primero revisamos si ya existe una ficha, si está verificada y qué conviene corregir. La mayoría de las veces se puede mejorar lo que ya tenés.",
      },
      {
        question: "¿Esto garantiza aparecer primero?",
        answer:
          "No prometemos posiciones garantizadas. Sí trabajamos para que Google entienda mejor tu negocio y para que la ficha genere más confianza cuando aparece.",
      },
    ],
    related: [
      { label: "Ver servicios", href: "/servicios" },
      { label: "Pedir diagnóstico", href: "/contacto" },
    ],
  },
  {
    slug: "marketing-turistico-punilla",
    title: "Marketing turístico para negocios de Punilla",
    metaTitle: "Marketing turístico en Punilla",
    description:
      "Marketing turístico local para hoteles, cabañas, restaurantes, bares y emprendimientos del Valle de Punilla que necesitan más visibilidad, consultas y reservas.",
    eyebrow: "Guía local",
    intro:
      "Mapa Punilla no busca que tu negocio parezca una marca de cualquier ciudad. La idea es que se vea local, confiable y fácil de elegir cuando turistas y vecinos buscan dónde dormir, comer o visitar.",
    intent:
      "Unimos Google Maps, SEO local, contenido, redes, fotos, WhatsApp y páginas simples dentro de una presencia digital con tonada del valle.",
    audience: [
      "Hoteles chicos y alojamientos temporarios",
      "Cabañas familiares y complejos turísticos",
      "Restaurantes, bares y lugares para visitar",
      "Emprendimientos que quieren ordenar su comunicación sin volverse técnicos",
    ],
    work: [
      "Diagnóstico de cómo aparece tu negocio hoy",
      "Mensajes claros para explicar servicios, ubicación y diferenciales",
      "Mejoras de Google Maps, reseñas, fotos y contacto",
      "Contenido pensado para temporada alta y búsquedas locales",
      "Rutas de trabajo según presupuesto y prioridad",
    ],
    proof: [
      "Primero entendemos tu negocio; después proponemos la ruta.",
      "Cero humo: acciones concretas orientadas a consultas reales.",
      "Una presencia digital con identidad local, no una web genérica.",
    ],
    faqs: [
      {
        question: "¿Sirve si mi negocio es chico?",
        answer:
          "Sí. Justamente está pensado para negocios chicos y medianos que necesitan verse más claros y confiables sin armar una estructura enorme.",
      },
      {
        question: "¿Tengo que saber de marketing?",
        answer:
          "No. Te explicamos todo simple, priorizamos lo importante y evitamos tecnicismos que no ayudan a decidir.",
      },
    ],
    related: [
      { label: "Conocer las rutas", href: "/precios" },
      { label: "Leer guías", href: "/blog" },
    ],
  },
  {
    slug: "marketing-cabanas-punilla",
    title: "Marketing para cabañas en Punilla",
    metaTitle: "Marketing para cabañas en Punilla",
    description:
      "Visibilidad local, Google Maps, fotos, reseñas, páginas simples y WhatsApp para cabañas en Villa Carlos Paz, La Falda, Tanti, Cosquín y Capilla del Monte.",
    eyebrow: "Alojamientos",
    intro:
      "Quien busca cabañas compara rápido: fotos, ubicación, reseñas, servicios, disponibilidad y respuesta por WhatsApp. Si algo no se entiende, sigue mirando otra opción.",
    intent:
      "Ordenamos tu presencia para que la persona entienda qué tipo de cabaña ofrecés, dónde está, cómo reservar y por qué confiar.",
    audience: [
      "Cabañas en Villa Carlos Paz, Tanti y La Falda",
      "Alojamientos temporarios en Cosquín y Capilla del Monte",
      "Complejos familiares, monoambientes y casas de alquiler",
      "Dueños que quieren recibir más consultas directas",
    ],
    work: [
      "Google Maps más completo para búsquedas de alojamiento",
      "Fotos y textos pensados para generar confianza",
      "Botones claros de WhatsApp y reserva directa",
      "Preguntas frecuentes para reducir dudas repetidas",
      "SEO local para búsquedas como cabañas en Punilla o cabañas en Carlos Paz",
    ],
    proof: [
      "De la búsqueda al WhatsApp con menos fricción.",
      "Más claridad sobre servicios, ubicación y forma de reserva.",
      "Pensado para temporada, fines largos y consultas de último momento.",
    ],
    faqs: [
      {
        question: "¿Puedo seguir usando Booking o Airbnb?",
        answer:
          "Sí. La idea no es borrar lo que ya funciona, sino sumar caminos propios para recibir consultas directas y depender menos de comisiones.",
      },
      {
        question: "¿Necesito una página grande?",
        answer:
          "No. Muchas cabañas necesitan una landing clara, rápida y conectada a WhatsApp antes que una web enorme.",
      },
    ],
    related: [
      { label: "Reservas directas", href: "/servicios/reservas-directas-cabanas" },
      { label: "Planes para alojamientos", href: "/precios" },
    ],
  },
  {
    slug: "marketing-restaurantes-punilla",
    title: "Marketing para restaurantes en Punilla",
    metaTitle: "Marketing para restaurantes en Punilla",
    description:
      "Google Maps, fotos, reseñas, contenido e Instagram para restaurantes, bares y cafeterías del Valle de Punilla que quieren recibir más consultas y reservas.",
    eyebrow: "Gastronomía local",
    intro:
      "Cuando un turista busca dónde comer en Punilla, decide rápido: fotos del lugar, platos reales, horarios, ubicación, reseñas y si puede escribir o reservar sin vueltas.",
    intent:
      "Ordenamos la presencia digital del restaurante para que sea más fácil descubrirlo, entender qué ofrece y llegar desde Google Maps, Instagram o WhatsApp.",
    audience: [
      "Restaurantes familiares en Villa Carlos Paz, Cosquín y La Falda",
      "Bares, cafeterías y espacios de noche",
      "Parrillas, casas de comida y propuestas serranas",
      "Locales que dependen de temporada, fines largos y turistas de paso",
    ],
    work: [
      "Google Maps con horarios, categorías, fotos y llamados claros",
      "Fotos de platos, salón, fachada y experiencia real",
      "Mensajes para reservas, ubicación, carta y grupos",
      "Contenido que la gente pueda guardar o compartir",
      "Reseñas respondidas con tono humano y local",
    ],
    proof: [
      "El turista no quiere adivinar: quiere entender rápido si tu lugar es para él.",
      "Menos dudas sobre horarios, ubicación y reservas.",
      "Más claro en Google Maps, más fácil en WhatsApp.",
    ],
    faqs: [
      {
        question: "¿Sirve si ya publico en Instagram?",
        answer:
          "Sí, pero Instagram solo no alcanza. Lo conectamos con Google Maps, WhatsApp, reseñas y mensajes claros para que la gente pueda pasar de mirar a consultar.",
      },
      {
        question: "¿Necesito fotos profesionales?",
        answer:
          "Ayudan mucho, pero también podemos empezar ordenando qué fotos faltan y cómo mostrar mejor platos, fachada, salón y ambiente.",
      },
    ],
    related: [
      { label: "Ver servicios", href: "/servicios" },
      { label: "Sumar mi restaurante al mapa", href: "/nuestro-mapa" },
    ],
  },
  {
    slug: "marketing-hoteles-punilla",
    title: "Marketing para hoteles en Punilla",
    metaTitle: "Marketing para hoteles en Punilla",
    description:
      "Visibilidad local, Google Maps, reservas directas, WhatsApp y contenido para hoteles chicos y alojamientos del Valle de Punilla.",
    eyebrow: "Hoteles y alojamientos",
    intro:
      "Muchos hoteles chicos tienen buena atención, ubicación y experiencia, pero online se ven incompletos. Ahí se pierden consultas antes de que alguien pregunte disponibilidad.",
    intent:
      "Hacemos que tu hotel se entienda mejor: dónde está, qué incluye, cómo reservar, por qué confiar y cómo escribir sin depender solo de plataformas con comisión.",
    audience: [
      "Hoteles chicos y hosterías de Punilla",
      "Alojamientos familiares en Villa Carlos Paz, La Falda y Cosquín",
      "Posadas, apart hoteles y complejos con habitaciones",
      "Negocios que quieren más consultas directas y menos dependencia de intermediarios",
    ],
    work: [
      "Ficha de Google Maps más completa y confiable",
      "Mensajes claros sobre habitaciones, servicios, cochera, desayuno y ubicación",
      "WhatsApp preparado para disponibilidad, tarifas y reservas",
      "Landing simple para recibir consultas directas",
      "Contenido y reseñas para sostener confianza en baja y alta temporada",
    ],
    proof: [
      "Dependencia de Booking: menos control, menos margen y menos relación directa.",
      "Una presencia clara reduce preguntas repetidas.",
      "El hotel se vende mejor cuando la información está ordenada.",
    ],
    faqs: [
      {
        question: "¿Esto reemplaza Booking?",
        answer:
          "No necesariamente. La idea es sumar caminos propios de consulta y reserva directa para depender menos de intermediarios.",
      },
      {
        question: "¿Sirve en baja temporada?",
        answer:
          "Sí. En baja temporada conviene trabajar Google Maps, reseñas, fotos y contenido para llegar mejor preparado a los momentos de más demanda.",
      },
    ],
    related: [
      { label: "Reservas directas", href: "/servicios/reservas-directas-cabanas" },
      { label: "WhatsApp para hoteles", href: "/servicios/whatsapp-business-hoteles" },
    ],
  },
  {
    slug: "automatizacion-whatsapp-turismo",
    title: "Automatización de WhatsApp para turismo",
    metaTitle: "Automatización WhatsApp para turismo",
    description:
      "Automatizaciones simples de WhatsApp e Instagram para responder consultas, horarios, ubicación, disponibilidad y reservas en cabañas, hoteles y restaurantes.",
    eyebrow: "Respuestas simples",
    intro:
      "En temporada, las consultas llegan cuando estás atendiendo, limpiando, cocinando o recibiendo gente. Si tardás mucho, muchas personas siguen buscando.",
    intent:
      "Creamos respuestas automáticas simples y humanas para que nadie quede sin una primera orientación y vos puedas ordenar mejor las consultas.",
    audience: [
      "Cabañas y hoteles con preguntas repetidas por disponibilidad",
      "Restaurantes que reciben consultas por horarios, reservas y ubicación",
      "Emprendimientos turísticos que responden desde Instagram",
      "Negocios que quieren ahorrar tiempo sin sonar impersonales",
    ],
    work: [
      "Mensaje de bienvenida claro y cercano",
      "Respuestas rápidas para precios, horarios, ubicación y servicios",
      "Derivación a una persona cuando hace falta",
      "Puente entre Instagram y WhatsApp",
      "Flujos simples para ordenar pedidos de reserva",
    ],
    proof: [
      "No vendemos una IA rara: armamos respuestas útiles para tu día a día.",
      "Vos aprobás el tono y los mensajes antes de usarlos.",
      "Menos consultas perdidas, más orden para atender.",
    ],
    faqs: [
      {
        question: "¿La gente nota que es automático?",
        answer:
          "Puede estar automatizado sin sonar frío. Usamos mensajes simples, transparentes y fáciles de entender, con salida a una persona real.",
      },
      {
        question: "¿Sirve para Instagram?",
        answer:
          "Sí. Podemos preparar respuestas para mensajes frecuentes y llevar la conversación hacia WhatsApp cuando conviene.",
      },
    ],
    related: [
      { label: "Ver automatizaciones", href: "/precios#automatizaciones" },
      { label: "WhatsApp para hoteles", href: "/servicios/whatsapp-business-hoteles" },
    ],
  },
  {
    slug: "nuestro-mapa",
    title: "Nuestro mapa digital del turismo en Punilla",
    metaTitle: "Nuestro mapa digital de Punilla",
    description:
      "Mapa Punilla es una guía local para descubrir negocios turísticos del Valle de Punilla y ayudar a que cabañas, hoteles, restaurantes y emprendimientos sean más fáciles de encontrar.",
    eyebrow: "Identidad local",
    intro:
      "El mapa no es solo una lista de servicios. Es una forma de ordenar y mostrar los lugares que hacen vivir Punilla: dónde dormir, dónde comer, qué visitar y cómo contactar.",
    intent:
      "Construimos una presencia digital que mezcla guía local, visibilidad en Google y herramientas simples para que los negocios del valle sean más fáciles de descubrir.",
    audience: [
      "Turistas que buscan lugares reales del valle",
      "Locales que recomiendan y descubren negocios cercanos",
      "Dueños de cabañas, hoteles, restaurantes y bares",
      "Emprendedores que quieren aparecer mejor sin perder identidad",
    ],
    work: [
      "Historias y categorías pensadas para el turismo local",
      "Presencia clara en Google, Maps, Instagram y WhatsApp",
      "Páginas y perfiles con información útil, no relleno",
      "Links entre servicios, guías y rutas de trabajo",
      "Una marca editorial que se sienta propia de Punilla",
    ],
    proof: [
      "Punilla también se explora online.",
      "Tu negocio merece ser encontrado y entendido.",
      "Una guía digital con cercanía, claridad y orgullo local.",
    ],
    faqs: [
      {
        question: "¿Mapa Punilla es un directorio?",
        answer:
          "Es una guía local en construcción y también un servicio para ordenar la presencia digital de negocios turísticos del valle.",
      },
      {
        question: "¿Puedo sumar mi negocio?",
        answer:
          "Sí. Primero hacemos un diagnóstico simple para ver cómo aparece hoy y qué camino conviene tomar.",
      },
    ],
    related: [
      { label: "Sumar mi negocio", href: "/contacto" },
      { label: "Marketing turístico", href: "/marketing-turistico-punilla" },
    ],
  },
]

export function getSeoLanding(slug: string) {
  return seoLandings.find((page) => page.slug === slug)
}
