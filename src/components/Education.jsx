import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    period: "Nov 2023 - Nov 2027 (Expected)",
    details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Software Engineering."
  },
  {
    institution: "National Institute of Business Management (NIBM)",
    degree: "Certificate in Computer Science",
    period: "Mar 2023 - Jul 2023",
    details: "Intensive foundation in computer science principles and programming."
  },
  {
    institution: "Royal College Colombo 07",
    degree: "G.C.E. Advanced Level - 3 A's",
    period: "2022",
    details: "Commerce Stream. Achieved top-tier academic results."
  }
];

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Education & Academic <span className="text-gradient">Path</span></h2>
          <p className="section-subtitle">
            My formal academic journey and technical certifications that provided a strong foundation in computer science.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
              style={{ padding: '2rem', borderRadius: '1.5rem' }}
            >
              <div className="p-4 bg-primary-color/10 rounded-2xl text-primary-color w-fit mb-6" style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '1rem', color: 'var(--primary-color)', width: 'fit-content', marginBottom: '1.5rem' }}>
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
              <p className="text-primary-color font-semibold mb-4" style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '1rem' }}>{edu.degree}</p>
              <div className="text-sm text-secondary-color mb-4 flex items-center gap-2" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                <Award size={14} /> {edu.period}
              </div>
              <p className="text-sm text-secondary-color leading-relaxed" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
