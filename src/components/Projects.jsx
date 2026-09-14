import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { FaCheckCircle, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { useTilt } from '../hooks/useTilt';

import topfuncharters from '../assets/topfuncharters.png';
import adaptai from '../assets/adaptai.png';
import elio from '../assets/elio.png';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import florex from '../assets/florex.png';
import aqs from '../assets/aqs.png';
import ggcc from '../assets/ggcc.png';
import dronemission from '../assets/dronemission.png';

// Individual Project Card with 3D Tilt & Specular Light
const ProjectCard = ({ project, index, isVisible }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxTilt: 4, perspective: 1100, scale: 1.015 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`project-card ${isVisible ? 'show' : 'hidden-top'}`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <div className="card-glare" />

      {/* Card Image Banner */}
      <div className="card-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="card-image-overlay"></div>
        <span className="card-category-pill">{project.category}</span>

        {/* Dynamic Project Flow Mini Indicator for AI & SaaS architectures */}
        {project.id === 1 && (
          <div className="project-architecture-ribbon">
            <span>Website</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>Chatbot</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>GHL CRM</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>Booking</span>
          </div>
        )}
        {project.id === 2 && (
          <div className="project-architecture-ribbon">
            <span>5 n8n Agents</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>Calendar API</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>Logic</span>
          </div>
        )}
        {project.id === 3 && (
          <div className="project-architecture-ribbon">
            <span>Drive</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>n8n RAG</span>
            <FaArrowRight className="ribbon-arrow" />
            <span>pgvector</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>

        {/* "What I Worked On" Highlights */}
        <div className="project-highlights">
          <span className="highlights-title">What I Built & Engineered:</span>
          <ul className="project-bullet-list">
            {project.workedOn.map((item, idx) => (
              <li key={idx} className="project-bullet-item">
                <FaCheckCircle className="bullet-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="project-tech-badges">
          {project.tech.map((t, idx) => (
            <span key={idx} className="project-tech-tag">{t}</span>
          ))}
        </div>

        {/* Footer Action */}
        <div className="card-action-bar">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn link-active"
            >
              <span>{project.linkText}</span>
              <FaExternalLinkAlt className="btn-icon" />
            </a>
          ) : (
            <span className="card-badge-status">
              {project.linkText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

  const categories = ["All", "AI & Automation", "CRM & Workflows", "Full Stack SaaS", "Web & Mobile"];

  const projectData = [
    {
      id: 1,
      title: "Top Fun Charters",
      category: "AI & Full Stack Solution",
      secondaryCategories: ["AI & Automation", "CRM & Workflows"],
      image: topfuncharters,
      tagline: "A complete digital and automation solution for a private yacht charter business, combining a customer-facing website, GoHighLevel CRM automations, booking workflows, and an AI chatbot.",
      workedOn: [
        "Website Development: Built the customer-facing yacht charter website, booking journey, and custom experience presentations.",
        "AI-Powered Chatbot: Developed a customer-facing AI chatbot to assist visitors with charter inquiries and booking guidance.",
        "GoHighLevel CRM: Configured lead capture, tiered guest routing (1–6 & 7–13 guests), and automated communication workflows.",
        "Integrations & Payments: Connected n8n automation flows, Square payment routing, and operational follow-ups."
      ],
      tech: ["Website Development", "AI Chatbot", "n8n", "GoHighLevel", "CRM Automation", "Booking Workflows", "Square", "APIs"],
      link: "https://www.topfuncharters.com/",
      linkText: "Visit Website"
    },
    {
      id: 2,
      title: "PDS — AI Booking Automation",
      category: "AI & Automation",
      image: proj2,
      tagline: "Multi-agent conversational AI booking system for a luxury auto-detailing business.",
      workedOn: [
        "Built and refined 5 n8n conversational AI booking agents with concierge tone",
        "Integrated Google Calendar appointment scheduling with timezone debugging",
        "Replaced unreliable LLM vehicle classification with deterministic lookup logic",
        "Designed stateful booking logic, prompt engineering & error-handling pipelines"
      ],
      tech: ["n8n", "AI Agents", "LLMs", "Google Calendar", "Deterministic Logic", "APIs"],
      linkText: "AI Automation System"
    },
    {
      id: 3,
      title: "Ask James — AI Real Estate Mentor",
      category: "AI & Automation",
      image: proj3,
      tagline: "AI real-estate investment mentor & RAG knowledge pipeline integrated with GoHighLevel.",
      workedOn: [
        "Built automated RAG pipeline: Google Drive → n8n → Embeddings → Supabase/pgvector",
        "Integrated GoHighLevel membership validation, contact access control & HMAC security",
        "Connected Apify & Zillow property comparable data mapping & normalization layer",
        "Debugged upstream payload schema variations and implemented diagnostic logging"
      ],
      tech: ["OpenAI", "RAG", "n8n", "Supabase", "pgvector", "GoHighLevel", "Apify", "HMAC"],
      linkText: "AI & RAG System"
    },
    {
      id: 4,
      title: "AlphaVenue — Wedding/Event Automation",
      category: "CRM & Workflows",
      image: proj1,
      tagline: "Cross-system event automation connecting GoHighLevel, BoldSign agreements & reservations.",
      workedOn: [
        "Built automated GoHighLevel to AlphaVenue workflow pipeline",
        "Integrated BoldSign digital agreement generation & signature tracking",
        "Automated post-signature reservation confirmation and invoicing workflows",
        "Streamlined wedding & couple profile onboarding data mapping"
      ],
      tech: ["GoHighLevel", "BoldSign", "API Integration", "Business Workflows", "Invoicing"],
      linkText: "Workflow Automation"
    },
    {
      id: 5,
      title: "Oculo Digital / Kindwell Solutions",
      category: "CRM & Workflows",
      image: ggcc,
      tagline: "GoHighLevel CRM audit, funnel optimization, and workflow troubleshooting.",
      workedOn: [
        "Conducted comprehensive GoHighLevel CRM audit and pipeline cleanup",
        "Resolved pricing-page and funnel integration bottlenecks",
        "Designed client onboarding documentation & implementation specifications",
        "Validated automated lead communication triggers and notifications"
      ],
      tech: ["GoHighLevel", "CRM Audit", "Funnel Optimization", "Workflow Troubleshooting"],
      linkText: "CRM Optimization"
    },
    {
      id: 6,
      title: "Adapt AI NewsPower — Social Media SaaS",
      category: "Full Stack SaaS",
      image: adaptai,
      tagline: "Unified social media scheduling, multi-account publishing, and AI analytics platform.",
      workedOn: [
        "Full-stack SaaS development with Next.js, Node.js, and PostgreSQL",
        "Multi-account OAuth 2.0 authentication and third-party social API integrations",
        "Automated post scheduling engine and analytics aggregation dashboard",
        "Integrated Stripe subscription billing and role-based access control"
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "OAuth 2.0", "TypeScript"],
      link: "https://adapt.ainewspower.com/",
      linkText: "Live Platform"
    },
    {
      id: 7,
      title: "Elio — Construction Management SaaS",
      category: "Full Stack SaaS",
      image: elio,
      tagline: "Collaborative construction management platform for builders, contractors, and owners.",
      workedOn: [
        "Full-stack architecture across React, Next.js, React Native, Node.js, and TypeScript",
        "Real-time chat system with read/unread tracking and socket-based notifications",
        "Contractor quote invitation workflows, autofill & role-based project visibility",
        "Milestone tracking, schedule summaries, and invoice management workflows"
      ],
      tech: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "WebSockets"],
      linkText: "Full Stack SaaS"
    },
    {
      id: 8,
      title: "AI-Based Autonomous Drone Navigation",
      category: "AI & Automation",
      image: dronemission,
      tagline: "GPS-independent UAV navigation in dense environments using sensor fusion and RL.",
      workedOn: [
        "Sensor fusion and reinforcement learning models for obstacle avoidance",
        "High-fidelity simulation in Unreal Engine and AirSim",
        "Senior Design Project at COMSATS University Islamabad (Awarded Grade A)",
        "Foundation for upcoming research publication"
      ],
      tech: ["Reinforcement Learning", "AirSim", "Unreal Engine", "Computer Vision", "Sensor Fusion"],
      linkText: "AI & Robotics Spec"
    },
    {
      id: 9,
      title: "Florex Pharma E-commerce",
      category: "Web & Mobile",
      image: florex,
      tagline: "Custom pharmaceutical e-commerce platform with secure payment integration.",
      workedOn: [
        "Custom WordPress and WooCommerce e-commerce development",
        "Secure API payment gateway integration and optimized checkout flow",
        "Performance optimization, custom plugin configuration, and backup maintenance"
      ],
      tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Payment Gateway"],
      link: "https://florexpharma.com/",
      linkText: "Visit Website"
    },
    {
      id: 10,
      title: "AQS Consultancy & Enterprise",
      category: "Web & Mobile",
      image: aqs,
      tagline: "Corporate website and digital brand platform for engineering & technical consultancy.",
      workedOn: [
        "Developed the official corporate website with tailored service showcases and inquiry funnels",
        "Engineered responsive UI/UX architecture and brand styling for technical decision-makers",
        "Conducted performance optimization, cross-browser compatibility, and SEO setup"
      ],
      tech: ["WordPress", "PHP", "JavaScript", "Responsive Design", "SEO Optimization"],
      link: "https://aqspk.com/",
      linkText: "Visit Website"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projectData
    : projectData.filter(project => 
        project.category === activeCategory || 
        (Array.isArray(project.secondaryCategories) && project.secondaryCategories.includes(activeCategory))
      );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">

        {/* Section Header */}
        <div className={`projects-header ${isVisible ? 'show' : 'hidden-top'}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">AI Automations, Agent Workflows & Full-Stack Systems</p>
        </div>

        {/* Filter Tabs */}
        <div className={`projects-tabs ${isVisible ? 'show' : 'hidden-right'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;