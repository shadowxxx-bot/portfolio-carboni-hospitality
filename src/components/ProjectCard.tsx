import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact }: ProjectCardProps) {
  if (compact) {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group flex items-center justify-between py-3 border-b border-gray-100 hover:bg-light-grey -mx-2 px-2 rounded transition-colors"
      >
        <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </span>
        <ArrowRight className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block rounded-lg overflow-hidden h-64"
    >
      {/* Background image */}
      <img
        src={project.coverImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <h3 className="inline-flex self-start px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-lg font-semibold text-white transition-all duration-200 group-hover:bg-white/20 group-hover:border-white/30">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
