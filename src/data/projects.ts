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
  coverImage: string;
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
  // Recruiter & ATS fields
  whyItMatters: string[];
  humanSummary: string;
  targetRoles: string[];
  skills: string[];
  tools: string[];
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  topics: string[];
  dateCreated: string;
}

export const projects: Project[] = [
  // ── Featured Projects ──
  {
    slug: "hotel-asset-management",
    coverImage: "/images/projects/hotel-asset-management.png",
    title: "Hotel Asset Management - Schwarzer Bock Hotel Repositioning Plan",
    oneLiner: "10-year asset management plan for a 142-room heritage hotel in Wiesbaden, Germany, covering repositioning, CAPEX phasing, and exit valuation for a US private equity fund.",
    featured: true,
    cardContext: "EHL, Hotel Asset Management, Fall 2025",
    cardBullets: [
      "Built the current and forecasted P&L and led the full CAPEX plan",
      "Performed the hotel valuation (NPV / IRR / exit cap rate) and contributed to the final presentation",
    ],
    cardDeliverable: "Executive summary, presentation slides, and Excel financial model",
    tags: ["Asset Management", "Excel", "Forecasting", "CAPEX Planning", "Hotel Valuation", "Financial Modeling", "P&L Analysis", "Sensitivity Analysis"],
    context: "Group project for the Hotel Asset Management course at EHL (Fall 2025). Worked in a team of 8 as consultants for a US private equity fund that acquired a 142-room Radisson Blu (Schwarzer Bock) in Wiesbaden, Germany for \u20AC21M, with a 10-year investment horizon.",
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
      { label: "Slides / Presentation", href: "/files/ham_presentation.pdf" },
      { label: "Executive Summary (PDF)", href: "/files/ham_executive_summary.pdf" },
      { label: "Download Excel Model", href: "/files/team5_hotel_asset_management_model.xlsx" },
    ],
    results: [
      "Recommended rebranding from Radisson Blu to MGallery (Accor soft-brand franchise) to leverage the hotel\u2019s heritage and Wiesbaden\u2019s wellness positioning",
      "\u20AC3.73M phased CAPEX plan (2026\u20132028) delivering a projected exit value of \u20AC34.1M (\u20AC13.2M uplift vs. no-CAPEX scenario)",
      "Base-case IRR of 22% with 5.8-year payback; RevPAR projected to grow +51% (\u20AC90 \u2192 \u20AC135 by 2035)",
      "F&B activation (brasserie, caf\u00E9, room service) generated the highest incremental ROI (509%), while rooms renovation was the primary profit driver",
    ],
    whyItMatters: [
      "Real-world exposure to investment-grade decision making under private equity constraints",
      "End-to-end ownership perspective, from operations and CAPEX planning to valuation and exit strategy",
      "Directly transferable to consulting, asset management, and investment analyst roles",
    ],
    humanSummary: "This project required combining financial rigor with operational understanding to support investment decisions for a real hotel asset under realistic PE constraints.",
    targetRoles: ["Hotel Asset Manager", "Investment Analyst", "Real Estate Analyst", "Financial Analyst", "Hospitality Consultant"],
    skills: ["P&L Forecasting", "CAPEX Planning", "Hotel Valuation", "NPV / IRR Analysis", "Sensitivity Analysis", "Market Benchmarking", "Financial Modeling"],
    tools: ["Excel", "STR Global", "PowerPoint"],
    keywords: ["hotel asset management", "hospitality consulting", "CAPEX planning", "P&L forecasting", "DCF valuation", "NPV", "IRR", "RevPAR", "hotel repositioning", "private equity hospitality", "exit strategy", "sensitivity analysis", "financial modeling"],
    seoTitle: "Hotel Asset Management \u2013 CAPEX & Valuation | Alexandre Carboni",
    seoDescription: "How I built a 10-year asset management plan for a 142-room heritage hotel: P&L forecasting, \u20AC3.73M CAPEX phasing, and exit valuation (IRR 22%) for a US private equity fund.",
    topics: ["Hotel Asset Management", "Financial Modeling", "Real Estate Investment", "Hospitality Strategy"],
    dateCreated: "2025-12",
  },
  {
    slug: "real-estate-finance",
    coverImage: "/images/projects/real-estate-finance.png",
    title: "Real Estate Finance: Structuring a Hotel Transaction for a PEREF",
    oneLiner: "10-year DCF valuation and leveraged investment analysis of The Corner London City for a Private Equity Real Estate Fund.",
    featured: true,
    cardContext: "EHL, Real Estate Finance, Fall 2025",
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
      "Unlevered IRR of 6.21%, already below the PEREF\u2019s 10% minimum return target before any financing costs",
      "Increasing leverage (50% \u2192 70% LTV) consistently reduced equity returns (levered IRR from 5.93% to 4.44%), confirming negative leverage as borrowing costs exceeded the asset\u2019s unlevered yield",
      "Recommended against the acquisition for a PEREF; the asset\u2019s stable income profile is better suited for a core or core-plus investor",
    ],
    whyItMatters: [
      "Hands-on experience structuring a real hotel transaction from an investor\u2019s perspective",
      "Full DCF modeling with property-specific assumptions, not textbook templates",
      "Practical understanding of leverage mechanics and their impact on equity returns",
    ],
    humanSummary: "This project demanded rigorous financial modeling and critical investment judgment: recommending against the deal was as valuable as recommending for it.",
    targetRoles: ["Real Estate Analyst", "Investment Analyst", "Financial Analyst", "Private Equity Analyst", "Hospitality Finance Analyst"],
    skills: ["DCF Valuation", "Leveraged Returns Analysis", "Cap Rate Estimation", "Financial Modeling", "Investment Analysis", "Market Valuation"],
    tools: ["Excel", "STR Global", "PowerPoint"],
    keywords: ["DCF valuation", "hotel transaction", "private equity real estate", "PEREF", "leveraged returns", "cap rate", "IRR", "LTV scenarios", "hotel acquisition", "investment analysis", "financial modeling", "real estate investment"],
    seoTitle: "Real Estate Finance \u2013 DCF & Hotel Transaction | Alexandre Carboni",
    seoDescription: "How I structured a hotel acquisition analysis for a PE fund: 10-year DCF, cap rate estimation, and leveraged return scenarios across three LTV structures.",
    topics: ["Real Estate Finance", "DCF Valuation", "Hotel Investment", "Private Equity"],
    dateCreated: "2025-12",
  },
  {
    slug: "corporate-finance",
    coverImage: "/images/projects/corporate-finance.jpg",
    title: "Corporate Finance: Market Anomalies",
    oneLiner: "Empirical investigation of three market anomalies (January effect, value effect, and small-cap effect) on the US equity market (2012\u20132025).",
    featured: true,
    cardContext: "EHL, Corporate Finance, Fall 2025",
    cardBullets: [
      "Conducted the empirical analysis of the value effect and extracted data from Refinitiv",
      "Built the presentation slides and presented the empirical findings",
    ],
    cardDeliverable: "Presentation slides and Excel data workbook",
    tags: ["Excel", "Refinitiv", "Empirical Finance", "Market Anomalies", "Value Effect", "Data Analysis", "Portfolio Analysis", "CAPM", "Presentation"],
    context: "Group project for the Corporate Finance course at EHL (Fall 2025). Worked in a team of 6 to investigate whether well-documented market anomalies (the January effect, value effect, and small-cap effect) still generate abnormal returns on the US equity market, combining an academic literature review with original empirical analysis.",
    objective: "Determine whether historical market anomalies persist on the recent US market (2012\u20132025) and can be exploited to generate risk-adjusted excess returns.",
    contribution: [
      "Conducted the empirical analysis of the value effect: sorted 24 US stocks by price-to-book ratio into Value, Neutral, and Growth portfolios and ran CAPM regressions",
      "Extracted the required dataset from Refinitiv (close prices, price-to-book ratios, index data) and supported teammates on the small-cap and January effect analyses",
      "Built the presentation slides and presented the empirical findings and results section",
      "Contributed to the academic literature review on the value effect and its theoretical foundations",
    ],
    method: [
      "Data collection from Refinitiv (daily close prices, P/B ratios, index returns for SPX, RUT, DJI) and sample construction across 2012\u20132025",
      "Portfolio construction and sorting to test each anomaly (e.g., Value/Neutral/Growth by P/B ratio; large-cap vs. small-cap indices; monthly returns by calendar month)",
      "CAPM-based regression analysis to isolate Jensen\u2019s alpha and assess statistical significance of anomaly-driven excess returns",
    ],
    deliverables: [
      { label: "View Slides (PDF)", href: "/files/fe_market_anomalies_slides.pdf" },
      { label: "Download Excel", href: "/files/fe_market_anomalies_data.xlsx" },
    ],
    results: [
      "No statistically significant evidence of the value effect: the Value portfolio\u2019s alpha was positive but non-significant (p-value ~12.5%), while Growth performed similarly",
      "No evidence of the January effect over 2012\u20132025: January returns were not exceptional across SPX, RUT, and DJI, with negative and non-significant CAPM alphas",
      "Small-cap effect hypothesis rejected: small caps exhibited extreme volatility without delivering superior returns, with a statistically null alpha (p-value ~64%)",
      "Overall conclusion consistent with market efficiency: well-documented historical anomalies appear to have weakened on the recent US equity market",
    ],
    whyItMatters: [
      "Applied academic finance theory to real market data with original empirical analysis",
      "Hands-on experience with financial databases and statistical testing used in equity research",
      "Ability to draw investment-relevant conclusions from quantitative evidence",
    ],
    humanSummary: "This project required translating complex statistical outputs into clear, actionable investment insights, a core skill for any analyst role.",
    targetRoles: ["Financial Analyst", "Equity Research Analyst", "Investment Analyst", "Portfolio Analyst"],
    skills: ["Empirical Analysis", "CAPM Regression", "Portfolio Construction", "Data Extraction", "Statistical Testing", "Academic Research"],
    tools: ["Excel", "Refinitiv", "PowerPoint"],
    keywords: ["market anomalies", "January effect", "value effect", "small-cap effect", "CAPM", "Jensen\u2019s alpha", "empirical finance", "portfolio analysis", "equity research", "regression analysis", "quantitative analysis", "market efficiency"],
    seoTitle: "Corporate Finance \u2013 Market Anomalies Study | Alexandre Carboni",
    seoDescription: "How I tested three market anomalies on the US equity market (2012\u20132025) using CAPM regressions, Refinitiv data, and portfolio construction.",
    topics: ["Corporate Finance", "Empirical Finance", "Market Efficiency", "Portfolio Analysis"],
    dateCreated: "2025-12",
  },
  {
    slug: "project-management",
    coverImage: "/images/projects/project-management.jpeg",
    title: "Project Management: AlbaSim Project Manager Simulation",
    oneLiner: "End-to-end management of a simulated 6-month hotel F&B renovation project (Mitten Hotels Group, Zurich) through the AlbaSim platform, from initiation to closing.",
    featured: true,
    cardContext: "EHL, Project Management, Fall 2025",
    cardBullets: [
      "Managed all four project phases (Initiation, Planning, Execution, Closing) on AlbaSim",
      "Built the Gantt chart, BAC estimates, and resource plan; monitored KPIs throughout execution",
    ],
    cardDeliverable: "Simulation deliverables (project proposal, project plan, final performance report)",
    tags: ["Project Management", "AlbaSim", "Gantt", "PERT", "BAC", "EVM", "Project Planning", "Resource Allocation", "Schedule Control", "Cost Control"],
    context: "Team project for the Project Management course at EHL (Fall 2025). Managed a simulated 6-month hotel F&B renovation project (Restaurant & Bar Renewal Pilot for Mitten Hotels Group, Zurich) through the AlbaSim online platform, progressing week by week across four phases (Initiation, Planning, Execution, and Closing) while responding to stakeholder inputs and unexpected events.",
    objective: "Successfully deliver the simulated F&B renovation project on time, within budget, and at target quality by applying formal project management methods across all four phases.",
    contribution: [
      "Coordinated the team to stay on track and progress through each simulation stage",
      "Involved across all phases: initiation (feasibility studies, project proposal), planning (WBS, Gantt, BAC, resource allocation), execution (monitoring, corrective actions), and closure",
      "Built and updated the project plan including the Gantt chart, resource plan, and budget estimates (BAC)",
      "Managed unexpected events (e.g., unavailable team members) by reallocating tasks and maintaining delivery",
      "Monitored progress indicators (Quality, Costs, Schedule) and adjusted decisions to optimize outcomes",
    ],
    method: [
      "Project initiation: context analysis, objectives definition, stakeholder identification, and feasibility studies (market, technical, financial, schedule)",
      "Project planning: Work Breakdown Structure (WBS), activity sequencing (PERT), Gantt scheduling, Budget at Completion (BAC) estimation, and resource allocation across 12 activities",
      "Project execution and control: weekly progress monitoring, Earned Value Management (EVM) tracking, and corrective action planning to maintain quality, cost, and schedule targets",
    ],
    deliverables: [
      { label: "View Simulation Report (PDF)", href: "/files/pm_simulation_report.pdf" },
    ],
    results: [
      "All 12 project activities completed at 100% with a quality score of 106 (above the target baseline of 100)",
      "Execution costs of CHF 540,692 vs. a BAC of CHF 533,000, a cost overrun of only ~1.4%, yielding a cost score of 99",
      "Schedule score of 93: project completed within the simulation timeline despite resource unavailabilities and unexpected events",
      "Final grading score of 159 out of 200, reflecting strong overall project management performance across all KPIs",
    ],
    whyItMatters: [
      "End-to-end project delivery experience from initiation through closing",
      "Proven ability to manage scope, budget, and schedule under real constraints and unexpected events",
      "Direct exposure to earned value management and data-driven decision making",
    ],
    humanSummary: "This project tested the ability to make trade-offs under pressure and deliver results within tight constraints, a core skill for any operational or consulting role.",
    targetRoles: ["Project Manager", "Operations Analyst", "Hospitality Project Manager", "PMO Analyst"],
    skills: ["Project Planning", "Gantt Scheduling", "Budget Management", "Resource Allocation", "Earned Value Management", "Risk Management", "Stakeholder Management"],
    tools: ["AlbaSim", "Excel", "PowerPoint"],
    keywords: ["project management", "WBS", "Gantt chart", "EVM", "BAC", "PERT", "hotel renovation", "F&B project", "schedule control", "resource planning", "cost management", "project lifecycle"],
    seoTitle: "Project Management \u2013 Hotel F&B Renovation Simulation | Alexandre Carboni",
    seoDescription: "How I managed a simulated 6-month hotel F&B renovation end-to-end: Gantt scheduling, budget control (BAC), and EVM tracking with a quality score of 106/100.",
    topics: ["Project Management", "Hotel Operations", "F&B Management", "Simulation"],
    dateCreated: "2025-12",
  },

  // ── Secondary Projects ──
  {
    slug: "corporate-strategy",
    coverImage: "/images/projects/corporate-strategy.jpg",
    title: "Corporate Strategy: Badrutt\u2019s Palace Hotel Summer Season Extension",
    oneLiner: "Strategy Challenge for Badrutt\u2019s Palace Hotel (St. Moritz), developing a season-extension concept to improve profitability during the autumn shoulder period (Sep\u2013Nov).",
    featured: false,
    cardContext: "EHL, Corporate Strategy, Spring 2025",
    cardBullets: [
      "Conducted desk research and helped shape the team\u2019s core strategic recommendation",
      "Delivered a data-driven infographic with revenue projections, partnerships, and risk mitigation",
    ],
    cardDeliverable: "Strategic infographic (A4) with recommendation, KPIs, and implementation roadmap",
    tags: ["Desk Research", "Strategic Analysis", "Problem Framing", "Option Evaluation", "Client Communication", "Presentation", "Infographic", "Luxury Hospitality"],
    context: "Multi-week Strategy Challenge for the Corporate Strategy course at EHL (Spring 2025). Worked in a team as consultants for Badrutt\u2019s Palace Hotel, a 168-room iconic luxury property in St. Moritz (Michelin-starred, World\u2019s 50 Best Hotels). The hotel operates seasonally (winter Dec\u2013Apr, summer Jun\u2013Sep) and faces ~CHF 2M/month in fixed costs during closure periods, with a combined off-season net loss exceeding CHF 8M.",
    objective: "Develop a sound, convincing, and realistic strategic recommendation to extend the summer season (Sep\u2013Nov) and improve profitability, while preserving the Palace\u2019s brand positioning and service standards.",
    contribution: [
      "Helped shape the core idea submitted by the team: an \u201CAthletic Travel Experience\u201D positioning the Alpine autumn as a peak athletic destination",
      "Conducted desk research to support and justify the proposal with credible sources (wellness market data, UHNWI travel trends, competitive landscape)",
      "Actively participated in discussions with the client, refining the concept based on feedback",
      "Contributed to aligning the recommendation with feasibility, strategic fit, and the hotel\u2019s value-creation process",
    ],
    method: [
      "Situation and stakeholder analysis: assessed the hotel\u2019s seasonal P&L, fixed cost baseline, guest segments (UHNWI, multi-generational families), and destination demand patterns (Jul\u2013Aug vs. Sep\u2013Oct drop-off)",
      "Option generation and evaluation: benchmarked competitors (SIRO, Grace La Margna, Suvretta House), identified a Blue Ocean positioning gap in athletic luxury, and evaluated impact/feasibility/fit against course criteria",
      "Recommendation and implementation: designed a dual-offer concept (adult performance program + junior academy), mapped strategic partnerships (Swiss Olympic, Equinox, Technogym, elite schools), and projected CHF 1.7M gross revenue over an 8-week pilot with risk mitigation measures",
    ],
    deliverables: [
      { label: "View Infographic (PDF)", href: "/files/cs_badrutts_palace_infographic.pdf" },
    ],
    results: [
      "Proposed a \u201CBadrutt\u2019s Palace Athletic Travel Experience\u201D, an 8-week season extension (Sep 7\u2013Nov 1) with a dual offer: adult performance & transformation programs and a children\u2019s junior academy",
      "Identified a genuine Blue Ocean positioning: no comparable athletic luxury offer exists in the Alpine market, with competitors limited to passive wellness (spa-only)",
      "Projected CHF 1.7M gross program revenue (20 adult guests \u00D7 CHF 6,900 + 20 junior guests \u00D7 CHF 3,900 per week), excluding accommodation and F&B upsells which act as additional occupancy drivers",
      "Designed a low-risk resource model: 40% freelance experts (variable cost), 40% core team extension (existing contracts), and 20% brand partners (zero CAPEX via Technogym/Equinox showroom model)",
    ],
    whyItMatters: [
      "Real consulting engagement with a world-renowned luxury hotel (Badrutt\u2019s Palace, St. Moritz)",
      "Strategy work grounded in financial projections and operational feasibility, not just theory",
      "Experience presenting recommendations to senior stakeholders and iterating on feedback",
    ],
    humanSummary: "This project required balancing creative strategic thinking with financial discipline and brand sensitivity, exactly what consulting firms look for in junior hires.",
    targetRoles: ["Strategy Consultant", "Business Analyst", "Hospitality Consultant", "Management Consultant"],
    skills: ["Strategic Analysis", "Desk Research", "Revenue Projection", "Competitive Benchmarking", "Client Communication", "Problem Framing", "Option Evaluation"],
    tools: ["PowerPoint", "Excel", "Canva"],
    keywords: ["corporate strategy", "season extension", "luxury hospitality", "Blue Ocean strategy", "revenue projection", "strategic recommendation", "competitive analysis", "management consulting", "business strategy", "stakeholder management"],
    seoTitle: "Corporate Strategy \u2013 Luxury Hotel Season Extension | Alexandre Carboni",
    seoDescription: "How I developed a season-extension strategy for Badrutt\u2019s Palace Hotel (St. Moritz): Blue Ocean positioning, CHF 1.7M revenue projection, and operational roadmap.",
    topics: ["Corporate Strategy", "Luxury Hospitality", "Revenue Optimization", "Competitive Analysis"],
    dateCreated: "2025-05",
  },
  {
    slug: "revenue-management",
    coverImage: "/images/projects/revenue-management.webp",
    title: "Revenue Management: RevSIM Simulation Report",
    oneLiner: "18-month hotel revenue management simulation (RevSIM): upscale repositioning strategy, KPI analysis, and performance evaluation against a competitive set.",
    featured: false,
    cardContext: "EHL, Revenue Management course, Fall 2024",
    cardBullets: [
      "Analysed internal KPIs (OCC%, ADR, RevPAR, GOPPAR) and external benchmarks (MPI, ARI, RGI) across 18 months",
      "Diagnosed best/worst month drivers and proposed short- and long-term RM strategies",
    ],
    cardDeliverable: "Video presentation with PowerPoint slides and KPI analysis",
    tags: ["Excel", "Revenue Management", "KPI Analysis", "Pricing Strategy", "Forecasting", "RevSIM", "Dynamic Pricing", "Distribution Strategy"],
    context: "Group project for the Revenue Management course at EHL (Fall 2024). Worked in a team of 5 on the RevSIM platform, managing an upscale hotel over 18 simulated months (Year 1 + first half of Year 2). The team set pricing, managed distribution channels, invested in services and infrastructure, and competed against other teams to maximise revenue performance.",
    objective: "Optimise hotel revenue performance over 18 months by deploying pricing and positioning strategies, monitoring KPIs against the competitive set, and proposing actionable short- and long-term RM recommendations.",
    contribution: [
      "Analysed internal KPIs (OCC%, ADR, RevPAR, TrevPOR, GOPPAR) and external benchmarks (MPI, ARI, RGI) to evaluate monthly performance across the 18-month simulation",
      "Interpreted KPI movements to diagnose revenue drivers, identifying August Y1 as peak month (RevPAR $151, +20% net profit) and February Y2 as weakest (net loss of \u2212$33,648)",
      "Synthesised insights into actionable recommendations: dynamic pricing in low season, group segment development, and distribution channel optimisation",
    ],
    method: [
      "Tracked internal KPIs (OCC%, ADR, RevPAR, TrevPOR, GOPPAR) and external indices (MPI, ARI, RGI) month-by-month across 18 simulation rounds",
      "Diagnosed revenue drivers behind best and worst months by analysing segment mix, distribution costs, and competitive positioning",
      "Translated findings into short-term (6-month) and long-term (3-year) RM strategy recommendations backed by performance data",
    ],
    deliverables: [
      { label: "View Slides (PDF)", href: "/files/revsim_slides.pdf" },
    ],
    results: [
      "Best month (August Y1): RevPAR of $151, ADR of $197, OCC 76.88%, with MPI 103.8 and RGI 103.6, driven by pre-season marketing spend and $380K direct-channel revenue",
      "Worst month (February Y2): only month with negative net profit (\u2212$33,648), caused by low weekend occupancy (47.43%), group demand collapse (MPI 74.2), and ~$280K refurbishment costs",
      "Upscale repositioning strategy (business center, valet parking, concierge) improved market share (RGI trending above 100 in Y2, reaching 102.4 by June Y2) but highlighted the trade-off between service investment and profitability",
      "Key strategic takeaways: optimise low-season tariffs via dynamic pricing, develop the group segment for base occupancy, and shift distribution towards direct channels to reduce intermediary costs (~50% OTA fees in worst months)",
    ],
    whyItMatters: [
      "Practical revenue optimization experience across 18 months of simulated hotel operations",
      "Deep understanding of hotel KPIs and their interdependencies in a competitive environment",
      "Ability to diagnose performance drivers and translate data into pricing strategy",
    ],
    humanSummary: "This project built the analytical reflexes needed to optimize revenue in a competitive, data-rich environment, the daily reality of any revenue or pricing role.",
    targetRoles: ["Revenue Manager", "Revenue Analyst", "Pricing Analyst", "Hospitality Analyst"],
    skills: ["KPI Analysis", "Dynamic Pricing", "Distribution Strategy", "Competitive Benchmarking", "Revenue Optimization", "Segment Analysis", "Forecasting"],
    tools: ["RevSIM", "Excel", "PowerPoint"],
    keywords: ["revenue management", "RevPAR", "ADR", "occupancy rate", "GOPPAR", "TrevPOR", "dynamic pricing", "distribution strategy", "hotel KPIs", "yield management", "pricing optimization", "competitive set analysis"],
    seoTitle: "Revenue Management \u2013 Hotel Simulation & KPI Analysis | Alexandre Carboni",
    seoDescription: "How I optimized hotel revenue over 18 simulated months: upscale repositioning, KPI-driven pricing (RevPAR, ADR, GOPPAR), and distribution strategy.",
    topics: ["Revenue Management", "Hotel Operations", "Pricing Strategy", "Performance Analysis"],
    dateCreated: "2024-12",
  },
  {
    slug: "leadership",
    coverImage: "/images/projects/leadership.png",
    title: "LEAD: Individual Development & Leadership Style Analysis",
    oneLiner: "Individual project based on 10+ self-assessments and Harvard Business School simulations to critically analyse management and leadership style, identify blind spots, and define a concrete development plan.",
    featured: false,
    cardContext: "EHL, LEAD (Leadership & Organizational Behavior), Fall 2025",
    cardBullets: [
      "Completed 10+ validated self-assessments and 4 HBS online simulations across five core management principles",
      "Produced a reflective essay and 3-minute video linking assessment insights to a personal development plan",
    ],
    cardDeliverable: "Self-reflection & essay (PDF) + personalized video (MP4)",
    tags: ["Leadership Development", "Self-Assessment", "HBS Simulations", "Reflective Practice", "Teamwork", "Change Management", "Innovation Management", "Organizational Behavior", "Action Planning"],
    context: "Individual project for the LEAD (Leadership & Organizational Behavior) course at EHL (Fall 2025). Based on a series of self-assessments (Mintzberg Triangle, Blake & Mouton, Hersey & Blanchard, MLQ, Belbin, CQ Survey, etc.), Harvard Business School online simulations, case studies, and in-class educational games, the project required a critical analysis of one\u2019s management and leadership style across five core management principles.",
    objective: "Conduct a critical self-assessment of management and leadership style, identify strengths and blind spots through validated instruments and simulations, and define a concrete personal development plan.",
    contribution: [
      "Individual project: delivered all three parts end-to-end (self-reflection, essay, and personalized video)",
      "Completed 10+ self-assessments (Mintzberg Triangle, Blake & Mouton, Hersey & Blanchard, MLQ, Belbin, CQ Survey, RTC Scale, Work Style Scale, Ethics, etc.) and consolidated insights across instruments",
      "Participated in 4 Harvard Business School online simulations (Crafting Your Life, Move \u2013 Leading Team Performance, Innovation: Breaking News, Change Management: Power & Influence) plus the Organizational Design simulation",
      "Translated findings into a reflective essay linking assessment results to real-world internship experience and defining concrete development actions",
      "Produced a 3-minute personalized video presenting leadership profile and development plan",
    ],
    method: [
      "Self-assessments and simulation-based reflection across five core management principles: team leadership, organizational culture, innovation management, change management, and organizational structure",
      "Cross-instrument synthesis to identify dominant style (Craft/execution-oriented on Mintzberg; Monitor Evaluator + Coordinator on Belbin; transformational-transactional blend on MLQ) and recurring blind spots",
      "Action plan with concrete, measurable development steps targeting delegation, exploration breadth, and execution discipline",
    ],
    deliverables: [
      { label: "View Self-Reflection & Essay (PDF)", href: "/files/lead_individual_project.pdf" },
      { label: "Watch Video", href: "/files/lead_individual_video.mp4" },
    ],
    results: [
      "Leadership profile: action-oriented, execution-focused (Craft 4 > Art 3 > Science 2 on Mintzberg), with a transformational-transactional blend (high inspirational motivation and contingent reward on MLQ) and strongest Belbin roles as Monitor Evaluator and Coordinator",
      "Key strength: setting direction, structuring work, and making sound decisions, strongest in Planning & Controlling (P-O-L-C), with a \u201Ccollaborate at the top first\u201D collaborative leadership profile (4.5/5)",
      "Main blind spots: tendency to narrow the circle under pressure (low Teamwork score, low Global Connector 0.4/5), high cognitive rigidity (4.5/6), and mid detail-orientation (50%) leading to last-minute quality risks",
      "Development plan: build delegation as a leadership reflex, broaden exploration by seeking perspectives outside core circle, and improve execution discipline with fewer parallel initiatives and stricter follow-through routines",
    ],
    whyItMatters: [
      "Evidence-based self-awareness built through validated psychometric instruments and HBS simulations",
      "Concrete development plan grounded in real assessment data, not generic advice",
      "Demonstrates maturity, self-awareness, and readiness for management responsibility",
    ],
    humanSummary: "This project required honest self-examination and the discipline to translate assessment insights into a concrete, actionable growth plan.",
    targetRoles: ["Management Trainee", "Team Leader", "Operations Manager", "Hospitality Manager"],
    skills: ["Leadership Self-Assessment", "Team Management", "Change Management", "Innovation Management", "Reflective Practice", "Action Planning", "Stakeholder Communication"],
    tools: ["HBS Online Simulations", "Belbin", "MLQ", "Mintzberg Triangle"],
    keywords: ["leadership development", "management style", "self-assessment", "Belbin", "transformational leadership", "organizational behavior", "development plan", "team management", "change management", "emotional intelligence"],
    seoTitle: "LEAD \u2013 Leadership Style Analysis & Development Plan | Alexandre Carboni",
    seoDescription: "How I built a personal leadership profile using 10+ validated instruments and HBS simulations, with a concrete development plan for management readiness.",
    topics: ["Leadership Development", "Organizational Behavior", "Self-Assessment", "Management"],
    dateCreated: "2025-12",
  },
  {
    slug: "international-marketing",
    coverImage: "/images/projects/international-marketing.png",
    title: "International Marketing Strategy: Festival Antigel Internationalization Plan",
    oneLiner: "Internationalization strategy for a Geneva-based cultural festival, targeting Lyon as first expansion market.",
    featured: false,
    cardContext: "EHL, International Marketing Strategy, Fall 2024",
    cardBullets: [
      "Conducted macro-environment analysis comparing four countries to support market selection",
      "Designed an AI-powered mobile app concept as service innovation",
    ],
    cardDeliverable: "Full internationalization report with market analysis",
    tags: ["International Marketing Strategy", "Excel", "Desk Research", "Macro Analysis", "Market Attractiveness", "Market Screening", "Data Structuring", "Service Innovation"],
    context: "Team project for the International Marketing Strategy course at EHL (Fall 2024). Worked in a team of 6 as consultants to develop a comprehensive internationalization plan for Festival Antigel, Geneva\u2019s largest pluridisciplinary cultural festival (~3M CHF budget, 80+ events across 40+ venues in February).",
    objective: "Identify the best target market for Antigel\u2019s international expansion, recommend an entry mode, and propose a service innovation to support the festival\u2019s first edition abroad.",
    contribution: [
      "Conducted a macro-environment analysis comparing the attractiveness of four countries: Switzerland, France, Italy, and Germany",
      "Structured findings in a clear comparative framework (weighted scoring matrix) to support country selection",
      "Contributed to the evaluation of entry modes (local subsidiary vs. local partnerships) using internal/external factor analysis",
      "Co-authored the operational recommendations section",
    ],
    method: [
      "Weighted scoring model for market selection across macro-economic and micro-economic criteria (political, economic, social, cultural factors)",
      "Primary research: qualitative interview with ISTERIA festival director + quantitative survey (40 respondents)",
      "Secondary research: press articles, INSEE data, IFPI music consumption reports, cultural industry studies",
    ],
    deliverables: [
      { label: "View Report (PDF)", href: "/files/rapport_mis_antigel_2024.pdf" },
    ],
    results: [
      "Lyon selected as optimal market via weighted macro/micro scoring: Francophone cultural affinity, geographic proximity to Geneva (<2h), and a dynamic arts scene (Nuits Sonores)",
      "Recommended establishing a local subsidiary in Lyon for full artistic control, long-term brand positioning, and operational autonomy",
      "Proposed an AI-powered mobile app as service innovation: personalised event recommendations, optimised itineraries, and interactive venue map",
      "Operational roadmap included local hiring, event agency partnership, app pilot at Geneva edition, and community engagement via local volunteers",
    ],
    whyItMatters: [
      "Full internationalization analysis from market screening to operational roadmap",
      "Experience with both quantitative scoring models and qualitative stakeholder research",
      "Practical exposure to entry mode decisions and service innovation design",
    ],
    humanSummary: "This project required structuring ambiguity into a clear recommendation backed by data and strategic logic, a core consulting skill.",
    targetRoles: ["Marketing Analyst", "Business Development Analyst", "International Marketing Specialist", "Strategy Consultant"],
    skills: ["Market Analysis", "Market Screening", "Entry Mode Evaluation", "Primary Research", "Secondary Research", "Service Innovation", "Weighted Scoring"],
    tools: ["Excel", "Survey Tools", "PowerPoint"],
    keywords: ["international marketing", "market entry", "internationalization", "macro analysis", "market attractiveness", "service innovation", "cultural industries", "market screening", "business development", "go-to-market strategy"],
    seoTitle: "International Marketing \u2013 Festival Internationalization Plan | Alexandre Carboni",
    seoDescription: "How I built an internationalization strategy for Festival Antigel (Geneva): market screening, entry mode evaluation, and AI-powered service innovation for Lyon.",
    topics: ["International Marketing", "Market Entry Strategy", "Service Innovation", "Cultural Industries"],
    dateCreated: "2024-12",
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const secondaryProjects = projects.filter(p => !p.featured);
