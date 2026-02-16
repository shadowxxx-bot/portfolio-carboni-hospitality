import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  children,
  variant = "light",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-sm uppercase tracking-wide font-semibold mb-4",
        variant === "dark" ? "text-text-muted-dark" : "text-text-primary",
        className
      )}
    >
      {children}
      <span className="block mt-2 w-8 h-0.5 rounded-full bg-accent" />
    </Tag>
  );
}
