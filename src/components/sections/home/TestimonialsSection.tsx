import React from 'react'
import Image from 'next/image'

interface TestimonialItem {
  id: string
  quote: string
  author: string
}

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    quote:
      '“FB provided exceptional metal fabrication services that perfectly met our project requirements. Their team demonstrated great professionalism and technical expertise from start to finish.”',
    author: 'David B., TechForm Engineering',
  },
  {
    id: '2',
    quote:
      '“FB provided exceptional metal fabrication services that perfectly met our project requirements. Their team demonstrated great professionalism and technical expertise from start to finish.”',
    author: 'John S., NovaBuild Systems',
  },
  {
    id: '3',
    quote:
      '“FB provided exceptional metal fabrication services that perfectly met our project requirements. Their team demonstrated great professionalism and technical expertise from start to finish.”',
    author: 'Sarah J., ForgeTech Systems',
  },
]

function StarIcon() {
  return (
    <Image
      src="/images/fb/star-primary.svg"
      alt="Star"
      width={18}
      height={18}
      className="shrink-0"
    />
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24 relative" aria-label="Client Testimonials">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-14">
          <div className="flex-1">
            <h2 className="font-urbanist text-[38px] sm:text-[50px] lg:text-[56px] font-normal leading-[1.08] tracking-[-1.5px] m-0 text-brand-gray">
              Trusted by{' '}
              <span className="text-brand-black font-semibold">
                Our Clients.
              </span>
            </h2>
          </div>
          <div className="max-w-[390px]">
            <p className="font-urbanist text-[16px] sm:text-[17px] font-[400] leading-[1.6] text-brand-gray m-0">
              We combine precision engineering with hands-on craftsmanship to bring your designs to life in steel, metal, and beyond.
            </p>
          </div>
        </div>

        {/* Testimonials Dark Card */}
        <div className="bg-brand-black rounded-[10px] p-8 sm:p-10 lg:p-12 xl:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 relative">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-2 mb-5 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  {/* Horizontal Line under stars */}
                  <div className="w-full h-[1px] bg-brand-gray/35 mb-6 sm:mb-7" />

                  {/* Quote */}
                  <p className="font-urbanist text-[15.5px] sm:text-[16.5px] font-[400] text-white leading-[1.65] m-0">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 sm:mt-8 pt-2">
                  <p className="font-urbanist text-[15px] sm:text-[16px] font-light text-white/80 m-0 leading-normal">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
