import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed-top transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}
            style={{
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
                boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
                height: scrolled ? '70px' : '90px',
                display: 'flex',
                alignItems: 'center'
            }}>
            <div className="container d-flex justify-content-between align-items-center">
                <a href="#" className="navbar-brand text-2xl font-bold text-gray-800" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#333' }}>
                    Ajay
                </a>

                {/* Desktop Menu */}
                <div className="d-none d-md-flex align-items-center gap-4">
                    <ul className="d-flex gap-4 m-0 p-0" style={{ listStyle: 'none' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-decoration-none text-secondary fw-bold"
                                    style={{ fontSize: '0.95rem', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => e.target.style.color = '#A67B5B'}
                                    onMouseLeave={(e) => e.target.style.color = '#555'}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="/Ajay_Singh_s_Resume.pdf" download className="btn btn-outline-primary"
                        style={{
                            borderColor: '#A67B5B',
                            color: '#A67B5B',
                            fontWeight: '500',
                            padding: '8px 20px',
                            borderRadius: '4px',
                            '--bs-btn-hover-bg': '#A67B5B',
                            '--bs-btn-hover-border-color': '#A67B5B',
                            '--bs-btn-hover-color': 'white'
                        }}>
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="d-md-none">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-link link-dark text-decoration-none p-0" style={{ fontSize: '1.5rem' }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="position-absolute top-100 start-0 w-100 bg-white shadow-lg p-4 d-flex flex-column gap-3 d-md-none"
                        style={{ borderTop: '1px solid #eee' }}
                    >
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                                className="text-decoration-none text-dark fw-bold py-2 border-bottom"
                                style={{ fontSize: '1.1rem' }}>
                                {link.name}
                            </a>
                        ))}
                        <a href="/Ajay_Singh_s_Resume.pdf" download className="btn w-100 mt-2"
                            style={{
                                backgroundColor: '#A67B5B',
                                color: 'white',
                                padding: '12px',
                                fontWeight: '500'
                            }}>
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
