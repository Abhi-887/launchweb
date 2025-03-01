import React from 'react';
import Navigation from './Navigation';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
}

export default function Layout({ 
  children, 
  title = "LaunchWeb - Web Development & Digital Marketing Agency", 
  description = "Transform your business with custom web solutions that drive growth. From concept to launch, we're your digital transformation partner.",
  image = "/images/og-image.jpg",
  url = "https://launchweb.in",
  keywords = "web development, web design, digital marketing, SEO, ecommerce, UI/UX design",
  type = "website"
}: LayoutProps) {
  const siteTitle = title.includes('LaunchWeb') ? title : `${title} | LaunchWeb`;
  
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e3a8a" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={url} />
        
        {/* Open Graph Meta Tags for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image.startsWith('http') ? image : `${url}${image}`} />
        <meta property="og:site_name" content="LaunchWeb" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image.startsWith('http') ? image : `${url}${image}`} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LaunchWeb Agency" />
      </Head>
      
      {/* Main layout structure */}
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-950 text-white overflow-hidden">
        <Navigation />
        <main>
          {children}
        </main>
        {/* Footer - only one instance */}
        <footer className="py-8 bg-blue-950/80 border-t border-purple-700/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} LaunchWeb - All Rights Reserved
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
