import { motion } from 'framer-motion'
import { slideLeft, slideRight } from '../../lib/motion'

const ABOUT_IMAGE = '/images/about.jpg'

export default function AboutBanner() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Left: image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative w-full aspect-video overflow-hidden"
            style={{ borderRadius: 'var(--radius-xl)' }}
          >
            <img
              src={ABOUT_IMAGE}
              alt="SYSCOM — Software empresarial Colombia"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* Fallback: red block matching the design */}
            <div
              className="bg-[#EB3D26] w-full h-full absolute inset-0"
              style={{ display: 'none', borderRadius: 'var(--radius-xl)' }}
            />
          </motion.div>

          {/* Right: text */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p
              className="text-[#2B2B2B] dark:text-[#AEAEAE]"
              style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)' }}
            >
              En SYSCOM entendemos cómo funciona tu negocio. Nuestro conocimiento del sector y experiencia nos permite ofrecer soluciones reales para empresas en Colombia.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
