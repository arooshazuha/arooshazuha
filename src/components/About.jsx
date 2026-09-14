import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImage from "../assets/about-img.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }, // Trigger when 10% visible
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
        {/* LEFT SIDE: Image (Starts hidden-left, becomes show) */}
        <div
          className={`about-image-container ${isVisible ? "show" : "hidden-left"}`}
        >
          <img src={aboutImage} alt="About Aroosha" className="about-img" />
          <div className="about-blob"></div>
        </div>

        {/* RIGHT SIDE: Text (Starts hidden-right, becomes show) */}
        <div className={`about-content ${isVisible ? "show" : "hidden-right"}`}>
          <h2 className="section-title">About Me</h2>

          {/* Your content here... */}
          <p className="about-description">
            I am an <strong>AI Automation Engineer & Full Stack Developer</strong> dedicated to building intelligent business automations and modern web products. My automation work centers on architecting <strong>n8n AI agent workflows</strong>, building <strong>RAG knowledge pipelines</strong> with OpenAI and Supabase/pgvector, and engineering end-to-end <strong>GoHighLevel CRM systems</strong>.
          </p>

          <p className="about-description">
            What powers my automation work is a strong <strong>full-stack engineering foundation</strong>. Because I work directly with <strong>React, Next.js, Node.js, TypeScript, and PostgreSQL</strong>, I go beyond basic no-code tools — writing custom backend logic, integrating REST APIs, implementing OAuth 2.0 and WebSockets, and building deterministic fallback layers to ensure reliable execution.
          </p>

          <p className="about-description">
            Whether developing multi-agent conversational booking flows or full-stack SaaS platforms like <strong>Adapt AI NewsPower</strong> and <strong>Elio</strong>, I focus on transforming real-world business requirements into robust, production-grade solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
