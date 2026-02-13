import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
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
                <img
                  src={cert.logo}
                  alt={cert.logoAlt}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain shrink-0 mt-0.5 rounded"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-text-primary mb-0.5">{cert.name}</h2>
                  <p className="text-xs text-text-secondary mb-3">
                    {cert.organization} &middot; {cert.date}
                  </p>
                  <p className="text-sm text-text-primary mb-4">{cert.proof}</p>
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 text-text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    View certificate (PDF)
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
