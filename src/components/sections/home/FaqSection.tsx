'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    id: 'services',
    question: 'What services does Ironis offer?',
    answer:
      'We specialize in metal fabrication, welding, sheet metal work, CNC machining, custom parts production, structural frames, and industrial prototyping.',
  },
  {
    id: 'custom',
    question: 'Do you handle custom projects?',
    answer:
      'Yes. We work closely with clients to design and produce custom components based on technical drawings, specifications, or ideas.',
  },
  {
    id: 'industries',
    question: 'What industries do you serve?',
    answer:
      'We serve a wide range of sectors including construction, automotive, agriculture, furniture, energy, and electronics.',
  },
  {
    id: 'timeline',
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity, but most orders are completed within 2–6 weeks.',
  },
]

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-20 lg:py-24 relative m-" aria-label="Frequently Asked Questions">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Angle Grinder Photo */}
          <div className="flex flex-col items-start w-full">
            <h2 className="font-urbanist text-[40px] sm:text-[52px] lg:text-[56px] font-normal leading-[1.08] tracking-[-1.5px] m-0 text-brand-gray">
              Frequently Asked{' '}
              <span className="text-brand-black font-semibold block sm:inline lg:block">
                Questions.
              </span>
            </h2>

            <div className="w-full h-[220px] sm:h-[260px] lg:h-[200px] relative rounded-[10px] overflow-hidden mt-8 sm:mt-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/ironis/faq-image.webp"
                alt="Craftsman cutting metal pipe with an angle grinder producing bright sparks"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="flex flex-col w-full">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className="border-b border-brand-border/80 first:border-t lg:first:border-t-0 py-6 sm:py-7 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <h3 className="font-urbanist text-[20px] sm:text-[23px] lg:text-[25px] font-medium text-brand-black tracking-[-0.4px] leading-[1.3] m-0 group-hover:text-brand-gray transition-colors">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-[32px] h-[32px] rounded-full bg-brand-black text-white flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-urbanist text-[16px] sm:text-[17px] text-brand-gray font-[400] leading-[1.65] m-0 max-w-[95%]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
