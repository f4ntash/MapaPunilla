"use client"

import { useMemo, useState } from "react"
import { Filter, Search } from "lucide-react"
import { mapBusinesses, mapCategories, mapLocations } from "@/data/map-businesses"
import { BusinessCard } from "@/components/map/business-card"

const allCategories = "Todas las categorías"
const allLocations = "Todas las localidades"

export function MapExplorer() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(allCategories)
  const [location, setLocation] = useState(allLocations)

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return mapBusinesses.filter((business) => {
      const matchesQuery =
        !normalized ||
        [business.name, business.description, business.location, business.category, ...business.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
      const matchesCategory = category === allCategories || business.category === category
      const matchesLocation = location === allLocations || business.location === location
      return matchesQuery && matchesCategory && matchesLocation
    })
  }, [category, location, query])

  return (
    <section className="bg-[#fff9ef] py-18 md:py-24">
      <div className="container">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Explorar el mapa</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
              Negocios turísticos del valle que vale la pena descubrir
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#4a3428]">
            Una primera muestra viva de cabañas, hoteles, restaurantes, bares, complejos y experiencias. Los datos son ejemplos de lanzamiento mientras abrimos lugares fundadores.
          </p>
        </div>

        <div className="mb-8 rounded-[1.5rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-4">
          <div className="grid gap-3 md:grid-cols-[1fr_14rem_14rem]">
            <label className="relative block">
              <span className="sr-only">Buscar negocio</span>
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a3428]" aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nombre, etiqueta o localidad"
                className="h-12 w-full rounded-full border border-[#4a3428]/15 bg-[#fff9ef] pl-11 pr-4 text-sm font-semibold text-[#1e1a16] outline-none ring-[#d97732]/30 transition focus:ring-4"
              />
            </label>
            <label className="relative block">
              <span className="sr-only">Filtrar por categoría</span>
              <Filter className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a3428]" aria-hidden="true" />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-12 w-full rounded-full border border-[#4a3428]/15 bg-[#fff9ef] pl-11 pr-4 text-sm font-bold text-[#1e1a16] outline-none ring-[#d97732]/30 transition focus:ring-4"
              >
                <option>{allCategories}</option>
                {mapCategories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="sr-only">Filtrar por localidad</span>
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="h-12 w-full rounded-full border border-[#4a3428]/15 bg-[#fff9ef] px-4 text-sm font-bold text-[#1e1a16] outline-none ring-[#d97732]/30 transition focus:ring-4"
              >
                <option>{allLocations}</option>
                {mapLocations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-4 text-sm font-bold text-[#4a3428]">
          <span>{filtered.length} lugares visibles</span>
          <span>{mapBusinesses.filter((business) => business.founder).length} negocios fundadores</span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-8 text-center">
            <p className="font-serif text-3xl font-semibold text-[#1e1a16]">Todavía no hay lugares con ese filtro.</p>
            <p className="mt-3 text-[#4a3428]">Probá con otra localidad o categoría.</p>
          </div>
        )}
      </div>
    </section>
  )
}
