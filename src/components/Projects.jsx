import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { PROJECTS, CHANNELS, FLAGSHIP_IDS, channelForCategory } from '../data/projects';
import './Projects.css';

const pad = (n) => String(n).padStart(2, '0');

/* Tech not already named in the architecture chain, so the two lists differ. */
const extraTech = (p) => {
  // Normalise the GHL alias so "GHL CRM" in the chain also covers "GoHighLevel".
  const chain = p.architecture.join(' ').toLowerCase().replace(/\bghl\b/g, 'gohighlevel');
  return p.tech.filter((t) => !chain.includes(t.toLowerCase().split(' (')[0]));
};

const inChannel = (p, ch) => {
  if (!ch) return true;
  const cat = CHANNELS.find((c) => c.id === ch)?.category;
  return p.category === cat || (p.secondaryCategories || []).includes(cat);
};

/* The project's architecture drawn as a signal chain with a travelling pulse. */
const SignalChain = ({ steps }) => (
  <ol className="chain" aria-label="System architecture">
    {steps.map((s, i) => (
      <li key={s} className="chain-node" style={{ '--n': i }}>
        <span>{s}</span>
        {i < steps.length - 1 && <span className="chain-wire" aria-hidden="true" />}
      </li>
    ))}
  </ol>
);

const ProjectLink = ({ project, className = '' }) =>
  project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`key key-soft proj-link ${className}`}>
      {project.linkText || 'Visit website'}
      <FaArrowUp className="proj-link-icon" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <span className={`proj-nolink readout ${className}`}>{project.linkText} · private build</span>
  );

/* Flagship capture: arm, trigger, capture, then the still result. */
const Capture = ({ project, rank }) => {
  const ref = useRef(null);
  const [stage, setStage] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window) ? 3 : 0,
  );
  const ch = channelForCategory(project.category);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (stage === 3) return undefined;
    const timers = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setStage(1);
        timers.push(window.setTimeout(() => setStage(2), 450));
        timers.push(window.setTimeout(() => setStage(3), 1150));
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stageLabel = ['Waiting', 'Armed', 'Triggered', 'Captured'][stage];

  return (
    <article ref={ref} className={`cap cap-${rank} stage-${stage}`} data-ch={ch.id} aria-labelledby={`cap-${project.id}`}>
      <div className="cap-screen ticks">
        <div className="cap-screen-top readout">
          <span className="ch-badge"><span className="ch-num">{ch.num}</span>{ch.label}</span>
          <span className="cap-stage">
            <span className="cap-stage-led" aria-hidden="true" />
            {stageLabel}
          </span>
        </div>
        <div className="cap-frame">
          <img src={project.image} alt={project.imageAlt || `Screenshot of ${project.title}`} loading="lazy" decoding="async" />
          <span className="cap-scan" aria-hidden="true" />
        </div>
        <div className="cap-screen-bot readout">
          <span>{`Capture ${pad(project.id)} / ${pad(PROJECTS.length)}`}</span>
          <span>{project.tech.slice(0, 2).join(' · ')}</span>
        </div>
      </div>

      <div className="cap-info">
        <h3 id={`cap-${project.id}`} className="cap-title">{project.title}</h3>
        <p className="cap-tagline">{project.tagline}</p>
        <SignalChain steps={project.architecture} />
        <h4 className="cap-sub">What I built</h4>
        <ul className="cap-list">
          {project.workedOn.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        <ul className="cap-tech" aria-label="Other technologies">
          {extraTech(project).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ProjectLink project={project} />
      </div>
    </article>
  );
};

/* Index row: fixed numbered position; expands into the full record. */
const Row = ({ project, open, onToggle, dim, onPreview }) => {
  const panelId = useId();
  const ch = channelForCategory(project.category);
  return (
    <li
      className={`row ${open ? 'is-open' : ''} ${dim ? 'is-dim' : ''}`}
      data-ch={ch.id}
      onMouseEnter={() => onPreview(project)}
      onMouseLeave={() => onPreview(null)}
    >
      <h3 className="row-h">
        <button
          type="button"
          className="row-btn"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          onFocus={() => onPreview(null)}
        >
          <span className="row-num readout">{pad(project.id)}</span>
          <span className="row-title">{project.title}</span>
          <span className="row-ch">
            <span className="ch-badge"><span className="ch-num">{ch.num}</span></span>
            <span className="row-cat">{ch.label}</span>
          </span>
          <span className="row-toggle" aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} className="row-panel" hidden={!open}>
        <div className="row-panel-inner">
          <div className="row-shot capture-free">
            <img src={project.image} alt={project.imageAlt || `Screenshot of ${project.title}`} loading="lazy" decoding="async" />
          </div>
          <div className="row-detail">
            <p className="row-tagline">{project.tagline}</p>
            <SignalChain steps={project.architecture} />
            <ul className="cap-list">
              {project.workedOn.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <ul className="cap-tech" aria-label="Other technologies">
              {extraTech(project).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <ProjectLink project={project} />
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  const [channel, setChannel] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [preview, setPreview] = useState(null);
  const previewRef = useRef(null);
  const listRef = useRef(null);

  const flagships = useMemo(() => FLAGSHIP_IDS.map((id) => PROJECTS.find((p) => p.id === id)), []);
  const counts = useMemo(
    () => Object.fromEntries(CHANNELS.map((c) => [c.id, PROJECTS.filter((p) => inChannel(p, c.id)).length])),
    [],
  );

  // Floating preview follows the pointer with a little lag (fine pointers only).
  useEffect(() => {
    const el = previewRef.current;
    const list = listRef.current;
    if (!el || !list) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;
    const tick = () => {
      pos.x += (target.x - pos.x) * (reduce ? 1 : 0.16);
      pos.y += (target.y - pos.y) * (reduce ? 1 : 0.16);
      el.style.transform = `translate3d(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e) => {
      target.x = e.clientX + 28;
      target.y = e.clientY - 90;
      if (!raf) {
        pos.x = target.x;
        pos.y = target.y;
        raf = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    list.addEventListener('pointermove', onMove);
    list.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      list.removeEventListener('pointermove', onMove);
      list.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const activeCount = channel ? counts[channel] : PROJECTS.length;
  const showPreview = preview && preview.id !== openId;

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="projects-title" className="section-title" data-reveal="sweep">
            Selected <em>work</em>
          </h2>
          <p className="section-intro" data-reveal style={{ '--d': '120ms' }}>
            CRM automations, n8n agent workflows, SaaS applications and client systems. Four
            flagship captures first, then the full index of {PROJECTS.length}.
          </p>
        </div>

        <div className="caps">
          {flagships.map((p, i) => (
            <Capture key={p.id} project={p} rank={i === 0 ? 'lead' : 'std'} />
          ))}
        </div>

        <div className="index">
          <div className="index-head">
            <h3 className="index-title">Full index</h3>
            <div className="index-filters" role="group" aria-label="Isolate projects by channel">
              <button
                type="button"
                className={`softkey ${channel === null ? 'is-on' : ''}`}
                aria-pressed={channel === null}
                onClick={() => setChannel(null)}
              >
                All <span className="readout">{PROJECTS.length}</span>
              </button>
              {CHANNELS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  data-ch={c.id}
                  className={`softkey ${channel === c.id ? 'is-on' : ''}`}
                  aria-pressed={channel === c.id}
                  onClick={() => setChannel((v) => (v === c.id ? null : c.id))}
                >
                  <span className="softkey-num">{c.num}</span>
                  {c.label}
                  <span className="readout">{counts[c.id]}</span>
                </button>
              ))}
            </div>
            <p className="index-status readout" aria-live="polite">
              {channel
                ? `${activeCount} of ${PROJECTS.length} on ${CHANNELS.find((c) => c.id === channel).num}; others dimmed`
                : `${PROJECTS.length} of ${PROJECTS.length} shown`}
            </p>
          </div>

          <ol ref={listRef} className="rows">
            {PROJECTS.map((p) => (
              <Row
                key={p.id}
                project={p}
                open={openId === p.id}
                dim={!inChannel(p, channel)}
                onToggle={() => setOpenId((v) => (v === p.id ? null : p.id))}
                onPreview={setPreview}
              />
            ))}
          </ol>
        </div>
      </div>

      <div ref={previewRef} className={`row-preview ${showPreview ? 'is-on' : ''}`} aria-hidden="true">
        {preview && (
          <>
            <img key={preview.id} src={preview.image} alt="" />
            <span className="row-preview-meta readout">
              {pad(preview.id)} · {preview.tech.slice(0, 2).join(' · ')}
              <FaArrowRight />
            </span>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
