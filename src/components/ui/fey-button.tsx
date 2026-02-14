import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * FeyButton — premium glass-style CTA.
 *
 * Designed for dark image backgrounds (project cards).
 * Renders as a <span> by default so it can live inside a <Link> without
 * nesting a <button> inside an <a>. Pass `as="button"` when used standalone.
 */

type FeyButtonProps<T extends React.ElementType = "span"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function FeyButton<T extends React.ElementType = "span">({
  as,
  className,
  children,
  ...props
}: FeyButtonProps<T>) {
  const Comp = as ?? "span";

  return (
    <Comp
      className={cn(
        /* layout */
        "relative inline-flex items-center justify-center gap-2",
        "h-9 whitespace-nowrap rounded-xl px-4 py-2",
        "text-sm font-semibold leading-tight text-white",

        /* glass background */
        "bg-white/[0.08] backdrop-blur-md",

        /* border / contour — the "rounded rectangle outline" */
        "ring-1 ring-white/20",

        /* inset shadows for depth (FeyButton signature) */
        "[box-shadow:inset_0_0_0_0.5px_rgba(255,255,255,0.12),inset_1px_1px_0_-0.5px_rgba(255,255,255,0.18),inset_-1px_-1px_0_-0.5px_rgba(255,255,255,0.18)]",

        /* hover glow via ::after */
        "after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity after:duration-200",
        "after:bg-white/[0.06]",
        "after:[box-shadow:inset_0_0_0_0.5px_rgba(255,255,255,0.2),inset_1px_1px_0_-0.5px_rgba(255,255,255,0.25),inset_-1px_-1px_0_-0.5px_rgba(255,255,255,0.25),0_0_8px_rgba(255,255,255,0.08)]",
        "group-hover:after:opacity-100",

        "transition-all duration-200",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
    </Comp>
  );
}
