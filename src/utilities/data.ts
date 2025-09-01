import { CgWebsite } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { FaDatabase, FaUserCheck, FaUsersCog } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { LiaCookieSolid, LiaGavelSolid } from "react-icons/lia";
import { MdOutlineCancel, MdOutlinePayment, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiScales } from "react-icons/pi";
import { RiGovernmentLine, RiRefund2Fill } from "react-icons/ri";

export const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/service" },
  { title: "Features", path: "/features" },
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
    title: "CyberSecurity",
    subtitle: "Protect your digital assets",
    features: [
      "Threat detection & prevention",
      "Data encryption & backups",
      "Compliance & auditing",
    ],
    icon: "/assets/icons/CyberSecurity.gif",
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
    title: "Blockchain Development",
    subtitle: "Decentralized solutions",
    features: [
      "Smart contracts",
      "NFT marketplaces",
      "Crypto wallet integration",
    ],
    icon: "/assets/icons/BlockchainDev.gif",
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
    title: "Data Analytics",
    subtitle: "Turn data into insights",
    features: [
      "BI dashboards",
      "Predictive modeling",
      "ETL pipelines",
    ],
    icon: "/assets/icons/DataAnalytics.gif",
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
  {
    title: "Virtual Reality (VR)",
    subtitle: "Immersive experiences",
    features: [
      "3D simulations",
      "AR/VR product showcases",
      "Training & education solutions",
    ],
    icon: "/assets/icons/VR.gif",
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
