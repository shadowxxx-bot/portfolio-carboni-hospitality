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
    role: "Intern — Finance & Operations",
    company: "Placeholder Company",
    dates: "Jun 2024 – Aug 2024",
    location: "Geneva, Switzerland",
    bullets: [
      "Supported monthly financial reporting and variance analysis for a portfolio of 3 properties",
      "Assisted in budgeting and forecasting using Excel models and Power BI dashboards",
      "Coordinated with operations teams to streamline invoice processing and AP workflows",
      "Prepared board-ready presentation materials for quarterly investor updates",
    ],
    tags: ["Financial Reporting", "Excel", "Power BI", "Budgeting"],
  },
  {
    role: "Guest Relations Intern",
    company: "Placeholder Hotel",
    dates: "Jan 2024 – Apr 2024",
    location: "Lausanne, Switzerland",
    bullets: [
      "Managed front-desk operations for a 120-room upscale property during peak season",
      "Handled guest complaints and escalations, achieving a 95% satisfaction recovery rate",
      "Collaborated with revenue management on upselling strategies (+12% ancillary revenue)",
    ],
    tags: ["Hospitality Operations", "Guest Relations", "Revenue Management"],
  },
  {
    role: "Team Lead — Student Association",
    company: "EHL Finance Club",
    dates: "Sep 2023 – Jun 2024",
    location: "Lausanne, Switzerland",
    bullets: [
      "Led a team of 8 members organising finance workshops and industry speaker events",
      "Managed a CHF 5,000 budget and secured 2 new corporate sponsorships",
      "Increased event attendance by 40% through targeted social media campaigns",
    ],
    tags: ["Leadership", "Event Management", "Budgeting", "Marketing"],
  },
];
