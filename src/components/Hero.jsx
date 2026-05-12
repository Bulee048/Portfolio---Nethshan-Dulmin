import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-0">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-color/60 to-bg-color z-0" 
           style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,5,5,0.7), #050505)' }} />

      <div className="container relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block px-5 py-2 mb-8 text-sm font-bold tracking-[0.2em] uppercase border border-primary-color/30 rounded-full text-primary-color bg-primary-color/10"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              style={{ border: '1px solid rgba(59, 130, 246, 0.3)', color: 'var(--primary-color)', padding: '0.5rem 1.25rem', borderRadius: '999px', fontSize: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', marginBottom: '2rem' }}
            >
              Information Technology Undergraduate
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-9xl font-extrabold mb-8 leading-tight tracking-tighter" 
            style={{ fontSize: '6rem', marginBottom: '2rem' }}
          >
            Hi, I'm <span className="text-gradient">Nethshan</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-secondary-color max-w-3xl mx-auto mb-12 leading-relaxed" 
            style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', maxWidth: '45rem', margin: '0 auto 3rem auto' }}
          >
            Results-driven IT student at SLIIT. Crafting <span className="text-white font-semibold">full-stack systems</span> with MERN, Java, and IoT. Focused on building high-impact software solutions.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6" 
            style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
          >
            <a href="#projects">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects <ArrowRight size={22} />
              </motion.button>
            </a>
            <a href="/CV.pdf" download="Nethshan_CV.pdf">
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume <Download size={22} />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-color/30 rounded-full flex justify-center p-1"
          style={{ width: '1.5rem', height: '2.5rem', border: '2px solid rgba(148, 163, 184, 0.3)', borderRadius: '999px', display: 'flex', justifyContent: 'center', padding: '0.25rem' }}
        >
          <motion.div 
            animate={{ height: [4, 12, 4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-primary-color rounded-full"
            style={{ width: '2px', background: 'var(--primary-color)', borderRadius: '999px' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
