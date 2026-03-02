import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { PERSONAL } from '../data/portfolioData';
import './Footer.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    const scrollTo = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-glow" aria-hidden="true" />
            <div className="container">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#hero" className="footer-logo gradient-text" onClick={() => scrollTo('#hero')}>
                            Roshni Jaiswal
                        </a>
                        <p className="footer-tagline">Where Engineering Meets Imagination</p>
                        <div className="footer-socials">
                            <a href={PERSONAL.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social" id="footer-github">
                                <FiGithub size={18} />
                            </a>
                            <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social" id="footer-linkedin">
                                <FiLinkedin size={18} />
                            </a>
                            <a href={`mailto:${PERSONAL.email}`} aria-label="Email" className="footer-social" id="footer-email">
                                <FiMail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="footer-nav">
                        <h4>Navigation</h4>
                        <ul>
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Get In Touch</h4>
                        <p>{PERSONAL.email}</p>
                        <p>{PERSONAL.phone}</p>
                        <p>{PERSONAL.location}</p>
                        <a href="/Resume.pdf" download className="footer-resume-btn" id="footer-resume-btn">
                            Download Resume ↓
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} {PERSONAL.name}. Designed &amp; built with{' '}
                        <FiHeart size={12} style={{ color: '#ec4899', display: 'inline', verticalAlign: 'middle' }} />{' '}
                        by me.
                    </p>
                    <button
                        className="back-to-top"
                        onClick={() => scrollTo('#hero')}
                        aria-label="Back to top"
                        id="back-to-top-btn"
                    >
                        Back to top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}
