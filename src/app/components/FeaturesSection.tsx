import { motion } from 'motion/react';
import { Bot, Pill, MapPin, LayoutDashboard, Syringe, Video, MessageCircle, Bell, Navigation, CalendarCheck, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  bgLight: string;
  bgDark: string;
  comingSoon: boolean;
  actionLabel: string | null;
  actionIcon: React.ElementType | null;
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: 'AI Healthcare Chatbot',
    desc: '24/7 reliable and verified medical guidance powered by advanced AI. Get instant answers to your health questions in your preferred language.',
    color: '#16C784',
    bgLight: '#E8FFF5',
    bgDark: '#0B1A20',
    comingSoon: false,
    actionLabel: 'Ask Now',
    actionIcon: MessageCircle,
  },
  {
    icon: Pill,
    title: 'Smart Medicine Reminder',
    desc: 'Multi-drug scheduling and adherence tracking system. Never miss a dose with intelligent reminders sent via app, SMS, or WhatsApp.',
    color: '#3B82F6',
    bgLight: '#EFF6FF',
    bgDark: '#0B1220',
    comingSoon: false,
    actionLabel: 'Set Reminder',
    actionIcon: Bell,
  },
  {
    icon: MapPin,
    title: 'Healthcare Centre Locator',
    desc: 'Real-time access to nearby hospitals, clinics, and PHCs. Navigate to the nearest healthcare facility with GPS integration.',
    color: '#F59E0B',
    bgLight: '#FFFBEB',
    bgDark: '#141008',
    comingSoon: false,
    actionLabel: 'Locate Now',
    actionIcon: Navigation,
  },
  {
    icon: LayoutDashboard,
    title: 'Personal Health Dashboard',
    desc: 'Track all your health records, medication schedules, vitals, and activity logs in one comprehensive dashboard.',
    color: '#8B5CF6',
    bgLight: '#F5F3FF',
    bgDark: '#100E1E',
    comingSoon: true,
    actionLabel: null,
    actionIcon: null,
  },
  {
    icon: Syringe,
    title: 'Vaccination Schedule',
    desc: 'Automated personalized vaccination schedule management with alerts integrated with national health authority guidelines.',
    color: '#EC4899',
    bgLight: '#FDF2F8',
    bgDark: '#140B14',
    comingSoon: false,
    actionLabel: 'Schedule Now',
    actionIcon: CalendarCheck,
  },
  {
    icon: Video,
    title: 'Doctor Teleconsultation',
    desc: 'Connect with verified doctors for online consultations from the comfort of your home. Available across India 24/7.',
    color: '#6B7280',
    bgLight: '#F9FAFB',
    bgDark: '#0E1018',
    comingSoon: true,
    actionLabel: null,
    actionIcon: null,
  },
];

export function FeaturesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0A0D1A 0%, #060918 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f8fffe 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(22,199,132,0.5), transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              background: isDark ? 'rgba(22,199,132,0.12)' : 'rgba(22,199,132,0.1)',
              border: '1px solid rgba(22,199,132,0.3)',
              color: '#16C784',
            }}
          >
            Core Features
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: isDark ? '#F1F5F9' : '#0A0D1A',
              marginBottom: '1rem',
            }}
          >
            Everything You Need for{' '}
            <span style={{ color: '#16C784' }}>Better Health</span>
          </h2>
          <p style={{ color: isDark ? '#64748B' : '#6B7280', fontSize: '1rem', maxWidth: '560px', margin: '0 auto' }}>
            Comprehensive healthcare tools designed for both rural and urban communities across India.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const ActionIcon = feature.actionIcon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={!feature.comingSoon ? { y: -6, scale: 1.02 } : {}}
                className="relative p-6 rounded-2xl transition-all duration-300 group flex flex-col"
                style={{
                  background: isDark ? feature.bgDark : feature.bgLight,
                  border: `1px solid ${feature.color}22`,
                  boxShadow: isDark ? '0 2px 20px rgba(0,0,0,0.3)' : '0 2px 20px rgba(0,0,0,0.06)',
                  opacity: feature.comingSoon ? 0.8 : 1,
                  cursor: feature.comingSoon ? 'default' : 'pointer',
                }}
              >
                {/* Coming Soon badge */}
                {feature.comingSoon && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.06)' : '#F3F4F6',
                      color: isDark ? '#64748B' : '#6B7280',
                      border: '1px solid rgba(107,114,128,0.2)',
                    }}
                  >
                    <Clock size={11} />
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${feature.color}18`, border: `2px solid ${feature.color}28` }}
                >
                  <Icon size={26} style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: isDark ? '#F1F5F9' : '#0A0D1A',
                    marginBottom: '0.6rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{ fontSize: '0.88rem', color: isDark ? '#64748B' : '#6B7280', lineHeight: 1.6 }}
                  className="flex-1"
                >
                  {feature.desc}
                </p>

                {/* Action Button */}
                {feature.actionLabel && ActionIcon && (
                  <button
                    className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
                    style={{
                      background: `${feature.color}15`,
                      border: `1.5px solid ${feature.color}35`,
                      color: feature.color,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = feature.color;
                      (e.currentTarget as HTMLButtonElement).style.color = 'white';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = `${feature.color}15`;
                      (e.currentTarget as HTMLButtonElement).style.color = feature.color;
                    }}
                  >
                    <ActionIcon size={15} />
                    {feature.actionLabel}
                  </button>
                )}

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}