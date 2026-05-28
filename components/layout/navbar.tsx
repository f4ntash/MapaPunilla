"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white border-b",
        scrolled ? "shadow-md border-stone-200" : "shadow-xs border-stone-100"
      )}
    >
      <nav
        className="container flex h-16 md:h-18 items-center justify-between"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-base md:text-lg font-bold text-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-lg"
          aria-label="Mapa Punilla - Inicio"
        >
          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-xl gradient-green text-white">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className="hidden sm:inline">Mapa Punilla</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 hover:text-emerald-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-lg px-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${config.phone}`}
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors px-3 py-1.5 rounded-lg hover:bg-emerald-50"
            aria-label="Llamar por teléfono"
          >
            {config.phoneDisplay}
          </a>
          <Button
            variant="whatsapp"
            size="sm"
            aria-label="Contactar por WhatsApp"
            onClick={() => window.open(config.whatsapp.url, "_blank")}
          >
            WhatsApp
          </Button>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-stone-700" />
          ) : (
            <Menu className="w-5 h-5 text-stone-700" />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-250 ease-in-out bg-white border-t border-stone-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-6 space-y-1" role="menu">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-3 text-base font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href={`tel:${config.phone}`}
              className="block w-full text-center py-3 px-4 rounded-xl border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-colors"
              aria-label="Llamar por teléfono"
            >
              Llamar: {config.phoneDisplay}
            </a>
            <Button
              variant="whatsapp"
              className="w-full"
              aria-label="Contactar por WhatsApp"
              onClick={() => {
                setIsOpen(false)
                window.open(config.whatsapp.url, "_blank")
              }}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
