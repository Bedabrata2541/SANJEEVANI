import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from "../../assets/a45cc51ed30a10840af366551055f44780c54ca9.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar to 100% over ~2.4s
    const start = performance.now();
    const duration = 2400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        // Brief pause then fade out
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 200);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #060918 0%, #0A0D1A 60%, #060918 100%)' }}
        >
          {/* ── Ambient glow blobs ── */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(22,199,132,0.12) 0%, transparent 65%)', filter: 'blur(40px)' }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(22,199,132,0.07) 0%, transparent 70%)', filter: 'blur(30px)' }}
          />

          {/* ── Dot-grid background ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(22,199,132,0.06) 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* ── Main card ── */}
          <div className="relative flex flex-col items-center gap-6 px-8">

            {/* Logo + brand row */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col items-center gap-4"
            >
              {/* Glowing logo wrapper */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(22,199,132,0.35) 0%, transparent 70%)',
                    filter: 'blur(16px)',
                    transform: 'scale(1.6)',
                  }}
                />
                <motion.img
                  src={logoImage}
                  alt="Sanjeevani"
                  className="relative w-20 h-20 object-contain"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Brand name */}
              <motion.div
                initial={{ opacity: 0, letterSpacing: '0.4em' }}
                animate={{ opacity: 1, letterSpacing: '0.15em' }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #16C784 30%, #0ea868 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.15em',
                }}
              >
                SANJEEVANI
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.88rem',
                  color: '#64748B',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                }}
              >
                Your AI Health Companion
              </motion.p>
            </motion.div>

            {/* ── Animated Heart + ECG ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="180" height="160">
                {/* Heart outline */}
                <motion.path
                  d="M 110 170
                     C  62 148  22 122  22 88
                     C  22 60  44 44   68 44
                     C  86 44 101 55 110 68
                     C 119 55 134 44 152 44
                     C 176 44 198 60 198 88
                     C 198 122 158 148 110 170 Z"
                  stroke="#16C784"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  fill="rgba(22,199,132,0.07)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
                />

                {/* Stethoscope tube up */}
                <motion.path
                  d="M 110 68 C 110 54 112 38 115 26"
                  stroke="#16C784" strokeWidth="3.5" strokeLinecap="round" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                />
                {/* Y left */}
                <motion.path
                  d="M 115 26 C 110 16 102 8 95 4"
                  stroke="#16C784" strokeWidth="3" strokeLinecap="round" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.7 }}
                />
                {/* Y right */}
                <motion.path
                  d="M 115 26 C 120 16 128 8 135 4"
                  stroke="#16C784" strokeWidth="3" strokeLinecap="round" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                />
                {/* Left ear circle */}
                <motion.circle cx="93" cy="3" r="6" stroke="#16C784" strokeWidth="2.5" fill="none"
                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 1.95 }}
                  style={{ transformOrigin: '93px 3px' }}
                />
                {/* Right ear circle */}
                <motion.circle cx="137" cy="3" r="6" stroke="#16C784" strokeWidth="2.5" fill="none"
                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 2.05 }}
                  style={{ transformOrigin: '137px 3px' }}
                />
                {/* Ear bridge */}
                <motion.path d="M 99 3 Q 115 -2 131 3" stroke="#16C784" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.3, delay: 2.1 }}
                />

                {/* Tube inside → chest piece */}
                <motion.path
                  d="M 110 68 C 130 85 152 95 163 106"
                  stroke="#16C784" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.75"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 0.5, delay: 1.55 }}
                />
                {/* Chest piece outer */}
                <motion.circle cx="169" cy="112" r="10" stroke="#16C784" strokeWidth="3" fill="none"
                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 1.85 }}
                  style={{ transformOrigin: '169px 112px' }}
                />
                {/* Chest piece inner dot */}
                <motion.circle cx="169" cy="112" r="3.5" fill="#16C784"
                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 2.0 }}
                  style={{ transformOrigin: '169px 112px' }}
                />
                {/* Chest piece pulse */}
                <motion.circle cx="169" cy="112" r="10" stroke="#16C784" strokeWidth="1.5" fill="none"
                  animate={{ r: [10, 20, 10], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 2.5 }}
                />

                {/* ECG line inside heart */}
                <motion.polyline
                  points="52,138 68,138 77,120 88,156 98,128 106,138 132,138 148,138"
                  stroke="#16C784" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 1.5 }}
                />
              </svg>
            </motion.div>

            {/* ── Loading dots ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2"
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#16C784' }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.22 }}
                />
              ))}
            </motion.div>
          </div>

          {/* ── Progress bar at bottom ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 sm:w-80"
          >
            {/* Track */}
            <div
              className="w-full h-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(22,199,132,0.15)' }}
            >
              {/* Fill */}
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #16C784, #0ea868)',
                  width: `${progress}%`,
                  boxShadow: '0 0 8px rgba(22,199,132,0.6)',
                }}
              />
            </div>
            <p
              className="text-center mt-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', color: '#334155' }}
            >
              Loading… {Math.round(progress)}%
            </p>
          </motion.div>

          {/* ── Version / tagline footer ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-5"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.65rem', color: '#1e293b' }}
          >
            Powered by AI · Built for India
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
