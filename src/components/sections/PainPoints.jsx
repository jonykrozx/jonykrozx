import { motion } from 'framer-motion'
import { slideLeft, slideRight, fadeUp, stagger } from '../../lib/motion'

const painPoints = [
  'Errores en facturación y procesos contables',
  'Falta de control en operaciones (especialmente en empresas de transporte de carga)',
  'Riesgos por incumplimiento DIAN y RNDC',
  'Sistemas limitados que no se adaptan a tu negocio',
]

const PAINPOINTS_IMAGE = '/images/painpoints.jpg'

export default function PainPoints() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={slideLeft}
              className="text-[#2B2B2B] dark:text-white font-black"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              SABEMOS LO QUE ESTÁ FRENANDO TU CONTROL OPERATIVO
            </motion.h2>

            <motion.p
              variants={slideLeft}
              className="text-[#6B6B6B]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
            >
              Administrar una empresa en Colombia no es fácil. Entre la DIAN, la operación diaria y los errores manuales, pierdes tiempo, dinero y control.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-3">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 mt-0.5"
                    style={{ borderRadius: 'var(--radius-sm)' }}
                  >
                    <svg className="w-3 h-3 text-[#EB3D26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full overflow-hidden order-1 lg:order-2"
            style={{ borderRadius: 'var(--radius-xl)', aspectRatio: '4/3' }}
          >
            <img
              src={PAINPOINTS_IMAGE}
              alt="Control operativo con SYSCOM"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            <div
              className="bg-[#F7F7F7] dark:bg-white/5 border-2 border-dashed border-[#DEDEDE] dark:border-white/10 w-full h-full absolute inset-0 items-center justify-center"
              style={{ display: 'none' }}
            >
              <svg className="w-12 h-12 text-[#DEDEDE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Bottom: centered callout */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="text-center text-[#2B2B2B] dark:text-white font-semibold mt-14 max-w-3xl mx-auto"
          style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
        >
          SYSCOM integra tu operación, elimina errores y te da control total desde un solo sistema
        </motion.p>

      </div>
    </section>
  )
}
