import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { icon: '🧠', title: 'System Design', desc: 'Architecture first, code second' },
  { icon: '🗂️', title: 'Agile / Scrum', desc: 'Sprint planning & retrospectives' },
  { icon: '🤝', title: 'Team Leadership', desc: 'Coordinating cross-functional teams' },
  { icon: '📊', title: 'Sprint Planning', desc: 'Backlog grooming & prioritization' },
  { icon: '🔍', title: 'Code Reviews', desc: 'Quality assurance & mentoring' },
  { icon: '📋', title: 'Documentation', desc: 'Clear specs & technical writing' },
  { icon: '🚀', title: 'CI/CD & DevOps', desc: 'Docker, Git workflows, deployment' },
  { icon: '🎯', title: 'Problem Solving', desc: 'Breaking down complex challenges' },
];

const WhatIBring = () => {
  return (
    <section style={{ padding: '120px 0', background: 'rgba(5,5,8,0.9)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">What I <span className="text-gradient">Bring to a Team</span></h2>
          <p className="section-subtitle">
            Beyond writing code — I bring structure, communication, and leadership to every project I'm part of.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.25rem',
          maxWidth: '960px',
          margin: '0 auto',
        }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, borderColor: 'rgba(59,130,246,0.4)' }}
              style={{
                padding: '1.5rem',
                background: 'rgba(15,15,22,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '1.1rem',
                backdropFilter: 'blur(10px)',
                cursor: 'default',
                transition: 'border-color 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{skill.icon}</span>
              <span style={{
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#f1f5f9',
                fontFamily: 'Outfit, sans-serif',
              }}>
                {skill.title}
              </span>
              <span style={{
                fontSize: '0.78rem',
                color: '#64748b',
                lineHeight: 1.5,
              }}>
                {skill.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
