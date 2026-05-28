export function AboutHero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-stone-900">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950" />
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Somos de Punilla. Potenciamos Punilla.
          </h1>
          <p className="text-base md:text-lg text-stone-300 leading-relaxed max-w-xl">
            Una agencia digital local que entiende el turismo del Valle de Punilla porque lo vive todos los días.
          </p>
        </div>
      </div>
    </section>
  )
}
