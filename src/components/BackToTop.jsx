import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useMagnetic } from '../hooks/useMagnetic';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: magneticRef, onMouseMove, onMouseLeave } = useMagnetic(0.35);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      ref={magneticRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={scrollToTop}
      className={`back-to-top-btn ${isVisible ? 'visible' : ''}`}
      aria-label="Back to Top"
    >
      <FaChevronUp className="back-to-top-icon" />
      <span className="back-to-top-glow" />
    </button>
  );
};

export default BackToTop;
