import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactBlock() {
  return (
    <section id="contact" className="bg-dark text-text-on-dark py-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
        <p className="text-text-muted-dark text-sm mb-8">
          {siteConfig.contact.availability} &middot; {siteConfig.contact.location}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-2 text-sm text-text-muted-dark hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" /> {siteConfig.links.email}
          </a>
          <a
            href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-text-muted-dark hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" /> {siteConfig.links.phone}
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted-dark hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
