import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function WorkflowAutomation() {
  // --- Logos Section ---
  const logos = [
    { src: "/airflow.svg", alt: "Apache Airflow" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/databricks.svg", alt: "Databricks" },
    { src: "/gcp.svg", alt: "Google Cloud" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/Generated Image October 31, 2025 - 2_40PM (3).png",
      title: "End-to-End Pipeline Automation",
      description:
        "Orchestrate data ingestion, preprocessing, training, and deployment automatically — reducing manual intervention and errors.",
    },
    {
      image: "/Generated Image October 31, 2025 - 2_40PM (2).png",
      title: "Intelligent Orchestration",
      description:
        "AI-driven automation dynamically schedules and optimizes pipelines based on data readiness, dependency graphs, and compute load.",
    },
    {
      image: "/Generated Image October 31, 2025 - 2_40PM (1).png",
      title: "Continuous Deployment Workflows",
      description:
        "Deploy new models, trigger retraining, and manage version rollouts seamlessly with CI/CD integrations and zero-downtime releases.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Screenshot 2025-10-31 at 2.39.33 PM.png",
      title: "Smart Workflow Orchestration",
      desc: "Automate complex data and ML pipelines using intelligent triggers, condition-based flows, and adaptive scheduling.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.39.38 PM.png",
      title: "Cross-Platform Integrations",
      desc: "Seamlessly connect with tools like Airflow, Kubeflow, MLflow, and Jenkins to unify your AI workflow ecosystem.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.39.42 PM.png",
      title: "Error Detection & Auto-Recovery",
      desc: "Self-healing workflows automatically detect job failures, retry failed steps, and resume from checkpoints.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.39.47 PM.png",
      title: "Human-in-the-Loop Control",
      desc: "Enable manual approvals for critical workflow steps while keeping automation at the core for speed and safety.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.39.52 PM.png",
      title: "Scalable Execution Engine",
      desc: "Run thousands of concurrent workflow jobs with distributed orchestration and compute-aware task scheduling.",
    },
    {
      icon: "/Screenshot 2025-10-31 at 2.39.57 PM.png",
      title: "Auditability & Compliance",
      desc: "Built-in tracking, versioning, and logging ensure every workflow meets enterprise-grade audit and compliance standards.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Adaptive Workflow Engine",
      desc: "Dynamic DAG scheduling ensures optimal execution paths and real-time adaptation based on resource availability.",
      icon: "/vercel.svg",
    },
    {
      title: "Automated Model Lifecycle",
      desc: "From data collection to model deployment, every step can be automated, monitored, and version-controlled effortlessly.",
      icon: "/vercel.svg",
    },
    {
      title: "Integrated Notifications",
      desc: "Stay informed with Slack, email, or dashboard alerts for workflow completion, bottlenecks, or retraining events.",
      icon: "/vercel.svg",
    },
    {
      title: "Cost & Performance Optimization",
      desc: "Smart load balancing and idle resource shutdown reduce cloud costs while maintaining top-tier performance.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "85%", label: "Reduction in Manual Workflow Errors" },
    { value: "3x", label: "Faster End-to-End AI Delivery" },
  ];

  const legends = [
    { color: "#60a5fa", text: "AI Workflow Engine" },
    { color: "#a78bfa", text: "Automation & Orchestration Layer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Workflow Automation for AI Pipelines"
        subtitle="Accelerate AI operations with automated pipelines, intelligent orchestration, and real-time monitoring for every model lifecycle stage."
        buttonText="Request a Demo"
        videoSrc="/workflowAutomationAnimation.webm"
      />
            {/* Collection Section */}
            <CollectionSection data={collectionData} />
            

      {/* Logos */}
      <LogosSection
        tagText="TRUSTED BY ENTERPRISE AI TEAMS"
        heading="Streamline Complex AI Operations"
        description="Our Workflow Automation framework simplifies the orchestration of data, model, and deployment pipelines — giving your teams speed, consistency, and control."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      <QuoteSection
        quote="Automation in AI is not about replacing humans — it's about amplifying their impact."
        author="Demis Hassabis"
        designation="CEO, DeepMind"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="EFFICIENCY REDEFINED"
        title="Automate, Optimize, and Scale"
        subtitle="Our intelligent workflow automation platform eliminates repetitive tasks, freeing your teams to focus on innovation, not operations."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="We unify your ML lifecycle — from data prep to model serving — into an intelligent, automated system that ensures consistency, traceability, and performance across every deployment."
        imageSrc="/Generated Image October 31, 2025 - 2_40PM.png"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Generated Image October 31, 2025 - 2_40PM (4).png"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="AUTOMATE INTELLIGENTLY"
        title="AI Workflows That Run Themselves"
        subtitle="Empower your organization with adaptive workflow automation — ensuring seamless orchestration, minimal downtime, and faster innovation at every scale."
      />
    </>
  );
}
