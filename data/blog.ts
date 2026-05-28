export interface BlogArticle {
  slug: string
  title: string
  description: string
  content: string[]
  image?: string
  publishedTime: string
  author: string
  tags: string[]
  readTime: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "google-maps-para-turismo-punilla",
    title: "Cómo aparecer en Google Maps para atraer más turistas en Punilla",
    description:
      "Guía práctica para que hoteles, cabañas y restaurantes del Valle de Punilla aparezcan en Google Maps y atraigan más clientes sin pagar publicidad.",
    content: [
      "Si tenés un hotel, cabañas o un restaurante en Villa Carlos Paz, Cosquín o La Falda, ya sabés que la mayoría de los turistas busca dónde ir directamente en Google Maps. Lo que quizás no sabés es que hay pasos concretos para que tu negocio aparezca primero, sin necesidad de pagar publicidad.",
      "El primer paso es tener tu perfil de Google Business Profile completo y verificado. No alcanza con tenerlo creado: necesitás categorías correctas, fotos de calidad, horarios actualizados y reseñas que generen confianza.",
      "Google usa tres factores principales para decidir qué negocios mostrar: cercanía, relevancia y prominencia. La cercanía no la podés cambiar (depende de dónde esté el turista), pero la relevancia y la prominencia sí se pueden mejorar.",
      "Para mejorar la relevancia, tu perfil debe tener palabras clave que los turistas buscan. Por ejemplo, si tenés cabañas en Carlos Paz, tu perfil debería incluir términos como 'cabañas en Carlos Paz con pileta' o 'alojamiento cerca del centro'. No es repetir palabras sin sentido, es describir exactamente lo que ofrecés.",
      "La prominencia se construye con reseñas. Cada reseña positiva es una señal para Google de que tu negocio es confiable. Responder todas las reseñas (las buenas y las malas) también ayuda.",
      "En Mapa Punilla nos encargamos de todo este proceso. Optimizamos tu perfil, pedimos reseñas a tus clientes y respondemos por vos. El resultado: más turistas encuentran tu negocio y eligen entrar.",
      "Lo mejor es que esto funciona para cualquier negocio turístico: hoteles, cabañas, restaurantes, bares, tiendas de regalos, actividades, estacionamientos. Si un turista puede buscarlo en Google Maps, podemos posicionarlo.",
    ],
    publishedTime: "2025-11-15T10:00:00Z",
    author: "Equipo Mapa Punilla",
    tags: ["Google Maps", "SEO Local", "Turismo"],
    readTime: "5 min",
  },
  {
    slug: "why-local-seo-matters-cordoba",
    title: "Por qué el SEO Local es clave para negocios turísticos en Córdoba",
    description:
      "El 86% de los turistas busca en Google antes de elegir un alojamiento o restaurante. Descubrí cómo el SEO local puede llevar más clientes a tu negocio en Punilla.",
    content: [
      "Córdoba recibe millones de turistas cada año. El Valle de Punilla es uno de los destinos más elegidos, con Villa Carlos Paz como epicentro. Pero hay un problema: la mayoría de los negocios turísticos no aparecen en Google cuando los turistas buscan.",
      "El 86% de las personas busca en Google antes de decidir dónde alojarse, comer o comprar. Y el 76% de los que buscan algo cerca terminan visitando el negocio en menos de 24 horas. Si tu negocio no aparece en esas búsquedas, estás perdiendo clientes todos los días.",
      "El SEO local es la estrategia que hace que tu negocio aparezca en los resultados de búsqueda locales. No es magia: es optimizar tu presencia en Google para que el algoritmo entienda que tu negocio es relevante para las personas que buscan en tu zona.",
      "¿Qué incluye el SEO local? Primero, optimizar tu Google Business Profile. Segundo, tener reseñas positivas y activas. Tercero, tener presencia en directorios locales y menciones en otros sitios web. Cuarto, tener un sitio web optimizado para búsquedas locales.",
      "En el Valle de Punilla, la competencia por aparecer en Google es cada vez más fuerte. Cada vez más negocios entienden la importancia de estar visibles. Los que no lo hacen, simplemente desaparecen del mapa digital.",
      "La buena noticia: no necesitás ser experto en tecnología. Nosotros nos encargamos de todo. Analizamos tu negocio, tu zona y tu competencia, y creamos una estrategia de SEO local que funciona para tu tipo de negocio.",
    ],
    publishedTime: "2025-10-28T10:00:00Z",
    author: "Equipo Mapa Punilla",
    tags: ["SEO Local", "Marketing Digital", "Córdoba"],
    readTime: "4 min",
  },
  {
    slug: "whatsapp-business-para-hoteles",
    title: "WhatsApp Business para hoteles y cabañas: cómo vender más sin esfuerzo",
    description:
      "Automatizá las consultas de tus huéspedes con WhatsApp Business. Respondé al instante, cerrá más reservas y ahorrá tiempo.",
    content: [
      "Si tenés un hotel o cabañas en Punilla, pasás gran parte del día respondiendo las mismas preguntas por WhatsApp: '¿Tienen disponibilidad?', '¿Cuánto cuesta?', '¿Está cerca del centro?'. Cada consulta requiere tiempo y atención, y si no respondés rápido, el cliente busca otro lado.",
      "WhatsApp Business no es solo la versión 'profesional' de WhatsApp. Es una herramienta que puede transformar la forma en que atendés a tus huéspedes. Con funciones como respuestas automáticas, catálogo de productos y etiquetas para organizar conversaciones, podés atender más consultas en menos tiempo.",
      "Lo más potente: los mensajes automáticos. Podés configurar un saludo automático que se active cuando alguien te escribe por primera vez. Un mensaje de ausencia cuando no estás disponible. Y respuestas rápidas para las preguntas más frecuentes.",
      "El catálogo de WhatsApp Business te permite mostrar tus habitaciones, precios y servicios directamente en la aplicación. El cliente ve todo sin necesidad de entrar a una web. Esto acelera muchísimo la decisión de compra.",
      "Además, podés usar etiquetas para hacer seguimiento: 'Nueva consulta', 'Reserva confirmada', 'Pendiente de pago'. Sabés en todo momento en qué estado está cada conversación.",
      "En Mapa Punilla configuramos todo tu WhatsApp Business profesionalmente. Creamos las respuestas automáticas, subimos el catálogo con fotos profesionales y te enseñamos a usarlo. También podemos integrarlo con tu página de reservas para que todo esté conectado.",
    ],
    publishedTime: "2025-10-10T10:00:00Z",
    author: "Equipo Mapa Punilla",
    tags: ["WhatsApp Business", "Hoteles", "Automatización"],
    readTime: "4 min",
  },
  {
    slug: "reservas-directas-sin-comisiones",
    title: "Reservas directas sin comisiones: dejá de pagar 25% a Booking",
    description:
      "Las plataformas de reservas te cobran hasta 25% por cada huésped. Descubrí cómo recibir reservas directas y quedarte con el 100%.",
    content: [
      "Si tenés un hotel o cabañas, probablemente estás en Booking, Mercado Libre o Airbnb. Son plataformas que te traen clientes, sí, pero a un costo enorme: entre 15% y 25% de cada reserva. En temporada alta, eso es muchísima plata que podrías estar ganando.",
      "El problema es que si no estás en esas plataformas, los clientes no te encuentran. Pero si solo dependés de ellas, estás regalando una parte importante de tus ganancias y, lo peor, no tenés relación directa con tus huéspedes.",
      "La solución: tener tu propio sistema de reservas directas. Una página web simple donde los clientes vean tu disponibilidad, elijan fechas y reserven al instante. Sin comisiones, sin intermediarios, sin demoras.",
      "No hablamos de una web compleja ni cara. Una página sencilla con fotos de tus habitaciones, precios actualizados, un calendario con disponibilidad y un botón de reserva. Eso es suficiente para empezar a recibir reservas directas.",
      "Los beneficios son enormes: cobrás el 100% de cada reserva, tenés los datos de tus huéspedes para hacer marketing directo, podés ofrecerles descuentos por reservar directo y no dependés de los cambios de políticas de las plataformas.",
      "En Mapa Punilla creamos tu página de reservas directas. La conectamos con tu WhatsApp Business para que te llegue una notificación al instante cuando alguien reserva. Y te ayudamos a migrar tus primeros clientes de las plataformas a la reserva directa.",
    ],
    publishedTime: "2025-09-20T10:00:00Z",
    author: "Equipo Mapa Punilla",
    tags: ["Reservas Directas", "Hoteles", "Ahorro"],
    readTime: "5 min",
  },
  {
    slug: "fotos-profesionales-para-tu-negocio",
    title: "Fotos profesionales para tu negocio: la inversión que más clientes te trae",
    description:
      "Las fotos de tu negocio son lo primero que ve un cliente. Descubrí por qué invertir en fotografía profesional es la decisión más rentable para tu hotel, cabaña o restaurante.",
    content: [
      "Cuando un turista busca alojamiento o restaurante en Google Maps, lo primero que ve son las fotos. No lee la descripción, no mira los horarios, no revisa los servicios. Mira las fotos. Y si las fotos son malas, pasa al siguiente.",
      "Está comprobado: los negocios con fotos profesionales reciben hasta 42% más solicitudes de indicaciones en Google Maps y 35% más clics en su perfil. Las fotos no son un lujo, son la principal herramienta de venta.",
      "Sin embargo, la mayoría de los negocios turísticos en Punilla tienen fotos de mala calidad: oscuras, desordenadas, sin encuadre. O peor: no tienen fotos. En un mercado donde la primera impresión lo es todo, esto es un error costoso.",
      "Una sesión de fotos profesional no es cara comparada con el retorno que genera. Imaginate: fotos que muestran tus habitaciones amplias y luminosas, tu pileta impecable, tu restaurante con platos bien presentados. El cliente ve eso y ya quiere reservar.",
      "Además, las fotos profesionales se pueden usar en todos lados: Google Maps, tu página web, redes sociales, WhatsApp Business, plataformas de reservas. Es una inversión que se paga una sola vez y funciona 24/7.",
      "En Mapa Punilla hacemos sesiones de fotos profesionales para negocios turísticos. Vamos a tu local, fotografiamos cada espacio importante y te entregamos las fotos optimizadas para web, Google Maps y redes sociales.",
    ],
    publishedTime: "2025-09-05T10:00:00Z",
    author: "Equipo Mapa Punilla",
    tags: ["Fotografía", "Google Maps", "Marketing"],
    readTime: "4 min",
  },
]

export function getAllSlugs(): string[] {
  return blogArticles.map((a) => a.slug)
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug)
}
