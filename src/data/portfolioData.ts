export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  highlights: string[];
  category: 'AI & Computer Vision' | 'Automation & Web Scraping' | 'Sustainability & Analytics';
  demoType: 'yolo_detection' | 'price_scraper' | 'ecosmart_dashboard';
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  levelLabel: 'Advanced' | 'Proficient' | 'Foundation' | 'Core';
  category: 'Programming' | 'Web' | 'Databases' | 'Core Concepts' | 'Tools';
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  detail: string;
  dateOrMetric: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Nithyashree H S',
    role: 'Information Science & Engineering Undergraduate',
    subRole: 'Aspiring Software Professional',
    location: 'Chikkaballapur, India',
    email: 'nithyashreehs958@gmail.com',
    phone: '+91 8867287249',
    formattedPhone: '+91 88672 87249',
    cgpa: '9.24',
    college: 'Presidency University, Bengaluru',
    duration: '2023–2027',
    tagline: 'Building practical solutions with code, AI, and continuous learning.',
    profileSummary:
      'I am an Information Science and Engineering undergraduate with hands-on experience in Java, Python, web technologies, AI/ML, databases and data-driven applications. I enjoy building practical, real-world projects and continuously developing my technical skills.',
    futureGoalText:
      'I aim to build a strong career in software development and emerging technologies, apply my programming and AI/ML knowledge to real-world problems, gain hands-on industry experience and continuously grow as a technology professional.',
  },

  skills: [
    // Programming
    {
      name: 'Java',
      level: 90,
      levelLabel: 'Proficient',
      category: 'Programming',
      description: 'Object-oriented programming, core Java collections, algorithm implementation, robust application logic.',
    },
    {
      name: 'Python (Basic)',
      level: 78,
      levelLabel: 'Foundation',
      category: 'Programming',
      description: 'Scripting, computer vision workflows with OpenCV, Selenium automation, AI/ML fundamentals.',
    },
    {
      name: 'JavaScript (Basic)',
      level: 75,
      levelLabel: 'Foundation',
      category: 'Programming',
      description: 'Interactive client-side scripting, DOM manipulation, responsive interface logic.',
    },
    // Web
    {
      name: 'HTML5',
      level: 92,
      levelLabel: 'Advanced',
      category: 'Web',
      description: 'Semantic markup, accessibility structures, modern web standards.',
    },
    {
      name: 'CSS3',
      level: 88,
      levelLabel: 'Proficient',
      category: 'Web',
      description: 'Responsive styling, Flexbox, CSS Grid, clean visual hierarchy, transitions.',
    },
    // Databases
    {
      name: 'MySQL',
      level: 85,
      levelLabel: 'Proficient',
      category: 'Databases',
      description: 'Relational database schema design, complex SQL queries, table joins, integrity constraints.',
    },
    {
      name: 'MongoDB',
      level: 80,
      levelLabel: 'Proficient',
      category: 'Databases',
      description: 'NoSQL document-based data modeling, BSON collections, indexing, CRUD operations.',
    },
    // Core Concepts
    {
      name: 'Object-Oriented Programming (OOP)',
      level: 92,
      levelLabel: 'Advanced',
      category: 'Core Concepts',
      description: 'Encapsulation, inheritance, polymorphism, abstraction, and clean class architectures.',
    },
    {
      name: 'Data Structures & Algorithms (DSA)',
      level: 85,
      levelLabel: 'Proficient',
      category: 'Core Concepts',
      description: 'Arrays, linked lists, trees, graphs, sorting, searching, and computational complexity analysis.',
    },
    {
      name: 'Artificial Intelligence & Machine Learning',
      level: 82,
      levelLabel: 'Proficient',
      category: 'Core Concepts',
      description: 'Computer vision models (YOLO), supervised learning, data preprocessing, neural patterns.',
    },
    {
      name: 'Database Management Systems (DBMS)',
      level: 88,
      levelLabel: 'Proficient',
      category: 'Core Concepts',
      description: 'ACID properties, normalization, transaction management, indexing, relational algebra.',
    },
    // Tools
    {
      name: 'GitHub',
      level: 88,
      levelLabel: 'Proficient',
      category: 'Tools',
      description: 'Version control, Git branching, pull requests, repository management, collaborative workflows.',
    },
    {
      name: 'VS Code',
      level: 94,
      levelLabel: 'Advanced',
      category: 'Tools',
      description: 'Primary code editor, debugging workflows, extensions ecosystem, multi-language configuration.',
    },
    {
      name: 'Selenium',
      level: 82,
      levelLabel: 'Proficient',
      category: 'Tools',
      description: 'Automated browser navigation, web scraping pipelines, element locators, dynamic content parsing.',
    },
  ] as SkillItem[],

  projects: [
    {
      id: 'marine-debris-detection',
      title: 'Marine Debris Detection & Pollution Monitoring System',
      technologies: ['YOLOv12n', 'Computer Vision', 'Python', 'OpenCV'],
      category: 'AI & Computer Vision',
      demoType: 'yolo_detection',
      description:
        'Developed an AI-based marine debris detection system using YOLOv12n and a custom-labeled dataset to identify plastic, metal and organic waste in coastal/ocean imagery.',
      highlights: [
        'Real-time classification of debris type (plastic, metal, organic) and density from image and video inputs',
        'Built with YOLOv12n lightweight architecture optimized for fast inference in marine environments',
        'Includes automated pollution-level estimation algorithm using detection cluster density results',
        'Custom-labeled dataset for diverse coastal waters, lighting variations, and turbidity levels',
      ],
    },
    {
      id: 'amazon-price-intelligence',
      title: 'Amazon Price Intelligence System',
      technologies: ['Python', 'Selenium', 'Web Scraping'],
      category: 'Automation & Web Scraping',
      demoType: 'price_scraper',
      description:
        'Built an automated web scraping pipeline using Selenium and Python to monitor prices, ratings and availability across Amazon product listings.',
      highlights: [
        'Automated headless browser pipeline tracking live prices, discount trends, customer ratings, and inventory status',
        'Implemented competitor analysis and real-time automated price alert triggers for tracked products',
        'Handled dynamic DOM structures, anti-bot mechanisms, and pagination with robust exception handling',
        'Structured tabular data export and history tracking for market price trend evaluations',
      ],
    },
    {
      id: 'ecosmart-dashboard',
      title: 'EcoSmart – Intelligent Carbon Footprint Dashboard',
      technologies: ['Data Visualization', 'AQI Analytics'],
      category: 'Sustainability & Analytics',
      demoType: 'ecosmart_dashboard',
      description:
        'Built an interactive sustainability dashboard integrating real-time AQI data and carbon-footprint estimation based on user input.',
      highlights: [
        'Integrates live Air Quality Index (AQI) analytics and environmental telemetry data',
        'Interactive carbon footprint calculator computing greenhouse gas equivalents based on user activity',
        'Clear data visualizations with responsive metric breakdowns and eco-impact scorecards',
        'Actionable environmental optimization recommendations based on computed footprint profiles',
      ],
    },
  ] as Project[],

  experience: [
    {
      role: 'Web Development Intern',
      organization: 'Vaults of Code',
      type: 'Internship',
      period: 'Internship Period',
      description:
        'Worked on responsive web pages using HTML, CSS and JavaScript, debugged UI issues and implemented front-end features.',
      bullets: [
        'Engineered responsive web page components with HTML5, CSS3, and JavaScript ensuring seamless cross-device compatibility.',
        'Diagnosed and resolved front-end UI bugs, layout inconsistencies, and styling issues across multiple viewport breakpoints.',
        'Implemented interactive user interface features, improving user navigation and client-side engagement.',
      ],
    },
  ],

  currentLearning: {
    program: 'Samsung Innovation Campus — AI Program',
    status: 'In Progress',
    badge: 'Specialized AI/ML Training',
    description:
      'Currently undergoing training in Artificial Intelligence and Machine Learning with hands-on exposure to ML concepts and real-world applications.',
    keyPillars: [
      'Supervised & Unsupervised Machine Learning Algorithms',
      'Data Preprocessing & Feature Engineering',
      'Neural Networks & Deep Learning Foundations',
      'Hands-on problem solving on real-world industrial datasets',
    ],
  },

  education: [
    {
      institution: 'Presidency University, Bengaluru',
      degree: 'B.Tech in Information Science and Engineering',
      period: '2023–2027',
      score: '9.24',
      scoreLabel: 'CGPA',
      highlights: [
        'Specialization in Information Science & Engineering curriculum',
        'Consistent high academic rank with 9.24 cumulative grade point average',
        'Core coursework: Data Structures, OOP (Java), DBMS, Algorithms, Operating Systems, Computer Networks',
      ],
      icon: 'GraduationCap',
    },
    {
      institution: 'BGS Public School & PU College',
      degree: 'Class XII — PCMB (Physics, Chemistry, Mathematics, Biology)',
      period: 'Pre-University Education',
      score: '92.83%',
      scoreLabel: 'Final Percentage',
      highlights: [
        'Outstanding score of 92.83% in Karnataka Pre-University Board examinations',
        'Rigorous foundation in advanced Mathematics, Physics, and analytical problem-solving',
      ],
      icon: 'Award',
    },
    {
      institution: 'BGS Public School',
      degree: 'Class X Secondary School Certificate',
      period: 'Secondary Education',
      score: '100%',
      scoreLabel: 'Perfect Score',
      highlights: [
        'Achieved a flawless 100% academic record in Class X',
        'Exemplary distinction in Mathematics, Science, and English',
      ],
      icon: 'Star',
    },
  ] as EducationItem[],

  achievements: [
    {
      id: 'cgpa',
      title: 'Academic Distinction — 9.24 CGPA',
      category: 'Academic Honor',
      detail:
        'Maintained a stellar CGPA of 9.24 throughout B.Tech in Information Science and Engineering at Presidency University, Bengaluru.',
      dateOrMetric: '9.24 CGPA',
      tag: 'B.Tech ISE',
    },
    {
      id: 'hack2future',
      title: 'National-Level Hackathon — Hack2Future',
      category: 'Competitive Engineering',
      detail:
        'Participated in the National-level IIIT Dharwad Hackathon (Hack2Future) and built a market and Amazon price monitoring solution.',
      dateOrMetric: 'IIIT Dharwad',
      tag: 'National Hackathon',
    },
    {
      id: 'wipro-workshop',
      title: 'Wipro Sustainable EV Workshop',
      category: 'Industry Workshop',
      detail:
        'Attended an intensive two-day Wipro workshop on Sustainable EV Battery Materials and Their Manufacturability, gaining insights into green tech engineering.',
      dateOrMetric: '2-Day Intensive',
      tag: 'Wipro Technologies',
    },
  ] as AchievementItem[],

  futureGoals: {
    vision:
      'I aim to build a strong career in software development and emerging technologies, apply my programming and AI/ML knowledge to real-world problems, gain hands-on industry experience and continuously grow as a technology professional.',
    pillars: [
      {
        title: 'Core Software Engineering',
        desc: 'Writing clean, testable, and maintainable code in Java and modern frameworks with rigorous algorithms and data structures.',
      },
      {
        title: 'Applied AI & Intelligent Systems',
        desc: 'Translating cutting-edge computer vision and ML models into reliable real-world systems that solve tangible societal challenges.',
      },
      {
        title: 'Hands-on Industry Impact',
        desc: 'Gaining industry-grade exposure, working within agile tech teams, and contributing to scalable cloud and web solutions.',
      },
      {
        title: 'Continuous Lifelong Learning',
        desc: 'Staying ahead of rapid paradigm shifts through constant upskilling, hackathons, open source contributions, and mentorship.',
      },
    ],
  },
};
