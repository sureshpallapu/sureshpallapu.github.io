import profileImage from "../assets/images/profile2.jpg";
import portfolioImage from "../assets/images/Portfolio.png";
import vidyaJyothiImage from "../assets/images/VidyaJyothiFoundation.png";

/* ============================================================
   SURESH PALLAPU - PERSONAL PORTFOLIO
   CENTRALIZED DATA CONFIGURATION
   Edit your personal information in this file.
============================================================ */

export const portfolioData = {

  // 1. PERSONAL INFORMATION
  personal: {
    name: "Suresh Pallapu",
    firstName: "Suresh",
    lastName: "Pallapu",

    designation: "ServiceNow Developer",
    secondaryDesignation: "Full Stack Developer",

    location: "Bengaluru, India",

    email: "pallapusuresh2000@gmail.com",
    phone: "+91 XXXXXXXX56",

   profileImage: profileImage,

    resume: "../assets/documents/resume.pdf",

    availability: "Open to opportunities",

    introduction:
      "I build enterprise solutions with ServiceNow and modern web applications using React, Node.js and MySQL. I enjoy solving real-world problems through technology.",

    // Animated professional designations
    roles: [
      "ServiceNow Developer",
      "Full Stack Developer",
      "Web Developer",
      "Database Designer",
    ],

    // Programming languages and ServiceNow technologies
    heroTechnologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MySQL",
      "PostgreSQL",
      "ServiceNow",
      "GlideRecord",
      "Flow Designer",
      "REST APIs",
    ],

    // Technologies displayed inside profile dashboard
    dashboardTechnologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "MySQL",
      "PostgreSQL",
    ],
  
  
// ACADEMIC RESEARCH PROFILE
research: {
  status: "PhD Research Scholar",

  degree: "Doctor of Philosophy (PhD)",

  specialization: "Computer Science",

  university: "Sri Venkateswara University",

  location: "Tirupati, Andhra Pradesh",

  admission: "2026",

  researchArea: "Software Engineering",

  researchInterests: [
    "Scalable Web Applications",
    "Java-Based Systems",
    "Healthcare Technology",
    "Performance Optimization",
  ],
},

  },

  // 2. SOCIAL PROFILES

social: {
  github: "https://github.com/sureshpallapu",
  linkedin: "https://www.linkedin.com/in/suresh-pallapu/",
  youtube: "https://www.youtube.com/SureshPallapuSP",
  website: "https://sureshpallapu.github.io/",
  servicenow: "https://sureshpallapu.github.io/ServiceNow-hub/",
},


  // 3. ABOUT & PROFILE STATISTICS
  about: {
    title: "Turning Ideas Into Digital Solutions",

    description:
      "A passionate software developer focused on enterprise applications, workflow automation and modern web development.",

    // Dashboard statistics
    projects: "5+",
    experience: "2+",
    technologies: "10+",

    // Main professional focus
    coreFocus: "ITSM",
    coreFocusDetail: "CMDB & ITOM",

    // ServiceNow expertise
    coreExpertise: [
      "ITSM",
      "CMDB",
      "ITOM",
      "Flow Designer",
    ],

    // Dashboard footer
    tagline: "BUILDING • LEARNING • INNOVATING",
  
  
  
profile: {
  heading: "About Me",

  subtitle:
    "Passionate developer crafting clean, efficient, and creative solutions.",

  welcome: "Welcome to my portfolio!",

  position: "Associate Software Developer",

  company: "Right Prompt Technologies",

  paragraphs: [
    "I'm an Associate Software Developer at Right Prompt Technologies, passionate about building impactful digital solutions that make technology feel effortless.",

    "I specialize in Java, Advanced Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and React. My expertise also extends to ServiceNow and REST API integrations.",

    "I approach each challenge as an opportunity to learn, innovate, and refine my craft. My goal is to deliver elegant, scalable, and maintainable solutions.",

    "I'm committed to continuous learning — blending technical precision with creative thinking to grow as a full-stack developer.",
  ],

  birthday: "14 December",

  city: "Guntur, Andhra Pradesh",

  highlights: [
    "Enterprise Application Development",
    "ServiceNow Development",
    "Full Stack Web Development",
    "REST API Integrations",
  ],

  technologies: [
    "Java",
    "Advanced Java",
    "Spring Boot",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "ServiceNow",
    "REST APIs",
  ],
},

  },

  // 4. TECHNICAL SKILLS
  skills: [
    {
      id: 1,
      category: "ServiceNow",
      description: "Enterprise workflows and IT service management",
      technologies: [
        "ServiceNow",
        "ITSM",
        "Incident Management",
        "Problem Management",
        "Change Management",
        "CMDB",
        "ITOM",
        "Discovery",
        "Service Mapping",
        "Flow Designer",
        "GlideRecord",
        "GlideAjax",
        "REST APIs",
      ],
    },

    {
      id: 2,
      category: "Frontend Development",
      description: "Modern and responsive user interfaces",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Redux",
        "Bootstrap",
        "Responsive Design",
        "Angular",
        "Vue.js",
        
        

      ],
    },

    {
      id: 3,
      category: "Backend Development",
      description: "Server-side application development",
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Database Integration",
        "Server-Side Rendering",
        "MVC Architecture",
        "Error Handling",
        "Middleware",
      ],
    },

    {
      id: 4,
      category: "Database & Tools",
      description: "Data management and development tools",
      technologies: [
        "ServiceNow Studio",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },

     {
    id: 5,
    category: "Programming Languages",
    technologies: [
      
      "Java",
      "Advanced Java (J2EE)",
      "Spring Boot",
      "JavaScript",
      "C",
      "Python",
    ],
  },


  ],

  // 5. PROJECTS

projects: [
  {
    id: 1,
    title: "Medicare Pro Application",
    category: "Healthcare Web Application",
    description:
      "A healthcare application designed to support digital healthcare workflows, patient-related information management and efficient application operations.",

    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    image: "/images/projects/medicare-pro.png",
    github: "https://github.com/sureshpallapu/MedicareProApp.git",
    live: "",
    featured: true,
    status: "Completed",
  },

  {
    id: 2,
    title: "Hyderabad Service Zone",
    category: "Business Website",
    description:
      "A business website designed to present services, provide useful business information and create a user-friendly online presence.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
    ],

    image: "/images/projects/hyderabad-service-zone.png",
    github: "",
    live: "",
    featured: true,
    status: "Completed",
  },

  {
    id: 3,
    title: "Travel Website",
    category: "Travel & Tourism Platform",
    description:
      "A travel website concept focused on presenting destinations, travel information and an engaging browsing experience.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Node.js",
    ],

    image: "/images/projects/travel-website.png",
    github: "https://github.com/sureshpallapu/travel-booking-app.git",
    live: "",
    featured: true,
    status: "Completed",
  },

  {
    id: 4,
    title: "Vidya Jyothi Foundation",
    category: "Full Stack Web Application",
    description:
      "A scholarship and donation management platform supporting student applications, document verification, trustee management and donor information.",

    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    image: vidyaJyothiImage,
    github: "https://github.com/sureshpallapu/vidya-jyothi-foundation.git",
    live: "",
    featured: true,
    status: "In Development",
  },

  {
    id: 5,
    title: "Personal Portfolio",
    category: "Personal Branding Website",
    description:
      "A responsive personal portfolio showcasing my professional experience, ServiceNow expertise, academic journey, technical skills and development projects.",

    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "CSS3",
      "Framer Motion",
    ],

    image: portfolioImage,
    github: "https://github.com/sureshpallapu/sureshpallapu.github.io.git",
    live: "https://sureshpallapu.github.io/",
    featured: true,
    status: "In Development",
  },

  {
    id: 6,
    title: "More Projects Coming Soon",
    category: "Upcoming Project",
    description:
      "Currently exploring new technologies and building more practical applications. Stay connected for upcoming projects.",

    technologies: [
      "Innovation",
      "Learning",
      "Development",
    ],

    image: "",
    github: "",
    live: "",
    featured: false,
    status: "Coming Soon",
    comingSoon: true,
  },
],



// 6. PROFESSIONAL EXPERIENCE

experience: [
  {
    id: 1,
    company: "Right Prompt Technologies Pvt Ltd",
    position: "Associate Software Developer",
    location: "Bangalore, India",
    duration: "July 2025 – Present",
    startDate: "July 2025",
    endDate: "Present",
    employmentType: "Full Time",

    description:
      "Working as an Associate Software Developer with a focus on ServiceNow development, ITSM solutions, platform configuration and workflow automation.",

    responsibilities: [
      "Working as a ServiceNow Developer on enterprise ITSM development, configuration and support.",
      "Configuring and customizing Incident, Problem, Change and Request Management processes.",
      "Developing Business Rules, Client Scripts, Script Includes, UI Policies and UI Actions using JavaScript.",
      "Building automated workflows, approvals and reusable processes using Flow Designer.",
      "Working with REST APIs and integrations to support communication between ServiceNow and external systems.",
      "Supporting CMDB and ITOM activities, including configuration item management and platform data maintenance.",
      "Collaborating with team members to troubleshoot issues, implement enhancements and improve service delivery."
    ],

    technologies: [
      "ServiceNow",
      "ITSM",
      "JavaScript",
      "GlideRecord",
      "Business Rules",
      "Client Scripts",
      "Flow Designer",
      "REST APIs",
      "CMDB",
      "ITOM"
    ],

    current: true
  },

  {
    id: 2,
    company: "Pentagon Space",
    position: "Java Full Stack Developer Trainee",
    location: "Bangalore, India",
    duration: "November 2024 – June 2025",
    startDate: "November 2024",
    endDate: "June 2025",
    employmentType: "Training",

    description:
      "Completed practical Java Full Stack Developer training focused on building web applications and developing end-to-end software solutions.",

    responsibilities: [
      "Completed hands-on training in Core Java, Advanced Java, Spring Boot and React.js.",
      "Developed full-stack web applications using RESTful APIs and MySQL.",
      "Built responsive user interfaces using HTML, CSS and JavaScript.",
      "Practiced writing clean, reusable and maintainable application code.",
      "Worked on database integration, application development and debugging."
    ],

    technologies: [
      "Java",
      "Advanced Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "HTML",
      "CSS",
      "JavaScript"
    ],

    current: false
  }
],



 
// 7. EDUCATION & RESEARCH
education: [
 
{
  id: 1,
  type: "phd",

  degree: "Doctor of Philosophy (PhD)",
  specialization: "Computer Science",

  institution: "Sri Venkateswara University",
  location: "Tirupati, Andhra Pradesh, India",
  affiliation: "AP-RCET",

  duration: "2026 – Present",
  status: "Currently Pursuing",
  current: true,

 description:
  "Pursuing doctoral research in Computer Science, focusing on Natural Language Processing (NLP) techniques for automated bug detection and program repair. Exploring how AI and language models can understand software bug reports, identify defects, recommend solutions, and assist in generating corrected code.",

highlights: [
  "Research focus on NLP for Bug Detection and Automated Program Repair.",
  "Exploring AI and language models for understanding software bug reports.",
  "Investigating automated defect localization and bug analysis.",
  "Exploring intelligent approaches for recommending and generating code fixes.",
  "Studying research methodologies, experimentation, and evaluation techniques.",
],

//   research: {
//   proposedTitle:
//     "NLP for Bug Detection and Automated Program Repair",

//   titleStatus:
//     "Provisional research direction – final research title subject to guide approval",

//   domain: "Natural Language Processing & Software Engineering",

//   areas: [
//     "Natural Language Processing (NLP)",
//     "Artificial Intelligence",
//     "Machine Learning",
//     "Large Language Models (LLMs)",
//     "Bug Report Analysis",
//     "Defect Localization",
//     "Automated Program Repair",
//     "Code Generation"
//   ],

//   researchInterests: [
//     "Understanding Software Bug Reports",
//     "Automated Defect Detection",
//     "AI-Assisted Bug Localization",
//     "Automated Code Fix Recommendations",
//     "LLM-Based Program Repair",
//     "Evaluation of Generated Code Fixes"
//   ],

//   technologies: [
//     "Python",
//     "Natural Language Processing",
//     "Machine Learning",
//     "Large Language Models",
//     "Java",
//     "Git",
//     "Software Engineering"
//   ]
// },
  
achievements: [
    "Qualified through AP-RCET",
    "Doctoral research journey started in 2026",
    "Research focus established in Computer Science",
    "Exploring interdisciplinary research in AI and Healthcare Technology"
  ],

  learningFocus: [
    "Research Methodology",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
  ]
},


  {
    id: 2,
    type: "masters",
    degree: "MCA – Master of Computer Applications",
    specialization: "Computer Applications",
    institution: "Sri Venkateswara University",
    affiliation: "AP-ICET",
    location: "Tirupati, Andhra Pradesh",

    duration: "November 2022 – November 2024",
    grade: "CGPA: 8.01 / 10",

    current: false,

    description:
      "Postgraduate education focused on computer applications, software development and advanced computing concepts.",

    highlights: [
      "Advanced Java and Web Technologies",
      "Software Engineering and Software Testing",
      "Database Design and Optimization",
      "AI and Automation",
    ],
  },

  {
    id: 3,
    type: "bachelors",
    degree: "B.Sc in MPCS",
    specialization: "Mathematics, Physics and Computer Science",
    institution: "JKC College",
    location: "Guntur, Andhra Pradesh",

    duration: "June 2019 – May 2022",
    grade: "CGPA: 8.5 / 10",

    current: false,

    description:
      "Undergraduate education combining mathematical foundations, physical sciences and computer science.",

    highlights: [
      "Mathematics, Physics and Computer Science",
      "Programming in C and Java",
      "Problem Solving and Logic Design",
    ],
  },

  {
    id: 4,
    type: "intermediate",
    degree: "Intermediate – MPC",
    specialization: "Mathematics, Physics and Chemistry",
    institution: "JKC College",
    location: "Guntur, Andhra Pradesh",

    duration: "2017 – 2019",
    grade: "Percentage: 95%",

    current: false,

    description:
      "Completed intermediate education with a strong foundation in mathematics and physical sciences.",

    highlights: [
      "Mathematics, Physics and Chemistry",
      "Logical Reasoning and Aptitude",
    ],
  },

  {
    id: 5,
    type: "school",
    degree: "School Education",
    specialization: "Secondary School Education",
    institution: "SC MP High School",
    location: "Guntur, Andhra Pradesh",

    duration: "2005 – 2017",
    grade: "Percentage: 92%",

    current: false,

    description:
      "Completed secondary school education, building a strong academic foundation.",

    highlights: [
      "Mathematics and Science Stream",
      "NSS Volunteer and Class Representative",
    ],
  },
],


// 8. CERTIFICATIONS & PROFESSIONAL LEARNING
certifications: [
  {
    id: 1,
    name: "Java Full Stack Developer Training",
    category: "Full Stack Development",
    issuer: "Pentagon Space",
    duration: "Nov 2024 – Jun 2025",
    status: "Completed",
    description:
      "Practical training in Core Java, Advanced Java, Spring Boot, React.js, REST APIs and MySQL.",
    technologies: [
      "Core Java",
      "Advanced Java",
      "Spring Boot",
      "React.js",
      "MySQL",
    ],
    credentialUrl: "",
  },

  {
    id: 2,
    name: "ServiceNow Platform Training",
    category: "Enterprise Platform",
    issuer: "Right Prompt Technologies",
    duration: "2025",
    status: "Completed",
    description:
      "Training in ServiceNow platform administration, application development, ITSM modules and workflow automation.",
    technologies: [
      "ServiceNow",
      "ITSM",
      "Flow Designer",
      "JavaScript",
      "GlideRecord",
    ],
    credentialUrl: "",
  },

  {
    id: 3,
    name: "Certified System Administrator (CSA)",
    category: "ServiceNow Certification",
    issuer: "ServiceNow",
    duration: "2026",
    status: "Certified",
    description:
      "ServiceNow Certified System Administrator credential demonstrating knowledge of platform administration and configuration.",
    technologies: [
      "Platform Administration",
      "Tables",
      "Forms",
      "Lists",
      "User Administration",
    ],
    credentialUrl: "",
  },

  {
    id: 4,
    name: "Certified Application Developer (CAD)",
    category: "ServiceNow Certification",
    issuer: "ServiceNow",
    duration: "2026",
    status: "Certified",
    description:
      "ServiceNow application development learning focused on building, extending and maintaining applications on the Now Platform.",
    technologies: [
      "Application Development",
      "Scoped Applications",
      "Business Rules",
      "Script Includes",
      "Client Scripts",
      "Flow Designer",
    ],
    credentialUrl: "",
  },

  {
    id: 5,
    name: "Certified Implementation Specialist – Data Foundations (CMDB & CSDM)",
    category: "ServiceNow Certification",
    issuer: "ServiceNow",
    duration: "2026",
    status: "Certified",
    description:
      "Completed learning focused on CMDB fundamentals, CSDM framework, data foundations, CI relationships and configuration data management.",
    technologies: [
      "CMDB",
      "CSDM",
      "CI Classes",
      "CI Relationships",
      "Data Foundations",
    ],
    credentialUrl: "",
  },

  {
    id: 6,
    name: "Certified Implementation Specialist – Customer Service Management (CSM)",
    category: "ServiceNow Certification",
    issuer: "ServiceNow",
    duration: "2026",
    status: "Certified",
    description:
      "Professional learning goal focused on Customer Service Management implementation, case management and customer workflows.",
    technologies: [
      "CSM",
      "Case Management",
      "Customer Portal",
      "Workflows",
    ],
    credentialUrl: "",
  },

  {
    id: 7,
    name: "More Certifications Coming Soon",
    category: "Continuous Learning",
    issuer: "Professional Development",
    duration: "Future Learning",
    status: "Coming Soon",
    description:
      "Continuously expanding technical knowledge through professional certifications and advanced learning.",
    technologies: [
      "ServiceNow",
      "Full Stack Development",
      "Cloud Technologies",
    ],
    credentialUrl: "",
  },
],



// 9. CONTACT INFORMATION
contact: {
  heading: "Let's Build Something Amazing",

  description:
    "Have a project, opportunity or idea? I would love to connect and discuss.",

  email: "pallapusuresh2000@gmail.com",

  location: "Guntur, Andhra Pradesh, India",
},
};
