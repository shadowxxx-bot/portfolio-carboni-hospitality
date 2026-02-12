import { personal } from "@/data/personal";

export default function Personal() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-text-primary mb-10">Personal</h1>

        {/* What it brings me */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-3">What it brings me</h2>
          <p className="text-sm leading-relaxed text-text-primary max-w-2xl">
            {personal.whatItBringsMe}
          </p>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Activities</h2>
          <div className="grid gap-4">
            {personal.activities.map((a, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-base font-semibold text-text-primary mb-1">{a.title}</h3>
                <p className="text-sm text-text-secondary">{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {personal.gallery.length > 0 && (
          <section>
            <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {personal.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-light-grey rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-text-secondary mt-3 italic">
              Place images in /public/personal/ to display them here.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
