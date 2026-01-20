'use client'

import React from 'react'
import { siteConfig } from '@/lib/siteConfig'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const name = formData.get('name') as string
    const company = formData.get('company') as string
    const position = formData.get('position') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string
    const demo = formData.get('demo') === 'on'
    
    const subject = demo 
      ? 'Solicitud de Demo - Contacto desde sitio web'
      : 'Contacto desde sitio web'
    
    const body = `Nombre: ${name}\n` +
      `Empresa: ${company || 'No especificada'}\n` +
      `Cargo: ${position || 'No especificado'}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${phone || 'No especificado'}\n` +
      `Solicita demo: ${demo ? 'Sí' : 'No'}\n\n` +
      `Mensaje:\n${message}`
    
    const mailtoLink = `mailto:contacto@ranvi.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-8 shadow-xl"
      noValidate
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
