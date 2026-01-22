import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import contactImage from "../assets/contact-img.png";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Row 1: First Name & Last Name */}
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="glass-input"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="glass-input"
                                required
                            />
                        </div>

                        {/* Row 2: Email & Phone */}
                        <div className="form-row">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="glass-input"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone No."
                                className="glass-input"
                            />
                        </div>

                        {/* Row 3: Message */}
                        <div className="form-row">
                            <textarea
                                placeholder="Message"
                                className="glass-input full-width"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {/* Row 4: Send Button */}
                        <button type="submit" className="send-btn">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
