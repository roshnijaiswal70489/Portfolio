import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { PERSONAL } from '../data/portfolioData';
import './Hero.css';

/* ── Particle canvas ── */
function ParticleCanvas() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const particles = useRef([]);
    const animRef = useRef();

    const init = useCallback((canvas) => {
        const W = canvas.width;
        const H = canvas.height;
        const count = Math.min(140, Math.floor((W * H) / 8000));
        particles.current = Array.from({ length: count }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            baseX: 0,
            baseY: 0,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.8 + 0.6,
            opacity: Math.random() * 0.5 + 0.2,
        }));
        particles.current.forEach((p) => { p.baseX = p.x; p.baseY = p.y; });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(canvas);
        };
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const ps = particles.current;

            ps.forEach((p) => {
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    p.vx -= (dx / dist) * 0.3;
                    p.vy -= (dy / dist) * 0.3;
                }
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.98;
                p.vy *= 0.98;
                // boundary wrap
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139,92,246,${p.opacity})`;
                ctx.fill();
            });

            // connections
            for (let i = 0; i < ps.length; i++) {
                for (let j = i + 1; j < ps.length; j++) {
                    const dx = ps[i].x - ps[j].x;
                    const dy = ps[i].y - ps[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        const alpha = (1 - dist / 130) * 0.18;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(ps[i].x, ps[i].y);
                        ctx.lineTo(ps[j].x, ps[j].y);
                        ctx.stroke();
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animRef.current);
        };
    }, [init]);

    return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

/* ── Floating 3D orb (CSS-based) ── */
function FloatingOrb() {
    return (
        <div className="orb-wrapper" aria-hidden="true">
            <div className="orb-ring orb-ring-1" />
            <div className="orb-ring orb-ring-2" />
            <div className="orb-ring orb-ring-3" />
            <div className="orb-core" />
        </div>
    );
}

/* ── Typewriter component ── */
function Typewriter({ texts }) {
    const ref = useRef();
    useEffect(() => {
        let ti = 0, ci = 0, deleting = false;
        const tick = () => {
            const word = texts[ti];
            if (!deleting) {
                ref.current.textContent = word.slice(0, ++ci);
                if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return; }
            } else {
                ref.current.textContent = word.slice(0, --ci);
                if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
            }
            setTimeout(tick, deleting ? 50 : 80);
        };
        tick();
    }, [texts]);
    return <span ref={ref} className="typewriter-text" />;
}

/* ── Hero Section ── */
export default function Hero() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section className="hero section" id="hero">
            <ParticleCanvas />
            <FloatingOrb />

            {/* Gradient blobs */}
            <div className="hero-blob hero-blob-1" aria-hidden="true" />
            <div className="hero-blob hero-blob-2" aria-hidden="true" />

            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Eyebrow — Open to Work badge */}
                    <motion.p variants={itemVariants} className="hero-eyebrow">
                        <span className="eyebrow-dot" />
                        🟢 Open to Work &mdash; {PERSONAL.noticePeriod}
                    </motion.p>

                    {/* Name */}
                    <motion.h1 variants={itemVariants} className="hero-name">
                        Hi, I&apos;m{' '}
                        <span className="gradient-text hero-name-highlight">{PERSONAL.name}</span>
                    </motion.h1>

                    {/* Role + Typewriter */}
                    <motion.div variants={itemVariants} className="hero-role">
                        <Typewriter
                            texts={[
                                'Software Developer',
                                'Full-Stack Engineer',
                                'MERN Stack Developer',
                                'React.js Developer',
                                'BI Dashboard Engineer',
                            ]}
                        />
                    </motion.div>

                    {/* Tagline */}
                    <motion.p variants={itemVariants} className="hero-tagline">
                        &ldquo;{PERSONAL.tagline}&rdquo;
                    </motion.p>

                    {/* Body */}
                    <motion.p variants={itemVariants} className="hero-body">
                        MCA graduate (9 SGPA) seeking a full-time Software Developer role.
                        Skilled in React.js, Node.js, MongoDB, and Lumenore BI — ready to contribute from day one.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="hero-ctas">
                        <button
                            className="btn btn-primary cta-primary"
                            onClick={() => scrollToSection('contact')}
                            id="hero-hire-me-btn"
                        >
                            🟢 Hire Me
                        </button>
                        <a href="/Resume.pdf" download className="btn btn-secondary" id="hero-resume-btn">
                            Download Resume ↓
                        </a>
                    </motion.div>

                    {/* Socials */}
                    <motion.div variants={itemVariants} className="hero-socials">
                        <a href={PERSONAL.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link" id="hero-github-link">
                            <FiGithub size={20} />
                        </a>
                        <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link" id="hero-linkedin-link">
                            <FiLinkedin size={20} />
                        </a>
                        <a href={`mailto:${PERSONAL.email}`} aria-label="Email" className="social-link" id="hero-email-link">
                            <FiMail size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                className="scroll-indicator"
                onClick={() => scrollToSection('about')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                aria-label="Scroll down"
                id="scroll-indicator-btn"
            >
                <span className="scroll-text">Scroll</span>
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <FiArrowDown size={18} />
                </motion.span>
            </motion.button>
        </section>
    );
}
