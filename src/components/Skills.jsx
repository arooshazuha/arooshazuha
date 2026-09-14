import React, { useEffect, useState, useRef } from 'react';
import { useTilt } from '../hooks/useTilt';
import './Skills.css';
import skillsImage from '../assets/skills-img.png';

const SKILLS_DATA = [
  { name: 'AI Automation & n8n Workflows', target: 95, level: '95%' },
  { name: 'Full Stack Development (React / Next.js / Node)', target: 95, level: '95%' },
  { name: 'CRM & Business Workflows (GoHighLevel)', target: 92, level: '92%' },
  { name: 'RAG & AI Agents (OpenAI, Supabase / pgvector)', target: 90, level: '90%' },
  { name: 'API Integrations & Webhooks', target: 94, level: '94%' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(SKILLS_DATA.map(() => 0));
  const sectionRef = useRef(null);
  const { ref: imageTiltRef, onMouseMove: onImageTiltMove, onMouseLeave: onImageTiltLeave } = useTilt({ maxTilt: 6, perspective: 1200, scale: 1.02 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // Count-up animation
          const duration = 1500;
          const startTime = performance.now();

          const updateCounts = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(SKILLS_DATA.map(skill => Math.round(skill.target * easeOutProgress)));

            if (progress < 1) {
              requestAnimationFrame(updateCounts);
            }
          };

          requestAnimationFrame(updateCounts);
        }
      },
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="skills" className={`skills ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
      <div className="skills-container">

        {/* LEFT SIDE: Text/Bars with Animated Count-Up */}
        <div className={`skills-content ${isVisible ? 'show' : 'hidden-left'}`}>
          <h2 className="section-title">My Skills</h2>

          <div className="skills-list">
            {SKILLS_DATA.map((skill, index) => (
              <div key={index} className="skill-item">

                {/* Skill Info (Name and Animated Percentage text) */}
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{counts[index]}%</span>
                </div>

                {/* The Bar with glowing head */}
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ '--target-width': skill.level }}
                  >
                    <div className="skill-bar-head-glow" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Illustration with Depth */}
        <div 
          ref={imageTiltRef}
          onMouseMove={onImageTiltMove}
          onMouseLeave={onImageTiltLeave}
          className={`skills-image-container ${isVisible ? 'show' : 'hidden-right'}`}
        >
          <img src={skillsImage} alt="Skills Illustration" className="skills-img" />
          <div className="skills-blob"></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;