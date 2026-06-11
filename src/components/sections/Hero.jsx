import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ease } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -48 : 48, transition: { duration: 0.35, ease } }),
}

export default function Hero() {
  const { t } = useLang()
  const slides = t.hero.slides
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % slides.length)
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [slides.length])

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
    startTimer()
  }

  const slide = slides[current]
  const bgImage = slide.bg || '/images/hero-bg.webp'
  const gradientColor = slide.gradient || '#EB3D26'

  return (
    <section className="relative overflow-hidden h-[calc(90vh-100px)] min-h-[460px] min-[640px]:h-[calc(90vh-320px)] min-[640px]:min-h-[340px] md:h-[calc(90vh-440px)] md:min-h-[340px] lg:h-[calc(90vh-60px)]">
      {/* Background crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={bgImage}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease }}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      <motion.div
        key={gradientColor}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        style={{ background: `linear-gradient(to right, ${gradientColor} 0%, ${gradientColor}00 100%)` }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 pt-[46px] pb-24 flex flex-col lg:grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
        <div className="w-full space-y-7">
          {/* Badge placeholder — always reserves height so layout stays stable */}
          <div style={{ minHeight: '28px' }}>
            {slide.badge && (
              <span
                className="inline-flex items-center gap-2 text-white border border-white/25 bg-white/8 font-medium"
                style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                {slide.badge}
              </span>
            )}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="space-y-6"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
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
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === current ? 'bg-white w-5 h-1.5' : 'bg-white/30 w-1.5 h-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
