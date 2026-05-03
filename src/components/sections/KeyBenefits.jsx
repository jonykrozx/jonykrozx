import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/motion'

const benefits = [
  'Cumple con la DIAN y RNDC sin complicaciones',
  'Licencia vitalicia con servicios de soporte y actualización',
  'Control total de tu operación en tiempo real',
  'Adaptado a empresas de transporte de carga y otros sectores',
]

export default function KeyBenefits() {
  return (
    <section className="bg-white dark:bg-[#1A1A1A]" style={{ paddingTop: '35px', paddingBottom: '35px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {benefits.map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-[#2B2B2B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-snug)' }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
