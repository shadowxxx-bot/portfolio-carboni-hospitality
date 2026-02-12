import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, Presentation } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import figures
import ringPolymerConceptImg from "@/assets/1_ring_polymer_concept.png";
import beadConvergence300KImg from "@/assets/2_bead_convergence_300K.png";
import beadConvergence50KImg from "@/assets/3_bead_convergence_50K.png";
import vdosBeadComparisonImg from "@/assets/4_vdos_bead_comparison.png";
import observableDistributionsImg from "@/assets/5_observable_distributions.png";
import vdosHarmonicVsMorseImg from "@/assets/6_vdos_harmonic_vs_morse.png";

interface PathIntegralH2ODetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PathIntegralH2ODetailModal({ open, onOpenChange }: PathIntegralH2ODetailModalProps) {
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
          <DialogTitle>Path Integral Simulation of H2O-H2O Interaction</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">Path Integral Simulation of H₂O-H₂O Interaction</h1>

          {/* Button */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/11lbN2_N0-3MLcla7CsvpEiuIu8uvYCpx/view?usp=sharing"
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
                <p><strong>Course:</strong> Computational Methods in Molecular Quantum Mechanics (CMMQM)</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Fall 2025</p>
                <p><strong>Team:</strong> Romain Couyoumtzélis & Arush Samadhia</p>
                <p><strong>Skills:</strong> Path integral molecular dynamics (PIMD/RPMD), nuclear quantum effects analysis, classical MD simulations, ab initio MD with DFT, ring-polymer formalism, Trotter factorization, vibrational density of states (VDOS) computation, velocity autocorrelation functions, hydrogen bond analysis, bead convergence studies, CP2K simulations, i-PI path integral driver, q-TIP4P/F water model, PBE+D3 functional, thermostat implementations (Nosé-Hoover, CSVR, PILE-G), Python scientific computing, data analysis and visualization.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex flex-col gap-4 items-center justify-center">
              <img src={ringPolymerConceptImg} alt="Ring Polymer Concept" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center">Ring polymer representation of quantum particles via Trotter factorization</p>
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex flex-col items-center justify-center">
              <img src={observableDistributionsImg} alt="Observable Distributions" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center mt-4">Distribution of all 7 computed observables</p>
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                This project investigates <strong>nuclear quantum effects (NQEs)</strong> in the water dimer (H₂O)₂ — the simplest hydrogen-bonded system — by comparing three molecular dynamics approaches: Classical MD with CP2K, Ab Initio MD with DFT (PBE+D3), and Ring-Polymer MD/PIMD with i-PI. We analyze structural observables and vibrational properties at <strong>300 K</strong> (room temperature) and <strong>50 K</strong> (quantum-dominated regime) to quantify how quantum delocalization and zero-point energy modify hydrogen bonding. The quantum partition function is mapped to a classical ring-polymer system via the Trotter factorization, where each quantum particle becomes a ring polymer with P beads connected by harmonic springs.
              </p>
            </div>
          </div>

          {/* Key Findings Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Nuclear Quantum Effects</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>O–H bond elongation:</strong> +1.57% (300 K) → +1.67% (50 K) due to zero-point energy</li>
                  <li><strong>Proton delocalization:</strong> Broader δ (proton-sharing coordinate) distributions in PIMD</li>
                  <li><strong>VDOS redshift:</strong> O–H stretch frequency lowered by ~170 cm⁻¹ at 300 K</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Temperature Effects</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>H-bond stability:</strong> ~70% at 300 K → &gt;97% at 50 K</li>
                  <li><strong>Distribution widths:</strong> ~3× narrower at 50 K (reduced thermal fluctuations)</li>
                  <li><strong>H-bond geometry:</strong> More linear (166°) at 50 K vs bent (~144°) at 300 K</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Bead Convergence (RPMD)</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>300 K:</strong> P ≥ 32 beads sufficient</li>
                  <li><strong>50 K:</strong> P ≥ 128–256 beads required (stronger quantum effects)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Anharmonicity Effects</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li>Morse potential yields longer O–H bonds than harmonic</li>
                  <li>O–H stretch VDOS peak redshifted by ~90 cm⁻¹ in Morse vs harmonic</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img src={beadConvergence300KImg} alt="Bead Convergence at 300K" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Observable convergence at 300 K: P ≥ 32 beads sufficient</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={beadConvergence50KImg} alt="Bead Convergence at 50K" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Observable convergence at 50 K: P ≥ 128-256 beads required</p>
              </div>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li><strong>Classical MD (CP2K):</strong> TIP3P-like potential with Harmonic or Morse O–H bonds, Nosé–Hoover thermostat (τ = 100 fs), timestep 0.5 fs, 10 ps duration in 12.43³ Å³ box.</li>
              <li><strong>Ab Initio MD (CP2K + DFT):</strong> PBE functional with D3 dispersion correction, DZVP-GTH basis set, 280 Ry cutoff, Nosé–Hoover/CSVR thermostat, 0.5 fs timestep, 5 ps duration.</li>
              <li><strong>RPMD/PIMD (i-PI + q-TIP4P/F):</strong> Flexible water model with PILE-G thermostat (λ = 0.5, τ = 100 fs). At 300 K: Δt = 0.25 fs, 25 ps, P = 1–128 beads. At 50 K: Δt = 0.15 fs, 75 ps, P = 1–256 beads.</li>
              <li><strong>Computed Observables:</strong> Intramolecular bond lengths r(O–H), bond angles θ(H–O–H), H–H separation, dimer separation r(O–O), hydrogen bond length r(H···O), H-bond linearity θ(O–H···O), proton-sharing coordinate δ, and vibrational density of states (VDOS) from velocity autocorrelation.</li>
              <li><strong>Path Integral Theory:</strong> Quantum partition function mapped to classical ring-polymer via Trotter factorization. Spring stiffness ω<sub>P</sub> = P/(βℏ) encodes quantum kinetic energy. Bead count requirement: P ≳ ℏω<sub>max</sub>/(k<sub>B</sub>T).</li>
              <li><strong>Software Stack:</strong> CP2K (≥ 2024.1) for classical and AIMD, i-PI (≥ 2.6) for path integral driver, Python (≥ 3.10) with NumPy, SciPy, Matplotlib for analysis.</li>
            </ul>
          </div>

          {/* Computed Observables Table */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Computed Observables</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Observable</th>
                    <th className="text-left py-2 px-4">Description</th>
                    <th className="text-left py-2 px-4">Physical Significance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">r(O–H)</td>
                    <td className="py-2 px-4">Intramolecular bond length</td>
                    <td className="py-2 px-4">Elongates with NQEs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">θ(H–O–H)</td>
                    <td className="py-2 px-4">Bond angle</td>
                    <td className="py-2 px-4">~104.5° equilibrium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">r(O–O)</td>
                    <td className="py-2 px-4">Dimer separation</td>
                    <td className="py-2 px-4">H-bond strength probe</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">r(H···O)</td>
                    <td className="py-2 px-4">Hydrogen bond length</td>
                    <td className="py-2 px-4">~1.9–2.0 Å</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">θ(O–H···O)</td>
                    <td className="py-2 px-4">H-bond linearity</td>
                    <td className="py-2 px-4">~170–180° indicates strong H-bond</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">δ</td>
                    <td className="py-2 px-4">Proton-sharing coordinate</td>
                    <td className="py-2 px-4">Key NQE signature</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">VDOS</td>
                    <td className="py-2 px-4">Vibrational density of states</td>
                    <td className="py-2 px-4">From velocity autocorrelation</td>
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
                <img src={vdosBeadComparisonImg} alt="VDOS Bead Comparison" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">VDOS spectra showing bead convergence (P = 1 → 128)</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={vdosHarmonicVsMorseImg} alt="VDOS Harmonic vs Morse" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Anharmonicity comparison: Harmonic vs Morse potential</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
