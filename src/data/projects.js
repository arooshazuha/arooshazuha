/* Project records. Facts are the author's own; do not embellish. */
import topfuncharters from '../assets/opt/topfuncharters.webp';
import heatondainard from '../assets/opt/heatondainard.webp';
import jamesbuyszombiehouses from '../assets/opt/jamesbuyszombiehouses.webp';
import jamesdainard from '../assets/opt/jamesdainard.webp';
import askjames from '../assets/opt/askjames.webp';
import oculosnapshot from '../assets/opt/oculosnapshot.webp';
import wishesWanderlust from '../assets/opt/wishes-wanderlust.webp';
import pds from '../assets/opt/pds.webp';
import alphavenue from '../assets/opt/alphavenue.webp';
import adaptai from '../assets/opt/adaptai.webp';
import elio from '../assets/opt/elio.webp';
import kindwellsolutions from '../assets/opt/kindwellsolutions.webp';
import florex from '../assets/opt/florex.webp';
import tcgconstruction from '../assets/opt/tcgconstruction.webp';
import aqs from '../assets/opt/aqs.webp';
import dronemission from '../assets/opt/dronemission.webp';
import proj1 from '../assets/opt/proj1.webp';
import hookandbloom from '../assets/opt/hookandbloom.webp';

export const PROJECTS = [
  {
    id: 1,
    title: "Top Fun Charters",
    category: "AI & Automation",
    secondaryCategories: ["GoHighLevel & CRM", "Full Stack SaaS", "Client Websites & WordPress"],
    image: topfuncharters,
    architecture: ["Next.js 16", "78-Node n8n", "OpenAI Guard", "GHL CRM", "Square Invoicing"],
    tagline: "End-to-end digital and operations infrastructure for a Florida luxury yacht charter business, combining a Next.js 16 web app, operations dashboard, GHL CRM, and n8n AI chat assistants.",
    workedOn: [
      "Rebuilt topfuncharters.com in Next.js 16 (App Router) & React 19 with a drone-video hero, live Google reviews, pricing, and seamless DNS cutover.",
      "Built a secure internal Operations & Financial dashboard with Clerk authentication, role-based owner/captain permissions, and GHL invoice revenue/tax reporting.",
      "Engineered a 78-node n8n AI SMS & web assistant with burst debouncing, human-takeover pause, CRM lookup, policy engine, and owner escalation.",
      "Created an AI output guard blocking invented pricing and non-compliant claims, automated 30% deposit & 70% daily balance billing, and built OpenAI vision screenshot booking imports."
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "n8n (78 Nodes)", "GoHighLevel", "OpenAI Vision", "Square", "Clerk Auth"],
    link: "https://www.topfuncharters.com/",
    linkText: "Visit Website"
  },
  {
    id: 2,
    title: "Heaton Dainard — GHL & Salesforce Sync",
    category: "GoHighLevel & CRM",
    secondaryCategories: ["AI & Automation", "Client Websites & WordPress"],
    image: heatondainard,
    imageAlt: 'Photo of the Heaton Dainard team, from the heatondainard.com website',
    architecture: ["WP Plugin", "GHL Webhook", "n8n Relay", "OAuth2 / PKCE", "Salesforce REST"],
    tagline: "CRM automation and event funnel replication for a premier real-estate brokerage, connecting GoHighLevel, n8n, Salesforce REST API, and native WordPress plugins.",
    workedOn: [
      "Architected an n8n webhook relay syncing GHL event leads to Salesforce REST API via OAuth2, verified field-by-field against production with SOQL deduplication.",
      "Built the custom Heaton Dainard Funnels WordPress plugin (v1.0 → v1.6.1) replicating 5 GHL funnels natively with embedded forms and an admin settings screen.",
      "Automated Investor 101 and Designed to Sell event campaigns with date waits, SMS/email sequences, per-session attendance tags, and tag-trigger loop elimination.",
      "Diagnosed A2P deliverability and recovered 1,217 mistakenly bulk-tagged contacts using audit logs, reversing the action with 0 errors."
    ],
    tech: ["GoHighLevel", "n8n", "Salesforce REST API", "OAuth2 / PKCE", "WordPress Plugin", "PHP", "SOQL", "A2P 10DLC"],
    link: "https://heatondainard.com/",
    linkText: "Visit Website"
  },
  {
    id: 3,
    title: "James Buys Zombie Houses",
    category: "GoHighLevel & CRM",
    secondaryCategories: ["AI & Automation", "Client Websites & WordPress"],
    image: jamesbuyszombiehouses,
    architecture: ["Elementor Canvas", "GHL Sub-Account", "9-Q Seller Bot", "DND & Hot Lead"],
    tagline: "Real-estate wholesaling brand platform built as a custom WordPress plugin, paired with a trained GoHighLevel Conversation AI seller qualification bot.",
    workedOn: [
      "Engineered the custom jbzh-pages WordPress plugin on Elementor Canvas with custom nav/footer shortcodes matching client brand specifications.",
      "Configured and retrained GHL Conversation AI seller bot with a strict 9-question intake script, custom knowledge base, and two-time-slot appointment offers.",
      "Wired automated Trigger-a-Workflow bot handoffs: instant Stop Request (DND channel shutdown) and Hot Lead / Handoff notification to leadership.",
      "Completed full GHL sub-account setup, booking calendars, custom opportunity fields, and A2P 10DLC registration approval."
    ],
    tech: ["GoHighLevel", "Conversation AI", "Custom WP Plugin", "Elementor Pro", "A2P 10DLC", "Workflows", "PHP"],
    link: "https://jamesbuyszombiehouses.com/",
    linkText: "Visit Website"
  },
  {
    id: 4,
    title: "jamesdainard.com — Funnel Suite & Checkout",
    category: "Client Websites & WordPress",
    secondaryCategories: ["GoHighLevel & CRM"],
    image: jamesdainard,
    architecture: ["jd-funnels Plugin", "9+ Funnel Pages", "2-Step Checkout", "$995 GHL Payment Link"],
    tagline: "High-converting funnel ecosystem for a national real estate investor brand, migrating 9+ GHL funnels natively onto WordPress with two-step payment checkout.",
    workedOn: [
      "Built the custom jd-funnels WordPress plugin (v2.1 → v2.3.1) replicating 9+ pages natively for Fix and Flip, Accredited Investors, Sell Your Property, and Speaker Inquiry.",
      "Engineered a pre-filled two-step checkout form connected directly to a $995 GHL course payment link with conversion tracking.",
      "Created an automated one-command release script performing database backup, plugin deployment, page linking, and cache purging.",
      "Developed custom floating chatbot plugin (james-bot-float) and resolved site-wide JS conflicts and WP Rocket minify caching issues."
    ],
    tech: ["WordPress", "Custom Plugin (PHP)", "GoHighLevel Forms", "Elementor", "Payment Links", "WP-CLI", "SSH"],
    link: "https://jamesdainard.com/",
    linkText: "Visit Website"
  },
  {
    id: 5,
    title: "Ask James / ProjectRE — AI Real Estate Mentor",
    category: "AI & Automation",
    secondaryCategories: ["Full Stack SaaS", "GoHighLevel & CRM"],
    image: askjames,
    imageAlt: 'ProjectRE logo',
    architecture: ["Google Drive", "n8n RAG", "OpenAI Embeddings", "Supabase pgvector", "GHL HMAC"],
    tagline: "Production RAG knowledge pipeline and conversational real estate investment mentor embedded inside a GoHighLevel client membership portal.",
    workedOn: [
      "Built automated knowledge ingestion pipeline: Google Drive documentation → n8n → OpenAI embeddings → Supabase (pgvector).",
      "Engineered GoHighLevel contact membership validation with HMAC signature authentication for secure API authorization.",
      "Mapped and normalized live Zillow property comp data via Apify, implementing schema diagnostic logging to handle payload format updates.",
      "Contributed to Fastify/Node backend and restyled the embedded chat widget into a clean, ChatGPT-like interface via reviewed GitHub PRs."
    ],
    tech: ["OpenAI GPT-4o", "RAG Pipeline", "n8n", "Supabase (pgvector)", "GoHighLevel", "Fastify", "Node.js", "Apify"],
    linkText: "RAG & LLM Pipeline"
  },
  {
    id: 6,
    title: "Oculo Digital — Multi-Vertical SaaS Snapshots",
    category: "GoHighLevel & CRM",
    secondaryCategories: ["Full Stack SaaS"],
    image: oculosnapshot,
    architecture: ["6 GHL Snapshots", "SaaS Configurator", "142k Char CSS", "A2P 10DLC"],
    tagline: "Master GoHighLevel architecture including 6 industry vertical snapshots, SaaS Configurator monetization tiers, and 142k+ characters of custom white-label dark-mode CSS.",
    workedOn: [
      "Architected 6 industry-specific snapshots (HVAC, Lawn Care, Construction, Tree Removal, Plumbing, Pool Service) in a master workshop sub-account.",
      "Configured SaaS Configurator monetization tiers ranging from $97 to $1,500/month with feature gating and sub-account provisioning.",
      "Wrote over 142,000 characters of custom white-label dark-mode CSS delivering a bespoke high-contrast SaaS interface for the GHL web portal.",
      "Standardized universal custom values, booking calendars, funnel links, and completed multi-account A2P 10DLC registrations."
    ],
    tech: ["GoHighLevel", "SaaS Configurator", "Snapshots", "Custom CSS (142k+ Chars)", "A2P 10DLC", "Sub-Accounts"],
    linkText: "SaaS & CRM Snapshot System"
  },
  {
    id: 7,
    title: "Wishes and Wanderlust — Enterprise CRM Governance",
    category: "GoHighLevel & CRM",
    secondaryCategories: ["CRM & Workflows"],
    image: wishesWanderlust,
    architecture: ["31-Rep Permissions", "Two-Way Email Sync", "Dedicated Sending", "Territory Routing"],
    tagline: "Enterprise GoHighLevel governance, user permission hierarchy, and sender routing setup for a 31-representative luxury sales organization.",
    workedOn: [
      "Engineered strict role-based permission hierarchies isolating client records across a 31-rep sales team while preserving executive oversight.",
      "Configured Two-Way Email Sync ensuring every outbound and inbound client conversation logs transparently into CRM contact timelines.",
      "Set up dedicated domain sending with custom SPF, DKIM, DMARC, and MX records to eliminate spam flagging and maintain sender reputation.",
      "Built automated lead assignment workflows routing inquiries by destination specialty, territory, and rep availability."
    ],
    tech: ["GoHighLevel", "Two-Way Email Sync", "User Permissions", "Email Deliverability", "DNS (SPF/DKIM)", "Routing"],
    linkText: "Enterprise CRM Governance"
  },
  {
    id: 8,
    title: "PDS — Luxury Auto Detailing AI Booking",
    category: "AI & Automation",
    secondaryCategories: ["GoHighLevel & CRM"],
    image: pds,
    architecture: ["Inbound Webhook", "Deterministic Matrix", "5 AI Agents", "Google Calendar API"],
    tagline: "Autonomous multi-agent conversational AI booking system for a high-end automotive detailing enterprise, featuring deterministic vehicle classification.",
    workedOn: [
      "Engineered 5 specialized n8n conversational AI booking agents with a luxury concierge tone handling inquiries, quotes, and holds.",
      "Replaced hallucination-prone LLM vehicle classification with a deterministic lookup matrix to ensure 100% accurate service package quoting.",
      "Integrated Google Calendar scheduling with automated timezone conversion, conflict prevention, and live hold releases.",
      "Implemented stateful session memory, prompt engineering with edge-case handling, and automated webhook recovery pipelines."
    ],
    tech: ["n8n", "AI Agents", "OpenAI", "Google Calendar API", "Deterministic Logic", "Webhooks"],
    linkText: "Multi-Agent AI Booking"
  },
  {
    id: 9,
    title: "Adapt AI NewsPower — Social Media SaaS",
    category: "Full Stack SaaS",
    secondaryCategories: ["AI & Automation"],
    image: adaptai,
    architecture: ["Next.js 16", "PostgreSQL", "Social OAuth2", "Cron Scheduler", "Stripe Billing"],
    tagline: "Unified social media management platform featuring automated multi-account publishing, AI content generation, and cross-platform analytics.",
    workedOn: [
      "Built full-stack SaaS with Next.js 16, React, Node.js, TypeScript, and PostgreSQL schema architecture.",
      "Implemented multi-account OAuth 2.0 authentication and secure token refresh handling across social network APIs.",
      "Engineered automated post-scheduling queue engine with calendar drag-and-drop, cron processing, and retry mechanisms.",
      "Integrated Stripe subscription billing portal and built granular role-based access control (RBAC) across workspaces."
    ],
    tech: ["Next.js 16", "Node.js", "TypeScript", "PostgreSQL", "Stripe Billing", "OAuth 2.0", "Tailwind CSS"],
    link: "https://adapt.ainewspower.com/",
    linkText: "Live Platform"
  },
  {
    id: 10,
    title: "Elio — Construction Management SaaS",
    category: "Full Stack SaaS",
    secondaryCategories: ["Client Websites & WordPress"],
    image: elio,
    architecture: ["React Native", "Next.js", "Node.js WebSockets", "Contractor Bids", "Milestones"],
    tagline: "Collaborative multi-platform construction management platform connecting home builders, general contractors, owners, and material vendors.",
    workedOn: [
      "Developed shared full-stack architecture across React, Next.js web application, and React Native mobile front ends.",
      "Engineered real-time chat with WebSockets, read/unread status tracking, push notifications, and threaded discussions.",
      "Built contractor quote invitation workflows with automated project spec autofill and role-based bid visibility.",
      "Created milestone tracking schedules, budget summaries, inspection sign-offs, and contractor invoice management."
    ],
    tech: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "WebSockets", "REST APIs"],
    link: "https://elio.care/",
    linkText: "Visit Website"
  },
  {
    id: 11,
    title: "Kindwell Solutions — Agency Funnel",
    category: "Client Websites & WordPress",
    secondaryCategories: ["Full Stack SaaS"],
    image: kindwellsolutions,
    architecture: ["Next.js 16", "Cloudflare Pages", "GitHub Actions", "Protected Ad QA"],
    tagline: "Agency marketing funnel and build blueprint web application built with Next.js and deployed to Cloudflare Pages with CI/CD automation.",
    workedOn: [
      "Developed responsive interactive funnel pages with Next.js, Framer Motion, and Tailwind CSS for the Kindwell Build Blueprint.",
      "Configured automated build and deployment pipelines via GitHub Actions targeting Cloudflare Pages edge hosting.",
      "Implemented QA environments with analytics and pixel blocking so internal testing never polluted live ad conversion metrics.",
      "Collaborated via Git branches, peer-reviewed pull requests, and component-driven architecture."
    ],
    tech: ["Next.js", "React", "TypeScript", "Cloudflare Pages", "GitHub Actions", "Tailwind CSS"],
    link: "https://kindwellsolutions.com/build",
    linkText: "Visit Website"
  },
  {
    id: 12,
    title: "AlphaVenue — Wedding & Event Automation",
    category: "GoHighLevel & CRM",
    secondaryCategories: ["AI & Automation"],
    image: alphavenue,
    architecture: ["GHL Trigger", "BoldSign API", "Contract Signature", "Automated Invoice"],
    tagline: "Cross-system CRM and legal agreement automation connecting GoHighLevel pipelines with BoldSign e-signatures and booking invoices.",
    workedOn: [
      "Built automated pipeline from GHL lead capture to BoldSign digital agreement generation with dynamic custom fields.",
      "Implemented webhook listeners tracking contract signing events, countersignatures, and signature completion.",
      "Automated immediate reservation confirmation, calendar hold locking, and initial deposit invoice delivery upon signing.",
      "Streamlined onboarding forms capturing guest counts, catering tiers, and timeline preferences."
    ],
    tech: ["GoHighLevel", "BoldSign API", "Webhooks", "Invoicing", "Calendar Sync", "CRM Workflows"],
    linkText: "Workflow Automation"
  },
  {
    id: 13,
    title: "Florex Pharma — E-Commerce & Corporate Platform",
    category: "Client Websites & WordPress",
    secondaryCategories: ["Full Stack SaaS"],
    image: florex,
    architecture: ["WordPress", "WooCommerce", "Payment Gateway", "Google Merchant Feed"],
    tagline: "Corporate pharmaceutical portal and high-conversion WooCommerce e-commerce platform with automated product schema and payment integration.",
    workedOn: [
      "Developed complete WooCommerce store with responsive product catalogs, variant selectors, cart, and secure checkout.",
      "Integrated Google Analytics, Google Search Console, and structured JSON-LD data to meet Google Merchant product-feed standards.",
      "Optimized caching layers, lazy loading, and database queries to ensure sub-2s page load speeds on mobile networks.",
      "Managed ongoing PHP maintenance, regular security audits, and automated daily backup routines."
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Payment Gateways", "JSON-LD", "SEO"],
    link: "https://florexpharma.com/",
    linkText: "Visit Website"
  },
  {
    id: 14,
    title: "TCG Construction — Hong Kong Corporate Platform",
    category: "Client Websites & WordPress",
    image: tcgconstruction,
    architecture: ["Figma-to-Code", "Responsive Architecture", "SEO & Performance", "Inquiry Routing"],
    tagline: "Official web platform for an international commercial construction company in Hong Kong, built with pixel-perfect precision from Figma designs.",
    workedOn: [
      "Converted intricate Figma desktop and mobile wireframes into a clean, pixel-perfect, and fully responsive website.",
      "Developed interactive portfolio layouts displaying commercial landmarks, construction progress, and specifications.",
      "Configured inquiry capture forms routing prospective commercial bids directly to regional project managers.",
      "Engineered semantic HTML structure, OpenGraph previews, and optimized image compression for international visitors."
    ],
    tech: ["WordPress", "PHP", "Figma-to-Code", "Responsive Design", "SEO Optimization", "JavaScript"],
    link: "https://tcgconstruction.hk/",
    linkText: "Visit Website"
  },
  {
    id: 15,
    title: "AQS Consultancy & Enterprise",
    category: "Client Websites & WordPress",
    image: aqs,
    architecture: ["Corporate WP", "Advisory Showcase", "Technical Funnels", "Core Web Vitals"],
    tagline: "Corporate digital brand and advisory platform for an engineering and technical consultancy specializing in high-stakes decisions.",
    workedOn: [
      "Developed the official corporate website with tailored service showcases for quality, HSE, cloud, and engineering advisory.",
      "Built technical inquiry funnels guiding prospective industrial clients through scoped consultation requests.",
      "Optimized Core Web Vitals, cross-browser compatibility, and mobile responsiveness for technical decision-makers.",
      "Established cohesive typography, brand aesthetic, and structured content presentation."
    ],
    tech: ["WordPress", "PHP", "JavaScript", "Responsive Design", "Core Web Vitals", "SEO"],
    link: "https://aqspk.com/",
    linkText: "Visit Website"
  },
  {
    id: 16,
    title: "Autonomous Drone Navigation (Senior Design Project)",
    category: "AI & Automation",
    secondaryCategories: ["Full Stack SaaS"],
    image: dronemission,
    architecture: ["Sensor Fusion", "RL Obstacle Avoidance", "AirSim / Unreal", "React Telemetry"],
    tagline: "GPS-independent autonomous UAV navigation in dense environments using sensor fusion and reinforcement learning, awarded Grade 'A'.",
    workedOn: [
      "Developed reinforcement-learning algorithms and sensor fusion pipelines for UAV navigation without GPS signals.",
      "Built high-fidelity physical simulation environments in Unreal Engine using Microsoft AirSim for model validation.",
      "Engineered React web application displaying live drone telemetry, 3D waypoint mission planning, altitude, and battery monitoring.",
      "Completed Senior Design Project with Grade 'A' (CSC498 & CSC499); extending findings into 2026 research publication."
    ],
    tech: ["Reinforcement Learning", "AirSim", "Unreal Engine", "Computer Vision", "React", "Python", "Sensor Fusion"],
    linkText: "Research & Robotics Project"
  },
  {
    id: 17,
    title: "AURA — Skincare & Cosmetics E-Commerce",
    category: "Full Stack SaaS",
    secondaryCategories: ["Client Websites & WordPress"],
    image: proj1,
    architecture: ["Node.js / Express", "MongoDB", "EJS Views", "Admin & Client Panels"],
    tagline: "Full-stack e-commerce web application featuring independent administrative inventory controls and client storefront experience.",
    workedOn: [
      "Developed full-stack web application utilizing Node.js, Express.js, EJS template views, and MongoDB data modeling.",
      "Built separated administrative interface for inventory, pricing, and orders alongside a customer-facing storefront.",
      "Implemented session-based cart management, promotional pricing logic, and order fulfillment states.",
      "Built customer review submissions, product rating aggregation, and responsive mobile layouts."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "JavaScript", "CSS3", "REST APIs"],
    linkText: "Full Stack Web App"
  },
  {
    id: 18,
    title: "Hook & Bloom — Boutique Crochet E-Commerce",
    category: "Client Websites & WordPress",
    secondaryCategories: ["Full Stack SaaS"],
    image: hookandbloom,
    architecture: ["React 19", "Vite", "Tailwind CSS v4", "Interactive Cart Drawer"],
    tagline: "Pastel-themed boutique crochet e-commerce storefront featuring interactive cart state and responsive micro-interactions.",
    workedOn: [
      "Developed modern frontend with React 19, Vite, and Tailwind CSS v4 featuring mobile-first responsive grid layouts.",
      "Built persistent client-side shopping cart with dynamic quantity adjustments, tax estimation, and slide-out drawer.",
      "Engineered instant category filtering, price sorting, and responsive product detail modals.",
      "Crafted custom micro-interactions and transitions reflecting the handcrafted boutique aesthetic."
    ],
    tech: ["React 19", "Vite", "Tailwind CSS v4", "State Management", "Component Architecture"],
    linkText: "E-Commerce Storefront"
  }
];

/* Channel mapping: each category owns one instrument channel. */
export const CHANNELS = [
  { id: 'ai', num: 'CH1', label: 'AI & Automation', category: 'AI & Automation' },
  { id: 'stack', num: 'CH2', label: 'Full Stack', category: 'Full Stack SaaS' },
  { id: 'crm', num: 'CH3', label: 'CRM & GoHighLevel', category: 'GoHighLevel & CRM' },
  { id: 'web', num: 'CH4', label: 'Web & WordPress', category: 'Client Websites & WordPress' },
];

export const channelForCategory = (category) =>
  CHANNELS.find((c) => c.category === category) || CHANNELS[0];

/* Flagship captures, ranked by billing weight. */
export const FLAGSHIP_IDS = [1, 2, 5, 9];
