// ── Personal page data ──
// Edit this file to update the Personal page content.

export const personal = {
  whatItBringsMe: `Outside of work and academics, I dedicate time to pursuits that sharpen discipline, resilience, and structured thinking. From multi-day treks in the Swiss Alps to building an FPV drone from scratch and years of competitive swimming — each activity has reinforced transferable skills I rely on professionally: planning under uncertainty, sustained focus, and iterative problem-solving. My current goal is to complete an Ironman, a challenge that demands consistency across multiple disciplines and long-term commitment.`,

  activities: [
    {
      title: "Trekking",
      description:
        "I regularly go on multi-day treks — solo or in small groups — with bivouac setups across the Swiss Alps. My most notable ascent is Haute Cime (Dents du Midi) at 3,257 m. These expeditions sharpen planning, risk assessment, and self-reliance in unpredictable conditions.",
      image: "/personal/trek.jpg",
      imageAlt: "Trekking in the Swiss Alps — Dents du Midi",
      imagePosition: "right" as const,
    },
    {
      title: "FPV Drone",
      description:
        "I built a custom FPV racing drone from scratch — from soldering ESCs and flight controllers to tuning PID loops. I learned to fly through simulators before transitioning to real flights. The project taught me rapid self-learning, electronic troubleshooting, and the value of iterating through failure.",
      image: "/personal/drone.jpg",
      imageAlt: "FPV drone build",
      imagePosition: "left" as const,
    },
    {
      title: "Swimming",
      description:
        "I trained competitively for roughly eight years, reaching national-level competitions and earning multiple medals. The discipline required rigorous daily training, mental resilience under pressure, and a long-term commitment to incremental improvement — habits that still define my work ethic today.",
      image: null,
      imageAlt: "Competitive swimming",
      imagePosition: "right" as const,
    },
  ],
};
