import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';

const Hero = () => {
    return (
        <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between"
                style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                    style={{ flex: 1, maxWidth: '600px' }}
                >
                    <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: '500', color: '#A67B5B', marginBottom: '10px' }}>
                        Hello, I'm
                    </span>
                    <h1 style={{ fontSize: '4rem', fontWeight: '700', lineHeight: 1.1, marginBottom: '15px', color: '#1A1A1A' }}>
                        {personalDetails.name}
                    </h1>
                    <h2 style={{ fontSize: '2rem', fontWeight: '400', color: '#555', marginBottom: '20px' }}>
                        {personalDetails.role}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '35px', maxWidth: '480px', lineHeight: '1.6' }}>
                        {personalDetails.tagline}
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#projects"
                            style={{ backgroundColor: '#A67B5B', color: 'white', padding: '14px 32px', borderRadius: '5px', fontWeight: '500', border: '2px solid #A67B5B' }}>
                            View Projects
                        </a>
                        <a href="/Ajay_Singh_s_Resume.pdf" download
                            style={{ backgroundColor: 'transparent', color: '#333', padding: '14px 32px', borderRadius: '5px', fontWeight: '500', border: '2px solid #333' }}>
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center relative"
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
                >
                    <div style={{ width: '400px', height: '400px', position: 'relative' }}>
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            style={{
                                position: 'absolute', width: '300px', height: '300px',
                                backgroundColor: 'rgba(166, 123, 91, 0.1)', borderRadius: '50%',
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                            }}
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            style={{
                                position: 'absolute', width: '180px', height: '180px',
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
        </section>
    );
};

export default Hero;
