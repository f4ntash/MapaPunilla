import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "outline"
  className?: string
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        {
          "bg-emerald-600 text-white": variant === "default",
          "bg-green-700 text-white": variant === "success",
          "bg-orange-600 text-white": variant === "warning",
          "border-2 border-emerald-600 text-emerald-700": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  )
}
