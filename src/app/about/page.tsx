import type { Metadata } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutUsSection } from '@/components/sections/about/AboutUsSection'
import { ShapingFutureSection } from '@/components/sections/about/ShapingFutureSection'
import { HowWeWorkSection } from '@/components/sections/about/HowWeWorkSection'
import { CtaSection } from '@/components/sections/home/CtaSection'

export const metadata: Metadata = {
  title: 'About Us — FB Metal Fabrication & Engineering',
  description:
    'Discover the legacy and craftsmanship of FB Fabrication: 15+ years of heavy structural steel, architectural metalwork, expert fabrication, and precision engineering.',
}

export default function AboutPage() {
  return (
    <SiteShell showHeader={true}>
      <AboutHero />
      <AboutUsSection />
      <ShapingFutureSection />
      <HowWeWorkSection />
      <CtaSection />
    </SiteShell>
  )
}
