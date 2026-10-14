'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { HexagonIcon } from '@/components/shared/FbUI'

const servicesData = [
  {
    number: '01',
    title: 'Sheet Metal Work & Forming',
    description:
      'High-precision sheet metal fabrication, CNC bending, and shearing for custom enclosures, industrial housings, ducting, and panels.',
    capabilities: [
      'CNC press brake bending & forming',
      'High-precision tolerances down to ±0.2mm',
      'Stainless steel, aluminum & mild steel',
    ],
    image: '/images/fb/service-1.png',
  },
  {
    number: '02',
    title: 'Architectural Elements & Facades',
    description:
      'Custom-engineered architectural steel, bespoke staircases, interior glass-metal partitions, railings, and perforated ornamental facades.',
    capabilities: [
      'Feature staircases & structural balustrades',
      'Decorative laser-cut panels & screens',
      'High-end patina, powder coat & brushed finishes',
    ],
    image: '/images/fb/service-2.webp',
  },
  {
    number: '03',
    title: 'Machinery Components & Turning',
    description:
      'Precision CNC lathe turning, milling, cylindrical bushings, shafts, and bespoke mechanical components engineered for demanding manufacturing lines.',
    capabilities: [
      'Multi-axis CNC milling and precision turning',
      'Hardened steel, bronze, brass & alloy options',
      'Full batch production and one-off prototypes',
    ],
    image: '/images/fb/service-3.png',
  },
  {
    number: '04',
    title: 'Structural Steel & Heavy Assemblies',
    description:
      'Certified structural fabrication for commercial construction, mezzanine platforms, heavy beam frames, and industrial load-bearing supports.',
    capabilities: [
      'Certified structural welding & joint assembly',
      'Heavy section beams, columns & trusses',
      'Rigorous load-testing & safety compliance',
    ],
    image: '/images/fb/project-1.webp',
  },
  {
    number: '05',
    title: 'CNC Laser & Plasma Cutting',
    description:
      'State-of-the-art fiber laser cutting capable of slicing complex geometries with clean, burr-free edges across carbon steel, stainless steel, and brass.',
    capabilities: [
      'High-speed cutting up to 25mm plate thickness',
      'Complex CAD nesting for maximum material efficiency',
      'Fast turnaround on high-volume sheet runs',
    ],
    image: '/images/fb/project-2.webp',
  },
  {
    number: '06',
    title: 'Welding, Finishing & Installation',
    description:
      'Complete end-to-end turnkey service including TIG/MIG welding, sandblasting, powder coating, galvanization, and on-site expert installation.',
    capabilities: [
      'MIG, TIG & robotic precision seam welding',
      'Durable exterior powder coat & galvanizing',
      'Turnkey delivery and on-site installation',
    ],
    image: '/images/fb/project-3.webp',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F9F9F9] relative" aria-label="Our Fabrication Services">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <HexagonIcon color="var(--brand-black)" size={15} />
              <span className="font-urbanist text-[15px] sm:text-[16px] font-semibold text-brand-black leading-none">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-urbanist text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-brand-black leading-[1.12] tracking-[-0.03em] m-0">
              Complete fabrication capabilities under one roof.
            </h2>
          </div>
          <p className="font-urbanist text-[16px] sm:text-[17px] text-brand-gray max-w-[440px] m-0 font-light leading-[1.55]">
            From one-off bespoke architectural commissions to recurring OEM manufacturing batches, we deliver uncompromising quality with exact lead times.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="group bg-white border border-brand-light-gray rounded-[12px] p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div>
                {/* Header row with number badge & title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-urbanist text-[14px] font-bold tracking-widest text-primary uppercase bg-primary-light px-3 py-1 rounded-full border border-primary/20">
                    Phase {service.number}
                  </span>
                </div>

                <h3 className="font-urbanist text-[22px] sm:text-[23px] font-bold text-brand-black mb-3 leading-[1.25]">
                  {service.title}
                </h3>

                <p className="font-urbanist text-[15px] sm:text-[16px] text-brand-gray leading-[1.5] mb-5 font-light">
                  {service.description}
                </p>

                {/* Capability Bullet Points */}
                <div className="flex flex-col gap-2.5 mb-6 pt-3 border-t border-brand-light-gray/80">
                  {service.capabilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[14px] sm:text-[14.5px] text-brand-black font-medium leading-[1.4]">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Image preview & Action link */}
              <div className="pt-2">
                <div className="w-full h-[160px] relative rounded-[8px] overflow-hidden mb-5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-urbanist font-semibold text-[15px] text-brand-black hover:text-brand-gray transition-colors group/link"
                >
                  <span>Request a quote for this service</span>
                  <ArrowUpRight size={17} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
