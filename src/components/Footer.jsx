import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Identity */}
                <div className="footer-col identity">
                    <h2 className="footer-logo">Aroosha.</h2>
                    <p className="footer-tagline">
                        AI Automation Engineer | Full Stack Developer
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/aroosha-zuha-a35105267/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a
                            href="https://github.com/arooshazuha"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="#contact" aria-label="Contact">
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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Newsletter */}
                <div className="footer-col newsletter">
                    <h3>Stay Connected</h3>
                    <p>Join my newsletter for AI & Dev insights.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter email"
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
