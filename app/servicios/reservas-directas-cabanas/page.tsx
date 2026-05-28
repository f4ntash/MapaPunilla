import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const meta = {
  title: "Reservas directas para cabañas sin comisiones en Punilla",
  description:
    "Dejá de pagar 25% a Booking y Mercado Libre. Recibí reservas directas en tu propia web para tus cabañas en Carlos Paz y Punilla. Cobrá el 100%.",
  path: "/servicios/reservas-directas-cabanas",
  keywords: [
    "reservas directas cabañas",
    "reservas sin comision",
    "pagina web cabañas carlos paz",
    "sistema de reservas cabañas",
    "booking alternativas",
    "reservar cabañas directo",
  ],
}

export const metadata: Metadata = buildMetadata(meta)

export default function Page() {
  return (
    <SeoLandingPage
      title="Reservas directas para cabañas sin comisiones en Punilla"
      subtitle="Cobrá el 100% de cada reserva sin intermediarios"
      heroDescription="Booking, Mercado Libre y Airbnb te cobran hasta 25% por cada reserva. Con una página de reservas directas, tus clientes reservan directo y cobrás el total. Sin comisiones, sin demoras, sin depender de terceros."
      problem="Las plataformas de reservas te dan visibilidad, pero te cobran entre 15% y 25% por cada huésped. En temporada alta, perdés miles de pesos. Además, no tenés los datos de tus clientes para ofrecerles volver."
      solution="Creamos una página web simple para tus cabañas con sistema de reservas integrado. El cliente ve disponibilidad, elige fechas, paga y recibe confirmación al instante. Todo automático, sin comisiones."
      sections={[
        {
          title: "¿Qué incluye tu página de reservas directas?",
          items: [
            "Página web profesional con fotos de tus cabañas",
            "Calendario de disponibilidad automático",
            "Sistema de reservas con confirmación instantánea",
            "Integración con Mercado Pago para cobrar",
            "Notificaciones automáticas por WhatsApp y email",
            "Panel simple para gestionar reservas y precios",
          ],
        },
        {
          title: "Beneficios de las reservas directas",
          items: [
            "Cobrás el 100% de cada reserva sin comisiones",
            "Tenés los datos de todos tus huéspedes",
            "Ofrecé descuentos por reservar directo",
            "Sin dependencia de Booking o Mercado Libre",
            "Podés cambiar precios y disponibilidad al instante",
            "Tus clientes reservan en 2 minutos sin llamar",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Puedo seguir usando Booking además de la web?",
          answer:
            "Sí. Te recomendamos usar ambas. La web para clientes que ya te conocen o te encuentran por Google, y las plataformas para captar nuevos clientes. Con el tiempo, cada vez más huéspedes reservan directo.",
        },
        {
          question: "¿Es complicado de manejar?",
          answer:
            "No. Te damos un panel simple donde ves las reservas, cambiás precios y actualizás disponibilidad. Es más fácil que manejar Booking.",
        },
        {
          question: "¿Cuánto cuesta la página?",
          answer:
            "Tenemos planes desde $35.000/mes que incluyen la web, el sistema de reservas y soporte. Consultá nuestra página de precios para más detalles.",
        },
      ]}
      breadcrumbItems={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "Reservas Directas", path: "/servicios/reservas-directas-cabanas" },
      ]}
      zoneName="Valle de Punilla"
    />
  )
}
