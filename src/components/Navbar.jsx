import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
                backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
                boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
                height: scrolled ? '70px' : '90px',
                display: 'flex',
                alignItems: 'center'
            }}>
            <div className="container d-flex justify-content-between align-items-center">
                <a href="#" className="navbar-brand text-2xl font-bold" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    Ajay
                </a>

                {/* Desktop Menu */}
                <div className="d-none d-md-flex align-items-center gap-4">
                    <ul className="d-flex gap-4 m-0 p-0" style={{ listStyle: 'none' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-decoration-none fw-bold"
                                    style={{ fontSize: '0.95rem', transition: 'color 0.2s', color: 'var(--text-secondary)' }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Button (Desktop) */}
                    <button onClick={toggleTheme} className="d-flex align-items-center justify-content-center"
                        style={{
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            fontSize: '1.2rem',
                            padding: '8px',
                            borderRadius: '50%',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(15deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <a href="/Ajay_Singh_s_Resume.pdf" download className="btn btn-outline-primary"
                        style={{
                            borderColor: 'var(--accent-color)',
                            color: 'var(--accent-color)',
                            fontWeight: '500',
                            padding: '8px 20px',
                            borderRadius: '4px',
                            '--bs-btn-hover-bg': 'var(--accent-color)',
                            '--bs-btn-hover-border-color': 'var(--accent-color)',
                            '--bs-btn-hover-color': '#fff' /* Always white on hover */
                        }}>
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger & Theme Toggle */}
                <div className="d-md-none d-flex align-items-center gap-3">
                    <button onClick={toggleTheme} className="d-flex align-items-center justify-content-center"
                        style={{
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            fontSize: '1.2rem',
                            border: 'none'
                        }}>
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-link text-decoration-none p-0" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
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
                        className="position-absolute top-100 start-0 w-100 shadow-lg p-4 d-flex flex-column gap-3 d-md-none"
                        style={{
                            background: 'var(--bg-card)',
                            borderTop: '1px solid var(--bg-secondary)',
                            color: 'var(--text-primary)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                                className="text-decoration-none fw-bold py-2 border-bottom"
                                style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--text-primary)',
                                    borderColor: 'var(--bg-secondary)'
                                }}>
                                {link.name}
                            </a>
                        ))}
                        <a href="/Ajay_Singh_s_Resume.pdf" download className="btn w-100 mt-2"
                            style={{
                                backgroundColor: 'var(--accent-color)',
                                color: '#fff',
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
