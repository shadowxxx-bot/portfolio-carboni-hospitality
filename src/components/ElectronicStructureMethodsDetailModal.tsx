import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ElectronicStructureMethodsDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ElectronicStructureMethodsDetailModal({ open, onOpenChange }: ElectronicStructureMethodsDetailModalProps) {
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
          <DialogTitle>Introduction to Electronic Structure Methods</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">Introduction to Electronic Structure Methods</h1>

          {/* Button */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/Romain-Couyoumtzelis/electronic-structure-methods.git"
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
                <p><strong>Course:</strong> Introduction to Electronic Structure Methods (IESM)</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Fall 2025</p>
                <p><strong>Skills:</strong> Quantum chemistry, Hartree-Fock theory, basis sets (STO, GTO, split-valence), post-HF methods (CI, MPn, CCSD(T)), DFT (exchange-correlation functionals, Jacob's ladder), geometry optimization, potential energy surfaces, transition state theory, Psi4 quantum chemistry package, Python scientific computing, NumPy/Einstein notation.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                A comprehensive computational chemistry course covering quantum chemistry methods from basic linear algebra and quantum mechanics fundamentals to advanced topics including <strong>Hartree-Fock theory</strong>, <strong>post-HF methods</strong> (Configuration Interaction, Møller-Plesset Perturbation Theory, Coupled Cluster), <strong>Density Functional Theory</strong>, and <strong>transition state optimization</strong>. All exercises are implemented using <strong>Psi4</strong> as the primary quantum chemistry software package.
              </p>
            </div>
          </div>

          {/* Course Structure */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Exercise</th>
                    <th className="text-left py-2 px-4">Topic</th>
                    <th className="text-left py-2 px-4">Key Concepts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 1</td>
                    <td className="py-2 px-4">Linear Algebra & QM Review</td>
                    <td className="py-2 px-4">Dirac notation, Hermitian operators, Slater determinants</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 2</td>
                    <td className="py-2 px-4">Basis Sets & Hartree-Fock</td>
                    <td className="py-2 px-4">STOs, GTOs, Pople basis sets, Z-matrix</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 3</td>
                    <td className="py-2 px-4">Dissociation & Geometry Optimization</td>
                    <td className="py-2 px-4">RHF vs UHF, PES, convergence criteria</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 4</td>
                    <td className="py-2 px-4">HF Procedure Implementation</td>
                    <td className="py-2 px-4">Fock matrix, SCF loop, density matrix</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 5</td>
                    <td className="py-2 px-4">Post-HF Methods</td>
                    <td className="py-2 px-4">CI, MPn, CCSD(T), correlation energy</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 6</td>
                    <td className="py-2 px-4">DFT vs (Post) HF</td>
                    <td className="py-2 px-4">XC functionals, Jacob's ladder, A-values</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 7</td>
                    <td className="py-2 px-4">Troubleshooting & Pitfalls</td>
                    <td className="py-2 px-4">Dispersion corrections, integration grids</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Ex 8</td>
                    <td className="py-2 px-4">PES Scans</td>
                    <td className="py-2 px-4">Rigid vs relaxed scans, conformational analysis</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Ex 9</td>
                    <td className="py-2 px-4">Transition States</td>
                    <td className="py-2 px-4">Saddle points, IRC, imaginary frequencies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Topics Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Topics Covered</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Hartree-Fock Theory</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>Fock equation:</strong> FC = SCE</li>
                  <li><strong>SCF procedure:</strong> Iterative optimization of MO coefficients</li>
                  <li><strong>RHF vs UHF:</strong> Restricted vs unrestricted spin orbitals</li>
                  <li><strong>Density matrix:</strong> D<sub>pq</sub> = Σᵢ c*<sub>pi</sub>·c<sub>qi</sub></li>
                  <li><strong>Coulomb & Exchange:</strong> J and K integrals from ERIs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Basis Sets</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>STOs:</strong> Slater-type orbitals (accurate but slow)</li>
                  <li><strong>GTOs:</strong> Gaussian-type orbitals (computationally efficient)</li>
                  <li><strong>Pople sets:</strong> 3-21G, 6-31G, 6-311G series</li>
                  <li><strong>Polarization:</strong> d,p functions for angular flexibility</li>
                  <li><strong>Diffuse:</strong> + functions for anions and weak interactions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Post-HF Methods</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>Correlation energy:</strong> E<sub>corr</sub> = E<sub>exact</sub> - E<sub>HF</sub></li>
                  <li><strong>CI:</strong> Configuration Interaction (variational)</li>
                  <li><strong>MPn:</strong> Møller-Plesset perturbation theory</li>
                  <li><strong>CCSD(T):</strong> "Gold standard" of quantum chemistry</li>
                  <li><strong>Size consistency:</strong> E(A+B) = E(A) + E(B)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Density Functional Theory</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>XC functional:</strong> Unknown part that must be approximated</li>
                  <li><strong>Jacob's ladder:</strong> LDA → GGA → meta-GGA → hybrid</li>
                  <li><strong>Common functionals:</strong> B3LYP, PBE, M06-2X, ωB97X-D</li>
                  <li><strong>Dispersion:</strong> D3/D3BJ corrections for non-covalent interactions</li>
                  <li><strong>Integration grids:</strong> Numerical quadrature quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Methods Comparison */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Methods Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Method</th>
                    <th className="text-left py-2 px-4">Type</th>
                    <th className="text-left py-2 px-4">Correlation</th>
                    <th className="text-left py-2 px-4">Scaling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">HF</td>
                    <td className="py-2 px-4">Mean-field</td>
                    <td className="py-2 px-4">None</td>
                    <td className="py-2 px-4">N⁴</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">MP2</td>
                    <td className="py-2 px-4">Perturbation</td>
                    <td className="py-2 px-4">~80-90%</td>
                    <td className="py-2 px-4">N⁵</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">CISD</td>
                    <td className="py-2 px-4">Variational</td>
                    <td className="py-2 px-4">~90%</td>
                    <td className="py-2 px-4">N⁶</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">CCSD(T)</td>
                    <td className="py-2 px-4">Non-variational</td>
                    <td className="py-2 px-4">~99%</td>
                    <td className="py-2 px-4">N⁷</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">DFT (GGA)</td>
                    <td className="py-2 px-4">Density-based</td>
                    <td className="py-2 px-4">Implicit</td>
                    <td className="py-2 px-4">N³</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">DFT (Hybrid)</td>
                    <td className="py-2 px-4">Density-based</td>
                    <td className="py-2 px-4">Implicit + HF exchange</td>
                    <td className="py-2 px-4">N⁴</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Geometry & Reactions Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Geometry Optimization & Reactions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Potential Energy Surfaces</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>PES:</strong> Energy as function of 3N-6 coordinates</li>
                  <li><strong>Stationary points:</strong> Minima (all positive frequencies)</li>
                  <li><strong>Saddle points:</strong> One imaginary frequency (TS)</li>
                  <li><strong>Rigid scan:</strong> Fix scan coordinate, freeze rest</li>
                  <li><strong>Relaxed scan:</strong> Optimize at each scan point</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Transition State Theory</h3>
                <ul className="space-y-2 text-base list-disc list-inside">
                  <li><strong>TS optimization:</strong> Find first-order saddle point</li>
                  <li><strong>Imaginary mode:</strong> Reaction coordinate direction</li>
                  <li><strong>IRC:</strong> Intrinsic Reaction Coordinate path</li>
                  <li><strong>Hammond postulate:</strong> TS resembles higher energy species</li>
                  <li><strong>Constrained optimization:</strong> Freeze reaction coordinate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li><strong>Psi4 Software:</strong> Open-source quantum chemistry package for HF, post-HF, and DFT calculations with Python interface.</li>
              <li><strong>NumPy/Einstein Notation:</strong> Efficient tensor operations using np.einsum for building Fock matrices, density matrices, and integral contractions.</li>
              <li><strong>Molecular Geometry:</strong> Z-matrix (internal coordinates) and Cartesian coordinate specifications for molecular structures.</li>
              <li><strong>SCF Convergence:</strong> DIIS acceleration, energy and density convergence criteria, orbital coefficient optimization.</li>
              <li><strong>Integral Evaluation:</strong> MintsHelper for overlap, kinetic, nuclear attraction, and electron repulsion integrals.</li>
              <li><strong>Visualization:</strong> Orbital cube files, normal mode animations, PES contour plots, molecular structure rendering.</li>
            </ul>
          </div>

          {/* Key Equations */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Equations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Roothaan-Hall Equation</p>
                  <p className="font-mono text-sm">FC = SCε</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Fock Matrix</p>
                  <p className="font-mono text-sm">F = H + 2J - K</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold mb-2">SCF Energy</p>
                  <p className="font-mono text-sm">E = Σ<sub>pq</sub> (H<sub>pq</sub> + F<sub>pq</sub>)D<sub>pq</sub> + E<sub>nuc</sub></p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Density Matrix</p>
                  <p className="font-mono text-sm">D<sub>pq</sub> = Σ<sub>i</sub> c*<sub>pi</sub>·c<sub>qi</sub></p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Coulomb Integral</p>
                  <p className="font-mono text-sm">J<sub>pq</sub> = Σ<sub>rs</sub> D<sub>rs</sub>·(pq|rs)</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Exchange Integral</p>
                  <p className="font-mono text-sm">K<sub>ps</sub> = Σ<sub>rq</sub> D<sub>rq</sub>·(pq|rs)</p>
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="bg-card/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">References</h2>
            <ul className="space-y-2 text-base list-disc list-inside">
              <li>Jensen, F. (2017). <em>Introduction to Computational Chemistry</em>. John Wiley & Sons.</li>
              <li>Cohen-Tannoudji, C., Diu, B., & Laloe, F. (1986). <em>Quantum Mechanics, Volume 1</em>.</li>
              <li>Smith DG, et al. (2020). PSI4 1.4: Open-source software for high-throughput quantum chemistry. <em>J. Chem. Phys.</em></li>
              <li>Sherrill Group Resources: Hartree-Fock, Geometry Optimization, and CI Theory lectures.</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
