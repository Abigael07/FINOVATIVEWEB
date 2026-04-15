import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../../context/MobileContext';

const WA = 'https://wa.me/254708022727';

const inputBase = {
  padding: '14px 18px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--blue-edge)',
  background: 'rgba(255,255,255,0.04)',
  color: 'var(--white)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.3s',
  width: '100%',
};

export default function ContactSection() {
  const isMobile = useMobile();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    const text = encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
    window.open(`${WA}?text=${text}`, '_blank');
  };

  return (
    <section style={{ padding: isMobile ? '80px 20px' : '100px 60px', background: 'var(--navy-mid)' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>

        <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--blue-bright)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>
          Get in Touch
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : '2.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>
          Contact Us
        </h2>
        <div style={{ width: '32px', height: '1px', background: 'var(--blue-bright)', margin: '0 auto 40px' }} />

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            type="text" name="name" placeholder="Your Name" required
            style={inputBase}
            onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
            onBlur={e => e.target.style.borderColor = 'var(--blue-edge)'}
          />
          <input
            type="email" name="email" placeholder="Your Email" required
            style={inputBase}
            onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
            onBlur={e => e.target.style.borderColor = 'var(--blue-edge)'}
          />
          <textarea
            name="message" placeholder="Your Message" rows="5" required
            style={{ ...inputBase, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
            onBlur={e => e.target.style.borderColor = 'var(--blue-edge)'}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{
              padding: '15px', background: 'var(--blue)', color: 'var(--white)',
              borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-bright)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
          >
            Send via WhatsApp
          </motion.button>
        </form>
      </div>
    </section>
  );
}
