import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    title: 'Enrolled at SLIIT',
    desc: 'Started BSc (Hons) in Information Technology at Sri Lanka Institute of Information Technology.',
    color: '#3b82f6',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'First Enterprise Collaboration',
    desc: 'Joined Startek as an Operational Assistant — gained real-world experience in multinational processes, SLA management, and cross-team coordination.',
    color: '#a855f7',
    icon: '💼',
  },
  {
    year: '2023',
    title: 'First Team Project — ParkBay',
    desc: 'Led the backend integration for a Smart Parking Management System as part of a 5-person team using the MERN stack.',
    color: '#10b981',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'IoT & Full-Stack Expansion',
    desc: 'Built EcoTransit — an IoT-integrated public transport system bridging ESP32 hardware with a cloud-hosted MERN backend.',
    color: '#f59e0b',
    icon: '⚙️',
  },
  {
    year: '2025',
    title: 'Enterprise-Scale Platforms',
    desc: 'Architected Campus Operations Hub (Java Spring Boot + Docker + OAuth2) and LeadFlow CRM (TypeScript + real-time analytics). Deepening expertise in system design and project leadership.',
    color: '#ef4444',
    icon: '🏗️',
  },
  {
    year: 'Now',
    title: 'Open to PM & Dev Roles',
    desc: 'Actively seeking opportunities in Project Management and Full-Stack Development where I can lead teams and ship impactful software.',
    color: '#22c55e',
    icon: '🎯',
    isLast: true,
  },
];

const Journey = () => {
  return (
    <section id="journey" style={{ padding: '120px 0', background: 'rgba(8,8,12,0.6)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">My <span className="text-gradient">Journey</span></h2>
          <p className="section-subtitle">
            A timeline of growth — from first semester to shipping enterprise platforms.
          </p>
        </motion.div>

        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, #3b82f6, #a855f7, #10b981, #f59e0b, #ef4444, #22c55e)',
            opacity: 0.3,
            borderRadius: '999px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                {/* Icon circle */}
                <div style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: `${m.color}18`,
                  border: `2px solid ${m.color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: m.isLast ? `0 0 20px ${m.color}40` : 'none',
                }}>
                  {m.icon}
                  {m.isLast && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: 'absolute',
                        inset: '-8px',
                        border: `2px solid ${m.color}`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    flex: 1,
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(15,15,22,0.7)',
                    border: `1px solid ${m.color}25`,
                    borderRadius: '1rem',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: m.color,
                      background: `${m.color}15`,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      border: `1px solid ${m.color}30`,
                    }}>
                      {m.year}
                    </span>
                    <h3 style={{
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      fontFamily: 'Outfit, sans-serif',
                    }}>
                      {m.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '0.83rem',
                    color: '#64748b',
                    lineHeight: 1.65,
                  }}>
                    {m.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
