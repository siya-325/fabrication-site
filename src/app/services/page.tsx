import type { Metadata } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'
import { ServicesHero } from '@/components/sections/services/ServicesHero'
import { ServicesGrid } from '@/components/sections/services/ServicesGrid'
import { CtaSection } from '@/components/sections/home/CtaSection'

export const metadata: Metadata = {
  title: 'Services — Expert Metalwork Solutions for Every Need | FB Fabrication',
  description:
    "From initial concept through final production, we're committed to excellence, reliability, and results that help your business thrive. Custom sheet metal, CNC machining, structural steel, and precision architectural fabrication.",
}

export default function ServicesPage() {
  return (
    <SiteShell showHeader={true}>
      <ServicesHero />
      <ServicesGrid />
      <CtaSection />
    </SiteShell>
  )
}
