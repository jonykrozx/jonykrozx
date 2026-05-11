import { motion } from 'framer-motion'
import { ShieldCheck, Infinity, MonitorCheck, Truck } from 'lucide-react'
import { stagger, fadeUp } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const ICONS = [ShieldCheck, Infinity, MonitorCheck, Truck]
const ACCENTS = ['#EB3D26', '#94D1CA', '#2E9E6B', '#EB3D26']

export default function KeyBenefitsV2() {
  const { t } = useLang()
  const benefits = t.keyBenefits

  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((text, i) => {
            const Icon = ICONS[i]
            const accent = ACCENTS[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-[#F7F7F7] dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ borderRadius: 'var(--radius-xl)', padding: '24px 20px' }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
                  style={{ background: accent, opacity: 0.4 }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: accent }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${accent}15`, borderRadius: 'var(--radius-md)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={1.75} />
                </div>

                {/* Number */}
                <span
                  className="absolute top-4 right-4 font-black opacity-6 dark:opacity-8 select-none"
                  style={{ fontSize: '2.5rem', lineHeight: 1, color: accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Text */}
                <p
                  className="text-[#2B2B2B] dark:text-white/85 font-semibold"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-snug)' }}
                >
                  {text}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
