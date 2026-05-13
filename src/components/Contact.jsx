import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email Me',
      value: 'dulminbulegodaofficial@gmail.com',
      color: '#8b5cf6',
      link: 'mailto:dulminbulegodaofficial@gmail.com'
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Nethshan Dulmin',
      color: '#0077b5',
      link: 'https://www.linkedin.com/in/nethshan-dulmin-bulegoda-003589268'
    },
    {
      id: 'github',
      icon: FaGithub,
      label: 'GitHub',
      value: '@Bulee048',
      color: '#ffffff',
      link: 'https://github.com/Bulee048'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:dulminbulegodaofficial@gmail.com?subject=Contact from Portfolio - ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="section-subtitle">
            Have a project in mind? Reach out and let's build something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '1.5rem', 
            marginBottom: '5rem' 
          }} 
          className="contact-grid-row"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.75rem 1.5rem',
                background: 'rgba(15, 15, 22, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '1.5rem',
                textDecoration: 'none',
                color: 'white',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s',
                minWidth: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${method.color}50`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
            >
              <div style={{
                width: '56px',
                height: '56px',
                minWidth: '56px',
                minHeight: '56px',
                borderRadius: '1rem',
                background: `${method.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: method.color,
                border: `1px solid ${method.color}30`,
                flexShrink: 0
              }}>
                <method.icon size={26} />
              </div>
              <div style={{ minWidth: 0, overflow: 'hidden' }}>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.2rem' }}>{method.label}</p>
                <p style={{ 
                  fontWeight: 600, 
                  fontSize: '0.95rem',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}>{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem', 
          alignItems: 'center' 
        }} className="md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '3rem',
              background: 'rgba(15, 15, 22, 0.5)',
              borderRadius: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ position: 'relative' }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: focused === 'name' ? 'var(--primary-color)' : '#94a3b8',
                  fontSize: '0.85rem',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s'
                }}>
                  <User size={16} /> Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `2px solid ${focused === 'name' ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)'}`,
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: focused === 'email' ? 'var(--primary-color)' : '#94a3b8',
                  fontSize: '0.85rem',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s'
                }}>
                  <Mail size={16} /> Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `2px solid ${focused === 'email' ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)'}`,
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: focused === 'message' ? 'var(--primary-color)' : '#94a3b8',
                  fontSize: '0.85rem',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s'
                }}>
                  <MessageSquare size={16} /> Message
                </label>
                <textarea 
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{
                    width: '100%',
                    padding: '1rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `2px solid ${focused === 'message' ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)'}`,
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1.25rem',
                  background: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '1rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Illustration Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative'
            }}
            className="hidden lg:flex"
          >
            <div style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
              opacity: 0.1,
              filter: 'blur(50px)',
              zIndex: -1
            }} />
            <img 
              src="/contact_illustration_3d.png" 
              alt="Contact Illustration" 
              style={{ 
                width: '100%', 
                maxWidth: '500px',
                height: 'auto',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
              }} 
            />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .md\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .contact-grid-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Contact;


