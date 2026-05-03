const testimonials = [
  {
    name: 'María Del Rosario Rueda',
    role: 'Contadora Pública',
    company: 'Empresa de Transporte',
    quote: 'Desde que usamos SYSCOM, identificamos y corregimos errores en facturación y mejoramos significativamente el control financiero de nuestra empresa.',
    initials: 'MR',
  },
  {
    name: 'María Del Pilar Cuervo',
    role: 'Contadora Pública',
    company: 'Industria Nacional',
    quote: 'Con SYSCOM logramos automatizar procesos clave y reducir significativamente los errores operativos. El sistema se adaptó perfectamente a nuestra operación.',
    initials: 'MC',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F7] dark:bg-[#2B2B2B] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2
            className="text-[#2B2B2B] dark:text-white font-bold"
            style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
          >
            EMPRESAS QUE YA ESTÁN CRECIENDO CON SYSCOM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 relative overflow-hidden group hover:border-[#EB3D26]/25 transition-all"
              style={{
                padding: '32px',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Large decorative quote */}
              <div
                className="absolute top-4 right-6 text-[#EB3D26]/6 group-hover:text-[#EB3D26]/10 transition-colors select-none font-black leading-none"
                style={{ fontSize: '96px' }}
              >
                "
              </div>

              {/* Avatar + info */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 bg-[#EB3D26] flex items-center justify-center shrink-0"
                  style={{ borderRadius: 'var(--radius-pill)' }}
                >
                  <span className="text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-sm)' }}>
                    {t.name}
                  </p>
                  <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>{t.role}</p>
                  <p className="text-[#EB3D26] font-medium mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>{t.company}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-[#2E9E6B] text-[#2E9E6B]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#4D4D4D] dark:text-[#AEAEAE] italic relative z-10"
                style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}
              >
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
