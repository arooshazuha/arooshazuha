import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';
import skillsImage from '../assets/skills-img.png'; // Import your new image

const Skills = () => {
  // 1. The Data: Define your skills and percentages here
  const skillsData = [
    { name: 'AI Automation & n8n Workflows', level: '95%' },
    { name: 'Full Stack Development (React / Next.js / Node)', level: '95%' },
    { name: 'CRM & Business Workflows (GoHighLevel)', level: '92%' },
    { name: 'RAG & AI Agents (OpenAI, Supabase / pgvector)', level: '90%' },
    { name: 'API Integrations & Webhooks', level: '94%' },
  ];

  // 2. The State: Tracks if the section is visible on screen
  const [isVisible, setIsVisible] = useState(false);
  // The Ref: A reference to the actual HTML element so we can watch it
  const sectionRef = useRef(null);

  // 3. The Logic: Scroll Detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // If the section enters the viewport, set visible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop watching once triggered (animates only once)
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    // Cleanup function
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);


  return (
    // We add the 'animate' class only when isVisible is true
    <section id="skills" className={`skills ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
      <div className="skills-container">

        {/* LEFT SIDE: Text/Bars slides in from LEFT */}
        <div className={`skills-content ${isVisible ? 'show' : 'hidden-left'}`}>
          <h2 className="section-title">My Skills</h2>

          <div className="skills-list">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item">

                {/* Skill Info (Name and Percentage text) */}
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}</span>
                </div>

                {/* The Bar itself */}
                <div className="skill-bar-bg">
                  {/* We pass the target width as a CSS variable */}
                  <div
                    className="skill-bar-fill"
                    style={{ '--target-width': skill.level }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className={`skills-image-container ${isVisible ? 'show' : 'hidden-right'}`}>
          <img src={skillsImage} alt="Skills Illustration" className="skills-img" />
          <div className="skills-blob"></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;