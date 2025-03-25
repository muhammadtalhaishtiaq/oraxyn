
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // New variants
        orange: "bg-oraxyn-orange text-white hover:bg-oraxyn-orange/90",
        purple: "bg-oraxyn-purple text-white hover:bg-oraxyn-purple/90",
        red: "bg-oraxyn-red text-white hover:bg-oraxyn-red/90",
        // Oraxyn themed variants
        "oraxyn-red": "bg-oraxyn-red text-white hover:bg-oraxyn-red/90",
        "oraxyn-blue": "bg-oraxyn-blue text-white hover:bg-oraxyn-blue/90",
        "oraxyn-dark": "bg-oraxyn-darkBlue text-white hover:bg-oraxyn-darkBlue/90",
        "oraxyn-outline": "border-2 border-oraxyn-red bg-white text-oraxyn-blue hover:bg-oraxyn-red/10 font-semibold",
        "oraxyn-demo": "bg-oraxyn-red text-white hover:bg-oraxyn-red/90 font-semibold px-6 py-3",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
