import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import fourmiliereImg from "@/assets/fourmiliere.png";
import fourmiImg from "@/assets/fourmi.png";

interface AntColonyDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AntColonyDetailModal({ open, onOpenChange }: AntColonyDetailModalProps) {
  const handleHomeClick = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto p-0 scroll-smooth">
        <div className="sticky top-0 z-10 bg-background border-b px-6 py-4 flex justify-between items-center will-change-transform [transform:translateZ(0)]">
          <button onClick={() => onOpenChange(false)}>
            <InteractiveHoverButton
              text="Back"
              icon={<ArrowLeft className="w-5 h-5" />}
              className="px-6 py-3"
            />
          </button>
          <button onClick={handleHomeClick}>
            <InteractiveHoverButton
              text="Home"
              icon={<Home className="w-5 h-5" />}
              className="px-6 py-3"
            />
          </button>
        </div>

        <div className="px-6 py-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-8">Multi-Agent Ecosystem</h1>
            <div className="flex gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/12crEpQ9HGYxFaMIb0bpgzSR169gfqhvs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Access Report"
                  icon={<FileText className="w-5 h-5" />}
                  className="px-8 py-4 text-lg"
                />
              </a>
              <a
                href="https://github.com/Romain-Couyoumtzelis/tchanz-ant-colony-sim.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Access Code"
                  icon={<Github className="w-5 h-5" />}
                  className="px-8 py-4 text-lg"
                />
              </a>
            </div>
          </div>

          {/* Project Overview & Image Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Project Overview Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="space-y-4 text-base">
                <p>
                  <span className="font-semibold">Course:</span> Information, Calculus and Computing (ICC)
                </p>
                <p>
                  <span className="font-semibold">Institution:</span> EPFL – Section Microengineering
                </p>
                <p>
                  <span className="font-semibold">Semester:</span> Spring 2022
                </p>
                <p>
                  <span className="font-semibold">Team:</span> Group of two, individual oral evaluation
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> C++, Object-Oriented Project, modular architecture, simulation algorithms, grid-based modeling, GUI (GTKmm), debugging, teamwork
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={fourmiliereImg}
                alt="Ant Colony Simulation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Objective</h2>
            <p className="text-base leading-relaxed">
              We designed and implemented a discrete-time simulation of ant colonies competing for randomly generated food resources in a 2D grid world. Each colony consisted of four specialized agent types (Generator, Collector, Defensor, Predator), each with distinct behavior and lifecycle rules. The core goal was to evaluate whether a stable ecosystem could emerge from local interactions, resource consumption, and aggressive behaviors between competing colonies.
            </p>
          </div>

          {/* Technical Highlights Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Highlights Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
              <ul className="space-y-4 text-base list-disc list-inside">
                <li><span className="font-semibold">Agent-based modeling:</span> Each ant type had its own logic for movement, resource handling, and interaction.</li>
                <li><span className="font-semibold">Modular C++ design:</span> Strict separation of concerns, encapsulation, and reusable abstractions (multi-file, multi-module architecture).</li>
                <li><span className="font-semibold">Randomized environment:</span> Food spawned with probabilistic rules using C++11 random distributions.</li>
                <li><span className="font-semibold">Graphical interface:</span> Real-time visual rendering of the simulation via GTKmm canvas.</li>
                <li><span className="font-semibold">File I/O support:</span> for reading and writing simulation states to text-based scenario files.</li>
                <li><span className="font-semibold">Error handling:</span> Extensive validation of input files and state consistency, with modular error messaging.</li>
              </ul>
            </div>

            {/* Architecture Diagram Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={fourmiImg}
                alt="Project Architecture"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
