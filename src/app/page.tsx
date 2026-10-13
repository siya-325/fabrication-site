import { SiteShell } from '@/components/layout/SiteShell'
import { Hero } from '@/components/sections/home/Hero'
import { AboutSection } from '@/components/sections/home/AboutSection'
import { TrustBadge } from '@/components/sections/home/TrustBadge'
import { ProjectsSection } from '@/components/sections/home/ProjectsSection'
import { WhyChooseUsSection } from '@/components/sections/home/WhyChooseUsSection'
import { FaqSection } from '@/components/sections/home/FaqSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { HomeCta, ServicesPreview } from '@/components/sections/home/HomeSections'

export default function HomePage() {
  return (
    <SiteShell showHeader={true}>
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <TrustBadge />
      <ProjectsSection />
      <WhyChooseUsSection />
      <FaqSection />
      <TestimonialsSection />
      <HomeCta />
    </SiteShell>
  )
}
