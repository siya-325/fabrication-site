'use client'

import React from 'react'
import Image from 'next/image'
import { HexagonIcon } from '@/components/shared/FbUI'

export function ShapingFutureSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative bg-white border-y border-brand-border/60" aria-label="Shaping the Future">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative, Bullets */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
              <HexagonIcon color="var(--brand-black)" size={15} />
              <span className="font-urbanist text-[15px] sm:text-[16px] font-semibold text-brand-black leading-none">
                Shaping the future
              </span>
            </div>

            {/* Two-Tone Heading */}
            <h2 className="font-urbanist text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[58px] font-normal leading-[1.12] tracking-[-0.03em] text-brand-gray m-0 max-w-[620px]">
              We take pride in forging <br className="hidden sm:inline" />
              strong, <span className="text-brand-black font-semibold">partnerships</span> <br className="hidden sm:inline" />
              <span className="text-brand-black font-semibold">across</span> diverse industries.
            </h2>

            {/* Description Copy */}
            <p className="font-urbanist text-[15px] sm:text-[16.5px] font-light leading-[1.65] text-brand-gray mt-6 mb-0 max-w-[540px]">
              With years of experience, our skilled team transforms raw materials into custom metal components and structures tailored to meet the unique needs of diverse industries.
            </p>

            {/* Subtle Divider */}
            <div className="border-t border-brand-border/80 my-7 sm:my-8 w-full max-w-[540px]" />

            {/* 3 Value Bullets */}
            <div className="flex flex-col gap-3.5 mb-8 sm:mb-10 max-w-[540px]">
              <div className="flex items-center gap-3 text-[15px] sm:text-[16px]">
                <span className="text-[18px] shrink-0 select-none" aria-hidden="true">🔩</span>
                <p className="font-urbanist font-light text-brand-gray m-0">
                  <strong className="font-semibold text-brand-black">Reliability</strong>{' '}
                  high-quality metalwork you can count on.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[15px] sm:text-[16px]">
                <span className="text-[18px] shrink-0 select-none" aria-hidden="true">⚙️</span>
                <p className="font-urbanist font-light text-brand-gray m-0">
                  <strong className="font-semibold text-brand-black">Precision</strong>{' '}
                  to every detail for flawless fabrication.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[15px] sm:text-[16px]">
                <span className="text-[18px] shrink-0 select-none" aria-hidden="true">⚒️</span>
                <p className="font-urbanist font-light text-brand-gray m-0">
                  <strong className="font-semibold text-brand-black">Durability</strong>{' '}
                  long-lasting metal solutions that stand up.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Welder Sparks Photo Card */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full relative h-[420px] sm:h-[500px] lg:h-[580px] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/fb/welder-sparks.jpg"
                alt="Skilled welder fabricating custom metalwork with glowing sparks"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
