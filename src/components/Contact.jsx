import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/singhajay29091@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '50px',
                    backgroundColor: 'var(--bg-card)', padding: '50px', borderRadius: '15px', boxShadow: 'var(--shadow-soft)'
                }} className="contact-container">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Let's Connect</h3>
                        <p style={{ marginBottom: '30px', color: '#666' }}>I am open to opportunities for Data Engineering roles. Feel free to reach out!</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <a href={`mailto:${personalDetails.email}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                                <FaEnvelope style={{ color: 'var(--accent-color)' }} /> {personalDetails.email}
                            </a>
                            <a href={`tel:${personalDetails.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                                <FaPhone style={{ color: 'var(--accent-color)' }} /> {personalDetails.phone}
                            </a>
                        </div>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                            {personalDetails.social.map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer"
                                    style={{
                                        width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', fontSize: '1.2rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                    >
                        {/* Hidden Inputs for FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />

                        <input
                            type="text" name="name" placeholder="Your Name" required
                            style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        />
                        <input
                            type="email" name="email" placeholder="Your Email" required
                            style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        />
                        <textarea
                            name="message" placeholder="Your Message" rows="5" required
                            style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        ></textarea>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                padding: '15px', borderRadius: '5px', border: 'none', fontSize: '1rem', fontWeight: '600',
                                backgroundColor: status === 'success' ? '#4CAF50' : status === 'error' ? '#f44336' : 'var(--accent-color)',
                                color: 'white', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed, Try Later' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
