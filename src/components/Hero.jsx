import React, { useState, useEffect } from "react";
import { FaArrowRight, FaPaperPlane, FaRobot, FaLayerGroup } from "react-icons/fa";
import { useMagnetic } from "../hooks/useMagnetic";
import { useTilt } from "../hooks/useTilt";
import "./Hero.css";
import heroImage from "../assets/hero-img.png";

const ROLES = [
  "AI Automation Engineer",
  "Full Stack Developer",
  "n8n & AI Agent Specialist",
  "SaaS & Web Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const { ref: primaryBtnRef, onMouseMove: onPrimaryMove, onMouseLeave: onPrimaryLeave } = useMagnetic(0.28);
  const { ref: outlineBtnRef, onMouseMove: onOutlineMove, onMouseLeave: onOutlineLeave } = useMagnetic(0.28);
  const { ref: imageTiltRef, onMouseMove: onImageTiltMove, onMouseLeave: onImageTiltLeave } = useTilt({ maxTilt: 6, perspective: 1200, scale: 1.02 });

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % ROLES.length;
      const fullText = ROLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      // Speed adjustments
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <div className="badge">
            <span className="badge-pulse-dot" />
            <span>Welcome to my Portfolio</span>
          </div>

          <h1 className="hero-title">
            Hey, I'm <span className="highlight">Aroosha Zuha</span>
          </h1>

          <h2 className="typewriter">
            I am a <span className="role-text">{text}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            Building AI-powered business automations, intelligent agents, CRM workflows,
            API integrations, SaaS applications, and full-stack web/mobile products.
          </p>

          <div className="hero-buttons">
            <a 
              ref={primaryBtnRef}
              onMouseMove={onPrimaryMove}
              onMouseLeave={onPrimaryLeave}
              href="#projects" 
              className="btn btn-primary magnetic-btn"
            >
              <span>My Work</span>
              <FaArrowRight className="btn-inline-icon" />
            </a>
            <a 
              ref={outlineBtnRef}
              onMouseMove={onOutlineMove}
              onMouseLeave={onOutlineLeave}
              href="#contact" 
              className="btn btn-outline magnetic-btn"
            >
              <span>Let's Connect</span>
              <FaPaperPlane className="btn-inline-icon" />
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Illustration with Depth & Floating Chips */}
        <div 
          ref={imageTiltRef}
          onMouseMove={onImageTiltMove}
          onMouseLeave={onImageTiltLeave}
          className="hero-image-container"
        >
          <img
            src={heroImage}
            alt="Aroosha Zuha Illustration"
            className="hero-img"
          />

          {/* Interactive Floating Micro Chips */}
          <div className="floating-chip chip-top-left">
            <FaRobot className="chip-icon ai" />
            <span>n8n & AI Agents</span>
          </div>

          <div className="floating-chip chip-bottom-right">
            <FaLayerGroup className="chip-icon dev" />
            <span>Full-Stack SaaS</span>
          </div>

          {/* Decorative background glow circle */}
          <div className="hero-blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
