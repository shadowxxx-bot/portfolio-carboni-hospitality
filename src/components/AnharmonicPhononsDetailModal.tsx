import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, FileText, Presentation } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import figures
import ringPolymerDiagramImg from "@/assets/1_ring_polymer_diagram.png";
import quarticGammaSignReversalImg from "@/assets/2_quartic_gamma_sign_reversal.png";
import quarticFrequencyEstimatorsImg from "@/assets/3_quartic_frequency_estimators.png";
import doubleWellTunnelingFailureImg from "@/assets/4_double_well_tunneling_failure.png";
import morseVdosSuccessImg from "@/assets/5_morse_vdos_success.png";
import morsePotentialCurvesImg from "@/assets/6_morse_potential_curves.png";

interface AnharmonicPhononsDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AnharmonicPhononsDetailModal({ open, onOpenChange }: AnharmonicPhononsDetailModalProps) {
  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0 scroll-smooth overscroll-none">
        <VisuallyHidden>
          <DialogTitle>1D Anharmonic Phonons Spectrum via Path Integral Molecular Dynamics</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">1D Anharmonic Phonons Spectrum via PIMD</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/19xIq-fIIZDJaNB7JlTPX7BBwBDNRUysU/view?usp=sharing"
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
              href="https://drive.google.com/file/d/1EqGFgzBz8b9GiMHjr1H7hGoaDF4oCY8c/view?usp=sharing"
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

          {/* Overview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="space-y-3 text-base">
                <p><strong>Project:</strong> Semester Project II</p>
                <p><strong>Institution:</strong> EPFL - CECAM</p>
                <p><strong>Supervisor:</strong> Prof. Sara Bonella</p>
                <p><strong>Date:</strong> January 2026</p>
                <p><strong>Skills:</strong> Path Integral Molecular Dynamics (PIMD), Ring-Polymer Molecular Dynamics (RPMD), phonon frequency estimators, force-force correlators, displacement-displacement correlators, anharmonicity analysis, i-PI framework, PILE thermostat, finite-difference Schrodinger solver, Morse potential, quartic potential, double-well potential, Kubo-transformed correlation functions, Python scientific computing.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex flex-col gap-4 items-center justify-center">
              <img src={ringPolymerDiagramImg} alt="Ring Polymer Diagram" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center">PIMD ring polymer theory: quantum particle mapped to P classical beads</p>
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex flex-col items-center justify-center">
              <img src={morsePotentialCurvesImg} alt="Morse Potential Curves" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center mt-4">Test potentials: Harmonic, Morse, Double-Well, Quartic</p>
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                This project benchmarks <strong>Path Integral Molecular Dynamics (PIMD)</strong> phonon frequency estimators against exact quantum references for a series of one-dimensional model potentials with increasing anharmonicity. Two PIMD-based estimators are assessed: the <strong>force-force estimator</strong> (targeting the fundamental frequency) and the <strong>displacement-displacement estimator</strong> (targeting the first excitation frequency). The <strong>anharmonicity ratio</strong> γ = ω<sub>δxδx</sub>/ω<sub>FF</sub> provides a single metric for characterizing anharmonicity (γ = 1 for harmonic, γ ≠ 1 for anharmonic systems).
              </p>
            </div>
          </div>

          {/* Test Potentials Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Test Potentials</h2>
            <p className="text-base mb-4">Four 1D model potentials with increasing anharmonicity:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Potential</th>
                    <th className="text-left py-2 px-4">Formula</th>
                    <th className="text-left py-2 px-4">Anharmonicity Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Harmonic</td>
                    <td className="py-2 px-4">V(x) = (k/2)x²</td>
                    <td className="py-2 px-4">None (γ = 1)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Morse</td>
                    <td className="py-2 px-4">V(x) = D<sub>e</sub>(1 - e<sup>-a<sub>m</sub>x</sup>)²</td>
                    <td className="py-2 px-4">Subharmonic (γ &lt; 1)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Symmetric Double-Well</td>
                    <td className="py-2 px-4">V(x) = -(k/2)x² + c₀kx⁴</td>
                    <td className="py-2 px-4">Variable</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Quartic</td>
                    <td className="py-2 px-4">V(x) = c<sub>q</sub>kx⁴</td>
                    <td className="py-2 px-4">Superharmonic (γ &gt; 1)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Findings Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Displacement Estimator (ω<sub>δxδx</sub>)</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>Consistently reliable</strong> for capturing the first excitation energy</li>
                  <li><strong>Morse:</strong> &lt;0.3% error even at strong anharmonicity</li>
                  <li><strong>Quartic:</strong> &lt;1.4% error</li>
                  <li><strong>Deep tunneling:</strong> 85% overestimate (intrinsic PIMD limitation)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Force Estimator (ω<sub>FF</sub>)</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li>Good for quasi-harmonic systems</li>
                  <li><strong>Fails for quartic:</strong> systematic SCHA bias (×1.4)</li>
                  <li>Probes local curvature which varies strongly in anharmonic systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Anharmonicity Ratio (γ)</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li>Departure from 1 correctly signals strong anharmonicity</li>
                  <li><strong>Critical limitation:</strong> Cannot distinguish super- from subharmonic</li>
                  <li>Quartic: γ<sub>PIMD</sub> ≈ 0.93 while γ<sub>exact</sub> = 1.29 (sign reversal)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Accuracy Summary</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>Harmonic:</strong> Exact (&lt;0.1% error)</li>
                  <li><strong>Morse:</strong> &lt;0.3% displacement, &lt;0.6% force</li>
                  <li><strong>Double-well:</strong> &lt;1% (shallow), 85% (deep tunneling)</li>
                  <li><strong>Quartic:</strong> &lt;1.4% displacement, ×1.4 force bias</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img src={quarticGammaSignReversalImg} alt="Quartic Gamma Sign Reversal" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Critical failure: γ_PIMD ≈ 0.93 vs γ_exact = 1.29 (sign reversal)</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={quarticFrequencyEstimatorsImg} alt="Quartic Frequency Estimators" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Force estimator shows ×1.4 systematic SCHA bias for quartic</p>
              </div>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li><strong>i-PI Framework:</strong> Client-server architecture with server controlling nuclear dynamics and client supplying potential energies and forces. Custom Python drivers implemented for non-standard potentials.</li>
              <li><strong>Simulation Parameters:</strong> Temperature T = 20 K (quantum-dominated regime), P = 200-400 beads, timestep Δt = 0.25-0.5 fs, PILE thermostat (τ = 5-8.3 fs, λ = 0.5), 10⁶ total steps, 250 ps simulation time.</li>
              <li><strong>Physical Constants:</strong> m = 1837.36 m<sub>e</sub> (H atom), ω<sub>harm</sub> = 2194.75 cm⁻¹.</li>
              <li><strong>Reference Calculations:</strong> Finite-difference diagonalization of Schrodinger equation (~10⁵ grid points, accuracy &lt;0.01 cm⁻¹). Analytical Morse formula for validation.</li>
              <li><strong>Theoretical Framework:</strong> Born-Oppenheimer approximation, Path Integral formalism via Trotter factorization, Ring-Polymer MD for Kubo-transformed time-correlation functions.</li>
              <li><strong>Ring Polymer:</strong> P beads connected by harmonic springs with spring frequency ω<sub>P</sub> = P/(βℏ). PILE thermostat for efficient normal-mode Langevin sampling.</li>
            </ul>
          </div>

          {/* Simulation Parameters Table */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Simulation Parameters</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Parameter</th>
                    <th className="text-left py-2 px-4">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">Temperature</td>
                    <td className="py-2 px-4">T = 20 K (quantum-dominated regime)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Number of beads</td>
                    <td className="py-2 px-4">P = 200-400</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Timestep</td>
                    <td className="py-2 px-4">Δt = 0.25-0.5 fs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">PILE thermostat τ</td>
                    <td className="py-2 px-4">5-8.3 fs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Total steps</td>
                    <td className="py-2 px-4">N = 10⁶</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Total simulation time</td>
                    <td className="py-2 px-4">t = 250 ps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Results & Visualizations */}
          <div className="bg-card/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Results & Visualizations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img src={morseVdosSuccessImg} alt="Morse VDOS Success" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Success case: Morse potential with &lt;0.3% error</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={doubleWellTunnelingFailureImg} alt="Double-Well Tunneling Failure" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Deep tunneling failure: 85% overestimate in double-well</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
