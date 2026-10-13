'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { HexagonIcon } from '@/components/shared/FbUI'

export function AboutSection() {
  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10 lg:pb-12 relative" aria-label="About Us">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-14">
          {/* Left Column: Badge, Heading, and Paragraph */}
          <div className="w-full lg:max-w-[680px] xl:max-w-[720px] flex flex-col items-start">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2.5 mb-6 sm:mb-8">
              <HexagonIcon color="var(--brand-black)" size={15} />
              <span className="font-urbanist text-[15px] sm:text-[16px] font-semibold text-brand-black leading-none">
                About us
              </span>
            </div>

            {/* Main Two-Tone Heading */}
            <h2 className="font-urbanist text-[36px] sm:text-[46px] lg:text-[52px] xl:text-[58px] font-normal leading-[1.12] tracking-[-0.03em] text-brand-gray m-0">
              Creating{' '}
              <span className="text-brand-black font-semibold">Stronger Structures</span>
              <br />
              Through Smarter Fabrication.
            </h2>

            {/* Description Copy */}
            <p className="font-urbanist text-[15px] sm:text-[16.5px] font-light leading-[1.65] text-brand-gray mt-6 sm:mt-7 mb-0 max-w-[560px]">
              With years of hands-on experience and a commitment to quality
              craftsmanship, we turn raw materials into real-world solutions —
              from custom industrial parts to full-scale fabrication projects.
            </p>
          </div>

          {/* Right Column: Welder Image Card & "More about us" Link */}
          <div className="w-full lg:w-auto flex flex-col items-start self-start lg:pt-6">
            {/* Welder Photo */}
            <div className="w-full sm:w-[420px] lg:w-[400px] xl:w-[440px] h-[200px] sm:h-[215px] lg:h-[210px] xl:h-[220px] relative rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <Image
                src="/images/fb/metal-photo.webp"
                alt="Welder working on metal beam with glowing sparks"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* "More about us" Link with Bottom Border */}
            <div className="mt-5 sm:mt-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-brand-black font-semibold text-[15px] sm:text-[16px] border-b border-brand-black pb-1 hover:text-brand-gray hover:border-brand-gray transition-colors"
              >
                <span>More about us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
