import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../../context/MobileContext';
import heroVideo from '../../assets/hero.mp4';

const WA = 'https://wa.me/254708022727';

const pillars = [
  { label: 'Clients Served',   value: '200+' },
  { label: 'Satisfaction Rate', value: '98%' },
  { label: 'Years Experience',  value: '8+' },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay },
});

export default function HeroSection() {
  const isMobile = useMobile();

  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100vh - 72px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* ── Video background ── */}
      <video
        src={heroVideo}
        autoPlay loop muted playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.28,
        }}
      />

      {/* ── Dark gradient overlay over video ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, var(--navy) 0%, rgba(6,13,31,0.6) 55%, rgba(30,111,196,0.15) 100%)',
      }} />

      {/* ── Subtle blue glow ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 65% 40%, rgba(30,111,196,0.1) 0%, transparent 70%)',
      }} />

      {/* ── Left vertical accent line ── */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '16px' : '40px',
        top: '20%', bottom: '20%',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, var(--blue-bright), transparent)',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px', width: '100%',
        margin: '0 auto',
        padding: isMobile ? '60px 20px 60px 32px' : '80px 60px 80px 80px',
      }}>
        <motion.p {...fade(0)} style={{
          fontSize: '0.65rem', letterSpacing: '0.35em',
          color: 'var(--blue-bright)', textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)', marginBottom: '20px',
        }}>
          Financial Excellence · Digital Innovation
        </motion.p>

        <motion.h1 {...fade(0.15)} style={{
          fontFamily: 'var(--font-serif)',
          fontSize: isMobile ? 'clamp(2.4rem, 8vw, 3.4rem)' : 'clamp(3rem, 5.5vw, 5rem)',
          fontWeight: 300, lineHeight: 1.1,
          color: 'var(--white)', marginBottom: '24px',
          letterSpacing: '-0.02em', maxWidth: '680px',
        }}>
          Optimizing Your Business for{' '}
          <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Sustainable Growth</em>
        </motion.h1>

        <motion.p {...fade(0.3)} style={{
          fontSize: '1rem', color: 'var(--white-med)',
          fontFamily: 'var(--font-sans)', fontWeight: 300,
          lineHeight: 1.8, maxWidth: '480px', marginBottom: '48px',
        }}>
          Master Excel, accounting, and data analytics — skills that drive careers and transform businesses.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fade(0.45)} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href={`${WA}?text=Hello%20I%20want%20to%20enroll`} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '14px 36px', background: 'var(--blue)', color: 'var(--white)',
                borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
            >
              Get Started
            </motion.button>
          </a>

          <a href="#services">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '14px 36px', background: 'transparent',
                color: 'var(--white-med)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--blue-edge)',
                fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
                fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue-bright)'; e.currentTarget.style.color = 'var(--white)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--blue-edge)';   e.currentTarget.style.color = 'var(--white-med)'; }}
            >
              Our Services
            </motion.button>
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div {...fade(0.6)} style={{ display: 'flex', gap: '32px', marginTop: '64px', flexWrap: 'wrap' }}>
          {pillars.map(p => (
            <div key={p.label}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>
                {p.value}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--white-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
                {p.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div style={{
          width: '1px', height: '52px',
          background: 'linear-gradient(to bottom, transparent, var(--blue-bright))',
          margin: '0 auto',
        }} />
      </motion.div>
    </section>
  );
}
