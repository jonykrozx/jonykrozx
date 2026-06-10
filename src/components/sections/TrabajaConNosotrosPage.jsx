import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, MapPin, Clock, CheckCircle, Send, Paperclip, X } from 'lucide-react'
import { DarkVeil } from '../ui/DarkVeil'
import { fadeUp, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const APPLY_EMAIL = 'gestionhumana@syscom.com.co'

/* ─── Shared input styles ─────────────────────────── */
const inputCls = `w-full bg-white dark:bg-white/5 border border-[#DEDEDE] dark:border-white/10 text-[#2B2B2B] dark:text-white placeholder-[#AEAEAE] dark:placeholder-white/30 focus:outline-none focus:border-[#EB3D26] focus:ring-1 focus:ring-[#EB3D26]/30 transition-all duration-200`
const inputStyle = { fontSize: 'var(--text-sm)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }
const labelCls = `block text-[#4D4D4D] dark:text-white/70 font-medium mb-1.5`
const labelStyle = { fontSize: 'var(--text-xs)' }

function Field({ label, required, children }) {
  return (
    <div>
      <label className={labelCls} style={labelStyle}>
        {label}{required && <span className="text-[#EB3D26] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   BANNER
══════════════════════════════════════════════════ */
function Banner({ w }) {
  const b = w.banner
  return (
    <section className="bg-[#2B2B2B] py-20 relative overflow-hidden">
      <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} scanlineFrequency={0} warpAmount={0} resolutionScale={1} style={{ filter: 'hue-rotate(148deg) saturate(0.7)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-6">
          <Link to="/nosotros"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            style={{ fontSize: 'var(--text-sm)' }}>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            {w.back}
          </Link>
        </motion.div>
        <motion.div variants={stagger(0.12, 0.05)} initial="hidden" animate="show" className="max-w-3xl space-y-5">
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 text-white/60 border border-white/15 bg-white/5 font-medium uppercase tracking-[0.15em]"
              style={{ fontSize: 'var(--text-xs)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#94D1CA]" />
              {b.eyebrow}
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-white font-black" style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
            {b.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70" style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}>
            {b.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-3 border-l-2 border-[#94D1CA] pl-4">
            <p className="text-[#94D1CA] font-medium" style={{ fontSize: 'var(--text-sm)' }}>{b.tagline}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   VACANTE (accordion item)
══════════════════════════════════════════════════ */
function VacanteCard({ item, labels, isOpen, onToggle, onApply, variants }) {
  return (
    <motion.div variants={variants}
      className="bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 overflow-hidden"
      style={{ borderRadius: 'var(--radius-xl)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-[#F7F7F7] dark:hover:bg-white/5 transition-colors duration-200"
      >
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-lg)' }}>{item.title}</h3>
            <span className="text-[#EB3D26] bg-[#EB3D26]/10 font-bold uppercase tracking-[0.1em]" style={{ fontSize: '10px', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
              {item.area}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{item.type}</span>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#AEAEAE] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#EB3D26]' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-4 border-t border-[#F0F0F0] dark:border-white/8 space-y-5">
              <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                {item.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-[#2B2B2B] dark:text-white font-bold uppercase tracking-[0.1em]" style={{ fontSize: 'var(--text-xs)' }}>
                    {labels.requirements}
                  </h4>
                  <ul className="space-y-1.5">
                    {item.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#94D1CA]/15 flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: 'var(--radius-sm)' }}>
                          <CheckCircle className="w-2.5 h-2.5 text-[#3D8B87]" />
                        </div>
                        <span className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[#2B2B2B] dark:text-white font-bold uppercase tracking-[0.1em]" style={{ fontSize: 'var(--text-xs)' }}>
                    {labels.responsibilities}
                  </h4>
                  <ul className="space-y-1.5">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: 'var(--radius-sm)' }}>
                          <CheckCircle className="w-2.5 h-2.5 text-[#EB3D26]" />
                        </div>
                        <span className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => onApply(item.title)}
                className="inline-flex items-center gap-2 bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200"
                style={{ fontSize: 'var(--text-sm)', padding: '10px 20px', borderRadius: 'var(--radius-md)' }}
              >
                {labels.apply} <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════
   VACANTES
══════════════════════════════════════════════════ */
function Vacantes({ w, openIndex, setOpenIndex, onApply }) {
  const v = w.vacantes
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141414] py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10">
        <motion.div
          className="text-center space-y-4"
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]" style={{ fontSize: 'var(--text-xs)' }}>
            {v.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
            {v.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {v.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-4"
        >
          {v.items.map((item, i) => (
            <VacanteCard
              key={item.title}
              item={item}
              labels={v.labels}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              onApply={onApply}
              variants={fadeUp}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   FORMULARIO DE POSTULACIÓN
══════════════════════════════════════════════════ */
function ApplicationForm({ w, selectedVacante }) {
  const fm = w.formulario
  const f = fm.fields
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', vacante: '', mensaje: '', archivo: null })
  const [sent, setSent] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (selectedVacante) setForm((p) => ({ ...p, vacante: selectedVacante }))
  }, [selectedVacante])

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Postulación - ${form.vacante || f.vacanteOpts[f.vacanteOpts.length - 1]}`)
    const archivoLine = form.archivo ? `\nHoja de vida adjunta: ${form.archivo.name} (${f.archivoNote})` : ''
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.correo}\nTeléfono: ${form.telefono}\nVacante de interés: ${form.vacante}${archivoLine}\n\nMensaje:\n${form.mensaje}`
    )
    window.location.href = `mailto:${APPLY_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="w-16 h-16 bg-[#2E9E6B]/12 flex items-center justify-center" style={{ borderRadius: '50%' }}>
        <CheckCircle className="w-8 h-8 text-[#2E9E6B]" />
      </div>
      <p className="text-[#2B2B2B] dark:text-white font-semibold" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>{fm.confirm}</p>
      <button onClick={() => setSent(false)} className="text-[#EB3D26] font-medium hover:underline" style={{ fontSize: 'var(--text-sm)' }}>
        {fm.cta}
      </button>
    </motion.div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={f.nombre} required>
          <input required value={form.nombre} onChange={(e) => set('nombre', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.nombre} />
        </Field>
        <Field label={f.correo} required>
          <input required type="email" value={form.correo} onChange={(e) => set('correo', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.correo} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={f.telefono} required>
          <input required value={form.telefono} onChange={(e) => set('telefono', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.telefono} />
        </Field>
        <Field label={f.vacante}>
          <select value={form.vacante} onChange={(e) => set('vacante', e.target.value)} className={inputCls} style={inputStyle}>
            <option value="">{f.vacante}</option>
            {f.vacanteOpts.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <Field label={f.mensaje} required>
        <textarea required rows={4} value={form.mensaje} onChange={(e) => set('mensaje', e.target.value)} className={`${inputCls} resize-none`} style={inputStyle} placeholder={f.mensaje} />
      </Field>
      <Field label={f.archivo}>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => set('archivo', e.target.files?.[0] || null)}
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-[#DEDEDE] dark:border-white/10 hover:border-[#EB3D26] text-[#2B2B2B] dark:text-white font-medium transition-all duration-200"
            style={{ fontSize: 'var(--text-sm)', padding: '10px 16px', borderRadius: 'var(--radius-md)' }}
          >
            <Paperclip className="w-4 h-4 text-[#EB3D26]" />
            {form.archivo ? f.archivoChange : f.archivoBtn}
          </button>
          {form.archivo ? (
            <span className="inline-flex items-center gap-2 text-[#4D4D4D] dark:text-white/70" style={{ fontSize: 'var(--text-xs)' }}>
              {form.archivo.name}
              <button type="button" onClick={() => { set('archivo', null); if (fileInputRef.current) fileInputRef.current.value = '' }} className="text-[#AEAEAE] hover:text-[#EB3D26] transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ) : (
            <span className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>{f.archivoHint}</span>
          )}
        </div>
        {form.archivo && (
          <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5', marginTop: '6px' }}>
            {f.archivoNote}
          </p>
        )}
      </Field>
      <button type="submit" className="w-full bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200" style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}>
        {fm.cta}
      </button>
      <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5' }}>
        {fm.privacy}{' '}
        <Link to="/tratamiento-datos" className="text-[#EB3D26] hover:underline">{fm.privacyLink}</Link>
      </p>
    </form>
  )
}

function FormularioSection({ w, selectedVacante, sectionRef }) {
  const fm = w.formulario
  return (
    <section ref={sectionRef} className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 space-y-10">
        <motion.div
          className="text-center space-y-4"
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]" style={{ fontSize: 'var(--text-xs)' }}>
            {fm.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
            {fm.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {fm.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-[#F7F7F7] dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 p-6 md:p-8"
          style={{ borderRadius: 'var(--radius-2xl)' }}
        >
          <ApplicationForm w={w} selectedVacante={selectedVacante} />
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function TrabajaConNosotrosPage() {
  const { t } = useLang()
  const w = t.trabajaConNosotros
  const [openIndex, setOpenIndex] = useState(0)
  const [selectedVacante, setSelectedVacante] = useState('')
  const formRef = useRef(null)

  const handleApply = (title) => {
    setSelectedVacante(title)
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  return (
    <main className="overflow-x-hidden">
      <Banner w={w} />
      <Vacantes w={w} openIndex={openIndex} setOpenIndex={setOpenIndex} onApply={handleApply} />
      <FormularioSection w={w} selectedVacante={selectedVacante} sectionRef={formRef} />
    </main>
  )
}
