import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function StaffAugmentation() {
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
      image: "/remote-team.webp",
      title: "Build High-Performance Teams On-Demand",
      description:
        "Access pre-vetted software engineers, AI experts, designers, and project managers to instantly scale your development capacity — without the overhead of hiring full-time staff.",
    },
    {
      image: "/global-talent.webp",
      title: "Global Talent Network",
      description:
        "We connect you with top professionals across AI, cloud, full-stack, and DevOps — ensuring quality talent aligned with your technology stack and business goals.",
    },
    {
      image: "/scalable-team.webp",
      title: "Flexible Engagement Models",
      description:
        "Choose hourly, monthly, or project-based models. Scale up or down anytime based on your project requirements and deadlines.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "Dedicated Remote Developers",
      desc: "Hire highly skilled developers who work exclusively on your projects, maintaining full alignment with your vision and timeline.",
    },
    {
      icon: "/vercel.svg",
      title: "Tech Expertise Across Domains",
      desc: "Our professionals specialize in AI, Data Science, Full Stack Development, UI/UX Design, and Cloud Infrastructure.",
    },
    {
      icon: "/vercel.svg",
      title: "Transparent Communication",
      desc: "Daily stand-ups, progress reports, and real-time tracking ensure smooth collaboration and accountability.",
    },
    {
      icon: "/vercel.svg",
      title: "Zero Recruitment Overhead",
      desc: "Skip the long hiring cycles. We handle screening, onboarding, and management while you focus on core business.",
    },
    {
      icon: "/vercel.svg",
      title: "Enterprise-Grade Security",
      desc: "All our contracts include NDAs and IP protection to safeguard your business data and proprietary technology.",
    },
    {
      icon: "/vercel.svg",
      title: "Scalable Resource Pool",
      desc: "Instantly add developers, designers, or data scientists as your project evolves — no red tape, no delay.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "AI & Data Science Experts",
      desc: "Accelerate innovation with dedicated data scientists, ML engineers, and AI developers trained on modern frameworks.",
      icon: "/vercel.svg",
    },
    {
      title: "Full-Stack & DevOps Engineers",
      desc: "Seamlessly integrate scalable web, mobile, and infrastructure solutions with senior full-stack and DevOps talent.",
      icon: "/vercel.svg",
    },
    {
      title: "UI/UX Designers & Product Managers",
      desc: "Bring design thinking and agile execution into your workflow with creative, business-oriented specialists.",
      icon: "/vercel.svg",
    },
    {
      title: "Custom Talent Solutions",
      desc: "Need a hybrid team? We build custom squads combining backend, AI, design, and QA to deliver end-to-end execution.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "150+", label: "Skilled Professionals Available" },
    { value: "95%", label: "Client Retention Rate" },
  ];

  const legends = [
    { color: "#00E7FF", text: "Engineering Talent" },
    { color: "#7AFFF7", text: "AI & Cloud Specialists" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Staff Augmentation Services"
        subtitle="Scale your engineering and AI teams with top-tier talent — on demand, on budget, and aligned with your goals."
        buttonText="Hire Now"
        videoSrc="/staffAugmentationHero.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos Section */}
      <LogosSection
        tagText="TRUSTED BY GLOBAL ENTERPRISES"
        heading="Your Team, Powered by Our Experts"
        description="We provide vetted, full-time remote professionals who integrate seamlessly with your in-house teams — ensuring efficiency and technical excellence."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      <QuoteSection
        quote="The best companies don’t just build products — they build the right teams first."
        author="Sundar Pichai"
        designation="CEO, Google"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="ON-DEMAND TEAM EXTENSION"
        title="Empower Your Business with Expert Developers"
        subtitle="Whether you’re launching a new project or scaling an existing one — our engineers, designers, and data experts are ready to collaborate with your core team instantly."
      />

      {/* Info Split Section */}
      <InfoSplitSection
        title="We combine technology expertise, flexible contracts, and a global talent pool to provide staffing solutions that fit your project perfectly — from startups to Fortune 500s."
        imageSrc="/team-collaboration.webp"
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
        title="Augment. Accelerate. Achieve."
        subtitle="Let’s expand your capabilities with world-class engineers and AI experts dedicated to your success."
      />
    </>
  );
}
