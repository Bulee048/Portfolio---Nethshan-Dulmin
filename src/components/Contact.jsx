import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Let's Build <span className="text-gradient">Something Great</span></h2>
          <p className="section-subtitle">
            Currently available for new opportunities and collaborations. Feel free to reach out and let's discuss your next project!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-10" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="flex items-center gap-6 text-2xl" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.5rem' }}>
                <div className="p-5 bg-primary-color/10 rounded-2xl text-primary-color" style={{ padding: '1.25rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '1rem', color: 'var(--primary-color)' }}>
                  <Mail size={32} />
                </div>
                <span className="font-medium">dulminbulegodaofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-6 text-2xl" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.5rem' }}>
                <div className="p-5 bg-purple-500/10 rounded-2xl text-purple-500" style={{ padding: '1.25rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '1rem', color: '#8b5cf6' }}>
                  <MessageSquare size={32} />
                </div>
                <span className="font-medium">Available for freelance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.a 
                href="mailto:dulminbulegodaofficial@gmail.com"
                whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                className="glass p-8 rounded-3xl flex justify-between items-center group transition-colors"
                style={{ padding: '2rem', borderRadius: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'white' }}
              >
                <div className="flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <Mail size={32} />
                  <div>
                    <h4 className="text-xl font-bold">Email Me</h4>
                    <p className="text-secondary-color" style={{ color: 'var(--text-secondary)' }}>Get in touch directly</p>
                  </div>
                </div>
                <Send className="text-primary-color group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a 
                href="https://github.com/Bulee048"
                target="_blank"
                whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="glass p-8 rounded-3xl flex justify-between items-center group transition-colors"
                style={{ padding: '2rem', borderRadius: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'white' }}
              >
                <div className="flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <FaGithub size={32} />
                  <div>
                    <h4 className="text-xl font-bold">Follow on GitHub</h4>
                    <p className="text-secondary-color" style={{ color: 'var(--text-secondary)' }}>@Bulee048</p>
                  </div>
                </div>
                <Send className="text-white group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/nethshan-dulmin-bulegoda-003589268"
                target="_blank"
                whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                className="glass p-8 rounded-3xl flex justify-between items-center group transition-colors"
                style={{ padding: '2rem', borderRadius: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'white' }}
              >
                <div className="flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <FaLinkedin size={32} />
                  <div>
                    <h4 className="text-xl font-bold">Connect on LinkedIn</h4>
                    <p className="text-secondary-color" style={{ color: 'var(--text-secondary)' }}>Nethshan Dulmin</p>
                  </div>
                </div>
                <Send className="text-primary-color group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
