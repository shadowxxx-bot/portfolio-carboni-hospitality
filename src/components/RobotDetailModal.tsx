import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import robotImg from "@/assets/robot.png";
import schemaImg from "@/assets/schema.png";
import diagrammeImg from "@/assets/diagramme.png";

interface RobotDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RobotDetailModal({ open, onOpenChange }: RobotDetailModalProps) {
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
          <DialogTitle>Autonomous Robot</DialogTitle>
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
          <h1 className="text-4xl font-bold text-center mb-8">Autonomous Robot</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1sdHzWUDrmwMMgEfu4LF9SlBz5kU1KWQL/view?usp=sharing"
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
              href="https://github.com/Romain-Couyoumtzelis/epuck2-autonomous-delivery.git"
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
                <p><strong>Course:</strong> Embedded Systems and Robotics (Micro-315)</p>
                <p><strong>Institution:</strong> EPFL – Section de Microtechnique</p>
                <p><strong>Semester:</strong> Spring 2024</p>
                <p><strong>Team:</strong> Group of 2 students</p>
                <p><strong>Skills:</strong> Multithreaded embedded C programming, real-time systems, sensor fusion, finite-state machines, camera-based navigation, infrared proximity sensing, robot behavior logic</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={robotImg} 
                alt="Autonomous Robot" 
                className="max-w-full h-auto object-contain rounded-lg scale-110"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={schemaImg} 
                alt="Robot Navigation Schema" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                We developed a complete autonomous behavior for the e-puck2 robot to simulate meal tray delivery in a prison environment. The robot follows color-coded instructions printed on the ground, detects the proximity of cell doors, and performs delivery maneuvers with specific sequences. A critical safety feature allows the robot to enter an emergency standby state during unexpected events (e.g., riot alerts), ensuring secure deactivation. The goal was to implement a modular, robust, and responsive multi-threaded control system based on the peripherals studied in earlier labs.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6 text-base">
              <ul className="space-y-3 list-disc list-inside">
                <li>The robot navigates using colored lines read through a mirror-mounted camera aimed at the ground.</li>
                <li>Each color encodes a behavior: red (deliver tray), blue (return to main line), green (switch row), white (emergency stop).</li>
                <li>Infrared proximity sensors IR4 and IR5 detect correct delivery distance to avoid collisions with doors.</li>
                <li>Threaded architecture: three threads continuously handle camera input, proximity detection, and movement FSM.</li>
                <li>The robot uses relative rotations (π/2 and π) and straight movements, defined in negative velocity due to the rear-facing camera.</li>
              </ul>
              <ul className="space-y-3 list-disc list-inside">
                <li>Finite state machine governs all transitions: GO_STRAIGHT, DELIVERY, RETURN, CHANGE_ROW, EMERGENCY.</li>
                <li>Inter-thread communication via semaphores and message buses ensures synchronized response to visual and distance events.</li>
                <li>Scheduler priorities were tuned to prioritize real-time motion decisions for responsiveness.</li>
                <li>Memory usage optimized: 8.8% Flash and 13.16% RAM with dedicated stack sizes per thread (1024, 512, 128 bytes).</li>
                <li>3D-printed PLA extension ring supports the mirror above the robot, improving floor-based color detection.</li>
              </ul>
            </div>
          </div>

          {/* Technical Diagrams */}
          <div className="bg-card/50 p-8 rounded-lg">
            <img 
              src={diagrammeImg} 
              alt="Technical Diagrams" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
