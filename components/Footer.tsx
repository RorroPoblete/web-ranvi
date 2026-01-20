 import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-navy-300 mb-4">
              {siteConfig.company} es una empresa chilena dedicada al desarrollo e implementación 
              de soluciones tecnológicas enfocadas en el sector salud.
            </p>
            <p className="text-navy-300">
              {siteConfig.country}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-navy-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  {siteConfig.nav.home}
                </Link>
              </li>
              <li>
                <Link 
                  href="/soluciones" 
                  className="text-navy-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  {siteConfig.nav.solutions}
                </Link>
              </li>
              <li>
                <Link 
                  href="/nosotros" 
                  className="text-navy-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  {siteConfig.nav.about}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className="text-navy-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  {siteConfig.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-navy-300">
              <li>
                <Link 
                  href="/contacto" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  Solicitar información
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-navy-400 text-sm">
              © {currentYear} {siteConfig.company}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/aviso-legal" 
                className="text-navy-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
              >
                Aviso Legal
              </Link>
              <Link 
                href="/privacidad" 
                className="text-navy-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
