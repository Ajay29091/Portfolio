import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: '#ddd' }}></div>

                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ paddingLeft: '60px', position: 'relative', marginBottom: '40px' }}
                        >
                            {/* Dot */}
                            <div style={{
                                position: 'absolute', left: '11px', top: '5px', width: '20px', height: '20px',
                                borderRadius: '50%', background: 'var(--bg-card)', border: '4px solid var(--accent-color)'
                            }}></div>

                            <div style={{ marginBottom: '5px', fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: '600', display: 'flex', gap: '15px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaCalendarAlt /> {job.period}</span>
                            </div>

                            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{job.role}</h3>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '10px', color: '#555' }}>
                                {job.company} <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 'normal' }}>| {job.type}</span>
                            </h4>

                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', marginBottom: '15px', fontSize: '0.9rem' }}>
                                <FaMapMarkerAlt /> {job.location}
                            </p>

                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                                {job.description.map((desc, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
