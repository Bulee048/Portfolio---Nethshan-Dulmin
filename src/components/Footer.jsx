import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5" style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div className="text-xl font-bold tracking-tighter">
          NETHSHAN<span className="text-gradient">.</span>
        </div>
        
        <div className="text-secondary-color text-sm flex items-center gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Framer Motion
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-secondary-color" style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
          <a href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>Twitter</a>
          <a href="https://github.com/Bulee048" className="hover:text-white transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>GitHub</a>
          <a href="#" className="hover:text-white transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>LinkedIn</a>
        </div>
      </div>
      
      <div className="container mt-12 text-center text-xs text-secondary-color opacity-50" style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.75rem', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Nethshan Dulmin Bulegoda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
