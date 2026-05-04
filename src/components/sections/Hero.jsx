import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 56 : -56 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -56 : 56, transition: { duration: 0.4, ease } }),
}

export default function Hero() {
  const { t } = useLang()
  const slides = t.hero.slides
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #EB3D26 0%, rgba(235,61,38,0) 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 flex flex-col lg:grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center min-h-[90vh]">
        <div className="space-y-7 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="space-y-7"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {slide.badge && (
                <span
                  className="inline-flex items-center gap-2 text-white border border-white/25 bg-white/8 font-medium"
                  style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                  {slide.badge}
                </span>
              )}

              <h1
                className="text-white tracking-tight"
                style={{
                  fontSize: 'clamp(2rem, 5vw, var(--text-5xl))',
                  fontWeight: 900,
                  letterSpacing: 'var(--ls-tight)',
                  lineHeight: '1.1',
                }}
              >
                {slide.title}
              </h1>

              <p className="text-white/75 max-w-lg" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)' }}>
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={slide.ctaHref || '#'}
                  target={slide.ctaHref ? '_blank' : undefined}
                  rel={slide.ctaHref ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center bg-white text-[#EB3D26] font-bold hover:bg-[#F7F7F7] active:scale-95 transition-all"
                  style={{ fontSize: 'var(--text-md)', padding: '14px 32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}
                >
                  {slide.cta}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex gap-2 items-center pt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer border-0 bg-transparent p-0 ${
                  i === current ? 'bg-white w-5 h-1.5' : 'bg-white/30 w-1.5 h-1.5'
                }`}
                style={{ display: 'block' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
