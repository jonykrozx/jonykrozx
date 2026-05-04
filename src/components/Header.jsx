import { Menu, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useLang } from '../lib/LanguageContext'
import { AnimatedThemeToggler } from './ui/AnimatedThemeToggler'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

function SolucionesDropdown({ items, label }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 px-3 py-2 font-medium transition-all duration-150 cursor-pointer ${
          open
            ? 'text-[#EB3D26]'
            : 'text-[#4D4D4D] dark:text-white/60 hover:text-[#EB3D26] dark:hover:text-white hover:bg-[#F7F7F7] dark:hover:bg-white/5'
        }`}
        style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 bg-white dark:bg-[#2B2B2B] border border-[#EFEFEF] dark:border-white/10 overflow-hidden"
          style={{
            width: '280px',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
            zIndex: 100,
          }}
        >
          <div style={{ padding: '8px' }}>
            {items.map((item) => (
              <a
                key={item.title}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:bg-[#F7F7F7] dark:hover:bg-white/5 transition-colors duration-100 group"
                style={{ padding: '10px 12px', borderRadius: 'var(--radius-lg)' }}
              >
                <div
                  className="shrink-0 bg-[#EB3D26]/12 group-hover:bg-[#EB3D26]/20 transition-colors"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                </div>
                <div>
                  <p className="text-[#2B2B2B] dark:text-white font-bold leading-none mb-0.5" style={{ fontSize: 'var(--text-sm)' }}>
                    {item.title}
                  </p>
                  <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggle, t } = useLang()
  const h = t.header

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#97D0CC] text-[#2B2B2B]" style={{ fontSize: 'var(--text-sm)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-9 flex items-center justify-between gap-2">
          {/* WhatsApp + phone */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#2B2B2B]/60 font-medium">{h.writeus}</span>
            <span className="text-[#25D366]"><WhatsAppIcon /></span>
            <span className="text-[#2B2B2B] font-medium tracking-wide">{h.phone}</span>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-4 text-[#2B2B2B]/60">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0opR77BM4HZuGTkYDqWCFBpzH8RY2GdNAcY29Y-gc9qRDw-uhYwU9OUjZdUD0FChiXP06wFKas" target="_blank" rel="noopener noreferrer" className="hover:text-[#2B2B2B] transition-colors duration-150">{h.scheduleDemo}</a>
          </div>

          {/* Right: corporate email + separator + theme toggle + lang toggle */}
          <div className="hidden md:flex items-center shrink-0" style={{ gap: '10px' }}>
            <a href="#" className="text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors duration-150">{h.corporateEmail}</a>
            <span className="text-[#2B2B2B]/20">|</span>
            <AnimatedThemeToggler
              variant="circle"
              duration={400}
              aria-label="Toggle theme"
              className="p-1.5 bg-black/8 hover:bg-black/15 transition-colors duration-150 cursor-pointer"
              style={{ borderRadius: 'var(--radius-md)' }}
            />
            <button
              onClick={toggle}
              className="px-2 py-1 bg-black/8 hover:bg-black/15 text-[#2B2B2B] font-bold transition-colors duration-150 cursor-pointer"
              style={{ fontSize: 'var(--text-xs)', borderRadius: 'var(--radius-md)' }}
            >
              {lang === 'es' ? 'ESP' : 'ENG'}
            </button>
          </div>

          {/* Mobile: theme + lang toggles */}
          <div className="md:hidden flex items-center gap-1.5 shrink-0">
            <AnimatedThemeToggler
              variant="circle"
              duration={400}
              aria-label="Toggle theme"
              className="p-1.5 bg-black/8 hover:bg-black/15 transition-colors duration-150 cursor-pointer"
              style={{ borderRadius: 'var(--radius-md)' }}
            />
            <button
              onClick={toggle}
              className="px-2 py-1 bg-black/8 hover:bg-black/15 text-[#2B2B2B] font-bold transition-colors duration-150 cursor-pointer"
              style={{ fontSize: 'var(--text-xs)', borderRadius: 'var(--radius-md)' }}
            >
              {lang === 'es' ? 'ESP' : 'ENG'}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className="bg-white dark:bg-[#2B2B2B] border-b border-[#DEDEDE] dark:border-white/8"
        style={{ boxShadow: 'var(--shadow-xs)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/images/logo.png"
              alt="SYSCOM Sistemas Comerciales"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#"
              className="px-3 py-2 text-[#4D4D4D] dark:text-white/60 hover:text-[#EB3D26] dark:hover:text-white hover:bg-[#F7F7F7] dark:hover:bg-white/5 transition-all duration-150 font-medium"
              style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
            >
              {h.nav.about}
            </a>
            <SolucionesDropdown items={h.solutions} label={h.nav.solutions} />
            {[h.nav.community, h.nav.contact].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-[#4D4D4D] dark:text-white/60 hover:text-[#EB3D26] dark:hover:text-white hover:bg-[#F7F7F7] dark:hover:bg-white/5 transition-all duration-150 font-medium"
                style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 text-[#4D4D4D] dark:text-white/60 hover:text-[#2B2B2B] dark:hover:text-white"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#DEDEDE] dark:border-white/8 py-4 px-4 flex flex-col gap-2 bg-white dark:bg-[#2B2B2B]">
            <p
              className="text-[#AEAEAE] uppercase tracking-[0.15em] font-bold px-3 pt-1 pb-2"
              style={{ fontSize: 'var(--text-xs)' }}
            >
              {h.nav.solutions}
            </p>
            {h.solutions.map((item) => (
              <a
                key={item.title}
                href="#"
                className="text-[#4D4D4D] dark:text-white/70 py-2 px-3 hover:bg-[#F7F7F7] dark:hover:bg-white/5 font-medium transition-colors"
                style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
              >
                {item.title}
              </a>
            ))}
            <div className="border-t border-[#EFEFEF] dark:border-white/8 my-2" />
            {[h.nav.about, h.nav.community, h.nav.contact].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#4D4D4D] dark:text-white/70 py-2 px-3 hover:bg-[#F7F7F7] dark:hover:bg-white/5 font-medium transition-colors"
                style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex justify-center bg-[#94D1CA] text-[#2B2B2B] font-bold"
              style={{ fontSize: 'var(--text-sm)', padding: '10px 20px', borderRadius: 'var(--radius-md)' }}
            >
              {h.nav.requestDemo}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
