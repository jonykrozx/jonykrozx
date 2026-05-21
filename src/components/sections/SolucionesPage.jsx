import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ChevronRight, Package } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'
import Certifications from './Certifications'

const IMGS = [
  '/images/transport.jpg',
  '/images/138148.jpg',
  '/images/painpoints.jpg',
  '/images/transport.jpg',
  '/images/138148.jpg',
]

/* ─── Image block ───────────────────────────────── */
function ImgBlock({ src, alt }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ borderRadius: 'var(--radius-xl)', aspectRatio: '4/3' }}>
      <img src={src} alt={alt} className="w-full h-full object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex' }} />
      <div className="absolute inset-0 bg-[#F2F2F2] dark:bg-white/5 border-2 border-dashed border-[#DEDEDE] dark:border-white/10 items-center justify-center" style={{ display: 'none' }}>
        <Package className="w-12 h-12 text-[#DEDEDE]" />
      </div>
    </div>
  )
}

/* ─── Info column ───────────────────────────────── */
function InfoCol({ label, items, variant = 'bullet' }) {
  return (
    <div className="space-y-3">
      <h4 className="text-[#2B2B2B] dark:text-white font-black uppercase tracking-wide"
        style={{ fontSize: 'var(--text-xs)' }}>{label}</h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => {
          const label = typeof item === 'string' ? item : item.label
          const href  = typeof item === 'string' ? null  : item.href ?? null
          return (
            <li key={i} className="flex items-start gap-2">
              {variant === 'check' ? (
                <div className="w-4 h-4 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: 'var(--radius-sm)' }}>
                  <Check className="w-2.5 h-2.5 text-[#EB3D26]" strokeWidth={3} />
                </div>
              ) : variant === 'tag' ? (
                <div className="w-1.5 h-1.5 rounded-full bg-[#94D1CA] shrink-0 mt-1.5" />
              ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26] shrink-0 mt-1.5" />
              )}
              {href ? (
                <Link to={href}
                  className="text-[#4D4D4D] dark:text-[#AEAEAE] hover:text-[#EB3D26] dark:hover:text-[#EB3D26] hover:underline underline-offset-2 transition-colors"
                  style={{ fontSize: 'var(--text-xs)', lineHeight: '1.55' }}>
                  {label}
                </Link>
              ) : (
                <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.55' }}>{label}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ─── Solution card ─────────────────────────────── */
function SolutionCard({ item, index, cta }) {
  const flip = index % 2 !== 0
  const bg = index % 2 === 0 ? 'bg-white dark:bg-[#0A0A0A]' : 'bg-[#F2F2F2] dark:bg-[#141414]'

  return (
    <section id={item.id} className={`${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        {/* Header row */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: flip ? 48 : -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
            className={flip ? 'order-1 lg:order-2' : ''}
          >
            <ImgBlock src={IMGS[index]} alt={item.title} />
          </motion.div>

          <motion.div
            className={`space-y-4 ${flip ? 'order-2 lg:order-1' : ''}`}
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 bg-[#EB3D26]/8 text-[#EB3D26] font-bold uppercase tracking-[0.15em]"
                style={{ fontSize: 'var(--text-xs)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
              {item.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {item.desc}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={cta.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
              style={{ fontSize: 'var(--text-sm)', padding: '11px 24px', borderRadius: 'var(--radius-md)' }}
            >
              {cta.demo}
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* 3-col info grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {[
            { col: item.control, variant: 'bullet' },
            { col: item.software, variant: 'tag' },
            { col: item.benefits, variant: 'check' },
          ].map(({ col, variant }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 p-5"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <InfoCol label={col.label} items={col.items} variant={variant} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   BANNER
══════════════════════════════════════════════════ */
function Banner({ s }) {
  const b = s.banner
  return (
    <section className="bg-[#2B2B2B] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #EB3D26 0%, transparent 55%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <motion.div
          variants={stagger(0.12, 0.05)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-5">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-white/60 border border-white/15 bg-white/5 font-medium uppercase tracking-[0.15em]"
                style={{ fontSize: 'var(--text-xs)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                {b.eyebrow}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-white font-black"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
              {b.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70"
              style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}>
              {b.subtitle}
            </motion.p>
          </div>

        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="border-t border-white/10 pt-6"
        >
          <p className="text-white/50 text-center" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', maxWidth: '760px', margin: '0 auto' }}>
            {b.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   CLOSING CTA
══════════════════════════════════════════════════ */
function ClosingCTA({ s }) {
  const c = s.closing
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h2 variants={fadeUp} className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
            {c.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]"
            style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {c.subtitle}
          </motion.p>
          <motion.a
            variants={fadeUp}
            href={c.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all duration-200"
            style={{ fontSize: 'var(--text-base)', padding: '14px 32px', borderRadius: 'var(--radius-md)' }}
          >
            {c.cta}
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function SolucionesPage() {
  const { t } = useLang()
  const s = t.soluciones
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
      }
    }
  }, [hash])

  return (
    <main className="overflow-x-hidden">
      <Banner s={s} />
      {s.items.map((item, i) => (
        <SolutionCard key={item.id} item={item} index={i} cta={s.cta} />
      ))}
      <Certifications />
      <ClosingCTA s={s} />
    </main>
  )
}
