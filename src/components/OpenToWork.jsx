import React from 'react';
import { motion } from 'framer-motion';

const OpenToWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 2.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.55rem 1rem 0.55rem 0.7rem',
        background: 'rgba(10,10,18,0.85)',
        border: '1px solid rgba(34,197,94,0.35)',
        borderRadius: '999px',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 4px 30px rgba(34,197,94,0.15)',
        cursor: 'default',
      }}
    >
      {/* Pulsing green dot */}
      <div style={{ position: 'relative', width: '10px', height: '10px', flexShrink: 0 }}>
        <motion.div
          animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#22c55e',
            borderRadius: '50%',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: '2px',
          background: '#22c55e',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: '0.06em',
          color: '#22c55e',
          textTransform: 'uppercase',
        }}>
          Open to Work
        </span>
        <span style={{
          fontSize: '0.65rem',
          color: '#94a3b8',
          fontWeight: 500,
        }}>
          PM &amp; Dev Roles
        </span>
      </div>
    </motion.div>
  );
};

export default OpenToWork;
