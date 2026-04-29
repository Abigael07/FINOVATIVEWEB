import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // ← reads ?type= from URL
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useMobile } from '../../context/MobileContext';
import { EMAILJS_CONFIG, BUSINESS_EMAIL } from '../../emailjs.config';

const FILING_TYPES = [
  'Individual Income Tax Return',
  'Business / Corporate Tax Return',
  'VAT Filing',
  'PAYE Returns',
  'Nil Returns',
  'Tax Compliance Certificate',
  'Amended Return',
];

const TAX_YEARS = ['2024', '2023', '2022', '2021', 'Multiple Years'];

// ── Shared styles ────────────────────────────────────────────────────────────
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

// ── Component ────────────────────────────────────────────────────────────────
export default function TaxFilingForm() {
  const isMobile = useMobile();
  const [searchParams] = useSearchParams();

  // Pre-fill filing type when arriving from a pricing card (/file-now?type=...)
  const preselectedType = searchParams.get('type') || '';

  const [form, setForm] = useState({
    fullName: '',
    kraPin: '',
    email: '',
    phone: '',
    filingType: preselectedType,
    taxYear: '2024',
    notes: '',
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

    try {
      // 1️⃣  Notify YOU — full tax filing details to your inbox
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.NOTIFY_TEMPLATE, {
        form_type:  'Tax Filing',
        from_name:  form.fullName,
        from_email: form.email,
        phone:      form.phone,
        service:    form.filingType,
        kra_pin:    form.kraPin || '—',
        tax_year:   form.taxYear,
        message:    form.notes || '—',
        reply_to:   form.email,
      });

      // 2️⃣  Auto-reply to CLIENT — acknowledges their tax request
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.REPLY_TEMPLATE, {
        to_name:  form.fullName,
        to_email: form.email,
        service:  `${form.filingType} (${form.taxYear})`,
        reply_to: BUSINESS_EMAIL,
      });

      setStatus('success');
      setForm({ fullName: '', kraPin: '', email: '', phone: '', filingType: '', taxYear: '2024', notes: '' });
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
          Tax Services
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '2.2rem' : '2.8rem',
            fontWeight: 300,
            color: 'var(--white)',
            lineHeight: 1.15,
            marginBottom: '8px',
          }}
        >
          Tax Filing{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--blue-bright)' }}>Request</em>
        </h2>
        <div
          style={{
            width: '28px',
            height: '1px',
            background: 'var(--blue-bright)',
            marginBottom: '32px',
          }}
        />

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Name + KRA PIN row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full legal name"
                required
                style={focusStyle('fullName')}
                onFocus={() => setFocused('fullName')}
                onBlur={() => setFocused('')}
              />
            </div>
            <div>
              <label style={labelStyle}>KRA PIN</label>
              <input
                type="text"
                name="kraPin"
                value={form.kraPin}
                onChange={handleChange}
                placeholder="A000000000X"
                style={focusStyle('kraPin')}
                onFocus={() => setFocused('kraPin')}
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

          {/* Filing type */}
          <div>
            <label style={labelStyle}>Filing Type</label>
            <select
              name="filingType"
              value={form.filingType}
              onChange={handleChange}
              required
              style={{ ...focusStyle('filingType'), appearance: 'none', cursor: 'pointer' }}
              onFocus={() => setFocused('filingType')}
              onBlur={() => setFocused('')}
            >
              <option value="">Select filing type…</option>
              {FILING_TYPES.map((t) => (
                <option key={t} value={t} style={{ background: '#0b1530' }}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Tax year */}
          <div>
            <label style={labelStyle}>Tax Year</label>
            <select
              name="taxYear"
              value={form.taxYear}
              onChange={handleChange}
              required
              style={{ ...focusStyle('taxYear'), appearance: 'none', cursor: 'pointer' }}
              onFocus={() => setFocused('taxYear')}
              onBlur={() => setFocused('')}
            >
              {TAX_YEARS.map((y) => (
                <option key={y} value={y} style={{ background: '#0b1530' }}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label style={labelStyle}>Additional Notes (optional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any specific concerns, deadlines, or documents you have ready…"
              rows={3}
              style={{ ...focusStyle('notes'), resize: 'vertical' }}
              onFocus={() => setFocused('notes')}
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
            {status === 'idle'    && 'Submit Tax Filing Request'}
            {status === 'sending' && 'Sending…'}
            {status === 'success' && '✓ Request Received'}
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
                Request received! Our tax specialist will contact you within 24 hours.
                <br />
                <span style={{ opacity: 0.7 }}>A confirmation has been sent to your email.</span>
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
                Something went wrong. Please try again or email us at{' '}
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
            All information is handled with strict confidentiality under Kenya Revenue
            Authority guidelines. Ensure your KRA PIN is accurate for faster processing.
          </p>
        </form>
      </div>
    </section>
  );
}