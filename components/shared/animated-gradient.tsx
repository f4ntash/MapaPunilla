"use client"

import { cn } from "@/lib/utils"

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden hidden md:block",
        className
      )}
    >
      <div className="absolute -top-1/2 -left-1/2 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-orange-500/20 blur-2xl" />
      </div>
    </div>
  )
}
