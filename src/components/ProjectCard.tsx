import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tag } from "./Tag";
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
      className="group block border border-gray-100 rounded-lg p-6 hover:shadow-md hover:border-gray-200 transition-all"
    >
      <p className="text-xs text-text-secondary mb-2">{project.cardContext}</p>
      <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <ul className="space-y-1.5 mb-4">
        {project.cardBullets.map((b, i) => (
          <li key={i} className="text-sm text-text-secondary flex gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-text-secondary shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <p className="text-xs text-text-secondary mb-4 italic">
        Deliverable: {project.cardDeliverable}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
        View case <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}
