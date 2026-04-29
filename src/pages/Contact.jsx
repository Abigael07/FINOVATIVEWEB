import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';
import ContactForm from '../components/forms/ContactForm';

const WA_NUMBER = '254708022727';

const contacts = [
  {
    label: 'WhatsApp',
    value: '+254 708 022 727',
    href: `https://wa.me/${WA_NUMBER}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10c0 1.49.4 2.88 1.09 4.09L2 18l4.09-1.07A7.96 7.96 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.93 11.07c-.17.47-.97.9-1.35.95-.34.05-.78.07-1.25-.08-.29-.09-.66-.22-1.13-.43-1.98-.86-3.27-2.87-3.37-3-.1-.13-.8-1.07-.8-2.03 0-.97.5-1.44.68-1.64.17-.2.38-.25.5-.25h.36c.12 0 .28-.04.44.34l.62 1.54c.06.14.03.3-.04.43l-.3.44c-.08.11-.16.23-.07.45.1.22.43.73.93 1.18.64.57 1.18.75 1.35.83.17.09.27.07.37-.04l.43-.5c.11-.13.22-.09.37-.05l1.52.71c.18.08.3.12.34.19.05.08.05.44-.12.91z" fill="#25D366" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@finovative.co.ke',
    href: 'mailto:info@finovative.co.ke',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--blue-bright)" strokeWidth="1.2" />
        <path d="M2 7l8 5 8-5" stroke="var(--blue-bright)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: 'https://maps.google.com/?q=Nairobi,Kenya',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6z" stroke="var(--blue-bright)" strokeWidth="1.2" />
        <circle cx="10" cy="8" r="2" stroke="var(--blue-bright)" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const isMobile = useMobile();

  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Contact"
        title={<>Get in <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Touch</em></>}
        subtitle="Fill in the form and we'll respond within 24 hours — or reach us directly on WhatsApp."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=70"
      />

      <section style={{ padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
              gap: isMobile ? '48px' : '80px',
              alignItems: 'start',
            }}
          >
            {/* ── Left: contact info ─────────────────────────────────────── */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
                <div style={{ width: '28px', height: '1px', background: 'var(--blue-bright)' }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
                  Contact Info
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '2rem' : '2.6rem',
                  fontWeight: 300,
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  marginBottom: '16px',
                }}
              >
                We'd love to hear from you.
              </h2>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--white-dim)',
                  lineHeight: 1.8,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  marginBottom: '40px',
                }}
              >
                Whether you need tax filing, accounting, Excel training, or a new website —
                we're here to help. Send us a message and we'll get back to you promptly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contacts.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 20px',
                      background: 'var(--navy-panel)',
                      border: '1px solid var(--blue-edge)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'border-color 0.3s, background 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--blue-bright)';
                      e.currentTarget.style.background = 'var(--navy-mid)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--blue-edge)';
                      e.currentTarget.style.background = 'var(--navy-panel)';
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--blue-glow)',
                        border: '1px solid var(--blue-edge)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'var(--white-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '3px' }}>
                        {c.label}
                      </p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--white)', fontFamily: 'var(--font-sans)' }}>
                        {c.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── Right: EmailJS contact form ─────────────────────────────── */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}