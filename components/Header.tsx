'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/lib/siteConfig'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">
            <div className="relative w-12 h-12">
              <Image
                src="/logo-ranvi.png"
                alt={`${siteConfig.name} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-navy-900">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-navy-700 hover:text-primary-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              {siteConfig.nav.home}
            </Link>
            <Link 
              href="/soluciones" 
              className="text-navy-700 hover:text-primary-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              {siteConfig.nav.solutions}
            </Link>
            <Link 
              href="/nosotros" 
              className="text-navy-700 hover:text-primary-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              {siteConfig.nav.about}
            </Link>
            <Link 
              href="/contacto" 
              className="btn-primary"
            >
              {siteConfig.nav.contact}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden pb-4 pt-2 border-t border-navy-200"
          >
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-navy-700 hover:text-primary-600 font-medium py-2 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.nav.home}
              </Link>
              <Link 
                href="/soluciones" 
                className="text-navy-700 hover:text-primary-600 font-medium py-2 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.nav.solutions}
              </Link>
              <Link 
                href="/nosotros" 
                className="text-navy-700 hover:text-primary-600 font-medium py-2 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.nav.about}
              </Link>
              <Link 
                href="/contacto" 
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
