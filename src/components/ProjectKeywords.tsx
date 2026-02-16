import type { Project } from "@/data/projects";
import { Tag } from "@/components/Tag";

interface ProjectKeywordsProps {
  project: Project;
}

export function ProjectKeywords({ project }: ProjectKeywordsProps) {
  return (
    <aside aria-label="Skills and keywords" className="border-t border-gray-100 pt-8 mt-10">
      {/* Target Roles */}
      {project.targetRoles.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Target Roles</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.targetRoles.map((r) => <Tag key={r} label={r} />)}
          </div>
        </div>
      )}

      {/* Core Skills Demonstrated */}
      {project.skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Core Skills Demonstrated</h3>
          {project.humanSummary && (
            <p className="text-sm text-text-primary mb-3">{project.humanSummary}</p>
          )}
          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((s) => <Tag key={s} label={s} />)}
          </div>
        </div>
      )}

      {/* Professional Tools Used */}
      {project.tools.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Professional Tools Used</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((t) => <Tag key={t} label={t} />)}
          </div>
        </div>
      )}

      {/* Keywords */}
      {project.keywords.length > 0 && (
        <p className="text-xs text-text-secondary">
          <span className="font-medium">Keywords:</span>{" "}
          {project.keywords.join(" \u00B7 ")}
        </p>
      )}
    </aside>
  );
}
