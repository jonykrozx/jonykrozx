import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const icons = [
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
]

export default function TrustStats() {
  const { t } = useLang()
  const ts = t.trustStats
  return (
    <section className="bg-[#1A1A1A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-white font-black mb-10"
          style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          {ts.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ts.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#242424] border border-white/6 hover:border-white/12 transition-colors"
              style={{ padding: '28px 24px', borderRadius: 'var(--radius-xl)' }}
            >
              <div className="w-10 h-10 bg-[#EB3D26]/15 flex items-center justify-center text-[#EB3D26] mb-5" style={{ borderRadius: 'var(--radius-md)' }}>
                {icons[i]}
              </div>
              <p className="text-white font-bold mb-2" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-snug)' }}>{item.title}</p>
              <p className="text-[#6B6B6B]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
