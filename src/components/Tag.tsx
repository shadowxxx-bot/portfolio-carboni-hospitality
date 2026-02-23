import { memo } from "react";

interface TagProps {
  label: string;
  variant?: "light" | "dark";
}

export const Tag = memo(function Tag({ label, variant = "light" }: TagProps) {
  const base = "inline-block text-xs font-medium px-2.5 py-1 rounded-full";
  const styles =
    variant === "dark"
      ? "bg-white/10 text-text-on-dark"
      : "bg-light-grey text-text-secondary";

  return <span className={`${base} ${styles}`}>{label}</span>;
});
