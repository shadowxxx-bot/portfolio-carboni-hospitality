import { Mail, Phone, Linkedin, Copy, Check } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export function ContactBlock() {
  const { copied: emailCopied, handleClick: copyEmail } = useCopyToClipboard(siteConfig.links.email);
  const { copied: phoneCopied, handleClick: copyPhone } = useCopyToClipboard(siteConfig.links.phone.replace(/\s/g, ""));

  return (
    <section id="contact" className="bg-dark text-text-on-dark py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-8">Contact</h2>

        {/* Mobile: stacked center — Desktop: 3-col grid (Email | LinkedIn | Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 shrink-0" /> {siteConfig.links.email}
            </a>
            <button
              onClick={copyEmail}
              title={emailCopied ? "Copied!" : "Copy email"}
              aria-label="Copy email address"
              className="p-1 rounded text-white/40 hover:text-white transition-colors"
            >
              {emailCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent transition-colors justify-center"
          >
            <Linkedin className="w-5 h-5 shrink-0" /> LinkedIn
          </a>
          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <a
              href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5 shrink-0" /> {siteConfig.links.phone}
            </a>
            <button
              onClick={copyPhone}
              title={phoneCopied ? "Copied!" : "Copy phone number"}
              aria-label="Copy phone number"
              className="p-1 rounded text-white/40 hover:text-white transition-colors"
            >
              {phoneCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 text-xs text-text-muted-dark text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
}
