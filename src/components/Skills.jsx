import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Technical Skills
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                padding: '30px',
                                borderRadius: '10px',
                                boxShadow: 'var(--shadow-soft)',
                                borderTop: '3px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.transition = 'all 0.3s ease';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-primary)', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                {skillGroup.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                {skillGroup.items.map((skill, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                        <skill.icon style={{ color: 'var(--accent-color)' }} />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
