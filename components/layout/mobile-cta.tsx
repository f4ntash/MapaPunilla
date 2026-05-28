import { MessageCircle, Phone } from "lucide-react"
import { config } from "@/lib/config"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-[#fffaf0] border-t border-amber-900/10 shadow-lg">
      <a
        href={`tel:${config.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-stone-900 hover:bg-amber-100 transition-colors border-r border-amber-900/10"
        aria-label={`Llamar al ${config.phoneDisplay}`}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Llamar
      </a>
      <a
        href={config.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-green-700 hover:bg-green-800 transition-colors"
        aria-label="Hablar por WhatsApp"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
