import { motion } from 'motion/react';
import { MessageCircle, ChevronRight, Shield, Zap, Brain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ─── Heart + Stethoscope SVG Illustration ─── */
function HeartIllustration({ isDark, compact = false }: { isDark: boolean; compact?: boolean }) {
  const GREEN = '#16C784';
  const FILL = isDark ? 'rgba(22,199,132,0.06)' : 'rgba(22,199,132,0.05)';

  return (
    <div
      className="relative mx-auto flex items-center justify-center select-none"
      style={{
        width: '100%',
        maxWidth: compact ? '300px' : '480px',
        paddingTop: compact ? '8px' : '16px',
        paddingBottom: compact ? '8px' : '16px',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 55% 55% at 50% 52%, rgba(22,199,132,0.13) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 55% 55% at 50% 52%, rgba(22,199,132,0.10) 0%, transparent 70%)',
        }}
      />

      {/* ── Floating badges (full mode only) ── */}
      {!compact && (
        <>
          {/* Heart Rate */}
          <motion.div
            animate={{ y: [-6, 4, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-12 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
            style={{
              background: isDark ? 'rgba(8,10,22,0.90)' : 'white',
              border: '1px solid rgba(239,68,68,0.28)',
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.45)' : '0 8px 28px rgba(0,0,0,0.10)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block flex-shrink-0" />
            <div>
              <p style={{ fontSize: '0.6rem', color: isDark ? '#64748B' : '#9CA3AF', lineHeight: 1, fontFamily: 'Poppins,sans-serif' }}>Heart Rate</p>
              <p style={{ fontSize: '0.88rem', fontWeight: 700, color: isDark ? '#F1F5F9' : '#111827', fontFamily: 'Poppins,sans-serif', lineHeight: 1.3 }}>
                72 <span style={{ fontSize: '0.58rem', fontWeight: 400, color: isDark ? '#64748B' : '#9CA3AF' }}>BPM</span>
              </p>
            </div>
          </motion.div>

          {/* AI status */}
          <motion.div
            animate={{ y: [4, -5, 4] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="absolute right-0 top-10 z-20 flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{
              background: isDark ? 'rgba(8,10,22,0.90)' : 'white',
              border: '1px solid rgba(22,199,132,0.30)',
              boxShadow: isDark ? '0 6px 24px rgba(0,0,0,0.45)' : '0 6px 20px rgba(0,0,0,0.08)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#16C784] animate-pulse inline-block" />
            <p style={{ fontSize: '0.72rem', fontWeight: 600, color: '#16C784', fontFamily: 'Poppins,sans-serif' }}>AI Active</p>
          </motion.div>

          {/* Vaccine */}
          <motion.div
            animate={{ y: [-4, 6, -4] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            className="absolute right-1 bottom-8 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
            style={{
              background: isDark ? 'rgba(8,10,22,0.90)' : 'white',
              border: '1px solid rgba(22,199,132,0.25)',
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.45)' : '0 8px 24px rgba(0,0,0,0.09)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(22,199,132,0.12)' }}>
              <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                <path d="M3 13L13 3M10 2L14 6M2 10L6 14M6 6.5L9.5 10" stroke="#16C784" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: '0.6rem', color: isDark ? '#64748B' : '#9CA3AF', lineHeight: 1, fontFamily: 'Poppins,sans-serif' }}>Next Vaccine</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#16C784', fontFamily: 'Poppins,sans-serif', lineHeight: 1.3 }}>Nov 15</p>
            </div>
          </motion.div>
        </>
      )}

      {/* ── MAIN SVG ── */}
      <motion.svg
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{
          maxWidth: compact ? '260px' : '360px',
          filter: isDark
            ? 'drop-shadow(0 0 30px rgba(22,199,132,0.22))'
            : 'drop-shadow(0 4px 24px rgba(22,199,132,0.18))',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* ── HEART SHAPE ── */}
        <motion.path
          d="M 160 320
             C  78 286  26 244  26 190
             C  26 136  62 104 103 104
             C 128 104 150 119 160 137
             C 170 119 192 104 217 104
             C 258 104 294 136 294 190
             C 294 244 242 286 160 320
             Z"
          stroke={GREEN}
          strokeWidth="5"
          strokeLinejoin="round"
          fill={FILL}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />

        {/* ── STETHOSCOPE: single tube exits heart top-center, goes up ── */}
        <motion.path
          d="M 160 137 C 160 115 162 90 166 70"
          stroke={GREEN}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
        />

        {/* Y — left branch */}
        <motion.path
          d="M 166 70 C 160 54 148 40 138 33"
          stroke={GREEN}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 1.45 }}
        />

        {/* Y — right branch */}
        <motion.path
          d="M 166 70 C 172 54 184 41 194 33"
          stroke={GREEN}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 1.55 }}
        />

        {/* Left earpiece */}
        <motion.circle
          cx="136" cy="26" r="9"
          stroke={GREEN} strokeWidth="4" fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 1.80 }}
          style={{ transformOrigin: '136px 26px' }}
        />

        {/* Right earpiece */}
        <motion.circle
          cx="196" cy="26" r="9"
          stroke={GREEN} strokeWidth="4" fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 1.90 }}
          style={{ transformOrigin: '196px 26px' }}
        />

        {/* Bridge arc between earpieces */}
        <motion.path
          d="M 145 26 Q 166 18 187 26"
          stroke={GREEN} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 2.0 }}
        />

        {/* ── Tube inside heart → chest piece ── */}
        <motion.path
          d="M 160 137 C 185 158 218 175 234 192"
          stroke={GREEN}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
        />

        {/* ── CHEST PIECE — outer ring ── */}
        <motion.circle
          cx="240" cy="198" r="15"
          stroke={GREEN} strokeWidth="4" fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 1.6 }}
          style={{ transformOrigin: '240px 198px' }}
        />
        {/* Inner dot */}
        <motion.circle
          cx="240" cy="198" r="5.5"
          fill={GREEN}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 1.75 }}
          style={{ transformOrigin: '240px 198px' }}
        />
        {/* Pulse ring */}
        <motion.circle
          cx="240" cy="198" r="15"
          stroke={GREEN} strokeWidth="2.5" fill="none"
          animate={{ r: [15, 28, 15], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 2.4 }}
        />

        {/* ── ECG HEARTBEAT LINE ── */}
        <motion.polyline
          points="80,272 100,272 114,248 130,296 146,258 158,272 190,272 210,272"
          stroke={GREEN}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.95 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 1.3 }}
        />

        {/* ── Decorative dashed ring ── */}
        <motion.circle
          cx="160" cy="212" r="155"
          stroke={GREEN} strokeWidth="1" strokeDasharray="6 5"
          fill="none" opacity="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>
    </div>
  );
}

/* ─── Main Hero Section ─── */
export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const STATS = [
    { icon: Brain,  value: 'AI',  label: 'Symptom Guidance' },
    { icon: Shield, value: '13+', label: 'Indian Languages' },
    { icon: Zap,    value: '24/7',label: 'AI Support'       },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #060918 0%, #0A0D1A 50%, #060918 100%)'
          : 'linear-gradient(135deg, #f0fff8 0%, #ffffff 50%, #f0fff8 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-24 left-8 w-80 h-80 rounded-full blur-3xl"
          style={{ background: isDark ? 'rgba(22,199,132,0.05)' : 'rgba(22,199,132,0.10)' }}
        />
        <div
          className="absolute bottom-24 right-8 w-96 h-96 rounded-full blur-3xl"
          style={{ background: isDark ? 'rgba(22,199,132,0.04)' : 'rgba(22,199,132,0.07)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle at 1px 1px, rgba(22,199,132,0.035) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(22,199,132,0.065) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Desktop illustration (hidden on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="hidden lg:flex justify-center lg:order-1"
          >
            <HeartIllustration isDark={isDark} />
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="lg:order-2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: isDark ? 'rgba(22,199,132,0.12)' : 'rgba(22,199,132,0.10)',
                border: '1px solid rgba(22,199,132,0.30)',
                color: '#16C784',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#16C784] animate-pulse inline-block" />
              AI-Powered Healthcare Platform
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-0"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: isDark ? '#F1F5F9' : '#0A0D1A',
              }}
            >
              Welcome to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #16C784 30%, #0ea868 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SANJEEVANI
              </span>
            </motion.h1>

            {/* ── MOBILE-ONLY heart illustration (shown between title and description) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="block lg:hidden my-6 flex justify-center"
            >
              <HeartIllustration isDark={isDark} compact />
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-6 mb-8 leading-relaxed"
              style={{ fontSize: '1.05rem', color: isDark ? '#94A3B8' : '#4B5563' }}
            >
              AI-powered healthcare chatbot delivering{' '}
              <span style={{ color: '#16C784', fontWeight: 600 }}>personalized medical guidance</span>,
              {' '}medicine reminders, vaccination tracking, and preventive health awareness —{' '}
              <span style={{ color: '#16C784', fontWeight: 600 }}>accessible anytime, anywhere.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #16C784, #0ea868)',
                  boxShadow: '0 8px 30px rgba(22,199,132,0.38)',
                }}
              >
                <MessageCircle size={18} />
                Try Chatbot
              </button>
              <button
                onClick={() => scrollTo('#about')}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base border-2 border-[#16C784] text-[#16C784] transition-all duration-300 hover:bg-[#16C784] hover:text-white hover:shadow-xl"
              >
                Learn More
                <ChevronRight size={18} />
              </button>
            </motion.div>

            {/* ── 3-column stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="grid grid-cols-3 gap-3 w-full max-w-sm mx-auto lg:mx-0"
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center text-center px-2 py-3 rounded-2xl"
                  style={{
                    background: isDark ? 'rgba(22,199,132,0.06)' : 'rgba(22,199,132,0.06)',
                    border: '1px solid rgba(22,199,132,0.18)',
                  }}
                >
                  <Icon size={18} className="mb-1.5 flex-shrink-0" style={{ color: '#16C784' }} />
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#16C784', lineHeight: 1.2 }}>{value}</div>
                  <div style={{ fontSize: '0.62rem', color: isDark ? '#64748B' : '#6B7280', lineHeight: 1.3, marginTop: '2px' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}