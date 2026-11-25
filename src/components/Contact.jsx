import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaArrowRight, FaCheck, FaCopy, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useMagnetic } from '../hooks/useMagnetic';
import contactImage from '../assets/opt/contact-img.webp';
import './Contact.css';

const EMAIL = 'aroosha.zuha@gmail.com';

const LINES = [
  { label: 'LinkedIn', value: 'aroosha-zuha', href: 'https://www.linkedin.com/in/aroosha-zuha-a35105267/', Icon: FaLinkedin, external: true },
  { label: 'GitHub', value: 'arooshazuha', href: 'https://github.com/arooshazuha', Icon: FaGithub, external: true },
  { label: 'Phone', value: '+92 302 0165141', href: 'tel:+923020165141', Icon: FaPhone },
];

const Field = ({ id, label, optional, children }) => (
  <div className="field">
    <label htmlFor={id} className="field-label">
      {label}
      {optional && <span className="readout"> optional</span>}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error
  const [copied, setCopied] = useState(false);
  const { ref: runRef, onMouseMove: runMove, onMouseLeave: runLeave } = useMagnetic(0.2);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const openMailClient = () => {
    const data = new FormData(form.current);
    const name = `${data.get('first_name') || ''} ${data.get('last_name') || ''}`.trim();
    const body = [
      data.get('message') || '',
      '',
      `From: ${name}`,
      `Email: ${data.get('user_email') || ''}`,
      data.get('user_phone') ? `Phone: ${data.get('user_phone')}` : '',
    ].filter(Boolean).join('\n');
    const subject = `Portfolio enquiry from ${name || 'a visitor'}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Without EmailJS configured, hand the message to the visitor's mail app
    // instead of pretending it was sent.
    if (!serviceId || !templateId || !publicKey) {
      openMailClient();
      return;
    }

    setStatus('sending');
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setStatus('sent');
        form.current?.reset();
      },
      () => setStatus('error'),
    );
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-top">
          <h2 id="contact-title" className="contact-title" data-reveal="sweep">
            Have a system that has to <em>work</em>? Let's talk.
          </h2>
          <div className="capture ticks contact-capture" data-ch="ai" data-reveal="focus">
            <img src={contactImage} alt="Illustration of Aroosha replying to messages" width="800" height="800" loading="lazy" />
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-direct" data-reveal>
            <p className="contact-lead">
              Hiring for a remote role, or need an automation, integration or web app built? Send a
              message or email me directly. I work with teams across US and UK time zones.
            </p>

            <div className="contact-email">
              <a href={`mailto:${EMAIL}`} className="contact-email-link">
                <FaEnvelope aria-hidden="true" />
                {EMAIL}
              </a>
              <button type="button" className="contact-copy" onClick={copyEmail}>
                {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
            </div>

            <ul className="contact-lines">
              {LINES.map((line) => {
                const { label, value, href, external } = line;
                return (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="contact-line"
                  >
                    <span className="readout">{label}</span>
                    <span className="contact-line-value">
                      <line.Icon aria-hidden="true" />
                      {value}
                    </span>
                    <FaArrowRight className="contact-line-arrow" aria-hidden="true" />
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
                );
              })}
              <li>
                <div className="contact-line is-static">
                  <span className="readout">Location</span>
                  <span className="contact-line-value">Lahore, Pakistan · remote</span>
                </div>
              </li>
            </ul>

          </div>

          <form ref={form} className="contact-form ticks" onSubmit={sendEmail} data-reveal style={{ '--d': '120ms' }}>
            <div className="contact-form-top readout">
              <span>New message</span>
              <span>{status === 'sending' ? 'Transmitting' : 'Ready'}</span>
            </div>

            <div className="contact-form-grid">
              <Field id="cf-first" label="First name">
                <input id="cf-first" name="first_name" type="text" autoComplete="given-name" required />
              </Field>
              <Field id="cf-last" label="Last name">
                <input id="cf-last" name="last_name" type="text" autoComplete="family-name" required />
              </Field>
              <Field id="cf-email" label="Email">
                <input id="cf-email" name="user_email" type="email" autoComplete="email" required />
              </Field>
              <Field id="cf-phone" label="Phone" optional>
                <input id="cf-phone" name="user_phone" type="tel" autoComplete="tel" />
              </Field>
              <div className="field-wide">
                <Field id="cf-message" label="What are you building?">
                  <textarea id="cf-message" name="message" rows="6" required />
                </Field>
              </div>
            </div>

            <div className="contact-form-foot">
              <div className="contact-status" role="status" aria-live="polite">
                {status === 'sent' && <p className="is-ok">Message sent. I'll get back to you soon.</p>}
                {status === 'mailto' && (
                  <p className="is-ok">Your email app should open with the message filled in. If it didn't, email {EMAIL} directly.</p>
                )}
                {status === 'error' && (
                  <p className="is-err">
                    The message didn't send. Try again, or email{' '}
                    <a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                  </p>
                )}
              </div>
              <button
                ref={runRef}
                onMouseMove={runMove}
                onMouseLeave={runLeave}
                type="submit"
                className="key key-run"
                disabled={status === 'sending'}
              >
                <span className="key-led" aria-hidden="true" />
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
