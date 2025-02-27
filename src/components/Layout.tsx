import Navigation from './Navigation'
import CallToAction from './CallToAction'
import Footer from './Footer'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900">
      <Navigation />
      <main>{children}</main>
      <CallToAction variant="primary" />
      <Footer />
    </div>
  )
}

export default Layout
