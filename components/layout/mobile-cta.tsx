import { MessageCircle, Phone } from "lucide-react"
import { config } from "@/lib/config"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-white border-t border-stone-200 shadow-lg">
      <a
        href={`tel:${config.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors border-r border-stone-200"
        aria-label="Llamar por teléfono"
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Llamar
      </a>
      <a
        href={config.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
