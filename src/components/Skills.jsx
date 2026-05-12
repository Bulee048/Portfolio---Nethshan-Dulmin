import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-blue-500" size={36} />,
    skills: ["Java", "JavaScript (ES6+)", "PHP", "C", "C++", "HTML5", "CSS3", "Bash"]
  },
  {
    title: "Frameworks & UI",
    icon: <Layout className="text-purple-500" size={36} />,
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Material UI", "Framer Motion"]
  },
  {
    title: "Databases & IoT",
    icon: <Database className="text-green-500" size={36} />,
    skills: ["MySQL", "MongoDB", "MS SQL Server", "ESP32", "Neo-6M GPS"]
  },
  {
    title: "Systems & Tools",
    icon: <Server className="text-orange-500" size={36} />,
    skills: ["Linux/Unix", "Git", "GitHub", "Figma", "Apache Tomcat", "XAMPP", "JWT", "REST API"]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="bg-surface-color/50" style={{ background: 'rgba(15,15,18,0.5)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="section-subtitle">
            A deep dive into my core technical competencies and tools I use to build robust, scalable software.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-10" 
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="glass p-12 rounded-[2.5rem] card-glow transition-all duration-300 flex flex-col items-center"
              style={{ padding: '3rem', borderRadius: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="mb-8 flex justify-center p-6 bg-white/5 rounded-3xl" 
                style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem' }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-center mb-8" style={{ textAlign: 'center', marginBottom: '2rem' }}>{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-semibold border border-white/5 hover:bg-primary-color/10 hover:text-primary-color hover:border-primary-color/30 transition-all duration-300"
                        style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.85rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
