import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { PERSONAL } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | done
    const formRef = useRef();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate send (wire to a service like Formspree in production)
        setTimeout(() => {
            setStatus('done');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1200);
    };

    return (
        <section className="section contact-section" id="contact" ref={ref}>
            <div className="contact-bg" aria-hidden="true" />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Hire Me</span>
                    <h2 className="section-title">Let&apos;s Connect &amp; Build Together</h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        Actively seeking full-time Software Developer / Full-Stack Engineer roles at IT companies.
                        Based in Bhopal, India &mdash; open to on-site, hybrid, and remote opportunities.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Left: Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="contact-availability">
                            <span className="avail-dot" />
                            <span>Available for new opportunities</span>
                        </div>

                        <p className="contact-intro">
                            Are you a recruiter or hiring manager? I&apos;d love to connect.
                            Send me a message about the role and I&apos;ll respond within 24 hours.
                        </p>
                        <div className="contact-notice">
                            <span className="notice-icon">📋</span>
                            <span><strong>Notice Period:</strong> {PERSONAL.noticePeriod}</span>
                        </div>

                        <div className="contact-details">
                            <a href={`mailto:${PERSONAL.email}`} className="contact-detail-item" id="contact-email-link">
                                <div className="contact-detail-icon"><FiMail /></div>
                                <div>
                                    <span className="contact-detail-label">Email</span>
                                    <span className="contact-detail-value">{PERSONAL.email}</span>
                                </div>
                            </a>
                            <a href={`tel:${PERSONAL.phone}`} className="contact-detail-item" id="contact-phone-link">
                                <div className="contact-detail-icon"><FiPhone /></div>
                                <div>
                                    <span className="contact-detail-label">Phone</span>
                                    <span className="contact-detail-value">{PERSONAL.phone}</span>
                                </div>
                            </a>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon"><FiMapPin /></div>
                                <div>
                                    <span className="contact-detail-label">Location</span>
                                    <span className="contact-detail-value">{PERSONAL.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="contact-social-btn" id="contact-github-btn">
                                <FiGithub size={18} /> GitHub
                            </a>
                            <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="contact-social-btn" id="contact-linkedin-btn">
                                <FiLinkedin size={18} /> LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        className="contact-form-wrap glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="contact-name">Your Name</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    placeholder="Roshni Jaiswal"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">Email Address</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="hello@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-message">Message / Job Opportunity</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Hi Roshni, we have a Software Developer opening at [Company]..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="form-input form-textarea"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary contact-submit-btn ${status}`}
                                disabled={status === 'sending'}
                                id="contact-submit-btn"
                            >
                                {status === 'idle' && <><FiSend size={15} /> Send Message</>}
                                {status === 'sending' && <span className="spinner" />}
                                {status === 'done' && <>✓ Message Sent!</>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
