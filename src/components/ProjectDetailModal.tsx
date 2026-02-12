import { ArrowLeft, Home, FileText } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import pellerImg from "@/assets/peller.png";
import carotteImg from "@/assets/carotte.png";
import planImg from "@/assets/plan.png";

interface ProjectDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailModal({ open, onOpenChange }: ProjectDetailModalProps) {
  const handleHomeClick = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-background border-b px-6 py-4 flex justify-between items-center">
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
            <h1 className="text-5xl font-bold mb-8">Manual Peller</h1>
            <a
              href="https://drive.google.com/file/d/1mPtDSltB9fsp0dgCL_v7_T7hbf_F1Kzy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InteractiveHoverButton
                text="Access Report"
                icon={<FileText className="w-5 h-5" />}
                className="px-8 py-4 text-lg"
              />
            </a>
          </div>

          {/* Project Overview & Image Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Project Overview Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4 text-base">
                <p>
                  <span className="font-semibold">Course:</span> Construction Mécanique II
                </p>
                <p>
                  <span className="font-semibold">Institution:</span> EPFL – Section de Microtechnique
                </p>
                <p>
                  <span className="font-semibold">Semester:</span> Spring 2022
                </p>
                <p>
                  <span className="font-semibold">Team:</span> Group of 4 students
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> Mechanism design, kinematic analysis, CAD (ShapR3D, CATIA), dimensioning, material selection, tolerance planning, force analysis
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={pellerImg}
                alt="Manual Peller Mechanism"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Objective</h2>
            <p className="text-base leading-relaxed">
              We designed a manually actuated mechanical carrot peeler for domestic use, fulfilling strict design constraints including compactness, user safety, mechanical efficiency, and adaptability to various carrot sizes. The goal was to develop a robust and ergonomic kitchen tool using only mechanical energy, based on an innovative mechanism integrating synchronized translation and rotation of the carrot and peeling blade. The project required the design, modeling, and assembly planning of a complete system, including tolerance definitions, structural safety calculations, and user operation instructions.
            </p>
          </div>

          {/* Technical Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Technical Overview Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <ul className="space-y-4 text-base list-disc list-inside">
                <li>Carrot is peeled via a combination of linear blade translation and discrete rotational steps (12 per full rotation), mimicking a dodecagonal peeling pattern.</li>
                <li>Manivelle (crank) drives both blade translation and carrot rotation through a crank-slider system and a custom 1-to-12 gear setup.</li>
                <li>Flexibility for carrots of different lengths via a sliding adjustable support arm.</li>
                <li>Adaptive radial motion of the blade enabled by spring-loaded "pousse-lame" mechanism for varying carrot diameters.</li>
                <li>Ramp mechanism ensures blade clearance during retraction to avoid jamming.</li>
                <li>All functional parts were dimensioned and analyzed (torsion, shear, fatigue) to ensure structural integrity.</li>
                <li>Designed for easy disassembly and cleaning; the entire system can be modularly assembled from 5 subgroups.</li>
              </ul>
            </div>

            {/* Carotte Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={carotteImg}
                alt="Carrot Peeler Mechanism"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Technical Plans - Full Width */}
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <img
              src={planImg}
              alt="Technical Plans"
              className="w-full h-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
