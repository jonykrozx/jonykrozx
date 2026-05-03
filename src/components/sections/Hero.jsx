import { motion } from 'framer-motion'
import { fadeUp, fadeIn, stagger, ease } from '../../lib/motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #EB3D26 0%, rgba(235,61,38,0) 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center min-h-[90vh]">
        {/* Left */}
        <motion.div
          className="space-y-7"
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-white border border-white/25 bg-white/8 font-medium"
            style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            Software Empresarial
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, var(--text-5xl))',
              fontWeight: 900,
              letterSpacing: 'var(--ls-tight)',
              lineHeight: 'var(--lh-tight)',
            }}
          >
            CONTROL TOTAL DE TU EMPRESA CON UN SISTEMA DISEÑADO PARA TU OPERACIÓN
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/75 max-w-lg" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)' }}>
            Maneja tu flota, administra tu contabilidad, cumple con la normativa vigente en Colombia y optimiza todos tus procesos administrativos y financieros.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-[#EB3D26] font-bold hover:bg-[#F7F7F7] active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-md)', padding: '14px 32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}
            >
              Hablar con un asesor
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="flex gap-2 items-center pt-2">
            <span className="w-5 h-1.5 bg-white rounded-full" />
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
