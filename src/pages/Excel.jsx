import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const WA = 'https://wa.me/254708022727?text=Hello%20I%20want%20to%20enroll%20in%20the%20Excel%20course';
const learn = ['Excel basics and interface', 'Formulas and functions (SUM, IF, VLOOKUP)', 'Data cleaning and formatting', 'Charts and data visualization', 'Pivot tables and dashboards', 'Advanced Excel techniques'];

export default function Excel() {
  const isMobile = useMobile();
  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Excel"
        title={<>Microsoft Excel <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Mastery</em></>}
        subtitle="Learn Excel from beginner to advanced and boost your reporting analysis in 4 weeks."
        image="https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?w=1200&q=70"
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '20px' }}>What You Will Learn</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
            {learn.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', background: 'var(--navy-panel)', border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue-bright)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--white-med)', fontFamily: 'var(--font-sans)' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--blue-edge)', border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '48px' }}
        >
          {[['Duration', '4 Weeks'], ['Mode', 'Online / Live'], ['Level', 'Beginner to Advanced']].map(([k, v]) => (
            <div key={k} style={{ background: 'var(--navy-panel)', padding: '28px 24px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '8px' }}>{k}</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--white)' }}>{v}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ background: 'var(--navy-panel)', border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-md)', padding: isMobile ? '40px 28px' : '52px 60px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>Course Fee</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '3.2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '28px', lineHeight: 1 }}>KES 10,000</p>
          <Link to="/enroll">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '14px 40px', background: 'var(--blue)', color: 'var(--white)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'background 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
            >Enroll Now →</motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
