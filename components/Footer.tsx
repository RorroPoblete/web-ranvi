import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'

const productLinks = [
  { slug: 'crm-quirurgico', label: 'CRM Quirúrgico' },
  { slug: 'biopsias', label: 'Trazabilidad de Biopsias' },
  { slug: 'equipos-medicos', label: 'Gestión de Equipos Médicos' },
  { slug: 'gestor-fila', label: 'Gestor de Fila Digital' },
  { slug: 'totem-autopago', label: 'Tótem de Autopago' },
  { slug: 'chatbot-citas', label: 'Chatbot de Citas' },
  { slug: 'sistema-calidad', label: 'Sistema de Calidad' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Image
              src="/logo-ranvi.png"
              alt="Ranvi Systems"
              width={140}
              height={40}
              className="h-10 w-auto brightness-0 invert opacity-90 mb-4"
            />
            <p className="text-navy-400 text-sm leading-relaxed">
              Software clínico para clínicas y hospitales en Chile.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              {productLinks.map((p) => (
                <li key={p.slug}>
                  <Link href={`/soluciones#${p.slug}`} className="hover:text-white transition">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="hover:text-white transition">{siteConfig.nav.about}</Link></li>
              <li><Link href="/soluciones" className="hover:text-white transition">{siteConfig.nav.solutions}</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition">{siteConfig.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>{siteConfig.country}</li>
              <li>
                <a href="mailto:contacto@ranvi.cl" className="hover:text-white transition">
                  contacto@ranvi.cl
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition">
                  Solicitar información
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-navy-400">
          <p>© {year} {siteConfig.company}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-white transition">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition">Términos</Link>
            <Link href="/contacto" className="hover:text-white transition">Soporte</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
