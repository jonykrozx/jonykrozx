export default function ShowcaseImages() {
  const placeholders = [
    { label: 'Dashboard vista', desc: 'Panel de control principal' },
    { label: 'Módulo vista', desc: 'Vista de módulos del sistema' },
  ]

  return (
    <section className="bg-[#1A1A1A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p
          className="text-center text-[#4D4D4D] tracking-[0.18em] uppercase mb-10 font-medium"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          Capturas del sistema
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {placeholders.map(({ label, desc }) => (
            <div
              key={label}
              className="border-2 border-dashed border-[#EB3D26]/20 bg-[#EB3D26]/6 aspect-video flex flex-col items-center justify-center gap-3 relative overflow-hidden group hover:border-[#EB3D26]/40 transition-all"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EB3D26]/4 to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#EB3D26]/35" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/35" />
                <div className="w-2 h-2 rounded-full bg-[#2E9E6B]/35" />
              </div>
              <svg className="w-9 h-9 text-[#EB3D26]/20 group-hover:text-[#EB3D26]/35 transition-colors relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-white/25 font-semibold relative" style={{ fontSize: 'var(--text-sm)' }}>{label}</p>
              <p className="text-white/12 relative" style={{ fontSize: 'var(--text-xs)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
