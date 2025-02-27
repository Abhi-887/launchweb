import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'  // Change from ScrollAnimation
import { projects } from '../data/projects'
import { useState } from 'react'
import ContactModal from './ContactModal'
import Image from 'next/image'

export default function Work() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  return (
    <>
      <section id="work" className="py-20 bg-gradient-to-b from-purple-900 to-blue-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
                Our Recent Work
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our latest projects and success stories
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={index * 0.1}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="group rounded-xl bg-white/5 border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all">
                    <div className="aspect-video relative">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
                        <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}
