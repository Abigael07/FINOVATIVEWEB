import React from 'react';
import { useMobile } from '../context/MobileContext';

export default function PageHero({ eyebrow, title, subtitle, image, dark = true }) {
  const isMobile = useMobile();
  return (
    <section style={{
      position: 'relative',
      height: isMobile ? '260px' : '340px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {image && (
        <img src={image} alt="" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: 0.25,
        }} />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: dark
          ? 'linear-gradient(135deg, var(--navy) 0%, rgba(6,13,31,0.7) 100%)'
          : 'linear-gradient(135deg, rgba(6,13,31,0.85) 0%, rgba(11,21,48,0.7) 100%)',
      }} />
      <div style={{ position: 'relative', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: isMobile ? '0 20px' : '0 60px' }}>
        {eyebrow && (
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>
            {eyebrow}
          </p>
        )}
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : '3rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.1, marginBottom: '12px' }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '0.95rem', color: 'var(--white-med)', fontFamily: 'var(--font-sans)', fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
