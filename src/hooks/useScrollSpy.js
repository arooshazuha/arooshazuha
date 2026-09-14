import { useState, useEffect } from 'react';

/**
 * Custom hook to track the active section on scroll.
 * @param {string[]} sectionIds - Array of element IDs to watch (e.g. ['home', 'about', ...])
 * @param {number} offset - Offset from top of viewport in pixels
 */
export const useScrollSpy = (sectionIds, offset = 120) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
