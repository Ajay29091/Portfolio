import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="section-padding">
            <div className="max-w-7xl">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

                    {/* Education Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '15px' }}
                        >
                            <FaGraduationCap style={{ color: 'var(--accent-color)' }} /> Education
                        </motion.h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    style={{ backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '10px', boxShadow: 'var(--shadow-soft)' }}
                                >
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{edu.degree}</h3>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>{edu.school}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                                        <span>{edu.period}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '15px' }}
                        >
                            <FaCertificate style={{ color: 'var(--accent-color)' }} /> Certifications
                        </motion.h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    style={{
                                        backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '10px',
                                        boxShadow: 'var(--shadow-soft)', display: 'flex', alignItems: 'center', gap: '20px'
                                    }}
                                >
                                    <div style={{
                                        width: '50px', height: '50px', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', fontSize: '1.2rem',
                                        flexShrink: 0
                                    }}>
                                        <FaCertificate />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px' }}>{cert.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{cert.issuer} | <span style={{ color: 'var(--text-tertiary)' }}>{cert.date}</span></p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
