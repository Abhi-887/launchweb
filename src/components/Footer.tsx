import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {  // Changed to const declaration
  return (
    <footer className="bg-blue-950/50 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">LaunchWeb</h3>
            <p className="text-gray-300">
              Transform your digital presence with our cutting-edge web solutions.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'SEO & Marketing', 'UI/UX Design', 'E-Commerce'].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { text: 'About Us', href: '#about' },
                { text: 'Our Work', href: '#work' },
                { text: 'Contact', href: '#contact' },
                { text: 'Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">contact@launchweb.dev</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: '#', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} LaunchWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer  // Make sure this is at the end
