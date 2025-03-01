export interface Service {
  title: string;
  description: string;
  features?: string[];
  shortDescription?: string;
}

export const serviceDetails: Record<string, Service> = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom websites designed to meet your unique business needs and requirements',
    shortDescription: 'Modern, responsive websites built with the latest technologies',
    features: [
      'Responsive design for all devices',
      'Performance optimization',
      'SEO-friendly structure',
      'Modern frameworks (React, Next.js)',
      'Content management systems',
      'E-commerce solutions'
    ]
  },
  'seo-visibility': {
    title: 'SEO & Visibility',
    description: 'Improve your search rankings and online visibility to reach more customers',
    shortDescription: 'Get found by your target audience with optimized search presence',
    features: [
      'Keyword research and optimization',
      'On-page SEO implementation',
      'Technical SEO audits',
      'Content strategy',
      'Local SEO optimization',
      'Regular performance reporting'
    ]
  },
  'e-commerce-solutions': {
    title: 'E-commerce Solutions',
    description: 'Complete online store setup with secure payment processing and inventory management',
    shortDescription: 'Sell products online with a customized e-commerce platform',
    features: [
      'Product catalog management',
      'Secure payment gateways',
      'Inventory tracking systems',
      'Customer account portals',
      'Mobile shopping experience',
      'Order fulfillment workflows'
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Create intuitive, engaging user experiences that keep visitors coming back',
    shortDescription: 'Intuitive interfaces designed for optimal user experience',
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'Interaction design',
      'Visual design systems',
      'Usability testing',
      'Conversion rate optimization'
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence',
    shortDescription: 'Reach your target audience with strategic digital marketing',
    features: [
      'Social media management',
      'Email marketing campaigns',
      'Content marketing strategy',
      'PPC advertising',
      'Analytics and reporting',
      'Conversion optimization'
    ]
  },
  'launch-support': {
    title: 'Launch Support',
    description: 'End-to-end support for your digital project from concept to successful launch',
    shortDescription: 'Full support from concept through successful launch',
    features: [
      'Project management',
      'Quality assurance testing',
      'Deployment strategy',
      'Performance optimization',
      'Analytics setup',
      'Post-launch support'
    ]
  }
};
