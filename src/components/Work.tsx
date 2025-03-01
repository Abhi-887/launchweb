import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ContactModal from './ContactModal';
import Image from 'next/image';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Work() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Split projects into two columns for magazine layout, but only use first 6 projects
  const displayProjects = projects.slice(0, 6);
  const column1 = displayProjects.filter((_, i) => i % 2 === 0);
  const column2 = displayProjects.filter((_, i) => i % 2 === 1);

  // Memoized hover handler to prevent unnecessary re-renders
  const handleProjectHover = useCallback((id) => {
    setHoveredProject(id);
  }, []);

  return (
    <>
      <div id="work" className="py-20 sm:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
        
        {/* Grid pattern overlay - optimized with CSS custom property */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)', 
          backgroundSize: 'clamp(2rem, 5vw, 3rem) clamp(2rem, 5vw, 3rem)',
          opacity: 0.15
        }}></div>
        
        {/* Simplified glow effects for better performance */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-md max-h-md bg-purple-500/15 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-md max-h-md bg-blue-500/15 rounded-full blur-[100px] z-0"></div>
        
        {/* Container */}
        <div className="container relative z-10 mx-auto px-4 w-full max-w-7xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.span className="badge inline-block text-sm font-bold uppercase tracking-wider text-gradient-color mb-3">
              Portfolio
            </motion.span>
            
            <h2 className="text-gradient mb-6">Our Recent Work</h2>
            
            <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their digital presence
            </p>
          </motion.div>

          {/* Project showcase - responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Left column */}
            <motion.div 
              className="space-y-8 md:space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {column1.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index} 
                  isHovered={hoveredProject === project.id}
                  setHovered={handleProjectHover}
                  prefersReducedMotion={prefersReducedMotion}
                  featured={index === 0}
                />
              ))}
            </motion.div>
            
            {/* Right column - with offset on larger screens */}
            <motion.div 
              className="space-y-8 md:space-y-12 md:mt-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {column2.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index + column1.length} 
                  isHovered={hoveredProject === project.id}
                  setHovered={handleProjectHover}
                  prefersReducedMotion={prefersReducedMotion}
                  featured={false}
                />
              ))}
            </motion.div>
          </div>

          {/* View all projects button */}
          <div className="mt-16 text-center">
            <Link href="/projects" className="btn btn-primary">
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="ml-2 relative z-10 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}

// ProjectCard component - optimized for performance and fixed for static export
const ProjectCard = React.memo(function ProjectCard({ project, index, isHovered, setHovered, prefersReducedMotion, featured }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group"
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
      whileHover={prefersReducedMotion ? {} : { y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className={`
          relative overflow-hidden rounded-2xl glass-card
          transition-all duration-300
          ${isHovered ? 'shadow-glow' : ''}
        `}>
          {/* Project image with fixed loading strategy for static export */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative overflow-hidden rounded-t-2xl">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index <= 1} 
              // Remove placeholder and blurDataURL for static export compatibility
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              {/* Project title */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <motion.div 
                  className="absolute h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  style={{ bottom: '2px', left: 0 }}
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Truncate description for better mobile display */}
              <p className="text-gray-300 mb-2 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project tags - responsive layout */}
          <div className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-b-2xl border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {/* Limit tags on mobile */}
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs sm:text-sm bg-white/10 text-white/90 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-xs sm:text-sm bg-white/5 text-white/70 rounded-full">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            
            {/* View details link */}
            <div className="mt-3 flex items-center justify-end text-xs sm:text-sm font-medium text-purple-300 group-hover:text-white transition-colors duration-300">
              View Details 
              <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});
