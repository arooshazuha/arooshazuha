import React, { useEffect, useState, useRef } from 'react';
import './TechStack.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaWordpressSimple, FaElementor,
    FaGitAlt, FaGithub, FaSearch, FaPaintBrush, FaMobileAlt, FaDatabase
} from 'react-icons/fa';
import { SiTypescript, SiExpo, SiFirebase, SiMongodb, SiMysql } from 'react-icons/si';

const TechStack = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const techCategories = [
        {
            title: "Frontend",
            tools: [
                { name: "HTML5", icon: <FaHtml5 className="tech-icon html" /> },
                { name: "CSS3", icon: <FaCss3Alt className="tech-icon css" /> },
                { name: "JavaScript", icon: <FaJs className="tech-icon js" /> },
                { name: "React", icon: <FaReact className="tech-icon react" /> },
                { name: "TypeScript", icon: <SiTypescript className="tech-icon ts" /> },
                { name: "Responsive", icon: <FaMobileAlt className="tech-icon mobile" /> },
            ]
        },
        {
            title: "Mobile App Dev",
            tools: [
                { name: "React Native", icon: <FaReact className="tech-icon react-native" /> },
                { name: "Expo", icon: <SiExpo className="tech-icon expo" /> },
                { name: "TypeScript", icon: <SiTypescript className="tech-icon ts" /> },
            ]
        },
        {
            title: "CMS & Web",
            tools: [
                { name: "WordPress", icon: <FaWordpress className="tech-icon wp" /> },
                { name: "WooCommerce", icon: <FaWordpressSimple className="tech-icon woo" /> },
                { name: "Elementor", icon: <FaElementor className="tech-icon elementor" /> },
                { name: "Custom Themes", icon: <FaPaintBrush className="tech-icon theme" /> },
            ]
        },
        {
            title: "Backend & Data",
            tools: [
                { name: "Firebase", icon: <SiFirebase className="tech-icon firebase" /> },
                { name: "REST APIs", icon: <FaDatabase className="tech-icon db" /> },
                { name: "MongoDB", icon: <SiMongodb className="tech-icon mongo" /> },
                { name: "MySQL", icon: <SiMysql className="tech-icon mysql" /> },
            ]
        },
        {
            title: "Tools & Practices",
            tools: [
                { name: "Git", icon: <FaGitAlt className="tech-icon git" /> },
                { name: "GitHub", icon: <FaGithub className="tech-icon github" /> },
                { name: "SEO Opt.", icon: <FaSearch className="tech-icon seo" /> },
                { name: "UI/UX", icon: <FaPaintBrush className="tech-icon ui" /> }, // Reusing PaintBrush or could use FaFigma
            ]
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

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="tech-stack" className="tech-stack" ref={sectionRef}>
            <div className={`tech-container ${isVisible ? 'animate-in' : ''}`}>

                <div className="section-header">
                    <h2 className="section-title">Tools & Technologies</h2>
                    <p className="section-subtitle">My Technical Stack</p>
                </div>

                <div className="tech-grid">
                    {techCategories.map((category, index) => (
                        <div
                            key={index}
                            className="tech-category-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <div className="tools-list">
                                {category.tools.map((tool, idx) => (
                                    <div key={idx} className="tool-item">
                                        <div className="icon-wrapper">
                                            {tool.icon}
                                        </div>
                                        <span className="tool-name">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;
