import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiDownload } from 'react-icons/fi';
import { PERSONAL, EDUCATION } from '../data/portfolioData';
import './About.css';

const stats = [
    { value: '9', label: 'SGPA (MCA)', suffix: '' },
    { value: '6', label: 'Projects Built', suffix: '+' },
    { value: '3', label: 'BI Dashboards', suffix: '' },
    { value: '✅', label: 'Available Now', suffix: '' },
];

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section className="section about-section" id="about" ref={ref}>
            <div className="about-bg-grid" aria-hidden="true" />

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">The Person Behind the Code</h2>
                    <div className="divider" />
                </motion.div>

                <div className="about-grid">
                    {/* Left: Avatar Card */}
                    <motion.div
                        className="about-avatar-col"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="avatar-card">
                            <div className="avatar-glow" />
                            <div className="avatar-initials"><span>RJ</span></div>
                            <div className="avatar-info">
                                <h3>{PERSONAL.name}</h3>
                                <p>{PERSONAL.role}</p>
                                <div className="avatar-meta">
                                    <span><FiMapPin size={13} /> {PERSONAL.location}</span>
                                    <span><FiMail size={13} /> {PERSONAL.email}</span>
                                </div>
                            </div>
                            {/* Personal Mission */}
                            <div className="avatar-mission">
                                <span className="mission-label">✦ Personal Mission</span>
                                <p className="mission-text">{PERSONAL.mission}</p>
                            </div>
                        </div>

                        {/* Education cards */}
                        <div className="education-cards">
                            {EDUCATION.map((edu, i) => (
                                <div key={i} className="edu-card glass-card" style={{ '--edu-color': edu.color }}>
                                    <div className="edu-dot" />
                                    <div>
                                        <p className="edu-degree">{edu.degree}</p>
                                        <p className="edu-inst">{edu.institution}</p>
                                        <div className="edu-meta">
                                            <span>{edu.year}</span>
                                            {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="about-content-col"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        {/* Professional Summary */}
                        <div className="about-summary-label">Professional Summary</div>
                        <p className="about-body">{PERSONAL.bio}</p>
                        <p className="about-body" style={{ marginTop: 14 }}>{PERSONAL.bioExtended}</p>

                        {/* Core Strengths */}
                        <div className="about-drives">
                            <h4>⚡ Core Strengths</h4>
                            <ul>
                                <li>🚀 End-to-end feature delivery across the full MERN stack</li>
                                <li>📊 Building interactive BI dashboards and data-driven UIs</li>
                                <li>🎨 Clean, maintainable code with strong UI/UX sensibility</li>
                                <li>📚 Fast learner — MCA (9 SGPA) with IBM recognition</li>
                                <li>🤝 Strong collaborator with analytical problem-solving skills</li>
                            </ul>
                        </div>

                        {/* Career Goal */}
                        <div className="about-career-goal glass-card">
                            <span className="goal-label">🎯 Career Goal</span>
                            <p className="goal-text">{PERSONAL.careerGoal}</p>
                        </div>

                        {/* Stats */}
                        <div className="about-stats">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    className="stat-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                                >
                                    <span className="stat-value gradient-text">{s.value}{s.suffix}</span>
                                    <span className="stat-label">{s.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <a href="/Resume.pdf" download className="btn btn-primary about-resume-btn" id="about-resume-btn">
                            <FiDownload size={16} /> Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
