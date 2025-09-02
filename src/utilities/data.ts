import { CgWebsite } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { FaDatabase, FaUserCheck, FaUsersCog } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoTrendingUp, IoTrophyOutline, IoWarningOutline } from "react-icons/io5";
import { LiaCookieSolid, LiaGavelSolid } from "react-icons/lia";
import { MdOutlineCancel, MdOutlinePayment, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiScales } from "react-icons/pi";
import { RiGovernmentLine, RiRefund2Fill } from "react-icons/ri";
import {
  FiSmile,
  FiZap,
  FiSettings,
  FiHeadphones,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { GiCheckedShield } from "react-icons/gi";
import { FaUsers, FaLightbulb, FaShieldAlt, FaClock, FaDollarSign, FaHandsHelping } from "react-icons/fa";

export const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/service" },
  { title: "Features", path: "/#features" },
  { title: "Career", path: "/career" },
  { title: "Contact", path: "/contact" },
];

export const services = [
  {
    title: "Web Development",
    subtitle: "Modern & scalable websites",
    features: [
      "Responsive UI/UX design",
      "Next.js & React expertise",
      "SEO & performance optimization",
    ],
    icon: "/assets/icons/WebDev.gif",
  },
  {
    title: "Mobile Development",
    subtitle: "iOS & Android solutions",
    features: [
      "Cross-platform apps (React Native)",
      "Smooth performance & UI",
      "App store deployment support",
    ],
    icon: "/assets/icons/MobileDev.gif",
  },
  {
    title: "Software Development",
    subtitle: "Deploy, scale, and secure",
    features: [
      "Custom software solutions",
      "Integration & automation",
      "Maintenance & support",
    ],
    icon: "/assets/icons/SoftwareDev.gif",
  },
  {
    title: "UI/UX Design",
    subtitle: "User-focused experiences",
    features: [
      "Wireframes & prototypes",
      "Design systems & style guides",
      "Accessibility best practices",
    ],
    icon: "/assets/icons/UIUX.gif",
  },
  {
    title: "AI & Automation",
    subtitle: "Future-ready innovations",
    features: [
      "Chatbots & assistants",
      "Workflow automation",
      "Data-driven insights",
    ],
    icon: "/assets/icons/AI&Automation.gif",
  },
  {
    title: "API Development",
    subtitle: "Connect and scale systems",
    features: [
      "REST & GraphQL APIs",
      "Third-party integrations",
      "Secure authentication",
    ],
    icon: "/assets/icons/APIDev.gif",
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Efficient and scalable infra",
    features: [
      "AWS, Azure, GCP expertise",
      "CI/CD pipelines",
      "Monitoring & optimization",
    ],
    icon: "/assets/icons/Cloud&DevOps.gif",
  },
  {
    title: "Digital Marketing",
    subtitle: "Boost online presence",
    features: [
      "SEO & SEM",
      "Social media marketing",
      "Content strategy",
    ],
    icon: "/assets/icons/DigitalMarketing.gif",
  },
  {
    title: "E-commerce",
    subtitle: "Custom online stores",
    features: [
      "Shopify, WooCommerce, Magento",
      "Payment gateway integration",
      "Analytics & growth tracking",
    ],
    icon: "/assets/icons/E-commerce.gif",
  },
  {
    title: "EdTech Solutions",
    subtitle: "Smart learning platforms",
    features: [
      "LMS development",
      "Interactive courses",
      "Gamification features",
    ],
    icon: "/assets/icons/EdTech.gif",
  },
  {
    title: "IT Support",
    subtitle: "Reliable tech assistance",
    features: [
      "Remote troubleshooting",
      "Network monitoring",
      "24/7 technical support",
    ],
    icon: "/assets/icons/ITSupport.gif",
  },
  {
    title: "Online Shopping",
    subtitle: "Next-gen shopping solutions",
    features: [
      "Marketplace platforms",
      "Product recommendation engines",
      "Inventory management",
    ],
    icon: "/assets/icons/online-shopping.gif",
  },
  {
    title: "Tech Consultation",
    subtitle: "Expert strategic advice",
    features: [
      "Digital transformation roadmaps",
      "Technology audits",
      "Process optimization",
    ],
    icon: "/assets/icons/TechConsultation.gif",
  },
];

export const privacy = [
  {
    icon: MdOutlineRemoveRedEye,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Data",
        text: "Name, email, phone number, company details, and payment information when you sign up for services.",
      },
      {
        subtitle: "Technical Data",
        text: "IP address, browser type, and website interaction details for analytical purposes.",
      },
    ],
  },
  {
    icon: FaDatabase,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Provision",
        text: "Provide, operate, and improve our services.",
      },
      {
        subtitle: "Payment Processing",
        text: "Process payments and transactions securely.",
      },
      {
        subtitle: "Support",
        text: "Respond to customer inquiries and support requests.",
      },
      {
        subtitle: "Communication",
        text: "Send service-related communications and promotions.",
      },
    ],
  },
  {
    icon: CiLock,
    title: "Data Protection & Security",
    content: [
      {
        subtitle: "Encryption and Access Controls",
        text: "We implement security measures to protect your data from unauthorized access. Our website uses SSL encryption for secure data transmission.",
      },
      {
        subtitle: "Data Protection",
        text: "We do not sell or rent your data to third parties.",
      },
    ],
  },
  {
    icon: LiaCookieSolid,
    title: "Cookies and Tracking Technologies",
    content: [
      {
        subtitle: "Cookies",
        text: "We use cookies to enhance user experience and analyze website usage. Users can disable cookies through their browser settings.",
      },
    ],
  },
  {
    icon: FaUsersCog,
    title: "Third-Party Links",
    content: [
      {
        subtitle: "Disclaimer",
        text: "Our website may contain third-party links. We are not responsible for their privacy practices.",
      },
    ],
  },
  {
    icon: FaUserCheck,
    title: "Your Rights",
    content: [
      {
        subtitle: "Access and Portability",
        text: "You have the right to access your personal data and request a copy of your information in a portable format.",
      },
      {
        subtitle: "Correction and Deletion",
        text: "You can update your personal information through your account settings or request deletion of your data by contacting us.",
      },
      {
        subtitle: "Data Processing Control",
        text: "You can control how we process your data, including opting out of certain data uses and marketing communications.",
      },
    ],
  },
]

export const refund = [
  {
    icon: IoMdCheckmarkCircleOutline,
    title: "Refund Eligibility",
    content: [
      {
        subtitle: "Timeframe",
        text: "Refund requests must be made within 7 days of the purchase or project commencement.",
      },
      {
        subtitle: "Eligible Reasons",
        text: "Refunds are only applicable if: The service was not delivered as per the agreed terms. A technical issue occurred that could not be resolved.",
      },
    ],
  },
  {
    icon: MdOutlineCancel,
    title: "Non-Refundable Services",
    content: [
      {
        subtitle: "Custom Software Development",
        text: "Custom software development services once the project has commenced.",
      },
      {
        subtitle: "Consultation Services",
        text: "Consultation services already rendered.",
      },
      {
        subtitle: "Third-Party Software/Licenses",
        text: "Third-party software/licenses purchased on your behalf.",
      },
    ],
  },
  {
    icon: GrCycle,
    title: "Refund Process",
    content: [
      {
        subtitle: "Contact Us",
        text: "Users must submit a refund request via email at care@chitcodes.com with relevant order details.",
      },
      {
        subtitle: "Assessment Period",
        text: "Refund requests will be assessed within 15 working days of submission.",
      },
      {
        subtitle: "Refund Approval",
        text: "Once approved, refunds will be processed within 15 working days through the original payment method.",
      },
    ],
  },
  {
    icon: RiRefund2Fill,
    title: "Chargebacks",
    content: [
      {
        subtitle: "Communication",
        text: "Chargebacks without prior communication will lead to account suspension and may be disputed legally.",
      },
    ],
  }
]

export const termsAndCondition = [
  {
    icon: CgWebsite,
    title: "Use of Website and Services",
    content: [
      {
        subtitle: "Acceptance of Terms",
        text: "By accessing this website, you acknowledge that you have read, understood, and accepted these Terms of Use.",
      },
      {
        subtitle: "License",
        text: "We grant you a non-exclusive, non-transferable, limited right to access and use this website for informational and service-related purposes only.",
      },
      {
        subtitle: "Prohibited Use",
        text: "You agree not to: Copy, modify, distribute, transmit, display, perform, or create derivative works based on our website content. Use the website for unlawful or fraudulent activities.",
      },
    ],
  },
  {
    icon: PiScales,
    title: "Intellectual Property Rights",
    content: [
      {
        subtitle: "Ownership",
        text: "All content, trademarks, and data on this website, including text, graphics, logos, images, and software, are the property of Chit Codes Technologies LLP and protected by applicable intellectual property laws.",
      },
      {
        subtitle: "Unauthorized Use",
        text: "Any unauthorized use of our intellectual property is strictly prohibited and may result in legal action.",
      },
    ],
  },
  {
    icon: MdOutlinePayment,
    title: "Payments and Billing",
    content: [
      {
        subtitle: "Payment Terms",
        text: "Users must pay for services as per the agreed terms and pricing mentioned on our website or in contractual agreements.",
      },
      {
        subtitle: "Consequences of Non-Payment",
        text: "Failure to make timely payments may result in suspension or termination of services.",
      },
    ],
  },
  {
    icon: IoWarningOutline,
    title: "Disclaimer of Warranties",
    content: [
      {
        subtitle: "No Warranties",
        text: "Our website and services are provided 'as is' without warranties of any kind. We do not guarantee error-free, uninterrupted, or fully secure services.",
      },
      {
        subtitle: "Limitation of Liability",
        text: "Chit Codes Technologies LLP shall not be liable for any direct, indirect, or consequential damages resulting from the use of our services.",
      },
    ],
  },
  {
    icon: LiaGavelSolid,
    title: "Termination of Services",
    content: [
      {
        subtitle: "Rights to Terminate",
        text: "We reserve the right to terminate or suspend your access if you violate these terms.",
      },
      {
        subtitle: "User Termination",
        text: "Users may terminate their service by notifying us at care@chitcodes.com.",
      },
    ],
  },
  {
    icon: RiGovernmentLine,
    title: "Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These terms shall be governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].",
      },
    ],
  },
]

export const steps = [
  {
    id: 1,
    title: "Discovery & Requirement Gathering",
    desc: "We start by understanding your goals, challenges, and expectations. This stage builds the foundation for a customized.",
    points: ["Wireframes & Architecture", "Tech Stack Finalization", "Timelines & Milestones"],
  },
  {
    id: 2,
    title: "Planning & Architecture",
    desc: "We design the roadmap, project architecture, and delivery plan based on the discovered requirements.",
    points: ["Client Consultation", "Business Requirement Analysis", "Scope Definition"],
  },
  {
    id: 3,
    title: "Design & Development",
    desc: "From UX/UI to backend logic, our team builds the solution iteratively with regular updates and feedback cycles.",
    points: ["UI/UX Design", "Frontend & Backend Development", "API Integrations"],
  },
  {
    id: 4,
    title: "Quality Assurance & Launch",
    desc: "We ensure the product is stable, tested, and ready to launch — meeting performance and security benchmarks.",
    points: ["Manual & Automated Testing", "Bug Fixing", "Deployment & Go-Live"],
  },
  {
    id: 5,
    title: "Post-Launch Support",
    desc: "We don't just deliver — we stand by our clients with continuous updates, optimizations, and support.",
    points: ["Performance Monitoring", "Feature Enhancements", "Ongoing Support & Maintenance"],
  },
];

export const features = [
  {
    title: "Seamless Experience",
    subtitle: "Smooth & Intuitive",
    description:
      "Enjoy a user-friendly interface with smooth navigation and effortless interaction.",
    icon: FiSmile,
  },
  {
    title: "High Performance",
    subtitle: "Fast & Reliable",
    description:
      "Optimized for speed and efficiency to deliver results without delays.",
    icon: FiZap,
  },
  {
    title: "Secure Platform",
    subtitle: "Data Protection",
    description:
      "Your information is encrypted and safeguarded with advanced security protocols.",
    icon: GiCheckedShield,
  },
  {
    title: "Customizable",
    subtitle: "Tailored for You",
    description:
      "Easily personalize settings and features to match your preferences.",
    icon: FiSettings,
  },
  {
    title: "24/7 Support",
    subtitle: "Always Available",
    description:
      "Get round-the-clock assistance from our dedicated support team.",
    icon: FiHeadphones,
  },
  {
    title: "Scalable Solution",
    subtitle: "Grow Without Limits",
    description:
      "Built to adapt as your needs expand, ensuring long-term usability.",
    icon: FiTrendingUp,
  },
];

export const reasons = [
  { icon: FaUsers, title: "Expert Team", desc: "Certified professionals with proven industry experience." },
  { icon: FaLightbulb, title: "Innovation Driven", desc: "Cutting-edge solutions with AI & automation." },
  { icon: FaHandsHelping, title: "Customer-Centric", desc: "Tailored solutions, transparent communication, and support." },
  { icon: FaClock, title: "On-Time Delivery", desc: "Agile workflows ensure fast delivery without compromising quality." },
  { icon: FaShieldAlt, title: "Quality Assurance", desc: "Secure, scalable, and tested solutions for peace of mind." },
  { icon: FaDollarSign, title: "Affordable Pricing", desc: "Flexible pricing and high ROI on every project." },
];

export const values = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3079/3079872.png",
    title: 'Innovation',
    subtitle: 'Embracing creative solutions',
    features: ['Cutting-edge technologies', 'Creative problem-solving', 'Future-focused approach'],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2913/2913133.png",
    title: 'Reliability',
    subtitle: 'Consistent, dependable results',
    features: ['Robust systems & processes', 'High-quality deliverables', 'Trusted by clients'],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    title: 'Passion',
    subtitle: 'Committed to excellence',
    features: ['Love for technology', 'Exceptional user experiences', 'Dedicated to client success'],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1283/1283342.png",
    title: 'Excellence',
    subtitle: 'Striving for perfection',
    features: ['Pixel-perfect design', 'High-quality code', 'Superior customer service'],
  }
];

export const cardData = [
  {
    id: 1,
    title: "Vision",
    content: "At Patchline, our vision is to bridge the gap between technology and creativity, empowering businesses with innovative digital solutions.",
  },
  {
    id: 2,
    title: "Mission",
    content: "Our mission is to deliver seamless and scalable solutions in web, mobile, and enterprise applications that drive growth and impact.",
  },
  {
    id: 3,
    title: "Story",
    content: "Patchline started with a team of passionate engineers and designers, united by the goal of simplifying technology for real-world use cases.",
  },
  {
    id: 4,
    title: "Values",
    content: "We believe in innovation, collaboration, and integrity, ensuring every project we build reflects excellence and trust.",
  },
  {
    id: 5,
    title: "Future",
    content: "We are committed to exploring AI, automation, and next-gen technologies to redefine possibilities for our clients.",
  },
];

export const whyWorkWithUs = [
  {
    icon: FaLightbulb,
    title: "Cutting-Edge Innovation",
    description: "Work on revolutionary AI technology that's shaping the future of software development.",
    stats: "50+ AI models in production",
    aos: "fade-up"
  },
  {
    icon: IoTrendingUp,
    title: "Rapid Growth",
    description: "Join a fast-growing company with unlimited potential and career advancement opportunities.",
    stats: "300% growth year-over-year",
    aos: 'fade-down'
  },
  {
    icon: FiUsers,
    title: "World-Class Team",
    description: "Collaborate with brilliant minds from top tech companies like Google, Microsoft, and Meta.",
    stats: "Team from 15+ countries",
    aos: 'fade-up'
  },
  {
    icon: IoTrophyOutline,
    title: "Industry Recognition",
    description: "Be part of an company recognized by top industry publications and organizations.",
    stats: "Winner of 5+ industry awards",
    aos: 'fade-down'
  },
]

export const jobOpenings = [
  {
    id: 1,
    title: "Business Development Executive",
    department: "Sales",
    location: "Indore, India",
    type: "Full-time",
    salary: "20K - 50K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "As a BDE, you will be responsible for generating leads, building relationships with potential clients, and closing deals. You will also be working closely with the engineering team to understand our product and services.",
    requirements: [
      "0-3 years of experience in sales and marketing",
      "Strong communication and interpersonal skills",
      "Ability to work in a fast-paced environment",
      "Basic understanding of software development and tech industry",
      "Comfortable with cold calling and lead generation",
      "Ability to work independently and in a team-oriented environment"
    ],
    responsibilities: [
      "Create and execute sales strategies to drive revenue growth",
      "Generate leads, build relationships, and close deals",
      "Collaborate with the engineering team to understand our product and services",
      "Develop and maintain a strong understanding of the tech industry",
      "Work closely with the marketing team to develop targeted campaigns",
      "Participate in sales calls and meetings with potential clients",
      "Maintain accurate records of sales activities and performance"
    ],
    qualifications: [
      "Bachelor's degree in Business Administration or related field",
      "Strong negotiation and closing skills",
      "Ability to work in a fast-paced environment",
      "Basic understanding of software development and tech industry",
      "Comfortable with cold calling and lead generation",
      "Ability to work independently and in a team-oriented environment"
    ],
    benefits: [
      "Competitive salary and commission structure",
      "Opportunity to work with a fast-growing company",
      "Professional development and training opportunities",
      "Flexible work hours and work-from-home options",
      "Paid time off and company holidays",
      "Health insurance and wellness perks"
    ]
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "80K - 110K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "Join our dynamic team to build full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. You'll work on modern, scalable products that empower developers globally.",
    requirements: [
      "0-3 years of experience in full-stack development",
      "Strong knowledge of MongoDB, Express.js, React, and Node.js",
      "Familiarity with RESTful APIs and JSON",
      "Understanding of basic DevOps practices",
      "Good debugging and problem-solving skills",
      "Comfortable with Git and version control workflows",
      "Basic understanding of deployment on cloud platforms"
    ],
    responsibilities: [
      "Develop and maintain full-stack applications using the MERN stack",
      "Collaborate with UI/UX designers and backend developers",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and stand-ups",
      "Contribute to bug fixing and performance improvements",
      "Work closely with the QA team for testing and deployment",
      "Stay updated on new technologies and trends in full-stack development"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "Solid foundation in JavaScript and web development",
      "Hands-on experience with MongoDB and Node.js",
      "Understanding of front-end development principles",
      "Familiarity with Agile methodologies",
      "Good communication and teamwork skills"
    ],
    benefits: [
      "Mentorship and hands-on training",
      "Remote-friendly work environment",
      "Health and wellness benefits",
      "Opportunity to work with a skilled team",
      "Access to latest tech and tools",
      "Career growth and learning resources"
    ]
  },
  {
    id: 3,
    title: "React Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "75K - 105K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "We are looking for a passionate React Developer to create dynamic and responsive user interfaces. Work on real-time dashboards, developer tools, and AI-enhanced web applications.",
    requirements: [
      "0-3 years of experience with React.js",
      "Good knowledge of JavaScript, HTML, CSS",
      "Familiarity with Redux or Context API",
      "Understanding of component-based architecture",
      "Experience with REST APIs and asynchronous operations",
      "Basic knowledge of testing tools like Jest or React Testing Library",
      "Comfort with Git version control"
    ],
    responsibilities: [
      "Develop responsive UI components using React",
      "Work closely with designers to implement user-centric features",
      "Optimize components for performance across devices",
      "Maintain code quality through testing and reviews",
      "Integrate with backend APIs and services",
      "Fix bugs and address usability issues",
      "Stay current with the latest React best practices"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science or related field",
      "Understanding of responsive design and cross-browser compatibility",
      "Hands-on experience with React hooks and modern features",
      "Good problem-solving skills and attention to detail",
      "Ability to work in a team-oriented environment",
      "Knowledge of web accessibility standards"
    ],
    benefits: [
      "Flexible work hours and remote options",
      "Learning budget and certification support",
      "Supportive and inclusive team culture",
      "Paid time off and company holidays",
      "Competitive compensation with bonus potential",
      "Health insurance and wellness perks"
    ]
  },
  {
    id: 4,
    title: "Java Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "85K - 115K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "We are seeking a Java Developer to help build backend systems and APIs that power our AI-driven platform. Ideal for recent grads or junior developers with a strong Java foundation.",
    requirements: [
      "0-3 years of experience with Java development",
      "Familiarity with Spring Boot or similar frameworks",
      "Understanding of RESTful APIs and JSON",
      "Experience with databases like MySQL or PostgreSQL",
      "Knowledge of object-oriented programming concepts",
      "Ability to write clean, maintainable code",
      "Understanding of unit testing and version control"
    ],
    responsibilities: [
      "Develop and maintain backend services using Java",
      "Implement REST APIs and integrations",
      "Work with product and frontend teams on system design",
      "Write and maintain unit and integration tests",
      "Troubleshoot bugs and optimize performance",
      "Contribute to architecture decisions and planning",
      "Document code and workflows clearly"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or similar",
      "Solid grasp of Java and related technologies",
      "Strong logical and analytical thinking",
      "Understanding of database concepts and schemas",
      "Eagerness to learn and grow in a collaborative environment",
      "Familiarity with CI/CD pipelines is a plus"
    ],
    benefits: [
      "On-the-job training and mentorship",
      "Modern tech stack and tools",
      "Career advancement opportunities",
      "Paid certification programs",
      "Remote-first culture",
      "Health, dental, and vision insurance"
    ]
  },
  {
    id: 5,
    title: "Python Django Developer",
    department: "Engineering",
    location: "Indore, India",
    type: "Full-time",
    salary: "80K - 110K",
    experience: "0 - 3 years",
    posted: "Today",
    description: "Join our fast-growing engineering team to build scalable web applications using Python and Django. Ideal for early-career developers passionate about backend development and clean architecture.",
    requirements: [
      "0-3 years of experience with Python and Django",
      "Understanding of REST APIs and Django ORM",
      "Experience with PostgreSQL or other relational databases",
      "Knowledge of version control tools like Git",
      "Basic understanding of testing frameworks",
      "Ability to write clean and efficient code",
      "Familiarity with Docker is a plus"
    ],
    responsibilities: [
      "Develop backend systems and APIs using Django",
      "Collaborate with frontend and product teams",
      "Participate in system design and architecture discussions",
      "Write and maintain unit tests and documentation",
      "Optimize applications for performance and scalability",
      "Help troubleshoot and debug production issues",
      "Contribute to continuous improvement initiatives"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science or related field",
      "Strong foundation in Python programming",
      "Experience with Django-based projects",
      "Familiarity with MVC architecture",
      "Willingness to learn and adapt quickly",
      "Good communication and teamwork skills"
    ],
    benefits: [
      "Opportunity to work on real-world Django projects",
      "Supportive team environment",
      "Flexible work hours and remote options",
      "Training and certification budget",
      "Health and wellness benefits",
      "Career growth path and mentorship"
    ]
  },
]

export const experienceOptions = [
  "No experience",
  "0-1 years",
  "2-3 years",
  "4-5 years",
  "6-10 years",
  "10+ years"
]