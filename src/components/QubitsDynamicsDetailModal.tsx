import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Home, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useRef, useEffect } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import schemaBandeImg from "@/assets/schema-bande.png";
import fermiLevelsImg from "@/assets/fermilevels.png";
import rotatingImg from "@/assets/rotating.png";
import pulseImg from "@/assets/pulse.png";
import blochAnimFixe from "@/assets/bloch-anim-fixe.mp4";
import offResonance from "@/assets/off-resonance.mp4";
import resonance from "@/assets/resonance.mp4";
import slightlyOffResonance from "@/assets/slightly-off-resonance.mp4";
import timeInfiniteWell from "@/assets/time-infinite-well.mp4";
import evolutionModesCoherents from "@/assets/evolution-modes-coherents.mp4";
import wavepacketEvolutionQubits from "@/assets/wavepacket-evolution-qubits.mp4";

interface QubitsDynamicsDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QubitsDynamicsDetailModal({ open, onOpenChange }: QubitsDynamicsDetailModalProps) {
  const blochVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef1Row1 = useRef<HTMLVideoElement>(null);
  const videoRef2Row1 = useRef<HTMLVideoElement>(null);
  const videoRef3Row1 = useRef<HTMLVideoElement>(null);
  const videoRef1Row2 = useRef<HTMLVideoElement>(null);
  const videoRef2Row2 = useRef<HTMLVideoElement>(null);
  const videoRef3Row2 = useRef<HTMLVideoElement>(null);

  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlochVideoHover = (isHovering: boolean) => {
    if (blochVideoRef.current) {
      if (isHovering) {
        blochVideoRef.current.play();
      } else {
        blochVideoRef.current.pause();
        blochVideoRef.current.currentTime = 0;
      }
    }
  };

  const handleVideoRow1Hover = (isHovering: boolean) => {
    const videos = [videoRef1Row1.current, videoRef2Row1.current, videoRef3Row1.current];
    
    if (isHovering) {
      videos.forEach(video => {
        if (video) {
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

  const handleVideoRow2Hover = (isHovering: boolean) => {
    const videos = [videoRef1Row2.current, videoRef2Row2.current, videoRef3Row2.current];
    
    if (isHovering) {
      videos.forEach(video => {
        if (video) {
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
      const allVideos = [
        blochVideoRef.current,
        videoRef1Row1.current,
        videoRef2Row1.current,
        videoRef3Row1.current,
        videoRef1Row2.current,
        videoRef2Row2.current,
        videoRef3Row2.current
      ];
      
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
          <DialogTitle>Qubits and Hamiltonian Dynamics</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">Qubits and Hamiltonian Dynamics</h1>

          {/* Button */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/Romain-Couyoumtzelis/qubits-and-semiconductor-dynamics.git"
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
                <p><strong>Course:</strong> Simulations Development for Physics of Semiconductor Devices and Quantum Science</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Fall 2024 and Spring 2025</p>
                <p><strong>Skills:</strong> Python programming, QuTiP library, numerical methods, semiconductor physics, quantum mechanics, Boltzmann approximation, wavefunction superposition, coherent states, infinite square well, Bloch sphere visualization, Matplotlib animation, Jupyter notebooks, eigenvalue analysis, time-dependent Hamiltonians</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex flex-col gap-4 items-center justify-center">
              <img 
                src={fermiLevelsImg} 
                alt="Fermi levels" 
                className="w-full h-auto object-contain rounded-lg"
              />
              <img 
                src={schemaBandeImg} 
                alt="Band schema for weak coupling" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              className="bg-card/50 p-8 rounded-lg flex items-center justify-center"
              onMouseEnter={() => handleBlochVideoHover(true)}
              onMouseLeave={() => handleBlochVideoHover(false)}
            >
              <video 
                ref={blochVideoRef}
                src={blochAnimFixe}
                className="w-full h-auto rounded-lg"
                muted
                loop
                preload="auto"
                playsInline
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                Hired by Prof. Dr. P-A Besse to develop a comprehensive set of interactive simulations for bachelor students in Microengineering following the courses of Physics of Semiconductor Devices and Quantum Science. This unified project encompasses multiple modules to explore quantum and semiconductor phenomena: Fermi level dynamics in silicon under equilibrium and non-equilibrium conditions, qubit evolution under external fields and detuning, Rabi oscillations via Chevron plots, rotation axes on the Bloch sphere, time evolution in fixed and rotating frames, superposition and coherent state wavepacket animations, arbitrary harmonic oscillator eigenstates, and an infinite square well system. The simulations use adjustable parameters to visualize complex quantum behaviors, aiding in educational understanding of semiconductor physics and quantum dynamics.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside mb-8">
              <li>Semiconductor Simulations (fermi_energies.ipynb): Models Fermi levels (E<sub>F</sub>, E<sub>Fn</sub>, E<sub>Fp</sub>) and carrier concentrations (n, p) using Boltzmann approximation, with interactive Matplotlib plots and IPython sliders for real-time adjustment of E<sub>c</sub>, E<sub>v</sub>, and kT.</li>
              <li>External Field Placeholder (influence_champ_exterieur.ipynb): Reserves space for future quantum state evolution under external perturbations, using Python and planned QuTiP integration.</li>
              <li>Qubit Detuning Animations (creation_animation_detuning.ipynb): Generates GIFs of qubit trajectories on the Bloch sphere for different values of detunings with for specific Hamiltonian choice.</li>
              <li>Rabi Oscillation Visualization (chevron_experience_rabi.ipynb): Produces Chevron plots of ⟨σ<sub>z</sub>⟩ over detuning and time using QuTiP's mesolve.</li>
              <li>Bloch Sphere Rotation Analysis (positionnement_axe_rotation.ipynb): Diagonalizes H/ℏ = -ω<sub>x</sub> σ<sub>x</sub>/2 - ω<sub>y</sub> σ<sub>y</sub>/2 - ω<sub>z</sub> σ<sub>z</sub>/2, plots eigenstate trajectories, and computes rotation frequency ω = √(ω<sub>x</sub>² + ω<sub>y</sub>² + ω<sub>z</sub>²).</li>
              <li>Time-Dependent Evolution (referentiel_fixe_et_tournant.ipynb): Simulates H = -ω<sub>q</sub>/2 σ<sub>z</sub> - g cos(ω<sub>d</sub> t) σ<sub>x</sub>, animates Bloch sphere evolution (bloch_anim_fixe.gif) with steps, and tracks ⟨X⟩, ⟨Y⟩, ⟨Z⟩.</li>
              <li>Superposition Wavepacket Animation (evolution_superposition_modes_propres.ipynb): Animates |Φ(x,t)|² for |n=0⟩ + |n=10⟩ superposition (wavepacket_evolution_superposition.mp4) using 200 Fock states and ω = ℏ / (2 m x<sub>0</sub>²).</li>
              <li>Coherent State Evolution (evolution_modes_coherents.ipynb): Models coherent state with α=5 (⟨n⟩=25), animates probability density (wavepacket_evolution_coherent_state.mp4), and derives ⟨x⟩ = 2 x<sub>0</sub> |α| cos(ω t + θ).</li>
              <li>Arbitrary Eigenstate Visualization (mode_propre_quelconque.ipynb): Plots Ψ<sub>n</sub>(x) and |Ψ<sub>n</sub>(x)|² for n=50, including potential V(x) = 0.5 m ω² x² and classical turning points, with 100 Hilbert dimensions.</li>
              <li>Infinite Square Well Simulation (puit_infini.ipynb): Computes ψ<sub>n</sub>(x) = √(2/W) sin(n π x / W), animates Gaussian wavepacket evolution (wavepacket_evolution.mp4) over 3 periods, and plots static densities for n=1 to 4.</li>
              <li>General Features: Leverages QuTiP for quantum operators, Matplotlib/FuncAnimation for visualizations, scipy.integrate for normalization, and supports 1000+ time steps across animations with m = 1.0, ℏ = 1.0 unless specified.</li>
            </ul>

            {/* First Row of Videos */}
            <div 
              className="flex flex-col md:flex-row gap-4 mb-4"
              onMouseEnter={() => handleVideoRow1Hover(true)}
              onMouseLeave={() => handleVideoRow1Hover(false)}
            >
              <video 
                ref={videoRef1Row1}
                src={offResonance}
                className="flex-1 w-full h-auto rounded-lg object-contain max-h-[250px]"
                muted
                loop
                preload="auto"
                playsInline
              />
              <video 
                ref={videoRef2Row1}
                src={resonance}
                className="flex-1 w-full h-auto rounded-lg object-contain max-h-[250px]"
                muted
                loop
                preload="auto"
                playsInline
              />
              <video 
                ref={videoRef3Row1}
                src={slightlyOffResonance}
                className="flex-1 w-full h-auto rounded-lg object-contain max-h-[250px]"
                muted
                loop
                preload="auto"
                playsInline
              />
            </div>

            {/* Second Row of Videos */}
            <div 
              className="flex flex-col gap-4"
              onMouseEnter={() => handleVideoRow2Hover(true)}
              onMouseLeave={() => handleVideoRow2Hover(false)}
            >
              <video 
                ref={videoRef1Row2}
                src={timeInfiniteWell}
                className="w-full h-auto rounded-lg"
                muted
                loop
                preload="auto"
                playsInline
              />
              <video 
                ref={videoRef2Row2}
                src={evolutionModesCoherents}
                className="w-full h-auto rounded-lg"
                muted
                loop
                preload="auto"
                playsInline
              />
              <video 
                ref={videoRef3Row2}
                src={wavepacketEvolutionQubits}
                className="w-full h-auto rounded-lg"
                muted
                loop
                preload="auto"
                playsInline
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
