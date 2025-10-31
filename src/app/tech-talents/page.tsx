import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function TechTalent() {
  // --- Logos Section ---
  const logos = [
    { src: "/google.svg", alt: "Google" },
    { src: "/microsoft.svg", alt: "Microsoft" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/meta.svg", alt: "Meta" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/global-talent-network.webp",
      title: "Access World-Class Tech Talent",
      description:
        "Get access to a global pool of elite engineers, designers, and data experts — pre-vetted for technical excellence and cultural fit.",
    },
    {
      image: "/scalable-team.webp",
      title: "Flexible Hiring Models",
      description:
        "Choose between full-time, part-time, or project-based engagements. Scale your team instantly as your business evolves.",
    },
    {
      image: "/remote-collaboration.webp",
      title: "Seamless Remote Collaboration",
      description:
        "Empower your team with remote professionals who integrate smoothly with your workflows, tools, and company culture.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "Vetted Tech Professionals",
      desc: "We connect you with engineers who have been screened for technical skill, problem-solving, and communication ability.",
    },
    {
      icon: "/vercel.svg",
      title: "Domain Expertise",
      desc: "Our network covers AI, data engineering, DevOps, cybersecurity, full-stack development, and more.",
    },
    {
      icon: "/vercel.svg",
      title: "Rapid Onboarding",
      desc: "Hire within days, not weeks — our streamlined process gets top talent working on your projects quickly.",
    },
    {
      icon: "/vercel.svg",
      title: "Managed Staffing Support",
      desc: "We handle contracts, payments, and logistics — letting you focus purely on innovation and growth.",
    },
    {
      icon: "/vercel.svg",
      title: "Continuous Skill Development",
      desc: "We ensure our professionals stay updated with modern technologies and industry practices.",
    },
    {
      icon: "/vercel.svg",
      title: "Global Reach, Local Impact",
      desc: "Tap into a worldwide talent pool while maintaining time zone compatibility and communication alignment.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "AI & Data Engineers",
      desc: "Leverage the power of machine learning, data pipelines, and analytics with our experienced AI engineers.",
      icon: "/vercel.svg",
    },
    {
      title: "Full-Stack Developers",
      desc: "Get front-end and back-end experts skilled in React, Next.js, Node.js, and cloud-native stacks.",
      icon: "/vercel.svg",
    },
    {
      title: "Cloud & DevOps Specialists",
      desc: "Automate, scale, and secure your infrastructure with AWS, Azure, and GCP-certified engineers.",
      icon: "/vercel.svg",
    },
    {
      title: "Product Designers & Managers",
      desc: "Shape visionary digital experiences with creative designers and agile product leads.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "500+", label: "Top Engineers Available" },
    { value: "7 Days", label: "Average Hiring Time" },
  ];

  const legends = [
    { color: "#00E7FF", text: "Engineering Talent" },
    { color: "#7AFFF7", text: "AI & Cloud Experts" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Vetted Tech Talent Solutions"
        subtitle="Build, scale, and accelerate with top-tier global tech professionals — vetted, skilled, and ready to join your mission."
        buttonText="Find Talent"
        videoSrc="/techTalentHero.webm"
      />
            {/* Collection Section */}
      <CollectionSection data={collectionData} />
      

      {/* Logos Section */}
      <LogosSection
        tagText="TRUSTED BY INNOVATORS WORLDWIDE"
        heading="Hire the Right People, Instantly"
        description="Our platform connects you with world-class developers, designers, and engineers — ensuring fast, reliable, and high-quality team growth."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      <QuoteSection
        quote="The right talent doesn't just fill roles — it transforms possibilities into progress."
        author="Satya Nadella"
        designation="CEO, Microsoft"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="FIND TALENT THAT FITS"
        title="Empower Your Vision with Skilled Professionals"
        subtitle="We provide you access to the best global talent to build, innovate, and deliver without hiring delays or skill gaps."
      />

      {/* Info Split Section */}
      <InfoSplitSection
        title="Our tech talent solutions combine flexibility, reliability, and expertise — helping you grow your engineering capacity without the complexity of recruitment."
        imageSrc="/remote-team-collab.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/global-map-light.svg"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="BUILD YOUR DREAM TEAM"
        title="Access the Future of Work — Today"
        subtitle="Discover top-tier tech professionals ready to take your projects from concept to execution — quickly and efficiently."
      />
    </>
  );
}
