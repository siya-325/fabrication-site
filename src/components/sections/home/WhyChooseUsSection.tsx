'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { HexagonIcon } from '@/components/shared/FbUI'

interface FeatureItem {
  number: string
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    number: '1',
    title: 'Steel Frames',
    description:
      'Our work holds up - literally. From first cut to final weld, we deliver consistent quality you can count on.',
  },
  {
    number: '2',
    title: 'Architectural Metalwork',
    description:
      'Our work holds up - literally. From first cut to final weld, we deliver consistent quality you can count on.',
  },
  {
    number: '3',
    title: 'Precision Prototypes',
    description:
      'Our work holds up - literally. From first cut to final weld, we deliver consistent quality you can count on.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative" aria-label="Why Choose Us">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Top Header Row: Subtitle + Button on Left, Heading + Paragraph on Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-14">
          {/* Left Column: Subtitle Badge & View Service CTA */}
          <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 flex flex-col justify-between items-start gap-6 lg:min-h-[160px]">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2.5">
              <HexagonIcon color="var(--brand-black)" size={15} />
              <span className="font-urbanist text-[15px] sm:text-[16px] font-semibold text-brand-black leading-none">
                Why choose us
              </span>
            </div>

            {/* View Service Pill Button */}
            <Link
              href="/services"
              className="group inline-flex items-center justify-between gap-3 bg-primary text-brand-black font-semibold text-[16px] px-[28px] py-[15px] rounded-[55px] border border-primary hover:bg-brand-black hover:border-brand-black hover:text-primary transition-all duration-300 shadow-sm"
            >
              <span>View service</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Two-Tone Heading and Description Copy */}
          <div className="w-full lg:flex-1 flex flex-col items-start">
            <h2 className="font-urbanist text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-normal leading-[1.18] tracking-[-0.03em] text-brand-gray m-0">
              We combine years of expertise,{' '}
              <span className="text-brand-black font-semibold">
                advanced technology, and a passion for precision
              </span>{' '}
              to deliver outstanding metalwork solutions.
            </h2>
            <p className="font-urbanist text-[15px] sm:text-[16.5px] font-light leading-[1.65] text-brand-gray mt-5 sm:mt-6 m-0 max-w-[700px]">
              Specializing in metal fabrication, custom components, and industrial builds, we bring
              together experience, precision, and hands-on craftsmanship.
            </p>
          </div>
        </div>

        {/* Bottom 3-Column Feature Cards */}
        {/* Desktop Layout with continuous divider line */}
        <div className="hidden md:block mt-16 sm:mt-20 lg:mt-24">
          {/* Numbers Row */}
          <div className="grid grid-cols-3 gap-8 lg:gap-12 pb-7 sm:pb-8">
            {features.map((item) => (
              <div
                key={item.number}
                className="w-[52px] h-[52px] rounded-full bg-primary flex items-center justify-center font-urbanist font-semibold text-[17px] text-brand-black"
              >
                {item.number}
              </div>
            ))}
          </div>

          {/* Continuous Divider Line */}
          <div className="border-t border-brand-border/80 pt-7 sm:pt-8">
            {/* Headings and Descriptions */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {features.map((item) => (
                <div key={item.number} className="flex flex-col items-start">
                  <h3 className="font-urbanist text-[24px] sm:text-[26px] lg:text-[28px] font-semibold text-brand-black m-0 mb-3 tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="font-urbanist text-[15px] sm:text-[16px] text-brand-gray font-light leading-[1.6] m-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout: Self-contained item cards */}
        <div className="md:hidden flex flex-col gap-8 mt-12">
          {features.map((item) => (
            <div key={item.number} className="flex flex-col items-start">
              <div className="w-[48px] h-[48px] rounded-full bg-primary flex items-center justify-center font-urbanist font-semibold text-[16px] text-brand-black mb-5">
                {item.number}
              </div>
              <div className="w-full border-t border-brand-border/80 pt-5">
                <h3 className="font-urbanist text-[22px] font-semibold text-brand-black m-0 mb-2.5 tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="font-urbanist text-[15px] text-brand-gray font-light leading-[1.6] m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
