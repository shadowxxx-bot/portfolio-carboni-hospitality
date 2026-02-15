import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { FocusCards } from "@/components/ui/focus-cards";
import { ContactBlock } from "@/components/ContactBlock";
import { Tag } from "@/components/Tag";
import { useDockVariant } from "@/contexts/DockVariantContext";

/** Shared content — rendered in both fixed visual layer and flow layer */
function FeaturedContent() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold text-text-primary mb-10">Featured Projects</h2>
      <div className="mb-10">
        <FocusCards projects={featuredProjects} />
      </div>
      <div className="text-center">
        <NeonButton asChild variant="ghost" size="lg">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-lg font-semibold text-accent border-accent/30 hover:border-accent/50"
          >
            View all projects <ArrowRight className="w-5 h-5" />
          </Link>
        </NeonButton>
      </div>
    </div>
  );
}

export default function Home() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const { setVariant } = useDockVariant();
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  // Set dock to dark on mount (hero visible), reset on unmount
  useEffect(() => {
    setVariant("dark");
    return () => setVariant("light");
  }, [setVariant]);

  // Track when the door transition is complete
  const [transitionDone, setTransitionDone] = useState(false);

  // Switch dock variant as hero slides away + track transition completion
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVariant(v > 0.5 ? "light" : "dark");
    setTransitionDone(v >= 0.99);
  });

  // ── Hero door: slides UP (0 → -100%) ──
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  // ── Featured reveal: clip-path from bottom to top ──
  // inset(100% 0 0 0) = fully hidden → inset(0% 0 0 0) = fully visible
  const clipTop = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useTransform(clipTop, (v) => `inset(${v}% 0 0 0)`);

  // ── Featured blur: 12px → 0 ──
  const blurVal = useTransform(scrollYProgress, [0, 0.85], [12, 0]);
  const featuredFilter = useTransform(blurVal, (v) => `blur(${v}px)`);

  // ── Fade out fixed visual layers at the very end for clean handoff ──
  const fixedLayerOpacity = useTransform(scrollYProgress, [0.96, 1], [1, 0]);

  return (
    <>
      {/* ════════════════════════════════════════════════════
          FIXED VISUAL LAYERS (transition effect only)
          ════════════════════════════════════════════════════ */}

      {/* Hero: fixed overlay, always sharp, slides up like a door */}
      <motion.div
        style={{ y: heroY }}
        className="fixed top-0 left-0 right-0 z-40 h-screen"
      >
        <section className="bg-dark text-text-on-dark h-full flex items-center relative overflow-hidden">
          {/* Portrait — absolute, full height, right-aligned (desktop only) */}
          <img
            src="/images/home/portrait.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-0 top-6 h-[calc(100%-1.5rem)] w-auto object-contain object-right-bottom pointer-events-none select-none"
          />

          {/* Text content — stays on the left, never overlaps */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {siteConfig.name}
              </h1>

              {/* About me */}
              <div className="mb-8">
                <h2 className="text-xs uppercase tracking-wider text-text-muted-dark mb-3">
                  About me
                </h2>
                <p className="text-sm leading-relaxed text-text-on-dark/80">
                  {siteConfig.about}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <NeonButton asChild variant="solid">
                  <a
                    href={siteConfig.links.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" /> View CV
                  </a>
                </NeonButton>
                <NeonButton asChild variant="dark">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </NeonButton>
                <NeonButton asChild variant="dark">
                  <a href={`mailto:${siteConfig.links.email}`}>
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </NeonButton>
                <NeonButton asChild variant="dark">
                  <a href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}>
                    <Phone className="w-4 h-4" /> Phone
                  </a>
                </NeonButton>
              </div>

              {/* Skills snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-text-muted-dark mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {siteConfig.hero.languages.map((l) => <Tag key={l} label={l} variant="dark" />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-text-muted-dark mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {siteConfig.hero.tools.map((t) => <Tag key={t} label={t} variant="dark" />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-text-muted-dark mb-2">Focus areas</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {siteConfig.hero.focusAreas.map((f) => <Tag key={f} label={f} variant="dark" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Featured visual: fixed behind hero, locked in place, clip-path reveal */}
      <motion.div
        style={{ clipPath, filter: featuredFilter, opacity: fixedLayerOpacity }}
        className="fixed top-0 left-0 right-0 z-30 h-screen overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="bg-white h-full pt-20 pb-20">
          <FeaturedContent />
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════════════
          FLOW LAYER (normal document after transition)
          ════════════════════════════════════════════════════ */}

      {/* Spacer: absorbs scroll during the door transition */}
      <div ref={spacerRef} className="h-screen" />

      {/* Real Featured: in normal flow, takes over after transition.
           z-[35] only after transition so it doesn't cover the fixed clip-path reveal (z-30) mid-animation. */}
      <section className={`bg-white pt-20 pb-20 ${transitionDone ? "relative z-[35]" : ""}`}>
        <FeaturedContent />
      </section>

      {/* ── CONTACT ── */}
      <ContactBlock />
    </>
  );
}
