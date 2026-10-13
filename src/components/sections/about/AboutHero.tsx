'use client'

import React from 'react'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[72vh] sm:min-h-[78vh] lg:min-h-[60vh] flex flex-col justify-end overflow-hidden pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/images/fb/about-hero-steel.jpg"
          alt="Heavy industrial steel fabrication with glowing hot steel beam"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Darkening & Atmospheric Gradient Overlays for High Contrast & Readability */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(14,14,14,0.92)] via-[rgba(14,14,14,0.52)] to-[rgba(14,14,14,0.68)] z-[1]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 w-full h-full bg-radial-at-c from-transparent via-black/20 to-black/60 z-[2]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1330px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-8 lg:gap-12">
          {/* Main Headline */}
          <div className="w-full lg:max-w-7xl flex flex-col items-start">
            <h1 className="!text-white text-white font-medium text-[38px] sm:text-[52px] lg:text-[66px] xl:text-[74px] leading-[1.06] tracking-[-0.03em] m-0">
              Forged Through Experience.
              <br />
              <span className="font-semibold text-white/95">Engineered for Permanence.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
