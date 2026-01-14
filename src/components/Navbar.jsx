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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                background: scrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
                boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
                padding: scrolled ? '15px 0' : '25px 0',
                transition: 'all 0.3s ease'
            }}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-800" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#333' }}>
                    Ajay Singh
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8" style={{ display: 'flex', gap: '30px' }}>
                    <ul style={{ display: 'flex', gap: '30px' }} className="desktop-menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
                                    style={{ fontWeight: '500', fontSize: '0.95rem', color: '#555' }}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="/Ajay_Singh_s_Resume.pdf" download className="px-5 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all"
                        style={{
                            border: '1px solid #A67B5B',
                            padding: '8px 20px',
                            borderRadius: '4px',
                            color: '#A67B5B',
                            fontWeight: '500'
                        }}>
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden mobile-toggle" style={{ display: 'none' }}>
                    {/* Note: In a real CSS setup, we'd use media queries. Since I'm writing inline styles for safety where Tailwind is absent, 
                        I'll add a class for mobile visibility logic in index.css or assume desktop first for now. 
                        Actually, I'll add a quick media query style block in index.css later or rely on the class logic if Tailwind was present.
                        Since I didn't install Tailwind, I will rely on standard CSS in index.css and just use classes here.
                        I will assume standard CSS classes "desktop-menu" and "mobile-toggle" are controlled by media queries.
                    */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800">
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
                        className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden"
                        style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'white', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    >
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                                className="block text-lg font-medium text-gray-700 py-2"
                                style={{ display: 'block', padding: '10px 0', color: '#333' }}>
                                {link.name}
                            </a>
                        ))}
                        <a href="/Ajay_Singh_s_Resume.pdf" download className="block w-full text-center py-3 bg-accent text-white rounded mt-4"
                            style={{ display: 'block', textAlign: 'center', padding: '12px', background: '#A67B5B', color: 'white', borderRadius: '4px', marginTop: '10px' }}>
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
