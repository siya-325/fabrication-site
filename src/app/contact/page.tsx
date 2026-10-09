import { SiteShell } from '@/components/layout/SiteShell'
import { siteConfig } from '@/data/site-config'

export default function ContactPage() { return <SiteShell><section className="inner-page contact-page"><p className="eyebrow">Start a project</p><h1>Let&apos;s make<br /><em>something useful.</em></h1><div className="contact-grid"><p className="large-body">Tell us a little about what you&apos;re working on, where you are in the process, and what you need next.</p><a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></section></SiteShell> }
