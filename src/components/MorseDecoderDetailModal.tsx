import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeft, Home, FileText, Github } from "lucide-react";
import morseImg from "@/assets/morse.png";
import signalsImg from "@/assets/signals.png";
import setupImg from "@/assets/setup.png";
import morsediagImg from "@/assets/morsediag.png";

interface MorseDecoderDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MorseDecoderDetailModal({ open, onOpenChange }: MorseDecoderDetailModalProps) {
  const handleBack = () => {
    onOpenChange(false);
  };

  const handleHome = () => {
    onOpenChange(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto p-0">
        <div className="sticky top-0 bg-background z-10 p-6 pb-4 flex justify-between items-center border-b">
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
          <h1 className="text-4xl font-bold text-center mb-8">Morse Decoder</h1>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1EzBD3_ziMCXaRIOQfR5cNwLoco1IUwzF/view?usp=sharing"
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
              href="https://github.com/Romain-Couyoumtzelis/morse-code-reader.git"
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
                <p><strong>Course:</strong> Microcontrollers and Digital Systems (MICRO-210)</p>
                <p><strong>Institution:</strong> EPFL – School of Engineering</p>
                <p><strong>Semester:</strong> Spring 2023</p>
                <p><strong>Team:</strong> Group of 2 students</p>
                <p><strong>Skills:</strong> Low-level AVR assembly programming, interrupt-driven systems, IR communication, custom peripheral drivers, embedded UI design, real-time signal decoding</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={morseImg} 
                alt="Morse Decoder" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={signalsImg} 
                alt="Signal Diagram" 
                className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Project Objective</h2>
              <p className="text-base leading-relaxed">
                The aim of this project was to build a portable Morse code reader designed to help non-verbal users communicate via a self-contained embedded system. The device allows a user to input Morse code by hand movements, decode the sequence in real time, and display the resulting characters on an LCD screen. The entire project was implemented using the ATmega128L microcontroller, with peripheral interfacing and code written entirely in AVR assembly.
              </p>
            </div>
          </div>

          {/* Technical Highlights Section */}
          <div className="bg-card/50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6 text-base mb-8">
              <ul className="space-y-3 list-disc list-inside">
                <li>Morse input captured using a distance sensor (Sharp GP2Y0A21) detecting hand proximity for short and long pulses</li>
                <li>Decoding follows international Morse code standards with signal timing modifiable through a prescaler</li>
                <li>LCD display (Hitachi 2×16) used to render the decoded message and menu states</li>
                <li>User can control prescaler and scroll through message using an IR remote (RC5 protocol) and rotary encoder</li>
                <li>EEPROM and memory-mapped SRAM used for dynamic data storage and efficient lookup access</li>
              </ul>
              <ul className="space-y-3 list-disc list-inside">
                <li>Binary encoding of Morse sequences enables fast ASCII lookup using a 2D table in SRAM</li>
                <li>External interrupt (INT7) used for asynchronous IR remote control events</li>
                <li>Timer overflow interrupt (TIM0_OVF) manages real-time sampling and signal decoding</li>
                <li>Fully modular program structure with reusable drivers for all peripherals (LCD, encoder, IR receiver, distance sensor)</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img 
                  src={setupImg} 
                  alt="Project Setup" 
                  className="max-w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src={morsediagImg} 
                  alt="Morse Diagram" 
                  className="max-w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
