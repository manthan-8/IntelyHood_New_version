import {
  FiSmile,
  FiZap,
  FiSettings,
  FiHeadphones,
  FiTrendingUp,
} from "react-icons/fi";
import { GiCheckedShield } from "react-icons/gi";
import { FaUsers, FaLightbulb, FaShieldAlt, FaClock, FaDollarSign, FaHandsHelping } from "react-icons/fa";

export const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/service" },
  { title: "Features", path: "/#features" },
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


  export  const cardData = [
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