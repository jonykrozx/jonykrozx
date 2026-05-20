import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, ChevronLeft } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

export default function TratamientoDatosPage() {
  const { t } = useLang()
  const p = t.tratamientoDatos

  return (
    <main className="overflow-x-hidden bg-white dark:bg-[#0A0A0A]">
      {/* Header band */}
      <section className="bg-[#2B2B2B] py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <motion.div
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.div variants={fadeUp}>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors duration-150"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Volver a Contacto
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-[#94D1CA]/15 flex items-center justify-center shrink-0"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <Shield className="w-5 h-5 text-[#94D1CA]" />
              </div>
              <span
                className="text-white/50 font-bold uppercase tracking-[0.18em]"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {p.badge}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}
            >
              {p.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/40" style={{ fontSize: 'var(--text-xs)' }}>
              {p.lastUpdate}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-2">
          {p.sections.map((sec, i) => (
            <motion.div
              key={sec.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="border border-[#EFEFEF] dark:border-white/8 overflow-hidden"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              {/* Section header */}
              <div className="flex items-center gap-4 px-6 py-4 bg-[#F7F7F7] dark:bg-white/4 border-b border-[#EFEFEF] dark:border-white/8">
                <span
                  className="w-7 h-7 bg-[#EB3D26]/10 text-[#EB3D26] font-black flex items-center justify-center shrink-0"
                  style={{ borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)' }}
                >
                  {sec.number}
                </span>
                <h2
                  className="text-[#2B2B2B] dark:text-white font-bold"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  {sec.title}
                </h2>
              </div>

              {/* Section body */}
              <div className="px-6 py-5 space-y-4">
                <p
                  className="text-[#6B6B6B] dark:text-[#AEAEAE]"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}
                >
                  {sec.content}
                </p>

                {/* Bullet list */}
                {sec.items && (
                  <ul className="space-y-2">
                    {sec.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26] shrink-0 mt-1.5" />
                        <span
                          className="text-[#4D4D4D] dark:text-[#AEAEAE]"
                          style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact info */}
                {sec.contact && (
                  <div className="space-y-2">
                    {sec.contactLabel && (
                      <p className="text-[#4D4D4D] dark:text-white/70 font-medium" style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {sec.contactLabel}
                      </p>
                    )}
                    <div className="space-y-1.5">
                      {sec.contact.map((c, j) => (
                        <div key={j} className="flex items-center gap-2">
                          {c.label.toLowerCase().includes('correo') || c.label.toLowerCase().includes('email') || c.label.toLowerCase().includes('mail')
                            ? <Mail className="w-3.5 h-3.5 text-[#EB3D26] shrink-0" />
                            : c.label.toLowerCase().includes('tel') || c.label.toLowerCase().includes('phone')
                            ? <Phone className="w-3.5 h-3.5 text-[#EB3D26] shrink-0" />
                            : <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26] shrink-0 ml-1" />
                          }
                          <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                            <span className="font-medium">{c.label}:</span> {c.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
