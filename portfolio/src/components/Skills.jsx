import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../data/portfolioData';
import './Skills.css';

/* ─── Proficiency data (hidden from data file, keeps it clean) ─── */
const PROFICIENCY = {
    'JavaScript (ES6+)': 90,
    'React.js': 88,
    'Node.js': 82,
    'MongoDB': 78,
    'HTML5': 95,
    'CSS3': 90,
    'Tailwind CSS': 85,
    'Express.js': 80,
    'REST APIs': 83,
    'PHP': 65,
    'Lumenore': 85,
    'KPI Dashboards': 82,
    'Data Modeling': 78,
    'Data Visualization': 80,
    'Git': 88,
    'GitHub': 88,
    'Vite': 80,
    'Postman': 78,
    'Vercel': 85,
    'Render': 80,
    'WordPress': 72,
    'Problem Solving': 90,
    'Analytical Thinking': 88,
    'Team Collaboration': 85,
    'Communication': 84,
    'Self-Learning': 92,
    'Attention to Detail': 90,
};

/* ─── Radial Arc SVG for Proficiency ─── */
function RadialArc({ percent, color, size = 56 }) {
    const r = (size - 8) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (percent / 100) * circ;
    return (
        <svg width={size} height={size} className="radial-arc">
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
            <circle
                cx={size / 2} cy={size / 2} r={r}
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{ filter: `drop-shadow(0 0 4px ${color})`, transition: 'stroke-dashoffset 1.2s cubic-bezier(0.34,1.56,0.64,1)' }}
            />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>
                {percent}%
            </text>
        </svg>
    );
}

/* ─── 3D Orbit Ring (CSS transform‑based) ─── */
function OrbitRing({ skills, color, radius, speed, delay = 0 }) {
    const count = skills.length;
    return (
        <div className="orbit-ring-wrap" style={{ width: radius * 2, height: radius * 2 }}>
            <div
                className="orbit-ring-track"
                style={{ '--orbit-speed': `${speed}s`, '--orbit-delay': `${delay}s`, '--orbit-color': color }}
            >
                {skills.map((skill, i) => {
                    const angle = (i / count) * 360;
                    return (
                        <div
                            key={skill}
                            className="orbit-pill"
                            style={{
                                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                                '--pill-color': color,
                            }}
                        >
                            {skill}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ─── Floating Tag Cloud (pure CSS animation) ─── */
function FloatingCloud({ skills, color, inView }) {
    return (
        <div className="floating-cloud">
            {skills.map((skill, i) => (
                <motion.div
                    key={skill}
                    className="floating-pill"
                    style={{ '--pill-color': color }}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={inView ? {
                        opacity: 1, y: 0, scale: 1,
                        translateY: [0, -(6 + (i % 4) * 3), 0],
                    } : {}}
                    transition={{
                        opacity: { delay: 0.05 * i, duration: 0.4 },
                        y: { delay: 0.05 * i, duration: 0.4 },
                        scale: { delay: 0.05 * i, duration: 0.4 },
                        translateY: { delay: 0.3 + 0.05 * i, duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    );
}

/* ─── Category 3D Card ─── */
function SkillCategoryCard({ cat, inView, isActive, onHover, onLeave }) {
    const profSkills = cat.skills.filter((s) => PROFICIENCY[s]);
    const topSkill = profSkills.sort((a, b) => (PROFICIENCY[b] || 0) - (PROFICIENCY[a] || 0)).slice(0, 3);

    return (
        <div
            className={`skill-cat-3d-card glass-card ${isActive ? 'active' : ''}`}
            style={{ '--cat-color': cat.color }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Glowing orb bg */}
            <div className="skill-card-orb" />

            {/* Icon with pulse ring */}
            <div className="skill-icon-3d">
                <div className="skill-pulse-ring" />
                <div className="skill-pulse-ring delay" />
                <span className="skill-icon-emoji">{cat.icon}</span>
            </div>

            {/* Category name */}
            <h3 className="skill-cat-name">{cat.category}</h3>
            <p className="skill-cat-count">{cat.skills.length} Technologies</p>

            {/* Top‑3 radial arcs */}
            <div className="skill-arcs-row">
                {topSkill.map((s) => (
                    <div key={s} className="skill-arc-item">
                        <RadialArc percent={PROFICIENCY[s]} color={cat.color} />
                        <span className="arc-label">{s.split(' ')[0]}</span>
                    </div>
                ))}
            </div>

            {/* Floating pills */}
            <FloatingCloud skills={cat.skills} color={cat.color} inView={inView} />
        </div>
    );
}

/* ─── Main export ─── */
export default function Skills() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [active, setActive] = useState(null);
    const [view, setView] = useState('grid'); // 'grid' | 'orbit'

    return (
        <section className="section skills-section" id="skills" ref={ref}>
            <div className="skills-bg-gradient" aria-hidden="true" />

            {/* Decorative floating icons (absolutely positioned, CSS animated) */}
            <div className="skills-deco" aria-hidden="true">
                {['⚛️', '🟢', '🌿', '🔷', '🟡', '🔵', '⚙️', '📊'].map((icon, i) => (
                    <span key={i} className="deco-icon" style={{ '--di': i }}>{icon}</span>
                ))}
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Technical Skills</span>
                    <h2 className="section-title">My Tech Arsenal</h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        Technologies I use to engineer products that are fast, beautiful, and production-ready.
                    </p>

                    {/* View toggle */}
                    <div className="view-toggle">
                        <button
                            className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                            onClick={() => setView('grid')}
                            id="skills-grid-view-btn"
                        >⊞ Cards</button>
                        <button
                            className={`view-btn ${view === 'orbit' ? 'active' : ''}`}
                            onClick={() => setView('orbit')}
                            id="skills-orbit-view-btn"
                        >⊙ 3D Orbit</button>
                    </div>
                </motion.div>

                {/* ── GRID VIEW ── */}
                {view === 'grid' && (
                    <motion.div
                        className="skills-grid-3d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {SKILLS.map((cat, ci) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 48 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + ci * 0.12, duration: 0.6 }}
                            >
                                <SkillCategoryCard
                                    cat={cat}
                                    inView={inView}
                                    isActive={active === ci}
                                    onHover={() => setActive(ci)}
                                    onLeave={() => setActive(null)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* ── ORBIT VIEW ── */}
                {view === 'orbit' && (
                    <motion.div
                        className="orbit-view"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Central nucleus */}
                        <div className="orbit-nucleus">
                            <div className="nucleus-pulse" />
                            <div className="nucleus-core">
                                <span>RJ</span>
                                <p>Dev</p>
                            </div>
                        </div>

                        {/* Orbit rings for each category */}
                        {SKILLS.map((cat, i) => (
                            <div key={cat.category} className="orbit-layer" style={{ '--layer': i }}>
                                <OrbitRing
                                    skills={cat.skills.slice(0, 4)}
                                    color={cat.color}
                                    radius={160 + i * 80}
                                    speed={18 + i * 6}
                                    delay={i * -4}
                                />
                                <div className="orbit-label" style={{ color: cat.color }}>
                                    {cat.icon} {cat.category}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* ── Stats bar (always visible) ── */}
                <motion.div
                    className="skills-stats-bar"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                >
                    {[
                        { label: 'Frontend', value: '88%', color: '#8b5cf6' },
                        { label: 'Backend', value: '82%', color: '#22d3ee' },
                        { label: 'Databases', value: '78%', color: '#a78bfa' },
                        { label: 'BI & Analytics', value: '83%', color: '#34d399' },
                        { label: 'Tools & DevOps', value: '84%', color: '#f59e0b' },
                    ].map((stat) => (
                        <div key={stat.label} className="skills-stat-item">
                            <div className="stat-top">
                                <span className="stat-name">{stat.label}</span>
                                <span className="stat-val" style={{ color: stat.color }}>{stat.value}</span>
                            </div>
                            <div className="stat-bar-track">
                                <motion.div
                                    className="stat-bar-fill"
                                    style={{ background: stat.color, boxShadow: `0 0 8px ${stat.color}` }}
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: stat.value } : { width: 0 }}
                                    transition={{ duration: 1.2, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
