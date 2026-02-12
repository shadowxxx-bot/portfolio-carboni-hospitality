import { Github, Linkedin, Mail, FileText, ScrollText } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Content - Bottom Left Corner */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            ROMAIN
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            COUYOUMTZÉLIS
          </h2>
          
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/Romain-Couyoumtzelis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="GitHub"
                  icon={<Github className="w-5 h-5" />}
                  className="px-6 py-3"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/romain-couyoumtzelis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="LinkedIn"
                  icon={<Linkedin className="w-5 h-5" />}
                  className="px-6 py-3"
                />
              </a>
              <a
                href="mailto:couyoumtzelis.romain@gmail.com"
              >
                <InteractiveHoverButton
                  text="Contact"
                  icon={<Mail className="w-5 h-5" />}
                  className="px-6 py-3"
                />
              </a>
            </div>
            
            <div className="flex gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1hulOR_Om_Uj2pJ_6dxy2QxJvWTRWHujJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Résumé"
                  icon={<FileText className="w-5 h-5" />}
                  className="px-6 py-3"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1tbnJKaA64VQ1oEdf7QtY4geMMrg1r6gI/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Transcript"
                  icon={<ScrollText className="w-5 h-5" />}
                  className="px-6 py-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
