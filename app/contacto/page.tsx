'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    message: '',
    demo: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    // Construir el cuerpo del email
    const subject = formData.demo 
      ? 'Solicitud de Demo - Contacto desde sitio web'
      : 'Contacto desde sitio web'
    
    const body = `Nombre: ${formData.name}\n` +
      `Empresa: ${formData.company || 'No especificada'}\n` +
      `Cargo: ${formData.position || 'No especificado'}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone || 'No especificado'}\n` +
      `Solicita demo: ${formData.demo ? 'Sí' : 'No'}\n\n` +
      `Mensaje:\n${formData.message}`

    // Usar mailto como fallback (en producción se debería usar un endpoint)
    const mailtoLink = `mailto:contacto@ranvi.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Intentar abrir el cliente de email
    window.location.href = mailtoLink
    
    // Simular éxito (en producción esto vendría del servidor)
    setSubmitted(true)
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        position: '',
        email: '',
        phone: '',
        message: '',
        demo: false,
      })
      setSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-teal-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Contacto</h1>
            <p className="text-body text-xl max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos para conocer más sobre nuestras soluciones
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="card text-center">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="heading-2 mb-4">{siteConfig.contact.success.title}</h2>
                <p className="text-body">{siteConfig.contact.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card" noValidate>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900 ${
                        errors.name ? 'border-red-500' : 'border-navy-300'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
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
                      value={formData.position}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900 ${
                        errors.email ? 'border-red-500' : 'border-navy-300'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy-900 ${
                      errors.message ? 'border-red-500' : 'border-navy-300'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="demo"
                      checked={formData.demo}
                      onChange={handleChange}
                      className="mr-2 w-4 h-4 text-primary-600 border-navy-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-navy-900">{siteConfig.contact.form.demoCheckbox}</span>
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full">
                  {siteConfig.contact.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Información adicional */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="card text-center">
              <h3 className="heading-3 mb-4">Información de contacto</h3>
              <p className="text-navy-700 mb-2">
                <strong>País:</strong> {siteConfig.country}
              </p>
              <p className="text-navy-600 text-sm">
                Para más información, completa el formulario y nos pondremos en contacto contigo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
