import { useLang } from '../../lib/LanguageContext'
import { Marquee } from '../ui/Marquee'
import { cn } from '../../lib/utils'

const reviews = [
  {
    name: 'María Fernanda López',
    role: 'Jefe Administrativa',
    company: 'Empresa de transporte de carga',
    body: 'Con SYSCOM logramos organizar la información de viajes, anticipos y facturación en un solo sistema. Hoy tenemos más control y menos errores operativos.',
    img: '/images/avatars/avat-01.webp',
  },
  {
    name: 'Carlos Andrés Pérez',
    role: 'Gerente General',
    company: 'Empresa de transporte de carga',
    body: 'SYSCOM nos dio control total de la operación. Desde los viajes hasta la liquidación, todo está integrado y sin reprocesos.',
    img: '/images/avatars/avat-03.webp',
  },
  {
    name: 'Diana Carolina Ríos',
    role: 'Contadora',
    company: 'Empresa comercial',
    body: 'La integración entre facturación electrónica y contabilidad nos ha ahorrado mucho tiempo. Ahora todo cuadra y la información es confiable.',
    img: '/images/avatars/avat-02.webp',
  },
  {
    name: 'Miguel Ángel Rodríguez',
    role: 'Propietario',
    company: 'Empresa de servicios',
    body: 'La facturación electrónica con AutoFactura es muy fácil de usar. Nos permitió cumplir con la DIAN sin complicaciones.',
    img: '/images/avatars/avat-05.webp',
  },
  {
    name: 'Laura Gómez',
    role: 'Coordinadora de Operaciones',
    company: 'Empresa de transporte especial',
    body: 'Antes teníamos procesos muy manuales. Con SYSCOM mejoramos el control de rutas, mantenimientos y reportes sin complicaciones.',
    img: '/images/avatars/avat-04.webp',
  },
  {
    name: 'Andrea Martínez',
    role: 'Administradora',
    company: 'Parqueadero empresarial',
    body: 'El módulo de parqueadero nos permitió tener control total de ingresos y salidas. Todo está organizado y fácil de consultar.',
    img: '/images/avatars/avat-06.webp',
  },
  {
    name: 'Julián Ramírez',
    role: 'Director Comercial',
    company: 'Empresa de transporte de carga',
    body: 'SYSCOM transformó nuestra gestión. Ahora tomamos decisiones con información en tiempo real sin necesidad de reprocesos.',
    img: '/images/avatars/avat-08.webp',
  },
  {
    name: 'Paola Herrera',
    role: 'Jefe de Talento Humano',
    company: 'Empresa de servicios',
    body: 'La nómina electrónica con SYSCOM es clara y fácil de manejar. Cumplimos con la normativa sin estrés ni reprocesos.',
    img: '/images/avatars/avat-07.webp',
  },
  {
    name: 'Luis Fernando Castro',
    role: 'Coordinador de Flota',
    company: 'Empresa de transporte',
    body: 'El módulo de mantenimiento nos ayudó a tener control sobre los vehículos y evitar problemas por falta de seguimiento.',
    img: '/images/avatars/avat-09.webp',
  },
  {
    name: 'Natalia Cárdenas',
    role: 'Administradora',
    company: 'Hotel',
    body: 'Con el sistema de hotelería mejoramos la gestión de reservas y el control de habitaciones. Todo fluye mejor en la operación diaria.',
    img: '/images/avatars/avat-10.webp',
  },
  {
    name: 'Sandra Milena Torres',
    role: 'Directora Financiera',
    company: 'Estación de servicio',
    body: 'Ahora tenemos control del inventario y las ventas en tiempo real. SYSCOM nos da información clara para tomar decisiones.',
    img: '/images/avatars/avat-11.webp',
  },
  {
    name: 'Andrés Felipe Moreno',
    role: 'Gerente',
    company: 'Planta industrial',
    body: 'Con SYSCOM logramos integrar inventarios, costos y contabilidad. Ahora tenemos una visión completa del negocio.',
    img: '/images/avatars/avat-12.webp',
  },
]

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2))
const secondRow = reviews.slice(Math.ceil(reviews.length / 2))

function ReviewCard({ img, name, role, company, body }) {
  return (
    <figure
      className={cn(
        'relative h-full w-72 cursor-pointer overflow-hidden border p-5 shrink-0',
        'border-[#EFEFEF] bg-white hover:border-[#EB3D26]/30 hover:shadow-md',
        'dark:border-white/8 dark:bg-white/4 dark:hover:border-[#EB3D26]/30',
        'transition-all duration-200'
      )}
      style={{ borderRadius: 'var(--radius-xl)' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={img}
          alt={name}
          className="rounded-full object-cover shrink-0"
          style={{ width: '40px', height: '40px' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling.style.display = 'flex'
          }}
        />
        <div
          className="rounded-full bg-[#EB3D26] items-center justify-center shrink-0 hidden"
          style={{ width: '40px', height: '40px', minWidth: '40px' }}
        >
          <span className="text-white font-bold text-sm">
            {name.split(' ').map(w => w[0]).slice(0, 2).join('')}
          </span>
        </div>
        <div className="min-w-0">
          <figcaption className="text-[#2B2B2B] dark:text-white font-bold truncate" style={{ fontSize: 'var(--text-sm)' }}>
            {name}
          </figcaption>
          <p className="text-[#AEAEAE] truncate" style={{ fontSize: 'var(--text-xs)' }}>{role}</p>
          <p className="text-[#EB3D26] font-medium truncate" style={{ fontSize: 'var(--text-xs)' }}>{company}</p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3 h-3 fill-[#2E9E6B]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-[#4D4D4D] dark:text-[#AEAEAE] italic" style={{ fontSize: 'var(--text-xs)', lineHeight: 'var(--lh-relaxed)' }}>
        "{body}"
      </blockquote>
    </figure>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const { title } = t.testimonials
  return (
    <section className="bg-[#F7F7F7] dark:bg-[#2B2B2B] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
        <h2
          className="text-center text-[#2B2B2B] dark:text-white font-bold"
          style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
        >
          {title}
        </h2>
      </div>

      <div className="relative flex flex-col gap-4">
        <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name + review.role} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:1rem]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name + review.role} {...review} />
          ))}
        </Marquee>

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7F7F7] dark:from-[#2B2B2B] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7F7F7] dark:from-[#2B2B2B] to-transparent" />
      </div>
    </section>
  )
}
