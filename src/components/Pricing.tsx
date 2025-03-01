import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹9,999',
    description: 'Perfect for small businesses',
    features: ['Responsive Design', '3 Pages', '1 Month Support', 'Basic SEO'],
    popular: false,
    color: 'from-cyan-400 to-blue-500',
    accentColor: 'cyan',
    glowColor: 'cyan',
    buttonGradient: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Professional',
    price: '₹24,999',
    description: 'Ideal for growing businesses',
    features: ['Responsive Design', '10 Pages', '3 Months Support', 'Advanced SEO', 'CMS Integration'],
    popular: true,
    color: 'from-violet-500 to-purple-600',
    accentColor: 'purple',
    glowColor: 'purple',
    buttonGradient: 'from-violet-600 to-purple-700'
  },
  {
    name: 'Enterprise',
    price: '₹49,999+',
    description: 'For large scale projects',
    features: ['Responsive Design', 'Unlimited Pages', '6 Months Support', 'Premium SEO', 'Custom Functionality', 'E-commerce', 'Analytics'],
    popular: false,
    color: 'from-fuchsia-500 to-pink-600',
    accentColor: 'pink',
    glowColor: 'pink',
    buttonGradient: 'from-fuchsia-600 to-pink-600'
  }
];

// Floating elements for modern aesthetic
const floatingElements = [
  { size: 6, color: 'bg-blue-500', top: '20%', left: '10%', duration: 8 },
  { size: 10, color: 'bg-purple-500', top: '70%', left: '20%', duration: 12 },
  { size: 4, color: 'bg-pink-500', top: '30%', left: '85%', duration: 10 },
  { size: 8, color: 'bg-cyan-500', top: '80%', left: '80%', duration: 14 },
  { size: 5, color: 'bg-indigo-500', top: '10%', left: '60%', duration: 9 },
  { size: 7, color: 'bg-violet-500', top: '60%', left: '5%', duration: 11 },
];

const Pricing = () => {
  const sectionRef = useRef(null);

  return (
    <div className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 opacity-80"></div>
      
      {/* Glow effect in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-[100px]"></div>
      
      {/* Floating elements for modern aesthetics */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.color} rounded-full opacity-30 blur-sm hidden md:block`}
          style={{
            width: `${el.size}rem`,
            height: `${el.size}rem`,
            top: el.top,
            left: el.left,
          }}
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay for modern touch */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)', 
        backgroundSize: '4rem 4rem',
        opacity: 0.3
      }}></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 relative">
          <motion.span 
            className="inline-block text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Pricing Plans
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Choose Your Perfect Plan
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transparent pricing designed to help businesses of all sizes succeed online
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className={`
                  relative rounded-2xl h-full flex flex-col
                  ${plan.popular ? 'md:-translate-y-4' : ''}
                `}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Next.js-inspired glowing border effect */}
                <div className="absolute -z-10 inset-0 rounded-2xl overflow-hidden">
                  {/* Glowing border base */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-20`}></div>
                  
                  {/* Animated glow effect */}
                  <motion.div 
                    className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${plan.color} opacity-80 blur-lg`}
                    animate={{ 
                      opacity: plan.popular ? [0.7, 0.9, 0.7] : [0.2, 0.4, 0.2],
                      scale: [0.99, 1.01, 0.99],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Moving glow spots for Next.js-like effect */}
                  <motion.div 
                    className="absolute h-40 w-[200%] left-[-50%] top-[-100px]"
                    style={{
                      background: `radial-gradient(circle, rgba(${plan.popular ? '138, 75, 255' : '56, 189, 248'}, 0.6) 0%, transparent 40%)`,
                    }}
                    animate={{
                      x: ['-25%', '25%', '-25%'],
                      y: ['-25%', '25%', '-25%'],
                    }}
                    transition={{
                      duration: plan.popular ? 12 : 15,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Card Content - Glass effect */}
                <div className="flex-1 flex flex-col backdrop-blur-lg bg-black bg-opacity-30 rounded-2xl p-1 h-full">
                  {/* Header section with gradient */}
                  <div className={`rounded-xl bg-gradient-to-br ${plan.color} p-6`}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <motion.span 
                          className="inline-block ml-2 bg-white text-indigo-900 text-xs font-bold py-1 px-3 rounded-full"
                          animate={{ 
                            boxShadow: ['0 0 5px rgba(255, 255, 255, 0.5)', '0 0 15px rgba(255, 255, 255, 0.7)', '0 0 5px rgba(255, 255, 255, 0.5)'],
                          }}
                          transition={{ 
                            duration: 2.5, 
                            repeat: Infinity,
                          }}
                        >
                          POPULAR
                        </motion.span>
                      )}
                    </div>
                    <p className="text-lg opacity-90 mt-2">{plan.description}</p>
                    <div className="mt-5 flex items-end">
                      <span className="text-4xl md:text-5xl font-extrabold">{plan.price}</span>
                      <span className="ml-1 text-lg opacity-90 mb-1">/project</span>
                    </div>
                  </div>
                  
                  {/* Features section */}
                  <div className="p-6 flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className={`mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-${plan.accentColor}-500/30`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <svg className={`h-3 w-3 text-${plan.accentColor}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <span className="text-gray-200">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button section */}
                  <div className="p-6 pt-0">
                    <motion.button
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: `0 0 20px rgba(${plan.popular ? '139, 92, 246' : '6, 182, 212'}, 0.6)`
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={`
                        w-full py-4 rounded-xl font-bold text-white
                        bg-gradient-to-r ${plan.buttonGradient}
                        transition-all duration-300 relative overflow-hidden
                      `}
                    >
                      {/* Button shine effect */}
                      <motion.span 
                        className="absolute inset-0 w-full h-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transform: 'translateX(-100%)'
                        }}
                        animate={{
                          x: ['100%', '-100%']
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: index * 0.5,
                          repeatDelay: 5
                        }}
                      />
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-4">
            Need something more tailored to your specific requirements?
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full border-2 border-purple-500 text-white font-medium hover:bg-purple-500/20 transition-all duration-300 relative group"
          >
            <span className="relative z-10">Contact for Custom Quote</span>
            <motion.span 
              className="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-purple-500/10"
              whileHover={{ 
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
              }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
