import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const WA = 'https://wa.me/254708022727?text=Hello%20I%20need%20accounting%20services';

const services = [
  { title: 'Online Accounting', desc: 'Cloud-based bookkeeping and financial management accessible from anywhere.' },
  { title: 'Statutory Accounts', desc: 'Preparation and filing of statutory financial statements in full compliance.' },
  { title: 'Bookkeeping', desc: 'Accurate, up-to-date records of all your financial transactions.' },
  { title: 'Tax Filing', desc: 'KRA compliant tax returns for businesses of all sizes.' },
  { title: 'Payroll Management', desc: 'Accurate employee payroll processing including PAYE and statutory deductions.' },
  { title: 'Financial Reporting', desc: 'Monthly, quarterly, and annual reports that give you clear business visibility.' },
];

export default function AccountingService() {
  const isMobile = useMobile();
  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Accounting"
        title={<>Accounting <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Services</em></>}
        subtitle="Professional accounting solutions for SMEs — accuracy, compliance, and peace of mind."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=70"
      />

      <section style={{ padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--blue-bright)' }} />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>What We Offer</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1px', background: 'var(--blue-edge)', border: '1px solid var(--blue-edge)', marginBottom: '60px' }}>
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.7 }}
                style={{ background: 'var(--navy-panel)', padding: isMobile ? '28px 24px' : '36px 40px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', background: 'var(--blue-glow)', border: '1px solid var(--blue-edge)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--blue-bright)', fontFamily: 'var(--font-sans)' }}>{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'var(--white)', marginBottom: '8px' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', lineHeight: 1.7, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA block */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: '32px', alignItems: 'center', background: 'var(--navy-panel)', border: '1px solid var(--blue-edge)', borderRadius: 'var(--radius-md)', padding: isMobile ? '36px 28px' : '48px 52px' }}
          >
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '10px' }}>Ready to get your accounts in order?</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--white-dim)', lineHeight: 1.7, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>Reach out on WhatsApp and we'll discuss the right package for your business.</p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{ padding: '14px 36px', background: 'var(--blue)', color: 'var(--white)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
              >Enroll Now →</motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
