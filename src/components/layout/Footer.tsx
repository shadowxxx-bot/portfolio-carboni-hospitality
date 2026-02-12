import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-dark text-text-muted-dark py-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-text-on-dark font-medium text-sm">{siteConfig.name}</p>
            <p className="text-xs mt-1">{siteConfig.contact.location} &middot; {siteConfig.contact.availability}</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href={`mailto:${siteConfig.links.email}`} className="hover:text-white transition-colors">
              Email
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
              Phone
            </a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-xs text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
