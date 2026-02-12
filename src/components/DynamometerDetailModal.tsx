import { ArrowLeft, Home, FileText } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import dynamoImg from "@/assets/dynamo.png";
import plancdmImg from "@/assets/plancdm.png";
import vuesImg from "@/assets/vues.png";

interface DynamometerDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DynamometerDetailModal({ open, onOpenChange }: DynamometerDetailModalProps) {
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
            <h1 className="text-5xl font-bold mb-8">Balanced Dynamometer</h1>
            <a
              href="https://drive.google.com/file/d/1gwPFul6Q8O5Mfv03R8ZAtHKdrZyCLEcC/view?usp=sharing"
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

          {/* Overview & Image Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Overview Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="space-y-4 text-base">
                <p>
                  <span className="font-semibold">Course:</span> Conception de Mécanismes
                </p>
                <p>
                  <span className="font-semibold">Institution:</span> EPFL – Section de Microtechnique
                </p>
                <p>
                  <span className="font-semibold">Semester:</span> Spring 2023
                </p>
                <p>
                  <span className="font-semibold">Team:</span> Group of 5 students – collaborative project with individual oral evaluation
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> Mechanism design, CAD, flexible mechanisms, static/dynamic balancing, dimensioning, FEA, precision engineering
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={dynamoImg}
                alt="Balanced Dynamometer Mechanism"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Objective</h2>
            <p className="text-base leading-relaxed">
              We designed a force sensor with adjustable stiffness, intended for high-resolution force measurements in robotic micromanipulation. The sensor had to be insensitive to gravitational and inertial forces, while maintaining a single degree of freedom. Our final design, ROT-FLEX, was developed through concept selection, detailed dimensioning, and performance verification. The system is based on flexure mechanisms that ensure frictionless, backlash-free motion, and integrates dual motors with screw preloading systems to adjust both stiffness and the force "zero" reference dynamically.
            </p>
          </div>

          {/* Technical Plans - Full Width */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
            <img
              src={plancdmImg}
              alt="Technical Plans"
              className="w-full h-auto"
            />
          </div>

          {/* Technical Highlights Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Highlights Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
              <ul className="space-y-4 text-base list-disc list-inside">
                <li><span className="font-semibold">Mechanism architecture:</span> Based on a symmetric balance-inspired system ensuring moment compensation, with kinematic chains modeled using ideal joints and implemented via RCC pivots and parallel-blade flexures.</li>
                <li><span className="font-semibold">Constant transmission ratio:</span> Achieved through geometric mirroring, resulting in an approximate ratio of 1 ≈ 1 across the entire range of motion.</li>
                <li><span className="font-semibold">Adjustable stiffness:</span> Controlled by preloading a flexural blade with a micrometric screw, modifying its elastic energy to cover a wide stiffness range.</li>
                <li><span className="font-semibold">Zeroing mechanism:</span> Independent force compensation system to cancel parasitic preloads using a secondary flexure structure, enabling sub-millinewton resolution.</li>
                <li><span className="font-semibold">Precision design:</span> All components were machined in titanium (Ti-6Al-4V) for high strength and elasticity, using wire-EDM with dimensional tolerance of ±3 μm.</li>
                <li><span className="font-semibold">Analytical modeling:</span> Complete energy-based formulation of each subsystem to evaluate stiffness, maximum stress, deflection, and natural frequency.</li>
                <li><span className="font-semibold">Performance metrics:</span> Final prototype meets all requirements, achieving 1.08 N max force, 50 nN resolution, and dynamic range over 11,000.</li>
              </ul>
            </div>

            {/* Vues Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={vuesImg}
                alt="Dynamometer Technical Views"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
