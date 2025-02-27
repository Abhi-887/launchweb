import { motion, useInView } from 'framer-motion';
import { Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useRef } from 'react';

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and requirements to create a solid project roadmap."
  },
  {
    icon: Code,
    title: "Design & Development",
    description: "Our team crafts beautiful designs and transforms them into powerful, responsive websites."
  },
  {
    icon: CheckCircle,
    title: "Testing & Refinement",
    description: "Rigorous testing ensures everything works perfectly across all devices and browsers."
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We help you launch successfully and provide ongoing support to ensure continued success."
  }
]

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-purple-900 to-blue-950">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven process ensures successful project delivery
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto" ref={containerRef}>
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="relative p-6 rounded-xl bg-white/5 border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Progress indicator */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute right-0 top-1/2 w-8 h-0.5 md:block hidden"
                      initial={{ background: "linear-gradient(90deg, rgba(167, 139, 250, 0) 0%, rgba(236, 72, 153, 0) 100%)" }}
                      animate={{ 
                        background: [
                          "linear-gradient(90deg, rgba(167, 139, 250, 0) 0%, rgba(236, 72, 153, 0) 100%)",
                          "linear-gradient(90deg, rgba(167, 139, 250, 0.5) 0%, rgba(236, 72, 153, 0.5) 100%)",
                          "linear-gradient(90deg, rgba(167, 139, 250, 0) 0%, rgba(236, 72, 153, 0) 100%)"
                        ]
                      }}
                      transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                    />
                  )}
                  
                  {/* Step number */}
                  <motion.div 
                    className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 flex items-center justify-center text-white font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                  >
                    {index + 1}
                  </motion.div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
