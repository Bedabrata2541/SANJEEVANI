import { Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoImage from "../../assets/a45cc51ed30a10840af366551055f44780c54ca9.png";

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

const FEATURES_LINKS = [
  { label: 'AI Chatbot', href: '#features' },
  { label: 'Medicine Reminder', href: '#features' },
  { label: 'Health Dashboard', href: '#features' },
  { label: 'Vaccination Tracker', href: '#features' },
  { label: 'Hospital Locator', href: '#features' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Disclaimer', href: '#' },
];

const SOCIAL_ICONS = [
  {
    label: 'Twitter / X',
    color: '#1DA1F2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    color: '#0A66C2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    color: '#1877F2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

/* ─── Store button sub-component ─────────────────────── */
function StoreButton({
  icon,
  line1,
  line2,
  isDark,
}: {
  icon: React.ReactNode;
  line1: string;
  line2: string;
  isDark: boolean;
}) {
  return (
    <button
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
      style={{
        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
        border: '1.5px solid rgba(22,199,132,0.3)',
        color: isDark ? 'white' : '#0D1F1A',
      }}
    >
      <span style={{ color: '#16C784', display: 'flex', alignItems: 'center' }}>{icon}</span>
      <div className="text-left">
        <p style={{ fontSize: '0.62rem', color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1 }}>{line1}</p>
        <p style={{ fontSize: '0.78rem', fontWeight: 600, lineHeight: 1.3 }}>{line2}</p>
      </div>
    </button>
  );
}

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #0D1F1A 0%, #071510 100%)',
        fontFamily: 'Poppins, sans-serif',
        borderTop: '1px solid rgba(22,199,132,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="SANJEEVANI" className="w-12 h-12 object-contain" />
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#16C784', letterSpacing: '0.1em' }}>
                SANJEEVANI
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '280px' }}>
              Your AI-powered health companion — trusted healthcare guidance in your language, anytime.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* App Store */}
              <StoreButton
                isDark={isDark}
                line1="Download on the"
                line2="App Store"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                }
              />
              {/* Google Play */}
              <StoreButton
                isDark={isDark}
                line1="Get it on"
                line2="Google Play"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199a1 1 0 0 1 0 1.984l-2.302.001-8.635-8.635 10.937 6.65zM5.864 2.658L16.8 9.008l-2.302 2.301L5.864 2.658z" />
                  </svg>
                }
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL_ICONS.map(item => (
                <button
                  key={item.label}
                  title={item.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: `${item.color}18`,
                    border: `1.5px solid ${item.color}35`,
                    color: item.color,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = `${item.color}35`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = `${item.color}18`;
                  }}
                >
                  {item.svg}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white', marginBottom: '1.2rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{ fontSize: '0.85rem', color: '#9CA3AF' }}
                    className="hover:text-[#16C784] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white', marginBottom: '1.2rem' }}>
              Features
            </h4>
            <ul className="space-y-3">
              {FEATURES_LINKS.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{ fontSize: '0.85rem', color: '#9CA3AF' }}
                    className="hover:text-[#16C784] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white', marginBottom: '1.2rem' }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: '0.85rem', color: '#9CA3AF' }}
                    className="hover:text-[#16C784] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(22,199,132,0.15)' }}
        >
          <p style={{ fontSize: '0.8rem', color: '#6B7280', textAlign: 'center' }}>
            © 2026 SANJEEVANI Health Technologies Pvt. Ltd. Made with{' '}
            <Heart size={12} className="inline" style={{ color: '#16C784' }} /> in India
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#16C784]/20"
            style={{ border: '1px solid rgba(22,199,132,0.3)', color: '#16C784' }}
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
