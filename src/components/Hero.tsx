import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Code, ArrowRight, BarChart3, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ClientOnly from './ClientOnly';

// Optimized particle generation function
const generateParticles = (count) => Array(count).fill(0).map(() => ({
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

// Static particles for server rendering
const staticParticles = Array(15).fill(0).map((_, i) => ({
  size: 4,
  x: (i * 7) % 100,
  y: (i * 5) % 100,
  duration: 15,
  delay: 0,
}));

export default function Hero() {
  // Use refs and state
  const heroRef = useRef(null);
  const rocketAnimationControls = useAnimation();
  const smokeAnimationControls = useAnimation();
  const flameAnimationControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Check if device is mobile on mount - only in client
  useEffect(() => {
    if (!isClient) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isClient]);

  // Choose particles - static for server, dynamic for client
  const particles = isClient ? generateParticles(isMobile ? 10 : 20) : staticParticles;
  
  // Title animation setup
  const titleText = "Launch Your Digital Success Story";
  const titleChars = titleText.split('');
  
  // Visual elements
  const floatingIcons = [
    { icon: <Code className="w-full h-full" />, color: "bg-cyan-500" },
    { icon: <BarChart3 className="w-full h-full" />, color: "bg-purple-500" },
    { icon: <Sparkles className="w-full h-full" />, color: "bg-pink-500" }
  ];

  // Animation particles
  const flameParticles = Array(10).fill(0).map((_, i) => ({
    size: Math.random() * 20 + 10,
    x: (Math.random() - 0.5) * 10,
    y: 10 + Math.random() * 20,
    opacity: Math.random() * 0.6 + 0.4,
    duration: Math.random() * 1 + 0.5,
  }));

  const smokeParticles = Array(15).fill(0).map((_, i) => ({
    size: Math.random() * 20 + 10,
    x: (Math.random() - 0.5) * 40,
    y: Math.random() * 20 + 30,
    delay: Math.random() * 0.5,
    duration: Math.random() * 2 + 2,
  }));

  // Rocket launch animation
  const launchRocket = async () => {
    if (hasAnimated || !isClient) return;
    
    setHasAnimated(true);
    
    try {
      // Launch animation sequence
      await flameAnimationControls.start({
        opacity: [0, 1],
        scale: [0, 1.2],
        transition: { duration: 0.3 }
      });
      
      await smokeAnimationControls.start({
        opacity: [0, 0.8, 0],
        y: [0, 150],
        scale: [0.5, 3],
        transition: { duration: 2.5 }
      });
      
      await rocketAnimationControls.start({
        y: [0, -20, -150, -500],
        x: [0, 5, -5, 0],
        rotate: [0, -2, 2, 0],
        scale: [1, 1.1, 1, 0.8],
        opacity: [1, 1, 1, 0],
        transition: { duration: 2.5, ease: "easeOut" }
      });
      
      await flameAnimationControls.start({
        opacity: 0,
        transition: { duration: 0.2 }
      });
      
      rocketAnimationControls.set({ y: 0, opacity: 0 });
      
      await rocketAnimationControls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
    } catch (error) {
      console.error('Animation error:', error);
    }
    
    setTimeout(() => setHasAnimated(false), 2000);
  };

  // Auto-play animation on load (client-side only)
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setTimeout(() => {
      launchRocket();
    }, 2000);
    
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Background elements - these remain full width */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 z-0"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
          backgroundSize: isClient && isMobile ? '20px 20px' : '40px 40px',
          opacity: 0.5
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-60">
        {particles.map((particle, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute rounded-full bg-white"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main content - fixed max width container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl w-full py-16 lg:py-0">
        {/* Grid layout with fixed column widths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text content - spans 6 of 12 columns */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/20 mb-4 lg:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Web Development • Design • Marketing
                </span>
              </motion.div>

              {/* Animated title - with client-side conditional rendering */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <ClientOnly fallback={
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                    {titleText}
                  </span>
                }>
                  {isMobile ? (
                    <motion.span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {titleText}
                    </motion.span>
                  ) : (
                    titleChars.map((char, index) => (
                      <motion.span
                        key={index}
                        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.3 + index * 0.02,
                          duration: 0.5,
                          ease: "easeOut" 
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))
                  )}
                </ClientOnly>
              </h1>

              {/* Description */}
              <motion.div
                className="mt-4 lg:mt-6 relative p-1 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {/* Gradient border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-50"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.2), rgba(56, 189, 248, 0.2))',
                  }}
                  animate={{
                    background: ['linear-gradient(90deg, rgba(124, 58, 237, 0.2), rgba(56, 189, 248, 0.2))', 
                                 'linear-gradient(180deg, rgba(124, 58, 237, 0.2), rgba(56, 189, 248, 0.2))',
                                 'linear-gradient(270deg, rgba(124, 58, 237, 0.2), rgba(56, 189, 248, 0.2))',
                                 'linear-gradient(0deg, rgba(124, 58, 237, 0.2), rgba(56, 189, 248, 0.2))']
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Description text */}
                <p className="relative text-base lg:text-lg text-gray-300 p-4 lg:p-5 backdrop-blur-sm bg-gray-900/10 rounded-xl">
                  Transform your business with custom web solutions that drive growth.
                  From concept to launch, we're your digital transformation partner.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mt-6 lg:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="#contact">
                <motion.div 
                  className="inline-flex items-center px-5 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button shine effect */}
                  <motion.div 
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
                      duration: 1.5,
                      repeatDelay: 3
                    }}
                  />
                  
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-2 relative z-10 w-4 h-4 lg:w-5 lg:h-5" />
                </motion.div>
              </Link>
              
              <Link href="#services">
                <motion.div 
                  className="inline-flex items-center px-5 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { number: '200+', label: 'Projects Launched' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 5,
                      delay: index * 0.2 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Rocket visual element - client-side only - spans 6 of 12 columns */}
          <ClientOnly>
            <motion.div 
              className="lg:col-span-6 relative h-64 sm:h-72 md:h-80 lg:h-[500px] mb-8 lg:mb-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Glowing rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className={`absolute rounded-full border-2 border-purple-500/30`}
                    style={{ 
                      width: `${180 + ring * 60}px`, 
                      height: `${180 + ring * 60}px`,
                      filter: 'blur(1px)'
                    }}
                    animate={{
                      rotate: ring % 2 === 0 ? 360 : -360,
                      scale: [1, ring % 2 === 0 ? 1.05 : 0.95, 1],
                    }}
                    transition={{
                      rotate: { duration: 20 + ring * 5, ease: "linear", repeat: Infinity },
                      scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
                    }}
                  />
                ))}
              </div>

              {/* Launch platform */}
              <div className="relative">
                <motion.div
                  className="absolute left-1/2 bottom-4 w-28 h-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"
                  style={{ translateX: '-50%' }}
                />
                
                {/* Smoke particles */}
                <AnimatePresence>
                  {smokeParticles.map((particle, index) => (
                    <motion.div
                      key={`smoke-${index}`}
                      className="absolute left-1/2 bottom-8 rounded-full bg-gray-200/50 blur-md"
                      style={{
                        width: particle.size,
                        height: particle.size,
                        x: particle.x,
                        marginLeft: '-10px',
                      }}
                      initial={{ opacity: 0, scale: 0, y: 0 }}
                      animate={smokeAnimationControls}
                      custom={{ 
                        delay: particle.delay,
                        y: particle.y,
                        duration: particle.duration
                      }}
                    />
                  ))}
                </AnimatePresence>
                
                {/* Interactive rocket */}
                <motion.div
                  className="relative cursor-pointer"
                  onClick={launchRocket}
                  whileHover={{ scale: 1.05 }}
                  animate={rocketAnimationControls}
                  style={{ width: isMobile ? '80px' : '100px' }}
                >
                  {/* Rocket shadow */}
                  <div className="relative">
                    <div className="absolute inset-0 opacity-30 blur-sm bg-purple-500 rounded-full transform scale-90 translate-y-1"></div>
                    
                    {/* Rocket image */}
                    <Image 
                      src="/images/rocket.svg"
                      width={isMobile ? 80 : 100}
                      height={isMobile ? 160 : 200}
                      alt="Rocket"
                      className="relative z-10"
                    />
                    
                    {/* Engine flames animation */}
                    <motion.div 
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-0 flex justify-center items-start"
                      initial={{ opacity: 0 }}
                      animate={flameAnimationControls}
                    >
                      {/* Main flame */}
                      <motion.div
                        className="w-10 h-16 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full blur-sm"
                        animate={{
                          height: ['60px', '70px', '60px'],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      
                      {/* Side flames */}
                      {[1, 2].map((flame, i) => (
                        <motion.div
                          key={`flame-${i}`}
                          className="absolute top-2 w-4 h-8 bg-gradient-to-t from-orange-500 via-orange-300 to-transparent rounded-b-full blur-sm"
                          style={{
                            left: i === 0 ? '-5px' : 'auto',
                            right: i === 1 ? '-5px' : 'auto',
                          }}
                          animate={{
                            height: ['30px', '36px', '30px'],
                            opacity: [0.6, 0.8, 0.6],
                          }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      ))}
                      
                      {/* Flame particles */}
                      {flameParticles.map((particle, i) => (
                        <motion.div
                          key={`flame-particle-${i}`}
                          className="absolute w-2 h-2 bg-orange-400 rounded-full blur-md"
                          style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            opacity: particle.opacity,
                          }}
                          animate={{
                            y: [0, particle.y * 2],
                            opacity: [particle.opacity, 0],
                            scale: [1, 0],
                          }}
                          transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Tap to launch hint */}
                  <motion.p 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 text-xs text-blue-300 whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hasAnimated ? 0 : [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    Tap rocket to launch!
                  </motion.p>
                </motion.div>
              </div>

              {/* Floating tech icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl ${item.color} bg-opacity-80 flex items-center justify-center`}
                  style={{
                    top: `${20 + index * 30}%`,
                    left: index % 2 === 0 ? '10%' : '80%',
                  }}
                  animate={{
                    y: [0, -12, 0],
                    x: index % 2 === 0 ? [0, 6, 0] : [0, -6, 0],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Code snippet decoration */}
              <motion.div
                className="absolute bottom-5 right-5 w-52 p-3 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 font-mono text-[10px] leading-4 text-blue-300 hidden sm:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="flex mb-2 items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400">// Your success starts here</div>
                <div><span className="text-pink-400">const</span> <span className="text-green-400">success</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">launch</span>{`({`}</div>
                <div className="ml-4"><span className="text-purple-400">business</span>: <span className="text-orange-400">yourIdea</span>,</div>
                <div className="ml-4"><span className="text-purple-400">partner</span>: <span className="text-cyan-400">'LaunchWeb'</span></div>
                <div>{`});`}</div>
              </motion.div>
            </motion.div>
          </ClientOnly>
        </div>
      </div>
    </div>
  );
}
