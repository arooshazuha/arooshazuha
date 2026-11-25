import { useEffect, useRef } from 'react';
import aboutImage from '../assets/opt/about-img.webp';
import './About.css';

const STATEMENT =
  'I verify every automation against live data: debugging Salesforce OAuth2 field mappings in production, reversing 1,217 mistakenly tagged contacts without breaking active triggers, and guarding AI output so it never invents a price.';

const BLOCKS = [
  {
    title: 'What I build',
    body: (
      <>
        Production systems across <strong>n8n</strong>, <strong>GoHighLevel</strong>,{' '}
        <strong>WordPress</strong> and <strong>Next.js</strong> for US real-estate brokerages,
        yacht charters and agency clients: the core plumbing that connects a company's website,
        CRM, payments and AI chat assistants.
      </>
    ),
  },
  {
    title: 'How I work',
    body: (
      <>
        Not by green banners or theoretical tests. I trace field mappings, audit contact logs and
        write deterministic output guards so AI models cannot hallucinate pricing or make
        non-compliant claims.
      </>
    ),
  },
  {
    title: 'Engineering foundation',
    body: (
      <>
        A <strong>Computer Science degree (BSCS)</strong> and daily work in{' '}
        <strong>React 19, Next.js 16, TypeScript, Node.js and PostgreSQL</strong>. That means
        custom WordPress plugins that replicate GHL funnels natively, WebSockets for real-time
        chat, and secure role-authenticated client dashboards.
      </>
    ),
  },
];

const PILLARS = [
  { ch: 'crm', num: 'CH3', title: 'GoHighLevel Systems', sub: 'Snapshots, funnels & A2P' },
  { ch: 'ai', num: 'CH1', title: 'n8n & AI Workflows', sub: 'Guarded agents & RAG' },
  { ch: 'stack', num: 'CH2', title: 'Full Stack SaaS', sub: 'Next.js 16 & custom plugins' },
];

/* Words light up as the statement passes through the viewport. */
const useScrollLit = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const words = [...el.querySelectorAll('.lit-word')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((w) => w.classList.add('is-lit'));
      return undefined;
    }
    let raf = 0;
    let last = -1;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top hits 85% of the viewport, 1 when its bottom reaches 45%
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const n = Math.round(p * words.length);
      if (n === last) return;
      last = n;
      words.forEach((w, i) => w.classList.toggle('is-lit', i < n));
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
  }, [ref]);
};

const About = () => {
  const statementRef = useRef(null);
  const captureRef = useRef(null);
  useScrollLit(statementRef);

  const onProbe = (e) => {
    const el = captureRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--px', `${(x * 100).toFixed(2)}%`);
    el.style.setProperty('--py', `${(y * 100).toFixed(2)}%`);
    el.dataset.readout = `X ${(x * 10).toFixed(2)}  Y ${((0.5 - y) * 8).toFixed(2)}`;
  };

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="about-title" className="section-title" data-reveal="sweep">
            Checked on <em>live data</em>
          </h2>
          <p className="section-intro" data-reveal style={{ '--d': '120ms' }}>
            I'm Aroosha, a CRM automation engineer and full-stack developer with hands-on
            production experience designing, building and deploying the systems businesses run on.
          </p>
        </div>

        <p ref={statementRef} className="about-statement">
          {STATEMENT.split(' ').map((w, i) => (
            <span key={`${w}${i}`} className={`lit-word ${/1,217|OAuth2|price\./.test(w) ? 'is-key' : ''}`}>
              {w}{' '}
            </span>
          ))}
        </p>

        <div className="about-grid">
          <figure className="about-figure" data-reveal="focus">
            <div
              ref={captureRef}
              className="capture ticks about-capture"
              data-ch="ai"
              onPointerMove={onProbe}
              data-readout="X 5.00  Y 0.00"
            >
              <img src={aboutImage} alt="Illustration of Aroosha at her desk" width="500" height="500" loading="lazy" />
              <span className="about-cursor about-cursor-x" aria-hidden="true" />
              <span className="about-cursor about-cursor-y" aria-hidden="true" />
            </div>
            <figcaption className="readout about-figcap">
              <span>Probe · move to measure</span>
              <span>BSCS · Lahore</span>
            </figcaption>
          </figure>

          <div className="about-body">
            {BLOCKS.map((b, i) => (
              <div key={b.title} className="about-block" data-reveal style={{ '--d': `${i * 90}ms` }}>
                <h3 className="about-block-title">{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}

            <ul className="about-pillars" aria-label="Core focus areas">
              {PILLARS.map((p, i) => (
                <li key={p.title} data-ch={p.ch} data-reveal style={{ '--d': `${200 + i * 80}ms` }}>
                  <span className="ch-badge">
                    <span className="ch-num">{p.num}</span>
                  </span>
                  <span className="about-pillar-title">{p.title}</span>
                  <span className="about-pillar-sub">{p.sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
