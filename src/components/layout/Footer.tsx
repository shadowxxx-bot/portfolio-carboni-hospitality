import { siteConfig } from "@/data/site";
import { NeonButton } from "@/components/ui/neon-button";

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
            <NeonButton asChild variant="ghost" size="sm" className="text-text-muted-dark hover:text-white">
              <a href={`mailto:${siteConfig.links.email}`}>
                Email
              </a>
            </NeonButton>
            <NeonButton asChild variant="ghost" size="sm" className="text-text-muted-dark hover:text-white">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </NeonButton>
            <NeonButton asChild variant="ghost" size="sm" className="text-text-muted-dark hover:text-white">
              <a href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}>
                Phone
              </a>
            </NeonButton>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-xs text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
