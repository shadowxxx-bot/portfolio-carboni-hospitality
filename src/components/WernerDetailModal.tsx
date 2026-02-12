import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import wernerImg from "@/assets/werner.png";
import tsirelsonImg from "@/assets/tsirelson.png";
import backendwernerImg from "@/assets/backendwerner.png";

interface WernerDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WernerDetailModal({ open, onOpenChange }: WernerDetailModalProps) {
  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0 will-change-transform scroll-smooth">
        <VisuallyHidden>
          <DialogTitle>Werner State Study</DialogTitle>
        </VisuallyHidden>
        <div className="sticky top-0 bg-background z-10 p-6 pb-4 flex justify-between items-center border-b will-change-transform">
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
          <h1 className="text-4xl font-bold text-center mb-8">Werner State Study</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/13UZ7oqb2Y_IMFbgimrCTif7DgTCo8Jj1/view?usp=sharing"
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
              href="https://github.com/Romain-Couyoumtzelis/werner-state-project.git"
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
                <p><strong>Course:</strong> Quantum Computation (COM-309)</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Spring 2025</p>
                <p><strong>Team:</strong> Group of 2 students</p>
                <p><strong>Skills:</strong> Quantum circuit design and implementation in PennyLane and Qiskit, density matrix manipulation, eigenvalue computation for state validation, partial transpose for separability testing with Peres criterion, expectation value measurements for Bell inequalities, entanglement analysis, and simulation of mixed quantum states.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={wernerImg} 
                alt="Werner State Circuit" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Overview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={tsirelsonImg} 
                alt="Tsirelson Bound Results" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-base leading-relaxed">
                We implemented circuits in PennyLane and Qiskit to prepare and analyze Werner states, a class of mixed two-qubit states used to study entanglement properties. The project focuses on computing matrix representations, eigenvalues, and partial transposes to determine separability via the Peres criterion, as well as measuring correlation coefficients to test CHSH Bell inequality violations for varying mixing parameters w ∈ [0, 1]. A key goal is to demonstrate how entanglement persists or vanishes in mixed states and to compare theoretical bounds with simulated results, ensuring robust and modular code for quantum information processing tasks. The Werner state ρ<sub>W</sub>(w) = (1 - w) I/4 + w |β<sub>11</sub>⟩⟨β<sub>11</sub>| is prepared using an ancillary environment and partial trace.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
              <ul className="space-y-3 text-base list-disc list-inside">
                <li><strong>Werner state construction:</strong> Implemented a 4-qubit circuit based on the theoretical model ρ<sub>W</sub>(w) = (1-w)I/4 + w|ψ<sup>-</sup>⟩⟨ψ<sup>-</sup>| where |ψ<sup>-</sup>⟩ = (1/√2)(|01⟩ - |10⟩) is the Bell singlet.</li>
                <li><strong>Custom unitary G(w):</strong> Designed and verified the gate G(w)|00⟩ = √((1-w)/4)(|00⟩ + |01⟩ + |10⟩) + √((1+3w)/4)|11⟩ to generate the required mixed-state superposition.</li>
                <li><strong>Density-matrix derivation:</strong> Traced out environmental qubits (a,b) to obtain ρ<sub>W</sub>(w) = Tr<sub>a,b</sub>(|φ<sub>2</sub>⟩⟨φ<sub>2</sub>|), confirming normalization, Hermiticity, and positivity through eigenvalue analysis.</li>
                <li><strong>Separability test:</strong> Applied the Peres criterion (I ⊗ T)ρ<sub>W</sub>(w) and computed eigenvalues to identify the threshold w<sub>c</sub> = 1/3 separating entangled and separable regions.</li>
                <li><strong>CHSH inequality evaluation:</strong> Constructed observables A, A', B, B' as Pauli-matrix combinations and measured ⟨B⟩ = Tr(ρ<sub>W</sub>(w)B) for w ∈ [0,1]. Confirmed violation of the CHSH bound for w &gt; 1/√2, consistent with Tsirelson's limit.</li>
                <li><strong>Cross-platform implementation:</strong> PennyLane for analytical verification and symbolic matrix computations; Qiskit for full quantum-circuit simulation, measurement statistics, and entanglement visualization via state tomography.</li>
                <li><strong>Result visualization:</strong> Generated parameter-dependent plots showing ⟨B⟩ vs. w, highlighting the transition from classical to quantum correlation domains.</li>
              </ul>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={backendwernerImg} 
                alt="Backend Werner Results" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
