import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border-2 border-stone-300 bg-white px-4 py-2 text-sm text-stone-800",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-stone-500",
        "focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
