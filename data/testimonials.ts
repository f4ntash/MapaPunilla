export interface Testimonial {
  id: string
  name: string
  role: string
  business: string
  content: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carolina Méndez",
    role: "Dueña",
    business: "Cabañas del Lago, Carlos Paz",
    content:
      "Antes aparecía después de mis competidores en Google Maps. Desde que trabajamos con ellos, soy el primer resultado cuando buscan cabañas. Mis reservas aumentaron un 340% y ni siquiera tuve que hacer nada, ellos hicieron todo.",
    rating: 5,
    avatar: "CM",
  },
  {
    id: "2",
    name: "Gonzalo Ríos",
    role: "Gerente",
    business: "Restaurante La Ribera, Cosquín",
    content:
      "Pusimos un chatbot que responde consultas de clientes las 24 horas. Ahora atiende reservas mientras dormimos. En el primer mes recuperamos la inversión. Es como tener un empleado que trabaja gratis todo el día.",
    rating: 5,
    avatar: "GR",
  },
  {
    id: "3",
    name: "María Eugenia Paz",
    role: "Directora",
    business: "Hotel Punilla Suites, La Falda",
    content:
      "Dejamos de pagarle a Booking y Mercado Libre. Ahora recibimos reservas directas sin comisiones. La página que nos hicieron es simple pero funciona perfecto. Recuperamos la inversión en 2 meses.",
    rating: 5,
    avatar: "MP",
  },
  {
    id: "4",
    name: "Luciano Torres",
    role: "Emprendedor",
    business: "Turismo Aventura Punilla",
    content:
      "Tenía 3 reseñas en Google. En 4 meses pasamos a más de 80. Las fotos profesionales que tomaron cambiaron todo. Ahora mis excursiones están siempre llenas y ni siquiera necesito hacer publicidad.",
    rating: 5,
    avatar: "LT",
  },
  {
    id: "5",
    name: "Valentina Suárez",
    role: "Propietaria",
    business: "Complejo Las Vertientes, Carlos Paz",
    content:
      "Vino un asesor a visitarnos, vio el complejo, nos explicó todo simple. Ahora aparecemos primeros en Google, tenemos avisos que atraen gente y las reseñas no paran de llegar. Recomiendo totalmente.",
    rating: 5,
    avatar: "VS",
  },
]
