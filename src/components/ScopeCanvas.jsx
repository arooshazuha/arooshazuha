import { useEffect, useRef } from 'react';

/*
 * The hero instrument: a 10 x 8 graticule with four live channel traces.
 *  - Traces sweep in once on load (acquisition), then run continuously.
 *  - `focus` isolates one channel; the others dim.
 *  - The pointer leaves a decaying persistence trace and drives X/Y cursors.
 * Renders only while visible; reduced motion gets one static frame.
 */

const TRACES = [
  { id: 'ai', color: [242, 214, 75], lane: 0.25 },
  { id: 'stack', color: [54, 226, 230], lane: 0.45 },
  { id: 'crm', color: [255, 79, 163], lane: 0.64 },
  { id: 'web', color: [125, 147, 255], lane: 0.82 },
];

const DIV_X = 10;
const DIV_Y = 8;

// Signal shapes, x in divisions (0..10), t in seconds. Return -1..1.
const SHAPES = {
  // analog: a carrier with a slow envelope and a harmonic
  ai: (x, t) => {
    const env = 0.55 + 0.45 * Math.sin(x * 0.55 - t * 0.6);
    return env * (Math.sin(x * 3.1 - t * 2.4) * 0.8 + Math.sin(x * 9.3 - t * 5.1) * 0.12);
  },
  // digital bus: smoothed square pulses with a moving duty cycle
  stack: (x, t) => {
    const s = Math.sin(x * 2.2 - t * 1.8) + 0.35 * Math.sin(x * 0.7 + t * 0.5);
    return Math.tanh(s * 7) * 0.62;
  },
  // bursts: damped ringing every ~2.5 divisions
  crm: (x, t) => {
    const p = ((x - t * 0.9) % 2.5 + 2.5) % 2.5;
    return Math.exp(-p * 2.2) * Math.sin(p * 18) * 0.95;
  },
  // ramp: a low triangle with a little ripple
  web: (x, t) => {
    const p = ((x * 0.8 - t * 0.5) % 2 + 2) % 2;
    const tri = p < 1 ? p : 2 - p;
    return (tri - 0.5) * 0.9 + Math.sin(x * 14 - t * 6) * 0.03;
  },
};

const easeOutExpo = (k) => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k));

const ScopeCanvas = ({ focus = null, className = '' }) => {
  const canvasRef = useRef(null);
  const focusRef = useRef(focus);

  useEffect(() => {
    focusRef.current = focus;
  }, [focus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let start = performance.now();
    const alpha = TRACES.map(() => 1);
    const trail = []; // {x, y, t}
    const pointer = { x: -1, y: -1, inside: false };
    let grid = null;

    const buildGrid = () => {
      grid = document.createElement('canvas');
      grid.width = Math.round(w * dpr);
      grid.height = Math.round(h * dpr);
      const g = grid.getContext('2d');
      g.scale(dpr, dpr);
      const dx = w / DIV_X;
      const dy = h / DIV_Y;
      g.strokeStyle = 'rgba(140,165,190,0.10)';
      g.lineWidth = 1;
      g.beginPath();
      for (let i = 1; i < DIV_X; i += 1) {
        const x = Math.round(i * dx) + 0.5;
        g.moveTo(x, 0);
        g.lineTo(x, h);
      }
      for (let j = 1; j < DIV_Y; j += 1) {
        const y = Math.round(j * dy) + 0.5;
        g.moveTo(0, y);
        g.lineTo(w, y);
      }
      g.stroke();
      // center axes with minor ticks (5 per division)
      g.strokeStyle = 'rgba(160,185,210,0.22)';
      g.beginPath();
      const cx = Math.round(w / 2) + 0.5;
      const cy = Math.round(h / 2) + 0.5;
      g.moveTo(cx, 0);
      g.lineTo(cx, h);
      g.moveTo(0, cy);
      g.lineTo(w, cy);
      for (let i = 0; i <= DIV_X * 5; i += 1) {
        const x = Math.round((i * dx) / 5) + 0.5;
        g.moveTo(x, cy - 3);
        g.lineTo(x, cy + 4);
      }
      for (let j = 0; j <= DIV_Y * 5; j += 1) {
        const y = Math.round((j * dy) / 5) + 0.5;
        g.moveTo(cx - 3, y);
        g.lineTo(cx + 4, y);
      }
      g.stroke();
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      buildGrid();
      if (!running) draw(performance.now());
    };

    const drawTrace = (tr, i, t, sweepX) => {
      const shape = SHAPES[tr.id];
      const laneY = tr.lane * h;
      const amp = Math.min(h * 0.075, 64);
      const step = w > 900 ? 3 : 4;
      const a = alpha[i];
      if (a < 0.01) return;
      const [r, g, b] = tr.color;

      ctx.beginPath();
      for (let px = 0; px <= sweepX; px += step) {
        const x = (px / w) * DIV_X;
        const y = laneY - shape(x, t) * amp;
        if (px === 0) ctx.moveTo(px, y);
        else ctx.lineTo(px, y);
      }
      // bloom pass then core pass
      ctx.strokeStyle = `rgba(${r},${g},${b},${0.14 * a})`;
      ctx.lineWidth = 7;
      ctx.stroke();
      ctx.strokeStyle = `rgba(${r},${g},${b},${0.9 * a})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // write head during acquisition
      if (sweepX < w) {
        const x = (sweepX / w) * DIV_X;
        const y = laneY - shape(x, t) * amp;
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.beginPath();
        ctx.arc(sweepX, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // channel ground marker on the left edge
      ctx.fillStyle = `rgba(${r},${g},${b},${0.85 * Math.max(a, 0.35)})`;
      ctx.beginPath();
      ctx.moveTo(0, laneY - 6);
      ctx.lineTo(9, laneY);
      ctx.lineTo(0, laneY + 6);
      ctx.closePath();
      ctx.fill();
    };

    const drawPointer = (now) => {
      // persistence trail
      while (trail.length && now - trail[0].t > 1400) trail.shift();
      if (trail.length > 1) {
        for (let k = 1; k < trail.length; k += 1) {
          const p0 = trail[k - 1];
          const p1 = trail[k];
          const age = (now - p1.t) / 1400;
          ctx.strokeStyle = `rgba(62,240,138,${(1 - age) * 0.55})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
      }
      if (!pointer.inside) return;
      // X/Y cursors
      ctx.setLineDash([4, 5]);
      ctx.strokeStyle = 'rgba(233,237,242,0.28)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(Math.round(pointer.x) + 0.5, 0);
      ctx.lineTo(Math.round(pointer.x) + 0.5, h);
      ctx.moveTo(0, Math.round(pointer.y) + 0.5);
      ctx.lineTo(w, Math.round(pointer.y) + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
      const divX = (pointer.x / w) * DIV_X;
      const divY = (0.5 - pointer.y / h) * DIV_Y;
      const label = `X ${divX.toFixed(2)} div   Y ${divY >= 0 ? '+' : ''}${divY.toFixed(2)} div`;
      ctx.font = '500 11px "Martian Mono", ui-monospace, monospace';
      const tw = ctx.measureText(label).width;
      const bx = Math.min(pointer.x + 14, w - tw - 20);
      const by = Math.max(pointer.y - 30, 8);
      ctx.fillStyle = 'rgba(7,9,12,0.85)';
      ctx.fillRect(bx, by, tw + 14, 20);
      ctx.strokeStyle = 'rgba(150,172,198,0.3)';
      ctx.strokeRect(bx + 0.5, by + 0.5, tw + 13, 19);
      ctx.fillStyle = 'rgba(233,237,242,0.9)';
      ctx.fillText(label, bx + 7, by + 14);
    };

    function draw(now) {
      const t = reduce ? 1.2 : (now - start) / 1000;
      const sweep = reduce ? 1 : easeOutExpo(Math.min(1, (now - start) / 1600));
      const sweepX = sweep * w;
      const f = focusRef.current;

      TRACES.forEach((tr, i) => {
        const target = !f || f === tr.id ? 1 : 0.12;
        alpha[i] += (target - alpha[i]) * (reduce ? 1 : 0.12);
      });

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      if (grid) ctx.drawImage(grid, 0, 0, w, h);
      TRACES.forEach((tr, i) => drawTrace(tr, i, t, sweepX));
      if (finePointer && !reduce) drawPointer(now);
    }

    const loop = (now) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const play = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.inside = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
      if (pointer.inside) trail.push({ x: pointer.x, y: pointer.y, t: performance.now() });
      if (trail.length > 160) trail.shift();
    };

    const onLeave = () => {
      pointer.inside = false;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) play();
      else pause();
    });
    io.observe(canvas);

    const onVis = () => {
      if (document.hidden) pause();
      else if (canvas.getBoundingClientRect().bottom > 0) play();
    };
    document.addEventListener('visibilitychange', onVis);

    if (finePointer && !reduce) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
    }

    // Re-render the static frame when focus changes under reduced motion.
    let focusTimer = 0;
    if (reduce) {
      focusTimer = window.setInterval(() => draw(performance.now()), 250);
    }

    if (document.fonts?.ready) document.fonts.ready.then(() => !running && draw(performance.now()));
    start = performance.now();

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      window.clearInterval(focusTimer);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default ScopeCanvas;
