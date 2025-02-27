import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { useState } from 'react'
import ContactModal from '../../components/ContactModal'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find(p => p.id === id)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  if (!project) return null

  return (
    <>
      <Head>
        <title>{project.title} | LaunchWeb Portfolio</title>
        <meta name="description" content={project.overview} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900">
        <div className="container mx-auto px-4 py-24">
          <Link 
            href="/#work" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6">
              {project.title}
            </h1>

            {/* Project Overview */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300">{project.overview}</p>
              
              <div className="flex flex-wrap gap-2 my-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-white/5 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">The Challenge</h2>
                <p className="text-gray-300">{project.challenge}</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Our Solution</h2>
                <p className="text-gray-300">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-purple-300 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {project.stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-white/5 border border-purple-500/20 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="p-8 rounded-xl bg-white/5 border border-purple-500/20 mb-12">
              <blockquote className="text-xl text-gray-300 italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-purple-300 font-medium">{project.testimonial.author}</div>
              <div className="text-sm text-gray-400">{project.testimonial.role}</div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-purple-300 mb-6">Technologies Used</h2>
              <div className="space-y-4">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5 border border-purple-500/20">
                    <div className="font-medium text-purple-300">{tech.name}</div>
                    <div className="text-sm text-gray-300">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Add Modal */}
            <ContactModal 
              isOpen={isContactModalOpen} 
              onClose={() => setIsContactModalOpen(false)} 
            />
          </div>
        </div>
      </div>
    </>
  )
}
