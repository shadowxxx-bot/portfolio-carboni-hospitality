import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, Download, Play } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { projects } from "@/data/projects";
import { ProjectSeo } from "@/components/ProjectSeo";
import { ProjectValueSummary } from "@/components/ProjectValueSummary";
import { ProjectTags } from "@/components/ProjectTags";
import { SectionHeading } from "@/components/ui/section-heading";

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
    <article className="bg-white min-h-screen py-16">
      <ProjectSeo project={project} />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Back */}
        <NeonButton asChild variant="ghost" size="sm" className="mb-8">
          <Link to="/projects" className="text-text-secondary hover:text-accent">
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
        </NeonButton>

        {/* Title */}
        <h1 className="text-3xl font-bold text-text-primary">{project.title}</h1>
        <div className="mt-2 mb-4 flex gap-2">
          <ProjectTags lang={project.lang} caseType={project.caseType} />
        </div>

        {/* Deliverables — right below title */}
        {project.deliverables.length > 0 && (
          <nav aria-label="Project deliverables" className="flex flex-wrap gap-3 mb-8">
            {project.deliverables.map((d) => {
              const isVideo = /\.(mp4|webm|mov)$/i.test(d.href);
              const isDownload = /\.(xlsx?|csv|zip)$/i.test(d.href);
              const icon = isVideo
                ? <Play className="w-4 h-4" />
                : isDownload
                  ? <Download className="w-4 h-4" />
                  : <FileText className="w-4 h-4" />;
              const ext = d.href.split(".").pop()?.toUpperCase() ?? "";
              return (
                <NeonButton asChild variant="default" key={d.label}>
                  <a
                    href={d.href}
                    aria-label={`${d.label}${ext ? ` (${ext})` : ""}`}
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
                  aria-label="View evidence pack (PDF)"
                >
                  <ExternalLink className="w-4 h-4" /> View evidence pack (PDF)
                </a>
              </NeonButton>
            )}
          </nav>
        )}

        {/* Context */}
        <section className="mb-8">
          <SectionHeading>Context</SectionHeading>
          <p className="text-sm leading-relaxed text-text-primary">{project.context}</p>
        </section>

        {/* Objective */}
        <section className="mb-8">
          <SectionHeading>Objective</SectionHeading>
          <p className="text-sm leading-relaxed text-text-primary">{project.objective}</p>
        </section>

        {/* Contribution */}
        <section className="mb-8">
          <SectionHeading>My contribution</SectionHeading>
          <ul className="space-y-2">
            {project.contribution.map((c, i) => (
              <li key={i} className="text-sm text-text-primary flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section className="mb-8">
          <SectionHeading>Results</SectionHeading>
          <ul className="space-y-2">
            {project.results.map((r, i) => (
              <li key={i} className="text-sm text-text-primary flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-8">
            <SectionHeading>Evidence</SectionHeading>
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

        {/* Why this project matters — recruiter value summary */}
        <ProjectValueSummary project={project} />
      </div>
    </article>
  );
}
