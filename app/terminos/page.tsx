import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const title = 'Términos y Condiciones'
const description =
  'Términos y condiciones de uso del sitio web de Ranvi Systems y de los servicios ofrecidos por Ranvi SpA.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/terminos' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/terminos',
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

export default function TerminosPage() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-semibold mb-6">
          <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900 mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-navy-500 text-sm mb-10">Última actualización: abril 2026</p>

        <div className="max-w-none space-y-5 text-navy-700 leading-relaxed">
          <p>
            Este sitio web es operado por {siteConfig.company} ({siteConfig.country}). Al acceder y navegar el sitio,
            aceptas los siguientes términos.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Uso del sitio</h2>
          <p>
            El contenido de este sitio tiene fines informativos sobre los productos y servicios de {siteConfig.company}.
            La información no constituye una oferta vinculante — cualquier contratación se formaliza mediante contrato
            independiente.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Propiedad intelectual</h2>
          <p>
            Todo el contenido del sitio — textos, diseños, logotipos, código — es propiedad de {siteConfig.company} o
            de sus respectivos titulares. Las marcas de terceros mencionadas son propiedad de sus dueños.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Enlaces a terceros</h2>
          <p>
            El sitio puede contener enlaces a sitios externos. {siteConfig.company} no se hace responsable del contenido
            ni de las políticas de privacidad de dichos sitios.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Limitación de responsabilidad</h2>
          <p>
            {siteConfig.company} no garantiza la disponibilidad ininterrumpida del sitio. No seremos responsables por
            daños indirectos derivados del uso o imposibilidad de uso del sitio.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Modificaciones</h2>
          <p>
            Podemos actualizar estos términos en cualquier momento. La versión vigente es la publicada en esta página
            con la fecha de última actualización indicada.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Legislación aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a los
            tribunales competentes de Santiago.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">Contacto</h2>
          <p>
            Para dudas sobre estos términos, escríbenos a
            <a href="mailto:contacto@ranvi.cl" className="text-primary-600 hover:text-primary-700"> contacto@ranvi.cl</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
