import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Certifications</h1>
        <p className="text-sm text-text-secondary mb-12">
          Industry simulations and leadership programmes completed alongside my degree.
        </p>

        <div className="grid gap-6">
          {certifications.map((cert, idx) => (
            <article
              key={idx}
              className="border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-light-grey flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-text-primary mb-0.5">{cert.name}</h2>
                      <p className="text-xs text-text-secondary mb-3">
                        {cert.organization} &middot; {cert.date}
                      </p>
                    </div>
                    {/* Logo — desktop: top-right, mobile: next to button */}
                    <img
                      src={cert.logo}
                      alt={cert.logoAlt}
                      className="h-7 w-auto shrink-0 rounded mt-0.5 hidden sm:block"
                    />
                  </div>
                  <p className="text-sm text-text-primary mb-4">{cert.proof}</p>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 text-text-primary hover:border-accent hover:text-accent transition-colors"
                    >
                      View certificate (PDF)
                    </a>
                    {/* Logo — mobile only */}
                    <img
                      src={cert.logo}
                      alt={cert.logoAlt}
                      className="h-6 w-auto shrink-0 rounded sm:hidden"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
