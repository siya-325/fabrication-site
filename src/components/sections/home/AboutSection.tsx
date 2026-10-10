'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HexagonIcon, ArrowIcon } from '@/components/shared/IronisUI'

export function AboutSection() {
  const values = [
    { number: '1', title: 'Steel Frames' },
    { number: '2', title: 'Architectural Metalwork' },
    { number: '3', title: 'Precision Prototypes' },
  ]

  return (
    <section className="pt-20 lg:pt-24 pb-12 lg:pb-14 relative">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 mb-10 lg:mb-12">
          {/* Left Column: Subtitle & CTA Button */}
          <div className="w-full lg:w-[265px] shrink-0 flex flex-col justify-between items-start gap-6 lg:min-h-[160px]">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2">
              <HexagonIcon color="var(--brand-black)" size={15} />
              <span className="font-urbanist text-[16px] font-semibold text-brand-black leading-[1.3]">
                About us
              </span>
            </div>

            {/* About Company Button */}
            <Link
              href="/about"
              className="group inline-flex items-center justify-between gap-4 bg-primary text-brand-black font-semibold text-[16px] px-[28px] py-[15px] rounded-[55px] border border-primary hover:bg-brand-black hover:border-brand-black hover:text-primary transition-all duration-300 shadow-sm w-full sm:w-auto lg:w-full max-w-[220px]"
            >
              <span>About Company</span>
              <div className="w-6 h-6 relative shrink-0">
                <ArrowIcon
                  color="var(--brand-black)"
                  className="absolute inset-0 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-0"
                />
                <ArrowIcon
                  color="var(--primary)"
                  className="absolute inset-0 -translate-x-2 translate-y-2 -rotate-45 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100"
                />
              </div>
            </Link>
          </div>

          {/* Right Column: Large Heading & Paragraph */}
          <div className="w-full lg:w-[72%] xl:w-[74%] flex flex-col items-start">
            <h2 className="font-urbanist text-[32px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.96px] text-brand-gray m-0 mb-4">
              We specialize in high-quality{' '}
              <span className="text-brand-black font-semibold">
                metal fabrication, strength and efficiency.
              </span>{' '}
              From individual parts to complex structures.
            </h2>
            <p className="font-urbanist text-[16px] sm:text-[17px] font-light leading-[1.6] text-brand-gray max-w-[720px] m-0">
              Specializing in metal fabrication, custom components, and industrial builds, we bring
              together experience, precision, and hands-on craftsmanship.
            </p>
          </div>
        </div>

        {/* Bottom Content Row: Numbered Values & Metal Photo */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
          {/* Left Column: 3 Values Chips Stacked */}
          <div className="flex flex-col gap-3 w-full lg:w-[265px] shrink-0">
            {values.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-[15px] bg-white rounded-[55px] pr-[25px] w-full max-w-[270px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-brand-light-gray/60 hover:shadow-md transition-shadow"
              >
                <div className="w-[53px] h-[53px] rounded-full bg-primary flex items-center justify-center font-semibold text-[16px] text-brand-black shrink-0">
                  {item.number}
                </div>
                <span className="font-urbanist font-medium text-[16px] text-brand-black leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Metal Fabrication Image */}
          <div className="w-full lg:w-[72%] xl:w-[74%] h-[320px] sm:h-[400px] lg:h-[440px] xl:h-[470px] relative rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/ironis/metal-photo.webp"
              alt="Metal fabrication craftsman welding with sparks"
              fill
              sizes="(max-width: 991px) 100vw, 74vw"
              className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
