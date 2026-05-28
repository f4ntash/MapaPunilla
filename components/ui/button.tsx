"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "whatsapp"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200",
          "rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500",
          "disabled:pointer-events-none disabled:opacity-50 select-none",
          {
            "bg-green-800 text-white hover:bg-green-900 active:bg-stone-950 shadow-sm":
              variant === "primary",
            "border-2 border-green-800 text-green-900 hover:bg-amber-50 active:bg-amber-100 bg-white":
              variant === "outline",
            "text-green-900 hover:bg-amber-50 active:bg-amber-100":
              variant === "ghost",
            "bg-green-800 text-white hover:bg-green-900 active:bg-stone-950 shadow-sm border border-green-800":
              variant === "whatsapp",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-sm": size === "md",
            "h-12 md:h-13 px-6 md:px-8 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
