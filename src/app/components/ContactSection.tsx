import { motion } from 'motion/react';
import { Mail, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'support@sanjeevani.health',
    sub: 'We reply within 24 hours',
    color: '#16C784',
  },
  {
    icon: Clock,
    label: 'AI Chatbot',
    value: 'Available 24/7',
    sub: 'Instant responses, any time',
    color: '#EC4899',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'Twitter / X',
    handle: '@SanjeevaniAI',
    color: '#1DA1F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'SANJEEVANI Health',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0A0D1A 0%, #060918 100%)'
          : 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              background: isDark ? 'rgba(22,199,132,0.12)' : 'rgba(22,199,132,0.1)',
              border: '1px solid rgba(22,199,132,0.3)',
              color: '#16C784',
            }}
          >
            Contact Us
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: isDark ? 'white' : '#0D1F1A',
              marginBottom: '1rem',
            }}
          >
            We're Here to{' '}
            <span style={{ color: '#16C784' }}>Help You</span>
          </h2>
          <p style={{ color: isDark ? '#94A3B8' : '#6B7280', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
            Have a question or feedback? Our team is ready to assist you in your preferred language.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTACT_INFO.map(info => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="p-5 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  style={{
                    background: isDark ? '#0A0D1A' : 'white',
                    border: `1px solid ${info.color}20`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${info.color}15` }}
                  >
                    <Icon size={18} style={{ color: info.color }} />
                  </div>
                  <p style={{ fontSize: '0.75rem', color: isDark ? '#6B7280' : '#9CA3AF', marginBottom: '0.2rem' }}>
                    {info.label}
                  </p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: isDark ? '#F1F5F9' : '#0A0D1A' }}>
                    {info.value}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: isDark ? '#94A3B8' : '#6B7280', marginTop: '0.2rem' }}>
                    {info.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: isDark ? '#0A0D1A' : 'white',
              border: '1px solid rgba(22,199,132,0.15)',
            }}
          >
            <h4 style={{ fontWeight: 600, color: isDark ? '#F1F5F9' : '#0A0D1A', marginBottom: '1rem' }}>
              Connect with Us
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(social => (
                <button
                  key={social.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200"
                  style={{
                    background: isDark ? `${social.color}12` : `${social.color}08`,
                    border: `1.5px solid ${social.color}30`,
                    color: social.color,
                  }}
                >
                  {social.icon}
                  <div className="text-left">
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: social.color }}>{social.name}</p>
                    <p style={{ fontSize: '0.7rem', color: isDark ? '#64748B' : '#6B7280' }}>{social.handle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Support note */}
          <div
            className="p-5 rounded-2xl"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(22,199,132,0.07), rgba(22,199,132,0.03))'
                : 'linear-gradient(135deg, rgba(22,199,132,0.06), rgba(22,199,132,0.03))',
              border: '1px solid rgba(22,199,132,0.2)',
            }}
          >
            <p style={{ fontSize: '0.875rem', color: isDark ? '#94A3B8' : '#6B7280', lineHeight: 1.7 }}>
              <span style={{ color: '#16C784', fontWeight: 600 }}>Need urgent help?</span>{' '}
              Our AI chatbot is available 24/7 and can assist you in any Indian language. For medical emergencies, please call{' '}
              <span style={{ color: '#16C784', fontWeight: 600 }}>112</span> immediately.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}