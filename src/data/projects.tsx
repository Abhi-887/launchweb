export const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'Modern online store with seamless checkout',
    coverImage: '/images/projects/ecommerce.jpg',
    overview: 'A full-featured e-commerce platform built for a fashion retailer, featuring seamless payments and inventory management.',
    challenge: 'The client needed a scalable platform that could handle thousands of products and provide real-time inventory tracking.',
    solution: 'We implemented a Next.js-based solution with Stripe integration, custom inventory management, and mobile-first design.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
    features: [
      'Secure payment processing',
      'Real-time inventory tracking',
      'Advanced search and filtering',
      'Mobile-responsive design',
      'Admin dashboard',
      'Analytics integration'
    ],
    stats: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Mobile Traffic', value: '68%' }
    ],
    testimonial: {
      quote: "The platform transformed our business, doubling our online sales within months.",
      author: "Sarah Johnson",
      role: "CEO, FashionStore"
    },
    techStack: [
      { name: 'Next.js', description: 'For server-side rendering and optimal performance' },
      { name: 'Stripe', description: 'Secure payment processing integration' },
      { name: 'PostgreSQL', description: 'Robust database for inventory management' }
    ]
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform',
    coverImage: '/images/projects/dashboard.jpg',
    overview: 'A comprehensive analytics dashboard for SaaS businesses to track key metrics and user behavior.',
    challenge: 'The client needed real-time data visualization and custom reporting capabilities.',
    solution: 'We created a React-based dashboard with real-time updates using WebSocket and interactive charts.',
    tags: ['React', 'Node.js', 'Socket.io', 'D3.js'],
    features: [
      'Real-time data updates',
      'Interactive visualizations',
      'Custom report builder',
      'User behavior tracking',
      'Export capabilities',
      'Role-based access'
    ],
    stats: [
      { label: 'Data Processing', value: '<100ms' },
      { label: 'Active Users', value: '10k+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    testimonial: {
      quote: "The dashboard has become essential for our decision-making process.",
      author: "Mike Chen",
      role: "Product Manager, TechCorp"
    },
    techStack: [
      { name: 'React', description: 'Frontend framework for responsive UI' },
      { name: 'Socket.io', description: 'Real-time data streaming' },
      { name: 'D3.js', description: 'Advanced data visualizations' }
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application',
    coverImage: '/images/projects/mobile-app.jpg',
    overview: 'A high-performance mobile app built for both iOS and Android platforms, providing a seamless user experience.',
    challenge: 'The client needed a cross-platform solution that could deliver native-like performance and user experience.',
    solution: 'We developed a React Native-based app with custom native modules and optimized performance.',
    tags: ['React Native', 'iOS', 'Android', 'Firebase'],
    features: [
      'Cross-platform compatibility',
      'Push notifications',
      'Offline support',
      'In-app purchases',
      'User authentication',
      'Real-time updates'
    ],
    stats: [
      { label: 'User Retention', value: '85%' },
      { label: 'Crash Rate', value: '0.2%' },
      { label: 'Daily Active Users', value: '5k+' }
    ],
    testimonial: {
      quote: "The mobile app has significantly improved our user engagement and retention.",
      author: "Emily Davis",
      role: "CTO, AppStartup"
    },
    techStack: [
      { name: 'React Native', description: 'For building cross-platform mobile apps' },
      { name: 'Firebase', description: 'Backend services and real-time database' }
    ]
  }
]

export type ProjectId = typeof projects[number]['id']
