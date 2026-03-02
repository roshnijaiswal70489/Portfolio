import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="section certs-section" id="certifications" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Credentials</span>
                    <h2 className="section-title">Certifications &amp; Achievements</h2>
                    <div className="divider" />
                </motion.div>

                <div className="certs-two-col">
                    {/* Certifications */}
                    <div>
                        <h3 className="certs-col-title">📜 Certifications</h3>
                        <div className="cert-list">
                            {CERTIFICATIONS.map((cert, i) => (
                                <motion.div
                                    key={cert.title}
                                    className="cert-card glass-card"
                                    style={{ '--cert-color': cert.color }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <div className="cert-bar" />
                                    <div>
                                        <p className="cert-title">{cert.title}</p>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                    </div>
                                    <div className="cert-icon">✓</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h3 className="certs-col-title">🏆 Achievements</h3>
                        <div className="achievement-list">
                            {ACHIEVEMENTS.map((ach, i) => (
                                <motion.div
                                    key={ach.title}
                                    className="achievement-card glass-card"
                                    style={{ '--ach-color': ach.color }}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <span className="ach-icon">{ach.icon}</span>
                                    <div>
                                        <p className="ach-title">{ach.title}</p>
                                        <p className="ach-event">{ach.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
