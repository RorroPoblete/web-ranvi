'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon, ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/lib/siteConfig'

const productLinks = [
  { slug: 'crm-quirurgico', label: 'CRM Quirúrgico', tag: 'Nuevo' },
  { slug: 'biopsias', label: 'Trazabilidad de Biopsias', tag: 'Nuevo' },
  { slug: 'equipos-medicos', label: 'Gestión de Equipos Médicos', tag: 'Nuevo' },
  { slug: 'gestor-fila', label: 'Gestor de Fila Digital' },
  { slug: 'totem-autopago', label: 'Tótem de Autopago' },
  { slug: 'chatbot-citas', label: 'Chatbot de Citas' },
  { slug: 'sistema-calidad', label: 'Sistema de Calidad' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-navy-100' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo-ranvi.png"
            alt="Ranvi Systems"
            width={140}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy-600">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-primary-600 transition"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Productos
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="w-[600px] grid grid-cols-2 gap-1 p-3 bg-white rounded-xl border border-navy-100 shadow-xl shadow-navy-900/10">
                  {productLinks.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/soluciones#${p.slug}`}
                      className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-primary-50 text-navy-700 hover:text-primary-700 transition"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="font-semibold text-[14px]">{p.label}</span>
                      {p.tag && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-700 font-semibold">
                          {p.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/soluciones" className="hover:text-primary-600 transition">
            {siteConfig.nav.solutions}
          </Link>
          <Link href="/nosotros" className="hover:text-primary-600 transition">
            {siteConfig.nav.about}
          </Link>
          <Link href="/contacto" className="hover:text-primary-600 transition">
            {siteConfig.nav.contact}
          </Link>
        </nav>

        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition shadow-lg shadow-primary-500/20"
        >
          Solicitar demo
          <ArrowRightIcon className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-navy-700"
          aria-expanded={mobileOpen}
          aria-label="Menú"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-navy-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 text-navy-700">
            <details className="py-2">
              <summary className="flex items-center justify-between font-medium cursor-pointer list-none">
                Productos <ChevronDownIcon className="h-4 w-4" />
              </summary>
              <div className="flex flex-col pl-3 pt-2 gap-1">
                {productLinks.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/soluciones#${p.slug}`}
                    className="py-2 text-navy-600 hover:text-primary-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/soluciones" className="py-3 font-medium border-t border-navy-100" onClick={() => setMobileOpen(false)}>
              {siteConfig.nav.solutions}
            </Link>
            <Link href="/nosotros" className="py-3 font-medium border-t border-navy-100" onClick={() => setMobileOpen(false)}>
              {siteConfig.nav.about}
            </Link>
            <Link href="/contacto" className="py-3 font-medium border-t border-navy-100" onClick={() => setMobileOpen(false)}>
              {siteConfig.nav.contact}
            </Link>
            <Link
              href="/contacto"
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar demo
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
