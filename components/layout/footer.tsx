import Link from "next/link"
import { MapPin, Mail, Phone, MapPinned } from "lucide-react"
import { navigation } from "@/data/navigation"
import { config } from "@/lib/config"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/mapapunilla", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com/mapapunilla", icon: "FB" },
]

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 rounded-lg"
              aria-label="Mapa Punilla - Inicio"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl gradient-green text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">Mapa Punilla</span>
            </Link>
            <p className="text-sm text-stone-400 mb-6 max-w-xs">
              Ayudamos a negocios turísticos del Valle de Punilla a aparecer primero en Google Maps y recibir más clientes. Somos de acá, trabajamos para acá.
            </p>
            <nav aria-label="Redes sociales" className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-400 hover:text-white transition-all duration-200 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  aria-label={`Seguinos en ${link.label}`}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegación</h2>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 rounded-md"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Servicios</h2>
            <ul className="space-y-3">
              {["Google Maps", "SEO Local", "WhatsApp Business", "Reservas Online", "Automatizaciones"].map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 rounded-md"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contacto</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={config.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-emerald-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 rounded-md"
                  aria-label="Contactar por WhatsApp"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {config.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-emerald-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 rounded-md"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {config.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-stone-400">
                  <MapPinned className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {config.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Mapa Punilla. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
