import { siteConfig } from '@/lib/siteConfig'
import PartnerBadge from '@/components/PartnerBadge'
import { CheckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Nosotros',
  description: 'Conoce más sobre Ranvi Systems, nuestra misión y nuestro enfoque en soluciones tecnológicas para el sector salud',
}

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-teal-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Sobre Ranvi Systems</h1>
            <p className="text-body text-xl max-w-2xl mx-auto">
              Innovación, eficiencia y mejora continua en la experiencia de pacientes y centros clínicos
            </p>
          </div>
        </div>
      </section>

      {/* Misión/Propósito */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Nuestra Misión</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body mb-6">
                {siteConfig.company} es una empresa chilena dedicada al desarrollo e implementación 
                de soluciones tecnológicas enfocadas en el sector salud. Nuestro propósito es aportar 
                innovación, eficiencia y mejora significativa en la experiencia de pacientes y centros 
                clínicos mediante herramientas digitales de autoservicio, automatización de procesos 
                y gestión inteligente de pagos.
              </p>
              <p className="text-body">
                Trabajamos con la convicción de que la tecnología bien implementada puede transformar 
                la manera en que se gestionan y operan los centros de salud, mejorando tanto la 
                experiencia del paciente como la eficiencia operativa de las instituciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialización en salud */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Especialización en Salud</h2>
            <p className="text-body mb-8">
              Nos especializamos exclusivamente en el sector salud, lo que nos permite entender 
              profundamente las necesidades específicas de clínicas, hospitales y centros médicos. 
              Nuestro equipo combina experiencia técnica con conocimiento del sector, asegurando 
              que nuestras soluciones no solo sean tecnológicamente avanzadas, sino también 
              prácticas y adaptadas a la realidad operativa de los centros de salud.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="heading-3 text-xl mb-4">Conocimiento del Sector</h3>
                <p className="text-navy-700">
                  Entendemos los flujos de trabajo, regulaciones y desafíos únicos que enfrentan 
                  los centros de salud en Chile.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-3 text-xl mb-4">Soluciones Adaptadas</h3>
                <p className="text-navy-700">
                  Desarrollamos soluciones que se adaptan a diferentes tipos de centros, desde 
                  clínicas pequeñas hasta grandes hospitales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acompañamiento y soporte */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Acompañamiento y Soporte Continuo</h2>
            <p className="text-body mb-8">
              Nuestro compromiso no termina con la implementación. Ofrecemos acompañamiento continuo 
              durante todo el ciclo de vida del proyecto, incluyendo soporte técnico, actualizaciones, 
              capacitación y optimización continua de procesos. Creemos en relaciones de largo plazo 
              con nuestros clientes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">Soporte Técnico</h4>
                <p className="text-navy-600 text-sm">Disponible cuando lo necesites</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">Capacitación</h4>
                <p className="text-navy-600 text-sm">Para todo tu equipo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">Optimización</h4>
                <p className="text-navy-600 text-sm">Mejora continua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline de implementación */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-2 mb-12 text-center">Proceso de Implementación</h2>
            <div className="relative">
              {/* Línea vertical para desktop */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              <div className="space-y-8">
                {siteConfig.implementation.map((phase, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Punto en la línea */}
                    <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Contenido */}
                    <div className="md:ml-16 flex-1">
                      <div className="card">
                        <div className="flex items-center mb-2">
                          <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-3 md:hidden">
                            {index + 1}
                          </span>
                          <h3 className="heading-3 text-xl">{phase.phase}</h3>
                        </div>
                        <p className="text-navy-700">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Nuestros Partners</h2>
            <p className="text-body mb-8 text-center">
              Trabajamos con socios estratégicos que comparten nuestra visión de innovación y calidad
            </p>
            <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>
    </>
  )
}
