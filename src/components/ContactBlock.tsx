import { Mail, Phone, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactBlock() {
  return (
    <section id="contact" className="bg-dark text-text-on-dark py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-8">Contact</h2>

        {/* Mobile: stacked center — Desktop: 3-col grid (Email | LinkedIn | Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent transition-colors justify-center sm:justify-start"
          >
            <Mail className="w-5 h-5 shrink-0" /> {siteConfig.links.email}
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent transition-colors justify-center"
          >
            <Linkedin className="w-5 h-5 shrink-0" /> LinkedIn
          </a>
          <a
            href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent transition-colors justify-center sm:justify-end"
          >
            <Phone className="w-5 h-5 shrink-0" /> {siteConfig.links.phone}
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 text-xs text-text-muted-dark text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
}
