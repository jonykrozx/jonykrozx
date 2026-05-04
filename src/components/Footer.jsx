import { useLang } from '../lib/LanguageContext'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const socials = [
  { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/sistemas-comerciales-syscom/' },
  { icon: <YoutubeIcon />, label: 'YouTube', href: 'https://www.youtube.com/channel/UC1Z6WblbXPD0KO_tUPbDBcQ' },
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/SyscomSistemasComerciales' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/syscom_software/' },
]

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  return (
    <footer style={{ background: '#1A1A1A', padding: '56px 0 0' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Top row: brand + columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 mb-10">
          {/* Brand column */}
          <div style={{ flexShrink: 0, width: '220px' }} className="w-full lg:w-[220px]">
            {/* Logo */}
            <div className="mb-4">
              <img src="/images/logo.png" alt="SYSCOM Sistemas Comerciales" style={{ height: '40px', width: 'auto' }} />
            </div>

            {/* Description */}
            <p style={{ fontSize: 'var(--text-xs)', lineHeight: 1.7, color: '#6B6B6B', marginBottom: '16px' }}>
              {f.description}
            </p>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#25D366]"><WhatsAppIcon /></span>
              <span style={{ fontSize: 'var(--text-xs)', color: '#6B6B6B' }}>318 897 0512</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6B6B] hover:text-white transition-colors duration-150"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {f.cols.map((col) => (
              <div key={col.heading}>
                <h6
                  className="text-[#4D4D4D] font-bold uppercase tracking-[0.12em] mb-3"
                  style={{ fontSize: 'var(--text-xs)' }}
                >
                  {col.heading}
                </h6>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#6B6B6B] hover:text-white transition-colors duration-150"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5"
          style={{ borderTop: '1px solid #2B2B2B' }}
        >
          <span className="text-[#4D4D4D]" style={{ fontSize: 'var(--text-xs)' }}>
            © {new Date().getFullYear()} {f.company} · {f.rights}
          </span>
          <span className="text-[#4D4D4D]" style={{ fontSize: 'var(--text-xs)' }}>
            Bogotá, Colombia 🇨🇴
          </span>
        </div>
      </div>
    </footer>
  )
}
