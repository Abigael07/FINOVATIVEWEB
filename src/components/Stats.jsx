import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useMobile } from '../context/MobileContext';

const data = [
  { number: 215, suffix: '+', label: 'Clients Served' },
  { number: 98,  suffix: '%', label: 'Satisfaction Rate' },
  { number: 8,   suffix: '+', label: 'Years Experience' },
  { number: 500, suffix: '+', label: 'Returns Filed' },
];

export default function Stats({ animate }) {
  const isMobile = useMobile();
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: 'var(--navy)', padding: isMobile ? '60px 20px' : '80px 60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '1px',
          background: 'var(--blue-edge)',
          border: '1px solid var(--blue-edge)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}>
          {data.map((stat, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'var(--navy-panel)' : 'var(--navy)',
                padding: isMobile ? '32px 20px' : '48px 40px',
                textAlign: 'center',
                transition: 'background 0.3s ease',
                position: 'relative',
                cursor: 'default',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: hovered === i ? 'var(--blue-bright)' : 'transparent',
                transition: 'background 0.3s ease',
              }} />
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? '2.4rem' : '3rem',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {animate
                  ? <><CountUp end={stat.number} duration={2.2} />{stat.suffix}</>
                  : <span>0{stat.suffix}</span>
                }
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
