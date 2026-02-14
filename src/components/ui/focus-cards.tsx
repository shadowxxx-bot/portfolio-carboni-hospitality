import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FeyButton } from "@/components/ui/fey-button";
import type { Project } from "@/data/projects";

/* ── Single card (used internally) ── */

const FocusCard = React.memo(
  ({
    project,
    index,
    hovered,
    setHovered,
  }: {
    project: Project;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link
      to={`/projects/${project.slug}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group relative block rounded-lg overflow-hidden h-64 transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Background image */}
      <img
        src={project.coverImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Permanent gradient overlay — stronger on hover */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          "bg-gradient-to-t from-black/80 via-black/40 to-black/10",
          hovered === index && "opacity-100",
          hovered !== null && hovered !== index ? "opacity-80" : "opacity-100"
        )}
      />

      {/* Content — always visible */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <h3
          className="text-lg font-semibold text-white mb-4"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,.6)" }}
        >
          {project.title}
        </h3>
        <FeyButton>
          View case <ArrowRight className="w-3.5 h-3.5" />
        </FeyButton>
      </div>
    </Link>
  )
);

FocusCard.displayName = "FocusCard";

/* ── Grid wrapper ── */

export function FocusCards({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, index) => (
        <FocusCard
          key={p.slug}
          project={p}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
