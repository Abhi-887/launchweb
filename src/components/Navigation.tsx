import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change nav appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Background blur with gradient - full width */}
      <div className={`absolute inset-0 backdrop-blur-md transition-opacity duration-300 ${
        scrolled ? 'bg-blue-950/80 shadow-lg shadow-blue-900/20' : 'bg-transparent'
      }`}>
        {/* Animated gradient border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: scrolled ? 1 : 0,
            scaleX: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        />
      </div>
      
      {/* Glowing orbs - remain full width */}
      <motion.div 
        className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-purple-600/20 blur-[80px] pointer-events-none"
        animate={{ 
          opacity: scrolled ? 0.3 : 0,
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className="absolute top-0 right-1/4 w-32 h-32 rounded-full bg-blue-600/20 blur-[80px] pointer-events-none"
        animate={{ 
          opacity: scrolled ? 0.3 : 0,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content container - constrained width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative flex justify-between items-center">
        {/* Logo */}
        <Link href="#home">
          <motion.div 
            className="relative z-10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}  
          >
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-white' : 'text-white'
            }`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Launch<span className="text-blue-400">Web</span>
              </span>
            </span>

            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.div 
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.href.replace('#', '') && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full z-0"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  >
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-sm"
                      animate={{ 
                        scale: [1, 1.2, 1], 
                        opacity: [0.1, 0.2, 0.1] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </Link>
          ))}

          {/* Animated CTA Button */}
          <Link href="#contact">
            <motion.div 
              className="ml-3 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-80"
                animate={{
                  background: [
                    'linear-gradient(90deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                    'linear-gradient(180deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                    'linear-gradient(270deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                    'linear-gradient(0deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                    'linear-gradient(90deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Inner glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-transparent to-blue-500/50 blur-md"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 360],
                  }}
                  transition={{
                    opacity: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  }}
                />
              </motion.div>

              {/* Button shine effect */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'translateX(-100%)'
                }}
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatDelay: 5
                }}
              />

              <div className="relative px-5 py-2.5 font-medium text-white rounded-full z-10 border border-white/10">
                Get Started
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="p-2 rounded-full bg-purple-600/10 border border-purple-500/30 lg:hidden relative z-20"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulsing ring animation around toggle button */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-purple-500/30"
            animate={{
              scale: isOpen ? [1, 1.1, 1] : [1, 1.05, 1],
              opacity: isOpen ? [0.8, 0.5, 0.8] : [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-10 pt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="absolute inset-0 backdrop-blur-xl bg-blue-950/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                className="h-full max-w-sm mx-auto flex flex-col space-y-2 p-6 relative z-20"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ 
                      delay: 0.05 * index,
                      duration: 0.25,
                    }}
                  >
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                      <motion.div 
                        className={`
                          p-4 flex items-center justify-between text-lg font-medium rounded-xl 
                          ${activeSection === link.href.replace('#', '') 
                            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/20' 
                            : 'text-gray-300 hover:text-white'}
                        `}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                          activeSection === link.href.replace('#', '')
                            ? 'text-blue-400'
                            : 'text-gray-400 group-hover:text-white'
                        }`} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div 
                  className="mt-4 pt-4 border-t border-purple-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.25 }}
                >
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    <motion.div 
                      className="relative overflow-hidden w-full"
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated gradient background */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl"
                        animate={{
                          background: [
                            'linear-gradient(90deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                            'linear-gradient(180deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                            'linear-gradient(270deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                            'linear-gradient(0deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                            'linear-gradient(90deg, rgb(124, 58, 237), rgb(59, 130, 246))',
                          ]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Button shine effect */}
                      <motion.div 
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transform: 'translateX(-100%)'
                        }}
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          repeatDelay: 5
                        }}
                      />
                      
                      <div className="relative py-3 px-4 font-medium text-center text-white rounded-xl z-10 border border-white/20">
                        Get Started
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-10 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 absolute bottom-6 right-6"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
