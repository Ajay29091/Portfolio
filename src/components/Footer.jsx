import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '30px 0', marginTop: '50px' }}>
            <div className="max-w-7xl">
                <p>&copy; {new Date().getFullYear()} Ajay Pratap Singh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
