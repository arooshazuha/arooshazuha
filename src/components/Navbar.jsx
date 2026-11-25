import { useEffect, useRef, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useMagnetic } from '../hooks/useMagnetic';
import './Navbar.css';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const SPY_IDS = ['home', ...LINKS.map((l) => l.id)];

const lahoreTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(lahoreTime);
  const markerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const active = useScrollSpy(SPY_IDS, 160);
  const { ref: runRef, onMouseMove: runMove, onMouseLeave: runLeave } = useMagnetic(0.25);

  // Lahore clock: a real readout, updated each 20s
  useEffect(() => {
    const id = window.setInterval(() => setTime(lahoreTime()), 20000);
    return () => window.clearInterval(id);
  }, []);

  // Timebase marker = scroll progress; written straight to the DOM
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (markerRef.current) markerRef.current.style.setProperty('--p', p.toFixed(4));
      setIsScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Drawer: scroll lock, Escape, focus handling
  useEffect(() => {
    document.body.classList.toggle('menu-locked', isOpen);
    if (!isOpen) return undefined;
    const first = menuRef.current?.querySelector('a');
    first?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-locked');
    };
  }, [isOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const close = () => mq.matches && setIsOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header className={`nav ${isScrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <nav className="nav-bar wrap" aria-label="Primary">
        <a href="#home" className="nav-mark" onClick={close} aria-label="Aroosha Zuha, back to top">
          <span className="nav-mark-word">Aroosha</span>
          <span className="nav-mark-dot" aria-hidden="true" />
        </a>

        <ul className="nav-keys">
          {LINKS.slice(0, 4).map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`nav-key ${active === l.id ? 'is-active' : ''}`}
                aria-current={active === l.id ? 'location' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <span className="nav-clock readout" title="Local time in Lahore, Pakistan">
            <span className="nav-clock-led" aria-hidden="true" />
            LHR <time>{time}</time> PKT
          </span>
          <a
            ref={runRef}
            onMouseMove={runMove}
            onMouseLeave={runLeave}
            href="#contact"
            className="key key-run nav-run"
          >
            <span className="key-led" aria-hidden="true" />
            Get in touch
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="nav-drawer"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="nav-toggle-label">{isOpen ? 'Close' : 'Menu'}</span>
            <span className="nav-toggle-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <div className="nav-timebase" ref={markerRef} aria-hidden="true">
        <span className="nav-timebase-marker" />
      </div>

      <div
        id="nav-drawer"
        ref={menuRef}
        className="nav-drawer"
        hidden={!isOpen}
      >
        <ul className="wrap">
          {LINKS.map((l, i) => (
            <li key={l.id} style={{ '--i': i }}>
              <a href={`#${l.id}`} onClick={close} className={active === l.id ? 'is-active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="nav-drawer-foot wrap">
          Lahore, Pakistan · {time} PKT · Working with US & UK time zones
        </p>
      </div>
    </header>
  );
};

export default Navbar;
