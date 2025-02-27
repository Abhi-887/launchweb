import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Work from '../components/Work';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-950 text-white">
      <div className="relative z-10">
        <Navigation />
        <div className="pt-[72px]"> {/* Add padding top to account for fixed nav */}
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Features />
          </section>
          <Work />
          <Process />
          <Contact />
          
          <footer className="py-6 bg-blue-950 border-t border-purple-700 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Launchweb.in - All Rights Reserved</p>
          </footer>

        </div>
      </div>
    </div>
  );
}
