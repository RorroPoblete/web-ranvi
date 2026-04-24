'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { CheckCircleIcon, EnvelopeIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const interestOptions: { value: string; label: string }[] = [
  { value: '', label: 'Selecciona una solución' },
  ...siteConfig.solutionsOrder.map((k) => ({
    value: k,
    label: siteConfig.solutions[k].title,
  })),
  { value: 'general', label: 'Consulta general' },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    demo: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Nombre requerido'
    if (!formData.email.trim()) e.email = 'Email requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Email no válido'
    if (!formData.message.trim()) e.message = 'Mensaje requerido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const interestLabel =
      interestOptions.find((o) => o.value === formData.interest)?.label || 'No especificada'
    const subject = formData.demo ? 'Solicitud de Demo — Ranvi Systems' : 'Contacto desde sitio web'
    const body =
      `Nombre: ${formData.name}\n` +
      `Empresa: ${formData.company || 'No especificada'}\n` +
      `Cargo: ${formData.position || 'No especificado'}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone || 'No especificado'}\n` +
      `Solución de interés: ${interestLabel}\n` +
      `Solicita demo: ${formData.demo ? 'Sí' : 'No'}\n\n` +
      `Mensaje:\n${formData.message}`
    window.location.href = `mailto:contacto@ranvi.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', company: '', position: '', email: '', phone: '', interest: '', message: '', demo: false })
      setSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />
        <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 animate-fade-in-up">
          <span className="chip-primary mb-6">Contacto</span>
          <h1 className="heading-hero max-w-3xl">
            <span className="text-gradient-primary">Hablemos</span> de tu clínica.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-navy-600 max-w-2xl leading-relaxed">
            Cuéntanos sobre tu centro y qué estás buscando. Nuestro equipo te responderá en menos de 48 horas.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="section bg-white">
        <div className="container-wrap grid lg:grid-cols-3 gap-10">
          <aside className="lg:col-span-1 space-y-6">
            <div className="card">
              <div className="icon-box mb-4">
                <EnvelopeIcon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 mb-1">Email</h3>
              <a href="mailto:contacto@ranvi.cl" className="text-primary-600 hover:text-primary-700 font-semibold">
                contacto@ranvi.cl
              </a>
            </div>
            <div className="card">
              <div className="icon-box-teal mb-4">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 mb-1">Ubicación</h3>
              <p className="text-navy-600">{siteConfig.country}</p>
            </div>
            <div className="card bg-navy-900 text-white border-navy-800">
              <h3 className="font-bold text-white mb-2">¿Prefieres una llamada?</h3>
              <p className="text-navy-300 text-sm mb-4">
                Agenda una reunión con nuestro equipo. Responderemos en menos de 48 horas hábiles.
              </p>
              <span className="inline-flex items-center gap-1 text-primary-300 text-sm font-semibold">
                Completa el formulario <ArrowRightIcon className="h-4 w-4" />
              </span>
            </div>
          </aside>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card text-center py-16">
                <CheckCircleIcon className="h-14 w-14 text-primary-500 mx-auto mb-5" />
                <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 mb-2">
                  {siteConfig.contact.success.title}
                </h2>
                <p className="text-navy-600">{siteConfig.contact.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.name} *
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required
                      className={`input-field ${errors.name ? '!border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.company}
                    </label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.position}
                    </label>
                    <input
                      type="text" id="position" name="position"
                      value={formData.position} onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.email} *
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required
                      className={`input-field ${errors.email ? '!border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.phone}
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-navy-900 mb-2">
                      {siteConfig.contact.form.interest}
                    </label>
                    <select
                      id="interest" name="interest"
                      value={formData.interest} onChange={handleChange}
                      className="input-field"
                    >
                      {interestOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    {siteConfig.contact.form.message} *
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={formData.message} onChange={handleChange}
                    required
                    className={`input-field ${errors.message ? '!border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <label className="flex items-center gap-2 text-navy-700">
                  <input
                    type="checkbox" name="demo"
                    checked={formData.demo} onChange={handleChange}
                    className="w-4 h-4 text-primary-500 border-navy-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm">{siteConfig.contact.form.demoCheckbox}</span>
                </label>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  {siteConfig.contact.form.submit}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
