import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Identity */}
                <div className="footer-col identity">
                    <h2 className="footer-logo">
                        Aroosha<span className="footer-logo-dot">.</span>
                    </h2>
                    <p className="footer-tagline">
                        AI Automation Engineer | Full Stack Developer
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/aroosha-zuha-a35105267/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="social-icon-box"
                        >
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a
                            href="https://github.com/arooshazuha"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="social-icon-box"
                        >
                            <FaGithub className="social-icon" />
                        </a>
                        <a 
                            href="#contact" 
                            aria-label="Contact"
                            className="social-icon-box"
                        >
                            <FaEnvelope className="social-icon" />
                        </a>
                    </div>
                    <p className="copyright">
                        © 2026 Aroosha Zuha. All rights reserved.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home"><FaChevronRight className="link-arrow" /> Home</a></li>
                        <li><a href="#about"><FaChevronRight className="link-arrow" /> About</a></li>
                        <li><a href="#skills"><FaChevronRight className="link-arrow" /> Skills</a></li>
                        <li><a href="#experience"><FaChevronRight className="link-arrow" /> Experience</a></li>
                        <li><a href="#projects"><FaChevronRight className="link-arrow" /> Projects</a></li>
                        <li><a href="#contact"><FaChevronRight className="link-arrow" /> Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Newsletter */}
                <div className="footer-col newsletter">
                    <h3>Stay Connected</h3>
                    <p>Join my newsletter for AI & Dev insights.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="glass-input-footer"
                            required
                        />
                        <button type="submit" className="subscribe-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
