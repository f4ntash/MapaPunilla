import { MessageCircle, Mail, MapPinned, Clock } from "lucide-react"
import { config } from "@/lib/config"

const contactDetails = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: config.phoneDisplay,
    href: config.whatsapp.url,
    action: "Escribinos ahora",
  },
  {
    icon: Mail,
    label: "Email",
    value: config.email,
    href: `mailto:${config.email}`,
    action: "Enviar email",
  },
  {
    icon: MapPinned,
    label: "Ubicacion",
    value: config.location,
    href: "https://maps.google.com/?q=Villa+Carlos+Paz+Cordoba+Argentina",
    action: "Ver en maps",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lunes a Viernes: 9:00 - 18:00",
  },
]

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-6">
        Informacion de contacto
      </h2>

      <div className="space-y-4">
        {contactDetails.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="p-4 md:p-5 rounded-2xl bg-white border border-stone-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-stone-800 mt-0.5 break-words">
                  {item.value}
                </p>
                {item.href && item.action && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-emerald-700 hover:text-emerald-800 mt-1 inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-md"
                  >
                    {item.action} &rarr;
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-800 text-white">
        <h3 className="font-bold text-base md:text-lg mb-2">
          Diagnostico gratis
        </h3>
        <p className="text-sm text-emerald-200 mb-4">
          Contanos tu rubro y localidad. Te respondemos con una mirada simple sobre que mejorar primero.
        </p>
        <a
          href={config.whatsapp.link("Hola! Quiero un diagnostico gratis")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Chatear ahora
        </a>
      </div>
    </div>
  )
}
