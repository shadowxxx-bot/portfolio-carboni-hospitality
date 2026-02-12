import { Card } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/glow-card";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { DynamometerDetailModal } from "@/components/DynamometerDetailModal";
import { RobotDetailModal } from "@/components/RobotDetailModal";
import { AlarmClockDetailModal } from "@/components/AlarmClockDetailModal";
import { MorseDecoderDetailModal } from "@/components/MorseDecoderDetailModal";
import { AntColonyDetailModal } from "@/components/AntColonyDetailModal";
import { HateSpeechDetailModal } from "@/components/HateSpeechDetailModal";
import { VariableIntensityDetailModal } from "@/components/VariableIntensityDetailModal";
import { QuantumFourierTransformDetailModal } from "@/components/QuantumFourierTransformDetailModal";
import { QuantumBatteriesDetailModal } from "@/components/QuantumBatteriesDetailModal";
import { HHLDetailModal } from "@/components/HHLDetailModal";
import { WernerDetailModal } from "@/components/WernerDetailModal";
import { MachineLearningDetailModal } from "@/components/MachineLearningDetailModal";
import { QuantumMechanicsDetailModal } from "@/components/QuantumMechanicsDetailModal";
import { QubitsDynamicsDetailModal } from "@/components/QubitsDynamicsDetailModal";
import { AnharmonicPhononsDetailModal } from "@/components/AnharmonicPhononsDetailModal";
import { SparseIndexTrackingDetailModal } from "@/components/SparseIndexTrackingDetailModal";
import { PathIntegralH2ODetailModal } from "@/components/PathIntegralH2ODetailModal";
import { ElectronicStructureMethodsDetailModal } from "@/components/ElectronicStructureMethodsDetailModal";
import pellerImg from "@/assets/peller.png";
import dynamoImg from "@/assets/dynamo.png";
import robotImg from "@/assets/robot.png";
import morseImg from "@/assets/morse.png";
import intensityImg from "@/assets/intensity.png";
import alarmImg from "@/assets/alarm.png";
import mlImg from "@/assets/ml.png";
import antImg from "@/assets/ant.png";
import dogImg from "@/assets/dog.png";
import hhlImg from "@/assets/hhl.png";
import wernerImg from "@/assets/werner.png";
import qmImg from "@/assets/qm.png";
import besseImg from "@/assets/besse-2.png";
import pdsImg from "@/assets/pds.png";
import qftImg from "@/assets/qft.png";
import morsePotentialImg from "@/assets/morsepotential.png";
import dynamicsImg from "@/assets/qaoa.png";
import pimdh20Img from "@/assets/pimdh20.png";
import iesmImg from "@/assets/reactant_ts_guess.png";

type ProjectCategory = "all" | "quantum" | "coding" | "electrical" | "mechanical";

const projects = [
  // Coding Projects with Images
  {
    title: "Machine Learning",
    description: "Advanced machine learning models and analysis.",
    technologies: ["Coding"],
    category: "coding" as ProjectCategory,
    year: "2024",
    image: mlImg,
    github: "#"
  },
  {
    title: "Multi-Agent Ecosystem",
    description: "Complex multi-agent system simulation.",
    technologies: ["Coding"],
    category: "coding" as ProjectCategory,
    year: "2022",
    image: antImg,
    github: "#"
  },
  {
    title: "Hate Speech Detection",
    description: "AI-powered hate speech detection system.",
    technologies: ["Coding"],
    category: "coding" as ProjectCategory,
    year: "2025",
    image: dogImg,
    github: "#"
  },
  {
    title: "HHL Algorithm",
    description: "Quantum HHL algorithm implementation.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2025",
    image: hhlImg,
    github: "#",
    imageScale: "scale-110"
  },
  {
    title: "Werner State Study",
    description: "Quantum Werner state analysis and visualization.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2024",
    image: wernerImg,
    github: "#"
  },
  {
    title: "Qubits and Hamiltonian Dynamics",
    description: "Study of qubit behavior and Hamiltonian dynamics.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2025",
    image: besseImg,
    github: "#"
  },
  {
    title: "Quantum Mechanics Simulation",
    description: "Comprehensive quantum mechanics simulation tool.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2024",
    image: qmImg,
    github: "#"
  },
  {
    title: "Anharmonic Phonons via Path Integral Simulation",
    description: "Path integral simulation of anharmonic phonons.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2026",
    image: morsePotentialImg,
    github: "#"
  },
  {
    title: "Sparse Index Tracking via QAOA",
    description: "Quantum portfolio optimization using QAOA with X-mixer and XY-mixer approaches.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2026",
    image: dynamicsImg,
    github: "#"
  },
  {
    title: "Path Integral Simulation of H2O-H2O Interaction",
    description: "Path integral molecular dynamics for water-water interactions.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2026",
    image: pimdh20Img,
    github: "#"
  },
  {
    title: "Electronic Structure Methods",
    description: "Comprehensive quantum chemistry course: HF, post-HF, DFT, and transition state theory with Psi4.",
    technologies: ["Quantum", "Coding"],
    category: "coding" as ProjectCategory,
    multiCategory: true,
    year: "2025",
    image: iesmImg,
    github: "#"
  },
  {
    title: "Quantum Batteries : Work Extraction",
    description: "Study of quantum batteries and work extraction mechanisms.",
    technologies: ["Quantum"],
    category: "quantum" as ProjectCategory,
    year: "2025",
    image: pdsImg,
    github: "#"
  },
  {
    title: "Quantum Fourier Transform",
    description: "Implementation and analysis of Quantum Fourier Transform.",
    technologies: ["Quantum"],
    category: "quantum" as ProjectCategory,
    year: "2025",
    image: qftImg,
    github: "#"
  },
  {
    title: "Autonomous Robot",
    description: "Fully autonomous robotic system with multi-domain integration.",
    technologies: ["Electrical", "Coding", "Mechanical"],
    category: "mechanical" as ProjectCategory,
    multiCategory: true,
    year: "2024",
    image: robotImg,
    github: "#",
    imageScale: "scale-110"
  },
  // Electrical Projects (with images)
  {
    title: "Morse Decoder",
    description: "Hardware-based morse code decoder with LCD display.",
    technologies: ["Electrical"],
    category: "electrical" as ProjectCategory,
    year: "2023",
    image: morseImg,
    github: "#",
    imageScale: "scale-110"
  },
  {
    title: "Variable Intensity Controller",
    description: "Precision light intensity control system.",
    technologies: ["Electrical"],
    category: "electrical" as ProjectCategory,
    year: "2024",
    image: intensityImg,
    github: "#",
    imageScale: "scale-110"
  },
  {
    title: "Digital Alarm Clock",
    description: "FPGA-based digital alarm clock with multiple features.",
    technologies: ["Electrical"],
    category: "electrical" as ProjectCategory,
    year: "2023",
    image: alarmImg,
    github: "#",
    imageScale: "scale-110"
  },
  // Mechanical Projects (with images)
  {
    title: "Manual Peller",
    description: "Design and implementation of high-precision mechanical systems for laboratory equipment.",
    technologies: ["Mechanical"],
    category: "mechanical" as ProjectCategory,
    year: "2022",
    image: pellerImg,
    github: "#"
  },
  {
    title: "Balanced Dynamometer",
    description: "Advanced dynamometer design for precision measurements.",
    technologies: ["Mechanical"],
    category: "mechanical" as ProjectCategory,
    year: "2023",
    image: dynamoImg,
    github: "#"
  }
  // Mechanical Projects (with images)
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDynamometerModalOpen, setIsDynamometerModalOpen] = useState(false);
  const [isRobotModalOpen, setIsRobotModalOpen] = useState(false);
  const [isAlarmClockModalOpen, setIsAlarmClockModalOpen] = useState(false);
  const [isMorseDecoderModalOpen, setIsMorseDecoderModalOpen] = useState(false);
  const [isAntColonyModalOpen, setIsAntColonyModalOpen] = useState(false);
  const [isHateSpeechModalOpen, setIsHateSpeechModalOpen] = useState(false);
  const [isVariableIntensityModalOpen, setIsVariableIntensityModalOpen] = useState(false);
  const [isQFTModalOpen, setIsQFTModalOpen] = useState(false);
  const [isQuantumBatteriesModalOpen, setIsQuantumBatteriesModalOpen] = useState(false);
  const [isHHLModalOpen, setIsHHLModalOpen] = useState(false);
  const [isWernerModalOpen, setIsWernerModalOpen] = useState(false);
  const [isMLModalOpen, setIsMLModalOpen] = useState(false);
  const [isQuantumMechanicsModalOpen, setIsQuantumMechanicsModalOpen] = useState(false);
  const [isQubitsDynamicsModalOpen, setIsQubitsDynamicsModalOpen] = useState(false);
  const [isAnharmonicPhononsModalOpen, setIsAnharmonicPhononsModalOpen] = useState(false);
  const [isSparseIndexTrackingModalOpen, setIsSparseIndexTrackingModalOpen] = useState(false);
  const [isPathIntegralH2OModalOpen, setIsPathIntegralH2OModalOpen] = useState(false);
  const [isElectronicStructureMethodsModalOpen, setIsElectronicStructureMethodsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "all"
    ? projects 
    : projects.filter(p => {
        // For multi-category projects, check if any technology matches the category
        if ('multiCategory' in p && p.multiCategory) {
          return p.technologies.some(tech => 
            tech.toLowerCase() === activeCategory
          );
        }
        return p.category === activeCategory;
      });

  // Remove duplicates (projects should only appear once per section)
  const uniqueProjects = filteredProjects.filter((project, index, self) =>
    index === self.findIndex((p) => p.title === project.title)
  );

  // Sort by year (most recent first)
  const sortedProjects = [...uniqueProjects].sort((a, b) =>
    parseInt(b.year) - parseInt(a.year)
  );

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: "All", value: "all" },
    { label: "Quantum", value: "quantum" },
    { label: "Coding", value: "coding" },
    { label: "Electrical", value: "electrical" },
    { label: "Mechanical", value: "mechanical" },
  ];

  return (
    <section id="projects" className="py-24 bg-card/30" style={{ willChange: 'scroll-position' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12 gap-6">
          <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
          <h2 className="text-4xl font-bold">Project</h2>
          <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <GlowCard
              key={cat.value}
              customSize
              glowColor="blue"
              onClick={() => setActiveCategory(cat.value)}
              className={`
                cursor-pointer transition-all duration-300
                ${activeCategory === cat.value 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-card/50 hover:bg-card/80'
                }
              `}
              width="auto"
              height="auto"
            >
              <div className="px-2 py-1.5 text-base font-medium">
                {cat.label}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {sortedProjects.map((project) => {
            // Special rendering for projects with images
            if (project.image) {
              const isManualPeller = project.title === "Manual Peller";
              const isBalancedDynamometer = project.title === "Balanced Dynamometer";
              const isAutonomousRobot = project.title === "Autonomous Robot";
              const isDigitalAlarmClock = project.title === "Digital Alarm Clock";
              const isMorseDecoder = project.title === "Morse Decoder";
              const isMultiAgentEcosystem = project.title === "Multi-Agent Ecosystem";
              const isHateSpeechDetection = project.title === "Hate Speech Detection";
              const isVariableIntensity = project.title === "Variable Intensity Controller";
              const isQFT = project.title === "Quantum Fourier Transform";
              const isQuantumBatteries = project.title === "Quantum Batteries : Work Extraction";
              const isHHL = project.title === "HHL Algorithm";
              const isWerner = project.title === "Werner State Study";
              const isML = project.title === "Machine Learning";
              const isQuantumMechanics = project.title === "Quantum Mechanics Simulation";
              const isQubitsDynamics = project.title === "Qubits and Hamiltonian Dynamics";
              const isAnharmonicPhonons = project.title === "Anharmonic Phonons via Path Integral Simulation";
              const isSparseIndexTracking = project.title === "Sparse Index Tracking via QAOA";
              const isPathIntegralH2O = project.title === "Path Integral Simulation of H2O-H2O Interaction";
              const isElectronicStructureMethods = project.title === "Electronic Structure Methods";
              const hasDetailModal = isManualPeller || isBalancedDynamometer || isAutonomousRobot || isDigitalAlarmClock || isMorseDecoder || isMultiAgentEcosystem || isHateSpeechDetection || isVariableIntensity || isQFT || isQuantumBatteries || isHHL || isWerner || isML || isQuantumMechanics || isQubitsDynamics || isAnharmonicPhonons || isSparseIndexTracking || isPathIntegralH2O || isElectronicStructureMethods;
              
              const handleClick = (e: React.MouseEvent) => {
                if (isManualPeller) {
                  e.preventDefault();
                  setIsModalOpen(true);
                } else if (isBalancedDynamometer) {
                  e.preventDefault();
                  setIsDynamometerModalOpen(true);
                } else if (isAutonomousRobot) {
                  e.preventDefault();
                  setIsRobotModalOpen(true);
                } else if (isDigitalAlarmClock) {
                  e.preventDefault();
                  setIsAlarmClockModalOpen(true);
                } else if (isMorseDecoder) {
                  e.preventDefault();
                  setIsMorseDecoderModalOpen(true);
                } else if (isMultiAgentEcosystem) {
                  e.preventDefault();
                  setIsAntColonyModalOpen(true);
                } else if (isHateSpeechDetection) {
                  e.preventDefault();
                  setIsHateSpeechModalOpen(true);
                } else if (isVariableIntensity) {
                  e.preventDefault();
                  setIsVariableIntensityModalOpen(true);
                } else if (isQFT) {
                  e.preventDefault();
                  setIsQFTModalOpen(true);
                } else if (isQuantumBatteries) {
                  e.preventDefault();
                  setIsQuantumBatteriesModalOpen(true);
                } else if (isHHL) {
                  e.preventDefault();
                  setIsHHLModalOpen(true);
      } else if (isWerner) {
        e.preventDefault();
        setIsWernerModalOpen(true);
      } else if (isML) {
        e.preventDefault();
        setIsMLModalOpen(true);
      } else if (isQuantumMechanics) {
        e.preventDefault();
        setIsQuantumMechanicsModalOpen(true);
      } else if (isQubitsDynamics) {
        e.preventDefault();
        setIsQubitsDynamicsModalOpen(true);
      } else if (isAnharmonicPhonons) {
        e.preventDefault();
        setIsAnharmonicPhononsModalOpen(true);
      } else if (isSparseIndexTracking) {
        e.preventDefault();
        setIsSparseIndexTrackingModalOpen(true);
      } else if (isPathIntegralH2O) {
        e.preventDefault();
        setIsPathIntegralH2OModalOpen(true);
      } else if (isElectronicStructureMethods) {
        e.preventDefault();
        setIsElectronicStructureMethodsModalOpen(true);
      }
              };

              return (
                <a
                  key={project.title}
                  href={hasDetailModal ? "#" : project.github}
                  onClick={handleClick}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ease-out will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden] [transform:translateZ(0)] hover:[transform:perspective(1000px)_rotate3d(1,1,0,15deg)] focus:[transform:perspective(1000px)_rotate3d(1,1,0,15deg)] hover:shadow-[rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] [&:hover_.project-img]:!filter-none [&:hover_.project-img]:[filter:saturate(1.35)_contrast(1.12)_brightness(1.06)] [&:focus_.project-img]:!filter-none [&:focus_.project-img]:[filter:saturate(1.35)_contrast(1.12)_brightness(1.06)]"
                  tabIndex={0}
                >
                  {/* Background Image */}
                  <div 
                    className={`project-img absolute inset-0 bg-center bg-cover will-change-[filter] [backface-visibility:hidden] [transform:translateZ(0)] ${'imageScale' in project ? project.imageScale as string : ''}`}
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      filter: 'grayscale(100%) brightness(0.9)',
                      transition: 'filter 200ms ease-out'
                    }}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />
                  
                  {/* Text Content - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/40 p-4 rounded-lg">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-2">
                        {project.year}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              );
            }
            
            // Default card rendering for other projects
            return (
              <Card key={project.title} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {'demo' in project && project.demo && (
                    <a
                      href={project.demo as string}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Project Detail Modals */}
        <ProjectDetailModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        <DynamometerDetailModal open={isDynamometerModalOpen} onOpenChange={setIsDynamometerModalOpen} />
        <RobotDetailModal open={isRobotModalOpen} onOpenChange={setIsRobotModalOpen} />
        <AlarmClockDetailModal open={isAlarmClockModalOpen} onOpenChange={setIsAlarmClockModalOpen} />
        <MorseDecoderDetailModal open={isMorseDecoderModalOpen} onOpenChange={setIsMorseDecoderModalOpen} />
        <AntColonyDetailModal open={isAntColonyModalOpen} onOpenChange={setIsAntColonyModalOpen} />
        <HateSpeechDetailModal open={isHateSpeechModalOpen} onOpenChange={setIsHateSpeechModalOpen} />
        <VariableIntensityDetailModal open={isVariableIntensityModalOpen} onOpenChange={setIsVariableIntensityModalOpen} />
        <QuantumFourierTransformDetailModal open={isQFTModalOpen} onOpenChange={setIsQFTModalOpen} />
        <QuantumBatteriesDetailModal open={isQuantumBatteriesModalOpen} onOpenChange={setIsQuantumBatteriesModalOpen} />
        <HHLDetailModal open={isHHLModalOpen} onOpenChange={setIsHHLModalOpen} />
       <WernerDetailModal open={isWernerModalOpen} onOpenChange={setIsWernerModalOpen} />
      <MachineLearningDetailModal open={isMLModalOpen} onOpenChange={setIsMLModalOpen} />
      <QuantumMechanicsDetailModal open={isQuantumMechanicsModalOpen} onOpenChange={setIsQuantumMechanicsModalOpen} />
      <QubitsDynamicsDetailModal open={isQubitsDynamicsModalOpen} onOpenChange={setIsQubitsDynamicsModalOpen} />
      <AnharmonicPhononsDetailModal open={isAnharmonicPhononsModalOpen} onOpenChange={setIsAnharmonicPhononsModalOpen} />
      <SparseIndexTrackingDetailModal open={isSparseIndexTrackingModalOpen} onOpenChange={setIsSparseIndexTrackingModalOpen} />
      <PathIntegralH2ODetailModal open={isPathIntegralH2OModalOpen} onOpenChange={setIsPathIntegralH2OModalOpen} />
      <ElectronicStructureMethodsDetailModal open={isElectronicStructureMethodsModalOpen} onOpenChange={setIsElectronicStructureMethodsModalOpen} />
      </div>
    </section>
  );
}
