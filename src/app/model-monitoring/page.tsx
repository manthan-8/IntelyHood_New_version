import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function ModelMonitoring() {
  // --- Logos Section ---
  const logos = [
    { src: "/openai.svg", alt: "OpenAI" },
    { src: "/anthropic.svg", alt: "Anthropic" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/google.svg", alt: "Google Cloud" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/Generated Image October 31, 2025 - 2_03PM.png",
      title: "Performance Metrics Tracking",
      description:
        "Continuously monitor precision, recall, latency, and accuracy metrics across production environments to ensure stable model performance.",
    },
    {
      image: "/Generated Image October 31, 2025 - 2_03PM (1).png",
      title: "Drift & Anomaly Detection",
      description:
        "Detect shifts in data distribution or model behavior in real-time using statistical and ML-based drift detection algorithms.",
    },
    {
      image: "/Generated Image October 31, 2025 - 2_03PM (2).png",
      title: "Alert & Incident Automation",
      description:
        "Automatically trigger alerts, rollbacks, or retraining workflows when models deviate from expected performance thresholds.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Screenshot 2025-10-31 at 2.01.32 PM.png",
      title: "Comprehensive Model Observability",
      desc: "Monitor every prediction, request, and model version with detailed visibility into latency, accuracy, and data integrity.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.01.58 PM.png",
      title: "Data Drift Detection",
      desc: "Real-time analysis of input data distributions helps identify drift and concept shift before they impact predictions.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.02.03 PM.png",
      title: "Bias & Fairness Evaluation",
      desc: "Continuously evaluate your models for demographic fairness, outcome bias, and ethical compliance across datasets.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.03.04 PM.png",
      title: "Root Cause Analysis",
      desc: "Automated explainability tools pinpoint the cause of model degradation — from dataset shift to feature imbalance.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.03.43 PM.png",
      title: "Custom Alerts & Dashboards",
      desc: "Set adaptive alerts for model KPIs and visualize trends with interactive dashboards tailored for your AI workflows.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.03.50 PM.png",
      title: "Continuous Feedback Loops",
      desc: "Integrate user feedback and retraining pipelines to close the loop and maintain model performance post-deployment.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "End-to-End Monitoring",
      desc: "Track data inputs, predictions, and outcomes across the entire ML lifecycle — from training to real-world inference.",
      icon: "/vercel.svg",
    },
    {
      title: "Automated Retraining Signals",
      desc: "Detect drift, trigger retraining jobs, and maintain model accuracy without manual intervention.",
      icon: "/vercel.svg",
    },
    {
      title: "Explainable Insights",
      desc: "Feature attribution and prediction-level explainability provide transparency into model decisions.",
      icon: "/vercel.svg",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Monitor hundreds of models simultaneously with distributed log collection and low-latency analysis.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime in Model Monitoring Pipelines" },
    { value: "250+", label: "Deployed Models Under Active Watch" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Model Observability Layer" },
    { color: "#a78bfa", text: "AI Feedback & Retraining System" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Model Monitoring & Observability"
        subtitle="Maintain trust, performance, and transparency with continuous monitoring, drift detection, and explainable AI insights."
        buttonText="Get a Demo"
        videoSrc="/modelMonitoringAnimation.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="TRUSTED BY LEADING AI TEAMS"
        heading="Operational Excellence for Deployed AI Systems"
        description="Our model monitoring suite ensures your production AI models remain accurate, compliant, and resilient — even as data and user behavior evolve."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      {/* <QuoteSection
        quote="Monitoring deployed models is as critical as training them — because reliability defines intelligence."
        author="Fei-Fei Li"
        designation="Co-Director, Stanford Human-Centered AI Institute"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="TRUST & TRANSPARENCY"
        title="Intelligent Monitoring for Responsible AI"
        subtitle="We deliver visibility, control, and actionable insights that ensure your AI systems perform safely and ethically in production."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Our model monitoring pipeline provides real-time visibility, intelligent alerts, and automated remediation — ensuring your models adapt, evolve, and perform with consistency across all environments."
        imageSrc="/Generated Image October 31, 2025 - 2_04PM (1).png"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Generated Image October 31, 2025 - 2_04PM.png"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="EVOLVE RESPONSIBLY"
        title="Build Reliable, Transparent AI Systems"
        subtitle="Our Model Monitoring Platform empowers teams to track, explain, and optimize models in real time — ensuring accuracy, fairness, and trust at scale."
      />
    </>
  );
}
