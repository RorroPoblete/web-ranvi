import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.description}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'software clínico Chile',
    'CRM quirúrgico',
    'trazabilidad biopsias',
    'gestión equipos médicos',
    'acreditación EQ',
    'Superintendencia de Salud',
    'Ley 19.628',
    'tótem autopago clínica',
    'gestor de fila hospital',
    'chatbot citas médicas',
    'sistema calidad acreditación',
    'GMEM',
    'salud digital',
    'software hospitalario',
  ],
  authors: [{ name: siteConfig.company }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.company,
      alternateName: siteConfig.name,
      legalName: siteConfig.company,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo-ranvi.png`,
        width: 512,
        height: 512,
      },
      image: `${siteConfig.url}/og-image.png`,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
      },
      email: 'contacto@ranvi.cl',
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
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      knowsAbout: [
        'Software clínico',
        'CRM quirúrgico',
        'Trazabilidad de biopsias',
        'Gestión de equipos médicos',
        'Acreditación EQ',
        'Superintendencia de Salud',
        'Ley 19.628',
        'Ley 20.584',
        'Tótem de autopago clínica',
        'Gestor de fila hospitalaria',
        'Chatbot de citas médicas',
        'Sistema de calidad para acreditación',
      ],
      slogan: siteConfig.hero.title,
      foundingLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressCountry: 'CL' },
      },
      sameAs: [],
      description: siteConfig.description,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'es-CL',
      publisher: { '@id': `${siteConfig.url}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/soluciones?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
