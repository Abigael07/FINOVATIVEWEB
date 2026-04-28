import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const pillars = [
  {
    num: '01', label: 'Financial Expertise',
    text: 'Accounting, tax compliance, and internal controls that keep your books clean and your business protected.',
  },
  {
    num: '02', label: 'Data & Analytics',
    text: 'Advanced Excel, automation, and analytics training that turns raw numbers into actionable insights.',
  },
  {
    num: '03', label: 'Digital Solutions',
    text: 'Modern web platforms that enhance your business visibility, efficiency, and online presence.',
  },
];

const team = [
  { name: 'Our Mission', text: 'To empower businesses and individuals in Kenya with professional financial and digital solutions that deliver measurable results.' },
  { name: 'Our Vision', text: 'To become the most trusted financial consulting and training firm in East Africa, known for integrity and excellence.' },
  { name: 'Our Values', text: 'Accuracy, transparency, and genuine care for every client. We treat your business like our own.' },
];

// const WA = 'https://wa.me/254708022727';

export default function About() {
  const isMobile = useMobile();
  const [active, setActive] = useState(null);

  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / About"
        title={<>Built for businesses that <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>demand more.</em></>}
        subtitle="Finovative Insights is a professional consulting and training firm handling the financial backbone of your business."
        image="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=70"
      />

      {/* Mission / Vision / Values */}
      <section style={{ padding: isMobile ? '80px 20px' : '100px 60px', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--blue-bright)' }} />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>Who We Are</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1px', background: 'var(--blue-edge)', border: '1px solid var(--blue-edge)' }}>
            {team.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                style={{ background: 'var(--navy)', padding: isMobile ? '36px 24px' : '48px 40px' }}
              >
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '16px' }}>{String(i + 1).padStart(2, '0')}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '14px' }}>{t.name}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)', lineHeight: 1.85, fontWeight: 300 }}>{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: isMobile ? '0 20px 80px' : '0 60px 100px', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--blue-bright)' }} />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>Our Pillars</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1px', background: 'var(--blue-edge)', border: '1px solid var(--blue-edge)' }}>
            {pillars.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}
                onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
                style={{
                  background: active === i ? 'var(--navy-panel)' : 'var(--navy)',
                  padding: isMobile ? '36px 24px' : '48px 40px',
                  transition: 'background 0.35s ease', position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: active === i ? 'var(--blue-bright)' : 'transparent', transition: 'background 0.35s' }} />
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: active === i ? 'var(--blue-bright)' : 'var(--white-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '16px', transition: 'color 0.35s' }}>{p.num}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '14px' }}>{p.label}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)', lineHeight: 1.85, fontWeight: 300 }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ borderTop: '1px solid var(--blue-edge)', background: 'var(--navy-panel)', padding: isMobile ? '48px 20px' : '70px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '28px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.6rem' : '2.2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '8px' }}>Ready to get started?</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)' }}>Chat with us on WhatsApp — no forms, no waiting.</p>
          </div>
          <Link to="/contact">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '15px 40px', background: 'var(--blue)', color: 'var(--white)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'background 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
            >Get Started Now</motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
