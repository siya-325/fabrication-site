'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-[10px] left-0 right-0 mx-auto w-[calc(100%-24px)] max-w-[1300px] bg-white rounded-t-none rounded-b-[10px] py-[22px] px-[36px] z-50 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
      <div className="flex items-center justify-between w-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center no-underline" aria-label="RF Home">
          <span className="font-urbanist font-extrabold text-[30px] tracking-[-0.04em] text-brand-black leading-none hover:opacity-80 transition-opacity">
            RF
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[30px]" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-brand-black text-[16.5px] font-semibold py-2 px-1 hover:text-brand-gray transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <span className="text-[16.5px] font-semibold text-brand-gray">
            Interested?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-brand-black font-semibold text-[16px] px-[28px] py-[14px] rounded-[55px] border border-primary hover:bg-brand-black hover:border-brand-black hover:text-primary transition-all duration-300 whitespace-nowrap shadow-sm"
          >
            Let&apos;s work together
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden bg-transparent border-0 text-brand-black p-1 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-3.5 pt-5 pb-2.5 border-t border-brand-border mt-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-brand-black py-1.5"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2.5 mt-2.5">
            <span className="text-[15px] font-semibold text-brand-gray">Interested?</span>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-brand-black font-semibold text-[16px] px-6 py-3.5 rounded-[55px] border border-primary hover:bg-brand-black hover:text-primary transition-all"
            >
              Let&apos;s work together
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
