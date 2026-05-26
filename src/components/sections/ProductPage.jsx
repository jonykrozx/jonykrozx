import { motion } from 'framer-motion'
import { Check, ChevronRight, Package } from 'lucide-react'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'
import { productTranslations } from '../../lib/products'

/* ─── Fallback image placeholder ─── */
function ImgFallback() {
  return (
    <div
      className="w-full h-full absolute inset-0 flex items-center justify-center bg-[#F2F2F2] dark:bg-white/5 border-2 border-dashed border-[#DEDEDE] dark:border-white/10"
      style={{ borderRadius: 'var(--radius-xl)' }}
    >
      <Package className="w-14 h-14 text-[#DEDEDE]" />
    </div>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 1 — HERO BANNER
════════════════════════════════════════════════════ */
function HeroBanner({ p, shared }) {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            className="space-y-6"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            animate="show"
          >
            {p.label && (
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 text-[#EB3D26] border border-[#EB3D26]/25 bg-[#EB3D26]/6 dark:bg-[#EB3D26]/10 font-semibold uppercase tracking-[0.15em]"
                style={{ fontSize: 'var(--text-xs)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                {p.label}
              </motion.span>
            )}
            <motion.h1
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {p.bannerTitle}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
            >
              {p.bannerSubtitle}
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-2.5">
              {p.bannerPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 mt-0.5"
                    style={{ borderRadius: 'var(--radius-sm)' }}
                  >
                    <Check className="w-2.5 h-2.5 text-[#EB3D26]" strokeWidth={3} />
                  </div>
                  <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeUp}
              href={shared.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
              style={{ fontSize: 'var(--text-sm)', padding: '12px 28px', borderRadius: 'var(--radius-md)' }}
            >
              {shared.demo}
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ borderRadius: 'var(--radius-xl)', aspectRatio: '4/3' }}
            >
              <img
                src={p.image}
                alt={p.bannerTitle}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <ImgFallback />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 2 — FEATURES GRID
════════════════════════════════════════════════════ */
function FeaturesGrid({ p }) {
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="text-[#2B2B2B] dark:text-white font-black text-center"
          style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          {p.featuresTitle}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger(0.07, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {p.features.map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 p-5 space-y-2"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <h3 className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-sm)' }}>
                {feat.name}
              </h3>
              <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.6' }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 3 — WHY NOT GENERIC
════════════════════════════════════════════════════ */
function WhySection({ p }) {
  return (
    <section className="bg-[#2B2B2B] py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #EB3D26 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            className="space-y-5"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-white font-black"
              style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {p.whyTitle}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/70" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {p.whySubtitle}
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-2.5">
              {p.whyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 bg-[#94D1CA]/15 flex items-center justify-center shrink-0 mt-0.5"
                    style={{ borderRadius: 'var(--radius-sm)' }}
                  >
                    <Check className="w-2.5 h-2.5 text-[#94D1CA]" strokeWidth={3} />
                  </div>
                  <span className="text-white/85" style={{ fontSize: 'var(--text-sm)' }}>{pt}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="text-white/50 italic" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
              {p.whyClosing}
            </motion.p>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
          >
            <div
              className="relative w-full overflow-hidden opacity-90"
              style={{ borderRadius: 'var(--radius-xl)', aspectRatio: '4/3' }}
            >
              <img
                src={p.image}
                alt={p.whyTitle}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <ImgFallback />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 4 — BENEFITS
════════════════════════════════════════════════════ */
function BenefitsSection({ p }) {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="text-[#2B2B2B] dark:text-white font-black text-center"
          style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          {p.benefitsTitle}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {p.benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#F2F2F2] dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 p-5 space-y-2"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <h3 className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-sm)' }}>
                {b.title}
              </h3>
              <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.6' }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 5 — CLOSING CTA
════════════════════════════════════════════════════ */
function ClosingCTA({ p, shared }) {
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #EB3D26 0%, transparent 60%)' }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
          >
            {p.closingTitle}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#6B6B6B] dark:text-[#AEAEAE]"
            style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
          >
            {p.closingDesc}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={shared.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
              style={{ fontSize: 'var(--text-base)', padding: '14px 32px', borderRadius: 'var(--radius-md)' }}
            >
              {shared.demo}
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href={shared.waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all duration-200"
              style={{ fontSize: 'var(--text-base)', padding: '14px 32px', borderRadius: 'var(--radius-md)' }}
            >
              {shared.advisor}
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   MAIN EXPORT  —  recibe la clave del producto
   y resuelve el idioma con useLang()
════════════════════════════════════════════════════ */
export default function ProductPage({ productKey }) {
  const { lang } = useLang()
  const langData  = productTranslations[lang] ?? productTranslations.es
  const p         = langData[productKey]
  const shared    = langData.shared

  if (!p) return null   // clave no encontrada — falla silenciosa

  return (
    <main className="overflow-x-hidden">
      <HeroBanner    p={p} shared={shared} />
      <FeaturesGrid  p={p} />
      <WhySection    p={p} />
      <BenefitsSection p={p} />
      <ClosingCTA    p={p} shared={shared} />
    </main>
  )
}
