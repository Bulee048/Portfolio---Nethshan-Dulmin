import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          NETHSHAN<span className="text-gradient">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-secondary-color hover:text-white transition-colors"
              style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
            style={{ display: 'flex', gap: '1rem' }}
          >
            <a href="https://github.com/Bulee048" target="_blank" className="hover:text-primary-color transition-colors" style={{ color: 'white' }}><FaGithub size={20} /></a>
            <a href="#" className="hover:text-primary-color transition-colors" style={{ color: 'white' }}><FaLinkedin size={20} /></a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden" style={{ display: 'none' }}>
           {/* Mobile menu logic would go here if needed for responsiveness */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
