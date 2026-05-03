const steps = [
  { number: '01', label: 'Solicita una demo' },
  { number: '02', label: 'Analizamos tu operación' },
  { number: '03', label: 'Implementamos el sistema' },
  { number: '04', label: 'Empieza a tener control total' },
]

export default function GetStarted() {
  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-[#EB3D26] font-bold uppercase tracking-[0.18em] mb-3"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          Proceso simple
        </p>
        <h2
          className="text-[#EB3D26] font-black mb-4"
          style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          EMPIEZA EN POCOS PASOS
        </h2>
        <p
          className="text-[#6B6B6B] max-w-md mx-auto mb-16"
          style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
        >
          Gestiona tu empresa con un sistema desarrollado con experiencia y conocimiento del mercado colombiano, cumpliendo con la normativa y optimizando tu operación.
        </p>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div
            className="absolute top-7 hidden sm:block"
            style={{
              left: 'calc(12.5% + 14px)',
              right: 'calc(12.5% + 14px)',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(235,61,38,0.25), transparent)',
            }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3 relative">
                <div
                  className="w-14 h-14 bg-[#EB3D26] flex items-center justify-center relative z-10"
                  style={{
                    borderRadius: 'var(--radius-pill)',
                    boxShadow: '0 4px 16px rgba(235,61,38,0.3)',
                  }}
                >
                  <span className="text-white font-black" style={{ fontSize: 'var(--text-base)' }}>
                    {step.number}
                  </span>
                </div>
                <p
                  className="text-[#2B2B2B] dark:text-white font-semibold text-center"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-snug)' }}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 space-y-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#94D1CA] text-[#2B2B2B] font-bold hover:bg-[#72bbb3] active:scale-95 transition-all"
            style={{
              fontSize: 'var(--text-base)',
              padding: '16px 40px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 16px rgba(148,209,202,0.35)',
            }}
          >
            Empieza a tener el control real de tu empresa
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
