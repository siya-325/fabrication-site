import { SiteShell } from '@/components/layout/SiteShell'
import { Hero } from '@/components/sections/home/Hero'
import { AboutSection } from '@/components/sections/home/AboutSection'
import { HomeCta, ProjectsPreview, ServicesPreview } from '@/components/sections/home/HomeSections'

export default function HomePage() {
  return (
    <SiteShell showHeader={true}>
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <ProjectsPreview />
      <HomeCta />
    </SiteShell>
  )
}
