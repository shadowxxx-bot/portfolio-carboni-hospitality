import { ArrowLeft, Home, FileText, Presentation } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import pdsImg from "@/assets/pds.png";
import workImg from "@/assets/work.png";
import thetaImg from "@/assets/theta.png";
import isocontoursImg from "@/assets/isocontours.png";

interface QuantumBatteriesDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuantumBatteriesDetailModal({ open, onOpenChange }: QuantumBatteriesDetailModalProps) {
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
            <h1 className="text-5xl font-bold mb-8">Quantum Batteries: Work Extraction</h1>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://drive.google.com/file/d/13eoBadXpBwxhOO_Zdae9muOfIoV35zf1/view?usp=sharing"
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
                href="https://drive.google.com/file/d/1epHTkgqbGPDr5XkS437C0kjyXLHl-6al/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Access Presentation"
                  icon={<Presentation className="w-5 h-5" />}
                  className="px-8 py-4 text-lg"
                />
              </a>
            </div>
          </div>

          {/* Overview & Image Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Overview Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="space-y-4 text-base">
                <p>
                  <span className="font-semibold">Course:</span> Semester Project in Quantum Science (QUANT-401)
                </p>
                <p>
                  <span className="font-semibold">Institution:</span> EPFL – Section of Quantum Science and Engineering
                </p>
                <p>
                  <span className="font-semibold">Semester:</span> Spring 2025
                </p>
                <p>
                  <span className="font-semibold">Team:</span> Group of 2 students
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> Quantum thermodynamics, passive state characterization, entangled quantum batteries, Werner state analysis, Hamiltonian modeling (local, Heisenberg, combined), projective measurements, POVM and NPOVM protocols, energy extraction optimization, mathematical derivations using eigenvalues and traces
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={pdsImg}
                alt="Quantum Batteries Passive State Diagram"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Objective & Image Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Image Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={workImg}
                alt="Work Extraction Analysis"
                className="max-w-full h-auto"
              />
            </div>

            {/* Project Objective Card */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                We continued a study on extracting work from quantum batteries, including single systems, multiple copies, and entangled states. The project defines extractable work as the difference in average energies between initial and final states achieved via unitary evolutions, projective measurements, or POVMs. We established passivity conditions and upper bounds using Gibbs states as reference, showing asymptotic convergence for n independent copies. Focusing on the Werner state for two qubits, we computed maximum extractable work under local, Heisenberg, and combined Hamiltonians, highlighting entanglement's impact. We compared unitary protocols with projective measurements and extended to POVM/NPOVM on auxiliary systems in noisy environments, demonstrating NPOVM advantages in scenarios like amplitude damping for qubit models. The goal was to optimize energy extraction through entanglement, Hamiltonian choice, and measurement strategies.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-4 text-base list-disc list-inside">
              <li>Characterization of passive states: An state is passive if its eigenvalues are decreasing and it commutes with the Hamiltonian, minimizing energy via unitary operations.</li>
              <li>General bound on available work: Derived upper limit as Tr[ρH] - Tr[σ_ρ H], where σ_ρ is the passive state with sorted eigenvalues in H's eigenbasis.</li>
              <li>Entangled batteries: Analyzed n independent copies, showing maximum work per copy approaches Gibbs state bound asymptotically.</li>
              <li>Maximum work from Werner state: Computed eigenvalues of ρ_Werner and constructed passive states for various Hamiltonians.</li>
              <li>Local Hamiltonian (H = σ_z ⊗ I + I ⊗ σ_z): Eigenvectors, passive state construction, trace calculations, and unitary realization yielding work proportional to entanglement.</li>
              <li>Heisenberg Hamiltonian (Ĥ_heis = ℏJ(σ_x ⊗ σ_x + σ_y ⊗ σ_y + σ_z ⊗ σ_z)): Leads to passive state with zero extractable work.</li>
              <li>Combined Hamiltonian (Ĥ_tot = Ĥ_loc + Ĥ_heis): Detailed eigenvalue and passive state analysis showing dependence on ω and J parameters.</li>
              <li>Energy extraction with local unitaries: Explored limitations and efficiencies on Werner state.</li>
              <li>Extraction via projective measurements: Applied naive projectors on H_tot for Werner state, comparing to unitaries.</li>
              <li>POVM and NPOVM: Implemented via joint evolution of battery, auxiliary, environment, and external systems; derived stochastic energy expressions.</li>
              <li>NPOVM type-1 and type-2: Outperform POVMs in noisy scenarios like amplitude damping, with correlated interactions enhancing extraction.</li>
            </ul>
          </div>

          {/* Images Grid - Theta and Isocontours */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={thetaImg}
                alt="Energy Extraction Function"
                className="max-w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg flex items-center justify-center">
              <img
                src={isocontoursImg}
                alt="Energy Isocontours"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
