import React from 'react'

interface TrustStat {
  value: string
  label: string
}

const trustStats: TrustStat[] = [
  {
    value: '15+',
    label: 'Years of Metal Experience',
  },
  {
    value: '98%',
    label: 'Client Satisfaction Across',
  },
  {
    value: '5k+',
    label: 'Tons of Steel Processed Annually',
  },
  {
    value: '100%',
    label: 'Tailored to Every Need',
  },
]

interface TrustBadgeProps {
  className?: string
}

export function TrustBadge({ className = '' }: TrustBadgeProps) {
  return (
    <section
      className={`relative z-10 pt-4 sm:pt-6 pb-20 lg:pb-28 ${className}`}
      aria-label="Company Statistics"
    >
      <div className="w-full max-w-[1330px] mx-auto px-5">
        {/* Subtle top divider line */}
        <div className="border-t border-brand-border/80 pt-12 sm:pt-14 lg:pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-12">
            {trustStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="font-urbanist text-[54px] sm:text-[68px] lg:text-[80px] xl:text-[92px] font-light text-brand-black leading-none tracking-[-0.03em]">
                  {stat.value}
                </span>
                <p className="font-urbanist text-[15px] sm:text-[16px] text-brand-gray font-light mt-3 sm:mt-4 mb-0 leading-[1.35]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
