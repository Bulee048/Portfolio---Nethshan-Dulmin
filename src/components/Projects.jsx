import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import swiftrouteImg from '../assets/swiftroute.png';
import ecotransitImg from '../assets/ecotransit.png';
import acadamixImg from '../assets/acadamix.png';
import vehicleRentalImg from '../assets/vehicle-rental.png';

const projects = [
  {
    title: "SwiftRoute Logistics",
    description: "Architected a production-grade full-stack MERN platform handling end-to-end logistics: shipment tracking, order processing, and multi-role user administration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Bulee048/SwiftRoute-Project",
    image: swiftrouteImg,
  },
  {
    title: "EcoTransit IoT",
    description: "Built a full-stack IoT-integrated transportation platform bridging ESP32 microcontrollers and Neo-6M GPS hardware with a cloud-hosted MERN backend.",
    tech: ["React.js", "Node.js", "MongoDB", "ESP32", "GPS", "REST API"],
    github: "https://github.com/Bulee048/Public-Transportation-Management-System",
    image: ecotransitImg,
  },
  {
    title: "Acadamix Management",
    description: "Developed a multi-module web system managing student and staff records, attendance tracking, and automated report generation for an institution-scale dataset.",
    tech: ["Java", "MySQL", "HTML", "Bootstrap", "Apache Tomcat"],
    github: "https://github.com/Bulee048/School-Management-System",
    image: acadamixImg,
  },
  {
    title: "Vehicle Rental System",
    description: "Engineered a multi-branch vehicle reservation platform with inventory management, customer payment processing, and staff coordination modules.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "XAMPP"],
    github: "#",
    image: vehicleRentalImg,
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="glass rounded-3xl overflow-hidden group card-glow transition-all duration-500"
    style={{ borderRadius: '1.5rem', overflow: 'hidden' }}
  >
    <div className="relative h-64 overflow-hidden">
      <motion.img 
        src={project.image} 
        alt={project.title} 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-color via-bg-color/20 to-transparent opacity-80" 
           style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-color), rgba(5,5,5,0.2), transparent)' }} />
    </div>
    
    <div className="p-10" style={{ padding: '2.5rem' }}>
      <div className="flex justify-between items-start mb-6" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3 className="text-2xl font-bold group-hover:text-primary-color transition-colors">{project.title}</h3>
        <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 10 }}
            href={project.github} 
            target="_blank" 
            className="text-secondary-color hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: -10 }}
            href="#" 
            className="text-secondary-color hover:text-white transition-colors"
          >
            <ExternalLink size={22} />
          </motion.a>
        </div>
      </div>
      
      <p className="text-secondary-color mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{project.description}</p>
      
      <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-secondary-color group-hover:border-primary-color/30 transition-all" 
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Software <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            A selection of hand-built systems ranging from logistics platforms to IoT-integrated smart city solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
