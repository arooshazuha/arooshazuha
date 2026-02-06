import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import contactImage from "../assets/contact-img.png";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const sectionRef = useRef(null);
    const form = useRef();

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

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Use environment variables or placeholders
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS credentials missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env");
            setStatus('error');
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <div className="contact-container">
                {/* LEFT SIDE: Illustration (Slides in from Left) */}
                <div
                    className={`contact-illustration ${isVisible ? "show" : "hidden-left"}`}
                >
                    <img
                        src={contactImage}
                        alt="Contact Illustration"
                        className="contact-img"
                    />
                </div>

                {/* RIGHT SIDE: Form (Slides in from Right) */}
                <div className={`contact-form-wrapper ${isVisible ? "show" : "hidden-right"}`}>
                    <h2 className="section-title">Contact Me</h2>

                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        {/* Row 1: First Name & Last Name */}
                        <div className="form-row">
                            <input
                                type="text"
                                name="first_name" // Added name attribute for EmailJS
                                placeholder="First Name"
                                className="glass-input"
                                required
                            />
                            <input
                                type="text"
                                name="last_name" // Added name attribute for EmailJS
                                placeholder="Last Name"
                                className="glass-input"
                                required
                            />
                        </div>

                        {/* Row 2: Email & Phone */}
                        <div className="form-row">
                            <input
                                type="email"
                                name="user_email" // Added name attribute for EmailJS
                                placeholder="Email Address"
                                className="glass-input"
                                required
                            />
                            <input
                                type="tel"
                                name="user_phone" // Added name attribute for EmailJS
                                placeholder="Phone No."
                                className="glass-input"
                            />
                        </div>

                        {/* Row 3: Message */}
                        <div className="form-row">
                            <textarea
                                name="message" // Added name attribute for EmailJS
                                placeholder="Message"
                                className="glass-input full-width"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {/* Feedback Messages */}
                        {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-msg error">Something went wrong. Please try again.</p>}

                        {/* Row 4: Send Button */}
                        <button type="submit" className="send-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
