import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCES } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="section experience-section" id="experience" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">Where I&apos;ve Worked</h2>
                    <div className="divider" />
                    <p className="section-subtitle">Real products. Real impact. Built in production.</p>
                </motion.div>

                <div className="exp-timeline">
                    {EXPERIENCES.map((exp, ei) => (
                        <motion.div
                            key={ei}
                            className="exp-company"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="exp-company-header glass-card">
                                <div className="exp-company-dot" />
                                <div>
                                    <h3 className="exp-role">{exp.title}</h3>
                                    <p className="exp-company-name">{exp.company}</p>
                                    <span className="exp-duration">{exp.duration}</span>
                                </div>
                            </div>

                            <div className="exp-projects-grid">
                                {exp.projects.map((proj, pi) => (
                                    <motion.div
                                        key={pi}
                                        className="exp-project-card glass-card"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + pi * 0.12, duration: 0.5 }}
                                    >
                                        <div className="exp-project-header">
                                            <h4 className="exp-project-name">{proj.name}</h4>
                                        </div>
                                        <p className="exp-project-desc">{proj.description}</p>
                                        <div className="exp-stack">
                                            {proj.stack.map((t) => (
                                                <span key={t} className="exp-stack-tag">{t}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
