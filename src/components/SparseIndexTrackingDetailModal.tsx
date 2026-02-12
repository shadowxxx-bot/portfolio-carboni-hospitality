import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, Presentation } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import figures
import pSweepDualImg from "@/assets/1_p_sweep_dual.png";
import noiseSweepImg from "@/assets/2_noise_sweep.png";
import mixerComparisonImg from "@/assets/3_mixer_comparison.png";
import aggregatedResultsImg from "@/assets/4_aggregated_results.png";
import lambdaSweepImg from "@/assets/5_lambda_sweep.png";
import qaoaCircuitImg from "@/assets/6_qaoa_circuits_summary.png";

interface SparseIndexTrackingDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SparseIndexTrackingDetailModal({ open, onOpenChange }: SparseIndexTrackingDetailModalProps) {
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
          <DialogTitle>Sparse Index Tracking via QAOA</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">Sparse Index Tracking via QAOA</h1>

          {/* Button */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1GTrGjWkUJ6vf1-gVtjq3-EBkVwN_V1PL/view?usp=sharing"
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
                <p><strong>Course:</strong> Quantum Computing (PHYS-541)</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Fall 2025</p>
                <p><strong>Team:</strong> Romain Couyoumtzélis</p>
                <p><strong>Skills:</strong> Quantum Approximate Optimization Algorithm (QAOA), variational quantum algorithms, QUBO formulation, Ising Hamiltonian mapping, X-mixer and XY-mixer implementations, Hamming weight preserving circuits, Dicke state preparation, quantum circuit design, classical-quantum hybrid optimization (COBYLA), noise model simulation, portfolio optimization, sparse index tracking, Qiskit framework, Python scientific computing.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex flex-col gap-4 items-center justify-center">
              <img src={qaoaCircuitImg} alt="QAOA Circuit Structure" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center">Standard QAOA circuit: Hadamard initialization → p layers of cost and mixer unitaries → measurement</p>
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex flex-col items-center justify-center">
              <img src={mixerComparisonImg} alt="Mixer Comparison" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center mt-4">X-mixer vs XY-mixer circuit comparison</p>
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                This project implements <strong>Sparse Index Tracking</strong> using the <strong>Quantum Approximate Optimization Algorithm (QAOA)</strong>. We compare two constraint-handling approaches: penalty-based (X-mixer) and hard-constraint (XY-mixer) methods to select exactly <em>k</em> assets from <em>N</em> candidates that minimize tracking error with respect to a benchmark index. Index tracking is a portfolio management strategy where we construct a portfolio that closely follows a benchmark (e.g., S&P 500). The <strong>sparse</strong> constraint limits holdings to a small number of assets, reducing transaction costs and simplifying portfolio management.
              </p>
            </div>
          </div>

          {/* Why Quantum Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Quantum Computing?</h2>
            <p className="text-base leading-relaxed mb-4">
              Selecting the optimal <em>k</em> assets from <em>N</em> candidates is a combinatorial optimization problem with C(N,k) possible solutions:
            </p>
            <ul className="space-y-2 text-base list-disc list-inside mb-4">
              <li><strong>N=10, k=3:</strong> 120 combinations (this project)</li>
              <li><strong>N=500, k=50:</strong> ~10<sup>59</sup> combinations (real-world scale)</li>
            </ul>
            <p className="text-base leading-relaxed">
              QAOA is a promising near-term quantum algorithm for such combinatorial problems, offering potential quantum advantage for large-scale portfolio optimization.
            </p>
          </div>

          {/* Methods Comparison Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Methods Compared</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Method</th>
                      <th className="text-left py-2 px-4">Constraint Handling</th>
                      <th className="text-left py-2 px-4">Mixer</th>
                      <th className="text-left py-2 px-4">Key Characteristic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-semibold">A (Standard QAOA)</td>
                      <td className="py-2 px-4">Soft constraint via penalty term</td>
                      <td className="py-2 px-4">X-mixer</td>
                      <td className="py-2 px-4">Simple, requires λ tuning</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold">B (XY-mixer QAOA)</td>
                      <td className="py-2 px-4">Hamming weight preserving</td>
                      <td className="py-2 px-4">XY-mixer</td>
                      <td className="py-2 px-4">Guarantees feasibility (ideal case)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-card/50 p-8 rounded-lg flex flex-col items-center justify-center">
              <img src={lambdaSweepImg} alt="Lambda Sweep" className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center mt-4">Penalty parameter λ sensitivity analysis</p>
            </div>
          </div>

          {/* Key Results Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Results</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Performance Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-2">Metric</th>
                        <th className="text-left py-2 px-2">Standard QAOA</th>
                        <th className="text-left py-2 px-2">XY-Mixer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-2">Finds optimal TE</td>
                        <td className="py-2 px-2 text-green-500">Yes (p≥2)</td>
                        <td className="py-2 px-2">~10% above</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2">Feasibility (noiseless)</td>
                        <td className="py-2 px-2">5-70%</td>
                        <td className="py-2 px-2 text-green-500">100%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2">Feasibility (noisy)</td>
                        <td className="py-2 px-2 text-green-500">~20%</td>
                        <td className="py-2 px-2">~15%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">Noise robustness</td>
                        <td className="py-2 px-2 text-green-500">Better</td>
                        <td className="py-2 px-2">Degrades</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Experimental Values (Real Data, SPY)</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>Optimal TE:</strong> 2.513 × 10⁻⁵</li>
                  <li><strong>Greedy TE:</strong> 2.736 × 10⁻⁵</li>
                  <li><strong>Standard QAOA TE (p=3):</strong> 2.513 × 10⁻⁵ (matches optimal)</li>
                  <li><strong>XY-mixer TE (p=3):</strong> 2.749 × 10⁻⁵ (~9% above optimal)</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img src={pSweepDualImg} alt="P-Sweep Dual Results" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Circuit depth (p) sweep: Standard QAOA matches optimal at p≥2</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={noiseSweepImg} alt="Noise Sweep Results" className="w-full rounded-lg" />
                <p className="text-sm text-muted-foreground text-center mt-4">Noise robustness: XY-mixer advantage vanishes under noise</p>
              </div>
            </div>
          </div>

          {/* Main Findings Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Main Findings</h2>
            <ul className="space-y-3 text-base list-decimal list-inside">
              <li><strong>Standard QAOA</strong> at p≥2 consistently finds the optimal solution</li>
              <li><strong>XY-mixer</strong> guarantees 100% feasibility <strong>only in noiseless conditions</strong></li>
              <li>Under noise, XY-mixer feasibility drops from 100% to ~15% (noise scale 5)</li>
              <li>For <strong>NISQ devices</strong>, Standard QAOA with post-selection is more practical</li>
              <li>Post-selection is essential for XY-mixer under realistic noise</li>
            </ul>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li><strong>QUBO Formulation:</strong> Tracking error TE(x) = (1/T) Σ<sub>t</sub> (r<sub>b</sub>(t) - (1/k) Σ<sub>i</sub> x<sub>i</sub> · r<sub>i</sub>(t))² expanded to Q<sub>ii</sub> and Q<sub>ij</sub> coefficients encoding benchmark correlation and asset covariance.</li>
              <li><strong>Ising Mapping:</strong> Binary variables x<sub>i</sub> transformed via x<sub>i</sub> = (1-z<sub>i</sub>)/2 to Ising Hamiltonian H<sub>C</sub> = Σ<sub>i</sub> h<sub>i</sub> Z<sub>i</sub> + Σ<sub>i&lt;j</sub> J<sub>ij</sub> Z<sub>i</sub> Z<sub>j</sub>.</li>
              <li><strong>Standard QAOA (X-mixer):</strong> Initial state |+⟩<sup>N</sup>, mixer H<sub>M</sub> = Σ<sub>i</sub> X<sub>i</sub>, cost includes penalty λ(Σx<sub>i</sub> - k)². Simple circuit with N R<sub>X</sub> gates per layer.</li>
              <li><strong>XY-mixer QAOA:</strong> Initial state |1⟩<sup>k</sup>|0⟩<sup>(N-k)</sup> (Dicke state), mixer H<sub>XY</sub> = Σ<sub>(i,j)</sub> (X<sub>i</sub>X<sub>j</sub> + Y<sub>i</sub>Y<sub>j</sub>)/2. XY interaction swaps |01⟩ ↔ |10⟩, preserving Hamming weight.</li>
              <li><strong>Experiments:</strong> N=10 assets, k=3, SPY benchmark with 10 stocks (AAPL, MSFT, GOOGL, AMZN, JPM, JNJ, XOM, PG, HD, VZ), period Jan 2023 - Jan 2024.</li>
              <li><strong>Sweeps:</strong> p-sweep (depth 1-3), λ-sweep (0.1-50), shots-sweep (256-4096), noise-sweep (scale 0-5).</li>
              <li><strong>Software:</strong> Qiskit (≥1.0.0), Qiskit Aer for simulation, COBYLA optimizer, Python with NumPy, SciPy, Matplotlib.</li>
            </ul>
          </div>

          {/* QAOA Algorithm Structure */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">QAOA Algorithm Structure</h2>
            <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
              |ψ₀⟩ → [U<sub>C</sub>(γ₁) U<sub>M</sub>(β₁)] → ... → [U<sub>C</sub>(γ<sub>p</sub>) U<sub>M</sub>(β<sub>p</sub>)] → Measure
            </div>
            <p className="text-base leading-relaxed">
              Each layer applies the cost unitary U<sub>C</sub>(γ) = e<sup>-iγH<sub>C</sub></sup> followed by the mixer unitary U<sub>M</sub>(β) = e<sup>-iβH<sub>M</sub></sup>. The variational parameters (γ, β) are optimized classically to minimize the expected cost.
            </p>
          </div>

          {/* Results & Visualizations */}
          <div className="bg-card/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Results & Visualizations</h2>
            <div className="flex flex-col items-center">
              <img src={aggregatedResultsImg} alt="Aggregated Results" className="w-full max-w-4xl rounded-lg" />
              <p className="text-sm text-muted-foreground text-center mt-4">Aggregated results across multiple seeds showing reproducibility</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
