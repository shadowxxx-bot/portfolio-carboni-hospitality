import { ArrowLeft, Home, FileText } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useRef, useEffect } from "react";
import qftImg from "@/assets/qft.png";
import compcountVideo from "@/assets/compcount.mp4";
import fourcountVideo from "@/assets/fourcount.mp4";
import shorImg from "@/assets/shor.png";
import qpeImg from "@/assets/qpe.png";

interface QuantumFourierTransformDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuantumFourierTransformDetailModal({ open, onOpenChange }: QuantumFourierTransformDetailModalProps) {
  const compcountRef = useRef<HTMLVideoElement>(null);
  const fourcountRef = useRef<HTMLVideoElement>(null);

  const handleHomeClick = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load videos and display first frame on mount
  useEffect(() => {
    if (compcountRef.current) {
      compcountRef.current.load();
    }
    if (fourcountRef.current) {
      fourcountRef.current.load();
    }
  }, [open]);

  const handleVideoMouseEnter = () => {
    if (compcountRef.current && fourcountRef.current) {
      compcountRef.current.currentTime = 0;
      fourcountRef.current.currentTime = 0;
      compcountRef.current.play();
      fourcountRef.current.play();
    }
  };

  const handleVideoMouseLeave = () => {
    if (compcountRef.current && fourcountRef.current) {
      compcountRef.current.pause();
      fourcountRef.current.pause();
      compcountRef.current.currentTime = 0;
      fourcountRef.current.currentTime = 0;
    }
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
            <h1 className="text-5xl font-bold mb-8">Quantum Fourier Transform</h1>
            <a
              href="https://drive.google.com/file/d/17ebXPY4njBPrhBtVaZ-7s2DCWo1cErWe/view?usp=sharing"
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
                  <span className="font-semibold">Course:</span> Quantum Mechanics for Non Physicists (PHYS-344)
                </p>
                <p>
                  <span className="font-semibold">Institution:</span> EPFL – Section of Quantum Science and Engineering
                </p>
                <p>
                  <span className="font-semibold">Semester:</span> Fall 2024
                </p>
                <p>
                  <span className="font-semibold">Team:</span> Alone
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> Quantum state manipulation, Quantum Fourier Transform (QFT) implementation, Quantum Phase Estimation (QPE), Shor's algorithm, Qiskit programming
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={qftImg}
                alt="Quantum Fourier Transform"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Objective & Videos Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Videos Card */}
            <div 
              className="bg-card rounded-lg p-8 shadow-lg space-y-4"
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
            >
              <video
                ref={compcountRef}
                className="w-full rounded-lg"
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={compcountVideo} type="video/mp4" />
              </video>
              <video
                ref={fourcountRef}
                className="w-full rounded-lg"
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={fourcountVideo} type="video/mp4" />
              </video>
            </div>

            {/* Project Objective Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                We developed a comprehensive study of the Quantum Fourier Transform (QFT) for non-physicists, focusing on its properties and applications to quantum algorithms. The project simulates QFT's role in identifying periodicities in quantum states, estimates phases in Quantum Phase Estimation (QPE), and factorizes large integers using Shor's algorithm. A critical feature includes leveraging QFT's reversibility and unitary properties to ensure accurate transformations, with the goal to implement an efficient, modular quantum computation system based on theoretical frameworks studied in the course.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-4 text-base list-disc list-inside">
              <li>The QFT navigates quantum states using superposition and entanglement, mapping n qubits to frequency components via a unitary transform.</li>
              <li>Each transformation encodes a behavior: QFT extracts phase information for QPE and periodicity for Shor's algorithm.</li>
              <li>Quantum circuits implement QFT with O(m²) depth and O(m³) total size, where m is the number of qubits.</li>
              <li>Inter-thread communication via quantum gates ensures synchronized responses to state measurements.</li>
              <li>Circuit optimization achieves high precision with O(log₂ N²) quantum operations, leveraging Qiskit for practical implementation.</li>
            </ul>
          </div>

          {/* Images Grid - Shor and QPE */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={shorImg}
                alt="Shor's Algorithm Implementation"
                className="max-w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={qpeImg}
                alt="Quantum Phase Estimation"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
