// ── Experience data ──
// Edit this file to update your professional experience.
// Entries are displayed in the order listed (put most recent first).

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
  tags: string[];
  reportLink?: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Community Associate Trainee",
    company: "IWG | Regus Airport & Balexert",
    dates: "Feb 2025 \u2013 Aug 2025",
    location: "Geneva, CH",
    bullets: [
      "Supported daily operations across two business centers (300+ clients), managing client requests and administrative follow-up",
      "Maintained accurate records in internal tracking tools",
    ],
    tags: ["Operations", "Client Relations", "Administration"],
  },
  {
    role: "Brand Ambassador",
    company: "Zerokay Sports",
    dates: "Sep 2023 \u2013 Present",
    location: "Geneva, CH",
    bullets: [
      "Led on-campus brand activations at EHL (booth + prize-wheel), engaging students and collecting direct customer feedback",
      "Supported brand visibility and sales through targeted student outreach",
    ],
    tags: ["Marketing", "Brand Activation", "Sales", "Communication"],
  },
  {
    role: "Event Intern",
    company: "H\u00F4tel President",
    dates: "Feb 2023 \u2013 Aug 2023",
    location: "Geneva, CH",
    bullets: [
      "Supported the delivery of high-end private and corporate events (up to 300 guests)",
      "Coordinated suppliers and internal teams to ensure smooth execution under tight deadlines",
    ],
    tags: ["Event Management", "Hospitality", "Coordination", "Logistics"],
  },
  {
    role: "Grenadier Soldier",
    company: "Swiss Army Special Forces",
    dates: "Jan 2022 \u2013 Jul 2022",
    location: "Isone, CH",
    bullets: [
      "Completed Swiss Armed Forces service as a Grenadier, developing discipline, resilience, and the ability to perform under pressure in team-based environments",
    ],
    tags: ["Discipline", "Teamwork", "Resilience", "Leadership"],
  },
];
