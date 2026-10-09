'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HexagonIcon, ArrowIcon } from '@/components/shared/IronisUI'

export function Hero() {
  return (
    <section className="relative pt-60 pb-30 overflow-hidden">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-[135%] z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/ironis/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source
            src="https://cdn.prod.website-files.com/688b105b2269d2924df670a4%2F68908fc1fff159a9632227b9_Banner%20Home%201%20Video-transcode.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback Image */}
        <Image
          src="/images/ironis/hero-poster.jpg"
          alt="Metal fabrication craftsmanship"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
        {/* Darkening Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(14,14,14,0.42)] via-[rgba(14,14,14,0.35)] to-[rgba(14,14,14,0.65)] z-[1]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1330px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-[30px]">
          {/* Left Column */}
          <div className="w-full max-w-[480px] flex flex-col items-start">
            <p className="!text-white text-white text-[24px] sm:text-[29px] font-normal leading-[1.3] tracking-[-0.56px] mb-6">
              High-quality metalwork, built for efficiency, accuracy, and long-term performance.
            </p>

            {/* Values: Strength, Craft, Trust */}
            <div className="flex flex-wrap items-center gap-7 mb-8">
              <div className="inline-flex items-center gap-2">
                <HexagonIcon size={15} />
                <span className="!text-white text-white font-[550] text-[16px]">Strength</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <HexagonIcon size={15} />
                <span className="!text-white text-white font-[550] text-[16px]">Craft</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <HexagonIcon size={15} />
                <span className="!text-white text-white font-[550] text-[16px]">Trust</span>
              </div>
            </div>

            {/* Our Services CTA Button */}
            <div className="flex">
              <Link
                href="/services"
                className="group inline-flex items-center justify-between gap-4 bg-primary text-brand-black font-semibold text-[16px] px-[26px] py-[16px] rounded-[55px] border border-primary hover:bg-brand-black hover:border-brand-black hover:text-primary transition-all duration-300 shadow-sm"
              >
                <span className='font-[600]'>Our services</span>
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
          </div>

          {/* Right Column */}
          <div className="w-full md:flex-1 md:max-w-4xl flex justify-start md:justify-end">
            <h1 className="!text-white text-white font-medium text-[42px] sm:text-[54px] lg:text-[6.5rem] leading-[1.03] tracking-[-2.2px] m-0 text-left md:text-right">
              Building Trust.
              <br />
              Forging Precision.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
