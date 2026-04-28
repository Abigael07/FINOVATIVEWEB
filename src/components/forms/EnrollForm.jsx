import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useMobile } from '../../context/MobileContext';
import { EMAILJS_CONFIG, BUSINESS_EMAIL } from '../../emailjs.config';

// ── Services list ─────────────────────────────────────────────────────────────
const SERVICES = [
  'Tax Filing & Compliance',
  'Accounting & Bookkeeping',
  'Data Analytics',
  'Excel Automation',
  'Web Development',
  'Financial Consulting',
];

// ── Shared styles ─────────────────────────────────────────────────────────────
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
  marginBottom: '5px',
  display: 'block',
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function EnrollForm() {
  const isMobile = useMobile();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState('');

  // Initialise EmailJS once
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const fullName = `${form.firstName} ${form.lastName}`;

    try {
      // 1️⃣  Notify YOU — email lands in your inbox with all form details
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.NOTIFY_TEMPLATE, {
        form_type:  'Enroll Now',
        from_name:  fullName,
        from_email: form.email,
        phone:      form.phone,
        service:    form.service,
        message:    form.message || '—',
        reply_to:   form.email,
      });

      // 2️⃣  Auto-reply to CLIENT — confirms their submission instantly
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.REPLY_TEMPLATE, {
        to_name:  form.firstName,
        to_email: form.email,
        service:  form.service,
        reply_to: BUSINESS_EMAIL,
      });

      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const focusStyle = (field) =>
    focused === field
      ? { ...inputBase, borderColor: 'var(--blue-bright)' }
      : inputBase;

  return (
    <section
      style={{
        padding: isMobile ? '80px 20px' : '100px 60px',
        background: 'var(--navy-mid)',
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>

        {/* Header */}
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: 'var(--blue-bright)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            marginBottom: '12px',
          }}
        >
          Get Started
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '2.2rem' : '2.8rem',
            fontWeight: 300,
            color: 'var(--white)',
            marginBottom: '8px',
          }}
        >
          Enroll Now
        </h2>
        <div
          style={{
            width: '28px',
            height: '1px',
            background: 'var(--blue-bright)',
            marginBottom: '32px',
          }}
        />

        {/* Tag */}
        <span
          style={{
            display: 'inline-block',
            padding: '4px 10px',
            borderRadius: '3px',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: 'rgba(46,135,232,0.12)',
            color: 'var(--blue-bright)',
            marginBottom: '24px',
          }}
        >
          Free Consultation Included
        </span>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Name row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                style={focusStyle('firstName')}
                onFocus={() => setFocused('firstName')}
                onBlur={() => setFocused('')}
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                style={focusStyle('lastName')}
                onFocus={() => setFocused('lastName')}
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

          {/* Phone */}
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+254 7XX XXX XXX"
              required
              style={focusStyle('phone')}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
            />
          </div>

          {/* Service */}
          <div>
            <label style={labelStyle}>Service Interested In</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              style={{
                ...focusStyle('service'),
                appearance: 'none',
                cursor: 'pointer',
              }}
              onFocus={() => setFocused('service')}
              onBlur={() => setFocused('')}
            >
              <option value="">Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s} value={s} style={{ background: '#0b1530' }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Tell us more (optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your goals or questions…"
              rows={3}
              style={{ ...focusStyle('message'), resize: 'vertical' }}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused('')}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            whileHover={status === 'idle' ? { scale: 1.02 } : {}}
            whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            style={{
              marginTop: '4px',
              padding: '15px',
              background: status === 'success' ? 'rgba(46,135,232,0.3)' : 'var(--blue)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: status === 'idle' ? 'pointer' : 'default',
              transition: 'background 0.25s, opacity 0.25s',
              opacity: status === 'sending' ? 0.6 : 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
            onMouseEnter={(e) => {
              if (status === 'idle') e.currentTarget.style.background = 'var(--blue-bright)';
            }}
            onMouseLeave={(e) => {
              if (status === 'idle') e.currentTarget.style.background = 'var(--blue)';
            }}
          >
            {status === 'sending' && (
              <span style={{
                width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff', borderRadius: '50%',
                display: 'inline-block', animation: 'fi-spin 0.7s linear infinite',
              }} />
            )}
            {status === 'idle'    && 'Enroll & Get Contacted'}
            {status === 'sending' && 'Sending…'}
            {status === 'success' && '✓ Submitted'}
            {status === 'error'   && 'Retry — Send Again'}
          </motion.button>

          {/* Status messages */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                key="success"
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
                Thank you! We&apos;ll be in touch within 24 hours.
                <br />
                <span style={{ opacity: 0.7 }}>A confirmation email is on its way to you.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                key="error"
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
                Something went wrong. Please try again or email us directly at{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} style={{ color: 'var(--blue-bright)' }}>
                  {BUSINESS_EMAIL}
                </a>.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Spinner keyframe */}
          <style>{`@keyframes fi-spin { to { transform: rotate(360deg); } }`}</style>

          {/* Fine print */}
          <p
            style={{
              fontSize: '0.72rem',
              color: 'var(--white-dim)',
              lineHeight: 1.7,
              padding: '14px 16px',
              border: '1px solid var(--blue-edge)',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(46,135,232,0.04)',
            }}
          >
            By enrolling, our team will reach out via email within 24 hours to schedule
            your free consultation. Your information is kept strictly confidential.
          </p>
        </form>
      </div>
    </section>
  );
}