import { useState } from 'react';
import { Moon, Sun, Download, ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoImage from "../../assets/a45cc51ed30a10840af366551055f44780c54ca9.png";
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी (Hindi)' },
  { code: 'bn', label: 'বাংলা (Bengali)' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'te', label: 'తెలుగు (Telugu)' },
  { code: 'mr', label: 'मराठी (Marathi)' },
  { code: 'gu', label: 'ગુજરાતી (Gujarati)' },
  { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
  { code: 'ml', label: 'മലയാളം (Malayalam)' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)' },
  { code: 'or', label: 'ଓଡ଼ିଆ (Odia)' },
  { code: 'as', label: 'অসমীয়া (Assamese)' },
  { code: 'ur', label: 'اردو (Urdu)' },
];

const NAV_ITEMS = [
  { label: 'Home',    href: '#home'    },
  { label: 'About',   href: '#about'   },
  { label: 'Features',href: '#features'},
  { label: 'Contact', href: '#contact' },
];

/* ── Reusable Globe SVG ── */
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen]   = useState(false);
  const [selectedLang, setSelectedLang]       = useState(LANGUAGES[0]);
  const [mobileOpen, setMobileOpen]           = useState(false);

  const isDark = theme === 'dark';

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const selectLang = (lang: typeof LANGUAGES[0]) => {
    setSelectedLang(lang);
    setDesktopLangOpen(false);
    setMobileLangOpen(false);
  };

  /* Shared dropdown list */
  const LangDropdown = ({ align = 'right' }: { align?: 'right' | 'left' }) => (
    <div
      className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-12 w-56 rounded-xl shadow-xl z-50 border py-2 max-h-72 overflow-y-auto`}
      style={{
        background: isDark ? '#0A0D1A' : 'white',
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f3f4f6',
        boxShadow: isDark ? '0 20px 60px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.12)',
      }}
    >
      {LANGUAGES.map(lang => (
        <button
          key={lang.code}
          onClick={() => selectLang(lang)}
          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
            selectedLang.code === lang.code
              ? 'text-[#16C784] bg-[#16C784]/10'
              : isDark
              ? 'text-slate-400 hover:bg-[#16C784]/10 hover:text-[#16C784]'
              : 'text-gray-700 hover:bg-green-50 hover:text-[#16C784]'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );

  return (
    <nav
      style={{ fontFamily: 'Poppins, sans-serif' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-[#060918]/95 backdrop-blur-md border-b border-[#16C784]/15'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('#home')}>
            <img src={logoImage} alt="Sanjeevani Logo" className="h-10 w-10 object-contain" />
            <span
              className="text-[#16C784] tracking-wider hidden sm:block"
              style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}
            >
              SANJEEVANI
            </span>
          </div>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium hover:text-[#16C784] ${
                  isDark ? 'text-slate-400 hover:bg-[#16C784]/10' : 'text-gray-600 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-1.5">

            {/* ── MOBILE-ONLY Language Selector (visible < md) ── */}
            <div className="relative md:hidden">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className={`flex items-center gap-1 px-2.5 py-2 rounded-full text-sm transition-all duration-200 ${
                  isDark
                    ? 'text-slate-400 hover:bg-[#16C784]/10 hover:text-[#16C784]'
                    : 'text-gray-600 hover:bg-green-50 hover:text-[#16C784]'
                }`}
                title="Select Language"
              >
                <GlobeIcon />
                <ChevronDown size={12} className={`transition-transform duration-200 ${mobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileLangOpen && <LangDropdown align="left" />}
            </div>

            {/* ── DESKTOP Language Selector (visible ≥ md) ── */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setDesktopLangOpen(!desktopLangOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition-all duration-200 ${
                  isDark
                    ? 'text-slate-400 hover:bg-[#16C784]/10 hover:text-[#16C784]'
                    : 'text-gray-600 hover:bg-green-50 hover:text-[#16C784]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <GlobeIcon />
                <span className="hidden lg:inline text-xs">{selectedLang.label.split(' ')[0]}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${desktopLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {desktopLangOpen && <LangDropdown align="right" />}
            </div>

            {/* ── Theme Toggle (always visible) ── */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDark
                  ? 'text-yellow-400 hover:bg-yellow-400/10'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* ── Download App (desktop only) ── */}
            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #16C784, #0ea868)',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 4px 15px rgba(22,199,132,0.4)',
              }}
            >
              <Download size={15} />
              Download App
            </button>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isDark ? 'text-slate-400 hover:bg-[#16C784]/10' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t px-4 py-6 ${
            isDark ? 'bg-[#060918] border-white/8' : 'bg-white border-gray-100'
          }`}
        >
          {/* Nav Links — centred */}
          <div className="flex flex-col items-center gap-1 mb-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`w-full max-w-xs text-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-400 hover:bg-[#16C784]/10 hover:text-[#16C784]'
                    : 'text-gray-700 hover:bg-green-50 hover:text-[#16C784]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Download App — centred */}
          <div className="flex justify-center">
            <button
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, #16C784, #0ea868)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <Download size={15} />
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}