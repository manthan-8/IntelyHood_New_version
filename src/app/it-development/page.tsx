import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function ITDevelopment() {
  // --- Logos Section ---
  const logos = [
    { src: "/microsoft.svg", alt: "Microsoft" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/google.svg", alt: "Google Cloud" },
    { src: "/meta.svg", alt: "Meta" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/custom-software.webp",
      title: "Custom Software Development",
      description:
        "We build scalable, high-performance applications tailored to your business — from concept to deployment — using modern frameworks and cloud-native architecture.",
    },
    {
      image: "/mobile-development.webp",
      title: "Mobile App Development",
      description:
        "Deliver seamless experiences across iOS and Android with robust, secure, and user-friendly mobile solutions that drive engagement and growth.",
    },
    {
      image: "/enterprise-solutions.webp",
      title: "Enterprise IT Solutions",
      description:
        "Optimize workflows, automate operations, and unify systems with enterprise-grade applications designed for performance, security, and scalability.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "Full-Cycle Development",
      desc: "From ideation and design to development, testing, and deployment — we handle every step with precision and agility.",
    },
    {
      icon: "/vercel.svg",
      title: "Agile Methodology",
      desc: "We follow agile sprints and CI/CD pipelines to ensure faster delivery, flexibility, and continuous improvement.",
    },
    {
      icon: "/vercel.svg",
      title: "Cutting-Edge Tech Stack",
      desc: "Our teams work with React, Next.js, Node.js, Python, Java, and cloud platforms like AWS, Azure, and GCP.",
    },
    {
      icon: "/vercel.svg",
      title: "Secure & Scalable Architecture",
      desc: "We design architectures that handle growth, traffic, and data security seamlessly for long-term reliability.",
    },
    {
      icon: "/vercel.svg",
      title: "DevOps & Automation",
      desc: "Leverage CI/CD, containerization, and infrastructure automation to accelerate delivery and reduce downtime.",
    },
    {
      icon: "/vercel.svg",
      title: "Quality Assurance",
      desc: "We use advanced testing frameworks to ensure bug-free, high-performance solutions that meet global standards.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Web App Development",
      desc: "Modern web solutions built on React, Next.js, and Node.js — fast, responsive, and SEO-friendly.",
      icon: "/vercel.svg",
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps that deliver superior performance and usability.",
      icon: "/vercel.svg",
    },
    {
      title: "Cloud-Native Applications",
      desc: "Deploy and scale your apps effortlessly using AWS, Azure, or Google Cloud environments.",
      icon: "/vercel.svg",
    },
    {
      title: "UI/UX Design & Prototyping",
      desc: "Bring your ideas to life with intuitive, user-centric designs and interactive prototypes.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "250+", label: "Projects Delivered Successfully" },
    { value: "98%", label: "Client Satisfaction Rate" },
  ];

  const legends = [
    { color: "#3B82F6", text: "Software Solutions" },
    { color: "#8B5CF6", text: "Enterprise IT" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="IT Development Services"
        subtitle="Build powerful, scalable, and secure IT solutions that accelerate your business transformation."
        buttonText="Start Your Project"
        videoSrc="/itDevelopmentHero.webm"
      />
            
      {/* Collection Section */}
      <CollectionSection data={collectionData} />

      {/* Logos Section */}
      <LogosSection
        tagText="TRUSTED BY GLOBAL BRANDS"
        heading="Innovate with Confidence"
        description="Partner with experienced developers and architects who deliver modern, cloud-ready, and business-driven IT solutions across industries."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />


      {/* Quote Section */}
      <QuoteSection
        quote="Technology is best when it brings people together and simplifies the complex."
        author="Tim Cook"
        designation="CEO, Apple"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="TRANSFORM YOUR DIGITAL LANDSCAPE"
        title="Deliver Innovation Through Engineering Excellence"
        subtitle="We empower your organization with high-performance IT systems designed to scale with your business goals."
      />

      {/* Info Split Section */}
      <InfoSplitSection
        title="Our approach focuses on blending creativity, technology, and strategy to deliver solutions that drive measurable impact — from startups to enterprises."
        imageSrc="/software-dev-team.webp"
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
        tagText="BUILD SMARTER, SCALE FASTER"
        title="Empower Your Business Through Modern IT Development"
        subtitle="From idea to implementation — we craft digital solutions that help you innovate, scale, and lead in your industry."
      />
    </>
  );
}
