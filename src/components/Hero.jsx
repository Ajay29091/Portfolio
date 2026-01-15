import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="hero-section" style={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container hero-container d-flex align-items-center">
                <div className="row justify-content-between align-items-center mx-auto w-100">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start"
                        style={{ zIndex: 10 }}
                    >
                        <span className="d-block fw-medium mb-2 text-primary hero-greeting" style={{ color: '#A67B5B' }}>
                            Hello, I'm
                        </span>
                        <h1 className="fw-bold mb-3 hero-title" style={{ color: '#1A1A1A', lineHeight: 1.1 }}>
                            {personalDetails.name}
                        </h1>
                        <h2 className="hero-subtitle fw-normal text-secondary mb-4">
                            {personalDetails.role}
                        </h2>
                        <p className="lead text-muted mb-4 mx-auto mx-md-0" style={{ maxWidth: '480px', lineHeight: '1.6', fontSize: '1.1rem' }}>
                            {personalDetails.tagline}
                        </p>
                        <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start hero-buttons">
                            <a href="#projects" className="btn btn-primary"
                                style={{
                                    backgroundColor: '#A67B5B',
                                    borderColor: '#A67B5B',
                                    padding: '12px 32px',
                                    fontWeight: '500'
                                }}>
                                View Projects
                            </a>
                            <a href="/Ajay_Singh_s_Resume.pdf" download className="btn btn-outline-dark"
                                style={{
                                    padding: '12px 32px',
                                    fontWeight: '500'
                                }}>
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Abstract Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center position-relative mb-5 mb-md-0 mobile-visual-adjust"
                    >
                        <div className="hero-visual-container position-relative" style={{ width: '400px', height: '400px', maxWidth: '100%' }}>
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', width: '75%', height: '75%',
                                    backgroundColor: 'rgba(166, 123, 91, 0.1)', borderRadius: '50%',
                                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                                }}
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                                style={{
                                    position: 'absolute', width: '45%', height: '45%',
                                    border: '2px solid #A67B5B', borderRadius: '50%',
                                    top: '40%', left: '60%', opacity: 0.6
                                }}
                            />
                            {/* Decorative Dots */}
                            <div style={{
                                position: 'absolute', width: '100px', height: '100px',
                                backgroundImage: 'radial-gradient(#A67B5B 2px, transparent 2px)', backgroundSize: '15px 15px',
                                bottom: '20px', left: '20px', opacity: 0.3
                            }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
