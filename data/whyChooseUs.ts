import { MapPin, Users, TrendingUp, Headphones, Target, Home } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "local",
    title: "Somos de Punilla",
    description:
      "Conocemos el movimiento turistico de Villa Carlos Paz, Cosquin, La Falda, Tanti y las localidades del valle.",
    icon: MapPin,
  },
  {
    id: "simple",
    title: "Te explicamos sin vueltas",
    description:
      "No necesitas entender de marketing. Te contamos que hacemos, por que importa y como ayuda a conseguir consultas.",
    icon: Users,
  },
  {
    id: "results",
    title: "Foco en reservas y clientes",
    description:
      "Priorizamos visibilidad, confianza y mensajes claros para que mas personas contacten a tu negocio.",
    icon: TrendingUp,
  },
  {
    id: "personalized",
    title: "Pensado para negocios chicos",
    description:
      "Adaptamos la estrategia a tu rubro, temporada, presupuesto y capacidad real de atencion.",
    icon: Home,
  },
  {
    id: "support",
    title: "Acompanamiento por WhatsApp",
    description:
      "Tenes contacto directo para dudas, ajustes y seguimiento. Sin paneles raros ni procesos frios.",
    icon: Headphones,
  },
  {
    id: "coverage",
    title: "SEO local de verdad",
    description:
      "Trabajamos busquedas locales, Google Maps, paginas web y contenido orientado al Valle de Punilla.",
    icon: Target,
  },
]
