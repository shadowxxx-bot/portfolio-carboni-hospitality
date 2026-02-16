import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface TextGradientScrollProps {
  text: string;
  className?: string;
  type?: "word" | "letter";
  /** When supplied the component skips its own useScroll and maps the
   *  external 0 → 1 progress directly to the letter/word reveal. */
  progress?: MotionValue<number>;
}

/* Ghost → revealed color ramp */
const GHOST = "#d4d4d4"; // neutral-300
const REVEALED = "#171717"; // neutral-900

export function TextGradientScroll({
  text,
  className,
  type = "word",
  progress: externalProgress,
}: TextGradientScrollProps) {
  const internalRef = useRef<HTMLParagraphElement>(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  /* Fallback scroll tracking when no external progress is provided */
  const { scrollYProgress } = useScroll({
    target: internalRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const effectiveProgress = externalProgress || scrollYProgress;

  /* ── Mobile fallback: plain paragraph, zero animation overhead ── */
  if (!isDesktop) {
    return <p className={className}>{text}</p>;
  }

  /* ── Letter mode ──
     Words are kept as inline groups so letters don't break mid-word.
     A plain breakable " " sits between words so the browser wraps
     the paragraph normally (no \u00A0 that caused horizontal overflow). */
  if (type === "letter") {
    const words = text.split(" ");
    const totalLetters = words.reduce((n, w) => n + w.length, 0);
    const offsets: number[] = [];
    for (let i = 0, acc = 0; i < words.length; acc += words[i].length, i++)
      offsets.push(acc);

    return (
      <p ref={internalRef} className={className} style={{ overflowWrap: "break-word" }}>
        {words.map((word, wi) => (
          // word-group: letters + trailing breakable space
          <span key={wi}>
            {word.split("").map((ch, ci) => {
              const i = offsets[wi] + ci;
              return (
                <AnimatedUnit
                  key={i}
                  progress={effectiveProgress}
                  range={[i / totalLetters, (i + 1) / totalLetters]}
                >
                  {ch}
                </AnimatedUnit>
              );
            })}
            {wi < words.length - 1 ? " " : null}
          </span>
        ))}
      </p>
    );
  }

  /* ── Word mode (default) ── */
  const words = text.split(" ");
  return (
    <p ref={internalRef} className={className}>
      {words.map((word, i) => (
        <AnimatedUnit
          key={i}
          progress={effectiveProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {word}{" "}
        </AnimatedUnit>
      ))}
    </p>
  );
}

/* ── Single animated span (inline, no extra margin/padding) ── */
function AnimatedUnit({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(progress, range, [GHOST, REVEALED]);
  return <motion.span style={{ color }}>{children}</motion.span>;
}
