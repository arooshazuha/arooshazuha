import React, { useEffect, useState, useRef } from 'react';
import './TechStack.css';
import {
    FaRobot, FaBrain, FaCogs, FaCalendarAlt, FaDatabase, FaStripe,
    FaGoogleDrive, FaExchangeAlt, FaReact, FaGithub,
    FaKey, FaFileContract, FaSearch, FaProjectDiagram, FaBolt
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs,
    SiPostgresql, SiSupabase, SiOpenai, SiN8N
} from 'react-icons/si';

const TechStack = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const techCategories = [
        {
            title: "AI & Automation",
            tools: [
                { name: "n8n", icon: <SiN8N className="tech-icon n8n" /> },
                { name: "AI Agents", icon: <FaRobot className="tech-icon ai-agent" /> },
                { name: "LLMs / OpenAI", icon: <SiOpenai className="tech-icon openai" /> },
                { name: "RAG Architecture", icon: <FaBrain className="tech-icon rag" /> },
                { name: "Prompt Eng.", icon: <FaProjectDiagram className="tech-icon prompt" /> },
                { name: "GoHighLevel", icon: <FaCogs className="tech-icon ghl" /> },
            ]
        },
        {
            title: "Full Stack",
            tools: [
                { name: "React", icon: <FaReact className="tech-icon react" /> },
                { name: "Next.js", icon: <SiNextdotjs className="tech-icon next" /> },
                { name: "Node.js", icon: <SiNodedotjs className="tech-icon node" /> },
                { name: "TypeScript", icon: <SiTypescript className="tech-icon ts" /> },
                { name: "JavaScript", icon: <SiJavascript className="tech-icon js" /> },
                { name: "React Native", icon: <FaReact className="tech-icon react" /> },
            ]
        },
        {
            title: "APIs & Backend",
            tools: [
                { name: "REST APIs", icon: <FaExchangeAlt className="tech-icon api" /> },
                { name: "OAuth 2.0 / HMAC", icon: <FaKey className="tech-icon auth" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="tech-icon pg" /> },
                { name: "Supabase", icon: <SiSupabase className="tech-icon supabase" /> },
                { name: "pgvector", icon: <FaDatabase className="tech-icon vector" /> },
                { name: "WebSockets", icon: <FaBolt className="tech-icon ws" /> },
            ]
        },
        {
            title: "Integrations & Workflows",
            tools: [
                { name: "Google Calendar", icon: <FaCalendarAlt className="tech-icon gcal" /> },
                { name: "Google Drive", icon: <FaGoogleDrive className="tech-icon gdrive" /> },
                { name: "Apify / Zillow", icon: <FaSearch className="tech-icon search" /> },
                { name: "Square", icon: <FaExchangeAlt className="tech-icon square" /> },
                { name: "BoldSign", icon: <FaFileContract className="tech-icon contract" /> },
                { name: "Stripe", icon: <FaStripe className="tech-icon stripe" /> },
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

        const el = sectionRef.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
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
