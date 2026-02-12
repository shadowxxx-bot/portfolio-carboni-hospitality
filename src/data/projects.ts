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
    title: "Hotel Asset Management - Schwarzer Bock Hotel Repositioning Plan",
    oneLiner: "10-year asset management plan for a 142-room heritage hotel in Wiesbaden, Germany \u2014 repositioning, CAPEX phasing, and exit valuation for a US private equity fund.",
    featured: true,
    cardContext: "EHL \u2014 9502AC Hotel Asset Management, Fall 2025",
    cardBullets: [
      "Built the current and forecasted P&L and led the full CAPEX plan",
      "Performed the hotel valuation (NPV / IRR / exit cap rate) and contributed to the final presentation",
    ],
    cardDeliverable: "Executive summary, presentation slides, and Excel financial model",
    tags: ["Asset Management", "Excel", "Forecasting", "CAPEX Planning", "Hotel Valuation", "Financial Modeling", "P&L Analysis", "Sensitivity Analysis"],
    context: "Group project for the 9502AC Hotel Asset Management course at EHL (Fall 2025). Worked in a team of 8 as consultants for a US private equity fund that acquired a 142-room Radisson Blu (Schwarzer Bock) in Wiesbaden, Germany for \u20AC21M, with a 10-year investment horizon.",
    objective: "Develop a comprehensive asset management plan to enhance the hotel\u2019s performance, strengthen its market positioning, and maximise exit value over 10 years.",
    contribution: [
      "Built the current P&L and forecasted P&L (10-year horizon)",
      "Led the full CAPEX plan: scoping, costing, and phasing across 5 renovation clusters",
      "Performed the hotel valuation model (NPV, IRR, exit cap rate, sensitivity analysis)",
      "Contributed to the final presentation delivery to the evaluation panel",
    ],
    method: [
      "Market and comp-set analysis with SWOT and performance benchmarking (STR data)",
      "Bottom-up P&L forecasting with scenario analysis and sensitivity testing (\u00B13% ADR / \u00B13pp occupancy)",
      "CAPEX planning, phasing (2026\u20132028), and hotel valuation using NPV / IRR / exit cap rate",
    ],
    deliverables: [
      { label: "Slides / Presentation", href: "https://drive.google.com/file/d/1pT0Pm88e8Ph651hMEiD5PZ3eEI3TKukS/view?usp=drive_link" },
      { label: "Executive Summary (PDF)", href: "https://drive.google.com/file/d/1O05-_nBk63YlXsygxrXz19SaIM3QhD7J/view?usp=drive_link" },
      { label: "Download Excel Model", href: "/files/team5_hotel_asset_management_model.xlsx" },
    ],
    results: [
      "Recommended rebranding from Radisson Blu to MGallery (Accor soft-brand franchise) to leverage the hotel\u2019s heritage and Wiesbaden\u2019s wellness positioning",
      "\u20AC3.73M phased CAPEX plan (2026\u20132028) delivering a projected exit value of \u20AC34.1M (\u20AC13.2M uplift vs. no-CAPEX scenario)",
      "Base-case IRR of 22% with 5.8-year payback; RevPAR projected to grow +51% (\u20AC90 \u2192 \u20AC135 by 2035)",
      "F&B activation (brasserie, caf\u00E9, room service) generated the highest incremental ROI (509%), while rooms renovation was the primary profit driver",
    ],
  },
  {
    slug: "real-estate-finance",
    title: "Real Estate Finance \u2014 Structuring a Hotel Transaction for a PEREF",
    oneLiner: "10-year DCF valuation and leveraged investment analysis of The Corner London City for a Private Equity Real Estate Fund.",
    featured: true,
    cardContext: "EHL \u2014 Real Estate Finance, Fall 2025",
    cardBullets: [
      "Built the Excel financial model (preliminary analysis, market valuation, investment scenarios)",
      "Assessed leveraged returns across three LTV structures against PEREF return thresholds",
    ],
    cardDeliverable: "Investment report (PDF) and full Excel financial model",
    tags: ["Real Estate Finance", "Excel", "DCF Valuation", "Financial Modeling", "Investment Analysis", "Market Valuation", "Leveraged Returns", "Sensitivity Analysis"],
    context: "Term project for the Real Estate Finance course at EHL (Fall 2025). Worked in a team of 6 as the investment analyst team of a Private Equity Real Estate Fund (PEREF), tasked with evaluating the acquisition of The Corner London City, a 183-room upper-midscale hotel in London\u2019s Whitechapel district.",
    objective: "Estimate the market value of The Corner London City via a 10-year DCF and assess whether the leveraged acquisition meets the PEREF\u2019s minimum 10% total return target across three LTV scenarios (50% / 60% / 70%).",
    contribution: [
      "Primarily built the Excel financial model underpinning the entire analysis",
      "Developed the \u201CPreliminary Analysis\u201D tab (cap rate estimation, ADR growth rate, market statistics)",
      "Developed the \u201CMarket Valuation\u201D tab (10-year DCF with property-specific cash flow projections)",
      "Contributed to part of the \u201CInvestment Valuation\u201D analysis (leveraged return scenarios)",
    ],
    method: [
      "Preliminary analysis: ADR benchmarking, four-factor ADR growth formula, cap rate estimation via risk-premium and cap-rate approaches",
      "Market valuation: 10-year DCF with STR profitability benchmarks, property-specific adjustments, and direct capitalisation for exit pricing",
      "Investment analysis: leveraged before-tax IRR, M-IRR, and NPV across three LTV scenarios (50% / 60% / 70%) benchmarked against PEREF return thresholds",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "/files/team5_ref_report.pdf" },
      { label: "Download Excel Model", href: "/files/team5_ref_financial_model.xlsx" },
    ],
    results: [
      "DCF market value of \u00A343.2M (going-in cap rate 3.94%, property discount rate 5.69%); negotiated purchase price of \u00A338.9M (10% acquisition discount)",
      "Unlevered IRR of 6.21% \u2014 already below the PEREF\u2019s 10% minimum return target before any financing costs",
      "Increasing leverage (50% \u2192 70% LTV) consistently reduced equity returns (levered IRR from 5.93% to 4.44%), confirming negative leverage as borrowing costs exceeded the asset\u2019s unlevered yield",
      "Recommended against the acquisition for a PEREF; the asset\u2019s stable income profile is better suited for a core or core-plus investor",
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
