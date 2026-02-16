import { useRef, useState, useEffect } from "react";
import {
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/Tag";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import type { Activity } from "@/data/personal";

/* ── Alternation: image right → left → right ── */
const zigzag: ("left" | "right")[] = ["right", "left", "right"];

/* ── Per-section hook: blends scroll-based + wheel-based progress ──
   Before capture: scroll drives 0 → ~0.2 as image enters viewport.
   During capture: wheel delta adds manual offset on top → reaches 1. */
function useSectionReveal(
  imageRef: React.RefObject<HTMLDivElement | null>,
  manualExtra: MotionValue<number>,
  allDone: React.MutableRefObject<boolean[]>,
  index: number,
) {
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  return useTransform(
    [scrollYProgress, manualExtra] as MotionValue<number>[],
    ([s, m]: number[]) => {
      if (allDone.current[index]) return 1;
      return Math.min(1, s * 0.4 + m);
    },
  );
}

/* ── Activity row (layout unchanged) ── */
function ActivityRow({
  activity,
  imagePosition,
  progress,
  imageRef,
}: {
  activity: Activity;
  imagePosition: "left" | "right";
  progress?: MotionValue<number>;
  imageRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const isImageRight = imagePosition === "right";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div
        ref={imageRef}
        className={`px-4 md:px-6 lg:px-0 overflow-hidden rounded-lg lg:rounded-none ${
          isImageRight
            ? "lg:order-2 lg:rounded-l-lg"
            : "lg:order-1 lg:rounded-r-lg"
        }`}
      >
        {activity.image ? (
          <img
            src={activity.image}
            alt={activity.imageAlt}
            className="w-full h-[300px] sm:h-[340px] md:h-[380px] lg:h-[calc(100vh-5rem)] object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-[300px] sm:h-[340px] md:h-[380px] lg:h-[calc(100vh-5rem)] bg-gray-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>

      <div
        className={`pt-6 lg:pt-0 min-w-0 break-words ${
          isImageRight
            ? "lg:order-1 bleed-text-left"
            : "lg:order-2 bleed-text-right"
        }`}
      >
        <h3 className="text-2xl font-bold text-text-primary mb-3">
          {activity.title}
        </h3>
        <TextGradientScroll
          text={activity.description}
          className="text-sm md:text-base leading-relaxed text-text-secondary mb-6"
          type="letter"
          progress={progress}
        />
        <p className="text-xs uppercase tracking-wide font-semibold text-text-secondary mb-2">
          Key skills
        </p>
        <div className="flex flex-wrap gap-1.5">
          {activity.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Personal page ── */
export default function Personal() {
  /* ── Refs for the 3 image containers ── */
  const imgRef0 = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);
  const imgRefs = [imgRef0, imgRef1, imgRef2];

  /* ── Manual wheel-driven offsets (one per section) ── */
  const m0 = useMotionValue(0);
  const m1 = useMotionValue(0);
  const m2 = useMotionValue(0);
  const manuals = [m0, m1, m2];

  /* ── Done flags ── */
  const done = useRef([false, false, false]);

  /* ── Combined progress per section (scroll + manual) ── */
  const tp0 = useSectionReveal(imgRef0, m0, done, 0);
  const tp1 = useSectionReveal(imgRef1, m1, done, 1);
  const tp2 = useSectionReveal(imgRef2, m2, done, 2);
  const tps = [tp0, tp1, tp2];

  /* ── Only capture on desktop with mouse/trackpad ── */
  const [captureActive, setCaptureActive] = useState(false);

  useEffect(() => {
    const lgMql = window.matchMedia("(min-width: 1024px)");
    const ptrMql = window.matchMedia("(pointer: fine)");
    const update = () => setCaptureActive(lgMql.matches && ptrMql.matches);
    update();
    lgMql.addEventListener("change", update);
    ptrMql.addEventListener("change", update);
    return () => {
      lgMql.removeEventListener("change", update);
      ptrMql.removeEventListener("change", update);
    };
  }, []);

  /* ── Wheel capture: block scroll when image centered, drive text reveal ── */
  useEffect(() => {
    if (!captureActive) return;

    const THRESHOLD = 150; // px from viewport center
    const FACTOR = 0.0005; // progress per px of wheel delta

    const onWheel = (e: WheelEvent) => {
      /* Normalise delta to pixels */
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 40;
      if (e.deltaMode === 2) delta *= window.innerHeight;

      /* Only capture downward scroll */
      if (delta <= 0) return;

      for (let i = 0; i < 3; i++) {
        if (done.current[i]) continue;
        const el = imgRefs[i].current;
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const imageCenter = rect.top + rect.height / 2;
        const vpCenter = window.innerHeight / 2;

        if (Math.abs(imageCenter - vpCenter) < THRESHOLD) {
          e.preventDefault();
          manuals[i].set(manuals[i].get() + delta * FACTOR);
          if (tps[i].get() >= 0.999) done.current[i] = true;
          return;
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captureActive]);

  return (
    <div className="bg-white min-h-screen pt-16 pb-16 overflow-x-hidden">
      {/* Intro — contained */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6">Personal</h1>

        <section className="mb-12">
          <SectionHeading>What it brings me</SectionHeading>
          <p className="text-sm leading-relaxed text-text-primary max-w-2xl">
            {personal.whatItBringsMe}
          </p>
        </section>
      </div>

      {/* Activity rows — original spacing, no tall wrappers */}
      <div className="space-y-16">
        {personal.activities.map((activity, i) => (
          <ActivityRow
            key={activity.title}
            activity={activity}
            imagePosition={zigzag[i]}
            progress={captureActive ? tps[i] : undefined}
            imageRef={imgRefs[i]}
          />
        ))}
      </div>
    </div>
  );
}
