import Link from 'next/link'
import { Code, Rocket, Search, ShoppingCart, Palette, BarChart } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { serviceDetails } from '../data/services'

const features = Object.entries(serviceDetails).map(([slug, service]) => ({
  ...service,
  slug,
  icon: getServiceIcon(slug)
}))

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-purple-900">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-300 mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to establish and grow your online presence
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link href={`/services/${feature.slug}`}>
                <div className="p-6 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
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
  }
  return icons[slug as keyof typeof icons] || Rocket
}
