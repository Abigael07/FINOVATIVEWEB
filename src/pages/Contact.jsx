import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../context/MobileContext';
import PageHero from '../components/PageHero';

const WA_NUMBER = '254708022727';

const contacts = [
  { label: 'WhatsApp', value: '+254 708 022 727', href: `https://wa.me/${WA_NUMBER}`, icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C5.58 2 2 5.58 2 10c0 1.49.4 2.88 1.09 4.09L2 18l4.09-1.07A7.96 7.96 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.93 11.07c-.17.47-.97.9-1.35.95-.34.05-.78.07-1.25-.08-.29-.09-.66-.22-1.13-.43-1.98-.86-3.27-2.87-3.37-3-.1-.13-.8-1.07-.8-2.03 0-.97.5-1.44.68-1.64.17-.2.38-.25.5-.25h.36c.12 0 .28-.04.44.34l.62 1.54c.06.14.03.3-.04.43l-.3.44c-.08.11-.16.23-.07.45.1.22.43.73.93 1.18.64.57 1.18.75 1.35.83.17.09.27.07.37-.04l.43-.5c.11-.13.22-.09.37-.05l1.52.71c.18.08.3.12.34.19.05.08.05.44-.12.91z" fill="#25D366"/></svg>
  )},
  { label: 'Email', value: 'info@finovative.co.ke', href: 'mailto:info@finovative.co.ke', icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--blue-bright)" strokeWidth="1.2"/><path d="M2 7l8 5 8-5" stroke="var(--blue-bright)" strokeWidth="1.2" strokeLinecap="round"/></svg>
  )},
  { label: 'Location', value: 'Nairobi, Kenya', href: 'https://maps.google.com/?q=Nairobi,Kenya', icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6z" stroke="var(--blue-bright)" strokeWidth="1.2"/><circle cx="10" cy="8" r="2" stroke="var(--blue-bright)" strokeWidth="1.2"/></svg>
  )},
];

export default function Contact() {
  const isMobile = useMobile();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const text = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{ background: 'var(--navy)' }}>
      <PageHero
        eyebrow="Home / Contact"
        title={<>Get in <em style={{ color: 'var(--blue-bright)', fontStyle: 'italic' }}>Touch</em></>}
        subtitle="Reach out and we'll respond via WhatsApp — fast, direct, no waiting."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=70"
      />

      <section style={{ padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
            gap: isMobile ? '48px' : '80px',
            alignItems: 'start',
          }}>

            {/* Left — contact info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
                <div style={{ width: '28px', height: '1px', background: 'var(--blue-bright)' }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>Contact Info</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : '2.6rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.1, marginBottom: '16px' }}>
                We'd love to hear from you.
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--white-dim)', lineHeight: 1.8, fontFamily: 'var(--font-sans)', fontWeight: 300, marginBottom: '40px' }}>
                Whether you need tax filing, accounting, Excel training, or a new website — we're here to help. Send us a message and we'll get back to you promptly.
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
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '18px 20px',
                      background: 'var(--navy-panel)',
                      border: '1px solid var(--blue-edge)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'border-color 0.3s, background 0.3s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue-bright)'; e.currentTarget.style.background = 'var(--navy-mid)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--blue-edge)'; e.currentTarget.style.background = 'var(--navy-panel)'; }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--blue-glow)', border: '1px solid var(--blue-edge)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'var(--white-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '3px' }}>{c.label}</p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--white)', fontFamily: 'var(--font-sans)' }}>{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'var(--navy-panel)',
                border: '1px solid var(--blue-edge)',
                borderRadius: 'var(--radius-md)',
                padding: isMobile ? '32px 24px' : '48px 44px',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '8px' }}>Send a Message</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-sans)', marginBottom: '32px' }}>We'll reply on WhatsApp.</p>

              <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Your Name', value: name, setter: setName, type: 'text', placeholder: 'John Doe', required: true },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--white-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '7px' }}>{f.label}</label>
                    <input
                      type={f.type}
                      value={f.value}
                      onChange={e => f.setter(e.target.value)}
                      placeholder={f.placeholder}
                      required={f.required}
                      style={{
                        width: '100%', padding: '13px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--blue-edge)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                        outline: 'none', transition: 'border-color 0.3s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
                      onBlur={e => e.target.style.borderColor = 'var(--blue-edge)'}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--white-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '7px' }}>Your Message</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us what you need help with..."
                    rows="5"
                    required
                    style={{
                      width: '100%', padding: '13px 16px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--blue-edge)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                      outline: 'none', resize: 'vertical', transition: 'border-color 0.3s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
                    onBlur={e => e.target.style.borderColor = 'var(--blue-edge)'}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '15px',
                    background: sent ? '#16a34a' : 'var(--blue)',
                    color: 'var(--white)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem', fontWeight: 500,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    transition: 'background 0.3s',
                    marginTop: '4px',
                  }}
                  onMouseEnter={e => { if (!sent) e.currentTarget.style.background = 'var(--blue-bright)'; }}
                  onMouseLeave={e => { if (!sent) e.currentTarget.style.background = 'var(--blue)'; }}
                >
                  {sent ? '✓ Opening WhatsApp...' : 'Send via WhatsApp'}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
