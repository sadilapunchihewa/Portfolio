export const projects = [
  {
    id: 'transitcare', number: '01', title: 'TransitCare', subtitle: 'Public Transport Complaint Management System',
    description: 'A full-stack complaint management system for passengers and administrators, with a clear workflow from submission through resolution.',
    stack: ['ASP.NET Core Web API', 'React', 'PostgreSQL', 'REST API', 'JWT Authentication'],
    features: ['Route, location and image evidence', 'Pending, review and resolved tracking', 'Passenger and admin roles', 'Statistics, search and filtering', 'Route-based insights', 'Responsive interface'],
    type: 'featured', visual: 'transit', image: '/images/transitcare.png', imageAlt: 'Screenshot of the TransitCare public transport complaint website', github: null, demo: null
  },
  {
    id: 'wijayanandana', number: '02', title: 'Wijayanandana Hotel & Bakery', subtitle: 'Hotel and Bakery Website · Personal Project',
    description: 'A modern website showcasing bakery products and lunch menus, with login, WhatsApp-based ordering and an admin dashboard for content management.',
    stack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Tailwind CSS'],
    features: ['Bakery products and lunch menus', 'Login and registration', 'WhatsApp-based ordering', 'Admin product and menu management', 'Responsive interface'],
    visual: 'bakery', image: '/images/Wijayanandana.jpeg', imageAlt: 'Screenshot of the Wijayanandana Hotel and Bakery website', github: null, demo: null
  },
  {
    id: 'arduino-home-automation', number: '03', title: 'Arduino Home Automation', subtitle: '1st Year · 1st Semester',
    description: 'A smart home automation system using Arduino to control lights, a fan and other devices, with sensor-driven responses and remote connectivity.',
    stack: ['Arduino', 'C++', 'PIR Sensor', 'LDR Sensor', 'GSM Module', 'Bluetooth Module'],
    features: ['Light and fan control', 'LDR and PIR automation', 'GSM motion alerts', 'Bluetooth remote control'],
    visual: 'automation', image: '/images/Ardinuo.jpeg', imageAlt: 'Arduino home automation model with illuminated rooms and electronics', github: null, demo: null
  },
  {
    id: 'vehicle-rental', number: '04', title: 'Vehicle Rental System', subtitle: '2nd Year · 1st Semester',
    description: 'A Java-based vehicle rental system for managing vehicles, bookings and customer details, with availability checks and reservations.',
    stack: ['Java', 'Database Management', 'Object-Oriented Programming'],
    features: ['Vehicle and customer records', 'Availability checks', 'Reservations and bookings', 'Object-oriented design'],
    visual: 'rental', image: '/images/vehicleRental.jpeg', imageAlt: 'Screenshot of vehicle listings in the rental system', github: null, demo: null
  }
]
