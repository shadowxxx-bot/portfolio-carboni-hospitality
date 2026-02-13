import { useRef } from "react";
import { Link } from "react-router-dom";
import { FileText, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactBlock } from "@/components/ContactBlock";
import { Tag } from "@/components/Tag";

/** Shared content — rendered in both fixed visual layer and flow layer */
function FeaturedContent() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold text-text-primary mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
        >
          View all projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
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
        <section className="bg-dark text-text-on-dark h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {siteConfig.name}
            </h1>

            {/* About me */}
            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-wider text-text-muted-dark mb-3">
                About me
              </h2>
              <p className="text-sm leading-relaxed text-text-on-dark/80 max-w-2xl">
                {siteConfig.about}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
              >
                <FileText className="w-4 h-4" /> View CV
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-white/20 text-text-on-dark hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-white/20 text-text-on-dark hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-white/20 text-text-on-dark hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Phone
              </a>
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

      {/* Real Featured: in normal flow, takes over after transition */}
      <section className="bg-white pt-20 pb-20">
        <FeaturedContent />
      </section>

      {/* ── CONTACT ── */}
      <ContactBlock />
    </>
  );
}
