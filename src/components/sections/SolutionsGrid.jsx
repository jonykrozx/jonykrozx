import { useLang } from '../../lib/LanguageContext'

const iconBgs = [
  { bg: 'linear-gradient(135deg, #EB3D26, #c73320)', shadow: 'rgba(235,61,38,0.3)' },
  { bg: 'linear-gradient(135deg, #4A6FC4, #3558B0)', shadow: 'rgba(74,111,196,0.3)' },
  { bg: 'linear-gradient(135deg, #7C6FC4, #6358B0)', shadow: 'rgba(124,111,196,0.3)' },
  { bg: 'linear-gradient(135deg, #2E9E6B, #1e7a52)', shadow: 'rgba(46,158,107,0.3)' },
  { bg: 'linear-gradient(135deg, #D97706, #b86005)', shadow: 'rgba(217,119,6,0.3)' },
  { bg: 'linear-gradient(135deg, #94D1CA, #72bbb3)', shadow: 'rgba(148,209,202,0.3)' },
]

const icons = [
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17H5a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v3m-2 11h3m-3 0a2 2 0 01-2-2v-6a2 2 0 012-2h3m0 0l1.5-3" /><circle cx="7" cy="17" r="1.5" strokeWidth={1.5} /><circle cx="17" cy="17" r="1.5" strokeWidth={1.5} /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
]

export default function SolutionsGrid() {
  const { t } = useLang()
  const s = t.solutions
  return (
    <section className="bg-[#F7F7F7] dark:bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2
            className="text-[#2B2B2B] dark:text-white font-bold"
            style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
          >
            {s.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {s.items.map((solution, idx) => (
            <div
              key={solution.title}
              className="group bg-white dark:bg-white/4 border border-[#DEDEDE] dark:border-white/8 hover:border-[#EB3D26] dark:hover:border-[#EB3D26] transition-all duration-200 flex flex-col"
              style={{ padding: '24px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xs)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center text-white mb-5 shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: iconBgs[idx].bg, borderRadius: 'var(--radius-lg)', boxShadow: `0 4px 12px ${iconBgs[idx].shadow}` }}
              >
                {icons[idx]}
              </div>

              <div className="flex-1">
                <h3 className="text-[#2B2B2B] dark:text-white font-bold mb-1" style={{ fontSize: 'var(--text-base)' }}>
                  {solution.title}
                </h3>
                <p className="text-[#6B6B6B] mb-4" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-normal)' }}>
                  {solution.subtitle}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                      <span className="w-1 h-1 rounded-full bg-[#EB3D26] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-[#94D1CA] text-[#2B2B2B] font-bold hover:bg-[#72bbb3] transition-colors"
                style={{ fontSize: 'var(--text-sm)', padding: '10px', borderRadius: 'var(--radius-md)' }}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
