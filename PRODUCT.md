# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Hiring managers / technical leads** evaluating Aroosha for remote roles (US & UK timezone overlap). They skim for proof of real production work, stack depth, and judgment.
- **Freelance / agency clients** (US real-estate brokerages, service businesses, agencies) looking for someone to build CRM automations, AI assistants, integrations, and web apps. They want to see that similar problems were solved for businesses like theirs.

Both end at one primary action: get in touch (contact form / email).

## Product Purpose

Personal portfolio of Aroosha Zuha. It must make the case, quickly and credibly, that she builds production AI automation and full-stack systems that connect websites, CRMs, payments, APIs and AI assistants, verified against live data.

## Positioning

Lead identity: **AI Automation Engineer & Full Stack Developer**. GoHighLevel / CRM automation is supporting depth, not the headline.

What a neighbouring portfolio could not truthfully copy: the specific production systems (78-node n8n AI assistant with output guard, GHL → n8n → Salesforce OAuth2 sync, RAG mentor on Supabase pgvector, custom WordPress plugins replicating GHL funnels, Next.js 16 ops dashboard with Clerk roles) and the "verify against live data" working habit (e.g. reversing a bulk-tag error on 1,217 contacts with 0 errors).

## Capabilities and Constraints

- Stack: React 19 + Vite 7, plain CSS per component, react-icons, EmailJS for the contact form (env-configured; falls back to a simulated confirmation when unset). Deployed to GitHub Pages via gh-pages.
- Sections: Hero, About, Skills (competencies), Tech stack, Experience, Projects (18 entries with filters), Contact, Footer.

## Brand Commitments

- Name: Aroosha Zuha. Wordmark "Aroosha." in nav/footer.
- User asked to **keep** (and improve, not remove): the skill proficiency percentages, the footer newsletter form, the public phone number, and the existing illustrations (hero, about, skills, contact).

## Evidence on Hand

- Experience and project copy in `src/components/Experience.jsx` and `src/components/Projects.jsx` (real, user-authored; preserve facts and figures).
- Project screenshots in `src/assets/*.png`; illustrations `hero-img.png`, `about-img.png`, `skills-img.png`, `contact-img.png`.
- Links: LinkedIn `https://www.linkedin.com/in/aroosha-zuha-a35105267/`, GitHub `https://github.com/arooshazuha`, email `aroosha.zuha@gmail.com`, phone `+92 302 0165141`, Lahore, Pakistan.
- No testimonials, client logos, or metrics beyond those in the existing copy. Do not invent any.

## Product Principles

1. Proof over adjectives: every claim on the page should point to a real system that was shipped.
2. Engineering honesty: no invented metrics, clients, or experience.
3. One clear next step for both audiences: contact.
4. Craft is the demonstration: the site itself should show frontend and motion skill, without hurting readability or performance.

## Accessibility & Inclusion

Respect `prefers-reduced-motion`; keyboard-accessible navigation and controls; readable contrast on dark surfaces.
