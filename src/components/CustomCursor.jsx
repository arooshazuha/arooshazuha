import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState({
    type: 'default', // 'default', 'pointer', 'text'
    visible: false
  });

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only run on desktop with pointer
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!cursorState.visible) {
        setCursorState(prev => ({ ...prev, visible: true }));
      }
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, visible: false }));
    };

    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, visible: true }));
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const clickable = target.closest('a, button, .tab-btn, .nav-link, .nav-link-btn, .btn, .social-icon, .social-icon-box, .tool-item, .send-btn, .subscribe-btn, .back-to-top-btn');
      const textInput = target.closest('input, textarea');

      if (clickable) {
        setCursorState(prev => ({ ...prev, type: 'pointer' }));
      } else if (textInput) {
        setCursorState(prev => ({ ...prev, type: 'text' }));
      } else {
        setCursorState(prev => ({ ...prev, type: 'default' }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Spring animation loop for trailing ring
    const render = () => {
      // Ring follows dot with smooth spring easing (0.18)
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.18;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [cursorState.visible]);

  return (
    <div className={`custom-cursor-wrapper ${cursorState.visible ? 'active' : ''} ${cursorState.type}`}>
      {/* Primary Dot */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Trailing Spring Ring */}
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
};

export default CustomCursor;
