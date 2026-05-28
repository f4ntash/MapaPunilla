export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5ebdd] pt-28 pb-16 text-[#1e1a16] md:pt-36 md:pb-24">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#3f2f24_1px,transparent_1px),linear-gradient(#3f2f24_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">
            Guia de herramientas
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
            Herramientas para que tu negocio sea más fácil de descubrir
          </h1>
        </div>
        <p className="text-lg leading-8 text-[#4a3428]">
          Google Maps, fotos, redes, webs simples, contenido, branding local y automatizaciones. Todo conectado como una guía digital del valle.
        </p>
      </div>
    </section>
  )
}
