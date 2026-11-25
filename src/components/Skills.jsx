import { useEffect, useRef, useState } from 'react';
import skillsImage from '../assets/opt/skills-img.webp';
import './Skills.css';

const SKILLS = [
  { ch: 'crm', short: 'GoHighLevel', name: 'GoHighLevel CRM & Systems', detail: 'Pipelines, funnels, A2P 10DLC', level: 96 },
  { ch: 'ai', short: 'n8n & AI Agents', name: 'n8n Automation & AI Agents', detail: 'Webhooks, logic nodes, guardrails', level: 95 },
  { ch: 'stack', short: 'Full Stack SaaS', name: 'Full Stack SaaS', detail: 'Next.js 16, React 19, TypeScript, Node.js', level: 94 },
  { ch: 'web', short: 'WordPress', name: 'WordPress Custom Plugins & Elementor Pro', detail: 'Plugin engineering, Elementor Pro', level: 93 },
  { ch: 'crm', short: 'APIs & Auth', name: 'API Integrations & Auth', detail: 'Salesforce REST, OAuth 2.0, webhooks', level: 95 },
  { ch: 'ai', short: 'RAG & Vectors', name: 'RAG Pipelines & Vector DBs', detail: 'Supabase, pgvector, OpenAI', level: 91 },
];

const Skills = () => {
  const panelRef = useRef(null);
  const [instant] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window),
  );
  const [armed, setArmed] = useState(instant);
  const [counts, setCounts] = useState(() => SKILLS.map((s) => (instant ? s.level : 0)));
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return undefined;
    if (instant) return undefined;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setArmed(true);
        const t0 = performance.now();
        const dur = 1400;
        const tick = (now) => {
          const k = Math.min(1, (now - t0) / dur);
          const e = 1 - Math.pow(2, -10 * k);
          setCounts(SKILLS.map((s) => Math.round(s.level * (k >= 1 ? 1 : e))));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [instant]);

  const shown = active ?? 0;

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="skills-title" className="section-title" data-reveal="sweep">
            Core <em>competencies</em>
          </h2>
          <p className="section-intro" data-reveal style={{ '--d': '120ms' }}>
            Battle-tested across production systems, live data and client agencies. Hover a band to
            read it in full.
          </p>
        </div>

        <div className="skills-grid">
          <div ref={panelRef} className={`spectrum ticks ${armed ? 'is-armed' : ''}`} data-reveal>
            <div className="spectrum-top readout">
              <span>Self-assessed proficiency · 0 to 100</span>
              <span className="spectrum-top-live">
                <span aria-hidden="true" /> Acquired
              </span>
            </div>

            <div className="spectrum-screen">
              <div className="spectrum-axis readout" aria-hidden="true">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
              <ul className="spectrum-bands" onMouseLeave={() => setActive(null)}>
                {SKILLS.map((s, i) => (
                  <li
                    key={s.name}
                    data-ch={s.ch}
                    className={`band ${active === i ? 'is-active' : ''} ${active !== null && active !== i ? 'is-dim' : ''}`}
                    style={{ '--v': s.level, '--i': i }}
                    onMouseEnter={() => setActive(i)}
                  >
                    <button
                      type="button"
                      className="band-hit"
                      onFocus={() => setActive(i)}
                      onBlur={() => setActive(null)}
                      onClick={() => setActive(i)}
                      aria-label={`${s.name}: ${s.level} percent. ${s.detail}`}
                    />
                    <span className="band-value readout" aria-hidden="true">{counts[i]}</span>
                    <span className="band-bar" aria-hidden="true">
                      <span className="band-fill" />
                      <span className="band-peak" />
                    </span>
                    <span className="band-label" aria-hidden="true">{s.short}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spectrum-detail" aria-live="polite">
              <span className="ch-badge" data-ch={SKILLS[shown].ch}>
                <span className="ch-num">{SKILLS[shown].level}%</span>
              </span>
              <div>
                <p className="spectrum-detail-name">{SKILLS[shown].name}</p>
                <p className="spectrum-detail-sub">{SKILLS[shown].detail}</p>
              </div>
            </div>
          </div>

          <aside className="skills-side" data-reveal style={{ '--d': '160ms' }}>
            <div className="capture ticks skills-capture" data-ch="crm">
              <img src={skillsImage} alt="Illustration representing technical skills" width="500" height="500" loading="lazy" />
            </div>
            <ul className="skills-legend">
              <li data-ch="ai"><span className="ch-badge"><span className="ch-num">CH1</span>AI & Automation</span></li>
              <li data-ch="stack"><span className="ch-badge"><span className="ch-num">CH2</span>Full Stack</span></li>
              <li data-ch="crm"><span className="ch-badge"><span className="ch-num">CH3</span>CRM & GoHighLevel</span></li>
              <li data-ch="web"><span className="ch-badge"><span className="ch-num">CH4</span>Web & WordPress</span></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;
