export const PERSONAL = {
  name: 'Roshni Jaiswal',
  role: 'Software Developer Engineer · MERN Stack · BI Analytics',
  tagline: 'MCA Graduate · Open to Full-Time IT Roles',

  // Professional Summary (paragraph 1 — displayed in About)
  bio: "Detail-oriented Full Stack Developer with hands-on experience at Netlink, building scalable web applications and interactive business intelligence dashboards. Skilled in MERN stack, authentication systems, real-time data handling, and KPI-driven analytics using Lumenore.",

  // Bio paragraph 2 — extended story
  bioExtended: "Proven ability to deliver secure, user-focused solutions while leveraging AI tools and modern technologies for performance optimization and impactful results. Recognized by IBM for an IoT-based accident prevention system, showcased at BhopalVigyanMela and CodeEnergia 2K23.",

  // Career Goal
  careerGoal: "To secure a full-time Software Developer / Full-Stack Engineer role at an IT company where I can contribute to real products, grow within a skilled engineering team, and take ownership of meaningful features from day one.",

  // Personal Mission
  mission: '"Write code that solves real problems. Build careers, not just projects."',

  // Job search signals (used in Hero & Contact sections)
  availableForWork: true,
  lookingFor: 'Full-Time Software Developer · Full-Stack Engineer · Web Developer',
  noticePeriod: 'Available to join immediately',

  location: 'Bhopal, MP, India',
  email: 'roshnijaiswal82240@gmail.com',
  phone: '+91 8224070489',
  github: 'https://github.com/roshnijaiswal',
  linkedin: 'https://linkedin.com/in/roshnijaiswal',
  portfolio: 'https://roshnijaiswal.vercel.app',
  resumeUrl: '/resume.pdf',
};

export const SKILLS = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#8b5cf6',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#22d3ee',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#a78bfa',
    skills: ['MongoDB'],
  },
  {
    category: 'BI & Analytics',
    icon: '📊',
    color: '#34d399',
    skills: ['Lumenore', 'KPI Dashboards', 'Data Modeling', 'Data Visualization'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Vite', 'Postman', 'Vercel', 'Render', 'WordPress'],
  },
  {
    category: 'AI Tools',
    icon: '🤖',
    color: '#f97316',
    skills: ['VS Code', 'Antigravity', 'Cursor', 'Notion AI', 'Gamma AI'],
  },
  {
    category: 'Soft Skills',
    icon: '🧠',
    color: '#ec4899',
    skills: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication', 'Self-Learning', 'Attention to Detail'],
  },
];

export const EXPERIENCES = [
  {
    title: 'Software Developer Engineer',
    company: 'Netlink Software Group America Ltd.',
    duration: 'Dec 2025 – Present',
    type: 'work',
    projects: [
      {
        name: 'Netlink Event Planner System',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        description:
          'Web-based task management application with secure authentication, structured task tracking, deadlines, priority levels, and dark/light mode support.',
      },
      {
        name: 'Travel Watch',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        description:
          'Location-based entertainment discovery platform featuring real-time content filtering, search functionality, and an admin dashboard for managing hotels and channels.',
      },
      {
        name: 'Saira Foundation NGO Website',
        stack: ['WordPress'],
        description:
          'NGO website focusing on structured design, user experience, and responsive web implementation — optimized for performance and SEO.',
      },
      {
        name: 'BI Dashboard Suite (Lumenore)',
        stack: ['Lumenore', 'Data Modeling', 'KPI Tracking'],
        description:
          'Three interactive Employee, Customer, and COVID dashboards for KPI tracking, data modeling, and business insights — enabling data-driven HR, marketing, and crisis decisions.',
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'TheBookGallery',
    type: 'MERN Stack',
    category: 'Web App',
    description: 'Full-stack book management platform with user authentication, CRUD functionality, and scalable backend APIs — built on the MERN stack.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    color: '#8b5cf6',
    demo: '#',
    github: '#',
    featured: true,
    caseStudy: {
      overview: 'A full-stack book management platform with user authentication and complete CRUD functionality — built on the MERN stack with scalable backend APIs.',
      problem: 'Book enthusiasts needed a dedicated platform to manage their reading lists with proper authentication and data persistence.',
      role: 'Full-Stack Developer — designed the database schema, built RESTful APIs, built the React frontend, and deployed the entire application.',
      approach: [
        'Designed MongoDB collections: Users, Books',
        'Built JWT auth — login, register, protected routes',
        'Implemented full CRUD functionality for book management',
        'Built scalable backend APIs with Express.js',
      ],
      challenges: [
        { problem: 'Secure user data management', solution: 'JWT authentication with protected API routes' },
        { problem: 'Scalable data modeling', solution: 'MongoDB schema design optimized for reads' },
        { problem: 'Clean UI for book discovery', solution: 'React frontend with responsive, intuitive design' },
      ],
      impact: ['Full-stack MERN app with auth and CRUD', 'Demonstrates end-to-end development skills', 'Deployed with scalable API architecture'],
    },
  },
  {
    id: 2,
    title: 'Modern Online Shopping Web',
    type: 'Frontend',
    category: 'Web App',
    description: 'A fully responsive e-commerce frontend with dynamic filtering, live search, and interactive cart — zero framework dependency.',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    color: '#22d3ee',
    demo: '#',
    github: '#',
    featured: true,
    caseStudy: {
      overview: 'A performant, dependency-free shopping site that proves deep frontend fundamentals: live search, dynamic filtering, cart with persistence — all in vanilla JS.',
      problem: 'Static demo sites lack real interactivity. A need existed for a shopping experience that proves frontend fundamentals without relying on React or any framework.',
      role: 'Frontend Developer — designed the UI, wrote all JavaScript for cart, search, and filtering, and optimized for performance and accessibility.',
      approach: [
        'Built product catalog with JSON-driven dynamic rendering',
        'Implemented live search with debouncing for performance',
        'Built shopping cart with localStorage persistence',
        'Added dynamic filtering by category and price range',
      ],
      challenges: [
        { problem: 'Cart state persistence without a framework', solution: 'localStorage + pub-sub event pattern' },
        { problem: 'Smooth page transitions without React Router', solution: 'CSS transitions + hash-based routing' },
        { problem: 'Accessible product grid for all users', solution: 'Semantic HTML5 + ARIA labels throughout' },
      ],
      impact: ['Zero dependencies — pure HTML/CSS/JS', 'Proves deep JS fundamentals, not just framework dependency', 'Smooth, accessible UI on all screen sizes'],
    },
  },
  {
    id: 3,
    title: 'Accident Prevention System',
    type: 'IoT',
    category: 'IoT',
    description: 'Hardware-software IoT system for real-time accident detection and alerting — recognized at IBM and showcased at BhopalVigyanMela.',
    stack: ['IoT Sensors', 'Arduino', 'Embedded C', 'IBM IoT Platform'],
    color: '#f59e0b',
    demo: '#',
    github: '#',
    featured: true,
    caseStudy: {
      overview: 'A hardware-software IoT project that detects dangerous conditions with sensors, triggers real-time alerts, and connects to IBM\'s IoT platform for remote monitoring.',
      problem: 'Workplace accidents happen due to delayed detection of hazardous conditions. A real-time sensor-alert system could significantly reduce response time and prevent injuries.',
      role: 'Project Lead — sensor selection, embedded firmware programming, alert system design, IBM platform integration, and live demo presentation.',
      approach: [
        'Selected sensors matched to the target accident scenario',
        'Programmed microcontroller to read sensor data continuously',
        'Built alert trigger logic with configurable thresholds',
        'Connected to IBM IoT Platform for remote monitoring dashboard',
      ],
      challenges: [
        { problem: 'False positives in sensor readings', solution: 'Implemented moving average filter in firmware' },
        { problem: 'Power consumption on embedded device', solution: 'Optimized polling intervals with sleep mode cycles' },
        { problem: 'Live demonstration at science expo', solution: 'Built a clear physical display with real-time data output' },
      ],
      impact: ['🏆 Recognized by IBM', 'Showcased at BhopalVigyanMela science expo', 'Demonstrates hardware + software cross-domain engineering'],
    },
  },
  {
    id: 4,
    title: 'Netlink Event Planner System',
    type: 'Full-Stack',
    category: 'Web App',
    description: 'Full-stack event planning platform built at Netlink — with secure auth, booking/management features, dark/light mode, priority tracking, and deadline management.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#ec4899',
    demo: '#',
    github: '#',
    featured: false,
    caseStudy: {
      overview: 'Full-stack event planning platform with booking and management features — built at Netlink with authentication, REST APIs, priority tracking, and dark/light mode.',
      problem: 'Teams lacked a structured way to manage events with deadlines, priorities, and task dependencies in one clean, dark-mode-friendly interface.',
      role: 'Full-Stack Developer at Netlink — built the auth system, task data model, all API endpoints, dark/light mode theming, and complete React UI.',
      approach: [
        'Implemented authentication and REST APIs in Node.js + Express',
        'Dynamic data handling with MongoDB for bookings and tasks',
        'Built priority system (High/Medium/Low) with visual indicators',
        'Implemented persistent dark/light mode via CSS variables + localStorage',
      ],
      challenges: [
        { problem: 'Secure authentication system', solution: 'JWT-based auth with protected routes and session management' },
        { problem: 'Dynamic event and booking data', solution: 'REST API with structured MongoDB collections' },
        { problem: 'Theme persistence across sessions', solution: 'Stored user preference in localStorage on every toggle' },
      ],
      impact: ['Production MERN app built at Netlink', 'Full booking and event management workflow', 'Secure auth + dynamic data handling'],
    },
  },
  {
    id: 5,
    title: 'Travel Watch',
    type: 'Full-Stack',
    category: 'Web App',
    description: 'Location-based entertainment discovery for hotel travelers — live TV, local channels, streaming availability, and an admin dashboard.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render'],
    color: '#34d399',
    demo: '#',
    github: '#',
    featured: false,
    caseStudy: {
      overview: 'A geo-aware platform that tells hotel guests exactly what they can watch — combining live hotel TV, local channels, and streaming availability in a single, clean interface.',
      problem: 'Hotel guests waste time figuring out what to watch — channel guides are printed, outdated, or missing entirely. No solution combined live TV + streaming + local channels in one place.',
      role: 'Full-Stack Developer — built location detection, content aggregation API, admin dashboard for hotels, and full React frontend.',
      approach: [
        'Designed hotel-channel-content data model in MongoDB',
        'Built hotel registration and location detection system',
        'Created real-time filtering by channel type (local, streaming, hotel TV)',
        'Built Admin Dashboard for hotel managers to update their channels and schedules',
      ],
      challenges: [
        { problem: 'Mapping hotels to unique content sets dynamically', solution: 'Dynamic hotel-channel relationship documents in MongoDB' },
        { problem: 'Timezone-accurate schedule display', solution: 'Time-aware API responses with timezone normalization' },
        { problem: 'Admin vs guest access control', solution: 'Role-based JWT auth middleware (admin/user)' },
      ],
      impact: ['Full production app deployed on Vercel + Render', 'Simplifies in-room entertainment discovery for hotel guests', 'Admin dashboard gives hotels real-time content control'],
    },
  },
  {
    id: 6,
    title: 'BI Dashboard Suite',
    type: 'BI Analytics',
    category: 'BI',
    description: 'Three executive-level Lumenore dashboards — Employee, Customer, and COVID — for real-time KPI tracking and data-driven decisions.',
    stack: ['Lumenore', 'Data Modeling', 'KPI Frameworks', 'Data Visualization'],
    color: '#a78bfa',
    demo: '#',
    github: '#',
    featured: false,
    caseStudy: {
      overview: 'Three interactive BI dashboards built in Lumenore for executive-level KPI monitoring: workforce analytics, customer revenue insights, and COVID regional tracking.',
      problem: 'Leadership teams had raw data in spreadsheets but no visual way to track KPIs, spot trends, or make time-sensitive decisions without manual analysis.',
      role: 'BI Developer — data modeling, KPI definition, dashboard architecture, and visualization design for all three dashboards.',
      approach: [
        'Employee Dashboard: modeled attendance trends, department distribution, attrition heatmaps',
        'Customer Dashboard: revenue trends, new vs returning segmentation, geographic distribution charts',
        'COVID Dashboard: real-time case/recovery/death tracking with regional drill-down filters',
      ],
      challenges: [
        { problem: 'Presenting complex data without overwhelming executives', solution: 'Progressive disclosure — summary tiles → detail drill-down' },
        { problem: 'Making COVID data update in real-time', solution: 'Configured auto-refresh pipeline in Lumenore' },
        { problem: 'Designing for non-technical decision makers', solution: 'Plain-language labels, color coding, and contextual tooltips' },
      ],
      impact: ['3 fully deployed dashboards with live KPI tracking', 'Enabled data-driven HR, marketing, and crisis decisions', 'Demonstrates rare BI + analytics depth alongside web dev skills'],
    },
  },
];

export const SERVICES = [
  {
    id: 1,
    icon: '🚀',
    title: 'Full-Stack Web Development',
    tagline: 'From idea to live URL — end-to-end.',
    description:
      'You have an idea. I turn it into a production-ready web application — designed, built, deployed, and scalable. No hand-holding needed.',
    benefits: [
      'MERN stack (MongoDB, Express, React, Node.js)',
      'Secure authentication & user management',
      'REST API architecture built for scale',
      'Deployment to Vercel, Render, or your cloud',
      'Dark mode, responsive design as standard',
    ],
    deliverable: 'A live, deployed web application — not just a prototype.',
    color: '#8b5cf6',
  },
  {
    id: 2,
    icon: '🌐',
    title: '3D & Interactive Web',
    tagline: 'Websites that stop the scroll.',
    description:
      'Most websites look the same. Yours won\'t. I build immersive, interactive web experiences using 3D animations, particle systems, and micro-interactions that make visitors remember you.',
    benefits: [
      'Three.js / WebGL powered 3D elements',
      'Particle backgrounds & scroll-driven animations',
      'Mouse-reactive parallax & micro-interactions',
      'Glassmorphism, gradients & premium aesthetics',
      '60fps performance — beautiful and fast',
    ],
    deliverable: 'An experience that turns visitors into leads.',
    color: '#22d3ee',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Implementation',
    tagline: 'Pixel-perfect. Performance-first.',
    description:
      'You bring the design. I bring it to life — faithfully, responsively, and with the kind of polish that makes users come back. Or skip the designer: I can handle the design system too.',
    benefits: [
      'Figma/design-to-code with pixel accuracy',
      'React + Tailwind CSS — fast and maintainable',
      'Animation layer: Framer Motion & CSS transitions',
      'Mobile-first, fully responsive on all screens',
      'Accessibility — WCAG compliant, keyboard-friendly',
    ],
    deliverable: 'A frontend that feels as good as it looks.',
    color: '#f59e0b',
  },
  {
    id: 4,
    icon: '⚙️',
    title: 'Backend & Automation',
    tagline: 'Scalable APIs. Smart workflows.',
    description:
      'Your backend is the engine under the hood. I build clean, documented REST APIs, database architectures, and automation workflows that save your team time — and scale without breaking.',
    benefits: [
      'Node.js + Express API design & development',
      'MongoDB schema design & query optimization',
      'JWT authentication & role-based access control',
      'Third-party API integration (payments, maps, etc.)',
      'BI dashboards & data pipeline automation',
    ],
    deliverable: 'A backend that works quietly and scales confidently.',
    color: '#34d399',
  },
];

export const CERTIFICATIONS = [
  { title: 'Backend Developer', issuer: 'Sheryians Coding School', color: '#8b5cf6' },
  { title: 'Completion Training of C and C++', issuer: 'Professional Certification', color: '#22d3ee' },
  { title: 'JavaScript Value Addition Course (1 Week)', issuer: 'Saksham Technology', color: '#a78bfa' },
  { title: 'IoT Online Course', issuer: 'Simplilearn SkillUP', color: '#34d399' },
];

export const ACHIEVEMENTS = [
  {
    title: 'Accident Prevention System',
    event: 'IBM Recognition',
    icon: '🏆',
    color: '#f59e0b',
  },
  {
    title: 'IoT Project Showcase',
    event: 'BhopalVigyanMela',
    icon: '🔬',
    color: '#22d3ee',
  },
  {
    title: 'Competent Hackathon',
    event: 'CodeEnergia 2K23',
    icon: '⚡',
    color: '#8b5cf6',
  },
  {
    title: 'MCA — 9 SGPA',
    event: 'SIRT, Bhopal',
    icon: '🎓',
    color: '#34d399',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'Sagar Institute of Research and Technology',
    year: 'May 2025',
    grade: '9 SGPA',
    color: '#8b5cf6',
  },
  {
    degree: 'BSc (CS) — Bachelor of Science in Computer Science',
    institution: 'Barkatullah University, Bhopal',
    year: 'June 2023',
    grade: '',
    color: '#22d3ee',
  },
];
