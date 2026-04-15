import React from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../context/MobileContext';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
  FaSnapchatGhost,
  FaPinterestP,
} from 'react-icons/fa';

/* ── Navigation Links ───────────────────────── */
const navLinks = [
  { label: 'Home',            to: '/' },
  { label: 'Data Analytics',  to: '/data-analytics' },
  { label: 'Excel',           to: '/excel' },
  { label: 'Web Development', to: '/web-development' },
  { label: 'Tax Filing',      to: '/tax-filing' },
  { label: 'Accounting',      to: '/accounting-service' },
  { label: 'About',           to: '/about' },
  { label: 'Contact',         to: '/contact' },
];

/* ── Social Links ───────────────────────── */
const socials = [
  { label: 'Facebook',   href: 'https://facebook.com',         color: '#1877F2' },
  { label: 'Instagram',  href: 'https://instagram.com',        color: '#E1306C' },
  { label: 'WhatsApp',   href: 'https://wa.me/254708022727',   color: '#25D366' },
  { label: 'Twitter',    href: 'https://twitter.com',          color: '#1DA1F2' },
  { label: 'LinkedIn',   href: 'https://linkedin.com',         color: '#0A66C2' },
  { label: 'YouTube',    href: 'https://youtube.com',          color: '#FF0000' },
  { label: 'TikTok',     href: 'https://tiktok.com',           color: '#000000' },
  { label: 'Telegram',   href: 'https://t.me/',                color: '#229ED9' },
  { label: 'Snapchat',   href: 'https://snapchat.com',         color: '#FFFC00' },
  { label: 'Pinterest',  href: 'https://pinterest.com',        color: '#E60023' },
];

/* ── Icon Map ───────────────────────── */
const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  WhatsApp: FaWhatsapp,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
  Telegram: FaTelegramPlane,
  Snapchat: FaSnapchatGhost,
  Pinterest: FaPinterestP,
};

/* ── Component ───────────────────────── */
export default function Footer() {
  const isMobile = useMobile();

  return (
    <footer style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--blue-edge)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '48px 20px 24px' : '64px 60px 28px'
      }}>

        {/* ── Top Section ───────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '40px' : '60px',
          paddingBottom: '40px',
          borderBottom: '1px solid var(--blue-edge)',
        }}>

          {/* Brand */}
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 300,
              color: 'var(--white)',
              marginBottom: '12px'
            }}>
              Finovative Insights
            </p>

            <div style={{
              width: '28px',
              height: '1px',
              background: 'var(--blue-bright)',
              marginBottom: '16px'
            }} />

            <p style={{
              fontSize: '0.8rem',
              color: 'var(--white-dim)',
              lineHeight: 1.7,
              maxWidth: '240px'
            }}>
              Professional accounting, analytics, Excel, and web development services for businesses across Kenya.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{
              fontSize: '0.62rem',
              letterSpacing: '0.3em',
              color: 'var(--blue-bright)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
              marginBottom: '20px'
            }}>
              Services
            </p>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--white-dim)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--white-dim)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontSize: '0.62rem',
              letterSpacing: '0.3em',
              color: 'var(--blue-bright)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
              marginBottom: '20px'
            }}>
              Connect
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map(({ label, href, color }) => {
                const Icon = iconMap[label];

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.8rem',
                      color: 'var(--white-dim)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--white)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--white-dim)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {/* Icon */}
                    <span style={{
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: color,
                      flexShrink: 0,
                    }}>
                      {Icon && <Icon size={14} />}
                    </span>

                    {label}
                  </a>
                );
              })}

              {/* Phone */}
              <a
                href="tel:+254708022727"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--white-dim)',
                  marginTop: '8px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
              >
                
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ───────────────────────── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '24px'
        }}>
          <p style={{
            fontSize: '0.65rem',
            color: 'var(--white-dim)',
            opacity: 0.5
          }}>
            © {new Date().getFullYear()} Finovative Insights. 
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Accounting', 'Analytics', 'Excel', 'Web Dev', 'Tax'].map(s => (
              <span
                key={s}
                style={{
                  fontSize: '0.6rem',
                  padding: '3px 8px',
                  border: '1px solid var(--blue-edge)',
                  color: 'var(--white-dim)',
                  borderRadius: '2px',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}