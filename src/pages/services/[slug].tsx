import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { serviceDetails } from '../../data/services'
import type { ServiceSlug } from '../../data/services'
import RelatedServices from '../../components/RelatedServices'
import CallToAction from '../../components/CallToAction'

export default function ServiceDetail() {
  const router = useRouter()
  const { slug } = router.query
  
  // Handle loading and invalid slugs
  if (!slug || typeof slug !== 'string') {
    return null
  }

  const service = serviceDetails[slug as ServiceSlug]

  // Handle invalid service pages
  if (!service) {
    if (typeof window !== 'undefined') {
      router.push('/#services')
    }
    return null
  }

  return (
    <>
      <Head>
        <title>{service.title} | LaunchWeb</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} | LaunchWeb`} />
        <meta property="og:description" content={service.description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900">
        <div className="container mx-auto px-4 py-24">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6">
              {service.title}
            </h1>
            
            <div className="prose prose-invert max-w-none">
              {service.content}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-white/5 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">•</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-16">
              <CallToAction 
                variant="secondary"
                title={`Ready to Level Up Your ${service.title}?`}
                subtitle="Get a free consultation and see how we can help you achieve your goals"
                buttonText={`Start Your ${service.title} Project`}
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started with {service.title}
              </Link>
            </div>

            <RelatedServices currentSlug={slug as ServiceSlug} />
          </div>
        </div>
      </div>
    </>
  )
}
