"use client"

import { useInView } from "@/lib/use-in-view"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const { ref, isInView } = useInView()

  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div
        ref={ref}
        className={cn(
          "container transition-all duration-500 ease-out",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-emerald-700">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-stone-800">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-stone-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}
