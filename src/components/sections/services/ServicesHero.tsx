'use client'

import React from 'react'
import Image from 'next/image'

export function ServicesHero() {
  return (
    <section className="relative w-full bg-white pt-[140px] sm:pt-[165px] md:pt-[185px] pb-12 sm:pb-16 md:pb-20">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Header Text Content */}
        <div className="max-w-[850px] mb-8 sm:mb-12 md:mb-14">
          <h1 className="font-urbanist font-semibold text-brand-black text-[38px] sm:text-[52px] md:text-[66px] lg:text-[74px] xl:text-[78px] leading-[1.08] tracking-[-0.035em] m-0">
            Expert Metalwork<br />Solutions for Every Need.
          </h1>
          <p className="font-urbanist text-brand-gray text-[17px] sm:text-[19px] md:text-[18px] font-normal leading-[1.55] mt-5 sm:mt-6 max-w-[640px]">
            From initial concept through final production, we&apos;re committed to excellence, reliability, and results that help your business thrive.
          </p>
        </div>
      </div>
      {/* Wide Panoramic Hero Banner Image */}
      <div className="w-full relative min-h-[240px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[450px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <Image
          src="/images/fb/services-hero.jpg"
          alt="Expert metalwork precision machined steel cylinders and bushing components"
          fill
          priority
          sizes="(max-width: 1330px) 100vw, 1330px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
