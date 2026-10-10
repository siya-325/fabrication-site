import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItem {
  id: string
  title: string
  image: string
  href: string
}

const projects: ProjectItem[] = [
  {
    id: 'machine-parts',
    title: 'Custom Machine Parts',
    image: '/images/ironis/project-3.webp',
    href: '/projects',
  },
  {
    id: 'architectural',
    title: 'Architectural Metalwork',
    image: '/images/ironis/project-1.webp',
    href: '/projects',
  },
  {
    id: 'sheet-metal',
    title: 'Sheet Metal Creations',
    image: '/images/ironis/project-2.webp',
    href: '/projects',
  },
]

export function ProjectsSection() {
  // Duplicate for smooth seamless looping marquee
  const displayProjects = [...projects, ...projects, ...projects, ...projects]

  return (
    <section className="py-20 lg:py-24 overflow-hidden relative" aria-label="Selected Projects">
      {/* Top Header Row */}
      <div className="w-full max-w-[1330px] mx-auto px-5 mb-10 sm:mb-12 lg:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
          <div className="flex-1">
            <h2 className="font-urbanist text-[48px] sm:text-[64px] lg:text-[6.5rem] font-normal leading-[1] tracking-[-1.5px] text-brand-black m-0">
              Projects.
            </h2>
          </div>
          <div className="max-w-[420px]">
            <p className="font-urbanist text-[16px] sm:text-[17px] font-[400] leading-[1.6] text-brand-gray m-0">
              We combine precision engineering with hands-on craftsmanship to bring your designs to life in steel, metal, and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Gallery Track */}
      <div className="w-full overflow-hidden select-none">
        <div className="animate-marquee flex items-start gap-5 sm:gap-6 will-change-transform">
          {displayProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="w-[300px] sm:w-[380px] lg:w-[420px] shrink-0 group cursor-pointer"
            >
              <Link href={project.href} className="block">
                <div className="w-full h-[210px] sm:h-[260px] lg:h-[280px] relative rounded-[10px] overflow-hidden bg-brand-light-gray shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 420px"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-urbanist text-[20px] sm:text-[22px] lg:text-[24px] font-medium text-brand-black mt-3 sm:mt-4 tracking-[-0.4px] leading-tight group-hover:text-brand-gray transition-colors">
                  {project.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
