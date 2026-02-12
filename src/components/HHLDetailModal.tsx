import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import hhlImg from "@/assets/hhl.png";
import shotsHHLImg from "@/assets/shotshhl.png";
import transpilerImg from "@/assets/transpiler.png";

interface HHLDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HHLDetailModal({ open, onOpenChange }: HHLDetailModalProps) {
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
          <DialogTitle>HHL Algorithm</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">HHL Algorithm</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1_tUE1bAOO6o3ayEejqUoRPG_jpDvvxHE/view?usp=sharing"
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
              href="https://github.com/Romain-Couyoumtzelis/HHL-algorithm.git"
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
                <p><strong>Course:</strong> Quantum Computation (COM-308)</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Spring 2025</p>
                <p><strong>Team:</strong> Alone</p>
                <p><strong>Skills:</strong> Quantum circuit design and implementation using Qiskit, quantum phase estimation (QPE), controlled unitary operations, inverse quantum Fourier transform (IQFT), state tomography via Pauli measurements, simulation on ideal and noisy backends, execution on real IBM quantum hardware, theoretical derivations for Hermitian matrices and eigenvalue encoding.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={hhlImg} 
                alt="HHL Algorithm Quantum Circuit" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={shotsHHLImg} 
                alt="HHL Algorithm Results" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                We implemented the Harrow-Hassidim-Lloyd (HHL) quantum algorithm to solve linear systems of equations Ax = b, where A is a Hermitian matrix and b is a vector. The project focuses on encoding the problem into quantum states, using phase estimation to extract eigenvalues, applying controlled rotations to invert them, and reconstructing the solution vector x via measurements and tomography. Simulations were run on Qiskit IBM Runtime, and experiments on real IBM quantum devices to compare ideal vs. noisy results, with post-processing to normalize and extract the solution.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li>The algorithm assumes A is Hermitian with positive integer eigenvalues λ<sub>i</sub> ≤ 2<sup>m</sup>; for non-Hermitian A, we extend to a larger block matrix to enable HHL application.</li>
              <li>Quantum phase estimation (QPE) encodes eigenvalues into a memory register of m qubits using Hadamard gates and controlled-U operations, where U = e<sup>i2π A / 2</sup>.</li>
              <li>Controlled rotation R inverts eigenvalues by applying a transformation to an ancilla qubit: |0⟩ ⊗ |λ⟩ → (√(1 - 1/λ²) |0⟩ + 1/λ |1⟩) ⊗ |λ⟩.</li>
              <li>Inverse QPE disentangles the memory register back to |0⟩<sup>⊗m</sup> using reversed gates, leaving the solution in the output register.</li>
              <li>State tomography reconstructs the density matrix ρ of the solution state |x⟩ using Pauli observables (I, X, Y, Z), enabling extraction of complex amplitudes.</li>
              <li>Circuit optimization: Used 1 ancilla, m clock qubits, n system qubits (n=1 for simple cases); transpiled for IBM hardware with error mitigation.</li>
              <li>Theoretical proofs: Derived solutions for theory questions, including eigenvalue inversion and probability bounds.</li>
              <li>Memory and resource usage: Minimal qubit count, gate depth O(m²) for QPE; simulator runs with 2048 shots, hardware with error rates appear.</li>
              <li>Limitations addressed: Handled eigenvalue approximation errors, no direct |x⟩ readout (used tomography), and noisy hardware via expectation values.</li>
            </ul>
          </div>

          {/* Transpiler Image */}
          <div className="bg-card/50 p-8 rounded-lg">
            <img 
              src={transpilerImg} 
              alt="Transpiler Circuit" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
