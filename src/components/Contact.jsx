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

                <div className="contact-container" style={{
                    backgroundColor: 'var(--bg-card)', padding: '40px', borderRadius: '15px', boxShadow: 'var(--shadow-soft)'
                }}>
                    <div className="row g-5 align-items-center">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="col-12 col-md-5"
                        >
                            <h3 className="fw-bold mb-4" style={{ fontSize: '1.8rem' }}>Let's Connect</h3>
                            <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>I am open to opportunities for Data Engineering roles. Feel free to reach out!</p>

                            <div className="d-flex flex-column gap-3 mb-5">
                                <a href={`mailto:${personalDetails.email}`} className="d-flex align-items-center gap-3 text-decoration-none" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(166, 123, 91, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FaEnvelope style={{ color: 'var(--accent-color)' }} />
                                    </div>
                                    {personalDetails.email}
                                </a>
                                <a href={`tel:${personalDetails.phone}`} className="d-flex align-items-center gap-3 text-decoration-none" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(166, 123, 91, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FaPhone style={{ color: 'var(--accent-color)' }} />
                                    </div>
                                    {personalDetails.phone}
                                </a>
                            </div>

                            <div className="d-flex gap-3">
                                {personalDetails.social.map((social, idx) => (
                                    <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{
                                            width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', fontSize: '1.4rem',
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
                        <div className="col-12 col-md-7">
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                onSubmit={handleSubmit}
                                className="d-flex flex-column gap-3"
                            >
                                {/* Hidden Inputs for FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />

                                <input
                                    type="text" name="name" placeholder="Your Name" required
                                    className="form-control"
                                    style={{ padding: '15px', borderRadius: '8px', border: '1px solid #eee', fontSize: '1rem', backgroundColor: '#fafafa' }}
                                />
                                <input
                                    type="email" name="email" placeholder="Your Email" required
                                    className="form-control"
                                    style={{ padding: '15px', borderRadius: '8px', border: '1px solid #eee', fontSize: '1rem', backgroundColor: '#fafafa' }}
                                />
                                <textarea
                                    name="message" placeholder="Your Message" rows="5" required
                                    className="form-control"
                                    style={{ padding: '15px', borderRadius: '8px', border: '1px solid #eee', fontSize: '1rem', backgroundColor: '#fafafa', resize: 'vertical' }}
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="btn btn-primary w-100 py-3 fw-bold mt-2"
                                    style={{
                                        backgroundColor: status === 'success' ? '#4CAF50' : status === 'error' ? '#f44336' : 'var(--accent-color)',
                                        borderColor: status === 'success' ? '#4CAF50' : status === 'error' ? '#f44336' : 'var(--accent-color)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed, Try Later' : 'Send Message'}
                                </button>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
