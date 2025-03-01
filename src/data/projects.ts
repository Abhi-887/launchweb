export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  link?: string;
  content?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution built with Next.js and Shopify integration',
    coverImage: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'React', 'Shopify', 'Tailwind CSS', 'E-commerce'],
    content: 'Full-featured e-commerce platform with product management, cart functionality, and secure checkout.'
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Portal',
    description: 'Patient management system for healthcare providers',
    coverImage: '/images/projects/healthcare.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Authentication', 'Healthcare'],
    content: 'Secure healthcare portal for managing patient records, appointments, and communications.'
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'Real-time financial analytics dashboard for investment professionals',
    coverImage: '/images/projects/finance.jpg',
    tags: ['React', 'D3.js', 'API Integration', 'Real-time Data', 'Finance'],
    content: 'Interactive dashboard with real-time financial data visualization and analysis tools.'
  },
  {
    id: 'real-estate-marketplace',
    title: 'Real Estate Marketplace',
    description: 'Property listing and search platform with virtual tours',
    coverImage: '/images/projects/realestate.jpg',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Google Maps API', 'Real Estate'],
    content: 'Property marketplace with advanced search features and virtual tour capabilities.'
  },
  {
    id: 'social-media-app',
    title: 'Social Media Application',
    description: 'Community platform for connecting professionals in tech',
    coverImage: '/images/projects/social.jpg',
    tags: ['React Native', 'Firebase', 'Redux', 'Social Media', 'Mobile App'],
    content: 'Cross-platform mobile application for professional networking in the technology sector.'
  },
  {
    id: 'fitness-tracking',
    title: 'Fitness Tracking App',
    description: 'Personalized workout and nutrition tracking application',
    coverImage: '/images/projects/fitness.jpg',
    tags: ['React Native', 'GraphQL', 'HealthKit', 'Fitness', 'Mobile App'],
    content: 'Comprehensive fitness tracking solution with personalized workouts and nutrition planning.'
  }
];
