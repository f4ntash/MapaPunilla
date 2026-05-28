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
      "Vivimos, trabajamos y entendemos el turismo local porque somos de acá. Sabemos lo que funciona en Carlos Paz, Cosquín y cada pueblo de la región.",
    icon: MapPin,
  },
  {
    id: "results",
    title: "Resultados que se ven",
    description:
      "Trabajamos con objetivos claros: más reservas, más reseñas, más clientes. Te mostramos los números cada mes, sin vueltas.",
    icon: TrendingUp,
  },
  {
    id: "personalized",
    title: "Te visitamos personalmente",
    description:
      "No somos una agencia de internet nada más. Vamos a tu negocio, conocemos tu espacio, sacamos fotos y diseñamos la estrategia justa para vos.",
    icon: Home,
  },
  {
    id: "support",
    title: "Soporte directo por WhatsApp",
    description:
      "Tenés acceso directo a tu asesor por WhatsApp. Sin bots, sin formularios, sin esperar. Respondemos rápido.",
    icon: Headphones,
  },
  {
    id: "team",
    title: "Un equipo completo",
    description:
      "Especialistas en Google Maps, SEO, WhatsApp, diseño web, fotografía e inteligencia artificial. Todo lo que necesitás en un solo lugar.",
    icon: Users,
  },
  {
    id: "coverage",
    title: "Cubrimos todo Punilla",
    description:
      "De Carlos Paz a Capilla del Monte, trabajamos con negocios de toda la región. Conocemos cada localidad y su movimiento turístico.",
    icon: Target,
  },
]
