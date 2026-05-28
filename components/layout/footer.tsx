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
    <footer className="bg-[#211a14] text-amber-50" role="contentinfo">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 rounded-lg"
              aria-label="Mapa Punilla - Inicio"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-200 text-stone-950">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white">Mapa Punilla</span>
            </Link>
            <p className="text-sm text-amber-100/85 mb-6 max-w-xs">
              Marketing local para cabanas, hoteles, restaurantes, bares y emprendimientos del Valle de Punilla. Claro, cercano y orientado a consultas reales.
            </p>
            <nav aria-label="Redes sociales" className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50/10 hover:bg-amber-200 text-amber-50 hover:text-stone-950 transition-all duration-200 text-xs font-bold"
                  aria-label={`Seguinos en ${link.label}`}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegacion</h2>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-amber-100/85 hover:text-amber-200 transition-colors rounded-md">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Servicios</h2>
            <ul className="space-y-3">
              {["Google Maps", "SEO local", "Paginas web", "WhatsApp", "Publicidad turistica"].map((service) => (
                <li key={service}>
                  <Link href="/servicios" className="text-sm text-amber-100/85 hover:text-amber-200 transition-colors rounded-md">
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
                  className="inline-flex items-center gap-2 text-sm text-amber-100/85 hover:text-amber-200 transition-colors rounded-md"
                  aria-label={`Contactar por WhatsApp al ${config.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {config.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.email}`} className="inline-flex items-center gap-2 text-sm text-amber-100/85 hover:text-amber-200 transition-colors rounded-md">
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {config.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-amber-100/85">
                  <MapPinned className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  {config.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-50/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-amber-100/70">
            &copy; {new Date().getFullYear()} Mapa Punilla. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
