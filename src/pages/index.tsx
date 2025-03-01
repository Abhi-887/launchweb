import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Work from '../components/Work';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled for the pricing component
// This avoids hydration errors from components that might not exist
const Pricing = dynamic(() => import('../components/Pricing').catch(() => () => null), { 
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <Layout>
      <SEO>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LaunchWeb",
            "url": "https://launchweb.in",
            "logo": "https://launchweb.in/images/logo.png",
            "sameAs": [
              "https://twitter.com/launchweb",
              "https://www.facebook.com/launchweb",
              "https://www.linkedin.com/company/launchweb"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919876543210",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
      </SEO>
      
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section id="home" className="bg-transparent">
          <Hero />
          <div className="section-connector"></div>
        </section>
        
        {/* Services Section */}
        <motion.section
          id="services"
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-content">
            <Features />
          </div>
          <div className="section-connector"></div>
        </motion.section>
        
        {/* Work Section */}
        <motion.section
          id="work"
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-content">
            <Work />
          </div>
          <div className="section-connector"></div>
        </motion.section>
        
        {/* Process Section */}
        <motion.section
          id="process"
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-content">
            <Process />
          </div>
          <div className="section-connector"></div>
        </motion.section>
        
        {/* Pricing Section - conditionally render if component exists */}
        {Pricing && <Pricing />}
        
        {/* Contact Section */}
        <motion.section
          id="contact"
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-content">
            <Contact />
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}
