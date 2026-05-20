import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, stagger, ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const IMG_BANNER = '/images/transport.jpg'

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=573165267012&text=Hola%2C%20quiero%20hacer%20una%20pregunta%20acerca%20de%3A%20Escribo%20desde%20Ventas'
const PHONE_URL = 'tel:+573165267012'

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
function Banner({ c }) {
  const b = c.banner
  return (
    <section className="bg-[#2B2B2B] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #94D1CA 0%, transparent 60%)' }} />
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
                {b.eyebrow}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-white font-black"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}
            >
              {b.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70" style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}>
              {b.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-3 border-l-2 border-[#94D1CA] pl-4">
              <p className="text-[#94D1CA] font-medium" style={{ fontSize: 'var(--text-sm)' }}>{b.tagline}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="relative w-full overflow-hidden" style={{ borderRadius: 'var(--radius-xl)', aspectRatio: '4/3' }}>
              <img src={IMG_BANNER} alt="Contacto SYSCOM" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex' }} />
              <div className="absolute inset-0 bg-[#1A1A1A] border-2 border-dashed border-white/10 items-center justify-center" style={{ display: 'none' }}>
                <Phone className="w-12 h-12 text-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   ATENCIÓN INMEDIATA
══════════════════════════════════════════════════ */
function AtencionInmediata({ c }) {
  const a = c.inmediata
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]" style={{ fontSize: 'var(--text-xs)' }}>
            {a.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
            {a.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {a.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-[#25D366]/8 hover:bg-[#25D366]/15 border border-[#25D366]/25 hover:border-[#25D366]/50 transition-all duration-300 p-6"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <div className="w-12 h-12 bg-[#25D366]/15 group-hover:bg-[#25D366]/25 flex items-center justify-center transition-colors duration-300" style={{ borderRadius: 'var(--radius-lg)' }}>
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <span className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>{a.whatsapp}</span>
              <span className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>{a.whatsappDesc}</span>
            </a>
            {/* Call */}
            <a
              href={PHONE_URL}
              className="group flex flex-col items-center gap-3 bg-[#94D1CA]/8 hover:bg-[#94D1CA]/15 border border-[#94D1CA]/25 hover:border-[#94D1CA]/50 transition-all duration-300 p-6"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <div className="w-12 h-12 bg-[#94D1CA]/15 group-hover:bg-[#94D1CA]/25 flex items-center justify-center transition-colors duration-300" style={{ borderRadius: 'var(--radius-lg)' }}>
                <Phone className="w-6 h-6 text-[#94D1CA]" />
              </div>
              <span className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>{a.call}</span>
              <span className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>{a.callDesc}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Form: Contacto Comercial ──────────────────── */
function FormComercial({ tab }) {
  const f = tab.fields
  const [form, setForm] = useState({ nombre: '', empresa: '', tipoEmpresa: '', ciudad: '', telefono: '', correo: '', necesidad: '', checkDemo: false, checkContacto: false })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="w-16 h-16 bg-[#2E9E6B]/12 flex items-center justify-center" style={{ borderRadius: '50%' }}>
        <CheckCircle className="w-8 h-8 text-[#2E9E6B]" />
      </div>
      <p className="text-[#2B2B2B] dark:text-white font-semibold" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>{tab.confirm}</p>
      <button onClick={() => setSent(false)} className="text-[#EB3D26] font-medium hover:underline" style={{ fontSize: 'var(--text-sm)' }}>Enviar otra solicitud</button>
    </motion.div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={f.nombre} required><input required value={form.nombre} onChange={e => set('nombre', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.nombre} /></Field>
        <Field label={f.empresa} required><input required value={form.empresa} onChange={e => set('empresa', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.empresa} /></Field>
      </div>
      <Field label={f.tipoEmpresa}>
        <select value={form.tipoEmpresa} onChange={e => set('tipoEmpresa', e.target.value)} className={inputCls} style={inputStyle}>
          <option value="">{f.tipoEmpresa}</option>
          {f.tipoEmpresaOpts.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={f.ciudad} required><input required value={form.ciudad} onChange={e => set('ciudad', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.ciudad} /></Field>
        <Field label={f.telefono} required><input required value={form.telefono} onChange={e => set('telefono', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.telefono} /></Field>
      </div>
      <Field label={f.correo} required><input required type="email" value={form.correo} onChange={e => set('correo', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.correo} /></Field>
      <Field label={f.necesidad}><textarea rows={3} value={form.necesidad} onChange={e => set('necesidad', e.target.value)} className={`${inputCls} resize-none`} style={inputStyle} placeholder={f.necesidad} /></Field>
      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
        {[['checkDemo', f.checkDemo], ['checkContacto', f.checkContacto]].map(([k, label]) => (
          <label key={k} className="flex items-center gap-2.5 cursor-pointer">
            <input type="checkbox" checked={form[k]} onChange={e => set(k, e.target.checked)}
              className="w-4 h-4 accent-[#EB3D26] cursor-pointer" />
            <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>{label}</span>
          </label>
        ))}
      </div>
      <button type="submit" className="w-full bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200" style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}>
        {tab.cta}
      </button>
    </form>
  )
}

/* ─── Form: PQRS ───────────────────────────────── */
function FormPQRS({ tab }) {
  const f = tab.fields
  const [form, setForm] = useState({ nombre: '', empresa: '', tipoSolicitud: '', telefono: '', correo: '', descripcion: '', archivo: null })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="w-16 h-16 bg-[#2E9E6B]/12 flex items-center justify-center" style={{ borderRadius: '50%' }}>
        <CheckCircle className="w-8 h-8 text-[#2E9E6B]" />
      </div>
      <p className="text-[#2B2B2B] dark:text-white font-semibold" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>{tab.confirm}</p>
      <button onClick={() => setSent(false)} className="text-[#EB3D26] font-medium hover:underline" style={{ fontSize: 'var(--text-sm)' }}>Enviar otra solicitud</button>
    </motion.div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={f.nombre} required><input required value={form.nombre} onChange={e => set('nombre', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.nombre} /></Field>
        <Field label={f.empresa} required><input required value={form.empresa} onChange={e => set('empresa', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.empresa} /></Field>
      </div>
      <Field label={f.tipoSolicitud}>
        <select value={form.tipoSolicitud} onChange={e => set('tipoSolicitud', e.target.value)} className={inputCls} style={inputStyle}>
          <option value="">{f.tipoSolicitud}</option>
          {f.tipoSolicitudOpts.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={f.telefono} required><input required value={form.telefono} onChange={e => set('telefono', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.telefono} /></Field>
        <Field label={f.correo} required><input required type="email" value={form.correo} onChange={e => set('correo', e.target.value)} className={inputCls} style={inputStyle} placeholder={f.correo} /></Field>
      </div>
      <Field label={f.descripcion} required><textarea required rows={4} value={form.descripcion} onChange={e => set('descripcion', e.target.value)} className={`${inputCls} resize-none`} style={inputStyle} placeholder={f.descripcion} /></Field>
      <Field label={f.archivo}>
        <input type="file" onChange={e => set('archivo', e.target.files[0])}
          className="w-full text-[#6B6B6B] dark:text-[#AEAEAE] file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#EB3D26]/10 file:text-[#EB3D26] file:font-medium file:cursor-pointer file:rounded-md hover:file:bg-[#EB3D26]/20 transition-all"
          style={{ fontSize: 'var(--text-sm)' }} />
      </Field>
      <button type="submit" className="w-full bg-[#EB3D26] hover:bg-[#d63520] active:scale-95 text-white font-bold transition-all duration-200" style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}>
        {tab.cta}
      </button>
    </form>
  )
}

const FORM_COMPONENTS = [FormComercial, FormPQRS]

/* ═══════════════════════════════════════════════════
   FORMULARIOS
══════════════════════════════════════════════════ */
function Formularios({ c }) {
  const fm = c.formularios
  const [activeTab, setActiveTab] = useState(0)

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
          className="bg-white dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-white/8 overflow-hidden"
          style={{ borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-lg)' }}
        >
          {/* Tab headers */}
          <div className="flex border-b border-[#EFEFEF] dark:border-white/8">
            {fm.tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-4 px-6 font-bold transition-all duration-200 relative ${
                  activeTab === i
                    ? 'text-[#EB3D26]'
                    : 'text-[#6B6B6B] dark:text-[#AEAEAE] hover:text-[#2B2B2B] dark:hover:text-white'
                }`}
                style={{ fontSize: 'var(--text-sm)' }}
              >
                {tab.label}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB3D26]"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-6 md:p-8 space-y-6"
            >
              <div className="space-y-1">
                <h3 className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-xl)', letterSpacing: 'var(--ls-tight)' }}>
                  {fm.tabs[activeTab].title}
                </h3>
                <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                  {fm.tabs[activeTab].desc}
                </p>
              </div>

              {activeTab === 0 ? <FormComercial tab={fm.tabs[0]} /> : <FormPQRS tab={fm.tabs[1]} />}

              {/* Privacy */}
              <div className="pt-2 space-y-1.5 border-t border-[#EFEFEF] dark:border-white/8">
                <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5' }}>
                  {fm.privacy}{' '}
                  <Link to="/tratamiento-datos" className="text-[#EB3D26] hover:underline">{fm.privacyLink}</Link>
                </p>
                <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5' }}>
                  {fm.notice}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   OFICINAS
══════════════════════════════════════════════════ */
function Oficinas({ c }) {
  const o = c.oficinas
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
          <motion.p variants={fadeUp} className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]" style={{ fontSize: 'var(--text-xs)' }}>
            {o.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}>
            {o.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-base)' }}>
            {o.subtitle}
          </motion.p>
        </motion.div>

        {/* Office cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {o.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#F7F7F7] dark:bg-white/5 border border-[#EFEFEF] dark:border-white/8 p-5 space-y-3"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <div className="w-9 h-9 bg-[#EB3D26]/10 flex items-center justify-center" style={{ borderRadius: 'var(--radius-md)' }}>
                <MapPin className="w-4 h-4 text-[#EB3D26]" />
              </div>
              <div>
                <p className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-sm)' }}>
                  {item.ciudad}
                </p>
                <p className="text-[#6B6B6B] dark:text-[#AEAEAE] mt-1" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5' }}>
                  {item.direccion}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[#AEAEAE]">
                <Clock className="w-3 h-3 shrink-0" />
                <span style={{ fontSize: 'var(--text-xs)' }}>{o.schedule}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emails */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-[#EFEFEF] dark:border-white/8 pt-10 space-y-6"
        >
          <h3 className="text-center text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)' }}>
            {o.emailTitle}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            {o.emails.map((email, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-[#AEAEAE] font-medium" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {email.label}
                </p>
                <a
                  href={`mailto:${email.value}`}
                  className="text-[#EB3D26] hover:underline font-medium flex items-center justify-center gap-1.5"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  {email.value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-[#AEAEAE]"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          {o.closing}
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function ContactoPage() {
  const { t } = useLang()
  const c = t.contacto
  return (
    <main className="overflow-x-hidden">
      <Banner c={c} />
      <AtencionInmediata c={c} />
      <Formularios c={c} />
      <Oficinas c={c} />
    </main>
  )
}
