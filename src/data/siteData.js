export const logoImage = '/assets/logo-transparent.png';
const contentImages = [
  '/assets/home-exterior.jpg',
  '/assets/modern-villa.jpg',
  '/assets/living-room.jpg',
  '/assets/modern-kitchen.jpg',
  '/assets/bedroom.jpg',
  '/assets/floor-plan.jpg',
  '/assets/interior-detail.jpg',
  '/assets/garden-home.jpg',
];
let imageIndex = 0;
const nextImage = () => contentImages[imageIndex++ % contentImages.length];

export const company = {
  name: 'Creative Home Plan & Design',
  email: 'creativehome202297@gmail.com',
  phone: '919644454455',
  displayPhone: '+91 96444 54455',
  location: ['Cliffton corporate ab road indore'],
  ocation: ['Raimilan, Singrauli, Madhya Pradesh'],
};

export const whatsappNumber = '919644454455';
export const whatsappLink = (message = 'Hello Creative Home Plan & Design, I would like to discuss my home project.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    number: '01',
    title: 'Home Floor Plans',
    description: 'Tailored layouts that balance flow, daylight, circulation and everyday living.',
    icon: 'floorPlan',
    image: nextImage(),
  },
  {
    number: '02',
    title: 'Architectural Design',
    description: 'Context-aware elevations and thoughtful planning rooted in modern lifestyle needs.',
    icon: 'architecture',
    image: nextImage(),
  },
  {
    number: '03',
    title: '3D Home Design',
    description: 'Photorealistic room and exterior concepts that help clients visualize the future home.',
    icon: 'cube',
    image: nextImage(),
  },
  {
    number: '04',
    title: 'Interior Design',
    description: 'Material palettes, furniture planning and styling that make every room feel considered.',
    icon: 'interior',
    image: nextImage(),
  },
  {
    number: '05',
    title: 'Vastu Planning',
    description: 'Spatial guidance aligned with client preferences, principles and harmonious living.',
    icon: 'compass',
    image: nextImage(),
  },
  {
    number: '06',
    title: 'Construction Planning',
    description: 'Execution-focused roadmaps that coordinate design, materials and build sequencing.',
    icon: 'construction',
    image: nextImage(),
  },
];

export const housePlans = [
  {
    name: 'Modern Courtyard Home',
    category: '3 BHK',
    area: '1800 sq.ft.',
    bedrooms: 3,
    bathrooms: 3,
    floors: 2,
    plot: '30 x 50 ft',
    image: nextImage(),
  },
  {
    name: 'Family Courtyard Villa',
    category: 'Villa',
    area: '2600 sq.ft.',
    bedrooms: 4,
    bathrooms: 4,
    floors: 2,
    plot: '35 x 60 ft',
    image: nextImage(),
  },
  {
    name: 'Contemporary Duplex',
    category: 'Duplex',
    area: '2200 sq.ft.',
    bedrooms: 3,
    bathrooms: 3,
    floors: 2,
    plot: '30 x 55 ft',
    image: nextImage(),
  },
  {
    name: 'Urban Minimal Residence',
    category: '2 BHK',
    area: '1500 sq.ft.',
    bedrooms: 2,
    bathrooms: 2,
    floors: 1,
    plot: '24 x 40 ft',
    image: nextImage(),
  },
  {
    name: 'Luxury Family Villa',
    category: 'Luxury',
    area: '3700 sq.ft.',
    bedrooms: 5,
    bathrooms: 4,
    floors: 2,
    plot: '45 x 70 ft',
    image: nextImage(),
  },
  {
    name: 'Garden Retreat',
    category: '4 BHK',
    area: '2900 sq.ft.',
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    plot: '35 x 65 ft',
    image: nextImage(),
  },
];

export const designStyles = [
  {
    title: 'Modern',
    image: nextImage(),
    description:
      'Clean-lined architecture with dramatic glazing, warm stone textures and an open indoor-outdoor rhythm.',
  },
  {
    title: 'Contemporary',
    image: nextImage(),
    description:
      'Balanced volumes, layered materials and refined detailing designed to feel current yet timeless.',
  },
  {
    title: 'Minimal',
    image: nextImage(),
    description:
      'Simple forms, generous light and uncluttered planning for homes that feel calm and precise.',
  },
  {
    title: 'Luxury',
    image: nextImage(),
    description:
      'Statement living with curated finishes, grand proportions and a hospitality-inspired lifestyle.',
  },
  {
    title: 'Traditional',
    image: nextImage(),
    description:
      'Warm heritage cues, symmetry and graceful detailing expressed in a distinctly rooted architectural language.',
  },
  {
    title: 'Indo-Contemporary',
    image: nextImage(),
    description:
      'A seamless blend of contemporary planning with Indian sensibilities, courtyards and layered textures.',
  },
];

export const reasons = [
  {
    title: 'Personalized Planning',
    description: 'Every home is designed around your lifestyle, priorities and the way you live every day.',
  },
  {
    title: 'Smart Space Utilization',
    description: 'Every square foot has a purpose, balancing comfort, utility and long-term flexibility.',
  },
  {
    title: 'Visualize Before Building',
    description: 'See your home through realistic 3D design before a single wall is constructed.',
  },
  {
    title: 'One Design Partner',
    description: 'Planning, architecture and design under one roof so your vision remains consistent.',
  },
];

export const processSteps = [
  'Tell Us Your Vision',
  'Site & Requirement Study',
  'Concept & Floor Planning',
  '3D Visualization',
  'Design Finalization',
  'Execution Support',
];

export const projects = [
  {
    title: 'The Courtyard House',
    location: 'Indore',
    area: '2400 sq.ft.',
    type: 'Modern Contemporary',
    image: nextImage(),
    category: 'Modern Homes',
  },
  {
    title: 'The Pine Terrace',
    location: 'Bhopal',
    area: '3100 sq.ft.',
    type: 'Luxury Villa',
    image: nextImage(),
    category: 'Villas',
  },
  {
    title: 'Garden Crest',
    location: 'Jabalpur',
    area: '2700 sq.ft.',
    type: 'Minimal Residence',
    image: nextImage(),
    category: 'Modern Homes',
  },
  {
    title: 'Elevated Horizon',
    location: 'Nagpur',
    area: '2600 sq.ft.',
    type: 'Duplex Living',
    image: nextImage(),
    category: 'Duplexes',
  },
  {
    title: 'The Hallow Interiors',
    location: 'Raipur',
    area: '1800 sq.ft.',
    type: 'Premium Interior',
    image: nextImage(),
    category: 'Interiors',
  },
  {
    title: 'Skyline Concept',
    location: 'Gwalior',
    area: '3300 sq.ft.',
    type: '3D Visualization',
    image: nextImage(),
    category: '3D Concepts',
  },
];

export const projectCategories = ['All', 'Modern Homes', 'Villas', 'Duplexes', 'Interiors', '3D Concepts'];

export const stats = [
  { value: 250, suffix: '+', label: 'Homes Designed' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: 'K+', label: 'Sq. Ft. Planned' },
  { value: 95, suffix: '%', label: 'Client Referrals' },
];

export const testimonials = [
  {
    name: 'Aman Singh',
    quote:
      'Creative Home Plan & Design turned our ideas into a home that feels exactly like us. The elevation and planning were outstanding.',
  },
  {
    name: 'Priya Sharma',
    quote:
      'The team handled our renovation with extraordinary detail. Communication was clear, and the final result feels premium and practical.',
  },
  {
    name: 'Rajesh Patel',
    quote:
      'From 2D planning to the 3D visualization, every step was explained with clarity. The design process felt professional from start to finish.',
  },
];

export const beforeAfterImages = {
  before:
    nextImage(),
  after:
    nextImage(),
};
