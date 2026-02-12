import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import alarmImg from "@/assets/alarm.png";
import logisimImg from "@/assets/logisim.png";

interface AlarmClockDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AlarmClockDetailModal({ open, onOpenChange }: AlarmClockDetailModalProps) {
  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0 will-change-transform scroll-smooth">
        <VisuallyHidden>
          <DialogTitle>Digital Alarm Clock</DialogTitle>
        </VisuallyHidden>
        <div className="sticky top-0 bg-background z-10 p-6 pb-4 flex justify-between items-center border-b will-change-transform">
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
          <h1 className="text-4xl font-bold text-center mb-8">Digital Alarm Clock</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1EWW4k8MR6sUhNjDukXa3A7WVPP2NyhfP/view?usp=sharing"
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
              href="https://github.com/Romain-Couyoumtzelis/digital-alarm-clock-fpga.git"
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
                <p><strong>Course:</strong> Logic Systems (EE110 / EE207)</p>
                <p><strong>Institution:</strong> EPFL – Section de Microtechnique</p>
                <p><strong>Semester:</strong> Fall 2022</p>
                <p><strong>Team:</strong> Group of 2 students</p>
                <p><strong>Skills:</strong> Finite state machine design, synchronous digital logic, FPGA programming, peripheral interfacing, user interface logic, debounce filtering, modular circuit development (Logisim-evolution)</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={alarmImg} 
                alt="Digital Alarm Clock" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
            <p className="text-base leading-relaxed mb-8">
              The goal of this project was to develop a fully functional digital travel alarm clock implemented on an FPGA, with minimal input devices and limited display resources. Using only a few buttons and DIP switches, and six 7-segment displays, the system was required to include not only a clock and alarm, but also extended features such as stopwatch, timer, custom melodies, and additional user-friendly functions. The system was built entirely in Logisim-evolution and deployed on the DE10-Lite board with a mandatory external peripheral board including a buzzer and rotary encoder.
            </p>

            <div className="flex items-center justify-center">
              <img 
                src={logisimImg} 
                alt="Logisim Circuit Diagram" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6 text-base">
              <ul className="space-y-3 list-disc list-inside">
                <li>Main control via a finite-state machine with 5 modes: Alarm, Stopwatch, Timer, Time Setup, Clock Display</li>
                <li>Navigation managed with a rotary encoder and selection confirmed with its integrated push-button</li>
                <li>Mode selection displayed through a set of 5 dedicated LEDs; navigation occurs in cyclic order with direction-sensitive rotation</li>
                <li>Settings for time, alarm, and timer adjusted using DIP switches and two buttons (B1 for tens, B2 for units)</li>
                <li>Memory registers enable preserving alarm data across mode transitions</li>
                <li>Custom 4-bit counters developed using FSMs to avoid built-in Logisim components</li>
              </ul>
              <ul className="space-y-3 list-disc list-inside">
                <li>Input filtering circuit built using D flip-flops and SR-latch structure to eliminate encoder bouncing</li>
                <li>Musical melodies (Harry Potter and Für Elise) triggered by alarm and timer completion</li>
                <li>Display inversion feature implemented using DIP switch to accommodate different clock orientations</li>
                <li>Avoided gated clocks using edge detectors and One-Tic signal converters for stable FSM transitions</li>
                <li>All modules integrated into a general control architecture with hierarchical FSM delegation</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
