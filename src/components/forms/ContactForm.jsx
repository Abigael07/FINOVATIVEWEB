import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useMobile } from '../../context/MobileContext';
import { EMAILJS_CONFIG, BUSINESS_EMAIL } from '../../emailjs.config';

const TOPICS = [
  'Tax Filing & Compliance',
  'Accounting & Bookkeeping',
  'Data Analytics',
  'Excel Training',
  'Web Development',
  'General Enquiry',
];

const inputBase = {
  padding: '13px 16px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--blue-edge)',
  background: 'rgba(255,255,255,0.04)',
  color: 'var(--white)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.88rem',
  outline: 'none',
  transition: 'border-color 0.25s',
  width: '100%',
};

const labelStyle = {
  fontSize: '0.68rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--white-dim)',
  fontFamily: 'var(--font-sans)',
  marginBottom: '6px',
  display: 'block',
};

export default function ContactForm() {
  const isMobile = useMobile();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focused, setFocused] = useState('');

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // 1️⃣  Notify you — all contact details in your inbox
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.NOTIFY_TEMPLATE, {
        form_type:  'Contact',
        from_name:  form.name,
        from_email: form.email,
        phone:      form.phone || '—',
        service:    form.topic || 'General Enquiry',
        message:    form.message,
        reply_to:   form.email,
      });

      // 2️⃣  Auto-reply — instant confirmation to the client
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.REPLY_TEMPLATE, {
        to_name:  form.name,
        to_email: form.email,
        service:  form.topic || 'General Enquiry',
        reply_to: BUSINESS_EMAIL,
      });

      setStatus('success');
      setForm({ name: '', email: '', phone: '', topic: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const focusStyle = (field) =>
    focused === field ? { ...inputBase, borderColor: 'var(--blue-bright)' } : inputBase;

  return (
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
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          fontWeight: 300,
          color: 'var(--white)',
          marginBottom: '6px',
        }}
      >
        Send a Message
      </h3>
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--white-dim)',
          fontFamily: 'var(--font-sans)',
          marginBottom: '32px',
        }}
      >
        We'll reply to your email within 24 hours.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Name + Phone row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              style={focusStyle('name')}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
            />
          </div>
          <div>
            <label style={labelStyle}>Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+254 7XX XXX XXX"
              style={focusStyle('phone')}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            style={focusStyle('email')}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
          />
        </div>

        {/* Topic */}
        <div>
          <label style={labelStyle}>What can we help with?</label>
          <select
            name="topic"
            value={form.topic}
            onChange={handleChange}
            style={{ ...focusStyle('topic'), appearance: 'none', cursor: 'pointer' }}
            onFocus={() => setFocused('topic')}
            onBlur={() => setFocused('')}
          >
            <option value="">Select a topic…</option>
            {TOPICS.map((t) => (
              <option key={t} value={t} style={{ background: '#0b1530' }}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us what you need help with…"
            rows={5}
            required
            style={{ ...focusStyle('message'), resize: 'vertical' }}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
          />
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          whileHover={status === 'idle' ? { scale: 1.02 } : {}}
          whileTap={status === 'idle' ? { scale: 0.97 } : {}}
          style={{
            marginTop: '4px',
            padding: '15px',
            background: status === 'success' ? 'rgba(46,135,232,0.3)' : 'var(--blue)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            border: 'none',
            cursor: status === 'idle' ? 'pointer' : 'default',
            opacity: status === 'sending' ? 0.65 : 1,
            transition: 'background 0.25s, opacity 0.25s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
          }}
          onMouseEnter={(e) => { if (status === 'idle') e.currentTarget.style.background = 'var(--blue-bright)'; }}
          onMouseLeave={(e) => { if (status === 'idle') e.currentTarget.style.background = 'var(--blue)'; }}
        >
          {status === 'sending' && (
            <span style={{
              width: '13px', height: '13px',
              border: '2px solid rgba(255,255,255,0.3)',
              borderTopColor: '#fff',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'fi-spin 0.7s linear infinite',
            }} />
          )}
          {status === 'idle'    && 'Send Message'}
          {status === 'sending' && 'Sending…'}
          {status === 'success' && '✓ Message Sent'}
          {status === 'error'   && 'Retry — Send Again'}
        </motion.button>

        {/* Status banners */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                padding: '13px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(46,135,232,0.1)',
                border: '1px solid var(--blue-bright)',
                color: 'var(--blue-bright)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Thank you! We'll get back to you within 24 hours.
              <br />
              <span style={{ opacity: 0.7 }}>A confirmation has been sent to your email.</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                padding: '13px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(220,53,69,0.08)',
                border: '1px solid rgba(220,53,69,0.4)',
                color: '#f88',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                textAlign: 'center',
              }}
            >
              Something went wrong. Email us directly at{' '}
              <a href={`mailto:${BUSINESS_EMAIL}`} style={{ color: 'var(--blue-bright)' }}>
                {BUSINESS_EMAIL}
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`@keyframes fi-spin { to { transform: rotate(360deg); } }`}</style>
      </form>
    </motion.div>
  );
}