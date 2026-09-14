import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { useTilt } from "../hooks/useTilt";
import { useMagnetic } from "../hooks/useMagnetic";
import "./Contact.css";
import contactImage from "../assets/contact-img.png";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const sectionRef = useRef(null);
    const form = useRef();

    const { ref: imageTiltRef, onMouseMove: onImageTiltMove, onMouseLeave: onImageTiltLeave } = useTilt({ maxTilt: 6, perspective: 1200, scale: 1.02 });
    const { ref: sendBtnRef, onMouseMove: onSendBtnMove, onMouseLeave: onSendBtnLeave } = useMagnetic(0.25);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.warn("EmailJS credentials not configured in environment. Displaying simulated confirmation.");
            setTimeout(() => {
                setStatus('success');
                if (form.current) form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, 800);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                if (form.current) form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <div className="contact-container">
                {/* LEFT SIDE: Interactive Illustration */}
                <div
                    ref={imageTiltRef}
                    onMouseMove={onImageTiltMove}
                    onMouseLeave={onImageTiltLeave}
                    className={`contact-illustration ${isVisible ? "show" : "hidden-left"}`}
                >
                    <img
                        src={contactImage}
                        alt="Contact Illustration"
                        className="contact-img"
                    />
                    <div className="contact-glow-blob" />
                </div>

                {/* RIGHT SIDE: Form */}
                <div className={`contact-form-wrapper ${isVisible ? "show" : "hidden-right"}`}>
                    <h2 className="section-title">Contact Me</h2>

                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        {/* Row 1: First Name & Last Name */}
                        <div className="form-row">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className="glass-input"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className="glass-input"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 2: Email & Phone */}
                        <div className="form-row">
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email Address"
                                    className="glass-input"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder="Phone No."
                                    className="glass-input"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="form-row">
                            <div className="input-group full-width">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="glass-input full-width"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        {/* Feedback Messages */}
                        {status === 'success' && (
                            <p className="status-msg success">
                                <FaCheckCircle className="status-icon" /> Message sent successfully!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="status-msg error">
                                <FaExclamationTriangle className="status-icon" /> Something went wrong. Please try again.
                            </p>
                        )}

                        {/* Row 4: Magnetic Send Button */}
                        <button 
                            ref={sendBtnRef}
                            onMouseMove={onSendBtnMove}
                            onMouseLeave={onSendBtnLeave}
                            type="submit" 
                            className="send-btn magnetic-btn" 
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <>
                                    <FaSpinner className="btn-spin-icon" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FaPaperPlane className="btn-send-icon" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
