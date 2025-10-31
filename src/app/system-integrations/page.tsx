import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function SystemIntegrations() {
  // --- Logos Section ---
  const logos = [
    { src: "/sap.svg", alt: "SAP" },
    { src: "/salesforce.svg", alt: "Salesforce" },
    { src: "/snowflake.svg", alt: "Snowflake" },
    { src: "/aws.svg", alt: "AWS" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/Generated Image October 31, 2025 - 2_58PM.png",
      title: "Unified Enterprise Connectivity",
      description:
        "Integrate your AI and data systems with ERP, CRM, and cloud environments — ensuring seamless data flow and operational harmony across business platforms.",
    },
    {
      image: "/Generated Image October 31, 2025 - 2_56PM.png",
      title: "API Gateway & Middleware",
      description:
        "Connect disparate systems using REST, GraphQL, and WebSocket APIs. Our intelligent gateway standardizes communication between AI models and enterprise systems.",
    },
    {
      image: "/Generated Image October 31, 2025 - 2_56PM (1).png",
      title: "Real-Time Data Synchronization",
      description:
        "Eliminate data silos by enabling live sync between data lakes, ML pipelines, and analytics dashboards with automated schema alignment.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Screenshot 2025-10-31 at 2.53.57 PM.png",
      title: "Plug-and-Play Integration Layer",
      desc: "Connect to existing business systems like SAP, Salesforce, or Oracle with prebuilt connectors and API endpoints.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.01 PM.png",
      title: "Cross-Platform Data Exchange",
      desc: "Enable data to flow securely between cloud and on-prem systems without compromising privacy or compliance.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.04 PM.png",
      title: "AI Workflow Interoperability",
      desc: "Our integration layer allows your AI workflows to interact with external triggers and events across multiple systems.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.09 PM.png",
      title: "Event-Driven Architecture",
      desc: "Leverage real-time event streaming with Kafka and Pub/Sub to build reactive, automated data ecosystems.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.12 PM.png",
      title: "Secure Authentication Layer",
      desc: "Use OAuth2, SSO, and enterprise-grade encryption to ensure secure communication across integrated systems.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.54.16 PM.png",
      title: "Scalable Microservices Support",
      desc: "Modular and containerized architecture enables seamless integration with microservices and serverless environments.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Data Lake Integration",
      desc: "Connect AI pipelines directly to data warehouses like Snowflake, BigQuery, and Redshift for unified insights.",
      icon: "/vercel.svg",
    },
    {
      title: "ERP & CRM Automation",
      desc: "Integrate AI-driven automation into systems like SAP and Salesforce to optimize business processes in real time.",
      icon: "/vercel.svg",
    },
    {
      title: "Unified Monitoring Dashboard",
      desc: "Gain full visibility across all integrations, data flows, and events through a single intelligent control panel.",
      icon: "/vercel.svg",
    },
    {
      title: "Custom Connectors & SDKs",
      desc: "Extend integrations using our SDKs and APIs to fit unique business needs and technology stacks.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "70%", label: "Faster Integration Across Systems" },
    { value: "100+", label: "Prebuilt Connectors Available" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Integration Layer" },
    { color: "#a78bfa", text: "Connected Enterprise Systems" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="System Integrations for Enterprise AI"
        subtitle="Connect every data source, model, and platform into a unified ecosystem — empowering automation, intelligence, and interoperability across your organization."
        buttonText="Explore Integrations"
        videoSrc="/systemIntegrationAnimation.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />

      {/* Logos Section */}
      <LogosSection
        tagText="INTEGRATED WITH GLOBAL PLATFORMS"
        heading="Connect Everything, Power Anything"
        description="Our integration framework ensures smooth communication between data systems, cloud services, and enterprise platforms — bridging AI with real-world operations effortlessly."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />


      {/* Quote Section */}
      {/* <QuoteSection
        quote="The power of AI multiplies when your systems work together seamlessly."
        author="Satya Nadella"
        designation="CEO, Microsoft"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="INTEROPERABILITY AT SCALE"
        title="Seamless Data Flow. Smarter Decisions."
        subtitle="With our system integration layer, enterprises achieve unified visibility and control — ensuring their AI, data, and business systems move in sync."
      />

      {/* Info Split Section */}
      <InfoSplitSection
        title="Integrate your AI infrastructure into every layer of the enterprise — from backend data systems to customer-facing applications — through secure APIs and event-based automation."
        imageSrc="/Generated Image October 31, 2025 - 2_56PM (4).png"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Generated Image October 31, 2025 - 2_56PM (3).png"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="CONNECT WITH CONFIDENCE"
        title="Empower AI Through Seamless System Integration"
        subtitle="Bridge your AI models, data pipelines, and enterprise systems under one cohesive network — designed for scalability, security, and interoperability."
      />
    </>
  );
}
