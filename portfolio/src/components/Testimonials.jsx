import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Roshni brings a rare combination of technical depth and creative sensibility. Her work on the Saira Foundation platform was genuinely impactful — thoughtfully built and delivered with care.",
        name: "Project Collaborator",
        role: "Team Lead",
        company: "Saira Foundation",
        initials: "SC",
        color: "#8b5cf6",
    },
    {
        quote: "It's rare to find a developer who understands both the data side and the user experience side. Roshni's dashboards were not only accurate but visually clear and easy for stakeholders to understand.",
        name: "Analytics Mentor",
        role: "BI Consultant",
        company: "Netlink",
        initials: "AM",
        color: "#22d3ee",
    },
    {
        quote: "She approached the Event Planner project with a product mindset — always asking how the user would actually use it. The result was a clean, production-ready app that the team uses daily.",
        name: "Senior Engineer",
        role: "Tech Lead",
        company: "Netlink",
        initials: "SE",
        color: "#34d399",
    },
];

export default function Testimonials() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="section testimonials-section" id="testimonials" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">What People Say</h2>
                    <div className="divider" />
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="testimonial-card glass-card"
                            style={{ '--t-color': t.color }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
                        >
                            <div className="testimonial-quote-mark">&ldquo;</div>
                            <p className="testimonial-text">{t.quote}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="author-name">{t.name}</p>
                                    <p className="author-role">{t.role} · {t.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
