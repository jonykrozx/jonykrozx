import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, FileText, FileSpreadsheet, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

/* ── File type badge ────────────────────────────────── */
const TYPE_STYLES = {
  PDF:   { bg: 'bg-[#EB3D26]/10', text: 'text-[#EB3D26]',  border: 'border-[#EB3D26]/20' },
  Excel: { bg: 'bg-[#2E9E6B]/10', text: 'text-[#2E9E6B]',  border: 'border-[#2E9E6B]/20' },
  Word:  { bg: 'bg-[#2563EB]/10', text: 'text-[#2563EB]',  border: 'border-[#2563EB]/20' },
}

function FileTypeBadge({ type }) {
  const s = TYPE_STYLES[type] ?? TYPE_STYLES.PDF
  const Icon = type === 'Excel' ? FileSpreadsheet : FileText
  return (
    <span className={`inline-flex items-center gap-1 font-bold border ${s.bg} ${s.text} ${s.border}`}
      style={{ fontSize: 'var(--text-xs)', padding: '3px 9px', borderRadius: 'var(--radius-sm)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
      <Icon className="w-3 h-3 shrink-0" />{type}
    </span>
  )
}

/* ── Document row ───────────────────────────────────── */
function DocRow({ doc, labels, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 hover:border-[#94D1CA]/40 hover:shadow-sm transition-all group"
      style={{ padding: '14px 20px', borderRadius: 'var(--radius-lg)' }}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <FileTypeBadge type={doc.type} />
        <p className="text-[#2B2B2B] dark:text-white font-semibold truncate group-hover:text-[#EB3D26] transition-colors"
          style={{ fontSize: 'var(--text-sm)' }}>
          {doc.name}
        </p>
      </div>
      <div className="flex items-center gap-5 shrink-0">
        <span className="text-[#AEAEAE] hidden sm:block" style={{ fontSize: 'var(--text-xs)' }}>
          {labels.versionLabel} {doc.version}
        </span>
        <span className="text-[#AEAEAE] hidden sm:block" style={{ fontSize: 'var(--text-xs)' }}>
          {labels.updatedLabel}: {doc.date}
        </span>
        <button
          className="flex items-center gap-1.5 bg-[#EB3D26]/8 text-[#EB3D26] font-bold hover:bg-[#EB3D26]/18 active:scale-95 transition-all shrink-0"
          style={{ fontSize: 'var(--text-xs)', padding: '7px 14px', borderRadius: 'var(--radius-md)' }}>
          <Download className="w-3 h-3" />
          {labels.downloadLabel}
        </button>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function DocumentacionPage() {
  const { t } = useLang()
  const d = t.documentacion

  const [query,       setQuery]       = useState('')
  const [activecat,   setActivecat]   = useState('all')
  const [activeType,  setActiveType]  = useState('Todos')

  const filtered = useMemo(() => {
    const q    = query.toLowerCase()
    const tall = activeType === 'Todos' || activeType === 'All'
    return d.docs.filter((doc) => {
      const matchCat  = activecat  === 'all'  || doc.category === activecat
      const matchType = tall || doc.type === activeType
      const matchQ    = !q || doc.name.toLowerCase().includes(q)
      return matchCat && matchType && matchQ
    })
  }, [query, activecat, activeType, d.docs])

  /* Count per category for badges */
  const catCounts = useMemo(() => {
    const counts = {}
    d.docs.forEach((doc) => {
      counts[doc.category] = (counts[doc.category] ?? 0) + 1
    })
    counts.all = d.docs.length
    return counts
  }, [d.docs])

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[#2B2B2B] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" animate="show" className="max-w-2xl">
            <motion.p variants={fadeUp}
              className="text-[#94D1CA] font-bold uppercase tracking-[0.18em] mb-3"
              style={{ fontSize: 'var(--text-xs)' }}>
              {d.hero.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp}
              className="text-white font-black mb-4"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
              {d.hero.title}
            </motion.h1>
            <motion.p variants={fadeUp}
              className="text-white/65"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {d.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <section className="bg-[#F7F7F7] dark:bg-[#141414] min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── LEFT SIDEBAR ─────────────────────── */}
            <aside className="lg:w-60 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Categories */}
                <div>
                  <p className="text-[#2B2B2B] dark:text-white font-black uppercase tracking-[0.12em] mb-3"
                    style={{ fontSize: 'var(--text-xs)' }}>
                    {d.categories[0]?.label === 'Todos' ? 'Categorías' : 'Categories'}
                  </p>
                  <ul className="space-y-1">
                    {d.categories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => setActivecat(cat.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-left transition-all font-medium ${
                            activecat === cat.id
                              ? 'bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B]'
                              : 'text-[#4D4D4D] dark:text-[#AEAEAE] hover:bg-white dark:hover:bg-white/6 hover:text-[#2B2B2B] dark:hover:text-white'
                          }`}
                          style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
                        >
                          <span>{cat.label}</span>
                          <span
                            className={`text-xs font-bold px-1.5 py-0.5 ${
                              activecat === cat.id
                                ? 'bg-white/20 text-white dark:bg-[#2B2B2B]/20 dark:text-[#2B2B2B]'
                                : 'bg-[#EFEFEF] dark:bg-white/8 text-[#AEAEAE]'
                            }`}
                            style={{ borderRadius: 'var(--radius-sm)' }}
                          >
                            {catCounts[cat.id] ?? 0}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* File type filter */}
                <div>
                  <p className="text-[#2B2B2B] dark:text-white font-black uppercase tracking-[0.12em] mb-3"
                    style={{ fontSize: 'var(--text-xs)' }}>
                    {d.filterType}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.fileTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`font-semibold transition-all border ${
                          activeType === type
                            ? 'bg-[#EB3D26] border-[#EB3D26] text-white'
                            : 'bg-white dark:bg-white/6 border-[#DEDEDE] dark:border-white/10 text-[#4D4D4D] dark:text-[#AEAEAE] hover:border-[#EB3D26]/40'
                        }`}
                        style={{ fontSize: 'var(--text-xs)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

            {/* ── MAIN LIST ────────────────────────── */}
            <div className="flex-1 min-w-0 space-y-5">

              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AEAEAE]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={d.search}
                  className="w-full bg-white dark:bg-white/6 border border-[#DEDEDE] dark:border-white/10 text-[#2B2B2B] dark:text-white placeholder-[#AEAEAE] focus:outline-none focus:border-[#94D1CA] transition-colors"
                  style={{ fontSize: 'var(--text-sm)', padding: '11px 14px 11px 40px', borderRadius: 'var(--radius-lg)' }}
                />
              </div>

              {/* Results count */}
              <div className="flex items-center justify-between">
                <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
                  {filtered.length} {filtered.length === 1 ? 'documento' : 'documentos'}
                </p>
                <div className="flex items-center gap-1.5 text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
                  <SlidersHorizontal className="w-3 h-3" />
                  {d.filterType}
                </div>
              </div>

              {/* Doc rows */}
              <div className="space-y-2.5">
                {filtered.length === 0 ? (
                  <div className="text-center py-16 text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                    {d.noResults}
                  </div>
                ) : (
                  filtered.map((doc, i) => (
                    <DocRow key={`${doc.name}-${i}`} doc={doc} labels={d} index={i} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ───────────────────────────────── */}
      <section className="bg-white dark:bg-[#1A1A1A] py-16">
        <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.4 }} className="space-y-4">
            <motion.h2 variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)' }}>
              {d.cta.title}
            </motion.h2>
            <motion.p variants={fadeUp}
              className="text-[#6B6B6B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {d.cta.subtitle}
            </motion.p>
            <motion.a variants={fadeUp}
              href={d.cta.waHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#94D1CA] hover:bg-[#72bbb3] active:scale-95 text-[#2B2B2B] font-bold transition-all"
              style={{ fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-md)' }}>
              {d.cta.btn} <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
