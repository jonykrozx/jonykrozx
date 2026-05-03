const modules = [
  { name: 'Contabilidad', desc: 'Control financiero preciso' },
  { name: 'Nómina', desc: 'Control de empleados sin errores' },
  { name: 'Facturación electrónica', desc: 'Certificado DIAN' },
  { name: 'Inventarios', desc: 'Control de stock en tiempo real' },
  { name: 'Tesorería', desc: 'Flujo de caja y disponibilidad' },
  { name: 'Cartera', desc: 'Gestión de cobros y pagos' },
  { name: 'Activos fijos', desc: 'Control de bienes de la empresa' },
  { name: 'Presupuesto', desc: 'Planificación financiera' },
]

export default function ModulesOverview() {
  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-20 items-center">

          {/* Left: decorative composition */}
          <div className="relative h-80 hidden lg:block">
            <div
              className="absolute top-0 left-0 w-56 h-56"
              style={{
                background: 'linear-gradient(135deg, #94D1CA, #4e9e97)',
                borderRadius: 'var(--radius-xl)',
              }}
            />
            <div
              className="absolute top-3 left-3 w-56 h-56 bg-[#94D1CA]/10 border border-[#94D1CA]/20"
              style={{ borderRadius: 'var(--radius-xl)' }}
            />
            <div
              className="absolute bottom-0 right-8 w-44 h-44"
              style={{
                background: 'linear-gradient(135deg, #EB3D26, #c73320)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
              }}
            />
            <div
              className="absolute bottom-3 right-5 w-44 h-44 bg-[#EB3D26]/10 border border-[#EB3D26]/20"
              style={{ borderRadius: 'var(--radius-xl)' }}
            />

            {/* Floating badge */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#2B2B2B] z-10 px-5 py-4 border border-[#DEDEDE] dark:border-white/10"
              style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }}
            >
              <p className="text-[#AEAEAE] font-medium mb-1" style={{ fontSize: 'var(--text-xs)' }}>Módulos activos</p>
              <p
                className="text-[#2B2B2B] dark:text-white font-black"
                style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)' }}
              >
                15+
              </p>
              <p className="text-[#2E9E6B] font-semibold mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>Integrados</p>
            </div>
          </div>

          {/* Right: content */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-[#2B2B2B] dark:text-white font-bold"
                style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
              >
                TODO LO QUE NECESITAS EN UN SOLO SISTEMA
              </h2>
              <p
                className="text-[#6B6B6B] mt-3"
                style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}
              >
                Base tecnológica que soporta todas las soluciones, incluyendo transporte de carga, operación administrativa y control empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modules.map((mod) => (
                <div
                  key={mod.name}
                  className="flex items-center gap-3 bg-[#F7F7F7] dark:bg-white/3 border border-[#EFEFEF] dark:border-white/5 hover:border-[#EB3D26]/25 transition-all group cursor-default"
                  style={{ padding: '12px', borderRadius: 'var(--radius-lg)' }}
                >
                  <div
                    className="w-7 h-7 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EB3D26]/18 transition-colors"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                  </div>
                  <div>
                    <p
                      className="text-[#2B2B2B] dark:text-white font-semibold leading-none mb-0.5"
                      style={{ fontSize: 'var(--text-sm)' }}
                    >
                      {mod.name}
                    </p>
                    <p className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B] font-bold hover:opacity-90 active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}
            >
              Ver todos los módulos →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
