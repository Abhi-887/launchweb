import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactModal from './ContactModal'

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary' | 'floating';
}

export default function CallToAction({ 
  title = "Ready to Transform Your Digital Presence?",
  subtitle = "Let's discuss how we can help your business grow",
  buttonText = "Start Your Project",
  variant = 'primary'
}: CTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const variants = {
    primary: "py-20 bg-gradient-to-r from-purple-900 to-blue-900",
    secondary: "py-12 bg-white/5 border border-purple-500/20 rounded-2xl",
    floating: "fixed bottom-6 right-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg md:hidden"
  }

  if (variant === 'floating') {
    return (
      <>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-white px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:shadow-xl transition-shadow"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    )
  }

  return (
    <div className={variants[variant]}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
