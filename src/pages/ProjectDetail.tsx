import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, Download, Play } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
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
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Back */}
        <NeonButton asChild variant="ghost" size="sm" className="mb-8">
          <Link to="/projects" className="text-text-secondary hover:text-accent">
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
        </NeonButton>

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
            {project.deliverables.map((d) => {
              const isVideo = /\.(mp4|webm|mov)$/i.test(d.href);
              const isDownload = /\.(xlsx?|csv|zip)$/i.test(d.href);
              const icon = isVideo
                ? <Play className="w-4 h-4" />
                : isDownload
                  ? <Download className="w-4 h-4" />
                  : <FileText className="w-4 h-4" />;
              return (
                <NeonButton asChild variant="default" key={d.label}>
                  <a
                    href={d.href}
                    {...(isDownload ? { download: "" } : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {icon} {d.label}
                  </a>
                </NeonButton>
              );
            })}
            {project.evidencePackLink && (
              <NeonButton asChild variant="default">
                <a
                  href={project.evidencePackLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" /> View evidence pack (PDF)
                </a>
              </NeonButton>
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
