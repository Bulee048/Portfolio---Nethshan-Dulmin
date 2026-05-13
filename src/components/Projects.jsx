import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import swiftrouteImg from '../assets/swiftroute.png';
import ecotransitImg from '../assets/ecotransit.png';
import acadamixImg from '../assets/acadamix.png';
import vehicleRentalImg from '../assets/vehicle-rental.png';
import campushubImg from '../assets/campushub.png';
import sccImg from '../assets/scc.png';

const projects = [
  {
    title: "Campus Operations Hub",
    subtitle: "Enterprise Campus Management Platform",
    description: "An enterprise-scale platform centralizing campus resource management, facility booking, and maintenance workflows. Features role-based access for Users, Admins, and Technicians with full booking lifecycle management and real-time in-app notifications.",
    tech: ["Java 17", "Spring Boot 3", "React 19", "PostgreSQL", "Docker", "JWT", "OAuth2"],
    github: "https://github.com/Evil-Shown/Campus-Operation-HUB",
    image: campushubImg,
    accent: "#3b82f6",
    tag: "Enterprise",
  },
  {
    title: "SwiftRoute Logistics",
    subtitle: "Full-Stack MERN Logistics Platform",
    description: "Architected a production-grade full-stack MERN platform handling end-to-end logistics: shipment tracking, order processing, and multi-role user administration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Bulee048/SwiftRoute-Project",
    image: swiftrouteImg,
    accent: "#10b981",
    tag: "Full-Stack",
  },
  {
    title: "Smart Campus Companion",
    subtitle: "Real-Time Campus Collaboration System",
    description: "A real-time management system utilizing Socket.io for live updates across campus interactions. Built with React and Redux Toolkit with secure JWT session management and multi-role dashboards.",
    tech: ["React", "Redux Toolkit", "Socket.io", "Node.js", "Express", "JWT"],
    github: "https://github.com/Bulee048/SCC",
    image: sccImg,
    accent: "#a855f7",
    tag: "Real-Time",
  },
  {
    title: "EcoTransit IoT",
    subtitle: "IoT-Integrated Transportation Platform",
    description: "Built a full-stack IoT-integrated transportation platform bridging ESP32 microcontrollers and Neo-6M GPS hardware with a cloud-hosted MERN backend.",
    tech: ["React.js", "Node.js", "MongoDB", "ESP32", "Neo-6M GPS", "REST API"],
    github: "https://github.com/Bulee048/Public-Transportation-Management-System",
    image: ecotransitImg,
    accent: "#06b6d4",
    tag: "IoT",
  },
  {
    title: "Acadamix Management",
    subtitle: "Institution-Scale School System",
    description: "Developed a multi-module web system managing student and staff records, attendance tracking, and automated report generation for an institution-scale dataset.",
    tech: ["Java", "MySQL", "HTML", "Bootstrap", "Apache Tomcat"],
    github: "https://github.com/Bulee048/School-Management-System",
    image: acadamixImg,
    accent: "#f59e0b",
    tag: "Full-Stack",
  },
  {
    title: "Vehicle Rental System",
    subtitle: "Multi-Branch Reservation Platform",
    description: "Engineered a multi-branch vehicle reservation platform with inventory management, customer payment processing, and staff coordination modules.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "XAMPP"],
    github: "#",
    image: vehicleRentalImg,
    accent: "#ef4444",
    tag: "Web App",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: index * 0.08 }}
    style={{
      position: 'relative',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      background: 'rgba(12,12,18,0.8)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(12px)',
      transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
    }}
    whileHover={{
      y: -8,
      boxShadow: `0 20px 60px ${project.accent}30`,
      borderColor: `${project.accent}50`,
    }}
  >
    {/* Accent top bar */}
    <div style={{
      height: '3px',
      background: `linear-gradient(90deg, ${project.accent}, transparent)`,
      width: '100%',
    }} />

    {/* Image */}
    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top, rgba(12,12,18,0.95) 0%, rgba(12,12,18,0.3) 60%, transparent 100%)`,
      }} />
      {/* Tag badge */}
      <div style={{
        position: 'absolute', top: '1rem', right: '1rem',
        padding: '0.3rem 0.75rem',
        background: `${project.accent}25`,
        border: `1px solid ${project.accent}60`,
        borderRadius: '999px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: project.accent,
        backdropFilter: 'blur(8px)',
      }}>
        {project.tag}
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem', color: '#fff' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.78rem', color: project.accent, fontWeight: 600, letterSpacing: '0.04em' }}>
            {project.subtitle}
          </p>
        </div>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          style={{
            padding: '0.5rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.6rem',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginLeft: '1rem',
          }}
        >
          <FaGithub size={18} />
        </motion.a>
      </div>

      <p style={{
        fontSize: '0.875rem',
        color: '#94a3b8',
        lineHeight: 1.65,
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '0.25rem 0.65rem',
            background: `${project.accent}12`,
            border: `1px solid ${project.accent}30`,
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 600,
            color: project.accent,
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Software <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            A curated selection of systems built from the ground up — spanning enterprise platforms, IoT, and real-time applications.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.75rem',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
