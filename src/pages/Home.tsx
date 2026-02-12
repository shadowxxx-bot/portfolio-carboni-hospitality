import { Link } from "react-router-dom";
import { Download, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactBlock } from "@/components/ContactBlock";
import { Tag } from "@/components/Tag";

export default function Home() {
  return (
    <>
      {/* ── HERO (dark) ── */}
      <section className="bg-dark text-text-on-dark py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-text-muted-dark mb-1">{siteConfig.role}</p>
          <p className="text-base text-text-on-dark/80 mb-2">{siteConfig.positioning}</p>
          <p className="text-sm text-accent mb-8">{siteConfig.lookingFor}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={siteConfig.links.cv}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              <Download className="w-4 h-4" /> Download CV
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

      {/* ── ABOUT (dark) ── */}
      <section className="bg-dark text-text-on-dark pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="border-t border-white/10 pt-10">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-sm leading-relaxed text-text-on-dark/80 max-w-2xl">
              {siteConfig.about}
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS (light) ── */}
      <section className="bg-white py-20">
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
      </section>

      {/* ── CONTACT ── */}
      <ContactBlock />
    </>
  );
}
