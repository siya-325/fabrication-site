import { Header } from './Header'
import { Footer } from './Footer'

export function SiteShell({ children, showHeader = true }: { children: React.ReactNode; showHeader?: boolean }) {
  return <>{showHeader && <Header />}<main>{children}</main><Footer /></>
}
