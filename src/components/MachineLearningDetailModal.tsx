import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Github } from "lucide-react";
import logpredImg from "@/assets/logpred.png";
import trainlossImg from "@/assets/trainloss.png";
import epochsImg from "@/assets/epochs.png";

interface MachineLearningDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MachineLearningDetailModal({ open, onOpenChange }: MachineLearningDetailModalProps) {
  const scrollToTop = () => {
    const dialogContent = document.querySelector('[role="dialog"]');
    if (dialogContent) {
      dialogContent.scrollTop = 0;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-8">
          {/* Header with Back and Home buttons */}
          <div className="flex justify-between items-center sticky top-0 bg-background/95 backdrop-blur-sm z-10 pb-4 border-b">
            <InteractiveHoverButton
              text="Back"
              onClick={() => onOpenChange(false)}
              className="w-32"
            />
            <InteractiveHoverButton
              text="Home"
              onClick={() => {
                onOpenChange(false);
                scrollToTop();
              }}
              className="w-32"
            />
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Machine Learning</h1>
            
            {/* Access Code Button */}
            <div className="flex justify-center mb-8">
              <a 
                href="https://github.com/Romain-Couyoumtzelis/machine-learning-for-physicists.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  text="Access Code"
                  icon={<Github className="w-4 h-4" />}
                  className="w-48"
                />
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Overview</h2>
              <div className="space-y-2 text-base">
                <p><strong>Course:</strong> Machine Learning for Physicists</p>
                <p><strong>Institution:</strong> EPFL – Section of Quantum Science and Engineering</p>
                <p><strong>Semester:</strong> Fall 2024</p>
                <p><strong>Team:</strong> Alone</p>
                <p><strong>Skills:</strong> Python programming, machine learning algorithms, statistical modeling, data preprocessing, linear classification, clustering techniques, neural networks, quantum state tomography</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={logpredImg} 
                alt="Log-Transformed vs No-Log-Transformed Test Data" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={trainlossImg} 
                alt="Training Loss" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Project Objective</h2>
              <p className="text-base leading-relaxed">
                We developed a comprehensive analysis framework to explore machine learning applications in physics, focusing on linear classification, clustering Gaussian mixtures, and quantum state tomography. The project utilizes synthetic and real datasets (e.g., SUSY dataset, quantum state distributions) to train models, perform Gibbs sampling, and implement neural networks for probability distribution fitting. A critical feature includes validating model performance against ground truth data, ensuring accurate representation of physical systems, with robust evaluation metrics studied in the assignments.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Highlights</h2>
            <ul className="space-y-3 text-base list-disc list-inside">
              <li>The project processes datasets using Python libraries like NumPy, Pandas, Scikit-learn, and Matplotlib for data manipulation and visualization.</li>
              <li>Implements loss functions (e.g., LASSO, Ridge) and gradient descent variants for linear classification on the SUSY dataset.</li>
              <li>Utilizes Gibbs sampling for clustering Gaussian mixtures, optimizing posterior distributions with progress monitoring.</li>
              <li>Employs neural networks with PyTorch for quantum state tomography, training on binary measurement outcomes to predict probability distributions.</li>
              <li>Incorporates log transformations and validation metrics to enhance model accuracy, with runtime optimization.</li>
              <li>Leverages scientific computing tools for optimization and ensures compatibility with quantum state data formats (e.g., target_state files).</li>
            </ul>
          </div>

          {/* Epochs Image */}
          <div className="bg-card/50 p-8 rounded-lg">
            <img 
              src={epochsImg} 
              alt="Training and Validation Loss per Epochs" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
