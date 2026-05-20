import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'
import { DarkVeil } from '../ui/DarkVeil'

const TRANSPORT_IMAGE = '/images/transport.jpg'

export default function TransportSpotlight() {
  const { t } = useLang()
  const tr = t.transport
  return (
    <section className="relative bg-[#2B2B2B] py-20 overflow-hidden">
      <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} scanlineFrequency={0} warpAmount={0} resolutionScale={1} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-start">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="relative w-full aspect-video overflow-hidden" style={{ borderRadius: 'var(--radius-xl)' }}>
              <img
                src={TRANSPORT_IMAGE}
                alt="Software para empresas de transporte de carga"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div
                className="border-2 border-dashed border-[#EB3D26]/25 bg-[#EB3D26]/8 w-full h-full absolute inset-0 flex-col items-center justify-center gap-3"
                style={{ display: 'none', borderRadius: 'var(--radius-xl)' }}
              >
                <svg className="w-12 h-12 text-[#EB3D26]/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 17H5a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v3m-2 11h3m-3 0a2 2 0 01-2-2v-6a2 2 0 012-2h3m0 0l1.5-3" />
                  <circle cx="7" cy="17" r="2" strokeWidth={1} />
                  <circle cx="17" cy="17" r="2" strokeWidth={1} />
                </svg>
              </div>
              <div className="absolute top-4 left-4">
                <span
                  className="text-white/80 font-medium bg-black/50 border border-white/15 backdrop-blur-sm"
                  style={{ fontSize: 'var(--text-xs)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}
                >
                  {tr.badge}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            className="space-y-6"
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.p variants={fadeUp} className="text-[#94D1CA] font-bold uppercase tracking-[0.18em]" style={{ fontSize: 'var(--text-xs)' }}>
              {tr.eyebrow}
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-white font-bold" style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
              {tr.title}
            </motion.h2>

            {/* Decreto 1017 badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 border border-[#94D1CA]/30 bg-[#94D1CA]/8"
              style={{ borderRadius: 'var(--radius-lg)', padding: '10px 14px' }}
            >
              <div className="w-8 h-8 bg-[#94D1CA]/15 flex items-center justify-center shrink-0" style={{ borderRadius: 'var(--radius-md)' }}>
                <svg className="w-4 h-4 text-[#94D1CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-[#94D1CA] font-bold" style={{ fontSize: 'var(--text-sm)', letterSpacing: '0.05em' }}>
                  CUMPLIMIENTO NORMATIVO
                </p>
                <p className="text-white/70" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.4' }}>
                  Decreto 1017 de 2025 — Ministerio de Transporte
                </p>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-white/75" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {tr.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tr.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#EB3D26]/12 flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: 'var(--radius-sm)' }}>
                    <Check className="w-2.5 h-2.5 text-[#EB3D26]" strokeWidth={3} />
                  </div>
                  <span className="text-white/85" style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#"
              className="flex items-center justify-center w-full bg-[#94D1CA] text-[#2B2B2B] font-bold hover:bg-[#72bbb3] active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}
            >
              {tr.cta}
            </motion.a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {tr.stats.map((stat, i) => (
            <div key={i} className={`flex-1 text-center py-2 ${i < tr.stats.length - 1 ? 'sm:border-r sm:border-white/8' : ''}`}>
              <p className="text-[#94D1CA] font-semibold" style={{ fontSize: 'var(--text-sm)' }}>✓ {stat}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
