'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { HexagonIcon } from '@/components/shared/FbUI'

export function AboutUsSection() {
  return (
    <section id="our-story" className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 relative" aria-label="About Us">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 sm:mb-8">
          <HexagonIcon color="var(--brand-black)" size={15} />
          <span className="font-urbanist text-[15px] sm:text-[16px] font-semibold text-brand-black leading-none">
            About us
          </span>
        </div>

        {/* Two-Tone Main Headline */}
        <h2 className="font-urbanist text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[58px] font-normal leading-[1.14] tracking-[-0.03em] text-brand-gray m-0 max-w-[1120px]">
          We are a passionate team dedicated to{' '}
          <br className="hidden sm:inline" />
          shaping the future of the industry through{' '}
          <br className="hidden sm:inline" />
          <span className="text-brand-black font-semibold">craftsmanship and innovation.</span>
        </h2>

        {/* Divider Line */}
        <div className="border-t border-brand-border/80 my-10 sm:my-14 lg:my-16" />

        {/* Bottom Row: Stats & Mission Description with Service Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Stat 1: 15+ */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <span className="font-urbanist text-[64px] sm:text-[76px] lg:text-[88px] font-light text-brand-black leading-none tracking-[-0.03em]">
              15+
            </span>
            <p className="font-urbanist text-[15px] sm:text-[16px] text-brand-gray font-light mt-3 sm:mt-4 mb-0 leading-[1.35]">
              Years of Metal Experience
            </p>
          </div>

          {/* Stat 2: 98% */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="font-urbanist text-[64px] sm:text-[76px] lg:text-[88px] font-light text-brand-black leading-none tracking-[-0.03em]">
              98%
            </span>
            <p className="font-urbanist text-[15px] sm:text-[16px] text-brand-gray font-light mt-3 sm:mt-4 mb-0 leading-[1.35]">
              Client Satisfaction Across
            </p>
          </div>

          {/* Column 3: Mission Description & Service Button */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col items-start lg:pl-4">
            <p className="font-urbanist text-[15px] sm:text-[16.5px] font-light leading-[1.6] text-brand-gray m-0 max-w-[460px]">
              Our mission is to deliver exceptional results that stand the test of time, forging strong relationships with industries and communities we serve. In every piece we create, you&apos;ll find a blend of skill.
            </p>

            <div className="mt-5 sm:mt-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-brand-black font-semibold text-[15px] sm:text-[16px] border-b border-brand-black pb-1 hover:text-brand-gray hover:border-brand-gray transition-colors"
              >
                <span>Our services</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
