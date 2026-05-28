import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200 bg-white shadow-xs",
        className
      )}
    >
      {children}
    </div>
  )
}
