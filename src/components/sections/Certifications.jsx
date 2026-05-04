import { useLang } from '../../lib/LanguageContext'

export default function Certifications() {
  const { t } = useLang()
  const c = t.certifications
  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2
          className="text-center text-[#2B2B2B] dark:text-white font-bold mb-3"
          style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          {c.title}
        </h2>
        <p
          className="text-center text-[#6B6B6B] mb-10 max-w-xl mx-auto"
          style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
        >
          {c.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '130px' }}>
          {/* Card 1 */}
          <a
            href="https://autofactura.syscom.com.co/AutoFactura50/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/8 bg-white/4 flex items-center gap-5 hover:border-white/15 hover:bg-white/6 transition-all group cursor-pointer"
            style={{ padding: '28px 32px', borderRadius: 'var(--radius-xl)' }}
          >
            <div className="flex flex-col items-center text-center">
              <img src="/images/autofactura-logo.png" alt="Sistema de Auto Factura" style={{ width: '212px', height: 'auto' }} />
              <p className="text-[#4D4D4D] mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>{c.card1}</p>
            </div>
          </a>

          {/* Card 2 */}
          <div
            className="flex-1 border border-white/8 bg-white/4 flex items-center gap-5 hover:border-white/15 hover:bg-white/6 transition-all group cursor-default"
            style={{ padding: '28px 32px', borderRadius: 'var(--radius-xl)' }}
          >
            <div className="flex flex-col items-center text-center">
              <img src="/images/nomina-logo.png" alt="Nómina Electrónica" style={{ width: '186px', height: 'auto' }} />
              <p className="text-[#4D4D4D] mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>{c.card2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
