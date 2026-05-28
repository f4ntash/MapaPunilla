"use client"

import { ArrowRight, MessageCircle, Route } from "lucide-react"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#2f5d3a] py-24 text-[#fff9ef] md:py-32">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,#fff9ef_1px,transparent_1px),linear-gradient(#fff9ef_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="container relative z-10 max-w-3xl text-center">
        <Route className="mx-auto mb-6 h-10 w-10 text-[#facc15]" aria-hidden="true" />
        <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
          ¿No sabés qué parada tomar primero?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f5ebdd]">
          Miramos tu negocio, tu localidad y cómo te encuentran hoy. Después te proponemos una ruta simple, sin vueltas técnicas.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-13 gap-2 rounded-full bg-[#facc15] px-7 text-[#1e1a16] hover:bg-[#f5b51b]"
            aria-label="Pedir diagnóstico gratis por WhatsApp"
            onClick={() => window.open(config.whatsapp.link("Hola! Quiero saber qué necesita mi negocio"), "_blank")}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Pedir diagnóstico gratis
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 gap-2 rounded-full border-[#fff9ef] bg-transparent px-7 text-[#fff9ef] hover:bg-[#fff9ef] hover:text-[#1e1a16]"
            aria-label="Consultar herramientas para mi negocio"
            onClick={() => window.open(config.whatsapp.link("Tengo dudas sobre qué herramienta necesito"), "_blank")}
          >
            Tengo dudas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
