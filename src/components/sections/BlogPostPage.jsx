import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

/* ── Slug helper ─────────────────────────────────────── */
export function toSlug(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

const IMGS = [
  '/images/transport.jpg',
  '/images/138148.jpg',
  '/images/painpoints.jpg',
]

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
      style={{ fontSize: 'var(--text-xs)', padding: '4px 12px', borderRadius: 'var(--radius-pill)' }}>
      {label}
    </span>
  )
}

/* ── Related card ────────────────────────────────────── */
function RelatedCard({ post }) {
  const img = IMGS[post.id % IMGS.length]
  return (
    <Link to={`/blog/${toSlug(post.title)}`}
      className="group bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 overflow-hidden hover:border-[#EB3D26]/25 hover:shadow-md transition-all duration-200 flex flex-col"
      style={{ borderRadius: 'var(--radius-xl)' }}
    >
      <div className="relative overflow-hidden shrink-0" style={{ aspectRatio: '16/9' }}>
        <img src={img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <CatBadge category={post.category} label={post.categoryLabel} />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-[#2B2B2B] dark:text-white font-bold group-hover:text-[#EB3D26] transition-colors"
          style={{ fontSize: 'var(--text-sm)', lineHeight: '1.45' }}>
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-[#AEAEAE] mt-auto pt-2"
          style={{ fontSize: 'var(--text-xs)' }}>
          <Clock className="w-3 h-3" />{post.readTime} min · {post.date}
        </div>
      </div>
    </Link>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useLang()
  const b = t.blog

  const post = useMemo(
    () => b.posts.find((p) => toSlug(p.title) === slug),
    [slug, b.posts]
  )

  const related = useMemo(
    () => post ? b.posts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3) : [],
    [post, b.posts]
  )

  if (!post) {
    return (
      <main className="overflow-x-hidden min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-lg)' }}>Artículo no encontrado.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#EB3D26] font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>
        </div>
      </main>
    )
  }

  const img = IMGS[post.id % IMGS.length]

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO IMAGE ──────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-[#2B2B2B]" style={{ maxHeight: '480px' }}>
        <img src={img} alt={post.title}
          className="w-full h-full object-cover opacity-50"
          style={{ maxHeight: '480px' }}
          onError={(e) => { e.currentTarget.style.opacity = '0' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(43,43,43,1) 15%, rgba(43,43,43,0.4) 100%)' }} />

        {/* Back link */}
        <div className="absolute top-6 left-0 right-0 max-w-4xl mx-auto px-4 md:px-8">
          <Link to="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors group"
            style={{ fontSize: 'var(--text-xs)' }}>
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Volver al blog
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 md:px-8 pb-10">
          <motion.div
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.div variants={fadeUp}>
              <CatBadge category={post.category} label={post.categoryLabel} />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-white font-black"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}
            >
              {post.title}
            </motion.h1>
            <motion.div variants={fadeUp} className="flex items-center gap-4 text-white/50" style={{ fontSize: 'var(--text-xs)' }}>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime} min de lectura</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── ARTICLE BODY ────────────────────────────── */}
      <section className="bg-white dark:bg-[#0A0A0A] py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Intro / excerpt */}
            <motion.p
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-[#E0E0E0] font-semibold"
              style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8', borderLeft: '3px solid #EB3D26', paddingLeft: '1.25rem' }}
            >
              {post.excerpt}
            </motion.p>

            <motion.div variants={fadeUp} className="h-px bg-[#F0F0F0] dark:bg-white/8" />

            {/* Placeholder body */}
            <motion.div variants={fadeUp} className="space-y-5 text-[#4A4A4A] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: '1.85' }}>
              <p>
                En el entorno empresarial colombiano, mantenerse al día con las obligaciones normativas y los procesos operativos es un reto constante. Las empresas que logran integrar sus operaciones en un solo sistema reducen errores, ahorran tiempo y toman mejores decisiones.
              </p>
              <p>
                SYSCOM ha acompañado durante más de 40 años a empresas de diferentes sectores en Colombia, entendiendo las necesidades específicas de cada industria. Nuestros módulos están diseñados para trabajar en conjunto y darte control total sobre tu negocio.
              </p>
              <h2 className="text-[#2B2B2B] dark:text-white font-black pt-4"
                style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
                ¿Por qué es importante actuar ahora?
              </h2>
              <p>
                La digitalización de los procesos empresariales ya no es opcional. Las exigencias de la DIAN, el Ministerio de Transporte y otros entes reguladores requieren que las empresas tengan sistemas confiables y actualizados.
              </p>
              <p>
                Contar con un software especializado no solo garantiza el cumplimiento normativo, sino que también mejora la eficiencia operativa, reduce costos y da visibilidad en tiempo real sobre el estado del negocio.
              </p>
              <h2 className="text-[#2B2B2B] dark:text-white font-black pt-4"
                style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
                Próximos pasos
              </h2>
              <p>
                Si quieres conocer cómo SYSCOM puede ayudar a tu empresa, agenda una demostración personalizada. Nuestro equipo te mostrará cómo el sistema se adapta a tu operación específica, sin compromisos.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-4">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0opR77BM4HZuGTkYDqWCFBpzH8RY2GdNAcY29Y-gc9qRDw-uhYwU9OUjZdUD0FChiXP06wFKas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
                style={{ fontSize: 'var(--text-sm)', padding: '12px 28px', borderRadius: 'var(--radius-md)' }}
              >
                Agendar demostración <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED POSTS ───────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#F7F7F7] dark:bg-[#141414] py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-xl)', letterSpacing: 'var(--ls-tight)' }}
            >
              Artículos relacionados
            </motion.h2>
            <div className={`grid gap-5 ${related.length === 1 ? 'grid-cols-1 max-w-sm' : related.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'}`}>
              {related.map((r) => <RelatedCard key={r.id} post={r} />)}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
