import React, { useEffect, useRef, useState } from "react";
import { FaBolt, FaLayerGroup, FaRobot } from "react-icons/fa";
import { useTilt } from "../hooks/useTilt";
import "./About.css";
import aboutImage from "../assets/about-img.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { ref: imageTiltRef, onMouseMove: onImageTiltMove, onMouseLeave: onImageTiltLeave } = useTilt({ maxTilt: 6, perspective: 1200, scale: 1.02 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        {/* LEFT SIDE: Interactive Image */}
        <div
          ref={imageTiltRef}
          onMouseMove={onImageTiltMove}
          onMouseLeave={onImageTiltLeave}
          className={`about-image-container ${isVisible ? "show" : "hidden-left"}`}
        >
          <img src={aboutImage} alt="About Aroosha" className="about-img" />
          <div className="about-blob"></div>
        </div>

        {/* RIGHT SIDE: Text Content with interactive highlights */}
        <div className={`about-content ${isVisible ? "show" : "hidden-right"}`}>
          <div className="about-header-wrap">
            <h2 className="section-title">About Me</h2>
          </div>

          <p className="about-description">
            I am an <strong className="interactive-keyword">AI Automation Engineer & Full Stack Developer</strong> dedicated to building intelligent business automations and modern web products. My automation work centers on architecting <strong className="interactive-keyword">n8n AI agent workflows</strong>, building <strong className="interactive-keyword">RAG knowledge pipelines</strong> with OpenAI and Supabase/pgvector, and engineering end-to-end <strong className="interactive-keyword">GoHighLevel CRM systems</strong>.
          </p>

          <p className="about-description">
            What powers my automation work is a strong <strong className="interactive-keyword">full-stack engineering foundation</strong>. Because I work directly with <strong className="interactive-keyword">React, Next.js, Node.js, TypeScript, and PostgreSQL</strong>, I go beyond basic no-code tools — writing custom backend logic, integrating REST APIs, implementing OAuth 2.0 and WebSockets, and building deterministic fallback layers to ensure reliable execution.
          </p>

          <p className="about-description">
            Whether developing multi-agent conversational booking flows or full-stack SaaS platforms like <strong className="interactive-keyword">Adapt AI NewsPower</strong> and <strong className="interactive-keyword">Elio</strong>, I focus on transforming real-world business requirements into robust, production-grade solutions.
          </p>

          {/* Interactive Core Pillars */}
          <div className="about-pillars">
            <div className="pillar-item">
              <FaRobot className="pillar-icon" />
              <div>
                <span className="pillar-title">AI Automations</span>
                <span className="pillar-sub">n8n Agents & RAG</span>
              </div>
            </div>
            <div className="pillar-item">
              <FaLayerGroup className="pillar-icon" />
              <div>
                <span className="pillar-title">Full Stack SaaS</span>
                <span className="pillar-sub">Next.js & PostgreSQL</span>
              </div>
            </div>
            <div className="pillar-item">
              <FaBolt className="pillar-icon" />
              <div>
                <span className="pillar-title">CRM Workflows</span>
                <span className="pillar-sub">GoHighLevel & APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
