// ── Projects data ──
// Edit this file to update all project content.
// isFeatured: true → shown on Home + top of Projects page
// isFeatured: false → shown in "Secondary Projects" section

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  featured: boolean;
  // Card fields
  cardContext: string;
  cardBullets: [string, string];
  cardDeliverable: string;
  tags: string[];
  // Detail page fields
  context: string;
  objective: string;
  contribution: string[];
  method: string[];
  deliverables: { label: string; href: string }[];
  results: string[];
  images?: { src: string; alt: string }[];
  evidencePackLink?: string;
}

export const projects: Project[] = [
  // ── Featured Projects ──
  {
    slug: "hotel-asset-management",
    title: "Hotel Asset Management",
    oneLiner: "Owner-perspective analysis of a luxury hotel asset's financial performance and strategic positioning.",
    featured: true,
    cardContext: "EHL — Asset Management course, 2024",
    cardBullets: [
      "Built a full asset-level P&L and benchmarked KPIs against comp set",
      "Formulated repositioning recommendations backed by DCF sensitivity analysis",
    ],
    cardDeliverable: "30-page asset management report with financial appendices",
    tags: ["Asset Management", "DCF", "KPI Benchmarking", "Excel"],
    context: "Semester-long project for the Hotel Asset Management course at EHL. Worked in a team of 4 to analyse a luxury property from the owner's perspective, assessing operational efficiency, market positioning, and long-term value creation.",
    objective: "Evaluate the asset's financial health and deliver actionable recommendations to the ownership group.",
    contribution: [
      "Led the financial analysis workstream: P&L reconstruction, RevPAR indexing, GOP benchmarking",
      "Built a 10-year DCF model with scenario analysis (base / bull / bear)",
      "Drafted the executive summary and presented findings to the class panel",
      "Coordinated data collection across STR reports, brand standards, and market comps",
    ],
    method: [
      "Bottom-up P&L analysis using uniform system of accounts (USALI)",
      "Competitive benchmarking via STR data and public filings",
      "DCF valuation with WACC estimation and sensitivity tables",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "#" },
    ],
    results: [
      "Identified a 12% GOP margin gap vs. comp set, traced to above-market energy costs and F&B labour inefficiency",
      "Recommended a phased rooms renovation yielding an estimated 8–10% RevPAR uplift",
      "DCF base-case valuation within 5% of instructor benchmark",
    ],
  },
  {
    slug: "real-estate-finance",
    title: "Real Estate Finance — Hotel Investment",
    oneLiner: "Investment analysis and capital structuring for a hotel acquisition opportunity.",
    featured: true,
    cardContext: "EHL — Real Estate Finance course, 2024",
    cardBullets: [
      "Structured a leveraged acquisition with detailed debt/equity modelling",
      "Performed IRR and equity multiple analysis across financing scenarios",
    ],
    cardDeliverable: "Investment memo with full financial model (Excel)",
    tags: ["Real Estate Finance", "LBO", "IRR Analysis", "Capital Structure"],
    context: "Course project focused on evaluating a hotel acquisition from an investor's standpoint. The analysis covered deal structuring, financing alternatives, and return sensitivity under different macro assumptions.",
    objective: "Determine whether the acquisition meets target return thresholds and recommend an optimal capital structure.",
    contribution: [
      "Built the full acquisition model: sources & uses, debt sizing, cash flow waterfall",
      "Modelled three financing scenarios (senior-only, mezzanine layer, JV equity structure)",
      "Ran IRR / equity multiple / payback sensitivity on RevPAR growth, exit cap rate, and LTV",
      "Authored the investment memo narrative and risk section",
    ],
    method: [
      "Pro-forma cash flow projection based on stabilised-year assumptions",
      "Debt capacity analysis using DSCR and LTV constraints",
      "Monte Carlo–inspired scenario matrix for key return drivers",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "#" },
      { label: "View Model (Excel)", href: "#" },
    ],
    results: [
      "Base-case levered IRR of 14.2% with 2.1x equity multiple over a 7-year hold",
      "Mezzanine scenario improved IRR to 17.8% but increased downside risk materially",
      "Recommended senior-only structure for risk-adjusted optimality",
    ],
  },
  {
    slug: "corporate-finance",
    title: "Corporate Finance — Excel Anomalies Analysis",
    oneLiner: "Forensic-style analysis of financial statement anomalies using advanced Excel techniques.",
    featured: true,
    cardContext: "EHL — Corporate Finance course, 2025",
    cardBullets: [
      "Detected irregularities in reported financials through ratio trend analysis",
      "Automated anomaly flagging with conditional formatting and VBA macros",
    ],
    cardDeliverable: "Annotated Excel workbook with anomaly dashboard",
    tags: ["Corporate Finance", "Excel / VBA", "Financial Analysis", "Forensic Accounting"],
    context: "Individual project requiring deep-dive analysis of a company's financial statements to identify reporting anomalies, inconsistencies, and potential red flags — inspired by real-world forensic accounting practice.",
    objective: "Build a reusable Excel framework to systematically detect and document financial statement irregularities.",
    contribution: [
      "Designed the anomaly detection framework: Benford's Law test, ratio trend deviation, horizontal/vertical analysis",
      "Wrote VBA macros for automated flagging and conditional highlighting",
      "Documented each anomaly with explanatory notes and materiality assessment",
      "Created a summary dashboard for quick visual triage",
    ],
    method: [
      "Multi-period horizontal and vertical common-size analysis",
      "Statistical deviation tests (Benford's Law, Z-score outlier detection)",
      "Cross-referencing with footnotes and MD&A disclosures",
    ],
    deliverables: [
      { label: "View Workbook (Excel)", href: "#" },
    ],
    results: [
      "Flagged 7 material anomalies across revenue recognition, inventory valuation, and off-balance-sheet items",
      "Framework reusable for any public-company 10-K analysis",
      "Received top marks from the instructor for methodology rigour",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management Simulation",
    oneLiner: "Full project lifecycle simulation with Gantt scheduling, resource levelling, and earned value tracking.",
    featured: true,
    cardContext: "EHL — Project Management course, 2024",
    cardBullets: [
      "Built a complete Gantt chart with critical path and resource allocation",
      "Tracked EVM metrics (CPI, SPI) and corrected schedule variance mid-project",
    ],
    cardDeliverable: "MS Project plan + EVM tracking report",
    tags: ["Project Management", "Gantt", "EVM", "MS Project", "Risk Management"],
    context: "Team-based simulation requiring full project planning, execution tracking, and corrective action over a simulated 6-month construction/renovation project. Delivered under realistic time pressure with evolving scope changes.",
    objective: "Deliver the project on time and within budget while maintaining scope, using formal PM methodologies.",
    contribution: [
      "Created the WBS and activity sequencing (FS/SS/FF dependencies)",
      "Built the Gantt chart and performed critical path analysis",
      "Managed resource levelling to resolve over-allocation conflicts",
      "Tracked Earned Value (CPI, SPI, EAC) and led corrective action planning",
      "Prepared the final lessons-learned report",
    ],
    method: [
      "Work Breakdown Structure → activity definition → sequencing → scheduling",
      "Resource histogram analysis and levelling within MS Project",
      "Earned Value Management at bi-weekly control points",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "#" },
      { label: "View Evidence Pack (PDF)", href: "#" },
    ],
    results: [
      "Finished the simulation 3 days ahead of schedule with CPI = 1.04",
      "Identified and mitigated a 2-week schedule slippage at week 8 through fast-tracking",
      "Final EAC was 2.1% under original BAC",
    ],
    images: [
      { src: "/screenshots/pm-evm.png", alt: "Earned Value Management chart" },
      { src: "/screenshots/pm-gantt.png", alt: "Gantt chart with critical path" },
      { src: "/screenshots/pm-resources.png", alt: "Resource allocation histogram" },
    ],
    evidencePackLink: "#",
  },

  // ── Secondary Projects ──
  {
    slug: "corporate-strategy",
    title: "Corporate Strategy — Renovation Recommendations",
    oneLiner: "One-pager strategic recommendation for a hotel renovation investment.",
    featured: false,
    cardContext: "EHL — Corporate Strategy course, 2024",
    cardBullets: [
      "Analysed competitive positioning and market gap for renovation scope",
      "Delivered a concise one-pager with ROI-backed recommendations",
    ],
    cardDeliverable: "Executive one-pager with financial justification",
    tags: ["Strategy", "Competitive Analysis", "ROI"],
    context: "Individual assignment requiring a concise, board-ready recommendation on whether and how to renovate a mid-scale hotel property facing competitive pressure.",
    objective: "Deliver a clear, evidence-based renovation recommendation in one-pager format.",
    contribution: [
      "Conducted competitive positioning analysis (perceptual map, SWOT)",
      "Estimated renovation ROI using payback period and incremental RevPAR assumptions",
      "Synthesised findings into a single-page executive brief",
    ],
    method: [
      "Competitive benchmarking and perceptual mapping",
      "Incremental cash flow analysis for renovation scenarios",
      "Executive summary writing following McKinsey pyramid principle",
    ],
    deliverables: [
      { label: "View One-Pager (PDF)", href: "#" },
    ],
    results: [
      "Recommended a targeted rooms-only renovation with 3.2-year payback",
      "Identified F&B as a lower-priority investment given market saturation",
    ],
  },
  {
    slug: "revenue-management",
    title: "Revenue Management — Simulation Analysis",
    oneLiner: "Pricing strategy optimisation through a hotel revenue management simulation.",
    featured: false,
    cardContext: "EHL — Revenue Management course, 2024",
    cardBullets: [
      "Optimised dynamic pricing across segments using demand forecasting",
      "Analysed simulation results and presented strategy adjustments",
    ],
    cardDeliverable: "Slide deck with pricing strategy and simulation results",
    tags: ["Revenue Management", "Pricing", "Demand Forecasting", "Simulation"],
    context: "Multi-round revenue management simulation where teams competed to maximise RevPAR by setting rates, managing inventory, and responding to demand shifts in real time.",
    objective: "Maximise RevPAR and market share through optimal pricing and inventory allocation.",
    contribution: [
      "Designed the pricing ladder and segment-specific rate fences",
      "Forecasted demand by segment using historical pick-up curves",
      "Adjusted strategy between rounds based on competitive intelligence",
    ],
    method: [
      "Demand forecasting via booking pace and pick-up analysis",
      "Price elasticity estimation by segment",
      "Post-round debrief and strategy pivot documentation",
    ],
    deliverables: [
      { label: "View Slides (PDF)", href: "#" },
    ],
    results: [
      "Achieved top-3 RevPAR performance across 8 simulation rounds",
      "Identified optimal BAR positioning relative to comp set by day-of-week",
    ],
  },
  {
    slug: "leadership",
    title: "Leadership — Team Dynamics Report",
    oneLiner: "Reflective analysis of leadership styles and team dynamics in a group project setting.",
    featured: false,
    cardContext: "EHL — Leadership & Organisational Behaviour, 2024",
    cardBullets: [
      "Analysed team dynamics using Belbin and Tuckman frameworks",
      "Produced a reflective report with video presentation",
    ],
    cardDeliverable: "Written report + 10-min video presentation",
    tags: ["Leadership", "Team Dynamics", "Belbin", "Communication"],
    context: "Reflective project analysing leadership dynamics observed during a semester-long team assignment. Combined academic frameworks with real observations to draw actionable lessons.",
    objective: "Demonstrate understanding of leadership theory through applied self- and team-analysis.",
    contribution: [
      "Led the Belbin role mapping and conflict analysis sections",
      "Conducted peer interviews and synthesised qualitative data",
      "Co-produced the reflective video presentation",
    ],
    method: [
      "Belbin team role inventory + Tuckman stage analysis",
      "Semi-structured peer interviews (qualitative)",
      "Reflective journaling over 12 weeks",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "#" },
    ],
    results: [
      "Identified a 'missing completer-finisher' gap that explained late deliverables",
      "Proposed concrete team norms adopted by the group for the final project",
    ],
  },
  {
    slug: "international-marketing",
    title: "International Marketing — Festival Antigel",
    oneLiner: "Internationalization strategy for a Geneva-based cultural festival, targeting Lyon as first expansion market.",
    featured: false,
    cardContext: "EHL — BOSC 3 International Marketing Strategy, 2024",
    cardBullets: [
      "Screened three target markets and selected Lyon via macro/micro scoring",
      "Designed an AI-powered mobile app concept as service innovation",
    ],
    cardDeliverable: "Full internationalization report with market analysis",
    tags: ["International Marketing", "Market Analysis", "Strategy", "Service Innovation"],
    context: "Team project developing a comprehensive internationalization plan for Festival Antigel, Geneva's largest pluridisciplinary cultural festival (~3M CHF budget, 80+ events across 40+ venues in February). Faced a saturated Swiss festival market.",
    objective: "Identify the best target market for international expansion and recommend an entry mode with supporting service innovation.",
    contribution: [
      "Conducted macro-economic and micro-economic market screening (Lyon vs. Milan vs. Munich)",
      "Evaluated entry modes (local subsidiary vs. partnerships) with internal/external factor analysis",
      "Designed the AI-powered mobile app concept (personalised recommendations, optimised itineraries, interactive map)",
      "Co-authored the operational recommendations section",
      "Contributed to primary research: survey design (40 respondents) and interview analysis",
    ],
    method: [
      "Weighted scoring model for market selection (macro + micro criteria)",
      "Primary research: qualitative interview with ISTERIA festival director + quantitative survey",
      "Secondary research: press, INSEE data, IFPI music consumption reports",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "https://drive.google.com/file/d/1g64edCTdTbaub_r8GJFBdsFTjTf8MN4G/view?usp=sharing" },
    ],
    results: [
      "Lyon selected as optimal market — strong cultural engagement, Francophone roots, <2h from Geneva",
      "Recommended a local subsidiary for full artistic control over partnerships",
      "App concept validated by survey data: 78% of respondents wanted personalised festival guidance",
      "Operational roadmap included local hiring, agency partnership, and pilot testing at Geneva edition",
    ],
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const secondaryProjects = projects.filter(p => !p.featured);
