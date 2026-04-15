import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobile } from '../context/MobileContext';

const links = [
  { label: 'Home',               to: '/' },
  { label: 'Data Analytics',     to: '/data-analytics' },
  { label: 'Excel',              to: '/excel' },
  { label: 'Web Development',    to: '/web-development' },
  { label: 'Tax Filing',         to: '/tax-filing' },
  { label: 'Accounting',         to: '/accounting-service' },
  { label: 'About',              to: '/about' },
  { label: 'Contact',            to: '/contact' },
];

export default function Navbar() {
  const isMobile = useMobile();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 48px',
        background: scrolled || open ? 'rgba(6,13,31,0.97)' : 'transparent',
        borderBottom: scrolled && !open ? '1px solid rgba(46,135,232,0.15)' : 'none',
        backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, border-bottom 0.3s ease',
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem', fontWeight: 600,
          color: 'var(--white)', letterSpacing: '-0.01em',
          userSelect: 'none',
        }}>
          Finovative
        </Link>

        {isMobile ? (
          <button onClick={() => setOpen(p => !p)} aria-label="Toggle menu"
            style={{ background: 'none', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 1100 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '1.5px',
                background: 'var(--white)', borderRadius: '1px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: open
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        ) : (
          <ul style={{ display: 'flex', listStyle: 'none', gap: '32px', alignItems: 'center' }}>
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} style={{
                  fontSize: '0.82rem', fontWeight: 400,
                  color: isActive(to) ? 'var(--blue-bright)' : 'var(--white-med)',
                  transition: 'color 0.2s',
                  letterSpacing: '0.01em',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive(to) ? 'var(--blue-bright)' : 'var(--white-med)'}
                >{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(6,13,31,0.98)',
          backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', gap: '4px',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          padding: '80px 32px 40px',
        }}>
          {links.map(({ label, to }) => (
            <Link key={to} to={to} style={{
              width: '100%', textAlign: 'center',
              padding: '14px 0',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem', fontWeight: 300,
              color: isActive(to) ? 'var(--blue-bright)' : 'var(--white)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}>
              {label}
            </Link>
          ))}
          <a href="https://wa.me/254708022727" target="_blank" rel="noopener noreferrer"
            style={{
              marginTop: '32px',
              padding: '14px 40px',
              background: 'var(--blue)', color: 'var(--white)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
              fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
            WhatsApp Us
          </a>
        </div>
      )}
    </>
  );
}
