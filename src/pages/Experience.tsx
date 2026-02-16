import { experience } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { Tag } from "@/components/Tag";
import { FileText } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineEntry } from "@/components/ui/timeline";

function yearFromDates(dates: string): string {
  const match = dates.match(/\d{4}/g);
  if (!match) return dates;
  const years = [...new Set(match)];
  return years.length > 1 ? years.join(" – ") : years[0];
}

function shortDateRange(dates: string): string {
  // "Feb 2025 – Aug 2025" → "Feb – Aug"
  // "Sep 2023 – Present"  → "Sep – Present"
  const parts = dates.split(/\s*\u2013\s*/);
  if (parts.length !== 2) return dates;
  const start = parts[0].replace(/\s*\d{4}/, "");
  const end = parts[1].replace(/\s*\d{4}/, "");
  return `${start} – ${end}`;
}

const timelineData: TimelineEntry[] = experience.map((entry) => ({
  title: yearFromDates(entry.dates),
  subtitle: shortDateRange(entry.dates),
  content: (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-0.5">
        {entry.role}{" "}
        <span className="text-text-secondary font-normal">, {entry.company}</span>
      </h2>
      <p className="text-xs text-text-secondary mb-4">
        {entry.location}
      </p>
      <ul className="list-none space-y-2 mb-4">
        {entry.bullets.slice(0, 3).map((b, i) => (
          <li key={i} className="text-sm text-text-secondary flex gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
      <p className="text-xs uppercase tracking-wide font-semibold text-text-secondary mb-2">
        Key skills
      </p>
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.slice(0, 3).map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      {entry.reportLink && (
        <NeonButton asChild variant="default" size="sm" className="mt-3">
          <a href={entry.reportLink} target="_blank" rel="noopener noreferrer">
            <FileText className="w-4 h-4" /> View report (PDF)
          </a>
        </NeonButton>
      )}
    </div>
  ),
}));

export default function Experience() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Experience</h1>
        <p className="text-sm text-text-secondary mb-4">
          Professional and extracurricular roles in reverse chronological order.
        </p>

        {/* My Philosophy */}
        <div className="mt-6 mb-10">
          <SectionHeading>My Philosophy</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-sm leading-relaxed text-text-secondary">
              {siteConfig.philosophy.left}
            </p>
            <div>
              <p className="text-sm leading-relaxed text-text-secondary mb-3">
                {siteConfig.philosophy.right}
              </p>
              <ul className="space-y-2">
                {siteConfig.philosophy.bullets.map((b) => (
                  <li key={b} className="text-sm text-text-secondary flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
