import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", icon, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-lg border bg-background p-2 text-center font-semibold transition-all",
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2 translate-x-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {icon}
        {text}
      </span>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 px-2 rounded-lg">
        {icon}
        <span>{text}</span>
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
