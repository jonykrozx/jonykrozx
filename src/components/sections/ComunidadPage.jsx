import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Download, Search, Play, FileText, FileSpreadsheet, BookOpen, Users, Layers } from 'lucide-react'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const CARD_IMGS = ['/images/transport.jpg', '/images/138148.jpg', '/images/painpoints.jpg', '/images/transport.jpg']

/* ── File type helpers ─────────────────────────────── */
function FileTypeBadge({ type }) {
  const map = {
    PDF:   { bg: 'bg-[#EB3D26]/10', text: 'text-[#EB3D26]',   icon: <FileText      className="w-3 h-3" /> },
    Excel: { bg: 'bg-[#2E9E6B]/10', text: 'text-[#2E9E6B]',   icon: <FileSpreadsheet className="w-3 h-3" /> },
    Word:  { bg: 'bg-[#2563EB]/10', text: 'text-[#2563EB]',   icon: <FileText      className="w-3 h-3" /> },
  }
  const s = map[type] ?? map.PDF
  return (
    <span className={`inline-flex items-center gap-1 font-bold uppercase ${s.bg} ${s.text}`}
      style={{ fontSize: 'var(--text-xs)', padding: '3px 8px', borderRadius: 'var(--radius-sm)', letterSpacing: '0.06em' }}>
      {s.icon}{type}
    </span>
  )
}

/* ═══════════════════════════════════════════════════
   1. HERO
══════════════════════════════════════════════════ */
function Hero({ c }) {
  return (
    <section className="bg-[#2B2B2B] py-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #94D1CA 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp}
            className="text-[#94D1CA] font-bold uppercase tracking-[0.18em] mb-4"
            style={{ fontSize: 'var(--text-xs)' }}>
            {c.eyebrow}
          </motion.p>
          <motion.h1 variants={fadeUp}
            className="text-white font-black mb-6"
            style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
            {c.title}
          </motion.h1>
          <motion.p variants={fadeUp}
            className="text-white/70 mb-8"
            style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)', maxWidth: '560px' }}>
            {c.subtitle}
          </motion.p>
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 text-white/40 border border-white/10 bg-white/4"
            style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#94D1CA]" />
            {c.microcopy}
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   2. BLOG
══════════════════════════════════════════════════ */
function ContentCard({ title, tag, img, isVideo }) {
  return (
    <div className="group bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 overflow-hidden hover:border-[#EB3D26]/30 transition-all duration-200 cursor-pointer"
      style={{ borderRadius: 'var(--radius-xl)' }}>
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex' }} />
        <div className="absolute inset-0 bg-[#F2F2F2] dark:bg-white/5 items-center justify-center" style={{ display: 'none' }}>
          <BookOpen className="w-8 h-8 text-[#DEDEDE]" />
        </div>
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center"
              style={{ borderRadius: 'var(--radius-full)' }}>
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </div>
          </div>
        )}
        <span className="absolute top-3 left-3 text-white font-bold bg-[#EB3D26]"
          style={{ fontSize: 'var(--text-xs)', padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>
          {tag}
        </span>
      </div>
      {/* Body */}
      <div style={{ padding: '14px 16px' }}>
        <p className="text-[#2B2B2B] dark:text-white font-semibold group-hover:text-[#EB3D26] transition-colors"
          style={{ fontSize: 'var(--text-sm)', lineHeight: '1.45' }}>
          {title}
        </p>
      </div>
    </div>
  )
}

function Blog({ c }) {
  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={stagger(0.08, 0.05)} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.1 }} className="space-y-10">
          <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
            <p className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]"
              style={{ fontSize: 'var(--text-xs)' }}>{c.eyebrow}</p>
            <h2 className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
              {c.title}
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {c.desc}
            </p>
          </motion.div>
          <motion.div variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.items.map((item, i) => (
              <ContentCard key={i} title={item.title} tag={item.tag} img={CARD_IMGS[i % CARD_IMGS.length]} isVideo={false} />
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link to="/blog"
              className="inline-flex items-center gap-2 bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B] font-bold hover:opacity-90 active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '11px 24px', borderRadius: 'var(--radius-md)' }}>
              {c.cta} <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   3. TUTORIALES
══════════════════════════════════════════════════ */
function Tutoriales({ c }) {
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={stagger(0.08, 0.05)} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.1 }} className="space-y-10">
          <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
            <p className="text-[#94D1CA] font-bold uppercase tracking-[0.18em]"
              style={{ fontSize: 'var(--text-xs)' }}>{c.eyebrow}</p>
            <h2 className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
              {c.title}
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {c.desc}
            </p>
          </motion.div>
          <motion.div variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.items.map((item, i) => (
              <ContentCard key={i} title={item.title} tag={item.tag} img={CARD_IMGS[(i + 1) % CARD_IMGS.length]} isVideo={item.tag === 'Video'} />
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <a href={c.ctaHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '11px 24px', borderRadius: 'var(--radius-md)' }}>
              {c.cta} <ChevronRight className="w-4 h-4" />
            </a>
            <span className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>{c.format}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   4. CAPACITACIÓN
══════════════════════════════════════════════════ */
const CAP_ICONS = [
  <Users className="w-5 h-5" />,
  <Layers className="w-5 h-5" />,
  <BookOpen className="w-5 h-5" />,
]

function Capacitacion({ c }) {
  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={stagger(0.08, 0.05)} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.1 }} className="space-y-10">
          <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
            <p className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]"
              style={{ fontSize: 'var(--text-xs)' }}>{c.eyebrow}</p>
            <h2 className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
              {c.title}
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {c.desc}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.items.map((item, i) => (
              <div key={i}
                className="bg-[#F7F7F7] dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 hover:border-[#94D1CA]/40 transition-all group"
                style={{ padding: '24px', borderRadius: 'var(--radius-xl)' }}>
                <div className="w-10 h-10 bg-[#94D1CA]/15 text-[#94D1CA] flex items-center justify-center mb-4 group-hover:bg-[#94D1CA]/25 transition-colors"
                  style={{ borderRadius: 'var(--radius-md)' }}>
                  {CAP_ICONS[i]}
                </div>
                <h3 className="text-[#2B2B2B] dark:text-white font-bold mb-2"
                  style={{ fontSize: 'var(--text-base)' }}>{item.title}</h3>
                <p className="text-[#6B6B6B] dark:text-[#AEAEAE]"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>{item.desc}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <a href={c.ctaHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '11px 24px', borderRadius: 'var(--radius-md)' }}>
              {c.cta} <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   5. DOCUMENTOS
══════════════════════════════════════════════════ */
function Documentos({ c }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = c.docs.filter((d) => {
    const matchCat = activeCategory === 'all' || d.category === activeCategory
    const matchQ   = !query || d.name.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={stagger(0.08, 0.05)} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.05 }} className="space-y-8">

          {/* Header */}
          <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
            <p className="text-[#94D1CA] font-bold uppercase tracking-[0.18em]"
              style={{ fontSize: 'var(--text-xs)' }}>{c.eyebrow}</p>
            <h2 className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
              {c.title}
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {c.desc}
            </p>
          </motion.div>

          {/* Search + filters */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AEAEAE]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={c.searchPlaceholder}
                className="w-full bg-white dark:bg-white/6 border border-[#DEDEDE] dark:border-white/10 text-[#2B2B2B] dark:text-white placeholder-[#AEAEAE] focus:outline-none focus:border-[#94D1CA] transition-colors"
                style={{ fontSize: 'var(--text-sm)', padding: '9px 12px 9px 36px', borderRadius: 'var(--radius-md)' }}
              />
            </div>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {c.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B]'
                      : 'bg-white dark:bg-white/6 text-[#4D4D4D] dark:text-[#AEAEAE] border border-[#DEDEDE] dark:border-white/10 hover:border-[#94D1CA] dark:hover:border-[#94D1CA]'
                  }`}
                  style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Document list */}
          <motion.div variants={fadeUp} className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                —
              </div>
            ) : (
              filtered.map((doc, i) => (
                <div key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 hover:border-[#94D1CA]/30 transition-all group"
                  style={{ padding: '14px 20px', borderRadius: 'var(--radius-lg)' }}>
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <FileTypeBadge type={doc.type} />
                    <p className="text-[#2B2B2B] dark:text-white font-semibold truncate group-hover:text-[#EB3D26] transition-colors"
                      style={{ fontSize: 'var(--text-sm)' }}>
                      {doc.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 shrink-0">
                    <span className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
                      {c.versionLabel} {doc.version}
                    </span>
                    <span className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
                      {c.updatedLabel}: {doc.date}
                    </span>
                    <button
                      className="flex items-center gap-1.5 bg-[#EB3D26]/8 text-[#EB3D26] font-bold hover:bg-[#EB3D26]/15 active:scale-95 transition-all"
                      style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-md)' }}>
                      <Download className="w-3 h-3" />
                      {c.downloadLabel}
                    </button>
                  </div>
                </div>
              ))
            )}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              to="/documentacion"
              className="inline-flex items-center gap-2 bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B] font-bold hover:opacity-90 active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '11px 24px', borderRadius: 'var(--radius-md)' }}>
              {c.cta} <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   6. BLOQUE DE VALOR
══════════════════════════════════════════════════ */
function Valor({ c }) {
  return (
    <section className="bg-[#2B2B2B] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #94D1CA 0%, transparent 55%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.div variants={stagger(0.1, 0.05)} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }} className="space-y-5">
          <motion.p variants={fadeUp}
            className="text-[#94D1CA] font-bold uppercase tracking-[0.18em]"
            style={{ fontSize: 'var(--text-xs)' }}>
            {c.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="text-white font-black"
            style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
            {c.title}
          </motion.h2>
          <motion.p variants={fadeUp}
            className="text-white/60"
            style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}>
            {c.text1}
          </motion.p>
          <motion.p variants={fadeUp}
            className="text-white/80"
            style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {c.text2}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   7. CTA FINAL
══════════════════════════════════════════════════ */
function CtaFinal({ c }) {
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <motion.div variants={stagger(0.1, 0.05)} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }} className="space-y-6">
          <motion.h2 variants={fadeUp}
            className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
            {c.title}
          </motion.h2>
          <motion.p variants={fadeUp}
            className="text-[#6B6B6B] dark:text-[#AEAEAE]"
            style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {c.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={c.demoHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all"
              style={{ fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-md)' }}>
              {c.ctaDemo} <ChevronRight className="w-4 h-4" />
            </a>
            <a href={c.waHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2B2B2B] dark:bg-white hover:opacity-90 active:scale-95 text-white dark:text-[#2B2B2B] font-bold transition-all"
              style={{ fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-md)' }}>
              {c.ctaAdvisor}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function ComunidadPage() {
  const { t } = useLang()
  const c = t.comunidad
  return (
    <main className="overflow-x-hidden">
      <Hero         c={c.hero} />
      <Blog         c={c.blog} />
      <Tutoriales   c={c.tutoriales} />
      <Capacitacion c={c.capacitacion} />
      <Documentos   c={c.documentos} />
      <Valor        c={c.valor} />
      <CtaFinal     c={c.ctaFinal} />
    </main>
  )
}
