import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // scroll-spy
            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    {/* Logo */}
                    <a className="nav-logo" href="#hero" onClick={() => handleLinkClick('#hero')} aria-label="Home">
                        <span className="logo-hex">
                            <svg viewBox="0 0 40 40" width="36" height="36">
                                <defs>
                                    <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#22d3ee" />
                                    </linearGradient>
                                </defs>
                                <polygon points="20,4 36,13 36,27 20,36 4,27 4,13" fill="none" stroke="url(#lg)" strokeWidth="2.5" />
                                <text x="20" y="25" fontSize="16" fontWeight="bold" fill="url(#lg)" textAnchor="middle">R</text>
                            </svg>
                        </span>
                        <span className="logo-text gradient-text">Roshni</span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
                                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Switcher */}
                    <ThemeSwitcher />

                    {/* Resume Button */}
                    <a href="/Resume.pdf" download className="btn btn-primary nav-resume-btn" aria-label="Download Resume">
                        Resume ↓
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        id="hamburger-btn"
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                    >
                        <ul>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <a href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                            <li>
                                <a href="/resume.pdf" download className="mobile-resume-btn">Download Resume ↓</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
