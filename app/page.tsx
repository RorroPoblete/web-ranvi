import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'
import FAQ from '@/components/FAQ'
import {
  ArrowRightIcon,
  HeartIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  QueueListIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UsersIcon,
  DocumentCheckIcon,
  LinkIcon,
  ChartBarIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

const homeTitle = 'Software clínico para clínicas y hospitales en Chile'
const homeDescription =
  'Ranvi Systems: CRM quirúrgico, trazabilidad de biopsias, gestión de equipos médicos para acreditación EQ, tótem de autopago, gestor de fila y más — integrados con tus sistemas clínicos.'

export const metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    title: homeTitle,
    description: homeDescription,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/og-image.png'],
  },
}

const s = siteConfig.solutions

const products = [
  {
    slug: s.surgicalCrm.slug,
    icon: HeartIcon,
    title: s.surgicalCrm.title,
    tagline: s.surgicalCrm.tagline,
    desc: 'Pipeline quirúrgico de 9 etapas, presupuestos, exámenes preop, consentimientos digitales y Ley 19.628.',
    tag: 'Nuevo',
    accent: 'primary' as const,
  },
  {
    slug: s.biopsyTraceability.slug,
    icon: BeakerIcon,
    title: s.biopsyTraceability.title,
    tagline: s.biopsyTraceability.tagline,
    desc: 'Trazabilidad extremo a extremo de muestras, libro de trazabilidad, QR, alertas e informes AP.',
    tag: 'Nuevo',
    accent: 'primary' as const,
  },
  {
    slug: s.medicalEquipment.slug,
    icon: WrenchScrewdriverIcon,
    title: s.medicalEquipment.title,
    tagline: s.medicalEquipment.tagline,
    desc: 'Inventario, mantenciones, calibraciones y capacitación conforme a acreditación EQ 1.1 → 3.1.',
    tag: 'Nuevo',
    accent: 'teal' as const,
  },
  {
    slug: s.queueManager.slug,
    icon: QueueListIcon,
    title: s.queueManager.title,
    tagline: s.queueManager.tagline,
    desc: 'Flujo ordenado de pacientes en tiempo real, con tickets, pantallas y notificaciones.',
    accent: 'primary' as const,
  },
  {
    slug: s.paymentKiosk.slug,
    icon: CreditCardIcon,
    title: s.paymentKiosk.title,
    tagline: s.paymentKiosk.tagline,
    desc: 'Autopago certificado con Transbank y Getnet. Menos filas en caja, más tiempo para lo clínico.',
    accent: 'teal' as const,
  },
  {
    slug: s.appointmentChatbot.slug,
    icon: ChatBubbleLeftRightIcon,
    title: s.appointmentChatbot.title,
    tagline: s.appointmentChatbot.tagline,
    desc: 'Chatbot 24/7 que confirma, reagenda y agenda citas en lenguaje natural.',
    accent: 'primary' as const,
  },
  {
    slug: s.qualitySystem.slug,
    icon: ClipboardDocumentCheckIcon,
    title: s.qualitySystem.title,
    tagline: s.qualitySystem.tagline,
    desc: 'Indicadores, documentación y auditorías alineados a acreditación nacional e internacional.',
    accent: 'teal' as const,
  },
]

const crmStages = s.surgicalCrm.stages.map((name, i) => ({
  n: i + 1,
  name,
}))

const eqStandards = [
  { code: 'EQ 1.1', title: 'Inventario actualizado', desc: 'Lista completa de equipos con identificación, estado y ubicación.' },
  { code: 'EQ 1.2', title: 'Vida útil y reposición', desc: 'Cálculo de vida útil restante y plan documentado de reemplazo.' },
  { code: 'EQ 2.1', title: 'Mantención preventiva críticos', desc: 'Plan anual con carta Gantt y toma de conocimiento del director médico.' },
  { code: 'EQ 2.2', title: 'Mantención equipos de apoyo', desc: 'Protocolos correctivos configurables para equipos no críticos.' },
  { code: 'EQ 2.3', title: 'Calibraciones', desc: 'Registro con laboratorio acreditado, certificado y vigencia.' },
  { code: 'EQ 3.1', title: 'Operadores autorizados', desc: 'Capacitación vigente y autorización por equipo.' },
]

const features = [
  { icon: LinkIcon, title: 'Integraciones reales', desc: 'APIs con HIS, RIS, laboratorio y facturación. Sin reingreso manual de datos.' },
  { icon: BoltIcon, title: 'Automatizaciones por flujo', desc: 'Alertas, recordatorios y validaciones automáticas para que nada se caiga.' },
  { icon: ShieldCheckIcon, title: 'Cumplimiento Ley 19.628', desc: 'Consentimiento versionado, cifrado en reposo y tránsito, audit log.' },
  { icon: CreditCardIcon, title: 'Pagos Transbank + Getnet', desc: 'Tótems certificados y cobros online integrados al flujo clínico.' },
  { icon: ChartBarIcon, title: 'Indicadores en tiempo real', desc: 'KPIs de gestión, tiempos por etapa, cumplimiento de acreditación.' },
  { icon: DocumentCheckIcon, title: 'Documentos y firma digital', desc: 'Presupuestos, consentimientos y actas firmadas y auditables.' },
  { icon: UsersIcon, title: 'Roles y permisos', desc: 'Admin, médico, enfermería, recepción y paciente — cada uno ve lo suyo.' },
  { icon: LockClosedIcon, title: 'Datos en Chile', desc: 'Infraestructura con respaldo, alta disponibilidad y restore probado.' },
]

const partners = [
  { name: 'MasterKey', logo: '/logo-masterkey.png' },
  { name: 'Clever Salud', logo: '/logo-clever-salud.png' },
  { name: 'Transbank', logo: '/logo-transbank.png' },
  { name: 'Getnet', logo: '/logo-getnet.png' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteConfig.url}/#faq`,
  inLanguage: 'es-CL',
  mainEntity: siteConfig.faq.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: homeTitle,
  description: homeDescription,
  inLanguage: 'es-CL',
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  about: { '@id': `${siteConfig.url}/#organization` },
  primaryImageOfPage: `${siteConfig.url}/og-image.png`,
  breadcrumb: { '@id': `${siteConfig.url}/#home-breadcrumb` },
}

const homeBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${siteConfig.url}/#home-breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
  ],
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${siteConfig.url}/#solutions-list`,
  name: 'Soluciones Ranvi Systems',
  description:
    'Portafolio de 7 plataformas clínicas para clínicas y hospitales en Chile.',
  numberOfItems: siteConfig.solutionsOrder.length,
  itemListElement: siteConfig.solutionsOrder.map((k, i) => {
    const p = siteConfig.solutions[k]
    return {
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${siteConfig.url}/soluciones#${p.slug}`,
    }
  }),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />
        <div aria-hidden className="absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-primary-200/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-teal-200/40 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 lg:py-48 animate-fade-in-up">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-navy-900">
              Plataformas que{' '}
              <span className="text-gradient-primary">modernizan</span>{' '}
              tu clínica.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-navy-600 leading-relaxed max-w-3xl">
              CRM quirúrgico, trazabilidad de biopsias, gestión de equipos médicos y más — integrados con tus sistemas existentes.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/contacto" className="btn-primary">
                Solicitar demo
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                Ver soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="section bg-white">
        <div className="container-wrap">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">Nuestras soluciones</span>
            <h2 className="mt-3 heading-section">
              Un portafolio clínico especializado.
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Cada plataforma resuelve un problema concreto del centro de salud.
              Se usan por separado o combinadas — con los datos y flujos conectados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/soluciones#${p.slug}`}
                className="group card flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={p.accent === 'teal' ? 'icon-box-teal' : 'icon-box'}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  {p.tag && (
                    <span className="chip-teal">{p.tag}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-primary-700 transition">
                  {p.title}
                </h3>
                <p className="text-primary-600 text-sm font-semibold mb-3">{p.tagline}</p>
                <p className="text-sm text-navy-500 leading-relaxed flex-1">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Ver {p.title} <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CRM QUIRURGICO — flow */}
      <section id="crm" className="section bg-white border-t border-navy-100">
        <div className="container-wrap">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">CRM Quirúrgico</span>
            <h2 className="mt-3 heading-section">
              9 etapas validadas. Nada cae entremedio.
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Cada etapa tiene responsables, SLA y requisitos automáticos. Si falta algo, el sistema no deja avanzar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crmStages.map((stage) => (
              <div key={stage.n} className="group p-5 bg-navy-50 rounded-xl border border-navy-100 hover:border-primary-200 hover:bg-white hover:shadow-lg hover:shadow-primary-500/5 transition-all">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary-100 text-primary-700 text-sm font-bold group-hover:bg-primary-600 group-hover:text-white transition">
                    {stage.n}
                  </span>
                  <h3 className="font-semibold text-navy-900">{stage.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href={`/soluciones#${s.surgicalCrm.slug}`} className="btn-ghost">
              Ver CRM Quirúrgico completo <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BIOPSIAS — flow */}
      <section id="biopsias" className="section bg-navy-50">
        <div className="container-wrap grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">Trazabilidad de Biopsias</span>
            <h2 className="mt-3 heading-section">
              Cada muestra, cada paso trazado.
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Desde la solicitud hasta el informe anatomopatológico: libro de trazabilidad auditable,
              traspasos firmados, QR por muestra y alertas automáticas por muestras detenidas.
            </p>
            <ul className="mt-8 space-y-3">
              {s.biopsyTraceability.benefits.slice(0, 5).map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-navy-700">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href={`/soluciones#${s.biopsyTraceability.slug}`} className="btn-ghost">
                Ver Trazabilidad de Biopsias <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {s.biopsyTraceability.howItWorks.map((step) => (
              <div key={step.step} className="p-5 rounded-xl bg-white border border-navy-100">
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary-100 text-primary-700 text-sm font-bold mb-3">
                  {step.step}
                </span>
                <p className="font-semibold text-navy-900 mb-1">{step.title}</p>
                <p className="text-sm text-navy-600">{step.description}</p>
              </div>
            ))}
            <div className="p-5 rounded-xl bg-navy-900 text-white">
              <BeakerIcon className="h-6 w-6 mb-3 text-primary-300" />
              <p className="font-semibold mb-1">Multi-tenant</p>
              <p className="text-sm text-navy-300">Pensado para redes de salud y clínicas con varios centros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPOS MEDICOS — acreditacion EQ */}
      <section id="equipos" className="section bg-white border-t border-navy-100">
        <div className="container-wrap">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Gestión de Equipos Médicos</span>
            <h2 className="mt-3 heading-section">
              Acreditación EQ, bajo control.
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              GMEM cumple los estándares EQ de la Superintendencia de Salud. Evidencia lista para el acreditador en cada visita.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {eqStandards.map((eq) => (
              <div key={eq.code} className="p-6 bg-navy-50 rounded-xl border border-navy-100 hover:border-teal-200 hover:bg-white hover:shadow-lg hover:shadow-teal-500/5 transition-all">
                <span className="chip-teal mb-3">{eq.code}</span>
                <h3 className="font-bold text-navy-900 mb-2">{eq.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href={`/soluciones#${s.medicalEquipment.slug}`} className="btn-ghost">
              Ver Gestión de Equipos Médicos <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES — todo integrado */}
      <section className="section bg-navy-50">
        <div className="container-wrap">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">Todo integrado</span>
            <h2 className="mt-3 heading-section">
              Una sola plataforma para el equipo completo.
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Recepción, enfermería, médicos, anestesiólogos y administración trabajan sobre los mismos datos.
              Sin Excel, sin carpetas físicas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="icon-box mb-4">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{f.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="section bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">
              Seguridad y cumplimiento
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
              Datos clínicos bajo estándar hospitalario.
            </h2>
            <p className="mt-4 text-lg text-navy-300 leading-relaxed">
              Diseñado desde el primer día para operar bajo las leyes chilenas de protección de datos personales y derechos del paciente.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Autenticación con roles (admin, médico, enfermería, recepción, paciente)',
                'Audit log con IP y user-agent de cada acción',
                'Cifrado en reposo (PostgreSQL) y en tránsito (HTTPS)',
                'Consentimiento de datos versionado — Ley 19.628',
                'Ficha clínica con retención conforme a Ley 20.584',
                'Backups automáticos y restore probado mensualmente',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-navy-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SecurityBadge icon={LockClosedIcon} label="Ley 19.628" sub="Datos personales" />
            <SecurityBadge icon={ShieldCheckIcon} label="Ley 20.584" sub="Ficha clínica" />
            <SecurityBadge icon={UsersIcon} label="RBAC" sub="Roles granulares" />
            <SecurityBadge icon={DocumentCheckIcon} label="Firma digital" sub="Auditable" />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section bg-white">
        <div className="container-wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Partners y ecosistema</span>
            <h2 className="mt-3 heading-section">
              Trabajamos con los mejores.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center h-24 rounded-xl bg-navy-50 border border-navy-100 hover:border-primary-200 transition p-6"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-navy-50">
        <div className="container-wrap max-w-3xl">
          <div className="mb-12">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="mt-3 heading-section">Respuestas rápidas.</h2>
          </div>
          <FAQ items={siteConfig.faq} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-gradient-to-br from-primary-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            ¿Listo para transformar tu centro de salud?
          </h2>
          <p className="mt-6 text-lg text-primary-50 max-w-2xl mx-auto">
            Agenda una demostración con nuestro equipo. Conoce qué combinación de soluciones se ajusta a tu clínica.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition shadow-xl"
            >
              Solicitar demo
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/soluciones"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Ver soluciones
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


function SecurityBadge({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  sub: string
}) {
  return (
    <div className="p-6 rounded-xl bg-navy-800 border border-navy-700 hover:border-primary-400 transition">
      <Icon className="h-6 w-6 text-primary-300 mb-3" />
      <p className="font-bold text-white">{label}</p>
      <p className="text-xs text-navy-400 mt-1">{sub}</p>
    </div>

)
}
