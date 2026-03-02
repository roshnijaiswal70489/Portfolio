import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiDownload } from 'react-icons/fi';
import './FloatingCTA.css';

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const docH = document.documentElement.scrollHeight - window.innerHeight;

            // Show after scrolling 400px (past the Hero)
            setVisible(scrollY > 400);

            // Progress bar 0-100
            setProgress(docH > 0 ? Math.min(100, (scrollY / docH) * 100) : 0);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToContact = () =>
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            {/* ── Reading Progress Bar ── */}
            <div className="read-progress-track" aria-hidden="true">
                <motion.div
                    className="read-progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* ── Floating CTA ── */}
            <AnimatePresence>
                {visible && (
                    <motion.div
                        className="floating-cta-wrap"
                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 60, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                    >
                        {/* Open to Work pulse */}
                        <div className="floating-status">
                            <span className="floating-status-dot" />
                            <span>Open to Work</span>
                        </div>

                        {/* Hire Me button */}
                        <button
                            className="floating-hire-btn"
                            onClick={scrollToContact}
                            id="floating-hire-btn"
                        >
                            <FiMail size={15} />
                            Hire Me
                        </button>

                        {/* Resume download */}
                        <a
                            href="/Resume.pdf"
                            download
                            className="floating-resume-btn"
                            id="floating-resume-btn"
                            aria-label="Download Resume"
                        >
                            <FiDownload size={15} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
