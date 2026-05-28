import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SeoLandingPage } from "@/components/services/seo-landing"

const meta = {
  title: "WhatsApp Business para hoteles y cabañas en Punilla",
  description:
    "Automatizá la atención al cliente por WhatsApp para tu hotel o cabaña en Carlos Paz y Punilla. Respondé al instante, vendé más, trabajá menos.",
  path: "/servicios/whatsapp-business-hoteles",
  keywords: [
    "whatsapp business hoteles",
    "whatsapp business cabañas",
    "whatsapp hotel carlos paz",
    "automatizacion whatsapp turismo",
    "chatbot whatsapp hotel",
    "atencion al cliente whatsapp",
  ],
}

export const metadata: Metadata = buildMetadata(meta)

export default function Page() {
  return (
    <SeoLandingPage
      title="WhatsApp Business para hoteles y cabañas en Punilla"
      subtitle="Respondé consultas al instante sin estar pegado al teléfono"
      heroDescription="Las consultas por WhatsApp son la principal forma de contacto en el turismo. Con WhatsApp Business bien configurado, respondés automáticamente, mostrás tu catálogo y convertís más consultas en reservas."
      problem="Todos los días recibís decenas de consultas por WhatsApp: disponibilidad, precios, ubicación. Si no respondés rápido, el cliente busca otro lado. Y si parás lo que estás haciendo para responder, perdés tiempo de tu trabajo."
      solution="Configuramos tu WhatsApp Business con respuestas automáticas, catálogo de habitaciones con fotos y precios, mensajes de seguimiento y estadísticas. Atendés mejor, vendés más y trabajás menos."
      sections={[
        {
          title: "Funcionalidades que incluimos",
          items: [
            "Perfil de WhatsApp Business profesional con datos de tu negocio",
            "Respuestas automáticas para consultas frecuentes",
            "Catálogo con fotos, precios y descripción de cada servicio",
            "Mensaje de ausencia para cuando no estés disponible",
            "Etiquetas para organizar conversaciones (consulta, reserva, pago)",
            "Enlace directo desde Google Maps y tu web",
          ],
        },
        {
          title: "Beneficios para tu alojamiento",
          items: [
            "Respondés al instante aunque estés ocupado",
            "Más consultas convertidas en reservas",
            "Atención profesional que genera confianza",
            "Ahorro de horas de trabajo por semana",
            "Seguimiento de cada cliente desde la consulta hasta el check-out",
            "Integración con tu página de reservas directas",
          ],
        },
      ]}
      faqs={[
        {
          question: "¿Los clientes notan que es automático?",
          answer:
            "Las respuestas automáticas están diseñadas para sonar naturales y personales. El cliente recibe una respuesta útil al instante, sin esperar. Si necesita algo más específico, la conversación sigue normalmente con vos.",
        },
        {
          question: "¿Funciona para cabañas chicas o solo hoteles grandes?",
          answer:
            "Funciona para cualquier tamaño. De hecho, si tenés pocas cabañas, cada consulta perdida duele más. La automatización te asegura no perder ninguna oportunidad.",
        },
        {
          question: "¿Puedo integrarlo con mi sistema de reservas?",
          answer:
            "Sí. Podemos integrar WhatsApp Business con tu página de reservas directas para que recibas notificaciones automáticas cuando alguien reserva.",
        },
      ]}
      breadcrumbItems={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "WhatsApp Hoteles", path: "/servicios/whatsapp-business-hoteles" },
      ]}
      zoneName="Valle de Punilla"
    />
  )
}
