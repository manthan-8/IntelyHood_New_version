import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function EnterpriseSolutions() {
  const logos = [
    { src: "/ibm.svg", alt: "IBM" },
    { src: "/oracle.svg", alt: "Oracle" },
    { src: "/sap.svg", alt: "SAP" },
    { src: "/salesforce.svg", alt: "Salesforce" },
  ];

  const collectionData = [
    {
      image: "/Generated Image October 31, 2025 - 3_18PM.png",
      title: "Digital Transformation",
      description:
        "Empower your enterprise with digital-first strategies that streamline operations and drive innovation across all departments.",
    },
    {
      image: "/Generated Image October 31, 2025 - 3_18PM (1).png",
      title: "Cloud Migration & Modernization",
      description:
        "Migrate legacy systems to modern, cloud-native infrastructure for agility, scalability, and cost efficiency.",
    },
    {
      image: "/Generated Image October 31, 2025 - 3_18PM (2).png",
      title: "Data Integration & Analytics",
      description:
        "Unify data from multiple sources and leverage analytics to make smarter, data-driven business decisions.",
    },
  ];

  const featuresData = [
    {
      icon: "/Generated Image October 31, 2025 - 3_16PM.png",
      title: "Enterprise-Grade Security",
      desc: "We follow best-in-class security and compliance standards to safeguard enterprise data and systems.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 3_16PM.png",
      title: "Custom ERP & CRM Solutions",
      desc: "Tailor-made enterprise tools for process automation, customer management, and business optimization.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 3_16PM.png",
      title: "AI-Powered Automation",
      desc: "Reduce manual work with intelligent automation powered by AI, ML, and process orchestration.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 3_18PM (1).png",
      title: "Cloud Scalability",
      desc: "Deploy workloads on hybrid or multi-cloud infrastructure with seamless scalability and performance.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 3_18PM (2).png",
      title: "Business Continuity",
      desc: "Ensure uptime and resilience with our robust disaster recovery and high-availability solutions.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 3_16PM.png",
      title: "Compliance & Governance",
      desc: "We help enterprises stay compliant with GDPR, SOC 2, ISO 27001, and other global standards.",
    },
  ];

  const cards = [
    {
      title: "ERP Implementation",
      desc: "Optimize enterprise resources and automate workflows with robust ERP platforms.",
      icon: "/vercel.svg",
    },
    {
      title: "CRM Development",
      desc: "Boost customer engagement with personalized, AI-powered CRM systems.",
      icon: "/vercel.svg",
    },
    {
      title: "Business Intelligence Dashboards",
      desc: "Visualize KPIs, performance data, and insights in real time.",
      icon: "/vercel.svg",
    },
    {
      title: "Cloud Optimization",
      desc: "Improve cost efficiency and system performance with cloud-native operations.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "95%", label: "Process Efficiency Improved" },
    { value: "40%", label: "Operational Costs Reduced" },
  ];

  const legends = [
    { color: "#00AEEF", text: "Enterprise IT" },
    { color: "#7A7FFF", text: "Digital Strategy" },
  ];

  return (
    <>
      <PageHeroSection
        title="Enterprise Solutions"
        subtitle="Modernize and accelerate your enterprise operations through digital transformation and intelligent automation."
        buttonText="Consult Now"
        videoSrc="/enterpriseHero.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      <LogosSection
        tagText="POWERING GLOBAL ENTERPRISES"
        heading="Drive Efficiency at Scale"
        description="We help global enterprises innovate, modernize, and stay competitive through scalable digital solutions."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      
{/* 
      <QuoteSection
        quote="The secret of change is to focus all your energy not on fighting the old, but on building the new."
        author="Socrates"
      /> */}

      <ImproveDataSection
        tagText="TRANSFORM WITH CONFIDENCE"
        title="Unlock Agility and Efficiency Across Your Organization"
        subtitle="From process automation to AI-driven insights, our enterprise solutions are built for speed, scale, and sustainability."
      />

      <InfoSplitSection
        title="We collaborate with enterprises to reimagine operations, enhance productivity, and unlock the full potential of their digital ecosystem."
        imageSrc="/Generated Image October 31, 2025 - 3_17PM.png"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Generated Image October 31, 2025 - 3_16PM (1).png"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      <ImproveDataSection
        tagText="ACCELERATE DIGITAL SUCCESS"
        title="Lead with Scalable, Secure Enterprise Systems"
        subtitle="Partner with us to redefine how your enterprise operates, collaborates, and grows in the digital era."
      />
    </>
  );
}
    