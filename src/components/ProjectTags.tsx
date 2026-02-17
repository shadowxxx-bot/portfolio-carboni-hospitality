import { cn } from "@/lib/utils";

interface ProjectTagsProps {
  lang: "EN" | "FR";
  caseType: "Fictional case" | "Real case";
  /** "light" for light backgrounds, "dark" for image overlays */
  variant?: "light" | "dark";
  className?: string;
}

export function ProjectTags({
  lang,
  caseType,
  variant = "light",
  className,
}: ProjectTagsProps) {
  const tagClass = cn(
    "text-xs font-medium whitespace-nowrap",
    variant === "dark" ? "text-white/60" : "text-neutral-400",
    className
  );

  return (
    <>
      <span className={tagClass}>({lang})</span>
      <span className={tagClass}>({caseType})</span>
    </>
  );
}
