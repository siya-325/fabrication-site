'use client'

import React from 'react'
import { HexagonIcon } from '@/components/shared/FbUI'

export function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Planning',
      desc: 'We review your drawings, concepts, and project requirements to map out the most effective fabrication plan and material choices.',
    },
    {
      number: '02',
      title: 'Precision Cutting & Shaping',
      desc: 'Raw steel plates and structural components are cut and shaped with sharp attention to detail and consistent geometric accuracy.',
    },
    {
      number: '03',
      title: 'Assembly & Master Welding',
      desc: 'Our seasoned team fits and welds every joint with dedication to heavy-duty strength, clean seams, and enduring structural integrity.',
    },
    {
      number: '04',
      title: 'Finishing & Final Delivery',
      desc: 'Every fabrication receives professional surface treatments and thorough multi-point checks before being packaged for reliable delivery.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-28 relative" aria-label="How We Work">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <HexagonIcon color="var(--brand-black)" size={15} />
            <span className="font-urbanist text-[15px] sm:text-[16px] font-semibold text-brand-black leading-none">
              How We Work
            </span>
          </div>
          <h2 className="font-urbanist text-[36px] sm:text-[46px] lg:text-[52px] font-normal leading-[1.14] tracking-[-0.03em] text-brand-gray m-0">
            From Raw Blueprint to{' '}
            <span className="text-brand-black font-semibold">Enduring Metalwork.</span>
          </h2>
          <p className="font-urbanist text-[16px] sm:text-[17px] font-light text-brand-gray mt-5 mb-0 leading-[1.6]">
            Every project flows through a thoughtful four-stage fabrication process designed to ensure dependable quality, clear communication, and enduring results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-brand-border rounded-[12px] p-6 sm:p-7 relative flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
            >
              <div>
                <span className="font-urbanist text-[32px] font-light text-primary tracking-[-0.03em] block mb-4">
                  {step.number}
                </span>
                <h3 className="font-urbanist text-[19px] sm:text-[20px] font-semibold text-brand-black mb-3 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="font-urbanist text-[15px] font-light text-brand-gray leading-[1.55] m-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
