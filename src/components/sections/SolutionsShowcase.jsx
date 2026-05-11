import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Truck, Factory, Building2, ParkingSquare, Fuel, Hotel, Check } from 'lucide-react'
import { useLang } from '../../lib/LanguageContext'
import { ease } from '../../lib/motion'

const iconBgs = [
  { bg: 'linear-gradient(135deg, #EB3D26, #c73320)', shadow: 'rgba(235,61,38,0.35)', color: '#EB3D26' },
  { bg: 'linear-gradient(135deg, #4A6FC4, #3558B0)', shadow: 'rgba(74,111,196,0.35)', color: '#4A6FC4' },
  { bg: 'linear-gradient(135deg, #7C6FC4, #6358B0)', shadow: 'rgba(124,111,196,0.35)', color: '#7C6FC4' },
  { bg: 'linear-gradient(135deg, #2E9E6B, #1e7a52)', shadow: 'rgba(46,158,107,0.35)', color: '#2E9E6B' },
  { bg: 'linear-gradient(135deg, #D97706, #b86005)', shadow: 'rgba(217,119,6,0.35)', color: '#D97706' },
  { bg: 'linear-gradient(135deg, #94D1CA, #72bbb3)', shadow: 'rgba(148,209,202,0.35)', color: '#4E9E97' },
]

const IconComponents = [Truck, Factory, Building2, ParkingSquare, Fuel, Hotel]

export default function SolutionsShowcase() {
  const { t } = useLang()
  const s = t.solutions
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const goTo = (idx) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setActive(c => (c + 1) % s.items.length)
    }, 4000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1)
      setActive(c => (c + 1) % s.items.length)
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [s.items.length])

  const solution = s.items[active]
  const style = iconBgs[active]

  return (
    <section className="bg-[#F7F7F7] dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-[#2B2B2B] dark:text-white font-bold"
            style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
          >
            {s.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-stretch">

          {/* Left: tab list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {s.items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => goTo(i)}
                className={`flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 shrink-0 lg:shrink cursor-pointer ${
                  active === i
                    ? 'bg-white dark:bg-white/8 shadow-md'
                    : 'hover:bg-white/60 dark:hover:bg-white/4'
                }`}
                style={{ borderRadius: 'var(--radius-lg)', border: active === i ? '1px solid #DEDEDE' : '1px solid transparent' }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    background: active === i ? iconBgs[i].bg : '#E5E5E5',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: active === i ? `0 4px 12px ${iconBgs[i].shadow}` : 'none',
                  }}
                >
                  {(() => { const Icon = IconComponents[i]; return <Icon className="w-4 h-4" style={{ color: active === i ? 'white' : '#AEAEAE' }} strokeWidth={1.75} /> })()}
                </div>
                <span
                  className={`font-semibold hidden lg:block ${active === i ? 'text-[#2B2B2B] dark:text-white' : 'text-[#6B6B6B] dark:text-white/50'}`}
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  {item.title}
                </span>
                {active === i && <ChevronRight className="w-4 h-4 text-[#EB3D26] ml-auto hidden lg:block shrink-0" />}
              </button>
            ))}

            {/* Progress bar */}
            <div className="hidden lg:block mt-4 h-0.5 bg-[#DEDEDE] dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#EB3D26] rounded-full"
                key={active}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'linear' }}
              />
            </div>
          </div>

          {/* Right: animated detail panel */}
          <div
            className="relative bg-white dark:bg-white/4 border border-[#DEDEDE] dark:border-white/8 overflow-hidden"
            style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', minHeight: '340px' }}
          >
            {/* Accent gradient bg */}
            <motion.div
              key={active + '-bg'}
              className="absolute inset-0 opacity-[0.04]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              transition={{ duration: 0.5 }}
              style={{ background: style.bg }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease } }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40, transition: { duration: 0.25, ease } }}
                className="relative z-10 p-8 h-full flex flex-col lg:flex-row gap-8"
              >
                {/* Left content */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white shrink-0"
                      style={{ background: style.bg, borderRadius: 'var(--radius-lg)', boxShadow: `0 6px 20px ${style.shadow}` }}
                    >
                      {(() => { const Icon = IconComponents[active]; return <Icon className="w-7 h-7 text-white" strokeWidth={1.5} /> })()}
                    </div>
                    <div>
                      <h3 className="text-[#2B2B2B] dark:text-white font-black" style={{ fontSize: 'var(--text-2xl)', letterSpacing: 'var(--ls-tight)' }}>
                        {solution.title}
                      </h3>
                      <p className="text-[#6B6B6B] dark:text-white/50" style={{ fontSize: 'var(--text-sm)' }}>
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 flex items-center justify-center shrink-0"
                          style={{ background: `${style.shadow.replace('0.35', '0.12')}`, borderRadius: 'var(--radius-sm)' }}
                        >
                          <Check className="w-3 h-3" style={{ color: style.color }} strokeWidth={2.5} />
                        </div>
                        <span className="text-[#4D4D4D] dark:text-white/70 font-medium" style={{ fontSize: 'var(--text-sm)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                    style={{ fontSize: 'var(--text-sm)', color: '#EB3D26' }}
                  >
                    {s.cta}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Right: big icon */}
                <div className="hidden lg:flex items-center justify-center shrink-0 select-none">
                  {(() => {
                    const Icon = IconComponents[active]
                    return (
                      <Icon
                        style={{
                          width: '9rem',
                          height: '9rem',
                          color: style.color,
                          opacity: 0.12,
                          strokeWidth: 1,
                        }}
                      />
                    )
                  })()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
