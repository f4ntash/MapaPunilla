import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border-2 border-stone-300 bg-white px-4 py-3 text-sm text-stone-800",
        "placeholder:text-stone-500",
        "focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-all duration-200 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
