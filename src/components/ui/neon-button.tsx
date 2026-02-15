import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Neon glow is rendered via ::before (top line) and ::after (bottom line)
 * so the component body stays a single {children} — required for Radix Slot.
 */
const neonBase = [
  "relative group inline-flex items-center justify-center gap-2 border text-center rounded-full",
  "whitespace-nowrap text-sm font-medium transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50",
].join(" ");

const neonGlow = [
  /* top glow line — ::before */
  "before:content-[''] before:absolute before:h-px before:inset-x-0 before:top-0",
  "before:w-3/4 before:mx-auto before:pointer-events-none",
  "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
  "before:opacity-0 before:transition-all before:duration-500 before:ease-in-out",
  "hover:before:opacity-100",
  /* bottom glow line — ::after */
  "after:content-[''] after:absolute after:h-px after:inset-x-0 after:-bottom-px",
  "after:w-3/4 after:mx-auto after:pointer-events-none",
  "after:bg-gradient-to-r after:from-transparent after:via-blue-500 after:to-transparent",
  "after:opacity-0 after:transition-all after:duration-500 after:ease-in-out",
  "hover:after:opacity-30",
].join(" ");

const neonButtonVariants = cva(
  `${neonBase} ${neonGlow}`,
  {
    variants: {
      variant: {
        default:
          "bg-blue-500/5 hover:bg-blue-500/0 border-blue-500/20 text-text-primary",
        solid:
          "bg-blue-500 hover:bg-blue-600 text-white border-transparent hover:border-white/50 transition-all duration-200",
        ghost:
          "border-transparent bg-transparent hover:border-zinc-300 hover:bg-black/5 text-text-primary",
        dark:
          "bg-white/10 hover:bg-white/5 border-white/20 text-white",
        glass:
          "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200 rounded-xl",
      },
      size: {
        default: "px-7 py-1.5",
        sm: "px-4 py-0.5 text-sm",
        lg: "px-10 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, size, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton, neonButtonVariants };
