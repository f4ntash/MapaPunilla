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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled || isOpen
          ? "bg-[#fffaf0]/95 backdrop-blur border-amber-900/10 shadow-sm"
          : "bg-[#fffaf0]/90 backdrop-blur border-transparent"
      )}
    >
      <nav
        className="container flex h-16 md:h-18 items-center justify-between"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-base md:text-lg font-bold text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 rounded-lg"
          aria-label="Mapa Punilla - Inicio"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-stone-900 text-amber-200">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <span>Mapa Punilla</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-stone-700 hover:text-green-800 transition-colors rounded-lg px-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${config.phone}`}
            className="text-sm font-semibold text-stone-800 hover:text-green-800 transition-colors px-3 py-2 rounded-lg hover:bg-amber-100"
            aria-label={`Llamar al ${config.phoneDisplay}`}
          >
            {config.phoneDisplay}
          </a>
          <Button
            variant="whatsapp"
            size="sm"
            aria-label="Pedir diagnostico gratis por WhatsApp"
            onClick={() => window.open(config.whatsapp.link("Hola! Quiero un diagnostico gratis"), "_blank")}
          >
            Diagnostico gratis
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-stone-800 hover:bg-amber-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-250 ease-in-out bg-[#fffaf0] border-t border-amber-900/10",
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-5 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-3 text-base font-semibold text-stone-800 hover:text-green-900 hover:bg-amber-100 rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href={`tel:${config.phone}`}
              className="block w-full text-center py-3 px-4 rounded-xl border border-stone-300 text-stone-800 font-semibold hover:bg-amber-100 transition-colors"
              aria-label={`Llamar al ${config.phoneDisplay}`}
            >
              Llamar: {config.phoneDisplay}
            </a>
            <Button
              variant="whatsapp"
              className="w-full h-12"
              aria-label="Pedir diagnostico gratis por WhatsApp"
              onClick={() => {
                setIsOpen(false)
                window.open(config.whatsapp.link("Hola! Quiero un diagnostico gratis"), "_blank")
              }}
            >
              Pedir diagnostico gratis
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
