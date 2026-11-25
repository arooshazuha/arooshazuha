import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const EMAIL = 'aroosha.zuha@gmail.com';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const [state, setState] = useState('idle');

  // No mailing-list backend exists; the subscription request goes by email.
  const subscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('subscriber_email');
    const subject = 'Subscribe me to AI & dev updates';
    const body = `Please add ${email} to your AI & development updates.`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState('sent');
    e.currentTarget.reset();
  };

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-id">
          <a href="#home" className="footer-mark" aria-label="Aroosha Zuha, back to top">
            Aroosha<span aria-hidden="true" />
          </a>
          <p className="footer-tagline">AI Automation Engineer &amp; Full Stack Developer</p>
          <p className="footer-meta">
            Lahore, Pakistan · <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href="tel:+923020165141">+92 302 0165141</a>
          </p>
          <ul className="footer-social">
            <li>
              <a href="https://www.linkedin.com/in/aroosha-zuha-a35105267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/arooshazuha" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <FaEnvelope aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h2 className="footer-h">Navigate</h2>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-news">
          <h2 className="footer-h">Stay connected</h2>
          <p>Occasional notes on AI automation and development. Subscribing sends me a short email request.</p>
          <form className="footer-form" onSubmit={subscribe}>
            <label htmlFor="ft-email" className="sr-only">Your email</label>
            <input id="ft-email" name="subscriber_email" type="email" placeholder="you@company.com" autoComplete="email" required />
            <button type="submit" className="footer-submit" aria-label="Subscribe">
              <FaArrowRight aria-hidden="true" />
            </button>
          </form>
          <p className="footer-form-status" role="status" aria-live="polite">
            {state === 'sent' ? 'Your email app should open with the request ready to send.' : ''}
          </p>
        </div>
      </div>

      <div className="wrap footer-base">
        <span>© 2026 Aroosha Zuha. All rights reserved.</span>
        <span>Built with React &amp; Vite · Canvas traces drawn live</span>
      </div>
    </footer>
  );
};

export default Footer;
