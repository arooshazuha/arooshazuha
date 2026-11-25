import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ScopeCanvas from './ScopeCanvas';
import { useMagnetic } from '../hooks/useMagnetic';
import heroImage from '../assets/opt/hero-img.webp';
import './Hero.css';

const CHANNELS = [
  { id: 'ai', num: 'CH1', label: 'AI & Automation', detail: 'n8n agents · RAG · OpenAI' },
  { id: 'stack', num: 'CH2', label: 'Full Stack', detail: 'Next.js · React · Node · Postgres' },
  { id: 'crm', num: 'CH3', label: 'CRM & GoHighLevel', detail: 'GoHighLevel · Salesforce · A2P' },
  { id: 'web', num: 'CH4', label: 'Web & WordPress', detail: 'Custom plugins · WooCommerce' },
];

const MEASUREMENTS = [
  { label: 'AI SMS & web assistant', value: '78', unit: 'nodes' },
  { label: 'n8n workflows in production', value: '12+', unit: 'flows' },
  { label: 'GHL sub-accounts administered', value: '16+', unit: 'accts' },
  { label: 'Mis-tagged contacts reversed, 0 errors', value: '1,217', unit: 'contacts' },
];

const splitLetters = (word, offset = 0) =>
  [...word].map((ch, i) => (
    <span key={`${ch}${i}`} className="hero-letter" style={{ '--li': i + offset }} aria-hidden="true">
      {ch}
    </span>
  ));

const Hero = () => {
  const [hover, setHover] = useState(null);
  const [locked, setLocked] = useState(null);
  const focus = hover ?? locked;
  const { ref: primaryRef, onMouseMove: primaryMove, onMouseLeave: primaryLeave } = useMagnetic(0.22);
  const { ref: secondaryRef, onMouseMove: secondaryMove, onMouseLeave: secondaryLeave } = useMagnetic(0.22);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-screen">
        <ScopeCanvas focus={focus} className="hero-canvas" />
      </div>

      <div className="hero-inner wrap">
        <div className="hero-channels" role="group" aria-label="Isolate a channel">
          {CHANNELS.map((c) => (
            <button
              key={c.id}
              type="button"
              data-ch={c.id}
              className={`hero-ch ${focus === c.id ? 'is-focus' : ''} ${focus && focus !== c.id ? 'is-dim' : ''}`}
              aria-pressed={locked === c.id}
              onMouseEnter={() => setHover(c.id)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(c.id)}
              onBlur={() => setHover(null)}
              onClick={() => setLocked((v) => (v === c.id ? null : c.id))}
            >
              <span className="ch-badge">
                <span className="ch-num">{c.num}</span>
                {c.label}
              </span>
              <span className="hero-ch-detail">{c.detail}</span>
            </button>
          ))}
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              <span className="sr-only">Aroosha Zuha, AI Automation Engineer and Full Stack Developer</span>
              <span className="hero-name">
                <span className="hero-line">{splitLetters('Aroosha')}</span>
                <span className="hero-line">{splitLetters('Zuha', 7)}</span>
              </span>
              <span className="hero-role" aria-hidden="true">
                <span className="hero-role-ch" data-ch="ai">AI Automation Engineer</span>
                <span className="hero-role-amp">&amp;</span>
                <span className="hero-role-ch" data-ch="stack">Full Stack Developer</span>
              </span>
            </h1>

            <p className="hero-lead">
              I build AI agents, CRM automations and full-stack web apps that connect a business's
              website, CRM, payments, APIs and AI chat assistants. Then I check every one against
              live data, not a green banner.
            </p>

            <div className="hero-actions">
              <a
                ref={primaryRef}
                onMouseMove={primaryMove}
                onMouseLeave={primaryLeave}
                href="#contact"
                className="key key-run"
              >
                <span className="key-led" aria-hidden="true" />
                Get in touch
                <FaArrowRight aria-hidden="true" />
              </a>
              <a
                ref={secondaryRef}
                onMouseMove={secondaryMove}
                onMouseLeave={secondaryLeave}
                href="#projects"
                className="key key-soft"
              >
                See the work
              </a>
            </div>
            <p className="hero-avail">
              <span className="hero-avail-led" aria-hidden="true" />
              Available for US &amp; UK time zone roles and client projects
            </p>
          </div>

          <figure className="hero-capture">
            <div className="capture ticks" data-ch={focus ?? 'stack'}>
              <img src={heroImage} alt="Illustration of Aroosha working at a laptop" width="500" height="500" fetchPriority="high" />
            </div>
            <figcaption className="hero-capture-meta readout">
              <span>Zoom ×2.0</span>
              <span>Lahore, PK</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="hero-measure">
        <dl className="hero-measure-row wrap">
          {MEASUREMENTS.map((m) => (
            <div key={m.label} className="hero-measure-cell">
              <dt className="readout">{m.label}</dt>
              <dd>
                <span className="hero-measure-value">{m.value}</span>
                <span className="readout">{m.unit}</span>
              </dd>
            </div>
          ))}
          <div className="hero-measure-cell hero-scroll">
            <dt className="sr-only">Scroll</dt>
            <dd>
              <a href="#about" className="hero-scroll-link">
                <span className="readout">Scroll</span>
                <span className="hero-scroll-trace" aria-hidden="true" />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
