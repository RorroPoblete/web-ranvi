'use client'

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all ${
              open ? 'bg-white border-primary-200 shadow-lg shadow-primary-500/5' : 'bg-white border-navy-100 hover:border-primary-200'
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="font-semibold text-navy-900 text-lg">{item.question}</span>
              <span
                className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center transition-all ${
                  open ? 'bg-primary-600 text-white rotate-45' : 'bg-primary-100 text-primary-700'
                }`}
              >
                <PlusIcon className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-navy-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
