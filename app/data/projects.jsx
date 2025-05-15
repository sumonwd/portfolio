import { Zap, Database, Shield, Cloud, Server, Code2 } from "lucide-react";

export const projects = [
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    tagline: "Complete solution for modern restaurants",
    category: "Enterprise",
    status: "Live",
    duration: "3 months",
    team: "4 developers",
    client: "Restaurant Chain Inc.",
    year: "2024",
    description:
      "Complete restaurant management with ordering, billing, and kitchen display",
    fullDescription:
      "A comprehensive restaurant management system that streamlines operations from order taking to kitchen management, inventory control, and financial reporting. Built with modern technologies to handle high-volume transactions and real-time updates.",
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
    technologies: {
      Frontend: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
      Backend: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
      DevOps: ["Docker", "AWS", "GitHub Actions", "Nginx"],
    },
    features: [
      {
        icon: <Shield />,
        title: "Real-time Order Management",
        description:
          "Live order tracking from placement to delivery with kitchen display system",
      },
      {
        icon: <Database />,
        title: "Inventory Control",
        description:
          "Automated inventory tracking with low-stock alerts and supplier management",
      },
      {
        icon: <Shield />,
        title: "Secure Payment Processing",
        description:
          "PCI-compliant payment gateway integration with multiple payment methods",
      },
      {
        icon: <Cloud />,
        title: "Cloud-based Architecture",
        description:
          "Scalable cloud infrastructure ensuring 99.9% uptime and data backup",
      },
    ],
    metrics: [
      { label: "Orders Processed Daily", value: "5,000+" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Response Time", value: "<200ms" },
      { label: "Customer Satisfaction", value: "4.8/5" },
    ],
    challenges: [
      "Integrating with legacy POS systems",
      "Handling peak hour traffic loads",
      "Implementing real-time synchronization across multiple locations",
      "Ensuring data consistency during network interruptions",
    ],
    solutions: [
      "Developed custom API adapters for legacy system integration",
      "Implemented load balancing and caching strategies",
      "Used WebSocket connections for real-time updates",
      "Built offline-first architecture with sync queues",
    ],
    testimonial: {
      quote:
        "This system has revolutionized our operations. We've seen a 40% increase in efficiency and our customers love the seamless experience.",
      author: "John Doe",
      position: "CEO, Restaurant Chain Inc.",
    },
  },
  {
    id: "pos-system",
    title: "POS System",
    tagline: "Modern point-of-sale solution",
    category: "Business Solution",
    status: "Live",
    duration: "2 months",
    team: "3 developers",
    client: "Retail Corp",
    year: "2024",
    description:
      "Modern point-of-sale system with inventory management and analytics",
    fullDescription:
      "A cutting-edge POS system designed for retail businesses, featuring real-time inventory tracking, sales analytics, customer management, and seamless payment processing.",
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
    ],
    tech: ["Laravel", "Vue.js", "MySQL", "TailwindCSS"],
    technologies: {
      Frontend: ["Vue.js", "Vuex", "TailwindCSS", "Chart.js"],
      Backend: ["Laravel", "MySQL", "Redis", "Queue Jobs"],
      Integration: ["Stripe API", "PayPal API", "SMS Gateway"],
    },
    features: [
      {
        icon: <Shield />,
        title: "Secure Transactions",
        description: "PCI-compliant payment processing with fraud detection",
      },
      {
        icon: <Database />,
        title: "Inventory Management",
        description: "Real-time stock tracking and automated reordering",
      },
      {
        icon: <Cloud />,
        title: "Cloud Backup",
        description: "Automatic data backup and disaster recovery",
      },
      {
        icon: <Server />,
        title: "Multi-store Support",
        description: "Manage multiple locations from a single dashboard",
      },
    ],
    metrics: [
      { label: "Transactions Per Day", value: "10,000+" },
      { label: "System Reliability", value: "99.95%" },
      { label: "Processing Speed", value: "<1s" },
      { label: "User Satisfaction", value: "4.9/5" },
    ],
    challenges: [
      "Creating intuitive UI for non-technical users",
      "Optimizing for high-speed transactions",
      "Implementing offline capabilities",
      "Integration with various payment providers",
    ],
    solutions: [
      "Conducted extensive user testing and iterative design",
      "Implemented efficient caching and query optimization",
      "Built progressive web app with service workers",
      "Created unified payment gateway interface",
    ],
    testimonial: {
      quote:
        "The best POS system we've ever used. It's fast, reliable, and our staff loves how easy it is to use.",
      author: "Jane Smith",
      position: "Operations Manager, Retail Corp",
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    tagline: "Multi-vendor marketplace solution",
    category: "E-commerce",
    status: "Live",
    duration: "4 months",
    team: "5 developers",
    client: "MarketPlace Inc.",
    year: "2023",
    description:
      "Multi-vendor marketplace with payment integration and admin panel",
    fullDescription:
      "A comprehensive e-commerce platform supporting multiple vendors, featuring advanced search, personalized recommendations, secure payment processing, and powerful admin tools.",
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
    ],
    tech: ["Laravel", "React", "Stripe API", "Redis"],
    technologies: {
      Frontend: ["React", "Redux", "Material-UI", "Axios"],
      Backend: ["Laravel", "PostgreSQL", "Elasticsearch", "Redis"],
      Services: ["Stripe", "AWS S3", "SendGrid", "Twilio"],
    },
    features: [
      {
        icon: <Database />,
        title: "Multi-vendor Support",
        description: "Complete vendor management with commission tracking",
      },
      {
        icon: <Shield />,
        title: "Secure Payments",
        description: "Integrated payment gateway with escrow system",
      },
      {
        icon: <Code2 />,
        title: "Advanced Search",
        description: "Elasticsearch-powered search with filters",
      },
      {
        icon: <Server />,
        title: "Scalable Architecture",
        description: "Microservices-based design for high performance",
      },
    ],
    metrics: [
      { label: "Active Vendors", value: "500+" },
      { label: "Daily Transactions", value: "15,000+" },
      { label: "Page Load Time", value: "<1.5s" },
      { label: "Customer Rating", value: "4.7/5" },
    ],
    challenges: [
      "Managing complex vendor relationships",
      "Implementing efficient product search",
      "Ensuring platform security",
      "Handling high transaction volumes",
    ],
    solutions: [
      "Built comprehensive vendor dashboard",
      "Implemented Elasticsearch for fast searching",
      "Added multiple security layers and monitoring",
      "Used queue systems for async processing",
    ],
    testimonial: {
      quote:
        "This platform has transformed our business. The vendor tools are amazing and our sales have tripled.",
      author: "Mike Johnson",
      position: "Founder, MarketPlace Inc.",
    },
  },
  {
    id: "agency-website",
    title: "Agency Website",
    tagline: "Creative portfolio with CMS",
    category: "Corporate",
    status: "Live",
    duration: "6 weeks",
    team: "2 developers",
    client: "Creative Agency Co.",
    year: "2023",
    description: "Creative agency portfolio with CMS and client portal",
    fullDescription:
      "A stunning agency website featuring dynamic portfolio showcases, content management system, client portal, and integrated project management tools.",
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
    ],
    tech: ["Nuxt.js", "Strapi", "GraphQL", "TailwindCSS"],
    technologies: {
      Frontend: ["Nuxt.js", "Vue.js", "GSAP", "TailwindCSS"],
      Backend: ["Strapi CMS", "PostgreSQL", "GraphQL"],
      Hosting: ["Vercel", "AWS S3", "Cloudflare"],
    },
    features: [
      {
        icon: <Code2 />,
        title: "Custom CMS",
        description: "Easy content management for non-technical users",
      },
      {
        icon: <Shield />,
        title: "Client Portal",
        description: "Secure area for client project access",
      },
      {
        icon: <Zap />,
        title: "Fast Performance",
        description: "Optimized for speed with lazy loading",
      },
      {
        icon: <Database />,
        title: "SEO Optimized",
        description: "Built-in SEO tools and meta management",
      },
    ],
    metrics: [
      { label: "Page Speed Score", value: "98/100" },
      { label: "SEO Score", value: "100/100" },
      { label: "Load Time", value: "<1s" },
      { label: "Client Satisfaction", value: "5/5" },
    ],
    challenges: [
      "Creating unique, memorable design",
      "Optimizing for perfect performance",
      "Building flexible content system",
      "Implementing smooth animations",
    ],
    solutions: [
      "Collaborated with designers for unique layouts",
      "Used modern optimization techniques",
      "Built modular component system",
      "Implemented GSAP for smooth animations",
    ],
    testimonial: {
      quote:
        "Our new website has elevated our brand presence. Clients love it and we've seen a 60% increase in inquiries.",
      author: "Sarah Williams",
      position: "Creative Director, Creative Agency Co.",
    },
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    tagline: "Content management system",
    category: "Content Management",
    status: "Live",
    duration: "2 months",
    team: "3 developers",
    client: "Media Publishing Ltd.",
    year: "2023",
    description:
      "Content management system with SEO optimization and social features",
    fullDescription:
      "A modern blogging platform with advanced content management, SEO tools, social sharing features, and analytics dashboard for content creators.",
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
    ],
    tech: ["Laravel", "Vue.js", "Elasticsearch", "Bootstrap"],
    technologies: {
      Frontend: ["Vue.js", "Vuex", "Bootstrap", "Quill Editor"],
      Backend: ["Laravel", "MySQL", "Elasticsearch", "Redis"],
      Services: ["Algolia", "Cloudinary", "Google Analytics"],
    },
    features: [
      {
        icon: <Code2 />,
        title: "Rich Text Editor",
        description: "Advanced editor with media embedding",
      },
      {
        icon: <Database />,
        title: "SEO Tools",
        description: "Built-in SEO optimization features",
      },
      {
        icon: <Shield />,
        title: "User Management",
        description: "Role-based access control system",
      },
      {
        icon: <Zap />,
        title: "Fast Search",
        description: "Elasticsearch-powered content search",
      },
    ],
    metrics: [
      { label: "Active Authors", value: "200+" },
      { label: "Articles Published", value: "10,000+" },
      { label: "Monthly Visitors", value: "1M+" },
      { label: "Engagement Rate", value: "45%" },
    ],
    challenges: [
      "Building intuitive content editor",
      "Implementing powerful search",
      "Optimizing for SEO",
      "Managing user permissions",
    ],
    solutions: [
      "Integrated Quill editor with custom plugins",
      "Implemented Elasticsearch for search",
      "Built comprehensive SEO toolkit",
      "Created flexible permission system",
    ],
    testimonial: {
      quote:
        "This platform has made content management a breeze. Our writers love it and our traffic has doubled.",
      author: "Tom Davis",
      position: "Editor-in-Chief, Media Publishing Ltd.",
    },
  },
  {
    id: "mobile-app",
    title: "Task Management App",
    tagline: "Cross-platform mobile solution",
    category: "Mobile",
    status: "Live",
    duration: "3 months",
    team: "2 developers",
    client: "Productivity Solutions Inc.",
    year: "2023",
    description: "Cross-platform mobile application for task management",
    fullDescription:
      "A feature-rich task management mobile app with real-time sync, team collaboration, notifications, and offline capabilities for iOS and Android.",
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
    ],
    tech: ["Flutter", "Firebase", "REST API", "Provider"],
    technologies: {
      Mobile: ["Flutter", "Dart", "Provider", "Shared Preferences"],
      Backend: ["Node.js", "Express", "MongoDB", "Socket.io"],
      Services: ["Firebase", "OneSignal", "Google Cloud"],
    },
    features: [
      {
        icon: <Zap />,
        title: "Real-time Sync",
        description: "Instant synchronization across devices",
      },
      {
        icon: <Shield />,
        title: "Offline Mode",
        description: "Full functionality without internet",
      },
      {
        icon: <Database />,
        title: "Team Collaboration",
        description: "Share tasks and projects with teams",
      },
      {
        icon: <Server />,
        title: "Push Notifications",
        description: "Smart reminders and updates",
      },
    ],
    metrics: [
      { label: "Active Users", value: "50,000+" },
      { label: "App Store Rating", value: "4.8/5" },
      { label: "Daily Tasks Created", value: "100,000+" },
      { label: "Crash-free Rate", value: "99.9%" },
    ],
    challenges: [
      "Cross-platform UI consistency",
      "Implementing offline sync",
      "Optimizing battery usage",
      "Managing complex state",
    ],
    solutions: [
      "Used Flutter for native performance",
      "Built robust sync queue system",
      "Optimized background processes",
      "Implemented Provider for state management",
    ],
    testimonial: {
      quote:
        "This app has completely changed how our team manages tasks. It's fast, reliable, and works everywhere.",
      author: "Lisa Chen",
      position: "Product Manager, Productivity Solutions Inc.",
    },
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
