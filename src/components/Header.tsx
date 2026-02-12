import profileImg from "@/assets/profile-new.png";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { User, Wrench, FolderOpen, Mail } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={profileImg}
            alt="Romain Nicolas Paul Couyoumtzélis"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-lg font-semibold hidden sm:inline">Romain Nicolas Paul Couyoumtzélis</span>
        </div>
        <Dock panelHeight={48} magnification={56} distance={80} className="border border-border/50">
          <DockItem>
            <DockLabel>About</DockLabel>
            <DockIcon>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center justify-center w-full h-full"
                aria-label="About"
              >
                <User className="w-5 h-5" />
              </button>
            </DockIcon>
          </DockItem>
          <DockItem>
            <DockLabel>Skills</DockLabel>
            <DockIcon>
              <button
                onClick={() => scrollToSection("skills")}
                className="flex items-center justify-center w-full h-full"
                aria-label="Skills"
              >
                <Wrench className="w-5 h-5" />
              </button>
            </DockIcon>
          </DockItem>
          <DockItem>
            <DockLabel>Projects</DockLabel>
            <DockIcon>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center justify-center w-full h-full"
                aria-label="Projects"
              >
                <FolderOpen className="w-5 h-5" />
              </button>
            </DockIcon>
          </DockItem>
          <DockItem>
            <DockLabel>Contact</DockLabel>
            <DockIcon>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center w-full h-full"
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </button>
            </DockIcon>
          </DockItem>
        </Dock>
      </div>
    </header>
  );
}
