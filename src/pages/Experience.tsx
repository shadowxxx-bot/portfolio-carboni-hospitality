import { experience } from "@/data/experience";
import { Tag } from "@/components/Tag";
import { FileText } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

export default function Experience() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Experience</h1>
        <p className="text-sm text-text-secondary mb-12">
          Professional and extracurricular roles in reverse chronological order.
        </p>

        <div className="space-y-10">
          {experience.map((entry, idx) => (
            <article key={idx} className="border-b border-gray-100 pb-8 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h2 className="text-lg font-semibold text-text-primary">
                  {entry.role} <span className="text-text-secondary font-normal">— {entry.company}</span>
                </h2>
              </div>
              <p className="text-xs text-text-secondary mb-4">
                {entry.dates} &middot; {entry.location}
              </p>
              <ul className="space-y-2 mb-4">
                {entry.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-text-primary flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-text-secondary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
              {entry.reportLink && (
                <NeonButton asChild variant="default" size="sm" className="mt-3">
                  <a
                    href={entry.reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" /> View report (PDF)
                  </a>
                </NeonButton>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
