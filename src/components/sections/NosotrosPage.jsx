import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Target, Eye, Clock, Zap, Globe, Shield, Users, Cpu, Layers, ArrowRight, FileText, ShieldCheck, Lock } from 'lucide-react'
import { DarkVeil } from '../ui/DarkVeil'
import { fadeUp, fadeIn, slideLeft, slideRight, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const MotionLink = motion(Link)

const IMG_QUIENES   = '/images/sc-icon.webp'
const IMG_MISION    = '/images/nosotros-mision.webp'
const IMG_VISION    = '/images/nosotros-vision.webp'
const IMG_TRAYECT   = '/images/nosotros-trayectoria.webp'
const IMG_EXPERIENCIA = '/images/nosotros-experiencia.webp'
const IMG_SECTORES  = '/images/nosotros-sectores.webp'
const IMG_TRABAJO   = '/images/nosotros-equipo.webp'
const IMG_POLITICAS = '/images/nosotros-politicas.webp'

const DIFERENCIAL_ICONS = [Users, Cpu, Layers, Zap, Globe, Shield]
const POLITICA_ICONS = [FileText, ShieldCheck, Lock]

/* ─── Image placeholder ─────────────────────────── */
function ImgBlock({ src, alt, ratio = '4/3', fit = 'cover' }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ borderRadius: 'var(--radius-xl)', aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${fit === 'contain' ? 'object-contain p-8' : 'object-cover'}`}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'flex'
        }}
      />
      <div
        className="absolute inset-0 bg-[#F2F2F2] dark:bg-white/5 border-2 border-dashed border-[#DEDEDE] dark:border-white/10 items-center justify-center"
        style={{ display: 'none' }}
      >
        <svg className="w-12 h-12 text-[#DEDEDE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  )
}

/* ─── Eyebrow label ─────────────────────────────── */
function Eyebrow({ text, color = '#EB3D26' }) {
  return (
    <motion.p
      variants={fadeUp}
      className="font-bold uppercase tracking-[0.18em]"
      style={{ fontSize: 'var(--text-xs)', color }}
    >
      {text}
    </motion.p>
  )
}

/* ═══════════════════════════════════════════════════
   BANNER
══════════════════════════════════════════════════ */
function Banner({ n }) {
  return (
    <section className="bg-[#2B2B2B] py-20 relative overflow-hidden">
      <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} scanlineFrequency={0} warpAmount={0} resolutionScale={1} style={{ filter: 'hue-rotate(148deg) saturate(0.7)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={stagger(0.12, 0.05)}
            initial="hidden"
            animate="show"
            className="space-y-5"
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 text-white/60 border border-white/15 bg-white/5 font-medium uppercase tracking-[0.15em]"
                style={{ fontSize: 'var(--text-xs)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#94D1CA]" />
                Nosotros
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-white font-black"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}
            >
              {n.banner.title}
            </motion.h1>
          </motion.div>

          <motion.div
            variants={stagger(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-white/70"
              style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}
            >
              {n.banner.subtitle}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 border-l-2 border-[#94D1CA] pl-4"
            >
              <p className="text-[#94D1CA] font-medium" style={{ fontSize: 'var(--text-sm)' }}>
                {n.banner.tagline}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   QUIÉNES SOMOS
══════════════════════════════════════════════════ */
function QuienesSomos({ n }) {
  const q = n.quienes
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <ImgBlock src={IMG_QUIENES} alt="Quiénes somos" fit="contain" />
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Eyebrow text={q.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {q.title}
            </motion.h2>
            {[q.p1, q.p2, q.p3, q.p4].map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[#6B6B6B] dark:text-[#AEAEAE]"
                style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   MISIÓN + VISIÓN (alternados)
══════════════════════════════════════════════════ */
function MisionVision({ n }) {
  const items = [
    { data: n.mision, icon: Target, img: IMG_MISION, flip: false, bg: 'bg-[#F2F2F2] dark:bg-[#141414]' },
    { data: n.vision, icon: Eye,    img: IMG_VISION,  flip: true,  bg: 'bg-white dark:bg-[#0A0A0A]' },
  ]
  return (
    <>
      {items.map(({ data, icon: Icon, img, flip, bg }) => (
        <section key={data.title} className={`${bg} py-20`}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className={`grid grid-cols-1 ${flip ? 'lg:grid-cols-[45fr_55fr]' : 'lg:grid-cols-[55fr_45fr]'} gap-12 lg:gap-16 items-center`}>
              <motion.div
                className={`space-y-5 ${flip ? 'order-1 lg:order-2' : ''}`}
                variants={stagger(0.1, 0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                <Eyebrow text={data.eyebrow} />
                <motion.div variants={fadeUp} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-[#EB3D26]/10 flex items-center justify-center shrink-0"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <Icon className="w-5 h-5 text-[#EB3D26]" />
                  </div>
                  <h2
                    className="text-[#2B2B2B] dark:text-white font-black"
                    style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
                  >
                    {data.title}
                  </h2>
                </motion.div>
                <motion.p
                  variants={fadeUp}
                  className="text-[#6B6B6B] dark:text-[#AEAEAE]"
                  style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
                >
                  {data.text}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: flip ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease }}
                className={flip ? 'order-2 lg:order-1' : ''}
              >
                <ImgBlock src={img} alt={data.title} />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

/* ═══════════════════════════════════════════════════
   TRAYECTORIA
══════════════════════════════════════════════════ */
function Trayectoria({ n }) {
  const tr = n.trayectoria
  const paras = [tr.p1, tr.p2, tr.p3, tr.p4]
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-28"
          >
            <ImgBlock src={IMG_TRAYECT} alt="Nuestra trayectoria" ratio="3/4" />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={stagger(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Eyebrow text={tr.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {tr.title}
            </motion.h2>
            {paras.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4">
                <div className="shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#EB3D26]" />
                </div>
                <p
                  className="text-[#6B6B6B] dark:text-[#AEAEAE]"
                  style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
                >
                  {p}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   EXPERIENCIA
══════════════════════════════════════════════════ */
function Experiencia({ n }) {
  const e = n.experiencia
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-5 order-2 lg:order-1"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Eyebrow text={e.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {e.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {e.intro}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#4D4D4D] dark:text-white/80 font-medium" style={{ fontSize: 'var(--text-sm)' }}>
              {e.listIntro}
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-2.5">
              {e.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: 'var(--radius-sm)' }}>
                    <Check className="w-3 h-3 text-[#EB3D26]" strokeWidth={3} />
                  </div>
                  <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {e.outro}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="order-1 lg:order-2"
          >
            <ImgBlock src={IMG_EXPERIENCIA} alt="Experiencia SYSCOM" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTORES
══════════════════════════════════════════════════ */
function Sectores({ n }) {
  const s = n.sectores
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <ImgBlock src={IMG_SECTORES} alt="Sectores atendidos" />
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Eyebrow text={s.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {s.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {s.intro}
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-2">
              {s.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26] shrink-0" />
                  <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <div className="absolute inset-0 bg-[#EB3D26]" style={{ opacity: 0.06 }} />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EB3D26]" />
              <div className="relative px-5 py-4">
                <p className="text-[#2B2B2B] dark:text-white font-semibold" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                  {s.callout}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   DIFERENCIALES
══════════════════════════════════════════════════ */
function Diferenciales({ n }) {
  const d = n.diferenciales
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <motion.div
          className="text-center space-y-3"
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Eyebrow text={d.eyebrow} />
          <motion.h2
            variants={fadeUp}
            className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
          >
            {d.title}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {d.items.map((item, i) => {
            const Icon = DIFERENCIAL_ICONS[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-[#F7F7F7] dark:bg-white/5 border border-[#EFEFEF] dark:border-white/8 hover:border-[#EB3D26]/30 hover:shadow-lg transition-all duration-300 p-6 space-y-3"
                style={{ borderRadius: 'var(--radius-xl)' }}
              >
                <div
                  className="w-10 h-10 bg-[#EB3D26]/10 group-hover:bg-[#EB3D26]/18 flex items-center justify-center transition-colors duration-300"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <Icon className="w-5 h-5 text-[#EB3D26]" />
                </div>
                <h3 className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative overflow-hidden text-center"
          style={{ borderRadius: 'var(--radius-xl)' }}
        >
          <div className="absolute inset-0 bg-[#EB3D26]" style={{ opacity: 0.06 }} />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EB3D26]" />
          <div className="relative px-8 py-7">
            <p
              className="text-[#2B2B2B] dark:text-white font-semibold"
              style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {d.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   TRABAJA CON NOSOTROS
══════════════════════════════════════════════════ */
function TrabajaConNosotros({ n }) {
  const w = n.trabajo
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <ImgBlock src={IMG_TRABAJO} alt="Trabaja con nosotros" />
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Eyebrow text={w.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {w.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {w.text}
            </motion.p>
            <MotionLink
              variants={fadeUp}
              to="/trabaja-con-nosotros"
              className="inline-flex items-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
              style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}
            >
              {w.cta} <ArrowRight className="w-4 h-4" />
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   NUESTRAS POLÍTICAS
══════════════════════════════════════════════════ */
function Politicas({ n }) {
  const p = n.politicas
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <ImgBlock src={IMG_POLITICAS} alt="Nuestras políticas" />
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Eyebrow text={p.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              {p.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              {p.text}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              {p.items.map((item, i) => {
                const Icon = POLITICA_ICONS[i]
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group inline-flex items-center gap-2.5 bg-[#F7F7F7] dark:bg-white/5 hover:bg-[#EB3D26]/8 border border-[#EFEFEF] dark:border-white/8 hover:border-[#EB3D26]/30 font-semibold text-[#2B2B2B] dark:text-white transition-all duration-200"
                    style={{ fontSize: 'var(--text-sm)', padding: '10px 18px', borderRadius: 'var(--radius-md)' }}
                  >
                    <Icon className="w-4 h-4 text-[#EB3D26]" />
                    {item.label}
                  </Link>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function NosotrosPage() {
  const { t } = useLang()
  const n = t.nosotros
  return (
    <main className="overflow-x-hidden">
      <Banner n={n} />
      <QuienesSomos n={n} />
      <MisionVision n={n} />
      <Trayectoria n={n} />
      <Experiencia n={n} />
      <Sectores n={n} />
      <Diferenciales n={n} />
      <TrabajaConNosotros n={n} />
      <Politicas n={n} />
    </main>
  )
}
