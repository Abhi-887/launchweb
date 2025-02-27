import { ReactNode } from 'react'

interface ServiceData {
  title: string;
  description: string;
  content: ReactNode;
  benefits: string[];
  features: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
}

export const serviceDetails: Record<string, ServiceData> = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    content: (
      <>
        <p className="text-lg text-gray-300 mb-6">
          Transform your digital presence with our cutting-edge web development services. We create fast, responsive, and user-friendly websites that drive results.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Technologies We Use</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Next.js & React for modern web applications</li>
          <li>Node.js & Express for backend services</li>
          <li>MongoDB & PostgreSQL for databases</li>
          <li>AWS & Vercel for cloud hosting</li>
        </ul>
      </>
    ),
    benefits: [
      'Lightning-fast loading speeds',
      'Mobile-first responsive design',
      'SEO-optimized architecture',
      'Scalable and secure infrastructure'
    ],
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'API Development & Integration'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'Understanding your business goals and requirements'
      },
      {
        title: 'Planning',
        description: 'Creating wireframes and technical specifications'
      },
      {
        title: 'Development',
        description: 'Building your solution with modern technologies'
      },
      {
        title: 'Testing',
        description: 'Ensuring quality across all devices'
      }
    ]
  },
  'seo-visibility': {
    title: 'SEO & Visibility',
    description: 'Boost your online presence with data-driven SEO strategies.',
    content: (
      <>
        <p className="text-lg text-gray-300 mb-6">
          Improve your search engine rankings and drive organic traffic with our comprehensive SEO services. We use data-driven strategies to increase your visibility.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Our SEO Approach</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Technical SEO optimization</li>
          <li>Content strategy and creation</li>
          <li>Link building and outreach</li>
          <li>Local SEO optimization</li>
        </ul>
      </>
    ),
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Better conversion rates',
      'Local business visibility'
    ],
    features: [
      'Keyword Research',
      'On-page SEO',
      'Technical SEO',
      'Content Strategy'
    ],
    process: [
      {
        title: 'Audit',
        description: 'Analyzing your current SEO performance'
      },
      {
        title: 'Strategy',
        description: 'Developing a customized SEO plan'
      },
      {
        title: 'Implementation',
        description: 'Executing SEO optimizations'
      },
      {
        title: 'Monitoring',
        description: 'Tracking and improving results'
      }
    ]
  },
  'e-commerce-solutions': {
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with secure payments and inventory management.',
    content: (
      <>
        <p className="text-lg text-gray-300 mb-6">
          Transform your business with our powerful e-commerce solutions. We create seamless shopping experiences that convert visitors into loyal customers.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-300 mt-8 mb-4">E-Commerce Features</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Secure payment gateway integration</li>
          <li>Inventory management system</li>
          <li>Order tracking and fulfillment</li>
          <li>Customer account management</li>
        </ul>
      </>
    ),
    benefits: [
      'Increased sales conversion',
      'Secure payment processing',
      'Automated inventory management',
      'Mobile-optimized shopping'
    ],
    features: [
      'Product Management',
      'Payment Gateway Integration',
      'Order Management',
      'Analytics Dashboard'
    ],
    process: [
      {
        title: 'Store Setup',
        description: 'Creating your online store architecture'
      },
      {
        title: 'Product Integration',
        description: 'Setting up products and inventory'
      },
      {
        title: 'Payment Setup',
        description: 'Integrating secure payment systems'
      },
      {
        title: 'Launch',
        description: 'Going live with full testing'
      }
    ]
  },

  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that convert visitors into customers.',
    content: (
      <>
        <p className="text-lg text-gray-300 mb-6">
          Create memorable user experiences with our expert UI/UX design services. We focus on user-centered design principles to build interfaces that delight and convert.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Design Process</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>User research and personas</li>
          <li>Wireframing and prototyping</li>
          <li>Visual design and branding</li>
          <li>Usability testing</li>
        </ul>
      </>
    ),
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced bounce rates',
      'Brand consistency'
    ],
    features: [
      'Responsive Design',
      'Interactive Prototypes',
      'User Journey Mapping',
      'Accessibility Compliance'
    ],
    process: [
      {
        title: 'Research',
        description: 'Understanding users and competitors'
      },
      {
        title: 'Design',
        description: 'Creating wireframes and mockups'
      },
      {
        title: 'Testing',
        description: 'User testing and refinement'
      },
      {
        title: 'Implementation',
        description: 'Development and launch'
      }
    ]
  },

  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business online.',
    content: (
      <>
        <p className="text-lg text-gray-300 mb-6">
          Drive growth with our data-driven digital marketing strategies. We help you reach your target audience and achieve measurable results.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Marketing Channels</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Social Media Marketing</li>
          <li>Email Marketing</li>
          <li>Content Marketing</li>
          <li>PPC Advertising</li>
        </ul>
      </>
    ),
    benefits: [
      'Increased brand awareness',
      'Higher ROI',
      'Targeted audience reach',
      'Measurable results'
    ],
    features: [
      'Social Media Management',
      'Email Campaigns',
      'Content Strategy',
      'Analytics & Reporting'
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Market and competitor research'
      },
      {
        title: 'Strategy',
        description: 'Campaign planning and setup'
      },
      {
        title: 'Execution',
        description: 'Campaign management'
      },
      {
        title: 'Optimization',
        description: 'Performance tracking and improvement'
      }
    ]
  },

  'launch-support': {
    title: 'Launch Support',
    description: 'End-to-end support from development to deployment and beyond.',
    content: (
      <>
        <p className="text-lg text-gray-300 mb-6">
          Get comprehensive launch support to ensure your project goes live successfully. We handle everything from deployment to monitoring and maintenance.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Launch Services</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Deployment planning</li>
          <li>Server configuration</li>
          <li>Performance optimization</li>
          <li>Security implementation</li>
        </ul>
      </>
    ),
    benefits: [
      'Smooth deployment',
      'Minimal downtime',
      'Performance monitoring',
      '24/7 support'
    ],
    features: [
      'Deployment Management',
      'Server Setup',
      'Security Configuration',
      'Monitoring Setup'
    ],
    process: [
      {
        title: 'Planning',
        description: 'Launch strategy development'
      },
      {
        title: 'Setup',
        description: 'Infrastructure configuration'
      },
      {
        title: 'Deployment',
        description: 'Going live with monitoring'
      },
      {
        title: 'Support',
        description: 'Ongoing maintenance and updates'
      }
    ]
  }
}

export type ServiceSlug = keyof typeof serviceDetails
