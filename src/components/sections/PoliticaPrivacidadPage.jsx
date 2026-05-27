import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lock, ChevronLeft } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'
import { useLang } from '../../lib/LanguageContext'

/* ── Traducciones hardcodeadas ───────────────────────── */
const CONTENT = {
  es: {
    back:      'Volver al inicio',
    badge:     'Legal · SYSCOM',
    title:     'POLÍTICA DE PRIVACIDAD',
    lastUpdate:'Última actualización: mayo de 2025',
    sections: [
      {
        number: '1',
        title: 'Responsable del tratamiento',
        content: 'Sistemas Comerciales SYSCOM S.A.S. (en adelante "SYSCOM"), con domicilio en Calle 35 No. 16-24 Piso 18, Edificio José Acevedo y Gómez, Bucaramanga, Colombia, es responsable del tratamiento de los datos personales recopilados a través de este sitio web y de sus servicios.',
      },
      {
        number: '2',
        title: 'Marco legal',
        content: 'La presente Política de Privacidad se rige por la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 y demás normas complementarias expedidas por la Superintendencia de Industria y Comercio (SIC) de Colombia.',
      },
      {
        number: '3',
        title: 'Información que recopilamos',
        content: 'Podemos recopilar la siguiente información personal cuando usted interactúa con nuestro sitio web o solicita nuestros servicios:',
        items: [
          'Nombre completo y número de identificación',
          'Dirección de correo electrónico y número de teléfono',
          'Nombre y tipo de empresa',
          'Ciudad y país de ubicación',
          'Información técnica del dispositivo (dirección IP, navegador, sistema operativo)',
          'Información de navegación y uso del sitio web',
        ],
      },
      {
        number: '4',
        title: 'Finalidad del tratamiento',
        content: 'Los datos personales recopilados serán utilizados para las siguientes finalidades:',
        items: [
          'Atender solicitudes de información, demos y asesoría comercial',
          'Gestionar y ejecutar contratos de licenciamiento de software',
          'Brindar soporte técnico y atención postventa',
          'Enviar comunicaciones relacionadas con actualizaciones, noticias y eventos de SYSCOM',
          'Realizar análisis estadísticos y de uso para mejorar nuestros servicios',
          'Cumplir con obligaciones legales y requerimientos de autoridades competentes',
        ],
      },
      {
        number: '5',
        title: 'Derechos del titular',
        content: 'Como titular de los datos personales, usted tiene derecho a:',
        items: [
          'Conocer, actualizar y rectificar sus datos personales',
          'Solicitar prueba de la autorización otorgada para el tratamiento',
          'Ser informado sobre el uso que se ha dado a sus datos',
          'Presentar quejas ante la Superintendencia de Industria y Comercio',
          'Revocar la autorización y/o solicitar la supresión de los datos cuando sea procedente',
          'Acceder de forma gratuita a sus datos personales tratados por SYSCOM',
        ],
      },
      {
        number: '6',
        title: 'Cookies y tecnologías similares',
        content: 'Nuestro sitio web puede utilizar cookies y tecnologías de seguimiento similares para mejorar la experiencia de navegación, analizar el tráfico y personalizar el contenido. Usted puede configurar su navegador para rechazar las cookies; sin embargo, esto podría afectar algunas funcionalidades del sitio.',
      },
      {
        number: '7',
        title: 'Transferencia y transmisión de datos',
        content: 'SYSCOM no venderá, alquilará ni cederá sus datos personales a terceros sin su consentimiento previo, salvo en los siguientes casos:',
        items: [
          'Cuando exista una obligación legal o requerimiento de autoridad competente',
          'Para proveedores de servicios tecnológicos que apoyan la operación de SYSCOM bajo acuerdos de confidencialidad',
          'Cuando sea necesario para la ejecución del contrato celebrado con usted',
        ],
      },
      {
        number: '8',
        title: 'Seguridad de la información',
        content: 'SYSCOM implementa medidas técnicas, administrativas y físicas para proteger sus datos personales contra accesos no autorizados, pérdida, alteración o divulgación indebida. Nuestros sistemas cuentan con protocolos de seguridad actualizados conforme a estándares de la industria.',
      },
      {
        number: '9',
        title: 'Tiempo de conservación',
        content: 'Los datos personales serán conservados durante el tiempo que sea necesario para cumplir con las finalidades para las que fueron recopilados y conforme a los términos establecidos en la ley colombiana. Una vez cumplida la finalidad, los datos serán suprimidos o anonimizados.',
      },
      {
        number: '10',
        title: 'Modificaciones a esta política',
        content: 'SYSCOM se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en este sitio web con indicación de la fecha de actualización. El uso continuado de nuestros servicios posterior a la publicación de cambios constituye la aceptación de los mismos.',
      },
      {
        number: '11',
        title: 'Contacto',
        content: 'Para ejercer sus derechos, presentar consultas o reclamos relacionados con el tratamiento de sus datos personales, puede contactarnos a través de:',
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
    title:     'PRIVACY POLICY',
    lastUpdate:'Last updated: May 2025',
    sections: [
      {
        number: '1',
        title: 'Data controller',
        content: 'Sistemas Comerciales SYSCOM S.A.S. (hereinafter "SYSCOM"), with registered address at Calle 35 No. 16-24 Piso 18, Edificio José Acevedo y Gómez, Bucaramanga, Colombia, is responsible for the processing of personal data collected through this website and its services.',
      },
      {
        number: '2',
        title: 'Legal framework',
        content: 'This Privacy Policy is governed by Colombian Statutory Law 1581 of 2012, Decree 1377 of 2013 and other complementary regulations issued by the Superintendencia de Industria y Comercio (SIC) of Colombia.',
      },
      {
        number: '3',
        title: 'Information we collect',
        content: 'We may collect the following personal information when you interact with our website or request our services:',
        items: [
          'Full name and identification number',
          'Email address and phone number',
          'Company name and type',
          'City and country of location',
          'Technical device information (IP address, browser, operating system)',
          'Browsing and website usage information',
        ],
      },
      {
        number: '4',
        title: 'Purpose of processing',
        content: 'The personal data collected will be used for the following purposes:',
        items: [
          'Responding to requests for information, demos and commercial advice',
          'Managing and executing software licensing contracts',
          'Providing technical support and after-sales service',
          'Sending communications related to SYSCOM updates, news and events',
          'Conducting statistical and usage analysis to improve our services',
          'Complying with legal obligations and requirements of competent authorities',
        ],
      },
      {
        number: '5',
        title: 'Rights of the data subject',
        content: 'As the owner of personal data, you have the right to:',
        items: [
          'Know, update and correct your personal data',
          'Request proof of the authorization granted for processing',
          'Be informed about the use that has been made of your data',
          'File complaints with the Superintendencia de Industria y Comercio',
          'Revoke authorization and/or request data deletion when applicable',
          'Access your personal data processed by SYSCOM free of charge',
        ],
      },
      {
        number: '6',
        title: 'Cookies and similar technologies',
        content: 'Our website may use cookies and similar tracking technologies to improve the browsing experience, analyze traffic and personalize content. You can configure your browser to reject cookies; however, this may affect some site functionality.',
      },
      {
        number: '7',
        title: 'Data transfer and transmission',
        content: 'SYSCOM will not sell, rent or transfer your personal data to third parties without your prior consent, except in the following cases:',
        items: [
          'When there is a legal obligation or requirement by a competent authority',
          'For technology service providers supporting SYSCOM operations under confidentiality agreements',
          'When necessary for the execution of the contract entered into with you',
        ],
      },
      {
        number: '8',
        title: 'Information security',
        content: 'SYSCOM implements technical, administrative and physical measures to protect your personal data against unauthorized access, loss, alteration or improper disclosure. Our systems have updated security protocols in accordance with industry standards.',
      },
      {
        number: '9',
        title: 'Retention period',
        content: 'Personal data will be retained for as long as necessary to fulfill the purposes for which it was collected and in accordance with the terms established by Colombian law. Once the purpose is fulfilled, the data will be deleted or anonymized.',
      },
      {
        number: '10',
        title: 'Changes to this policy',
        content: 'SYSCOM reserves the right to modify this Privacy Policy at any time. Changes will be published on this website with an indication of the update date. Continued use of our services after the publication of changes constitutes acceptance thereof.',
      },
      {
        number: '11',
        title: 'Contact',
        content: 'To exercise your rights, submit queries or complaints related to the processing of your personal data, you can contact us through:',
        contact: [
          { label: 'Email',   value: 'info@syscom.com.co' },
          { label: 'Phone',   value: '316 526 7012' },
          { label: 'Address', value: 'Calle 35 No. 16-24 Piso 18, Bucaramanga, Colombia' },
        ],
      },
    ],
  },
}

export default function PoliticaPrivacidadPage() {
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
                <Lock className="w-5 h-5 text-[#94D1CA]" />
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
