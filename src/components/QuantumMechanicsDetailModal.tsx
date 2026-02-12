import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useRef, useEffect } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import rotatingImg from "@/assets/rotating.png";
import pulseImg from "@/assets/pulse.png";
import chevronImg from "@/assets/chevron.png";
import wavepacketCoherent from "@/assets/wavepacket_coherent.mp4";
import wavepacketSuperposition from "@/assets/wavepacket_superposition.mp4";
import wavepacketEvolution from "@/assets/wavepacket_evolution.mp4";

interface QuantumMechanicsDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuantumMechanicsDetailModal({ open, onOpenChange }: QuantumMechanicsDetailModalProps) {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVideoHover = (isHovering: boolean) => {
    const videos = [videoRef1.current, videoRef2.current, videoRef3.current];
    
    if (isHovering) {
      videos.forEach(video => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      });
    } else {
      videos.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  };

  // Pause all videos when modal closes
  useEffect(() => {
    if (!open) {
      const allVideos = [videoRef1.current, videoRef2.current, videoRef3.current];
      
      allVideos.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0 scroll-smooth overscroll-none">
        <VisuallyHidden>
          <DialogTitle>Quantum Mechanics Simulation</DialogTitle>
        </VisuallyHidden>
        <div className="sticky top-0 bg-background z-10 p-6 pb-4 flex justify-between items-center border-b backdrop-blur-sm">
          <InteractiveHoverButton
            text="Back"
            icon={<ArrowLeft className="w-4 h-4" />}
            onClick={handleBack}
            className="px-6 py-2"
          />
          <InteractiveHoverButton
            text="Home"
            icon={<Home className="w-4 h-4" />}
            onClick={handleHome}
            className="px-6 py-2"
          />
        </div>

        <div className="p-6 pt-4">
          <h1 className="text-4xl font-bold text-center mb-8">Quantum Mechanics Simulation</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1XQhj5xCqsM7vUXtMyfkTn6uYqb9Pdq2I/view?usp=sharing"
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
              href="https://github.com/Romain-Couyoumtzelis/qmfnp.git"
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

          {/* Overview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="space-y-3 text-base">
                <p><strong>Course:</strong> Quantum Mechanics for Non-Physicists (PHYS-344)</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Fall 2024</p>
                <p><strong>Team:</strong> Alone</p>
                <p><strong>Skills:</strong> Qubit state parametrization using spherical coordinates, Bloch sphere representation, matrix and vector operations for quantum states, orthogonality and normalization verification, time-dependent Schrödinger equation solving, Hamiltonian operators for qubit systems, time evolution of states, Rabi oscillations simulation, classical vs. quantum harmonic oscillator modeling, annihilation/creation operators, expectation values and uncertainties calculation, coherent states and displacements, wavefunction computations, multi-qubit state representations, tensor products, entanglement measures, quantum gates like iSWAP, coupled Hamiltonian simulations, QuTiP for visualizations, dynamic simulations, expectation values, Bloch sphere plots, animations of evolutions, Python programming for numerical checks and integrations, usage of Qiskit.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex flex-col gap-4 items-center justify-center">
              <img 
                src={rotatingImg} 
                alt="Rotating Bloch Sphere" 
                className="w-full h-auto object-contain rounded-lg"
              />
              <img 
                src={pulseImg} 
                alt="Pulse Sequence" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={chevronImg} 
                alt="Chevron Plot" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                We developed a comprehensive understanding of foundational quantum mechanics concepts through a series of homeworks, starting from single-qubit states and their representations to multi-qubit interactions and quantum harmonic oscillators. The assignments involved analytical derivations, numerical verifications, and simulations to explore quantum behaviors like superposition, entanglement, and time evolution. QuTiP was extensively used to verify solutions, plot results, and animate probability densities, ensuring a modular, robust, and responsive approach to quantum systems. A critical focus was on bridging classical and quantum models, analyzing uncertainties, and simulating gates for quantum computing applications, with safety in interpretations through Hermitian checks and unitarity.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8 [contain:layout_paint]">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li>Qubit states parametrized as |ψ⟩ = cos(θ/2)|0⟩ + e<sup>iφ</sup> sin(θ/2)|1⟩, visualized on the Bloch sphere; matrix representations for basis states |0⟩ and |1⟩ as column vectors, with orthogonality confirmed via inner products.</li>
              <li>Time evolution governed by iℏ d|ψ⟩/dt = Ĥ|ψ⟩, with discrete approximations and analytical solutions for arbitrary qubits; QuTiP simulations of ⟨Z⟩ expectations and Rabi frequencies matching theory (ω<sub>rabi</sub> ≈ g).</li>
              <li>Classical Hamiltonian H(x,p) = p²/2m + mω²x²/2 rewritten using complex variables; quantum operators â, â† with [â, â†] = 1; expectation values ⟨x⟩ = 0 for eigenstates, RMS satisfying Heisenberg uncertainty ≥ ℏ/2.</li>
              <li>Coherent states |α⟩ as â eigenstates, Poisson distributions for photon numbers; wavefunctions ψ<sub>n</sub>(x) using Hermite polynomials, numerical integrals for normalization/orthogonality.</li>
              <li>Animations of probability density evolutions for Gaussian wavepackets, coherent states, and superpositions; extra explorations of perturbed potentials, tunneling, and delta approximations.</li>
              <li>Multi-qubit states in Dirac/matrix forms via tensor products; Hamiltonian for coupled qubits with g terms; iSWAP gate via evolution, swap time π/(2g), period π/g; Bloch sphere projections during dynamics.</li>
            </ul>
          </div>

          {/* Video Section */}
          <div 
            className="bg-card/50 p-8 rounded-lg flex flex-col gap-4"
            onMouseEnter={() => handleVideoHover(true)}
            onMouseLeave={() => handleVideoHover(false)}
          >
            <video 
              ref={videoRef1}
              src={wavepacketCoherent}
              className="w-full h-auto rounded-lg"
              muted
              loop
              preload="auto"
              playsInline
            />
            <video 
              ref={videoRef2}
              src={wavepacketSuperposition}
              className="w-full h-auto rounded-lg"
              muted
              loop
              preload="auto"
              playsInline
            />
            <video 
              ref={videoRef3}
              src={wavepacketEvolution}
              className="w-full h-auto rounded-lg"
              muted
              loop
              preload="auto"
              playsInline
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
