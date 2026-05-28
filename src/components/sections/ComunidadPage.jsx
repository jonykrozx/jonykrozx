import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { DarkVeil } from '../ui/DarkVeil'
import { ChevronRight, Download, Search, Play, FileText, FileSpreadsheet, BookOpen, Users, Layers, Clock } from 'lucide-react'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'
import { toSlug } from './BlogPostPage'

const CARD_IMGS = ['/images/transport.jpg', '/images/138148.jpg', '/images/painpoints.jpg', '/images/transport.jpg']

const YOUTUBE_VIDEOS = [
  {
    id: 'EIVasoC5DZg',
    title: 'Syscom40: Actualización FOPAT',
    url: 'https://www.youtube.com/watch?v=EIVasoC5DZg',
    thumb: 'https://img.youtube.com/vi/EIVasoC5DZg/hqdefault.jpg',
  },
  {
    id: 'XUy3Z-7-K40',
    title: '¿Qué es FOPAT?',
    url: 'https://www.youtube.com/watch?v=XUy3Z-7-K40',
    thumb: 'https://img.youtube.com/vi/XUy3Z-7-K40/hqdefault.jpg',
  },
  {
    id: '5tVwSOujy6I',
    title: '¿Qué es Orden de Cargue?',
    url: 'https://www.youtube.com/watch?v=5tVwSOujy6I',
    thumb: 'https://img.youtube.com/vi/5tVwSOujy6I/hqdefault.jpg',
  },
  {
    id: 'wyRLzWUtUI0',
    title: 'La creación de novedades de Nómina en Syscom Nómina',
    url: 'https://www.youtube.com/watch?v=wyRLzWUtUI0&t=2s',
    thumb: 'https://img.youtube.com/vi/wyRLzWUtUI0/hqdefault.jpg',
  },
]

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
    <section className="bg-[#2B2B2B] py-20 overflow-hidden relative">
      <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} scanlineFrequency={0} warpAmount={0} resolutionScale={1} style={{ filter: 'hue-rotate(148deg) saturate(0.7)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            animate="show"
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
              style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}>
              {c.subtitle}
            </motion.p>
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 text-white/40 border border-white/10 bg-white/4"
              style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#94D1CA]" />
              {c.microcopy}
            </motion.span>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden" style={{ borderRadius: 'var(--radius-xl)', width: '484px', height: '350px', maxWidth: '100%' }}>
              <img
                src="/images/comunidad-hero.jpg"
                alt="Comunidad SYSCOM"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-[#2B2B2B]/30" style={{ borderRadius: 'var(--radius-xl)' }} />
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#94D1CA] to-[#EB3D26]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   2. BLOG
══════════════════════════════════════════════════ */
const CAT_COLORS = {
  facturacion: { bg: 'bg-[#EB3D26]',   text: 'text-white' },
  transporte:  { bg: 'bg-[#2B2B2B]',   text: 'text-white' },
  finanzas:    { bg: 'bg-[#2E9E6B]',   text: 'text-white' },
  gestion:     { bg: 'bg-[#94D1CA]',   text: 'text-[#2B2B2B]' },
}

function CatBadge({ category, label }) {
  const s = CAT_COLORS[category] ?? { bg: 'bg-[#AEAEAE]', text: 'text-white' }
  return (
    <span className={`inline-block font-bold uppercase tracking-[0.1em] ${s.bg} ${s.text}`}
      style={{ fontSize: '10px', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
      {label}
    </span>
  )
}

function BlogPostCard({ post, readTimeLabel, readMore }) {
  const img = CARD_IMGS[post.id % CARD_IMGS.length]
  return (
    <Link to={`/blog/${toSlug(post.title)}`}
      className="group bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 overflow-hidden hover:border-[#EB3D26]/25 hover:shadow-md transition-all duration-200 flex flex-col"
      style={{ borderRadius: 'var(--radius-xl)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden shrink-0" style={{ aspectRatio: '16/9' }}>
        <img src={img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex' }} />
        <div className="absolute inset-0 bg-[#F2F2F2] dark:bg-white/5 items-center justify-center hidden"
          style={{ display: 'none' }} />
        <div className="absolute top-3 left-3">
          <CatBadge category={post.category} label={post.categoryLabel} />
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-[#2B2B2B] dark:text-white font-bold group-hover:text-[#EB3D26] transition-colors"
          style={{ fontSize: 'var(--text-base)', lineHeight: '1.45' }}>
          {post.title}
        </h3>
        <p className="text-[#6B6B6B] dark:text-[#AEAEAE] flex-1"
          style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
          {post.excerpt}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-y-1 pt-3 border-t border-[#F2F2F2] dark:border-white/6">
          <div className="flex items-center gap-2 text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} {readTimeLabel}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[#EB3D26] font-semibold shrink-0"
            style={{ fontSize: 'var(--text-xs)' }}>
            {readMore} <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function Blog({ c, blogData }) {
  const posts = blogData.posts.slice(0, 4)
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
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} readTimeLabel={blogData.readTimeLabel} readMore={blogData.readMore} />
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link to="/blog"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
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
    <section id="tutoriales" className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
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
            {YOUTUBE_VIDEOS.map((video) => (
              <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer"
                className="group bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 overflow-hidden hover:border-[#EB3D26]/30 transition-all duration-200 block"
                style={{ borderRadius: 'var(--radius-xl)' }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img src={video.thumb} alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex' }} />
                  <div className="absolute inset-0 bg-[#F2F2F2] dark:bg-white/5 items-center justify-center" style={{ display: 'none' }}>
                    <BookOpen className="w-8 h-8 text-[#DEDEDE]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                      style={{ borderRadius: 'var(--radius-full)' }}>
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 text-white font-bold bg-[#EB3D26]"
                    style={{ fontSize: 'var(--text-xs)', padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>
                    Video
                  </span>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <p className="text-[#2B2B2B] dark:text-white font-semibold group-hover:text-[#EB3D26] transition-colors"
                    style={{ fontSize: 'var(--text-sm)', lineHeight: '1.45' }}>
                    {video.title}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a href={c.ctaHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '11px 24px', borderRadius: 'var(--radius-md)' }}>
              {c.cta} <ChevronRight className="w-4 h-4" />
            </a>
            <span className="text-[#AEAEAE] text-center sm:text-left" style={{ fontSize: 'var(--text-xs)' }}>{c.format}</span>
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
    <section id="Capacitación" className="bg-white dark:bg-[#1A1A1A] py-20">
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
                className="bg-[#F4F4F4] dark:bg-white/4 border border-[#E8E8E8] dark:border-white/8 hover:border-[#94D1CA]/40 transition-all group"
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
            <Link to={c.ctaHref}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all"
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
    <section id="recursos" className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
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

          {/* Search */}
          <motion.div variants={fadeUp}>
            <div className="relative w-full max-w-sm">
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
          </motion.div>

          {/* Category tabs */}
          <motion.div variants={fadeUp}>
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
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B] font-bold hover:opacity-90 active:scale-95 transition-all"
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
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [hash])

  return (
    <main className="overflow-x-hidden">
      <Hero         c={c.hero} />
      <Blog         c={c.blog} blogData={t.blog} />
      <Tutoriales   c={c.tutoriales} />
      <Capacitacion c={c.capacitacion} />
      <Documentos   c={c.documentos} />
      <Valor        c={c.valor} />
      <CtaFinal     c={c.ctaFinal} />
    </main>
  )
}
