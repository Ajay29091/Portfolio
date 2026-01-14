import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured Projects
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', justifyContent: 'center' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                padding: '30px',
                                borderRadius: '12px',
                                boxShadow: 'var(--shadow-soft)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{project.title}</h3>
                                <span style={{ fontSize: '0.85rem', color: '#888', whiteSpace: 'nowrap' }}>{project.date}</span>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} style={{
                                        backgroundColor: 'var(--bg-secondary)',
                                        color: 'var(--text-primary)',
                                        padding: '5px 12px',
                                        borderRadius: '15px',
                                        fontSize: '0.8rem',
                                        fontWeight: '500'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{
                                marginBottom: '20px', fontStyle: 'italic', color: '#555', backgroundColor: '#fdfdfd',
                                padding: '10px', borderLeft: '3px solid var(--accent-color)', borderRadius: '0 5px 5px 0'
                            }}>
                                <p>{project.description}</p>
                            </div>

                            <ul style={{ listStyle: 'none' }}>
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx} style={{ position: 'relative', paddingLeft: '25px', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
