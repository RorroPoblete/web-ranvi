import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  QueueListIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

const solTitle = 'Soluciones — 7 plataformas clínicas'
const solDescription =
  'Explora el portafolio Ranvi: CRM quirúrgico de 9 etapas, trazabilidad de biopsias, gestión de equipos médicos (EQ 1.1–3.1), gestor de fila, tótem de autopago, chatbot de citas y sistema de calidad.'

export const metadata = {
  title: solTitle,
  description: solDescription,
  alternates: { canonical: '/soluciones' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/soluciones',
    title: solTitle,
    description: solDescription,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: solTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: solTitle,
    description: solDescription,
    images: ['/og-image.png'],
  },
}

type Tone = 'light' | 'dark' | 'tint'

interface Product {
  id: string
  eyebrow?: string
  title: string
  tagline: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  tone: Tone
  accent: 'primary' | 'teal'
  benefits?: string[]
  features?: string[]
  howItWorks?: { step: number; title: string; description: string }[]
  useCases?: string[]
  stages?: string[]
  extras?: { title: string; body: string }[]
  logo?: string
}

const s = siteConfig.solutions

const products: Product[] = [
  {
    id: s.surgicalCrm.slug,
    eyebrow: 'Nuevo · CRM Quirúrgico',
    title: s.surgicalCrm.title,
    tagline: s.surgicalCrm.tagline,
    description: s.surgicalCrm.description,
    icon: HeartIcon,
    tone: 'dark',
    accent: 'primary',
    benefits: s.surgicalCrm.benefits,
    features: s.surgicalCrm.features,
    howItWorks: s.surgicalCrm.howItWorks,
    stages: s.surgicalCrm.stages,
    useCases: s.surgicalCrm.useCases,
  },
  {
    id: s.biopsyTraceability.slug,
    eyebrow: 'Nuevo · Trazabilidad',
    title: s.biopsyTraceability.title,
    tagline: s.biopsyTraceability.tagline,
    description: s.biopsyTraceability.description,
    icon: BeakerIcon,
    tone: 'light',
    accent: 'primary',
    benefits: s.biopsyTraceability.benefits,
    features: s.biopsyTraceability.features,
    howItWorks: s.biopsyTraceability.howItWorks,
    useCases: s.biopsyTraceability.useCases,
  },
  {
    id: s.medicalEquipment.slug,
    eyebrow: 'Acreditación EQ',
    title: s.medicalEquipment.title,
    tagline: s.medicalEquipment.tagline,
    description: s.medicalEquipment.description,
    icon: WrenchScrewdriverIcon,
    tone: 'tint',
    accent: 'teal',
    benefits: s.medicalEquipment.benefits,
    features: s.medicalEquipment.features,
    howItWorks: s.medicalEquipment.howItWorks,
    useCases: s.medicalEquipment.useCases,
  },
  {
    id: s.queueManager.slug,
    title: s.queueManager.title,
    tagline: s.queueManager.tagline,
    description: s.queueManager.description,
    icon: QueueListIcon,
    tone: 'light',
    accent: 'primary',
    benefits: s.queueManager.benefits,
    howItWorks: s.queueManager.howItWorks,
    useCases: s.queueManager.useCases,
    logo: '/logo-gestor.png',
  },
  {
    id: s.paymentKiosk.slug,
    title: s.paymentKiosk.title,
    tagline: s.paymentKiosk.tagline,
    description: s.paymentKiosk.description,
    icon: CreditCardIcon,
    tone: 'tint',
    accent: 'teal',
    benefits: s.paymentKiosk.benefits,
    extras: [
      {
        title: 'Seguridad PCI DSS',
        body: 'Tótem certificado con los más altos estándares de seguridad. Cada transacción cifrada y auditable.',
      },
      {
        title: 'Pasarelas integradas',
        body: 'Transbank y Getnet listos para producción. Sincronización con facturación en tiempo real.',
      },
    ],
    logo: '/logo-autopago.png',
  },
  {
    id: s.appointmentChatbot.slug,
    title: s.appointmentChatbot.title,
    tagline: s.appointmentChatbot.tagline,
    description: s.appointmentChatbot.description,
    icon: ChatBubbleLeftRightIcon,
    tone: 'light',
    accent: 'primary',
    benefits: s.appointmentChatbot.benefits,
    features: s.appointmentChatbot.features,
    howItWorks: s.appointmentChatbot.howItWorks,
  },
  {
    id: s.qualitySystem.slug,
    title: s.qualitySystem.title,
    tagline: s.qualitySystem.tagline,
    description: s.qualitySystem.description,
    icon: ClipboardDocumentCheckIcon,
    tone: 'tint',
    accent: 'teal',
    benefits: s.qualitySystem.benefits,
    features: s.qualitySystem.features,
    howItWorks: s.qualitySystem.howItWorks,
  },
]

function ProductSection({ p }: { p: Product }) {
  const dark = p.tone === 'dark'
  const wrapCls =
    p.tone === 'dark'
      ? 'bg-navy-900 text-white'
      : p.tone === 'tint'
        ? 'bg-navy-50 text-navy-900'
        : 'bg-white text-navy-900'

  const accentBadge =
    p.accent === 'teal'
      ? 'bg-teal-100 text-teal-700'
      : 'bg-primary-100 text-primary-700'

  const accentDark =
    p.accent === 'teal' ? 'text-teal-300' : 'text-primary-300'

  const iconBox =
    dark
      ? `h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center ${accentDark}`
      : p.accent === 'teal'
        ? 'h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600'
        : 'h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600'

  const cardCls = dark
    ? 'p-5 bg-navy-800 border border-navy-700 rounded-xl'
    : 'p-5 bg-white border border-navy-100 rounded-xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition'

  const checkColor = dark ? 'text-teal-400' : p.accent === 'teal' ? 'text-teal-500' : 'text-primary-500'
  const softText = dark ? 'text-navy-300' : 'text-navy-600'
  const mutedText = dark ? 'text-navy-400' : 'text-navy-500'

  return (
    <section id={p.id} className={`section scroll-mt-20 ${wrapCls}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className={iconBox}>
                <p.icon className="h-6 w-6" />
              </div>
              {p.eyebrow && (
                <span className={`chip ${dark ? 'bg-white/10 text-white' : accentBadge}`}>
                  {p.eyebrow}
                </span>
              )}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.08]">
              {p.title}
            </h2>
            <p className={`mt-3 text-xl font-semibold ${dark ? 'text-white/90' : 'text-primary-600'}`}>
              {p.tagline}
            </p>
            <p className={`mt-5 text-lg leading-relaxed max-w-3xl ${softText}`}>
              {p.description}
            </p>
          </div>
          {p.logo && (
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-2xl p-5 shrink-0 shadow-md border border-navy-100">
              <Image src={p.logo} alt={p.title} fill className="object-contain" sizes="160px" />
            </div>
          )}
        </div>

        {/* Benefits */}
        {p.benefits && (
          <div className="mb-14">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-5 ${dark ? 'text-primary-300' : 'text-primary-600'}`}>
              Beneficios
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {p.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 py-2">
                  <CheckCircleIcon className={`h-5 w-5 ${checkColor} mt-0.5 shrink-0`} />
                  <span className={softText}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How it works */}
        {p.howItWorks && (
          <div className="mb-14">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-5 ${dark ? 'text-primary-300' : 'text-primary-600'}`}>
              Cómo funciona
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {p.howItWorks.map((step) => (
                <div key={step.step} className={cardCls}>
                  <span className={`flex items-center justify-center h-9 w-9 rounded-lg text-sm font-bold mb-3 ${
                    dark ? 'bg-primary-500 text-white' : p.accent === 'teal' ? 'bg-teal-500 text-white' : 'bg-primary-500 text-white'
                  }`}>
                    {step.step}
                  </span>
                  <p className={`font-bold mb-1 ${dark ? 'text-white' : 'text-navy-900'}`}>{step.title}</p>
                  <p className={`text-sm leading-relaxed ${mutedText}`}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stages (CRM) */}
        {p.stages && (
          <div className="mb-14">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-5 ${dark ? 'text-primary-300' : 'text-primary-600'}`}>
              9 etapas validadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {p.stages.map((stage, i) => (
                <div key={i} className={cardCls}>
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center justify-center h-8 w-8 rounded-lg text-sm font-bold ${
                      dark ? 'bg-white/10 text-primary-300' : 'bg-primary-100 text-primary-700'
                    }`}>
                      {i + 1}
                    </span>
                    <span className={`font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{stage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {p.features && (
          <div className="mb-14">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-5 ${dark ? 'text-primary-300' : 'text-primary-600'}`}>
              Funcionalidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {p.features.map((f) => (
                <div key={f} className={`${cardCls} flex items-start gap-3`}>
                  <CheckCircleIcon className={`h-5 w-5 ${checkColor} mt-0.5 shrink-0`} />
                  <span className={`text-sm ${dark ? 'text-white/90' : 'text-navy-700'}`}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extras */}
        {p.extras && (
          <div className="mb-14 grid md:grid-cols-2 gap-4">
            {p.extras.map((e) => (
              <div key={e.title} className={cardCls}>
                <div className={`${iconBox} mb-4`}>
                  <ShieldCheckIcon className="h-6 w-6" />
                </div>
                <h4 className={`font-bold mb-2 ${dark ? 'text-white' : 'text-navy-900'}`}>{e.title}</h4>
                <p className={`text-sm leading-relaxed ${mutedText}`}>{e.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Use cases */}
        {p.useCases && (
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-5 ${dark ? 'text-primary-300' : 'text-primary-600'}`}>
              Casos de uso
            </h3>
            <div className="flex flex-wrap gap-2">
              {p.useCases.map((u) => (
                <span
                  key={u}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    dark ? 'bg-navy-800 border border-navy-700 text-white' : 'bg-white border border-navy-100 text-navy-700'
                  }`}
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${siteConfig.url}/soluciones#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Soluciones', item: `${siteConfig.url}/soluciones` },
  ],
}

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteConfig.url}/soluciones#webpage`,
  url: `${siteConfig.url}/soluciones`,
  name: solTitle,
  description: solDescription,
  inLanguage: 'es-CL',
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  about: { '@id': `${siteConfig.url}/#organization` },
  primaryImageOfPage: `${siteConfig.url}/og-image.png`,
  breadcrumb: { '@id': `${siteConfig.url}/soluciones#breadcrumb` },
  hasPart: siteConfig.solutionsOrder.map((k) => {
    const p = siteConfig.solutions[k]
    return {
      '@type': 'WebPageElement',
      name: p.title,
      url: `${siteConfig.url}/soluciones#${p.slug}`,
    }
  }),
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@graph': siteConfig.solutionsOrder.map((k) => {
    const p = siteConfig.solutions[k]
    const featureList = [
      ...(('features' in p && Array.isArray((p as { features?: string[] }).features)
        ? (p as { features?: string[] }).features ?? []
        : []) as string[]),
      ...(('benefits' in p && Array.isArray((p as { benefits?: string[] }).benefits)
        ? (p as { benefits?: string[] }).benefits ?? []
        : []) as string[]),
    ]
    return {
      '@type': 'SoftwareApplication',
      '@id': `${siteConfig.url}/soluciones#${p.slug}-app`,
      name: p.title,
      alternateName: p.tagline,
      description: p.description,
      applicationCategory: 'MedicalApplication',
      applicationSubCategory: 'HealthApplication',
      operatingSystem: 'Web, Cloud',
      url: `${siteConfig.url}/soluciones#${p.slug}`,
      inLanguage: 'es-CL',
      ...(featureList.length > 0 ? { featureList } : {}),
      ...('logo' in p && p.logo
        ? { image: `${siteConfig.url}${p.logo}` }
        : { image: `${siteConfig.url}/og-image.png` }),
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'CLP',
        price: '0',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'CLP',
          price: '0',
          valueAddedTaxIncluded: true,
          description: 'Precio bajo cotización según alcance.',
        },
      },
      provider: { '@id': `${siteConfig.url}/#organization` },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Clínicas y hospitales en Chile',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
    }
  }),
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': siteConfig.solutionsOrder.map((k) => {
    const p = siteConfig.solutions[k]
    return {
      '@type': 'Service',
      '@id': `${siteConfig.url}/soluciones#${p.slug}-service`,
      name: p.title,
      description: p.description,
      serviceType: p.title,
      category: 'HealthcareSoftware',
      url: `${siteConfig.url}/soluciones#${p.slug}`,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'Chile' },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Clínicas, hospitales y centros de salud',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'CLP',
          description: 'Precio bajo cotización.',
        },
      },
    }
  }),
}

export default function SolucionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />
        <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 animate-fade-in-up">
          <span className="chip-primary mb-6">Soluciones</span>
          <h1 className="heading-hero max-w-4xl">
            Siete plataformas. <span className="text-gradient-primary">Un mismo propósito</span>: mejor salud.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-navy-600 max-w-3xl leading-relaxed">
            Software clínico especializado para clínicas y hospitales en Chile.
            Modular, integrable y diseñado con profesionales del sector.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {siteConfig.solutionsOrder.map((k) => {
              const prod = siteConfig.solutions[k]
              return (
                <Link
                  key={k}
                  href={`#${prod.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-navy-100 text-navy-700 hover:border-primary-300 hover:text-primary-700 transition"
                >
                  {prod.title}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {products.map((p) => <ProductSection key={p.id} p={p} />)}

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Hablemos de tu clínica.
          </h2>
          <p className="mt-6 text-lg text-primary-50 max-w-2xl mx-auto">
            Agenda una reunión con nuestro equipo y diseñemos la combinación correcta para tu centro.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition shadow-xl"
            >
              Agendar reunión
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
