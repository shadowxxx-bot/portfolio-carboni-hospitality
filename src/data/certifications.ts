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
    name: "P&G CEO Challenge — Leadership Certificate",
    organization: "Procter & Gamble",
    date: "2024",
    proof: "Leadership fundamentals and teamwork principles through P&G's competitive business simulation among top European students.",
    certificateLink: "https://drive.google.com/file/d/1PDQmgCIEwZNphdr8My6OVJKiR64y7egJ/view?usp=sharing",
    logo: "/logos/pg.svg",
    logoAlt: "P&G logo",
  },
  {
    name: "JPMorgan Chase — Investment Banking Job Simulation",
    organization: "JPMorgan Chase & Co. / Forage",
    date: "2024",
    proof: "M&A target screening and DCF valuation with scenario adjustments; produced a client-ready 2-pager.",
    certificateLink: "https://drive.google.com/file/d/15qJeLDTf0uCOZEIcZJINLqahNIT_2vRU/view?usp=drive_link",
    logo: "/logos/forage.svg",
    logoAlt: "Forage logo",
  },
  {
    name: "AmplifyMe — Investment Banking Simulation (Level 4)",
    organization: "AmplifyMe",
    date: "2024",
    proof: "Investment banking simulation covering market making, P&L management, and risk assessment across multiple trading rounds.",
    certificateLink: "https://drive.google.com/file/d/1dw65g8gD09IKoELGGjGGHiiimTCPAY58/view?usp=drive_link",
    logo: "/logos/amplifyme.svg",
    logoAlt: "AmplifyMe logo",
  },
];
