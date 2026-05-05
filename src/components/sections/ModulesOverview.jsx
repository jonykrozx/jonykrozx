import { motion } from 'framer-motion'
import { useLang } from '../../lib/LanguageContext'
import BlurText from '../ui/BlurText'
import { fadeUp, scaleIn, slideLeft, slideRight, stagger, ease } from '../../lib/motion'

export default function ModulesOverview() {
  const { t } = useLang()
  const m = t.modules
  return (
    <section className="bg-white dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-20 items-center">

          {/* Left: decorative composition */}
          <motion.div
            className="relative h-80 hidden lg:block"
            variants={stagger(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              variants={slideLeft}
              src="/images/138148.jpg"
              alt="Gestión contable con SYSCOM"
              className="absolute top-0 left-0 w-56 h-56 object-cover"
              style={{ borderRadius: 'var(--radius-xl)' }}
            />
            <motion.div variants={fadeUp} className="absolute top-3 left-3 w-56 h-56 bg-[#94D1CA]/10 border border-[#94D1CA]/20" style={{ borderRadius: 'var(--radius-xl)' }} />
            <motion.div variants={slideRight} className="absolute bottom-0 right-8 w-44 h-44" style={{ background: 'linear-gradient(135deg, #EB3D26, #c73320)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }} />
            <motion.div variants={fadeUp} className="absolute bottom-3 right-5 w-44 h-44 bg-[#EB3D26]/10 border border-[#EB3D26]/20" style={{ borderRadius: 'var(--radius-xl)' }} />
            <motion.div
              variants={scaleIn}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#2B2B2B] z-10 px-5 py-4 border border-[#DEDEDE] dark:border-white/10"
              style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }}
            >
              <p className="text-[#AEAEAE] font-medium mb-1" style={{ fontSize: 'var(--text-xs)' }}>{m.badge}</p>
              <p className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)' }}>15+</p>
              <p className="text-[#2E9E6B] font-semibold mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>{m.badgeSub}</p>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div className="space-y-6">
            <div>
              <BlurText
                text={m.title}
                as="h2"
                animateBy="words"
                direction="top"
                delay={80}
                stepDuration={0.4}
                className="text-[#2B2B2B] dark:text-white font-bold"
                style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
              />
              <BlurText
                text={m.subtitle}
                as="p"
                animateBy="words"
                direction="bottom"
                delay={30}
                stepDuration={0.3}
                className="text-[#6B6B6B] mt-3"
                style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {m.items.map((mod, i) => (
                <div
                  key={mod.name}
                  className="flex items-center gap-3 bg-[#F7F7F7] dark:bg-white/3 border border-[#EFEFEF] dark:border-white/5 hover:border-[#EB3D26]/25 transition-all group cursor-default"
                  style={{ padding: '12px', borderRadius: 'var(--radius-lg)' }}
                >
                  <div className="w-7 h-7 bg-[#EB3D26]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EB3D26]/18 transition-colors" style={{ borderRadius: 'var(--radius-md)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                  </div>
                  <div>
                    <BlurText
                      text={mod.name}
                      animateBy="words"
                      direction="top"
                      delay={40}
                      stepDuration={0.3}
                      threshold={0.3}
                      className="text-[#2B2B2B] dark:text-white font-semibold leading-none mb-0.5"
                      style={{ fontSize: 'var(--text-sm)' }}
                    />
                    <BlurText
                      text={mod.desc}
                      animateBy="words"
                      direction="bottom"
                      delay={30}
                      stepDuration={0.25}
                      threshold={0.3}
                      className="text-[#AEAEAE]"
                      style={{ fontSize: 'var(--text-xs)' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full bg-[#2B2B2B] dark:bg-white text-white dark:text-[#2B2B2B] font-bold hover:opacity-90 active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}
            >
              {m.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
