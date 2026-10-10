import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Plus } from 'lucide-react'
import { services, projects } from '@/data/site-config'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function IntroSection() {
  return <>
    <section id="intro" className="intro-section home-about-cover">
      <div className="home-about-topline"><span>01 — The practice</span><span>Fabrication / Chicago / 2017—Now</span></div>
      <div className="home-about-heading">
        <h2>MADE<br />WITH<br />INTENT<span>.</span></h2>
        <p>We keep exploring.<br />We make things work.<br />We build what lasts.</p>
      </div>
      <div className="home-about-grid">
        <div className="home-about-marker">A fabrication studio for<br />architecture + interiors.</div>
        <div className="home-about-copy"><p className="large-body">Forge / 17 is an independent fabrication studio for architecture, interiors, and the spaces between. We translate ambitious drawings into exacting, enduring work — from a single handrail to a complete structural package.</p><Link href="/about" className="text-link">Meet the practice <ArrowUpRight aria-hidden="true" /></Link></div>
      </div>
    </section>
    <section className="material-index"><div className="material-index-label">Our material language</div><div className="material-cards"><div className="material-card material-steel"><span>01</span><strong>Steel</strong><small>Strength / structure</small></div><div className="material-card material-brass"><span>02</span><strong>Brass</strong><small>Warmth / patina</small></div><div className="material-card material-aluminum"><span>03</span><strong>Aluminum</strong><small>Lightness / precision</small></div></div></section>
    <section className="statement-band"><p>We make the difficult look inevitable.</p><span>Precision / Patience / Permanence</span></section>
    <section className="stats-section page-section"><div className="stats-intro"><p className="eyebrow">A measured practice</p><p>Small enough to care about the details. Experienced enough to know which ones matter.</p></div><div className="stats-grid"><div><strong>09</strong><span>Years in the making</span></div><div><strong>210<span>+</span></strong><span>Projects delivered</span></div><div><strong>04</strong><span>Material languages</span></div><div><strong>01</strong><span>Standard: exacting</span></div></div></section>
  </>
}

export function ServicesPreview() {
  const ironisServices = [
    {
      title: 'Sheet Metal Work',
      description: 'Custom-engineered frames for industrial facilities, built to handle heavy loads and tight tolerances.',
      image: '/images/ironis/service-1.png',
      href: '/services',
    },
    {
      title: 'Architectural Elements',
      description: 'Precision-crafted staircases, railings, and facades for commercial and residential spaces.',
      image: '/images/ironis/service-2.webp',
      href: '/services',
    },
    {
      title: 'Machinery Components',
      description: 'High-accuracy parts for manufacturing and production lines, produced to exact specifications.',
      image: '/images/ironis/service-3.png',
      href: '/services',
    },
  ]

  return (
    <section className="py-0 relative z-10">
      <div className="w-full max-w-[1330px] mx-auto px-5">
        <div className="bg-white rounded-[10px] p-[1rem] sm:p-[1.5rem] md:p-[3rem] -mt-[12rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
            {ironisServices.map((service, index) => (
              <div
                key={index}
                className="group bg-primary-light border border-brand-light-gray rounded-[10px] flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="p-[15px_25px_25px] flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h3 className="text-[22px] font-semibold text-brand-black tracking-[-0.1px] leading-[1.2] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-brand-gray leading-[1.45] mb-4 font-[400]">
                      {service.description}
                    </p>
                  </div>
                  <div className="inline-flex flex-col items-start gap-1.5 cursor-pointer">
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 font-semibold text-[16px] text-brand-black hover:text-brand-gray transition-colors"
                    >
                      <span>Read more</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <div className="w-[120px] h-[1px] bg-brand-black group-hover:bg-brand-gray transition-colors" />
                  </div>
                </div>
                <Link href={service.href} className="w-full h-[140px] relative overflow-hidden rounded-b-[10px] block">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export { ProjectsSection as ProjectsPreview } from './ProjectsSection'
export { CtaSection as HomeCta, CtaSection } from './CtaSection'
