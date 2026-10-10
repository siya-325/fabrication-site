import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" aria-label="Call to Action">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center">
          {/* Main Heading */}
          <h2 className="font-urbanist text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.1] tracking-[-1.5px] text-brand-gray m-0">
            Partner with{' '}
            <span className="text-brand-black font-semibold">FB</span>{' '}
            today!
          </h2>

          {/* Description Copy */}
          <p className="font-urbanist text-[16px] sm:text-[18px] font-[400] leading-[1.65] text-brand-gray mt-5 sm:mt-6 mb-8 sm:mb-10 max-w-[620px]">
            Let FB handle the cutting, bending, and welding - plus all the things your last supplier said were &ldquo;impossible.&rdquo; We turn raw steel into real results with just the right amount of sparks, sweat, and sarcasm.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-primary text-brand-black font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-full hover:brightness-95 hover:scale-[1.02] active:scale-[0.99] transition-all shadow-sm"
            >
              <span>Get a quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-brand-black font-semibold text-[15px] sm:text-[16px] border-b border-brand-black pb-0.5 hover:text-brand-gray hover:border-brand-gray transition-colors"
            >
              <span>Work with us</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
