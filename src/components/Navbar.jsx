import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <a href="#" className="logo">
          Aroosha<span>.</span>
        </a>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link-btn" onClick={toggleMenu}>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;