import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Clock, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'
import { toSlug } from './BlogPostPage'

const IMGS = [
  '/images/transport.webp',
  '/images/138148.webp',
  '/images/painpoints.webp',
]

const CAT_COLORS = {
  facturacion: { bg: 'bg-[#EB3D26]',   text: 'text-white' },
  transporte:  { bg: 'bg-[#2B2B2B]',   text: 'text-white' },
  finanzas:    { bg: 'bg-[#2E9E6B]',   text: 'text-white' },
  gestion:     { bg: 'bg-[#94D1CA]',   text: 'text-[#2B2B2B]' },
}

const PER_PAGE = 6

/* ── Category badge ─────────────────────────────────── */
function CatBadge({ category, label, small }) {
  const s = CAT_COLORS[category] ?? { bg: 'bg-[#AEAEAE]', text: 'text-white' }
  return (
    <span className={`inline-block font-bold uppercase tracking-[0.1em] ${s.bg} ${s.text}`}
      style={{ fontSize: small ? 'var(--text-xs)' : '10px', padding: small ? '4px 10px' : '3px 8px', borderRadius: 'var(--radius-pill)' }}>
      {label}
    </span>
  )
}

/* ── Featured post ──────────────────────────────────── */
function FeaturedCard({ post, cta }) {
  const img = IMGS[post.id % IMGS.length]
  return (
    <Link to={`/blog/${toSlug(post.title)}`} className="block">
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden bg-[#2B2B2B] cursor-pointer"
      style={{ borderRadius: 'var(--radius-xl)', minHeight: '380px' }}
    >
      {/* Background image */}
      <img src={img} alt={post.title}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
        onError={(e) => { e.currentTarget.style.opacity = '0' }} />
      {/* Gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(43,43,43,0.98) 40%, rgba(43,43,43,0.5) 100%)' }} />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10" style={{ minHeight: '380px' }}>
        <div className="mb-4">
          <CatBadge category={post.category} label={post.categoryLabel} small />
        </div>
        <h2 className="text-white font-black mb-3 group-hover:text-[#94D1CA] transition-colors"
          style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', maxWidth: '640px' }}>
          {post.title}
        </h2>
        <p className="text-white/60 mb-6" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', maxWidth: '560px' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5 text-white/40" style={{ fontSize: 'var(--text-xs)' }}>
            <Clock className="w-3 h-3" />{post.readTime} {cta.readTimeLabel}
          </span>
          <span className="text-white/40" style={{ fontSize: 'var(--text-xs)' }}>{post.date}</span>
          <button className="ml-auto inline-flex items-center gap-1.5 text-[#94D1CA] font-bold hover:gap-3 transition-all"
            style={{ fontSize: 'var(--text-sm)' }}>
            {cta.readMore} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
    </Link>
  )
}

/* ── Regular card ───────────────────────────────────── */
function PostCard({ post, cta }) {
  const img = IMGS[post.id % IMGS.length]
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
    <Link to={`/blog/${toSlug(post.title)}`}
      className="group bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 overflow-hidden hover:border-[#EB3D26]/25 hover:shadow-md transition-all duration-200 flex flex-col h-full"
      style={{ borderRadius: 'var(--radius-xl)', display: 'flex' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden shrink-0" style={{ aspectRatio: '16/9' }}>
        <img src={img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling.style.display = 'flex'
          }} />
        <div className="absolute inset-0 bg-[#F2F2F2] dark:bg-white/5 items-center justify-center hidden"
          style={{ display: 'none' }} />
        <div className="absolute top-3 left-3">
          <CatBadge category={post.category} label={post.categoryLabel} small={false} />
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
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} {cta.readTimeLabel}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[#EB3D26] font-semibold shrink-0"
            style={{ fontSize: 'var(--text-xs)' }}>
            {cta.readMore} <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
    </motion.article>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function BlogPage() {
  const { t } = useLang()
  const b = t.blog

  const [activeCat, setActiveCat] = useState('all')
  const [query,     setQuery]     = useState('')
  const [page,      setPage]      = useState(1)

  /* Filter */
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return b.posts.filter((p) => {
      const matchCat = activeCat === 'all' || p.category === activeCat
      const matchQ   = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [activeCat, query, b.posts])

  /* Reset page when filter changes */
  const handleCat = (id) => { setActiveCat(id); setPage(1) }
  const handleQ   = (v)  => { setQuery(v);     setPage(1) }

  /* Pagination */
  const featured     = activeCat === 'all' && !query && page === 1 ? filtered[0] : null
  const rest         = featured ? filtered.slice(1) : filtered
  const totalPages   = Math.ceil(rest.length / PER_PAGE)
  const paginated    = rest.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[#2B2B2B] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-6">
            <Link to="/comunidad"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
              style={{ fontSize: 'var(--text-sm)' }}>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Volver a comunidad
            </Link>
          </motion.div>
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" animate="show" className="max-w-2xl">
            <motion.p variants={fadeUp}
              className="text-[#EB3D26] font-bold uppercase tracking-[0.18em] mb-3"
              style={{ fontSize: 'var(--text-xs)' }}>
              {b.hero.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp}
              className="text-white font-black mb-4"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
              {b.hero.title}
            </motion.h1>
            <motion.p variants={fadeUp}
              className="text-white/60"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {b.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS ──────────────────────────────────── */}
      <div className="bg-white dark:bg-[#1A1A1A] border-b border-[#EFEFEF] dark:border-white/8 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative shrink-0 w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#AEAEAE]" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQ(e.target.value)}
              placeholder={b.search}
              className="w-full bg-[#F7F7F7] dark:bg-white/6 border border-[#EFEFEF] dark:border-white/10 text-[#2B2B2B] dark:text-white placeholder-[#AEAEAE] focus:outline-none focus:border-[#EB3D26]/40 transition-colors"
              style={{ fontSize: 'var(--text-xs)', padding: '8px 10px 8px 32px', borderRadius: 'var(--radius-md)' }}
            />
          </div>
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {b.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCat(cat.id)}
                className={`font-semibold transition-all ${
                  activeCat === cat.id
                    ? 'bg-[#EB3D26] text-white'
                    : 'bg-[#F7F7F7] dark:bg-white/6 text-[#4D4D4D] dark:text-[#AEAEAE] hover:bg-[#EB3D26]/10 hover:text-[#EB3D26]'
                }`}
                style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────── */}
      <section className="bg-[#F7F7F7] dark:bg-[#141414] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">

          {/* Featured */}
          <AnimatePresence mode="wait">
            {featured && (
              <motion.div key={`featured-${featured.id}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <FeaturedCard post={featured} cta={b} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid */}
          {paginated.length === 0 ? (
            <p className="text-center py-16 text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
              {b.noResults}
            </p>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {paginated.map((post) => (
                  <PostCard key={post.id} post={post} cta={b} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div variants={fadeUp} initial="hidden" animate="show"
              className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center gap-1.5 font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white dark:bg-white/6 border border-[#DEDEDE] dark:border-white/10 text-[#4D4D4D] dark:text-[#AEAEAE] hover:border-[#EB3D26]/40 hover:text-[#EB3D26]"
                style={{ fontSize: 'var(--text-sm)', padding: '8px 16px', borderRadius: 'var(--radius-md)' }}>
                <ArrowLeft className="w-3.5 h-3.5" /> {b.pagination.prev}
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-9 h-9 flex items-center justify-center font-bold transition-all ${
                      n === page
                        ? 'bg-[#EB3D26] text-white'
                        : 'bg-white dark:bg-white/6 border border-[#DEDEDE] dark:border-white/10 text-[#4D4D4D] dark:text-[#AEAEAE] hover:border-[#EB3D26]/40 hover:text-[#EB3D26]'
                    }`}
                    style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}>
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center gap-1.5 font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white dark:bg-white/6 border border-[#DEDEDE] dark:border-white/10 text-[#4D4D4D] dark:text-[#AEAEAE] hover:border-[#EB3D26]/40 hover:text-[#EB3D26]"
                style={{ fontSize: 'var(--text-sm)', padding: '8px 16px', borderRadius: 'var(--radius-md)' }}>
                {b.pagination.next} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

        </div>
      </section>

    </main>
  )
}
