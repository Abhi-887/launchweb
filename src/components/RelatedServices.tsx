import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ServiceSlug, serviceDetails } from '../data/services'

interface Props {
  currentSlug: ServiceSlug;
}

export default function RelatedServices({ currentSlug }: Props) {
  const getRelatedServices = (current: ServiceSlug) => {
    return Object.entries(serviceDetails)
      .filter(([slug]) => slug !== current)
      .slice(0, 3)
      .map(([slug, service]) => ({
        slug,
        ...service
      }))
  }

  return (
    <div className="mt-24 border-t border-purple-500/20 pt-16">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-8">
        Explore Related Services
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {getRelatedServices(currentSlug).map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/services/${service.slug}`}>
              <div className="group p-6 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-xl font-semibold text-purple-300 mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 relative z-10">
                  {service.description}
                </p>
                
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors relative z-10">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
