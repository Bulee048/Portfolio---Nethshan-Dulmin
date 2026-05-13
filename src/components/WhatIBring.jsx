import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers, Users, GitBranch, Calendar, Search, FileText, Server, Zap
} from 'lucide-react';

const skills = [
  { icon: Layers,    title: 'System Design',    desc: 'Architecture first, code second', color: '#3b82f6' },
  { icon: Users,     title: 'Team Leadership',   desc: 'Coordinating cross-functional teams', color: '#a855f7' },
  { icon: Calendar,  title: 'Agile / Scrum',     desc: 'Sprint planning & retrospectives', color: '#10b981' },
  { icon: GitBranch, title: 'Sprint Planning',   desc: 'Backlog grooming & prioritization', color: '#f59e0b' },
  { icon: Search,    title: 'Code Reviews',      desc: 'Quality assurance & mentoring', color: '#ef4444' },
  { icon: FileText,  title: 'Documentation',     desc: 'Clear specs & technical writing', color: '#06b6d4' },
  { icon: Server,    title: 'CI/CD & DevOps',    desc: 'Docker, Git workflows, deployment', color: '#8b5cf6' },
  { icon: Zap,       title: 'Problem Solving',   desc: 'Breaking down complex challenges', color: '#ec4899' },
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.25rem',
          maxWidth: '960px',
          margin: '0 auto',
        }}>
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, borderColor: `${skill.color}50` }}
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
                  gap: '0.75rem',
                }}
              >
                {/* Icon container */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.65rem',
                  background: `${skill.color}15`,
                  border: `1px solid ${skill.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: skill.color,
                }}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <span style={{
                  fontWeight: 700,
                  fontSize: '0.93rem',
                  color: '#f1f5f9',
                  fontFamily: 'Outfit, sans-serif',
                }}>
                  {skill.title}
                </span>
                <span style={{
                  fontSize: '0.78rem',
                  color: '#64748b',
                  lineHeight: 1.55,
                }}>
                  {skill.desc}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
