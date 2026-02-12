import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import resultsImg from "@/assets/results.png";
import transfoImg from "@/assets/transfo.png";

interface HateSpeechDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HateSpeechDetailModal({ open, onOpenChange }: HateSpeechDetailModalProps) {
  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0 scroll-smooth">
        <div className="sticky top-0 bg-background z-10 p-6 pb-4 flex justify-between items-center border-b will-change-transform [transform:translateZ(0)]">
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

        <div className="p-8 space-y-12">
          {/* Title */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Hate Speech Detection</h1>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1NQsaI41SVYpnsGzOyGuFbrccL7A2IKbx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <InteractiveHoverButton
                  text="Access Report"
                  icon={<FileText className="w-5 h-5" />}
                  className="px-8 py-4 text-lg"
                />
              </a>
              <a
                href="https://github.com/Romain-Couyoumtzelis/DeepDog.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <InteractiveHoverButton
                  text="Access Code"
                  icon={<Github className="w-5 h-5" />}
                  className="px-8 py-4 text-lg"
                />
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="space-y-3">
                <p><span className="font-semibold">Course:</span> EE-559 Deep Learning</p>
                <p><span className="font-semibold">Institution:</span> EPFL – School of Engineering</p>
                <p><span className="font-semibold">Semester:</span> Spring 2025</p>
                <p><span className="font-semibold">Team:</span> Group of 3 students</p>
                <p><span className="font-semibold">Skills:</span> Natural Language Processing, Transformer fine-tuning, Explainable AI, Green AI, parameter-efficient training (LoRA), model evaluation with ERASER metrics</p>
              </div>
            </div>
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img
                src={resultsImg}
                alt="Model Results"
                className="w-full max-w-[500px] rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="bg-card/50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Objective</h2>
            <p className="text-lg leading-relaxed">
              The goal of this project was to design DeepDog, a framework for detecting coded dog whistles in text. Dog whistles are subtle, politically charged expressions that evade standard hate speech filters while conveying harmful meaning to specific groups. The project aimed to build models capable of highlighting the exact tokens that signal hidden bias (rationale prediction), while also reducing the environmental footprint of training. To achieve this, we fine-tuned BERT-based models on the Silent Signals dataset and applied Low-Rank Adaptation (LoRA) to cut trainable parameters, balancing explainability with sustainable AI practices.
            </p>
          </div>

          {/* Technical Highlights Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li><span className="font-semibold">Dataset:</span> Silent Signals (≈16,500 annotated examples of dog whistles from Reddit and U.S. Congress records).</li>
                <li><span className="font-semibold">Models:</span> Fine-tuned BERT, DistilBERT, hateBERT, and HateXplain for token-level rationale prediction.</li>
                <li><span className="font-semibold">Architecture:</span> Pretrained BERT encoder + LoRA adapters in linear layers for parameter-efficient training.</li>
                <li><span className="font-semibold">Metrics:</span> Evaluated explainability with ERASER (IoU, Token F1, AUPRC) and carbon emissions using CodeCarbon.</li>
                <li><span className="font-semibold">Results:</span> Fine-tuned BERT achieved highest rationale accuracy (F1 ≈ 86.7). LoRA reduced trainable parameters by 63–77% and cut emissions nearly 10×. Trade-off: modest drop in rationale accuracy (~10–15% IoU decrease).</li>
                <li><span className="font-semibold">Sustainability:</span> LoRA variants reduced training emissions to the equivalent of ~2–3 km of car travel per run.</li>
                <li><span className="font-semibold">Limitations:</span> Dataset lacked human-annotated rationales; only English-language context was studied.</li>
              </ul>
            </div>
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img
                src={transfoImg}
                alt="Transformer Architecture"
                className="w-full max-w-[500px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
