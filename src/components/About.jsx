import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-700 leading-relaxed"
                        style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px' }}
                    >
                        <p>{aboutContent.summary}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-color)' }}>6+</span>
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)' }}>Months Exp</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-color)' }}>5+</span>
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)' }}>Technologies</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-color)' }}>1+</span>
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)' }}>Projects</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
