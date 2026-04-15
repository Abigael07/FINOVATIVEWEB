import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const WA = 'https://wa.me/254708022727?text=Hello%20I%20want%20to%20enroll%20in%20the%20Data%20Analytics%20course';

const learn = ['Data collection and cleaning', 'Data analysis using Excel', 'Introduction to SQL', 'Data visualization techniques', 'Building dashboards and reports', 'Basic statistics for data analysis'];
const tools = ['Microsoft Excel', 'Power BI', 'SQL Databases'];

export default function DataAnalytics() {
  const isMobile = useMobile();
  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Data Analytics"
        title={<>Data Analytics <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Course</em></>}
        subtitle="Turning insights into informed business decisions over 6 focused weeks."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=70"
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          {[
            { title: 'What You Will Learn', items: learn },
            { title: 'Tools You Will Use', items: tools },
          ].map((sec, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '20px' }}>{sec.title}</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sec.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--white-med)', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue-bright)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Course details */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--blue-edge)', border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '48px' }}
        >
          {[['Duration', '6 Weeks'], ['Mode', 'Online Only'], ['Level', 'Beginner to Intermediate']].map(([k, v]) => (
            <div key={k} style={{ background: 'var(--navy-panel)', padding: '28px 24px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '8px' }}>{k}</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--white)' }}>{v}</p>
            </div>
          ))}
        </motion.div>

        {/* Pricing */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ background: 'var(--navy-panel)', border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-md)', padding: isMobile ? '40px 28px' : '52px 60px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>Course Fee</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '3.2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '28px', lineHeight: 1 }}>KES 8,000</p>
          <a href={WA} target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '14px 40px', background: 'var(--blue)', color: 'var(--white)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'background 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
            >Enroll Now →</motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
