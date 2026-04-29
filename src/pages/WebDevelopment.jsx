import React from 'react';
import { Link } from 'react-router-dom'; // ← added
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const services = [
  { title: 'Frontend Development', desc: 'Clean, responsive, modern interfaces.',      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=60' },
  { title: 'Backend Development',  desc: 'Secure APIs and scalable server systems.',    img: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&q=60' },
  { title: 'Full Stack Solutions', desc: 'Complete build from database to UI.',          img: 'https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&q=60' },
];

const projects = [
  { title: 'E-Commerce Platform', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=60' },
  { title: 'Portfolio Website',   img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=60' },
  { title: 'Business Website',    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60' },
];

export default function WebDevelopment() {
  const isMobile = useMobile();

  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Web Development"
        title={<>Web Development <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Services</em></>}
        subtitle="Modern, scalable, and reliable web applications built for businesses."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=70"
      />

      {/* Services */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '40px' }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--blue-edge)',
            border: '1px solid var(--blue-edge)',
          }}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                style={{ background: 'var(--navy-panel)', overflow: 'hidden' }}
              >
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: isMobile ? '0 20px 60px' : '0 60px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '40px' }}>
            Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                style={{ border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
              >
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '170px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '16px 20px', background: 'var(--navy-panel)' }}>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 400, color: 'var(--white)' }}>{p.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Contact → /contact */}
      <section style={{
        padding: isMobile ? '60px 20px' : '80px 60px',
        background: 'var(--navy-panel)',
        borderTop: '1px solid var(--blue-edge)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : '2.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '14px' }}>
            Start a Project
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', marginBottom: '32px', lineHeight: 1.7, fontFamily: 'var(--font-sans)' }}>
            Tell us what you want to build and we will help you bring it to life.
          </p>

          {/* ── Contact → /contact ── */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '14px 40px',
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
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}