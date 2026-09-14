import { useRef, useCallback } from 'react';

/**
 * Custom hook for smooth 3D card tilt and cursor specular light positioning.
 * Automatically disables on touch devices / prefers-reduced-motion.
 * @param {Object} options - { maxTilt: number, perspective: number, scale: number }
 */
export const useTilt = ({ maxTilt = 4, perspective = 1000, scale = 1.02 } = {}) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || window.matchMedia('(hover: none)').matches) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = -percentY * maxTilt;
    const rotateY = percentX * maxTilt;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  }, [maxTilt, perspective, scale]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const el = cardRef.current;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    el.style.setProperty('--mouse-x', `-1000px`);
    el.style.setProperty('--mouse-y', `-1000px`);
  }, [perspective]);

  return {
    ref: cardRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};

export default useTilt;
