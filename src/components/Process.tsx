import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Coffee, Code, Lightbulb, Rocket, Search, Users } from 'lucide-react';

const processSteps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Strategy",
    description: "Creating a detailed plan with timelines, deliverables, and clear communication channels.",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Design",
    description: "Collaborative design process with mockups and prototypes that align with your brand.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Building your solution with clean, efficient code and regular progress updates.",
    color: "from-violet-400 to-violet-600"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Testing",
    description: "Comprehensive quality assurance to ensure functionality, performance, and security.",
    color: "from-fuchsia-400 to-fuchsia-600"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch",
    description: "Smooth deployment with ongoing support to ensure your project succeeds.",
    color: "from-pink-400 to-pink-600"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-indigo-950 to-blue-950 opacity-90"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)', 
        backgroundSize: '3rem 3rem',
        opacity: 0.2
      }}></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
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
            Our Process
          </motion.span>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our proven approach ensures your project is completed on time, on budget, and exceeds expectations
          </motion.p>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative rounded-2xl backdrop-blur-sm border border-white/10 h-full p-6 bg-white/5">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-900 border-2 border-indigo-500 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-3 flex items-center justify-center text-white`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-8">Ready to start your project with our proven process?</p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
