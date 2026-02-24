import { useRef, useState, useEffect, useMemo, memo } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/Tag";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import type { Activity } from "@/data/personal";

/* ── Constants ── */
const zigzag: ("left" | "right")[] = ["right", "left", "right"];
const SECTION_COUNT = 3;

/* ── Activity row (layout untouched) ── */
const ActivityRow = memo(function ActivityRow({
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
            decoding="async"
            className="w-full h-[300px] sm:h-[340px] md:h-[380px] lg:h-[calc(100vh-5rem)] object-cover"
            style={activity.imagePosition ? { objectPosition: activity.imagePosition } : undefined}
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
        <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-4">
          {activity.title}
        </h3>
        <TextGradientScroll
          text={activity.description}
          className="text-lg md:text-2xl leading-relaxed text-text-secondary mb-8"
          type="letter"
          progress={progress}
        />
        <p className="text-sm uppercase tracking-wide font-semibold text-text-secondary mb-3">
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
});

/* ── Personal page ── */
export default function Personal() {
  /* ── Image container refs ── */
  const imgRef0 = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);
  const imgRefs = useMemo(() => [imgRef0, imgRef1, imgRef2], []);

  /* ── Single source of truth: one progress (0‥1) per section ── */
  const p0 = useMotionValue(0);
  const p1 = useMotionValue(0);
  const p2 = useMotionValue(0);
  const progresses = useMemo(() => [p0, p1, p2], [p0, p1, p2]);

  /* ── Which section (if any) currently owns the wheel ── */
  const activeSection = useRef<number | null>(null);

  /* ── Desktop + pointer detection ── */
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

  /* ── Bidirectional wheel capture ──
     Single listener, { passive: false } so we can preventDefault.
     Progress stored in MotionValues — purely imperative, no conflict. */
  useEffect(() => {
    if (!captureActive) return;

    const THRESHOLD = 200; // px from viewport centre
    const SPEED = 0.003; // progress per px of normalised delta
    const MAX_DELTA = 120; // clamp fast trackpad swipes

    /** Is image `i` centred in the viewport? */
    const isCentered = (i: number): boolean => {
      const el = imgRefs[i].current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const imgCenter = rect.top + rect.height / 2;
      return Math.abs(imgCenter - window.innerHeight / 2) < THRESHOLD;
    };

    const onWheel = (e: WheelEvent) => {
      /* Normalise to pixels */
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 40; // lines → px
      if (e.deltaMode === 2) delta *= window.innerHeight; // pages → px
      delta = Math.max(-MAX_DELTA, Math.min(MAX_DELTA, delta));
      if (delta === 0) return;

      const down = delta > 0;

      /* ① If a section already owns the wheel, try to continue */
      if (activeSection.current !== null) {
        const i = activeSection.current;

        if (isCentered(i)) {
          const cur = progresses[i].get();

          /* At boundary for this direction → release, let page scroll */
          if ((down && cur >= 1) || (!down && cur <= 0)) {
            activeSection.current = null;
            return;
          }

          /* Still room to move → capture */
          e.preventDefault();
          progresses[i].set(Math.max(0, Math.min(1, cur + delta * SPEED)));
          return;
        }

        /* Image drifted out of centre → release immediately */
        activeSection.current = null;
      }

      /* ② No active section — scan for one to capture */
      for (let i = 0; i < SECTION_COUNT; i++) {
        if (!isCentered(i)) continue;

        const cur = progresses[i].get();

        /* Already at boundary for this direction → skip */
        if (down && cur >= 1) continue;
        if (!down && cur <= 0) continue;

        /* Capture this section */
        activeSection.current = i;
        e.preventDefault();
        progresses[i].set(Math.max(0, Math.min(1, cur + delta * SPEED)));
        return;
      }

      /* ③ Nothing to capture → normal scroll */
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

      {/* Activity rows — original spacing, no wrappers */}
      <div className="space-y-16">
        {personal.activities.map((activity, i) => (
          <ActivityRow
            key={activity.title}
            activity={activity}
            imagePosition={zigzag[i]}
            progress={captureActive ? progresses[i] : undefined}
            imageRef={imgRefs[i]}
          />
        ))}
      </div>
    </div>
  );
}
