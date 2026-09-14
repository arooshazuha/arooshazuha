import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { useTilt } from '../hooks/useTilt';

// Experience Card with 3D Tilt & Specular Light Reflection
const ExperienceCard = ({ exp, index, isVisible }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxTilt: 4, perspective: 1200, scale: 1.01 });

  return (
    <div 
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`experience-card ${isVisible ? 'show' : 'hidden-left'}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="card-glare" />

      <div className="card-top">
        <div className="company-info">
          <div className="company-icon-box">
            <FaBriefcase className="company-icon" />
          </div>
          <div>
            <h3 className="company-name">{exp.company}</h3>
            <h4 className="role-title">{exp.role}</h4>
          </div>
        </div>
        <div className="meta-info">
          <span className={`status-pill ${exp.badgeClass}`}>
            {exp.badgeClass === 'badge-current' && <span className="current-live-pulse" />}
            {exp.type}
          </span>
          <span className="period">
            <FaCalendarAlt className="cal-icon" /> {exp.period}
          </span>
        </div>
      </div>

      <p className="exp-description">{exp.description}</p>

      <div className="highlights-section">
        <h5>Key Contributions & Responsibilities:</h5>
        <ul className="highlights-list">
          {exp.highlights.map((item, idx) => (
            <li key={idx} className="highlight-item">
              <FaCheckCircle className="check-bullet" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="exp-tech-tags">
        {exp.tech.map((t, idx) => (
          <span key={idx} className="tech-badge">{t}</span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      company: "Kindwell Solutions",
      role: "AI Automation Engineer",
      period: "2026 – Present",
      type: "Current Role",
      badgeClass: "badge-current",
      description: "Building AI-powered business automations and full-stack solutions for real-world client projects, combining AI agents, CRM workflows, API integrations, and modern web development.",
      highlights: [
        "Built and refined AI agent workflows and business automations using n8n, LLMs, and GoHighLevel.",
        "Designed and integrated CRM, booking, lead-management, and business process workflows across multiple client systems.",
        "Worked with REST APIs and third-party integrations to connect different business platforms and automate processes.",
        "Developed and maintained full-stack web and SaaS functionality using React, Next.js, Node.js, and TypeScript.",
        "Worked on RAG-based AI systems using n8n, Google Drive, embeddings, Supabase, and pgvector.",
        "Debugged complex automation and API integration issues, including third-party data/schema changes and scheduling problems.",
        "Translated business requirements into practical technical solutions, then tested and refined the workflows to improve reliability."
      ],
      tech: ["AI Automation", "n8n", "AI Agents", "GoHighLevel", "LLMs", "RAG", "REST APIs", "React", "Next.js", "Node.js", "TypeScript", "Supabase"]
    },
    {
      company: "Florex Pharma",
      role: "Web Developer",
      period: "2023 – 2025",
      type: "Previous Experience",
      badgeClass: "badge-previous",
      description: "Developed and maintained full-scale e-commerce and digital web platforms for pharmaceutical products.",
      highlights: [
        "Built and maintained responsive e-commerce web applications using WordPress, WooCommerce, and custom themes.",
        "Integrated secure API payment gateways and optimized checkout flows for customer conversions.",
        "Managed performance optimization, database maintenance, regular security audits, and automated backup routines.",
        "Handled custom script troubleshooting, plugin compatibility, and cross-browser testing."
      ],
      tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "HTML5 / CSS3", "Payment Gateways", "Performance Optimization"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience-container">
        
        {/* Header */}
        <div className={`experience-header ${isVisible ? 'show' : 'hidden-top'}`}>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My Professional Journey</p>
        </div>

        {/* Timeline Track & Cards */}
        <div className="experience-timeline">
          <div className="timeline-connector-bar" />
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
