import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMobile } from '../../context/MobileContext';

const services = [
  {
    num: '01', title: 'Accounting Services', to: '/accounting-service',
    desc: 'Tax filing, financial statements, and reconciliations with full KRA compliance.',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=70',
  },
  {
    num: '02', title: 'Data Analytics', to: '/data-analytics',
    desc: 'Dashboards, reports, and models that drive confident decision-making.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70',
  },
  {
    num: '03', title: 'Web Development', to: '/web-development',
    desc: 'Modern, responsive websites built for performance and brand presence.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=70',
  },
  {
    num: '04', title: 'Excel Solutions', to: '/excel',
    desc: 'Automate spreadsheets, dashboards, and workflows with precision.',
    img: 'https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?w=600&q=70',
  },
];

export default function ServicesSection() {
  const isMobile = useMobile();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{ padding: isMobile ? '80px 0' : '120px 0', background: 'var(--navy-mid)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 60px' }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}
        >
          <div style={{ width: '28px', height: '1px', background: 'var(--blue-bright)' }} />
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
            What We Offer
          </span>
        </motion.div>

        {/* Heading + description */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 360px',
          gap: isMobile ? '24px' : '80px',
          alignItems: 'end',
          marginBottom: '64px',
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '2.6rem' : 'clamp(3rem, 5vw, 4.4rem)',
              fontWeight: 300, color: 'var(--white)',
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Services built for <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>real growth.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
            style={{ color: 'var(--white-med)', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.8 }}
          >
            Finovative Insights provides financial and technology solutions designed to strengthen your operations and grow your business with confidence.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1px',
          background: 'var(--blue-edge)',
          border: '1px solid var(--blue-edge)',
        }}>
          {services.map((svc, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'var(--navy-panel)' : 'var(--navy-mid)',
                transition: 'background 0.35s ease',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: hovered === i ? 'var(--blue-bright)' : 'transparent',
                transition: 'background 0.35s ease',
              }} />

              {/* Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={svc.img} alt={svc.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.5s ease',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,31,0.8) 0%, transparent 60%)' }} />
                <span style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--blue-bright)', fontFamily: 'var(--font-sans)' }}>
                  {svc.num}
                </span>
              </div>

              {/* Text */}
              <div style={{ padding: isMobile ? '28px 24px 32px' : '32px 36px 40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)', fontWeight: 300, lineHeight: 1.85, marginBottom: '24px' }}>
                  {svc.desc}
                </p>
                <Link to={svc.to} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: hovered === i ? 'var(--blue-bright)' : 'var(--white-med)',
                  fontFamily: 'var(--font-sans)', transition: 'color 0.3s',
                }}>
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
