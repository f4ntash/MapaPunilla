import { MessageCircle } from "lucide-react"
import { config } from "@/lib/config"

export function FloatingWhatsApp() {
  return (
    <a
      href={config.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800 hover:shadow-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
