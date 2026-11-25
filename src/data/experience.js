/* Experience records. Facts are the author's own; do not embellish. */
export const EXPERIENCE = [
  {
    company: "Kindwell Solutions",
    role: "Full Stack Developer & Automation Engineer",
    period: "January 2026 – Present",
    type: "Current Role",
    badgeClass: "badge-current",
    description: "Delivering production-grade SaaS web products, client operations dashboards, and AI-driven automation workflows connecting GoHighLevel, n8n, Salesforce, and modern web applications.",
    highlights: [
      "Built and maintain 12+ production n8n workflows for a yacht-charter client (Top Fun Charters), automating 30% deposits, 70% daily balance invoicing, cancellations, reschedules, and captain dispatch.",
      "Designed a 78-node AI SMS and web-chat assistant (n8n + OpenAI) with burst debouncing, human-takeover pause, CRM lookup, intent classifier, and an output guard blocking hallucinated pricing and non-compliant claims.",
      "Rebuilt client website in Next.js 16 (App Router) & React 19 and built a secure operations dashboard with Clerk role-based authentication (owner & captain roles), GHL read-API layer, and revenue/tax reporting from GHL invoices.",
      "Architected GHL → n8n → Salesforce lead sync (OAuth2 REST API, SOQL duplicate check, email lookup, Contact create/patch) verified field-by-field against production without per-execution GHL billing.",
      "Developed custom WordPress plugins (jd-funnels, heaton-dainard-funnels, jbzh-pages) replicating GHL funnels natively on client root domains with embedded forms, two-step checkout, and scripted release pipelines.",
      "Configured and retrained GHL Conversation AI seller bot with a strict 9-question intake script, custom knowledge base, and DND / hot-lead handoff workflows; passed all client test cases.",
      "Administered GHL agency sub-accounts (16+ accounts): workflows, funnels, trigger links, pipelines, custom fields, and A2P 10DLC compliance; traced and reversed a bulk-tag error on 1,217 contacts with 0 errors."
    ],
    tech: ["GoHighLevel", "n8n (12+ Workflows)", "Next.js 16", "React 19", "TypeScript", "Salesforce REST API", "OAuth 2.0 / PKCE", "OpenAI GPT-4o", "Clerk Auth", "WordPress Plugins", "Playwright"]
  },
  {
    company: "Freelance & Agency Clients",
    role: "GoHighLevel Specialist & CRM Automation Engineer",
    period: "2022 – Present",
    type: "Ongoing Engagement",
    badgeClass: "badge-current",
    description: "Partnering directly with US-based agencies and businesses to design, configure, audit, and maintain full GoHighLevel sub-accounts, multi-vertical SaaS snapshots, and API middleware.",
    highlights: [
      "Built and deployed 6 industry-specific GHL snapshots (HVAC, Lawn Care, Construction, Tree Removal, Plumbing, Pool Service) in a master workshop sub-account before client rollout.",
      "Configured GHL SaaS Configurator tiers from $97 to $1,500/month, and wrote over 142,000 characters of custom white-label dark-mode CSS for the GHL web portal.",
      "Completed A2P 10DLC registrations, SMS deliverability troubleshooting, dedicated domain sending setups (SPF, DKIM, DMARC), and Two-Way Email Sync for a 31-rep sales team (Wishes & Wanderlust).",
      "Automated cross-system booking and agreement workflows connecting GHL with BoldSign digital contracts, Google Calendar, and payment gateways.",
      "Authored structured SOPs, End-of-Day engineering reports, and client Loom walkthroughs for QA teams and seamless project handovers."
    ],
    tech: ["GoHighLevel", "SaaS Configurator", "Snapshots", "A2P 10DLC", "White-Label CSS (142k+ chars)", "n8n", "Webhooks", "Two-Way Email Sync", "SOP Documentation"]
  },
  {
    company: "Florex Pharma Pvt. Ltd.",
    role: "Full Stack WordPress & E-Commerce Developer",
    period: "August 2023 – December 2025",
    type: "Previous Experience",
    badgeClass: "badge-previous",
    description: "Developed, maintained, and optimized the corporate web platform and full-scale WooCommerce online store for pharmaceutical products.",
    highlights: [
      "Implemented and managed a complete WooCommerce store: product catalogs, custom categories, cart, checkout, payment gateways, and shipping rules.",
      "Integrated Google Analytics and structured product data (JSON-LD) to meet Google Merchant product-feed standards.",
      "Wrote and customized PHP, HTML5, CSS3, and JavaScript; optimized performance, caching (WP Rocket / LiteSpeed), and image delivery across all device viewports.",
      "Managed ongoing PHP maintenance, regular security audits, and automated daily backup routines."
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Payment Gateways", "Google Merchant Feed", "JSON-LD", "Performance Optimization"]
  },
  {
    company: "COMSATS University Islamabad",
    role: "Autonomous Drone Navigation Research (CSC498 & CSC499)",
    period: "September 2024 – January 2026",
    type: "Academic & Research",
    badgeClass: "badge-previous",
    isEducation: true,
    description: "Senior Design Project building GPS-independent autonomous UAV navigation in dense and obstacle-heavy environments, awarded Grade 'A' and extending into a 2026 research paper.",
    highlights: [
      "Developed sensor fusion and reinforcement-learning models for GPS-denied obstacle avoidance simulated in Unreal Engine and AirSim.",
      "Engineered a responsive React web dashboard for AI-optimized mission waypoint path planning and real-time telemetry streaming.",
      "Contributed to system design, algorithmic evaluation, and empirical benchmarking; currently authoring research paper targeted for 2026 publication."
    ],
    tech: ["Reinforcement Learning", "AirSim", "Unreal Engine", "Computer Vision", "Sensor Fusion", "React", "Python"]
  }
];
