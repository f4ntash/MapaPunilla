import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { whyChooseUs } from "@/data/whyChooseUs"

export function WhyChooseUs() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="Por qué nosotros"
        title="Conocé Punilla. Potenciamos Punilla."
        subtitle="No somos una agencia de afuera. Vivimos, trabajamos y entendemos el turismo local porque somos parte de esta región."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {whyChooseUs.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className="text-center p-6 md:p-8 rounded-2xl bg-white border border-stone-200 hover:shadow-md hover:border-emerald-200 transition-all duration-200"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-4 md:mb-5">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-stone-800 mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
