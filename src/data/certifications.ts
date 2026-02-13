// ── Certifications data ──
// Edit this file to update your certifications.

export interface Certification {
  name: string;
  organization: string;
  date: string;
  proof: string;
  certificateLink: string;
  logo: string;
  logoAlt: string;
}

export const certifications: Certification[] = [
  {
    name: "P&G CEO Challenge \u2014 Leadership Certificate",
    organization: "Procter & Gamble",
    date: "September 2024",
    proof: "Leadership fundamentals and teamwork principles through P&G\u2019s competitive business simulation among top European students.",
    certificateLink: "/certificates/pg_leadership_skills.pdf",
    logo: "/logos/pg.jpg",
    logoAlt: "P&G logo",
  },
  {
    name: "JPMorgan Chase \u2014 Investment Banking Job Simulation",
    organization: "JPMorgan Chase & Co. / Forage",
    date: "August 2024",
    proof: "M&A target screening and DCF valuation with scenario adjustments; produced a client-ready 2-pager.",
    certificateLink: "/certificates/jpmorgan_forage_simulation.pdf",
    logo: "/logos/forage.png",
    logoAlt: "Forage logo",
  },
  {
    name: "AmplifyMe \u2014 Investment Banking Simulation (Level 4)",
    organization: "AmplifyMe",
    date: "July 2024",
    proof: "Investment banking simulation covering market making, P&L management, and risk assessment across multiple trading rounds.",
    certificateLink: "/certificates/amplifyme_investment_banking.pdf",
    logo: "/logos/amplifyme.png",
    logoAlt: "AmplifyMe logo",
  },
];
