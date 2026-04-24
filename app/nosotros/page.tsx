import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon,
  CpuChipIcon,
  LifebuoyIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Nosotros',
  description:
    'Ranvi Systems desarrolla software clínico especializado para el sector salud en Chile. Misión, enfoque, proceso de implementación y partners.',
}

const values = [
  { icon: HeartIcon, title: 'Especialización en salud', desc: 'Conocimiento profundo del sector y sus necesidades específicas.' },
  { icon: CpuChipIcon, title: 'Tecnología de vanguardia', desc: 'Soluciones modernas y escalables adaptadas a entornos clínicos.' },
  { icon: LifebuoyIcon, title: 'Soporte continuo', desc: 'Acompañamiento durante todo el ciclo de vida del proyecto.' },
  { icon: PuzzlePieceIcon, title: 'Integración flexible', desc: 'Compatible con sistemas existentes y entornos clínicos diversos.' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />
        <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 animate-fade-in-up">
          <span className="chip-primary mb-6">Nosotros</span>
          <h1 className="heading-hero max-w-4xl">
            Hecho en Chile, <span className="text-gradient-primary">diseñado con la salud</span> en mente.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-navy-600 max-w-3xl leading-relaxed">
            Construimos software clínico para transformar la experiencia de pacientes y equipos de salud
            — con innovación, integración real y acompañamiento continuo.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="section bg-white">
        <div className="container-wrap grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Misión</span>
            <h2 className="mt-3 heading-section">
              Tecnología al servicio de la salud.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-lg text-navy-600 leading-relaxed">
            <p>
              {siteConfig.company} es una empresa chilena dedicada al desarrollo e implementación de soluciones
              tecnológicas enfocadas en el sector salud. Aportamos innovación, eficiencia y mejora continua en la
              experiencia de pacientes y centros clínicos.
            </p>
            <p>
              Trabajamos con la convicción de que la tecnología bien implementada transforma la manera en que se
              gestionan los centros de salud — mejorando la experiencia del paciente y la eficiencia operativa
              de las instituciones.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-navy-50">
        <div className="container-wrap">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Por qué Ranvi</span>
            <h2 className="mt-3 heading-section">
              Cuatro razones para elegirnos.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="icon-box mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acompañamiento */}
      <section className="section bg-white">
        <div className="container-wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Acompañamiento</span>
            <h2 className="mt-3 heading-section">
              Tu equipo extendido, desde el día uno.
            </h2>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              Nuestro compromiso no termina con la implementación. Ofrecemos soporte técnico, capacitación,
              actualizaciones y optimización continua.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Soporte técnico disponible cuando lo necesites',
                'Capacitación para equipo clínico y administrativo',
                'Actualizaciones y mejoras continuas',
                'Optimización de procesos basada en datos reales',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Descubrimiento', desc: 'Análisis de necesidades y alcance.' },
              { title: 'Integración', desc: 'Conexión con sistemas existentes.' },
              { title: 'Piloto', desc: 'Prueba controlada en entorno real.' },
              { title: 'Despliegue', desc: 'Implementación completa.' },
              { title: 'Soporte', desc: 'Acompañamiento continuo.' },
              { title: 'Optimización', desc: 'Mejora continua basada en datos.' },
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl ${i % 2 === 0 ? 'bg-primary-50 border border-primary-100' : 'bg-teal-50 border border-teal-100'}`}>
                <span className="text-xs font-bold text-primary-600 tracking-wider">0{i + 1}</span>
                <p className="mt-2 font-bold text-navy-900">{item.title}</p>
                <p className="mt-1 text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-navy-50">
        <div className="container-wrap">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Partners</span>
            <h2 className="mt-3 heading-section">Ecosistema colaborativo.</h2>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              Trabajamos con socios estratégicos que comparten nuestra visión de innovación y calidad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card flex items-start gap-5">
              <div className="relative w-20 h-20 shrink-0 bg-white rounded-xl border border-navy-100 p-2">
                <Image src="/logo-masterkey.png" alt={siteConfig.partners.masterkey.name} fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">{siteConfig.partners.masterkey.name}</h3>
                <p className="text-sm text-primary-600 font-semibold mb-2">{siteConfig.partners.masterkey.role}</p>
                <p className="text-sm text-navy-600 leading-relaxed">{siteConfig.partners.masterkey.description}</p>
              </div>
            </div>
            <div className="card flex items-start gap-5">
              <div className="relative w-20 h-20 shrink-0 bg-white rounded-xl border border-navy-100 p-2">
                <Image src="/logo-clever-salud.png" alt={siteConfig.partners.cleverSalud.name} fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">{siteConfig.partners.cleverSalud.name}</h3>
                <p className="text-sm text-primary-600 font-semibold mb-2">{siteConfig.partners.cleverSalud.role}</p>
                <p className="text-sm text-navy-600 leading-relaxed">{siteConfig.partners.cleverSalud.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Conversemos sobre tu proyecto.
          </h2>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition shadow-xl"
            >
              Contáctanos
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
