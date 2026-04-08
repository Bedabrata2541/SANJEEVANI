import { motion } from 'motion/react';
import { Brain, Globe, Wifi, HeartHandshake, MapPin, BookOpen, Leaf, Target, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CAPABILITIES = [
  { icon: Brain, title: 'AI Symptom Guidance', color: '#16C784' },
  { icon: Globe, title: '13+ Indian Languages', color: '#3B82F6' },
  { icon: Wifi, title: 'Works on Low Internet', color: '#F59E0B' },
  { icon: HeartHandshake, title: 'Preventive Care Tips', color: '#EC4899' },
];

const PILLARS = [
  {
    icon: MapPin,
    title: 'Rural Accessibility',
    desc: 'Works via SMS & WhatsApp in low-connectivity areas.',
    color: '#16C784',
  },
  {
    icon: BookOpen,
    title: 'Health Literacy',
    desc: 'Easy health info in your native language.',
    color: '#3B82F6',
  },
  {
    icon: Leaf,
    title: 'Preventive Care',
    desc: 'Health tips, seasonal advisories, vaccination reminders.',
    color: '#F59E0B',
  },
];

const LANGUAGES = [
  'English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'मराठी',
  'ગુજરાતી', 'ಕನ್ನಡ', 'മലയാളം', 'ਪੰਜਾਬੀ', 'ଓଡ଼ିଆ', 'অসমীয়া', 'اردو',
];

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #060918 0%, #0A0D1A 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f8fffe 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              background: isDark ? 'rgba(22,199,132,0.15)' : 'rgba(22,199,132,0.1)',
              border: '1px solid rgba(22,199,132,0.3)',
              color: '#16C784',
            }}
          >
            About SANJEEVANI
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700,
              color: isDark ? 'white' : '#0D1F1A',
              marginBottom: '0.8rem',
              lineHeight: 1.2,
            }}
          >
            Healthcare for{' '}
            <span style={{ color: '#16C784' }}>Every Indian</span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: isDark ? '#9CA3AF' : '#6B7280',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            SANJEEVANI bridges the healthcare gap with AI-driven, multilingual support — from metros to the
            remotest villages, ensuring <em style={{ color: '#16C784' }}>no one is left behind.</em>
          </p>
        </motion.div>

        {/* ── Mission + Vision ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <div
            className="flex items-start gap-4 p-5 rounded-2xl"
            style={{
              background: isDark ? 'rgba(22,199,132,0.08)' : 'rgba(22,199,132,0.06)',
              border: '1px solid rgba(22,199,132,0.2)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(22,199,132,0.15)' }}
            >
              <Target size={18} style={{ color: '#16C784' }} />
            </div>
            <div>
              <h4 style={{ fontWeight: 600, color: isDark ? 'white' : '#0D1F1A', marginBottom: '0.3rem' }}>
                Our Mission
              </h4>
              <p style={{ fontSize: '0.82rem', color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1.6 }}>
                Democratize healthcare access for every Indian through affordable, multilingual AI solutions.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-4 p-5 rounded-2xl"
            style={{
              background: isDark ? 'rgba(59,130,246,0.08)' : 'rgba(59,130,246,0.06)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(59,130,246,0.15)' }}
            >
              <Eye size={18} style={{ color: '#3B82F6' }} />
            </div>
            <div>
              <h4 style={{ fontWeight: 600, color: isDark ? 'white' : '#0D1F1A', marginBottom: '0.3rem' }}>
                Our Vision
              </h4>
              <p style={{ fontSize: '0.82rem', color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1.6 }}>
                A healthier India where preventive care is accessible to all 1.4 billion citizens.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Capabilities (2×2) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {CAPABILITIES.map(cap => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:scale-105 transition-transform duration-200"
                style={{
                  background: isDark ? '#0A0D1A' : 'white',
                  border: `1px solid ${cap.color}20`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${cap.color}15` }}
                >
                  <Icon size={20} style={{ color: cap.color }} />
                </div>
                <p
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: isDark ? '#E2E8F0' : '#1F2937',
                    lineHeight: 1.4,
                  }}
                >
                  {cap.title}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* ── Three Pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl hover:shadow-md transition-all duration-300"
                style={{
                  background: isDark ? '#0A0D1A' : 'white',
                  border: `1px solid ${pillar.color}20`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${pillar.color}15` }}
                >
                  <Icon size={20} style={{ color: pillar.color }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: isDark ? 'white' : '#0D1F1A', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: isDark ? '#94A3B8' : '#6B7280', lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Language Chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center"
        >
          <p style={{ fontSize: '0.82rem', color: isDark ? '#64748B' : '#9CA3AF', marginBottom: '0.8rem' }}>
            Supported Languages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {LANGUAGES.map(lang => (
              <span
                key={lang}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: isDark ? 'rgba(22,199,132,0.1)' : 'rgba(22,199,132,0.08)',
                  border: '1px solid rgba(22,199,132,0.25)',
                  color: '#16C784',
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}