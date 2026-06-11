import { motion } from 'framer-motion'
import { ArrowLeft, Check, ChevronRight, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'
import { productTranslations } from '../../lib/products'

/* ─── Variantes de animación por sección ─── */

// HeroMedia — columnas desde los lados
const fromLeft  = { hidden: { opacity: 0, x: -52 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } }
const fromRight = { hidden: { opacity: 0, x:  52 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } }
const fromLeftStagger  = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }
const fromRightStagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const fromLeftItem  = { hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, ease } } }
const fromRightItem = { hidden: { opacity: 0, x:  28 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, ease } } }

// FeaturesGrid — escala + pop
const scalePop     = { hidden: { opacity: 0, scale: 0.86, y: 14 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.42, ease } } }
const scaleStagger = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }

// BenefitsSection — blur + desvanecimiento
const blurIn     = { hidden: { opacity: 0, filter: 'blur(8px)', y: 20 }, show: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.5, ease } } }
const blurStagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const blurTitle  = { hidden: { opacity: 0, filter: 'blur(10px)', letterSpacing: '0.2em' }, show: { opacity: 1, filter: 'blur(0px)', letterSpacing: 'var(--ls-tight)', transition: { duration: 0.7, ease } } }

// ClosingCTA — zoom suave + fade
const zoomFade     = { hidden: { opacity: 0, scale: 0.93 }, show: { opacity: 1, scale: 1, transition: { duration: 0.65, ease } } }
const zoomStagger  = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } }

/* Mapeo producto → sección de /soluciones */
const SOLUTIONS_HREF = {
  transCarga:             '/soluciones#transporte',
  transporteEspecial:     '/soluciones#transporte',
  busUrbano:              '/soluciones#transporte',
  mantvehicular:          '/soluciones#transporte',
  Sysparking:             '/soluciones#transporte',
  juridico:               '/soluciones#transporte',
  estaciones:             '/soluciones#estaciones',
  plantas:                '/soluciones#plantas',
  sysTotalComercial:      '/soluciones#empresas',
  nominarh:               '/soluciones#empresas',
  contabilidad:           '/soluciones#empresas',
  facturacionelect:       '/soluciones#empresas',
  activosFijos:           '/soluciones#empresas',
  facturacioneinventario: '/soluciones#empresas',
  hoteleria:              '/soluciones#hoteleria',
  financiero:             '/soluciones#empresas',
}

/* ─── Fallback image placeholder ─── */
function ImgFallback() {
  return (
    <div
      className="w-full h-full absolute inset-0 items-center justify-center bg-[#F2F2F2] dark:bg-white/5 border-2 border-dashed border-[#DEDEDE] dark:border-white/10"
      style={{ borderRadius: 'var(--radius-xl)', display: 'none' }}
    >
      <Package className="w-14 h-14 text-[#DEDEDE]" />
    </div>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 1A — HERO HEADER  (2 col: texto + imagen)
════════════════════════════════════════════════════ */
function HeroHeader({ p, shared, backHref }) {
  return (
    <section
      className="relative bg-white dark:bg-[#0A0A0A] overflow-hidden"
      style={{ paddingTop: 'clamp(48px, 6vw, 88px)', paddingBottom: 'clamp(48px, 6vw, 80px)' }}
    >
      {/* dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #b0b0b0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.15,
        }}
      />
      {/* red glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(235,61,38,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Back link */}
        {backHref && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease }}
            className="mb-8"
          >
            <Link
              to={backHref}
              className="inline-flex items-center gap-1.5 text-[#8A8A8A] dark:text-[#5A5A5A] hover:text-[#EB3D26] dark:hover:text-[#EB3D26] transition-colors duration-200 group"
              style={{ fontSize: 'var(--text-xs)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {shared.back}
            </Link>
          </motion.div>
        )}

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: texto ── */}
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
                style={{ fontSize: 'var(--text-xs)', padding: '5px 14px', borderRadius: 'var(--radius-pill)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                {p.label}
              </motion.span>
            )}

            <motion.div variants={fadeUp} className="relative pl-5 border-l-[3px] border-[#EB3D26]">
              <h1
                className="text-[#1A1A1A] dark:text-white font-black"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
              >
                {p.bannerTitle}
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[#5C5C5C] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: '1.8' }}
            >
              {p.bannerSubtitle}
            </motion.p>
          </motion.div>

          {/* ── Right: imagen ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.12 }}
            className="relative"
          >
            <div
              className="absolute -bottom-3 -right-3 w-full h-full bg-[#EB3D26]/7 dark:bg-[#EB3D26]/5"
              style={{ borderRadius: 'var(--radius-xl)' }}
            />
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: 'var(--radius-xl)',
                aspectRatio: '4/3',
                boxShadow: '0 24px 72px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)',
              }}
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
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(to right, #EB3D26, rgba(235,61,38,0.15), transparent)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 1B — HERO MEDIA  (whyTitle/Subtitle + checklist + CTAs)
════════════════════════════════════════════════════ */
function HeroMedia({ p, shared }) {
  return (
    <section
      className="relative bg-[#F7F6F4] dark:bg-[#111111] overflow-hidden"
      style={{ paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(52px, 6vw, 92px)' }}
    >
      {/* subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'300\' height=\'300\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: desliza desde izquierda ── */}
          <motion.div
            className="space-y-6"
            variants={fromLeftStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              variants={fromLeftItem}
              className="text-[#1A1A1A] dark:text-white font-black"
              style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
            >
              {p.whyTitle}
            </motion.h2>

            <motion.p
              variants={fromLeftItem}
              className="text-[#5C5C5C] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: '1.8' }}
            >
              {p.whySubtitle}
            </motion.p>

            {p.whyClosing && (
              <motion.p
                variants={fromLeftItem}
                className="text-[#EB3D26] font-semibold border-l-2 border-[#EB3D26]/40 pl-4"
                style={{ fontSize: 'var(--text-sm)', lineHeight: '1.7', fontStyle: 'italic' }}
              >
                {p.whyClosing}
              </motion.p>
            )}
          </motion.div>

          {/* ── Right: desliza desde derecha ── */}
          <motion.div
            className="space-y-7"
            variants={fromRightStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {p.whyPoints?.length > 0 && (
              <motion.ul variants={fromRightItem} className="space-y-4">
                {p.whyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div
                      className="w-6 h-6 bg-[#EB3D26]/10 dark:bg-[#EB3D26]/15 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ borderRadius: '6px' }}
                    >
                      <Check className="w-3.5 h-3.5 text-[#EB3D26]" strokeWidth={3} />
                    </div>
                    <span className="text-[#3D3D3D] dark:text-[#C0C0C0]" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.65' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div
              variants={fromRightItem}
              className="h-px"
              style={{ background: 'linear-gradient(to right, rgba(235,61,38,0.2), transparent)' }}
            />

            <motion.div variants={fromRightItem}>
              <a
                href={shared.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-[0.97] text-white font-bold shadow-[0_4px_20px_rgba(235,61,38,0.32)] hover:shadow-[0_6px_28px_rgba(235,61,38,0.44)] transition-all duration-200"
                style={{ fontSize: 'var(--text-sm)', padding: '13px 26px', borderRadius: 'var(--radius-md)' }}
              >
                {shared.demo}
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 1 — HERO BANNER  (orquesta Header + Media)
════════════════════════════════════════════════════ */
function HeroBanner({ p, shared, backHref }) {
  return (
    <>
      <HeroHeader p={p} shared={shared} backHref={backHref} />

      <HeroMedia  p={p} shared={shared} />
    </>
  )
}

/* ════════════════════════════════════════════════════
   SECTION 2 — FEATURES GRID
════════════════════════════════════════════════════ */
function FeaturesGrid({ p }) {
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

        {/* Título: desliza desde izquierda con clip */}
        <motion.h2
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-[#2B2B2B] dark:text-white font-black text-center"
          style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          {p.featuresTitle}
        </motion.h2>

        {/* Cards: scale pop escalonado */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={scaleStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {p.features.map((feat, i) => (
            <motion.div
              key={i}
              variants={scalePop}
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
                src={p.image2 || p.image}
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
  const imgSrc = p.image2 || p.image
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Columna izq: imagen */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
            className="relative w-full overflow-hidden order-2 lg:order-1 lg:sticky lg:top-28"
            style={{ borderRadius: 'var(--radius-xl)', aspectRatio: '4/3',
              boxShadow: '0 16px 48px -10px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)' }}
          >
            <img
              src={imgSrc}
              alt={p.benefitsTitle}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex' }}
            />
            <ImgFallback />
          </motion.div>

          {/* Columna der: título + cards */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.h2
              variants={blurTitle}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {p.benefitsTitle}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={blurStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
            >
              {p.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={blurIn}
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

        </div>
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
        {/* Zoom fade: todo el bloque entra como una unidad */}
        <motion.div
          variants={zoomStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h2
            variants={zoomFade}
            className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
          >
            {p.closingTitle}
          </motion.h2>

          <motion.p
            variants={zoomFade}
            className="text-[#6B6B6B] dark:text-[#AEAEAE]"
            style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
          >
            {p.closingDesc}
          </motion.p>

          <motion.div variants={zoomFade} className="flex flex-col sm:flex-row gap-3 justify-center">
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
  const backHref  = SOLUTIONS_HREF[productKey] ?? '/soluciones'

  if (!p) return null   // clave no encontrada — falla silenciosa

  return (
    <main className="overflow-x-hidden">
      <HeroBanner      p={p} shared={shared} backHref={backHref} />
      <FeaturesGrid    p={p} />
      <BenefitsSection p={p} />
      <ClosingCTA      p={p} shared={shared} />
    </main>
  )
}
