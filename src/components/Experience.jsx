import { useEffect, useId, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { EXPERIENCE } from '../data/experience';
import './Experience.css';

const VISIBLE = 3;

const channelFor = (exp) => {
  if (exp.isEducation) return 'web';
  if (/WordPress|E-Commerce/i.test(exp.role)) return 'web';
  if (/GoHighLevel|CRM/i.test(exp.role)) return 'crm';
  return 'ai';
};

const Entry = ({ exp, index }) => {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const extra = exp.highlights.length - VISIBLE;
  const current = exp.badgeClass === 'badge-current';

  return (
    <li className="acq" data-ch={channelFor(exp)} data-reveal style={{ '--d': `${index * 60}ms` }}>
      <div className="acq-when">
        <span className="acq-period">{exp.period}</span>
        <span className={`acq-status readout ${current ? 'is-live' : ''}`}>
          <span className="acq-status-led" aria-hidden="true" />
          {exp.type}
        </span>
      </div>

      <div className="acq-trigger" aria-hidden="true">
        <span className="acq-marker" />
      </div>

      <article className="acq-body">
        <header className="acq-head">
          <h3 className="acq-company">{exp.company}</h3>
          <p className="acq-role">{exp.role}</p>
        </header>

        <p className="acq-desc">{exp.description}</p>

        <h4 className="acq-sub">Key contributions</h4>
        <ul id={listId} className="acq-list">
          {exp.highlights.map((item, i) => (
            <li key={item} hidden={!open && i >= VISIBLE} className={i >= VISIBLE ? 'is-extra' : ''}>
              {item}
            </li>
          ))}
        </ul>

        {extra > 0 && (
          <button
            type="button"
            className="acq-more"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Show fewer' : `Show ${extra} more`}
            <FaChevronDown aria-hidden="true" />
          </button>
        )}

        <ul className="acq-tags" aria-label="Technologies">
          {exp.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>
    </li>
  );
};

const Experience = () => {
  const logRef = useRef(null);

  // The trace down the log fills with scroll; markers light as it passes.
  useEffect(() => {
    const el = logRef.current;
    if (!el) return undefined;
    const markers = [...el.querySelectorAll('.acq')];
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const probe = window.innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (probe - r.top) / r.height));
      el.style.setProperty('--fill', p.toFixed(4));
      markers.forEach((m) => {
        const mr = m.getBoundingClientRect();
        m.classList.toggle('is-triggered', mr.top + 24 < probe);
      });
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

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="experience-title" className="section-title" data-reveal="sweep">
            Work <em>experience</em>
          </h2>
          <p className="section-intro" data-reveal style={{ '--d': '120ms' }}>
            Hands-on engineering and production delivery, from current client systems back to my
            senior design research.
          </p>
        </div>

        <ol ref={logRef} className="acq-log">
          {EXPERIENCE.map((exp, i) => (
            <Entry key={exp.company} exp={exp} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
