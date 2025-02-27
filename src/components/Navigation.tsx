import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Our Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element?.getBoundingClientRect().top
    const elementPosition = elementRect ? elementRect - bodyRect : 0
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-950/95 to-purple-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer group"
          >
            {/* Simplified logo implementation */}
            {!imgError ? (
              <img 
                src="/images/logo7.png"
                alt="LaunchWeb Logo"
                className="h-10 w-auto group-hover:scale-105 transition-transform"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="text-2xl font-bold text-purple-400">
                LaunchWeb
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-purple-400 block px-3 py-4 text-base font-medium w-full text-left hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
