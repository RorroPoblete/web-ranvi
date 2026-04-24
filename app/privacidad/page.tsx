import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const title = 'Política de Privacidad'
const description =
  'Política de privacidad y tratamiento de datos personales de Ranvi Systems, conforme a la Ley 19.628 de Chile.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacidad' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/privacidad',
    title,
    description,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

export default function PrivacidadPage() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-semibold mb-6">
          <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900 mb-4">
          Política de Privacidad
        </h1>
        <p className="text-navy-500 text-sm mb-10">Última actualización: abril 2026</p>

        <div className="max-w-none space-y-5 text-navy-700 leading-relaxed">
          <p>
            {siteConfig.company} trata los datos personales recogidos a través de este sitio web conforme a la
            <strong> Ley 19.628 sobre Protección de la Vida Privada</strong> de Chile y a los estándares aplicables
            del sector salud.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Datos que recopilamos</h2>
          <p>
            Recopilamos datos que tú nos entregas voluntariamente al completar formularios de contacto:
            nombre, empresa, cargo, correo electrónico, teléfono y el contenido de tu mensaje.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Finalidad</h2>
          <p>
            Usamos estos datos únicamente para responder tu solicitud, agendar demostraciones y comunicarnos
            contigo respecto al servicio solicitado.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Cesión a terceros</h2>
          <p>
            No vendemos ni cedemos tus datos a terceros. Los datos permanecen bajo custodia de {siteConfig.company}.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Tus derechos</h2>
          <p>
            Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos escribiéndonos
            a <a href="mailto:contacto@ranvi.cl" className="text-primary-600 hover:text-primary-700">contacto@ranvi.cl</a>.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger los datos contra acceso no autorizado,
            pérdida o alteración. Los datos se almacenan cifrados y el acceso queda registrado en logs de auditoría.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Cookies</h2>
          <p>
            Este sitio utiliza cookies estrictamente necesarias para su funcionamiento. No usamos cookies de rastreo
            publicitario sin consentimiento.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Contacto</h2>
          <p>
            Para consultas sobre esta política, escríbenos a
            <a href="mailto:contacto@ranvi.cl" className="text-primary-600 hover:text-primary-700"> contacto@ranvi.cl</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
