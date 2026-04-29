import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const plans = [
  { title: 'Freelancing?', price: 'KES 6,000', unit: 'per return', desc: 'File your freelancer income tax return with accuracy and full KRA compliance.', badge: 'Popular', wa: 'https://wa.me/254708022727?text=Hello%20I%20want%20to%20file%20freelancer%20tax', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=60' },
  { title: 'Employee?', price: 'KES 4,500', unit: 'per return', desc: 'File your employee tax return — PAYE, reliefs, and potential refunds handled.', wa: 'https://wa.me/254708022727?text=Hello%20I%20want%20to%20file%20employee%20tax', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=60' },
  { title: 'No Income?', price: 'KES 1,100', unit: 'per return', desc: 'Stay KRA-compliant with a NIL return filed quickly and correctly.', badge: 'Most Affordable', wa: 'https://wa.me/254708022727?text=Hello%20I%20want%20to%20file%20NIL%20return', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=60' },
  { title: 'Tax Compliance Certificate', price: 'KES 1,000', unit: 'per certificate', desc: 'Apply for your Tax Compliance Certificate quickly and without the hassle.', wa: 'https://wa.me/254708022727?text=Hello%20I%20want%20a%20tax%20compliance%20certificate', img: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=500&q=60' },
  { title: 'Corporate Tax Filing', price: 'KES 15,000', unit: 'per return', desc: 'Comprehensive corporate tax filing — income tax, WHT, and more.', wa: 'https://wa.me/254708022727?text=Hello%20I%20want%20to%20file%20corporate%20tax', img: 'https://images.unsplash.com/photo-1598432439250-0330f9130e14?w=500&q=60' },
];
const trust = [
  { icon: '✓', title: 'KRA Compliant', desc: 'All returns filed in full compliance with KRA regulations.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most returns completed within 24 hours of submission.' },
  { icon: '🔒', title: 'Secure & Private', desc: 'Your financial data is handled with full confidentiality.' },
  { icon: '💬', title: 'WhatsApp Support', desc: 'Reach us anytime on WhatsApp for updates and queries.' },
];

export default function TaxFiling() {
  const isMobile = useMobile();
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Tax Filing"
        title={<>Finovative <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Tax Services</em></>}
        subtitle="Accurate, timely KRA tax filings for individuals and businesses across Kenya."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=70"
      />

      <section style={{ padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {plans.map((plan, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.7 }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{
                  background: 'var(--navy-panel)', border: '1px solid var(--blue-edge)',
                  borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative',
                  transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hovered === i ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {plan.badge && (
                  <span style={{ position: 'absolute', top: '14px', right: '14px', background: 'var(--gold)', color: '#0a0e1a', padding: '4px 10px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 600, zIndex: 1, fontFamily: 'var(--font-sans)' }}>
                    {plan.badge}
                  </span>
                )}
                <img src={plan.img} alt={plan.title} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', opacity: 0.7 }} />
                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 500, color: 'var(--white)', marginBottom: '10px' }}>{plan.title}</h3>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--blue-bright)', marginBottom: '4px', lineHeight: 1 }}>{plan.price}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--white-dim)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>/ {plan.unit}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>{plan.desc}</p>
                  <Link to="/returns">
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      style={{ padding: '10px 28px', background: 'var(--blue)', color: 'var(--white)', borderRadius: '24px', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 500, transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
                    >File Now →</motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          
          
        </div>
      </section>
    </div>
  );
}
