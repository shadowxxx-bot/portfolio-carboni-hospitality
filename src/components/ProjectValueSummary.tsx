import type { Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";

interface ProjectValueSummaryProps {
  project: Project;
}

export function ProjectValueSummary({ project }: ProjectValueSummaryProps) {
  if (project.whyItMatters.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionHeading>Why this project matters</SectionHeading>
      <ul className="space-y-2">
        {project.whyItMatters.map((point, i) => (
          <li key={i} className="text-sm text-text-primary flex gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
