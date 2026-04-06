export const siteConfig = {
  name: 'Hi ! Assalamualaikum',
  shortName: 'Hanis',
  role: 'Technical Lead / Backend Developer',
  location: 'Kedah, Malaysia',
  email: 'mhanis88@gmail.com',
  phone: '+60 134681296',
  // TODO: Replace with your actual URLs
  linkedin: 'https://www.linkedin.com/in/mohd-hanis-mohd-tajudin-864034a5/',
  github: 'https://github.com/mhanis88',
};

export const heroContent = {
  headline: 'Building Scalable Systems.\nPowering Intelligent Solutions.',
  subheadline:
    'Technical Lead specializing in backend architecture, AI integration, and automation.',
  cta1: 'View My Work',
  cta2: 'Contact Me',
};

export const aboutContent = {
  bio: `With over 11 years of experience in software development, I specialize in building robust backend systems, integrating AI solutions, and leading technical teams across complex projects. My journey spans industries including oil & gas, manufacturing, retail, and marketing — giving me a well-rounded perspective on solving diverse engineering challenges.`,
  quotes: [
    {
      text: 'First, solve the problem. Then, write the code.',
      author: 'John Johnson',
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      author: 'Martin Fowler',
    },
    {
      text: 'The best way to predict the future is to implement it.',
      author: 'David Heinemeier Hansson',
    },
    {
      text: 'Simplicity is the soul of efficiency.',
      author: 'Austin Freeman',
    },
  ],
  stats: [
    { value: '11+', label: 'Years Experience' },
    { value: '4+', label: 'Industries Served' },
    { value: 'AI', label: 'Automation Focus' },
    { value: 'Lead', label: 'Team Leadership' },
  ],
};

export interface Skill {
  name: string;
  level: number; // 0-100 proficiency percentage
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
  color: string; // gradient from color
  colorTo: string; // gradient to color
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    color: '#2563eb',
    colorTo: '#1d4ed8',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'PHP', level: 93 },
      { name: 'Python', level: 78 },
      { name: '.NET Framework', level: 65 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    title: 'Frontend',
    color: '#0d9488',
    colorTo: '#0f766e',
    skills: [
      { name: 'React', level: 72 },
      { name: 'Angular', level: 60 },
      { name: 'jQuery', level: 85 },
    ],
  },
  {
    title: 'AI & Automation',
    color: '#7c3aed',
    colorTo: '#6d28d9',
    skills: [
      { name: 'n8n', level: 82 },
      { name: 'LangFlow', level: 75 },
      { name: 'ML Integration', level: 70 },
      { name: 'AI Chatbots', level: 80 },
    ],
  },
  {
    title: 'Cloud & Tools',
    color: '#ea580c',
    colorTo: '#c2410c',
    skills: [
      { name: 'Google Cloud Platform', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'OutSystems', level: 85 },
      { name: 'Azure Devops', level: 50 },
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'AEM Energy Solution Sdn Bhd',
    role: 'Backend Developer',
    period: 'Current',
    description:
      'Developing and maintaining scalable backend services and APIs for energy sector business applications, focusing on system reliability and data integration.',
    highlights: [
      'Building and optimizing Laravel-based RESTful APIs',
      'Integrating third-party services and data pipelines',
      'Database design, optimization, and migration with SQL',
      'Implementing automated testing and CI/CD workflows',
    ],
  },
  {
    company: 'Aafiyat Tech',
    role: 'Technical Lead',
    period: 'Previous',
    description:
      'Leading the development of AI-powered systems and automation workflows for business solutions.',
    highlights: [
      'Architecting Laravel + Python-based backend systems',
      'Implementing AI chatbot solutions with LangFlow',
      'Building automation workflows using n8n',
      'Leading and mentoring the development team',
    ],
  },
  {
    company: 'FPT Software',
    role: 'Technical Lead',
    period: 'Previous',
    description:
      'Led enterprise application development for oil & gas industry digital transformation.',
    highlights: [
      'Enterprise apps with OutSystems low-code platform',
      'Oil & gas industry digital solutions',
      'Cross-functional team leadership',
      'Large-scale system integration',
    ],
  },
  {
    company: 'Software Developer',
    role: 'Full-Stack Developer',
    period: 'Previous',
    description:
      'Developed ERP and eCommerce systems with modern web technologies.',
    highlights: [
      'ERP system development and customization',
      'eCommerce platform with payment integration',
      'Full-stack development with PHP & JavaScript',
      'Third-party API integrations',
    ],
  },
  {
    company: 'MODENAS',
    role: 'Analyst Programmer',
    period: 'Previous',
    description:
      'Modernized legacy systems for a leading Malaysian motorcycle manufacturer.',
    highlights: [
      'Legacy system modernization with .NET Framework',
      'Database optimization and migration',
      'Manufacturing process automation',
      'Internal tools development',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  colSpan?: string;
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Customer Service Platform',
    description:
      'Intelligent chatbot system with natural language processing for automated customer support and inquiry handling.',
    tech: ['Python', 'LangFlow', 'n8n', 'REST API'],
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Enterprise ERP System',
    description:
      'Multi-tenant SaaS platform for end-to-end business management including inventory, HR, and finance modules.',
    tech: ['Laravel', 'PostgreSQL', 'React', 'Redis'],
  },
  {
    title: 'Automated Business Workflows',
    description:
      'End-to-end automation platform connecting disparate business systems for seamless data flow and process automation.',
    tech: ['n8n', 'Python', 'API Integration', 'GCP'],
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with real-time inventory management, payment gateway integration, and analytics.',
    tech: ['Laravel', 'MySQL', 'jQuery', 'Payment Gateway'],
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Oil & Gas Digital Platform',
    description:
      'Enterprise-grade digital transformation solution for operational efficiency in the oil & gas sector.',
    tech: ['OutSystems', 'SQL Server', '.NET', 'Azure'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];
