import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import SolutionCard from '@/components/SolutionCard'
import PartnerBadge from '@/components/PartnerBadge'
import FAQ from '@/components/FAQ'
import Icon from '@/components/Icon'
import { QueueListIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Inicio',
  description: siteConfig.hero.subtitle,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-teal-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="heading-1 mb-6">
              {siteConfig.hero.title}
            </h1>
            <p className="text-body text-xl mb-8 max-w-2xl mx-auto">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contacto" className="btn-primary">
                {siteConfig.hero.ctaPrimary}
              </Link>
              <Link href="/soluciones" className="btn-secondary">
                {siteConfig.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-6">Qué hacemos</h2>
            <p className="text-body">
              {siteConfig.company} es una empresa chilena dedicada al desarrollo e implementación 
              de soluciones tecnológicas enfocadas en el sector salud. Nuestro propósito es aportar 
              innovación, eficiencia y mejora significativa en la experiencia de pacientes y centros 
              clínicos mediante herramientas digitales de autoservicio, automatización de procesos 
              y gestión inteligente de pagos.
            </p>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nuestras Soluciones</h2>
            <p className="text-body max-w-2xl mx-auto">
              Tecnología diseñada específicamente para optimizar la gestión y atención en centros de salud
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <SolutionCard
              title={siteConfig.solutions.queueManager.title}
              description={siteConfig.solutions.queueManager.description}
              href="/soluciones#gestor-fila"
              icon={<QueueListIcon className="h-12 w-12" />}
            />
            <SolutionCard
              title={siteConfig.solutions.paymentKiosk.title}
              description={siteConfig.solutions.paymentKiosk.description}
              href="/soluciones#totem-autopago"
              icon={<CreditCardIcon className="h-12 w-12" />}
            />
          </div>
        </div>
      </section>

      {/* Partners y ecosistema */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Partners y Ecosistema</h2>
            <p className="text-body max-w-2xl mx-auto">
              Trabajamos con socios estratégicos para ofrecer soluciones integrales y de calidad
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="card">
              <PartnerBadge
                name={siteConfig.partners.masterkey.name}
                role={siteConfig.partners.masterkey.role}
                logo="/logo-masterkey.png"
                logoAlt={`${siteConfig.partners.masterkey.name} logo`}
              />
              <p className="text-navy-700 mt-4 text-center">
                {siteConfig.partners.masterkey.description}
              </p>
            </div>
            <div className="card">
              <PartnerBadge
                name={siteConfig.partners.cleverSalud.name}
                role={siteConfig.partners.cleverSalud.role}
                logo="/logo-clever-salud.png"
                logoAlt={`${siteConfig.partners.cleverSalud.name} logo`}
              />
              <p className="text-navy-700 mt-4 text-center">
                {siteConfig.partners.cleverSalud.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integración con entornos clínicos */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Integración con Entornos Clínicos Existentes</h2>
              <p className="text-body">
                Nuestras soluciones están diseñadas para integrarse de manera fluida con sistemas 
                de gestión hospitalaria (HIS) y otros sistemas clínicos existentes. Utilizamos APIs 
                estándar y protocolos seguros para garantizar una implementación sin interrupciones 
                en la operación diaria de su centro de salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir Ranvi Systems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Por qué elegir Ranvi Systems</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {siteConfig.whyChoose.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4 text-primary-500">
                  <Icon name={item.icon} />
                </div>
                <h3 className="heading-3 text-lg mb-3">{item.title}</h3>
                <p className="text-navy-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios (placeholder) */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <p className="text-navy-700 mb-4 italic">
                  "Las soluciones de Ranvi Systems han mejorado significativamente la eficiencia 
                  en nuestro centro de atención."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-navy-900">Centro de Salud</p>
                    <p className="text-sm text-navy-600">Chile</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <p className="text-navy-700 mb-4 italic">
                  "La implementación fue fluida y el soporte continuo ha sido excelente."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-navy-900">Clínica</p>
                    <p className="text-sm text-navy-600">Chile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Preguntas Frecuentes</h2>
            </div>
            <FAQ items={siteConfig.faq} />
          </div>
        </div>
      </section>

      {/* CTA Final + Formulario */}
      <section id="contacto" className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-6 text-white">¿Listo para transformar tu centro de salud?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Contáctanos para conocer más sobre nuestras soluciones y solicitar una demostración
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

// Componente de formulario de contacto (reutilizado en página de contacto)
function ContactForm() {
  return (
    <form 
      action="mailto:contacto@ranvisystems.cl?subject=Contacto desde sitio web" 
      method="post"
      encType="text/plain"
      className="bg-white rounded-xl p-8 shadow-xl"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
            {siteConfig.contact.form.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
            {siteConfig.contact.form.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="position" className="block text-sm font-semibold text-navy-900 mb-2">
            {siteConfig.contact.form.position}
          </label>
          <input
            type="text"
            id="position"
            name="position"
            className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
            {siteConfig.contact.form.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900"
            aria-required="true"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
          {siteConfig.contact.form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
          {siteConfig.contact.form.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900"
          aria-required="true"
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="demo"
            className="mr-2 w-4 h-4 text-primary-600 border-navy-300 rounded focus:ring-primary-500"
          />
          <span className="text-navy-900">{siteConfig.contact.form.demoCheckbox}</span>
        </label>
      </div>
      <button type="submit" className="btn-primary w-full">
        {siteConfig.contact.form.submit}
      </button>
    </form>
  )
}
