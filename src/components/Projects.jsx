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

                <div className="row g-4 justify-content-center">
                    {projects.map((project, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card h-100 border-0 shadow-sm"
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    borderRadius: '12px',
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
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h3 className="card-title h4 fw-bold mb-0">{project.title}</h3>
                                        <span className="text-secondary small text-nowrap">{project.date}</span>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="badge rounded-pill fw-medium" style={{
                                                backgroundColor: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)',
                                                fontSize: '0.8rem',
                                                padding: '8px 12px'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mb-3 p-3 rounded" style={{
                                        backgroundColor: '#fdfdfd',
                                        borderLeft: '3px solid var(--accent-color)',
                                        fontStyle: 'italic',
                                        color: '#555'
                                    }}>
                                        <p className="mb-0 card-text">{project.description}</p>
                                    </div>

                                    <ul className="list-unstyled mb-0">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="position-relative ps-4 mb-2 text-secondary small">
                                                <span className="position-absolute start-0 fw-bold" style={{ color: 'var(--accent-color)' }}>✓</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
