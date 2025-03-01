import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
  children?: React.ReactNode;
}

export default function SEO({
  title = "LaunchWeb - Web Development & Digital Marketing Agency",
  description = "Transform your business with custom web solutions that drive growth. From concept to launch, we're your digital transformation partner.",
  image = "/images/og-image.jpg",
  url = "https://launchweb.in",
  keywords = "web development, web design, digital marketing, SEO, ecommerce, UI/UX design",
  type = "website",
  children
}: SEOProps) {
  const siteTitle = title.includes('LaunchWeb') ? title : `${title} | LaunchWeb`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
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
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="LaunchWeb" />
      
      {/* Additional custom head content */}
      {children}
    </Head>
  );
}
