import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ThemeSwitcher.css';

const THEMES = [
    {
        id: 'glass',
        label: 'Glassmorphism',
        emoji: '🔷',
        accent: '#8b5cf6',
        cyan: '#22d3ee',
        preview: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
    },
    {
        id: 'luxury',
        label: 'Dark Luxury',
        emoji: '✦',
        accent: '#c9a84c',
        cyan: '#e8d5a3',
        preview: 'linear-gradient(135deg, #c9a84c, #e8d5a3)',
    },
    {
        id: 'cyberpunk',
        label: 'Cyberpunk',
        emoji: '⚡',
        accent: '#ff0080',
        cyan: '#00ffff',
        preview: 'linear-gradient(135deg, #ff0080, #00ffff)',
    },
    {
        id: 'space',
        label: 'Space',
        emoji: '🌌',
        accent: '#6366f1',
        cyan: '#e0aaff',
        preview: 'linear-gradient(135deg, #6366f1, #e0aaff)',
    },
    {
        id: 'ai',
        label: 'AI Neural',
        emoji: '🤖',
        accent: '#00ff88',
        cyan: '#0088ff',
        preview: 'linear-gradient(135deg, #00ff88, #0088ff)',
    },
];

export default function ThemeSwitcher() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(() => localStorage.getItem('portfolio-theme') || 'glass');

    // Apply theme on mount and change
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', active);
        localStorage.setItem('portfolio-theme', active);
    }, [active]);

    const applyTheme = (themeId) => {
        setActive(themeId);
        setOpen(false);
    };

    const current = THEMES.find((t) => t.id === active);

    return (
        <div className="theme-switcher" id="theme-switcher">
            {/* Trigger button */}
            <motion.button
                className="theme-trigger"
                onClick={() => setOpen((o) => !o)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title="Switch Theme"
                id="theme-trigger-btn"
                style={{ '--active-accent': current?.accent }}
            >
                <span className="theme-trigger-swatch" style={{ background: current?.preview }} />
                <span className="theme-trigger-label">Theme</span>
                <motion.span
                    className="theme-trigger-chevron"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                >▾</motion.span>
            </motion.button>

            {/* Theme panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="theme-panel"
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="theme-panel-label">Choose Theme</p>
                        <div className="theme-options">
                            {THEMES.map((theme) => (
                                <motion.button
                                    key={theme.id}
                                    className={`theme-option ${active === theme.id ? 'active' : ''}`}
                                    style={{ '--t-accent': theme.accent, '--t-preview': theme.preview }}
                                    onClick={() => applyTheme(theme.id)}
                                    whileHover={{ x: 4 }}
                                    id={`theme-option-${theme.id}`}
                                >
                                    <span
                                        className="theme-option-swatch"
                                        style={{ background: theme.preview }}
                                    />
                                    <span className="theme-option-emoji">{theme.emoji}</span>
                                    <span className="theme-option-name">{theme.label}</span>
                                    {active === theme.id && <span className="theme-option-check">✓</span>}
                                </motion.button>
                            ))}
                        </div>
                        <p className="theme-panel-footer">Saved automatically</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Click-outside dismiss */}
            {open && (
                <div
                    className="theme-backdrop"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}
        </div>
    );
}
