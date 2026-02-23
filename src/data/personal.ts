// ── Personal page data ──
// Edit this file to update the Personal page content.

const base = import.meta.env.BASE_URL;

export interface Activity {
  title: string;
  description: string;
  image: string | null;
  imageAlt: string;
  imagePosition?: string;
  tags: string[];
}

export const personal = {
  whatItBringsMe: `Outside of work and academics, I dedicate time to pursuits that sharpen discipline, resilience, and structured thinking. From multi-day treks in the Swiss Alps to building an FPV drone from scratch and years of competitive swimming, each activity has reinforced transferable skills I rely on professionally: planning under uncertainty, sustained focus, and iterative problem-solving. My current goal is to complete an Ironman, a challenge that demands consistency across multiple disciplines and long-term commitment.`,

  // Order matters: used for the zigzag collage (right → left → right)
  activities: [
    {
      title: "Trekking",
      description:
        "Multi-day treks across the Swiss Alps with bivouac setups. Most notable ascent: Haute Cime (Dents du Midi) at 3,257 m.",
      image: `${base}personal/trek.jpg`,
      imageAlt: "Trekking in the Swiss Alps, Dents du Midi",
      imagePosition: "left center",
      tags: ["Planning", "Risk Assessment", "Self-Reliance"],
    },
    {
      title: "FPV Drone Build",
      description:
        "Built a custom FPV racing drone from scratch: soldering ESCs, tuning PID loops, and learning to fly through simulators.",
      image: `${base}personal/drone.jpg`,
      imageAlt: "FPV drone build",
      tags: ["Self-Learning", "Troubleshooting", "Iterating Through Failure"],
    },
    {
      title: "Competitive Swimming",
      description:
        "Eight years of competitive training, reaching national-level competitions and earning multiple medals.",
      image: `${base}personal/swimming.jpg`,
      imageAlt: "Competitive swimming",
      imagePosition: "right center",
      tags: ["Discipline", "Resilience", "Long-Term Commitment"],
    },
  ] as Activity[],
};
