import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ChevronLeft } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

/* ── Traducciones hardcodeadas ───────────────────────── */
const CONTENT = {
  es: {
    back:      'Volver al inicio',
    badge:     'Legal · SYSCOM',
    title:     'TÉRMINOS Y CONDICIONES DE USO',
    lastUpdate:'Última actualización: mayo de 2025',
    sections: [
      {
        number: '1',
        title: 'Aceptación de los términos',
        content: 'Al acceder y utilizar el sitio web de Sistemas Comerciales SYSCOM S.A.S. (en adelante "SYSCOM"), usted acepta quedar vinculado por los presentes Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar este sitio.',
      },
      {
        number: '2',
        title: 'Descripción del servicio',
        content: 'SYSCOM es una empresa colombiana proveedora de software empresarial especializado en gestión de transporte, contabilidad, nómina, facturación electrónica e inventarios. El presente sitio web tiene como finalidad informar sobre nuestros productos y servicios, y facilitar el contacto con clientes potenciales y actuales.',
      },
      {
        number: '3',
        title: 'Propiedad intelectual',
        content: 'Todos los contenidos publicados en este sitio web — incluyendo textos, imágenes, logotipos, íconos, diseños, software y código fuente — son propiedad exclusiva de SYSCOM o de sus respectivos titulares, y están protegidos por las leyes de propiedad intelectual vigentes en Colombia y los tratados internacionales aplicables. Queda expresamente prohibido:',
        items: [
          'Reproducir, copiar, distribuir o modificar cualquier contenido sin autorización escrita de SYSCOM',
          'Utilizar el nombre, marca o logotipo de SYSCOM sin autorización previa',
          'Realizar ingeniería inversa sobre el software de SYSCOM',
          'Extraer o reutilizar partes del sitio web de forma sistemática',
        ],
      },
      {
        number: '4',
        title: 'Condiciones de uso del sitio',
        content: 'El usuario se compromete a utilizar el sitio web de forma lícita y conforme a las buenas costumbres. En particular, queda prohibido:',
        items: [
          'Utilizar el sitio para fines fraudulentos o ilícitos',
          'Intentar acceder a sistemas, redes o datos sin autorización',
          'Transmitir virus, malware o cualquier código dañino',
          'Suplantar la identidad de terceros o de SYSCOM',
          'Realizar actividades que puedan dañar, inutilizar o sobrecargar los sistemas de SYSCOM',
        ],
      },
      {
        number: '5',
        title: 'Licenciamiento de software',
        content: 'El software de SYSCOM se licencia, no se vende. Las condiciones específicas de uso, soporte, actualizaciones y vigencia de cada producto se encuentran detalladas en el contrato de licencia suscrito entre SYSCOM y el cliente. El uso no autorizado del software constituye una infracción a los derechos de propiedad intelectual y podrá dar lugar a acciones legales.',
      },
      {
        number: '6',
        title: 'Exactitud de la información',
        content: 'SYSCOM hace sus mejores esfuerzos para mantener actualizada y precisa la información publicada en este sitio web. Sin embargo, no garantiza la exactitud, integridad o vigencia de dicha información en todo momento. La información publicada tiene carácter orientativo y no constituye una oferta contractual vinculante, salvo indicación expresa.',
      },
      {
        number: '7',
        title: 'Limitación de responsabilidad',
        content: 'En la medida permitida por la ley colombiana, SYSCOM no será responsable por:',
        items: [
          'Daños directos, indirectos o consecuentes derivados del uso o imposibilidad de uso del sitio',
          'Interrupciones, errores o virus que puedan afectar el sitio web',
          'Decisiones tomadas por el usuario basadas en la información del sitio',
          'Contenidos de sitios web de terceros enlazados desde este sitio',
        ],
      },
      {
        number: '8',
        title: 'Enlaces a sitios de terceros',
        content: 'Este sitio web puede contener enlaces a sitios web de terceros. SYSCOM no controla el contenido de dichos sitios, no se hace responsable por su disponibilidad ni por los daños que puedan derivarse de su uso. La inclusión de un enlace no implica que SYSCOM avale o recomiende el sitio enlazado.',
      },
      {
        number: '9',
        title: 'Modificaciones',
        content: 'SYSCOM se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. El uso continuado del sitio con posterioridad a dichas modificaciones implica la aceptación de los nuevos términos.',
      },
      {
        number: '10',
        title: 'Ley aplicable y jurisdicción',
        content: 'Los presentes Términos y Condiciones se rigen por las leyes de la República de Colombia. Para la resolución de cualquier controversia derivada del uso de este sitio, las partes se someten a la jurisdicción de los jueces y tribunales competentes de la ciudad de Bucaramanga, Colombia, renunciando a cualquier otro fuero que pudiera corresponderles.',
      },
      {
        number: '11',
        title: 'Contacto',
        content: 'Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos a través de:',
        contact: [
          { label: 'Correo electrónico', value: 'info@syscom.com.co' },
          { label: 'Teléfono',           value: '316 526 7012' },
          { label: 'Dirección',          value: 'Calle 35 No. 16-24 Piso 18, Bucaramanga, Colombia' },
        ],
      },
    ],
  },

  en: {
    back:      'Back to home',
    badge:     'Legal · SYSCOM',
    title:     'TERMS AND CONDITIONS OF USE',
    lastUpdate:'Last updated: May 2025',
    sections: [
      {
        number: '1',
        title: 'Acceptance of terms',
        content: 'By accessing and using the website of Sistemas Comerciales SYSCOM S.A.S. (hereinafter "SYSCOM"), you agree to be bound by these Terms and Conditions of Use. If you do not agree with any of these terms, please refrain from using this site.',
      },
      {
        number: '2',
        title: 'Description of service',
        content: 'SYSCOM is a Colombian company providing specialized business software for transport management, accounting, payroll, electronic invoicing and inventory. This website aims to inform about our products and services and facilitate contact with potential and existing clients.',
      },
      {
        number: '3',
        title: 'Intellectual property',
        content: 'All content published on this website — including texts, images, logos, icons, designs, software and source code — is the exclusive property of SYSCOM or its respective owners, and is protected by intellectual property laws in force in Colombia and applicable international treaties. The following is expressly prohibited:',
        items: [
          'Reproducing, copying, distributing or modifying any content without written authorization from SYSCOM',
          'Using the name, trademark or logo of SYSCOM without prior authorization',
          'Reverse engineering SYSCOM software',
          'Systematically extracting or reusing parts of the website',
        ],
      },
      {
        number: '4',
        title: 'Conditions of website use',
        content: 'The user agrees to use the website lawfully and in accordance with good practices. In particular, the following is prohibited:',
        items: [
          'Using the site for fraudulent or unlawful purposes',
          'Attempting to access systems, networks or data without authorization',
          'Transmitting viruses, malware or any harmful code',
          'Impersonating third parties or SYSCOM',
          'Carrying out activities that could damage, disable or overload SYSCOM systems',
        ],
      },
      {
        number: '5',
        title: 'Software licensing',
        content: 'SYSCOM software is licensed, not sold. The specific conditions of use, support, updates and validity of each product are detailed in the license agreement signed between SYSCOM and the client. Unauthorized use of the software constitutes an infringement of intellectual property rights and may give rise to legal action.',
      },
      {
        number: '6',
        title: 'Accuracy of information',
        content: 'SYSCOM makes its best efforts to keep the information published on this website up to date and accurate. However, it does not guarantee the accuracy, completeness or currency of such information at all times. The published information is for guidance purposes only and does not constitute a binding contractual offer unless expressly stated.',
      },
      {
        number: '7',
        title: 'Limitation of liability',
        content: 'To the extent permitted by Colombian law, SYSCOM shall not be liable for:',
        items: [
          'Direct, indirect or consequential damages arising from the use or inability to use the site',
          'Interruptions, errors or viruses that may affect the website',
          'Decisions made by the user based on information on the site',
          'Content of third-party websites linked from this site',
        ],
      },
      {
        number: '8',
        title: 'Links to third-party sites',
        content: 'This website may contain links to third-party websites. SYSCOM does not control the content of such sites, is not responsible for their availability or for any damage that may arise from their use. The inclusion of a link does not imply that SYSCOM endorses or recommends the linked site.',
      },
      {
        number: '9',
        title: 'Modifications',
        content: 'SYSCOM reserves the right to modify these Terms and Conditions at any time. Modifications will take effect from the date of publication on the website. Continued use of the site after such modifications implies acceptance of the new terms.',
      },
      {
        number: '10',
        title: 'Applicable law and jurisdiction',
        content: 'These Terms and Conditions are governed by the laws of the Republic of Colombia. For the resolution of any dispute arising from the use of this site, the parties submit to the jurisdiction of the competent courts of Bucaramanga, Colombia, waiving any other jurisdiction that may correspond to them.',
      },
      {
        number: '11',
        title: 'Contact',
        content: 'For any questions related to these Terms and Conditions, you can contact us through:',
        contact: [
          { label: 'Email',   value: 'info@syscom.com.co' },
          { label: 'Phone',   value: '316 526 7012' },
          { label: 'Address', value: 'Calle 35 No. 16-24 Piso 18, Bucaramanga, Colombia' },
        ],
      },
    ],
  },
}

export default function TerminosPage() {
  const { lang } = useLang()
  const p = CONTENT[lang] ?? CONTENT.es

  return (
    <main className="overflow-x-hidden bg-white dark:bg-[#0A0A0A]">
      {/* Header band */}
      <section className="bg-[#2B2B2B] py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <motion.div variants={stagger(0.1, 0.05)} initial="hidden" animate="show" className="space-y-4">
            <motion.div variants={fadeUp}>
              <Link to="/" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors duration-150" style={{ fontSize: 'var(--text-xs)' }}>
                <ChevronLeft className="w-3.5 h-3.5" />
                {p.back}
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#94D1CA]/15 flex items-center justify-center shrink-0" style={{ borderRadius: 'var(--radius-md)' }}>
                <FileText className="w-5 h-5 text-[#94D1CA]" />
              </div>
              <span className="text-white/50 font-bold uppercase tracking-[0.18em]" style={{ fontSize: 'var(--text-xs)' }}>
                {p.badge}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-white font-black" style={{ fontSize: 'var(--text-3xl)', lineHeight: '1.1', letterSpacing: 'var(--ls-tight)' }}>
              {p.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/40" style={{ fontSize: 'var(--text-xs)' }}>
              {p.lastUpdate}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-2">
          {p.sections.map((sec) => (
            <motion.div
              key={sec.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="border border-[#EFEFEF] dark:border-white/8 overflow-hidden"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              <div className="flex items-center gap-4 px-6 py-4 bg-[#F7F7F7] dark:bg-white/4 border-b border-[#EFEFEF] dark:border-white/8">
                <span className="w-7 h-7 bg-[#EB3D26]/10 text-[#EB3D26] font-black flex items-center justify-center shrink-0" style={{ borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)' }}>
                  {sec.number}
                </span>
                <h2 className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>
                  {sec.title}
                </h2>
              </div>
              <div className="px-6 py-5 space-y-4">
                <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                  {sec.content}
                </p>
                {sec.items && (
                  <ul className="space-y-2">
                    {sec.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26] shrink-0 mt-1.5" />
                        <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.contact && (
                  <div className="space-y-1.5">
                    {sec.contact.map((c, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26] shrink-0 ml-1" />
                        <span className="text-[#4D4D4D] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>
                          <span className="font-medium">{c.label}:</span> {c.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
