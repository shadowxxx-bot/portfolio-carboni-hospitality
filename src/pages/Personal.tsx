import { personal } from "@/data/personal";

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-gray-200 bg-light-grey flex items-center justify-center">
      <span className="text-sm text-text-secondary select-none">Image</span>
    </div>
  );
}

export default function Personal() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-text-primary mb-10">Personal</h1>

        {/* What it brings me */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-3">
            What it brings me
          </h2>
          <p className="text-sm leading-relaxed text-text-primary max-w-2xl">
            {personal.whatItBringsMe}
          </p>
        </section>

        {/* Activities — alternating two-column blocks */}
        <section>
          <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-8">
            Activities
          </h2>

          <div className="flex flex-col gap-16">
            {personal.activities.map((activity, i) => {
              const imageOnLeft = activity.imagePosition === "left";

              const imageBlock = activity.image ? (
                <img
                  src={activity.image}
                  alt={activity.imageAlt}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                  loading="lazy"
                />
              ) : (
                <ImagePlaceholder alt={activity.imageAlt} />
              );

              const textBlock = (
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {activity.description}
                  </p>
                </div>
              );

              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
                >
                  {imageOnLeft ? (
                    <>
                      <div className="order-1">{imageBlock}</div>
                      <div className="order-2">{textBlock}</div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1">{textBlock}</div>
                      <div className="order-1 md:order-2">{imageBlock}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
