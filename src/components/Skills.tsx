import { ScrollArea } from "@/components/ui/scroll-area";

const tools = [
  {
    category: "Programming Languages",
    items: "Python, C/C++, MATLAB, Bash, Fortran"
  },
  {
    category: "Quantum Computing",
    items: "QuTiP, Qiskit, PennyLane, Psi4, NetKet, CP2K, i-PI"
  },
  {
    category: "Scientific Computing",
    items: "Pandas, NumPy, Scikit-learn, Matplotlib, SciPy, TensorFlow, PyTorch, IPywidgets, ImageIO, OS"
  },
  {
    category: "CAD & Modeling",
    items: "CATIA, Shapr3D"
  },
  {
    category: "Simulation & Systems",
    items: "Simulink, LTSpice, Logisim"
  },
  {
    category: "DevOps & Containers",
    items: "Git, GitHub, GitLab, Docker"
  },
  {
    category: "Development Tools",
    items: "VS Code, PyCharm, Jupyter Notebook, LaTeX, macOS, Windows"
  },
  {
    category: "Productivity & Collaboration",
    items: "Microsoft Office (Excel, Word, PowerPoint, Teams), Confluence, Notion, Slack, LaTeX, Overleaf"
  }
];

const courses = [
  { name: "Computational Quantum Physics", url: "https://edu.epfl.ch/coursebook/fr/computational-quantum-physics-PHYS-463" },
  { name: "Quantum Computation", url: "https://edu.epfl.ch/coursebook/en/introduction-to-quantum-computation-CS-308" },
  { name: "Quantum Information Processing", url: "https://edu.epfl.ch/coursebook/en/introduction-to-quantum-information-processing-COM-309" },
  { name: "Quantum Science and Technology", url: "https://edu.epfl.ch/coursebook/en/introduction-to-quantum-science-and-technology-QUANT-400" },
  { name: "Quantum Mechanics", url: "https://edu.epfl.ch/coursebook/en/quantum-mechanics-for-non-physicists-PHYS-344" },
  { name: "Deep Learning", url: "https://edu.epfl.ch/coursebook/fr/deep-learning-EE-559" },
  { name: "Machine Learning for Physicists", url: "https://edu.epfl.ch/coursebook/en/machine-learning-for-physicists-PHYS-467" },
  { name: "Quantum Information Theory", url: "https://edu.epfl.ch/coursebook/en/quantum-information-theory-PHYS-550" },
  { name: "Quantum Physics I, IV", url: "https://edu.epfl.ch/coursebook/en/quantum-physics-iv-PHYS-426" },
  { name: "Electronic Structure Methods", url: "https://edu.epfl.ch/coursebook/en/introduction-to-electronic-structure-methods-CH-353" },
  { name: "Computational Methods in Molecular Quantum Mechanics", url: "https://edu.epfl.ch/coursebook/en/computational-methods-in-molecular-quantum-mechanics-CH-452" },
  { name: "Quantum Computing", url: "https://edu.epfl.ch/coursebook/en/quantum-computing-PHYS-541" },
  { name: "Actuators and Electromagnetic Systems I, II", url: "https://edu.epfl.ch/coursebook/fr/actionneurs-et-systemes-electromagnetiques-ii-MICRO-314" },
  { name: "Control Systems and Discrete-Time Control", url: "https://edu.epfl.ch/coursebook/fr/automatique-et-commande-numerique-ME-326" },
  { name: "Signals Processing and Systems I, II", url: "https://edu.epfl.ch/coursebook/fr/signaux-et-systemes-ii-pour-mt-MICRO-311-A" },
  { name: "Electronic Circuits and Systems", url: "https://edu.epfl.ch/coursebook/fr/signaux-et-systemes-ii-pour-mt-MICRO-311-A" },
  { name: "Optical Engineering", url: "https://edu.epfl.ch/coursebook/fr/ingenierie-optique-pour-mt-MICRO-321-A" },
  { name: "Embedded Systems and Robotics", url: "https://edu.epfl.ch/coursebook/fr/systemes-embarques-et-robotique-MICRO-315" },
  { name: "Sensors", url: "https://edu.epfl.ch/coursebook/fr/capteurs-MICRO-330" },
  { name: "Manufacturing Technologies", url: "https://edu.epfl.ch/coursebook/fr/manufacturing-technologies-MICRO-301" },
  { name: "Microfabrication Practicals", url: "https://edu.epfl.ch/coursebook/en/microfabrication-practicals-MICRO-332" },
  { name: "Microfabrication Technologies", url: "https://edu.epfl.ch/coursebook/en/microfabrication-technologies-MICRO-331" },
  { name: "Quantum Science", url: "https://edu.epfl.ch/coursebook/fr/la-science-quantique-une-vision-singuliere-MICRO-444" },
  { name: "Physics of Semiconductors Devices", url: "https://edu.epfl.ch/coursebook/fr/physique-des-composants-semiconducteurs-MICRO-312" },
  { name: "Numerical Analysis and Optimization", url: "https://edu.epfl.ch/coursebook/en/analyse-numerique-et-optimisation-MATH-212" },
  { name: "Elements of Statistics for Data Science", url: "https://edu.epfl.ch/coursebook/en/elements-of-statistics-for-data-science-EE-209" },
  { name: "General Physics : Electromagnetism", url: "https://edu.epfl.ch/coursebook/en/general-physics-electromagnetism-PHYS-201-C" },
  { name: "Mechanism Design I, II", url: "https://edu.epfl.ch/coursebook/fr/conception-de-mecanismes-ii-MICRO-201" },
  { name: "Electronics I, II", url: "https://edu.epfl.ch/coursebook/fr/electronique-ii-pour-mt-EE-203-C" },
  { name: "Microcontrollers", url: "https://edu.epfl.ch/coursebook/fr/microcontroleurs-MICRO-210" },
  { name: "Implementation of Materials I, II", url: "https://edu.epfl.ch/coursebook/fr/ingenierie-des-materiaux-ii-MSE-215" },
  { name: "Logic Systems", url: "https://edu.epfl.ch/coursebook/fr/systemes-logiques-pour-mt-EE-110" },
  { name: "Analysis I, II, III, IV", url: "https://edu.epfl.ch/coursebook/fr/analyse-iv-pour-sv-mt-MATH-207-A" },
  { name: "Linear Algebra", url: "https://edu.epfl.ch/coursebook/fr/algebre-lineaire-MATH-111-D" },
  { name: "Electrotechnics I, II", url: "https://edu.epfl.ch/coursebook/fr/electrotechnics-ii-MICRO-101" },
  { name: "General Physics : Mechanics", url: "https://edu.epfl.ch/coursebook/fr/physique-generale-mecanique-PHYS-101-D" },
  { name: "Mechanical Construction I, II", url: "https://edu.epfl.ch/coursebook/fr/construction-mecanique-ii-pour-gm-ME-102" },
  { name: "Design of Experiments", url: "https://edu.epfl.ch/studyplan/fr/propedeutique/microtechnique/coursebook/probability-statistics-for-engineers-MICRO-110" },
  { name: "Information, Computation, Communication", url: "https://edu.epfl.ch/studyplan/fr/propedeutique/microtechnique/coursebook/information-calcul-communication-CS-119-C" },
  { name: "Project Oriented Programming", url: "https://edu.epfl.ch/studyplan/fr/propedeutique/microtechnique/coursebook/programmation-orientee-projet-COM-112-A" },
  { name: "Materials: from Chemistry to Properties", url: "https://edu.epfl.ch/studyplan/fr/propedeutique/microtechnique/coursebook/materiaux-de-la-chimie-aux-proprietes-MSE-101-B" },
  { name: "General Physics : Thermodynamics", url: "https://edu.epfl.ch/coursebook/en/general-physics-thermodynamics-PHYS-106-A" }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
      <div className="flex items-center justify-center mb-16 gap-6">
        <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
        <h2 className="text-4xl font-bold whitespace-nowrap">Skills and Tools</h2>
        <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
      </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Tools Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Tools</h3>
            <div className="space-y-6">
              {tools.map((tool) => (
                <div key={tool.category}>
                  <h4 className="font-semibold mb-2">{tool.category}:</h4>
                  <p className="text-muted-foreground">{tool.items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses Section - Scrollable */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Courses</h3>
            <ScrollArea className="h-[600px] w-full rounded-lg border border-border bg-card/50 p-6">
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <a
                    key={index}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-md bg-background/50 hover:bg-background/80 transition-colors cursor-pointer"
                  >
                    {course.name}
                  </a>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
}
