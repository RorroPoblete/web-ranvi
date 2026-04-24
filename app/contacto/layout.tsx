import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

const conTitle = 'Contacto — Agenda una demo'
const conDescription =
  'Contacta al equipo de Ranvi Systems. Solicita una demo de CRM quirúrgico, trazabilidad de biopsias, gestión de equipos médicos y más. Respuesta en menos de 48 horas.'

export const metadata: Metadata = {
  title: conTitle,
  description: conDescription,
  alternates: { canonical: '/contacto' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/contacto',
    title: conTitle,
    description: conDescription,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: conTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: conTitle,
    description: conDescription,
    images: ['/og-image.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${siteConfig.url}/contacto#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${siteConfig.url}/contacto` },
  ],
}

const contactPointJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteConfig.url}/contacto#webpage`,
  url: `${siteConfig.url}/contacto`,
  name: conTitle,
  description: conDescription,
  inLanguage: 'es-CL',
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  primaryImageOfPage: `${siteConfig.url}/og-image.png`,
  breadcrumb: { '@id': `${siteConfig.url}/contacto#breadcrumb` },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.company,
    url: siteConfig.url,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'contacto@ranvi.cl',
        availableLanguage: ['Spanish', 'es-CL'],
        areaServed: 'CL',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'contacto@ranvi.cl',
        availableLanguage: ['Spanish', 'es-CL'],
        areaServed: 'CL',
      },
    ],
  },
  potentialAction: {
    '@type': 'CommunicateAction',
    name: 'Agendar demo',
    target: `${siteConfig.url}/contacto`,
  },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointJsonLd) }}
      />
      {children}
    </>
  )
}
