'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

function LinkedinBadge({ className = 'w-[18px] h-[18px]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#1E1E1E" />
      <path
        d="M7.5 10v7M7.5 7.5v.01M11.5 17v-4.2c0-1.5 1-2.3 2.3-2.3 1.3 0 2.2.8 2.2 2.3V17M11.5 10v7"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] pt-16 sm:pt-20 pb-12 transition-colors px-[36px] mb-3 mx-auto w-[calc(100%-24px)] max-w-[1300px] rounded-t-[10px]" aria-label="Site Footer">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Main Footer 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-brand-light-gray">
          {/* Brand & Introduction Column */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3 no-underline mb-4 group" aria-label="FB Home">
              <span className="font-urbanist font-extrabold text-[32px] sm:text-[34px] tracking-[-0.04em] text-brand-black leading-none group-hover:opacity-80 transition-opacity">
                FB
              </span>
            </Link>
            <p className="font-urbanist text-[15.5px] text-brand-gray leading-[1.6] max-w-[340px] m-0 mb-6 font-[400]">
              High-precision metal fabrication studio delivering custom architectural elements, machinery components, and enduring structural solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-brand-black font-semibold text-[15px] px-6 py-3 rounded-full hover:brightness-95 hover:scale-[1.02] active:scale-[0.99] transition-all shadow-sm"
            >
              <span>Let&apos;s work together</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <p className="font-urbanist text-brand-gray text-[14px] sm:text-[15px] font-medium tracking-wide m-0 mb-4 sm:mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none">
              <li>
                <Link
                  href="/services"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Sheet Metal Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Architectural Elements
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Machinery Components
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Custom Fabrication
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <p className="font-urbanist text-brand-gray text-[14px] sm:text-[15px] font-medium tracking-wide m-0 mb-4 sm:mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none">
              <li>
                <Link
                  href="/about"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Pricing &amp; Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-3">
            <p className="font-urbanist text-brand-gray text-[14px] sm:text-[15px] font-medium tracking-wide m-0 mb-4 sm:mb-5">
              Contact us
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors break-words"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
              >
                {siteConfig.phone}
              </a>
              <div className="pt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-urbanist font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                >
                  <LinkedinBadge />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-gray text-[14px] font-normal">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.legalName}. All Rights Reserved.</span>
            <span className="text-brand-gray/50">·</span>
            <Link href="/about" className="hover:text-brand-black transition-colors">
              Licensing
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-brand-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-brand-black transition-colors">
              Terms
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-brand-black transition-colors cursor-pointer bg-transparent border-0 p-0 text-[14px] font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
