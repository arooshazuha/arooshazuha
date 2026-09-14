import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useMagnetic } from '../hooks/useMagnetic';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navSections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
  const activeSection = useScrollSpy(navSections, 150);

  const { ref: contactBtnRef, onMouseMove: onContactBtnMove, onMouseLeave: onContactBtnLeave } = useMagnetic(0.25);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <a href="#home" className="logo">
          Aroosha<span className="logo-dot">.</span>
        </a>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span>Home</span>
              <span className="nav-link-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span>About</span>
              <span className="nav-link-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span>Skills</span>
              <span className="nav-link-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span>Experience</span>
              <span className="nav-link-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span>Projects</span>
              <span className="nav-link-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a 
              ref={contactBtnRef}
              onMouseMove={onContactBtnMove}
              onMouseLeave={onContactBtnLeave}
              href="#contact" 
              className="nav-link-btn" 
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;