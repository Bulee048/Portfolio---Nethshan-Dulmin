import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: "Languages",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.3)",
    skills: ["Java", "JavaScript", "TypeScript", "PHP", "C", "C++", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.15)",
    border: "rgba(168,85,247,0.3)",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Bootstrap", "Material UI"],
  },
  {
    label: "Backend & APIs",
    color: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    border: "rgba(16,185,129,0.3)",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST API", "Socket.io", "JWT", "OAuth2"],
  },
  {
    label: "Databases",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.3)",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "MS SQL Server", "SQLite"],
  },
  {
    label: "Tools & Systems",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.15)",
    border: "rgba(239,68,68,0.3)",
    skills: ["Git", "GitHub", "Docker", "Linux/Unix", "Figma", "XAMPP", "Apache Tomcat", "Vite"],
  },
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'rgba(8,8,12,0.8)', padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Tech <span className="text-gradient">Stack</span></h2>
          <p className="section-subtitle">
            The languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: gIdx * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                padding: '1.5rem 2rem',
                background: group.glow,
                border: `1px solid ${group.border}`,
                borderRadius: '1.25rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Label */}
              <div style={{
                minWidth: '140px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: group.color,
                  boxShadow: `0 0 10px ${group.color}`,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: group.color,
                }}>
                  {group.label}
                </span>
              </div>

              {/* Divider */}
              <div style={{ width: '1px', alignSelf: 'stretch', background: group.border, flexShrink: 0 }} />

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', flex: 1 }}>
                {group.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gIdx * 0.08 + sIdx * 0.04 }}
                    whileHover={{ scale: 1.08, backgroundColor: group.glow }}
                    style={{
                      padding: '0.35rem 0.9rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: '#e2e8f0',
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
