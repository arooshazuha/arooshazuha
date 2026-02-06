import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';

// Placeholder imports for new projects (Assume user will provide these images)
import florex from '../assets/florex.png';
import aqs from '../assets/aqs.png';
import ggcc from '../assets/ggcc.png';
import airesume from '../assets/airesume.png';
import facerecog from '../assets/facerecog.png';
import gitseeker from '../assets/gitseeker.png';
import dailyglow from '../assets/dailyglow.png';
import dronemission from '../assets/dronemission.png';
import portfolio from '../assets/portfolio.png';
import jobtrack from '../assets/jobtrack.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

  const categories = ["All", "React Native", "WordPress", "AI/ML", "React (Web)"];

  const projectData = [
    // React Native
    {
      id: 1,
      title: "Daily Glow",
      category: "React Native",
      image: dailyglow,
      description: "A cross-platform mobile app for daily skincare routines and tracking. Built with React Native for smooth performance on iOS and Android.",
      link: "https://github.com/arooshazuha/DailyGlow",
    },
    {
      id: 2,
      title: "GitSeeker",
      category: "React Native",
      image: gitseeker, // Using existing asset
      description: "A powerful mobile Github search tool featuring a glassmorphic UI, providing detailed profile analytics and repository tracking via the GitHub API.",
      link: "https://github.com/arooshazuha/GitSeekerApp",
    },
    {
      id: 11,
      title: "JobTrack",
      category: "React Native",
      image: jobtrack,
      description: "A comprehensive job tracking application that allows users to add jobs, manage related notes, and update job statuses efficiently.",
      link: "https://github.com/arooshazuha/JobTrack",
    },

    // WordPress
    {
      id: 3,
      title: "Florex Pharma E-commerce",
      category: "WordPress",
      image: florex,
      description: "A comprehensive e-commerce platform built from scratch for a pharmaceutical brand. Features seamless API payment integration and secure checkout flow.",
      link: "https://florexpharma.com",
    },
    {
      id: 4,
      title: "Aqs Advisory",
      category: "WordPress",
      image: aqs,
      description: "A complete digital brand overhaul for a global finance consulting firm. Delivered end-to-end execution including logo design and performance optimization.",
      link: "https://aqsadvisory.com",
    },
    {
      id: 5,
      title: "Government Graduate College of Commerce",
      category: "WordPress",
      image: ggcc,
      description: "A fully customized institutional portal featuring tailored dynamic sections and specific page layouts, optimized for high traffic and accessibility.",
      link: "https://ggcmultan.edu.pk",
    },

    // AI/ML
    {
      id: 6,
      title: "AutoDrone AI",
      category: "AI/ML",
      image: proj3,
      description: "An optimized autonomous navigation system for dense environments. Utilizes Reinforcement Learning and AirSim/Unreal Engine.",
    },
    {
      id: 7,
      title: "AI Resume Assistant",
      category: "AI/ML",
      image: airesume,
      description: "An intelligent recruitment tool that parses resumes to analyze job description fit, featuring an integrated AI chatbot to guide candidates.",
    },
    {
      id: 8,
      title: "Face Recognition System",
      category: "AI/ML",
      image: facerecog,
      description: "A biometric security application built in MATLAB using advanced Digital Image Processing techniques for accurate face detection and identification.",
    },

    // React (Web)
    {
      id: 9,
      title: "Drone Mission Planner (Electron)",
      category: "React (Web)",
      image: dronemission,
      description: "A desktop-class mission control dashboard built with React and Electron. Allows users to plan flight paths, view live video feeds, and monitor telemetry.",
    },
    {
      id: 10,
      title: "Personal Portfolio",
      category: "React (Web)",
      image: portfolio,
      description: "This high-performance, responsive portfolio website. Built with React and Vite, featuring custom glassmorphism UI and ambient particle background.",
    }
  ];

  // Logic to get current projects
  const filteredProjects = activeCategory === "All"
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">

        {/* Title */}
        <h2 className={`section-title ${isVisible ? 'show' : 'hidden-left'}`}>
          Featured Projects
        </h2>

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

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'show' : 'hidden-top'}`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="card-content">
                <span className="card-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel={project.link ? "noopener noreferrer" : ""} className="card-btn">View Project</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;