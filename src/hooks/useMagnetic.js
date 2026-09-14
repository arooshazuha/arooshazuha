import { useRef, useCallback } from 'react';

/**
 * Custom hook for subtle magnetic button attraction following the cursor.
 * @param {number} pullStrength - max displacement factor (e.g. 0.3)
 */
export const useMagnetic = (pullStrength = 0.3) => {
  const elementRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!elementRef.current || window.matchMedia('(hover: none)').matches) return;

    const el = elementRef.current;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * pullStrength;
    const deltaY = (e.clientY - centerY) * pullStrength;

    // Limit maximum displacement to 12px
    const maxDisplacement = 12;
    const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX));
    const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY));

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${clampedX.toFixed(1)}px, ${clampedY.toFixed(1)}px, 0)`;
    });
  }, [pullStrength]);

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const el = elementRef.current;
    el.style.transform = 'translate3d(0, 0, 0)';
    el.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';

    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 400);
  }, []);

  return {
    ref: elementRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};

export default useMagnetic;
