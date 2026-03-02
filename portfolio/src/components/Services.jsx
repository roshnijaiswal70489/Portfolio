import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { SERVICES } from '../data/portfolioData';
import './Services.css';

export default function Services() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [hovered, setHovered] = useState(null);

    const scrollToContact = () =>
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="section services-section" id="services" ref={ref}>
            <div className="services-bg" aria-hidden="true" />
            <div className="container">

                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Services</span>
                    <h2 className="section-title">What I Can Build For You</h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        From zero to deployed — engineering that looks as good as it runs.
                    </p>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="services-grid">
                    {SERVICES.map((svc, i) => (
                        <motion.div
                            key={svc.id}
                            className={`service-card glass-card ${hovered === svc.id ? 'hovered' : ''}`}
                            style={{ '--svc-color': svc.color }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                            onMouseEnter={() => setHovered(svc.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Top bar accent */}
                            <div className="service-top-bar" />

                            {/* Icon */}
                            <div className="service-icon-wrap">
                                <span className="service-icon">{svc.icon}</span>
                                <div className="service-icon-bg" />
                            </div>

                            {/* Title & Tagline */}
                            <h3 className="service-title">{svc.title}</h3>
                            <p className="service-tagline">{svc.tagline}</p>

                            {/* Divider */}
                            <div className="service-divider" />

                            {/* Description */}
                            <p className="service-desc">{svc.description}</p>

                            {/* Benefits */}
                            <ul className="service-benefits">
                                {svc.benefits.map((b, bi) => (
                                    <li key={bi} className="service-benefit-item">
                                        <FiCheck size={13} className="benefit-check" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Deliverable callout */}
                            <div className="service-deliverable">
                                <span className="deliverable-label">✦ What You Get</span>
                                <p className="deliverable-text">{svc.deliverable}</p>
                            </div>

                            {/* CTA */}
                            <button
                                className="service-cta"
                                onClick={scrollToContact}
                                id={`service-cta-${svc.id}`}
                            >
                                Let&apos;s Talk <FiArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA banner */}
                <motion.div
                    className="services-bottom-cta"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                >
                    <div className="services-bottom-cta-inner glass-card">
                        <div className="bottom-cta-content">
                            <h3>Not sure which service fits?</h3>
                            <p>Tell me what you&apos;re building — I&apos;ll recommend the right approach and give you an honest quote.</p>
                        </div>
                        <button
                            className="btn btn-primary bottom-cta-btn"
                            onClick={scrollToContact}
                            id="services-bottom-cta-btn"
                        >
                            Start a Conversation ✦
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
