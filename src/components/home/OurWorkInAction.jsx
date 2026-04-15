import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import your images
import excell from '../../assets/excell.jpeg';
import tax from '../../assets/tax.jpeg';
import cash from '../../assets/cash.jpeg';
import analytics from '../../assets/analytics.jpeg';
import image from '../../assets/image.png';

/* ── Data ───────────────────────────────────────── */
const features = [
  { image: excell },
  { image: tax },
  { image: cash },
  { image: analytics },
  { image: image },
];

/* ── Design tokens (reuse from Home for consistency) ── */
const c = {
  navyMid: '#0b1530',
  blueBright: '#2e87e8',
  blueEdge: 'rgba(46,135,232,0.35)',
  white: '#ffffff',
};

const eyebrow = {
  fontSize: '0.72rem',
  letterSpacing: '0.3em',
  color: c.blueBright,
  marginBottom: '12px',
  textTransform: 'uppercase',
};

const divider = {
  width: '40px',
  height: '1px',
  background: c.blueBright,
};

/* ── Component ─────────────────────────────────── */
const OurWorkInAction = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % features.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + features.length) % features.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: '80px 20px', background: c.navyMid }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={eyebrow}>Visual Portfolio</p>
        <h2 style={{ color: c.white, fontSize: '2.4rem', fontWeight: 300 }}>
          Our Work in Action
        </h2>
        <div style={{ ...divider, margin: '16px auto 0' }} />
      </div>

      {/* Slider */}
      <div style={{ position: 'relative', maxWidth: '1100px', margin: 'auto' }}>
        <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
          <motion.div
            animate={{ x: `-${current * (100 / 3)}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              width: `${features.length * (100 / 3)}%`,
              gap: '16px',
            }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  minWidth: 'calc(100% / 3)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: `1px solid ${c.blueEdge}`,
                }}
              >
                <img
                  src={feature.image}
                  alt="feature"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(6,13,31,0.6) 0%, transparent 60%)',
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} style={styles.arrowLeft}>
          ‹
        </button>
        <button onClick={nextSlide} style={styles.arrowRight}>
          ›
        </button>

        {/* Dots */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                margin: '0 3px',
                border: 'none',
                background:
                  i === current
                    ? c.blueBright
                    : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Arrow styles ───────────────────────── */
const arrowBase = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '28px',
  background: 'rgba(46,135,232,0.12)',
  border: '1px solid rgba(46,135,232,0.35)',
  borderRadius: '3px',
  cursor: 'pointer',
  padding: '10px 14px',
  color: '#2e87e8',
};

const styles = {
  arrowLeft: { ...arrowBase, left: '-50px' },
  arrowRight: { ...arrowBase, right: '-50px' },
};

export default OurWorkInAction;