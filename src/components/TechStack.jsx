import { useEffect, useRef, useState } from 'react';
import {
  FaRobot, FaBrain, FaCogs, FaCalendarAlt, FaStripe, FaExchangeAlt, FaReact,
  FaKey, FaFileContract, FaProjectDiagram, FaWordpress,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiSupabase, SiOpenai, SiN8N, SiElementor, SiWoocommerce,
} from 'react-icons/si';
import './TechStack.css';

const LANES = [
  {
    ch: 'ai', num: 'CH1', title: 'AI & Automation', bus: 'Agent bus',
    tools: [
      { name: 'n8n (Cloud & Node)', Icon: SiN8N },
      { name: 'AI Agent Design', Icon: FaRobot },
      { name: 'OpenAI GPT-4o', Icon: SiOpenai },
      { name: 'RAG Architecture', Icon: FaBrain },
      { name: 'Policy & Output Guards', Icon: FaProjectDiagram },
      { name: 'GoHighLevel Workflows', Icon: FaCogs },
    ],
  },
  {
    ch: 'stack', num: 'CH2', title: 'Full Stack', bus: 'App & data bus',
    tools: [
      { name: 'Next.js 16 (App Router)', Icon: SiNextdotjs },
      { name: 'React 19', Icon: FaReact },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Node.js & Fastify', Icon: SiNodedotjs },
      { name: 'JavaScript (ES6+)', Icon: SiJavascript },
      { name: 'React Native (Mobile)', Icon: FaReact },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'Supabase (pgvector)', Icon: SiSupabase },
    ],
  },
  {
    ch: 'crm', num: 'CH3', title: 'CRM & GoHighLevel', bus: 'Sync bus',
    tools: [
      { name: 'GoHighLevel (GHL)', Icon: FaCogs },
      { name: 'Salesforce REST API', Icon: FaExchangeAlt },
      { name: 'OAuth 2.0 / PKCE', Icon: FaKey },
      { name: 'Webhooks & Relays', Icon: FaExchangeAlt },
      { name: 'A2P 10DLC & Email DNS', Icon: FaFileContract },
      { name: 'Square & Stripe Billing', Icon: FaStripe },
      { name: 'Google Calendar API', Icon: FaCalendarAlt },
    ],
  },
  {
    ch: 'web', num: 'CH4', title: 'Web & WordPress', bus: 'Web bus',
    tools: [
      { name: 'WordPress (Custom Plugins)', Icon: FaWordpress },
      { name: 'Elementor Pro', Icon: SiElementor },
      { name: 'WooCommerce', Icon: SiWoocommerce },
    ],
  },
];

/* A digital waveform drawn once per lane: deterministic pulse widths. */
const pulsePath = (seed) => {
  let d = 'M0 18';
  let x = 0;
  let high = false;
  let s = seed;
  while (x < 1200) {
    s = (s * 9301 + 49297) % 233280;
    const wdt = 14 + (s / 233280) * 46;
    x += wdt;
    high = !high;
    d += ` H${x.toFixed(1)} V${high ? 4 : 18}`;
  }
  return d;
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const [focus, setFocus] = useState(null);

  // Scroll moves the timebase: lanes drift in alternating directions.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - r.top) / (vh + r.height); // 0..1 across the pass
      el.style.setProperty('--scan', Math.min(1, Math.max(0, p)).toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="section tech"
      aria-labelledby="tech-title"
    >
      <div className="wrap">
        <div className="section-head">
          <h2 id="tech-title" className="section-title" data-reveal="sweep">
            Tools on <em>the bus</em>
          </h2>
          <p className="section-intro" data-reveal style={{ '--d': '120ms' }}>
            The tools and frameworks I use across production environments, decoded by channel.
            Hover a lane to isolate it.
          </p>
        </div>

        <div className="lanes ticks" onMouseLeave={() => setFocus(null)}>
          <div className="lanes-ruler readout" aria-hidden="true">
            {Array.from({ length: 11 }, (_, i) => (
              <span key={i}>{`${i * 10}`}</span>
            ))}
          </div>
          {LANES.map((lane, li) => (
            <div
              key={lane.ch}
              data-ch={lane.ch}
              className={`lane ${focus === lane.ch ? 'is-focus' : ''} ${focus && focus !== lane.ch ? 'is-dim' : ''}`}
              onMouseEnter={() => setFocus(lane.ch)}
              data-reveal
              style={{ '--d': `${li * 90}ms`, '--dir': li % 2 ? 1 : -1 }}
            >
              <div className="lane-head">
                <span className="ch-badge">
                  <span className="ch-num">{lane.num}</span>
                  {lane.bus}
                </span>
                <h3 className="lane-title">{lane.title}</h3>
              </div>
              <div className="lane-track">
                <svg className="lane-wave" viewBox="0 0 1200 22" preserveAspectRatio="none" aria-hidden="true">
                  <path d={pulsePath(li * 7 + 3)} />
                </svg>
                <ul className="lane-decode">
                  {lane.tools.map((tool) => (
                    <li key={tool.name} className="decode">
                      <tool.Icon className="decode-icon" aria-hidden="true" />
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
