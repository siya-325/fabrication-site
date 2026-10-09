import { SiteShell } from '@/components/layout/SiteShell'
import { services } from '@/data/site-config'

export default function ServicesPage() { return <SiteShell><section className="inner-page"><p className="eyebrow">Capabilities</p><h1>What we<br /><em>make possible.</em></h1><div className="inner-list">{services.map((service) => <article key={service.number}><span>{service.number}</span><h2>{service.title}</h2><p>{service.description}</p></article>)}</div></section></SiteShell> }
