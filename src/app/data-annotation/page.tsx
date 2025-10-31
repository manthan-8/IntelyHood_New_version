import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function DataAnnotation() {
  // --- Logos Section ---
  const logos = [
    { src: "/scale.svg", alt: "Scale AI" },
    { src: "/labelbox.svg", alt: "Labelbox" },
    { src: "/snorkel.svg", alt: "Snorkel AI" },
    { src: "/nvidia.svg", alt: "NVIDIA" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/annotation-lab.webp",
      title: "Annotation Labs",
      description:
        "Expert-led labeling hubs equipped with proprietary annotation tools and multi-modal interfaces for text, vision, and speech data.",
    },
    {
      image: "/human-in-loop.webp",
      title: "Human-in-the-Loop Systems",
      description:
        "Real-time collaboration between annotators and AI validators ensures accurate, bias-free, and context-aware dataset creation.",
    },
    {
      image: "/quality-assurance.webp",
      title: "Quality Assurance Pipelines",
      description:
        "Each dataset passes through multi-stage QA — combining automation, peer review, and domain-specific validation layers.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "Multi-Modal Annotation",
      desc: "Text, image, audio, and video annotation capabilities under one infrastructure — ensuring seamless integration for complex AI models.",
    },
    {
      icon: "/vercel.svg",
      title: "Human + Machine Efficiency",
      desc: "AI-assisted labeling tools accelerate workflows while maintaining human-level judgment for edge cases and contextual accuracy.",
    },
    {
      icon: "/vercel.svg",
      title: "Scalable Annotation Infrastructure",
      desc: "Our cloud-based platform handles millions of data points daily — optimized for enterprise AI, LLMs, and autonomous systems.",
    },
    {
      icon: "/vercel.svg",
      title: "Advanced Quality Control",
      desc: "Layered QA pipelines identify inconsistencies, bias, and labeling drift — ensuring reliable ground truth for model training.",
    },
    {
      icon: "/vercel.svg",
      title: "Ethical & Secure Operations",
      desc: "Data is handled with end-to-end encryption, anonymization, and compliance with GDPR, HIPAA, and ISO data privacy standards.",
    },
    {
      icon: "/vercel.svg",
      title: "Domain-Specific Expertise",
      desc: "Specialized annotation teams in healthcare, finance, manufacturing, and linguistics ensure datasets are relevant and reliable.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Human-in-the-Loop Annotation",
      desc: "Leverage expert annotators and reviewers to refine data iteratively — ensuring your AI models learn from verified, contextual input.",
      icon: "/vercel.svg",
    },
    {
      title: "AI-Augmented Labeling",
      desc: "Automated pre-labeling with continuous human validation accelerates dataset throughput without compromising quality.",
      icon: "/vercel.svg",
    },
    {
      title: "Workflow Automation",
      desc: "Streamlined task assignment, real-time monitoring, and customizable dashboards keep your annotation projects on schedule.",
      icon: "/vercel.svg",
    },
    {
      title: "Global Annotation Network",
      desc: "Diverse workforce across 90+ regions enables cultural, linguistic, and domain-specific representation for unbiased datasets.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "50M+", label: "Annotations Processed Monthly" },
    { value: "75+", label: "Enterprise AI Projects Delivered" },
  ];

  const legends = [
    { color: "#22c55e", text: "AI-Assisted Labeling Operations" },
    { color: "#a78bfa", text: "Global Human Annotation Workforce" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Data Annotation Engine"
        subtitle="Empower your AI models with accurate, bias-free, and ethically sourced training data — powered by human intelligence and automation."
        buttonText="Get Started"
        videoSrc="/annotationAnimation.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="INDUSTRY PARTNERS"
        heading="Trusted by Global AI Innovators"
        description="Our annotation ecosystem combines advanced tooling, workforce intelligence, and automated QA to deliver world-class datasets for AI leaders across industries."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      <QuoteSection
        quote="True AI performance begins with the integrity of the data it’s trained on. Annotation is not a task — it’s a craft."
        author="Fei-Fei Li"
        designation="Co-Director, Stanford Human-Centered AI"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="OPTIMIZE"
        title="Annotation That Scales with Intelligence"
        subtitle="Our platform bridges human expertise and AI-assisted validation to ensure every data point contributes to model reliability and ethical intelligence."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Data annotation is the foundation of every successful AI model. Our pipeline spans from pre-labeling automation to continuous human QA, ensuring consistency, fairness, and contextual understanding."
        imageSrc="/annotation-process.webp"
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
        tagText="INNOVATE"
        title="Data That Teaches Machines to Understand the World"
        subtitle="Data Annotation Engine transforms raw, unstructured data into model-ready intelligence — driving the accuracy, fairness, and reliability of next-generation AI."
      />
    </>
  );
}
