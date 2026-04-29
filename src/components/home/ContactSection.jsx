import React from 'react';
import { Link } from 'react-router-dom'; // ← added
import { motion } from 'framer-motion';
import { useMobile } from '../../context/MobileContext';

const inputBase = {
  padding: '14px 18px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--blue-edge)',
  background: 'rgba(255,255,255,0.04)',
  color: 'var(--white)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.3s',
  width: '100%',
};

export default function ContactSection() {
  const isMobile = useMobile();

  return (
    <section style={{ padding: isMobile ? '80px 20px' : '100px 60px', background: 'var(--navy-mid)' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>

        <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>
          Get in Touch
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : '2.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>
          Contact Us
        </h2>
        <div style={{ width: '32px', height: '1px', background: 'var(--blue-bright)', margin: '0 auto 20px' }} />

        <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)', fontWeight: 300, lineHeight: 1.8, marginBottom: '36px' }}>
          Have a question or want to get started? Reach out — our team responds within 24 hours.
        </p>

        {/* ── CTA → /contact ── */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{
              padding: '15px 40px',
              background: 'var(--blue)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
          >
            talk to us
          </motion.button>
        </Link>
      </div>
    </section>
  );
}