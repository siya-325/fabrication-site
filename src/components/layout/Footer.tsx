import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export function Footer() {
  return <footer className="site-footer">
    <div><p className="eyebrow">Have a project in mind?</p><Link href="/contact" className="footer-cta">Let&apos;s make something <ArrowUpRight aria-hidden="true" /></Link></div>
    <div className="footer-meta"><div><strong>{siteConfig.name}</strong><p>{siteConfig.address.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p></div><div><p>{siteConfig.email}<br />{siteConfig.phone}</p><p className="copyright">© {new Date().getFullYear()} {siteConfig.legalName}</p></div></div>
  </footer>
}
