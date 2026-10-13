export const projects = [
  {
    id: 'ceyvora', number: '01', title: 'CEYVORA', subtitle: 'AI-Powered Tourism & Travel Platform',
    description: 'A full-stack Sri Lankan tourism platform featuring destination discovery, curated tour packages, personalized AI-powered travel itineraries, authentication, role-based access, an admin dashboard, and traveller enquiry management.',
    stack: ['React', 'ASP.NET Core Web API', 'PostgreSQL', 'Python', 'FastAPI', 'LangGraph', 'Google Gemini AI', 'GitHub Actions', 'Playwright'],
    features: ['Agentic AI travel planner powered by LangGraph and Google Gemini', 'Destination discovery and curated travel packages', 'RESTful API integration and PostgreSQL database', 'Authentication and role-based authorization', 'Admin dashboard and enquiry management', 'CI/CD with GitHub Actions and automated testing using Playwright'],
    type: 'featured', primary: true, visual: 'tourism', image: '/images/ceyvora.png', imageAlt: 'Screenshot of the CEYVORA tourism and travel platform', github: 'https://github.com/sadilapunchihewa/CEYVORA', demo: null, showLinks: true
  },
  {
    id: 'rentwise', number: '02', title: 'RentWise', subtitle: 'AI-Powered Property Rental & Tenant Matching Platform',
    description: 'A full-stack property rental platform featuring web and mobile applications, property listings, tenant matching, rental management, and AI-assisted property recommendations.',
    stack: ['React', 'Flutter', 'ASP.NET Core Web API', 'PostgreSQL', 'FastAPI', 'LangGraph', 'Google Gemini AI', 'Supabase', 'GitHub Actions'],
    features: ['Property listing and rental management', 'AI-powered property recommendations and tenant matching', 'React web application and Flutter mobile application', 'RESTful APIs and PostgreSQL integration', 'Authentication and role-based access', 'Cloud deployment and CI/CD integration'],
    visual: 'property', image: '/images/rentwise.png', imageAlt: 'Screenshot of the RentWise property rental platform', github: 'https://github.com/sadilapunchihewa/Rent-Wise', demo: 'https://rentwiselk.pages.dev/', showLinks: true
  },
  {
    id: 'transitcare', number: '03', title: 'TransitCare', subtitle: 'Public Transport Complaint Management System',
    description: 'A full-stack complaint management system for passengers and administrators, with a clear workflow from submission through resolution.',
    stack: ['ASP.NET Core Web API', 'React', 'PostgreSQL', 'REST API', 'JWT Authentication'],
    features: ['Route, location and image evidence', 'Pending, review and resolved tracking', 'Passenger and admin roles', 'Statistics, search and filtering', 'Route-based insights', 'Responsive interface'],
    type: 'featured', visual: 'transit', image: '/images/transitcare.png', imageAlt: 'Screenshot of the TransitCare public transport complaint website', github: null, demo: null
  },
  {
    id: 'wijayanandana', number: '04', title: 'Wijayanandana Hotel & Bakery', subtitle: 'Hotel and Bakery Website · Personal Project',
    description: 'A modern website showcasing bakery products and lunch menus, with login, WhatsApp-based ordering and an admin dashboard for content management.',
    stack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Tailwind CSS'],
    features: ['Bakery products and lunch menus', 'Login and registration', 'WhatsApp-based ordering', 'Admin product and menu management', 'Responsive interface'],
    visual: 'bakery', image: '/images/Wijayanandana.jpeg', imageAlt: 'Screenshot of the Wijayanandana Hotel and Bakery website', github: null, demo: null
  },
  {
    id: 'arduino-home-automation', number: '05', title: 'Arduino Home Automation', subtitle: '1st Year · 1st Semester',
    description: 'A smart home automation system using Arduino to control lights, a fan and other devices, with sensor-driven responses and remote connectivity.',
    stack: ['Arduino', 'C++', 'PIR Sensor', 'LDR Sensor', 'GSM Module', 'Bluetooth Module'],
    features: ['Light and fan control', 'LDR and PIR automation', 'GSM motion alerts', 'Bluetooth remote control'],
    visual: 'automation', image: '/images/Ardinuo.jpeg', imageAlt: 'Arduino home automation model with illuminated rooms and electronics', github: null, demo: null
  }
]
