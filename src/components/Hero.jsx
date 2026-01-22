import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroImage from "../assets/hero-img.png"; // Make sure the path matches your file name!

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "React Native Developer",
    "WordPress Developer",
    "React Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

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
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <div className="badge">Welcome to my Portfolio</div>
          <h1>
            Hey, I'm <span className="highlight">Aroosha Zuha</span>
          </h1>
          <h2 className="typewriter">
            I am a <span className="role-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          {/*
          <p className="hero-description">
            Building cross-platform mobile apps with React Native, crafting
            custom WordPress solutions, and engineering AI systems. Let's build
            something amazing together.
          </p>
          */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Aroosha Zuha Illustration"
            className="hero-img"
          />
          {/* Decorative background circle */}
          <div className="hero-blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
