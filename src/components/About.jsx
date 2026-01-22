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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
            I am a versatile developer who thrives on turning complex ideas into
            reality. I specialize in <strong>WordPress</strong>, having
            delivered 5+ custom websites with expert precision. My stack extends
            to the <strong>React ecosystem</strong>, where I’ve built two{" "}
            <strong>React Native</strong> mobile apps, an{" "}
            <strong>Electron</strong> desktop application, and this portfolio
            itself.
          </p>

          <p className="about-description">
            Beyond traditional coding, I am deeply invested in{" "}
            <strong>AI & Machine Learning</strong>, creating projects like an{" "}
            <strong>Autonomous Drone Navigation System</strong> and an{" "}
            <strong>AI Resume Assistant</strong>.
          </p>

          <p className="about-description">
            I believe in the power of modern tools. I rely on an AI-assisted{" "}
            <strong>'vibe coding'</strong> workflow that lets me turn ideas into
            working products faster than ever. I don't just write code; I
            engineer solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
