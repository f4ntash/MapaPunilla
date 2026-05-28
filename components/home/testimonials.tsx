"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev()
    if (e.key === "ArrowRight") next()
  }

  const t = testimonials[current]

  return (
    <SectionWrapper className="bg-stone-100">
      <SectionHeader
        badge="Testimonios"
        title="Lo que dicen nuestros clientes"
        subtitle="Negocios de Punilla que ya transformaron su presencia digital."
      />

      <div
        className="relative max-w-3xl mx-auto"
        onKeyDown={handleKeyDown}
      >
        <div className="overflow-hidden rounded-2xl">
          <div
            key={current}
            className="bg-white border border-stone-200 p-6 md:p-10 shadow-xs transition-opacity duration-300"
            role="group"
            aria-roledescription="testimonio"
            aria-label={`Testimonio ${current + 1} de ${testimonials.length}`}
          >
            <div className="flex gap-1 mb-4 md:mb-6" aria-label={`${t.rating} de 5 estrellas`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="text-base md:text-lg text-stone-700 leading-relaxed mb-6 md:mb-8">
              &ldquo;{t.content}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-emerald-600 to-emerald-700"
                aria-hidden="true"
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-stone-800">{t.name}</div>
                <div className="text-sm text-stone-600">
                  {t.role}, {t.business}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          <button
            onClick={prev}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500",
                  i === current
                    ? "bg-emerald-600 w-6"
                    : "bg-stone-300 w-2 hover:bg-stone-400"
                )}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}
