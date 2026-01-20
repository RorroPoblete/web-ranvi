import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'
import { CheckIcon, QueueListIcon, CreditCardIcon, ShieldCheckIcon, LinkIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Soluciones',
  description: 'Conoce nuestras soluciones tecnológicas para el sector salud: Gestor de Fila Digital y Tótem de Autopago',
}

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-teal-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Nuestras Soluciones</h1>
            <p className="text-body text-xl max-w-2xl mx-auto">
              Tecnología diseñada específicamente para optimizar la gestión y atención en centros de salud
            </p>
          </div>
        </div>
      </section>

      {/* Gestor de Fila Digital */}
      <section id="gestor-fila" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 md:mb-0 md:mr-10 flex-shrink-0 bg-white rounded-lg p-4">
                <Image
                  src="/logo-gestor.png?v=2"
                  alt={`${siteConfig.solutions.queueManager.title} Logo`}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="heading-2">{siteConfig.solutions.queueManager.title}</h2>
                <p className="text-body mt-2">{siteConfig.solutions.queueManager.description}</p>
              </div>
            </div>

            {/* Beneficios */}
            <div className="mb-12">
              <h3 className="heading-3 mb-6">Beneficios</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {siteConfig.solutions.queueManager.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-navy-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cómo funciona */}
            <div className="mb-12">
              <h3 className="heading-3 mb-8">Cómo funciona</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {siteConfig.solutions.queueManager.howItWorks.map((step) => (
                  <div key={step.step} className="card text-center">
                    <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="heading-3 text-xl mb-3">{step.title}</h4>
                    <p className="text-navy-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Casos de uso */}
            <div>
              <h3 className="heading-3 mb-6">Casos de uso</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {siteConfig.solutions.queueManager.useCases.map((useCase, index) => (
                  <div key={index} className="card text-center">
                    <p className="font-semibold text-navy-900">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tótem de Autopago */}
      <section id="totem-autopago" className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 md:mb-0 md:mr-10 flex-shrink-0">
                <Image
                  src="/logo-autopago.png"
                  alt={`${siteConfig.solutions.paymentKiosk.title} Logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="heading-2">{siteConfig.solutions.paymentKiosk.title}</h2>
                <p className="text-body mt-2">{siteConfig.solutions.paymentKiosk.description}</p>
              </div>
            </div>

            {/* Beneficios */}
            <div className="mb-12">
              <h3 className="heading-3 mb-6">Beneficios</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {siteConfig.solutions.paymentKiosk.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-navy-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medios de pago */}
            <div className="mb-12">
              <h3 className="heading-3 mb-6">Medios de pago</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {siteConfig.solutions.paymentKiosk.paymentMethods.map((method, index) => (
                  <div key={index} className="card text-center">
                    <p className="font-semibold text-navy-900">{method}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integraciones con pasarelas de pago */}
            {siteConfig.solutions.paymentKiosk.paymentGateways && (
              <div className="mb-12">
                <h3 className="heading-3 mb-6">Integraciones con pasarelas de pago</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {siteConfig.solutions.paymentKiosk.paymentGateways.map((gateway, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center mb-3">
                        {gateway.logo ? (
                          <div className="relative w-16 h-16 mr-3 flex-shrink-0">
                            <Image
                              src={gateway.logo}
                              alt={`${gateway.name} Logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <BuildingLibraryIcon className="h-8 w-8 text-primary-500 mr-3" />
                        )}
                        <h4 className="heading-3 text-xl">{gateway.name}</h4>
                      </div>
                      <p className="text-navy-700">{gateway.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Seguridad e Integración */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-primary-500 mr-3" />
                  <h4 className="heading-3 text-xl">Seguridad</h4>
                </div>
                <p className="text-navy-700">
                  El tótem cumple con los más altos estándares de seguridad y está certificado 
                  para procesar transacciones de manera segura, cumpliendo con normativas de 
                  protección de datos y estándares PCI DSS.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center mb-4">
                  <LinkIcon className="h-8 w-8 text-primary-500 mr-3" />
                  <h4 className="heading-3 text-xl">Integración</h4>
                </div>
                <p className="text-navy-700">
                  Se integra de manera fluida con sistemas de facturación y gestión existentes, 
                  permitiendo sincronización en tiempo real de transacciones y estados de cuenta. 
                  Compatible con las principales pasarelas de pago del mercado como Transbank y Getnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6 text-white">¿Interesado en nuestras soluciones?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Agenda una reunión con nuestro equipo para conocer más detalles y ver una demostración
            </p>
            <Link href="/contacto" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-block">
              Agendar reunión
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
