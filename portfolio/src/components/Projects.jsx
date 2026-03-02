import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX, FiUser, FiAlertCircle, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import { PROJECTS } from '../data/portfolioData';
import './Projects.css';

const categories = ['All', 'Web App', 'BI', 'IoT'];

/* ── 3D Tilt Card ── */
function TiltCard({ project, onClick }) {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -8;
        const rotateY = ((x - cx) / cx) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };
    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    return (
        <div
            className="project-card glass-card"
            style={{ '--proj-color': project.color }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
            id={`project-card-${project.id}`}
        >
            <div className="project-card-glow" />
            <div className="project-card-top">
                <div className="project-type-badge">{project.type}</div>
                {project.featured && <div className="project-featured-badge">Featured</div>}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
                {project.stack.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                ))}
            </div>
            <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="project-link" aria-label="Live Demo">
                    <FiExternalLink size={16} /> Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="project-link" aria-label="GitHub">
                    <FiGithub size={16} /> Code
                </a>
                <span className="project-link case-study-hint">Case Study →</span>
            </div>
        </div>
    );
}

/* ── Full Case Study Modal ── */
function CaseStudyModal({ project, onClose }) {
    const cs = project.caseStudy;
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content case-study-modal"
                style={{ '--proj-color': project.color }}
                initial={{ scale: 0.92, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 30 }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button className="modal-close" onClick={onClose} aria-label="Close" id="modal-close-btn">
                    <FiX size={20} />
                </button>

                {/* ── Header ── */}
                <div className="cs-header">
                    <span className="cs-type-badge">{project.type}</span>
                    {project.featured && <span className="cs-featured-badge">✦ Featured Project</span>}
                    <h2 className="cs-title" style={{ color: project.color }}>{project.title}</h2>
                    <p className="cs-overview">{cs?.overview || project.description}</p>
                    <div className="cs-stack">
                        {project.stack.map((t) => (
                            <span key={t} className="project-tag">{t}</span>
                        ))}
                    </div>
                </div>

                {/* ── Case Study Body ── */}
                {cs && (
                    <div className="cs-body">
                        {/* Problem + Role */}
                        <div className="cs-two-col">
                            <div className="cs-block">
                                <div className="cs-block-label"><FiAlertCircle size={13} /> Problem Statement</div>
                                <p className="cs-block-text">{cs.problem}</p>
                            </div>
                            <div className="cs-block">
                                <div className="cs-block-label"><FiUser size={13} /> My Role</div>
                                <p className="cs-block-text">{cs.role}</p>
                            </div>
                        </div>

                        {/* Solution Approach */}
                        <div className="cs-block cs-block-full">
                            <div className="cs-block-label">⚙️ Solution Approach</div>
                            <ol className="cs-approach-list">
                                {cs.approach.map((step, i) => (
                                    <li key={i}><span className="cs-step-num">{i + 1}</span>{step}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Challenges */}
                        <div className="cs-block cs-block-full">
                            <div className="cs-block-label">🔥 Challenges &amp; Solutions</div>
                            <div className="cs-challenges">
                                {cs.challenges.map((c, i) => (
                                    <div key={i} className="cs-challenge-item">
                                        <div className="cs-challenge-problem">
                                            <span className="cs-challenge-icon">⚠</span>
                                            <span>{c.problem}</span>
                                        </div>
                                        <div className="cs-challenge-arrow">→</div>
                                        <div className="cs-challenge-solution">
                                            <FiCheckCircle size={13} className="cs-check" />
                                            <span>{c.solution}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Impact */}
                        <div className="cs-block cs-block-full">
                            <div className="cs-block-label"><FiTrendingUp size={13} /> Results &amp; Impact</div>
                            <div className="cs-impact-list">
                                {cs.impact.map((item, i) => (
                                    <div key={i} className="cs-impact-item">
                                        <div className="cs-impact-dot" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── CTA ── */}
                <div className="cs-footer">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary" id={`cs-demo-btn-${project.id}`}>
                        <FiExternalLink size={15} /> View Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary" id={`cs-github-btn-${project.id}`}>
                        <FiGithub size={15} /> View Source
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ── Projects Section ── */
export default function Projects() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [filter, setFilter] = useState('All');
    const [modal, setModal] = useState(null);

    const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

    return (
        <section className="section projects-section" id="projects" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">Things I&apos;ve Built</h2>
                    <div className="divider" />
                    <p className="section-subtitle">Real products that went live and made an impact. Click any card for the full case study.</p>
                </motion.div>

                {/* Filter tabs */}
                <div className="project-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                            id={`filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div className="projects-grid" layout>
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.1 }}
                        >
                            <TiltCard project={project} onClick={setModal} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {modal && <CaseStudyModal project={modal} onClose={() => setModal(null)} />}
            </AnimatePresence>
        </section>
    );
}
