import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FileText, Home, ArrowLeft } from "lucide-react";
import intensityImg from "@/assets/intensity.png";
import controlCircuitImg from "@/assets/controlcircuit.png";
import hierarchieImg from "@/assets/hierarchie.png";

interface VariableIntensityDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VariableIntensityDetailModal({ open, onOpenChange }: VariableIntensityDetailModalProps) {
  const scrollToTop = () => {
    const content = document.querySelector('[data-radix-scroll-area-viewport]');
    if (content) {
      content.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0 scroll-smooth">
        <div className="sticky top-0 bg-background z-10 p-6 pb-4 flex justify-between items-center border-b will-change-transform [transform:translateZ(0)]">
          <InteractiveHoverButton
            onClick={handleClose}
            text="Back"
            icon={<ArrowLeft className="w-4 h-4" />}
            className="px-4 py-2"
          />
          <InteractiveHoverButton
            onClick={scrollToTop}
            text="Home"
            icon={<Home className="w-4 h-4" />}
            className="px-4 py-2"
          />
        </div>

        <div className="p-6 pt-8 max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-8">Variable Intensity Controller</h1>

          {/* Access Report Button */}
          <div className="flex justify-center mb-12">
            <a
              href="https://drive.google.com/file/d/16ThbWZRK2QhYJxTFjz_tZlPrMjVZumVG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InteractiveHoverButton
                text="Access Report"
                icon={<FileText className="w-4 h-4" />}
                className="px-6 py-3"
              />
            </a>
          </div>

          {/* Overview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="space-y-4 text-foreground/90">
                <p>
                  <span className="font-semibold">Course:</span> Manufacturing Technologies (Micro-301)
                </p>
                <p>
                  <span className="font-semibold">Institution:</span> EPFL – Section de Microtechnique
                </p>
                <p>
                  <span className="font-semibold">Semester:</span> Fall 2023
                </p>
                <p>
                  <span className="font-semibold">Team:</span> Group of 3 students
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> Functional analysis, material identification, mechanical disassembly, process analysis, cost estimation, failure analysis, comparative design evaluation
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={intensityImg}
                alt="Variable Intensity Controller"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex items-center justify-center order-2 md:order-1">
              <img
                src={controlCircuitImg}
                alt="Control Circuit"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="bg-card/50 p-8 rounded-lg order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Project Objective</h2>
              <p className="text-foreground/90 leading-relaxed">
                The aim of this project was to reverse-engineer a commercial rotary light dimmer switch to understand the technical and manufacturing decisions that underpin its design. Through full disassembly and analysis, we identified each internal component, its function, material composition, manufacturing process, and its role in the final assembly. A special focus was placed on the potentiometer, the component enabling continuous adjustment of light intensity. The project also included cost modeling and comparison with high-end alternatives.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Device functionality is based on TRIAC-DIAC triggering via a resistive voltage divider built into a rotary potentiometer.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>34 individual parts were identified, including plastic housings, springs, contacts, and resistive tracks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Manufacturing processes include injection molding (ABS, PP), stamping (washer), cold forming (springs), and PCB soldering.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Mechanical analysis of torsional constraints and wear on the potentiometer components under repeated use.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Full modeling of resistivity degradation due to contact pressure and friction wear across 15,000 cycles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Cost analysis includes material mass, tooling amortization, assembly labor, and margin estimation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Comparison with a premium dimmer model (FEDE SOHO) revealed differences in material, precision, and durability.</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={hierarchieImg}
                alt="Component Hierarchy"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
