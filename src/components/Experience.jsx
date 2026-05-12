import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Operational Assistant",
    company: "Startek (Multinational Operations Company)",
    location: "Wattala, Sri Lanka",
    period: "Jun 2023 - Sep 2023",
    description: [
      "Operated in a high-volume, fast-paced multinational environment, maintaining quality and composure under pressure.",
      "Collaborated cross-functionally to identify and resolve operational issues within tight SLA windows.",
      "Strengthened professional communication, escalation handling, and decision-making skills."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-surface-color/30" style={{ background: 'rgba(15,15,18,0.3)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">
            My work history and professional contributions in various corporate and technical environments.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto" style={{ maxWidth: '64rem', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl relative"
              style={{ padding: '2.5rem', borderRadius: '1.5rem' }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <h3 className="text-2xl font-bold text-primary-color" style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>{exp.role}</h3>
                  <div className="flex items-center gap-2 text-secondary-color mt-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-secondary-color" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <div className="flex items-center gap-2"><Calendar size={16} /> {exp.period}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} /> {exp.location}</div>
                </div>
              </div>
              
              <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 text-secondary-color" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="mt-2 w-1.5 h-1.5 bg-primary-color rounded-full shrink-0" style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%', marginTop: '0.5rem' }} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
