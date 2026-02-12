import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Tag } from "@/components/Tag";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Project not found</h1>
          <Link to="/projects" className="text-accent text-sm">Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-text-primary mb-2">{project.title}</h1>
        <p className="text-base text-text-secondary mb-8">{project.oneLiner}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>

        {/* Context */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Context</h2>
          <p className="text-sm leading-relaxed text-text-primary">{project.context}</p>
        </section>

        {/* Objective */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Objective</h2>
          <p className="text-sm leading-relaxed text-text-primary">{project.objective}</p>
        </section>

        {/* Contribution */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-2">My contribution</h2>
          <ul className="space-y-2">
            {project.contribution.map((c, i) => (
              <li key={i} className="text-sm text-text-primary flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Method */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Method / Approach</h2>
          <ul className="space-y-2">
            {project.method.map((m, i) => (
              <li key={i} className="text-sm text-text-primary flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-text-secondary shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* Deliverables */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Deliverables</h2>
          <div className="flex flex-wrap gap-3">
            {project.deliverables.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                <FileText className="w-4 h-4" /> {d.label}
              </a>
            ))}
            {project.evidencePackLink && (
              <a
                href={project.evidencePackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> View evidence pack (PDF)
              </a>
            )}
          </div>
        </section>

        {/* Results */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-2">Results / Insights</h2>
          <ul className="space-y-2">
            {project.results.map((r, i) => (
              <li key={i} className="text-sm text-text-primary flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Evidence</h2>
            <div className="grid gap-4">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-lg border border-gray-100"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
