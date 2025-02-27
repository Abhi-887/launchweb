import { Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 text-center animate-fadeIn">
        <div className="animate-bounce-slow">
          <Rocket className="mx-auto text-purple-400 w-24 h-24 mb-8" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 animate-slideUp">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Launch Your Digital Success Story
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            Transform your business with custom web solutions that drive growth.
            From concept to launch, we're your digital transformation partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start Your Project 
              <ArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '200+', label: 'Projects Launched' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-400">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
