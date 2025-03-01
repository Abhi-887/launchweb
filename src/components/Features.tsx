import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Rocket, Search, ShoppingCart, Palette, BarChart, ArrowRight } from 'lucide-react';
import { serviceDetails } from '../data/services';

const features = Object.entries(serviceDetails).map(([slug, service]) => ({
  ...service,
  slug,
  icon: getServiceIcon(slug)
}));

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const floatingElements = [
  { top: '10%', left: '5%', size: '150px', color: 'from-blue-500/10 to-purple-500/5', duration: 20 },
  { top: '70%', left: '85%', size: '200px', color: 'from-purple-500/10 to-pink-500/5', duration: 25 },
  { top: '30%', left: '85%', size: '120px', color: 'from-cyan-500/10 to-blue-500/5', duration: 18 },
  { top: '80%', left: '15%', size: '180px', color: 'from-indigo-500/10 to-violet-500/5', duration: 22 },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements - these remain full-width */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 opacity-95"></div>
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)', 
        backgroundSize: '3rem 3rem',
        opacity: 0.2
      }}></div>
      
      {/* Floating gradient spheres - these remain full-width */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${element.color} blur-3xl opacity-40`}
          style={{
            top: element.top,
            left: element.left,
            width: element.size,
            height: element.size,
          }}
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Content with constrained width */}
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Complete Digital Solutions
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Everything you need to establish and grow your online presence with cutting-edge technology and expert guidance
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <Link href={`/services/${feature.slug}`}>
                <motion.div 
                  className="group h-full relative rounded-2xl overflow-hidden"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card background with animated border */}
                  <div className="absolute -z-10 inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-blue-950 opacity-80"></div>
                    <motion.div 
                      className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 opacity-30 blur-sm rounded-2xl"
                      animate={{ 
                        opacity: activeFeature === index ? 0.6 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Moving gradient spot */}
                    <motion.div 
                      className="absolute w-40 h-40 rounded-full opacity-20"
                      style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
                        top: '-20px',
                        left: '-20px',
                      }}
                      animate={{
                        x: activeFeature === index ? [0, 80, 0] : 0,
                        y: activeFeature === index ? [0, 60, 0] : 0,
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                  
                  {/* Card content */}
                  <div className="relative p-8 bg-black/10 backdrop-blur-sm h-full flex flex-col">
                    {/* Icon container with animations */}
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/50 to-blue-600/50 backdrop-blur-sm p-0.5 mb-6 relative flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 } 
                      }}
                    >
                      {/* Glowing effect around icon */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-purple-500 opacity-30 blur-md"
                        animate={{ 
                          scale: [0.85, 1.1, 0.85], 
                          opacity: [0.3, 0.6, 0.3] 
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                      
                      {/* Icon */}
                      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-xl w-full h-full flex items-center justify-center relative z-10">
                        <feature.icon className="w-8 h-8 text-purple-300" />
                      </div>
                    </motion.div>
                    
                    {/* Feature title */}
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Feature description */}
                    <p className="text-gray-300 mb-6 flex-grow">
                      {feature.description}
                    </p>
                    
                    {/* Learn more link */}
                    <motion.div 
                      className="flex items-center text-sm font-medium text-purple-300 group-hover:text-white transition-colors duration-300"
                      animate={{ x: activeFeature === index ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more 
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
                    </motion.div>
                    
                    {/* Line decoration for hover effect */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: activeFeature === index ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <motion.div 
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button shine effect */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'translateX(-100%)'
                }}
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatDelay: 3
                }}
              />
              <span className="relative z-10">Explore All Services</span>
              <ArrowRight className="ml-2 relative z-10" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to get icons
function getServiceIcon(slug: string) {
  const icons = {
    'web-development': Code,
    'seo-visibility': Search,
    'e-commerce-solutions': ShoppingCart,
    'ui-ux-design': Palette,
    'digital-marketing': BarChart,
    'launch-support': Rocket
  };
  
  return icons[slug as keyof typeof icons] || Rocket;
}
