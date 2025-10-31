import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function ModelInferenceAPI() {
  // --- Logos Section ---
  const logos = [
    { src: "/openai.svg", alt: "OpenAI" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/gcp.svg", alt: "Google Cloud" },
    { src: "/azure.svg", alt: "Microsoft Azure" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/real-time-inference.webp",
      title: "Real-Time Model Inference",
      description:
        "Serve predictions with millisecond latency across distributed inference endpoints, optimized for scalability and reliability.",
    },
    {
      image: "/scalable-serving.webp",
      title: "Scalable Model Serving",
      description:
        "Auto-scale inference workloads dynamically based on traffic, model size, and concurrent user demand across cloud regions.",
    },
    {
      image: "/secure-api.webp",
      title: "Secure, Production-Ready APIs",
      description:
        "Deliver AI models through enterprise-grade REST and gRPC APIs secured with encryption, authentication, and rate limiting.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "Ultra-Low Latency APIs",
      desc: "Deploy models with sub-100ms response times using optimized runtime environments and GPU-accelerated inference layers.",
    },
    {
      icon: "/vercel.svg",
      title: "Multi-Model Endpoints",
      desc: "Host multiple models under unified APIs, enabling smart routing and A/B testing across different model versions.",
    },
    {
      icon: "/vercel.svg",
      title: "Auto-Scaling Infrastructure",
      desc: "Our inference engine dynamically scales compute instances to meet demand, ensuring consistent performance at any load.",
    },
    {
      icon: "/vercel.svg",
      title: "Streaming Inference Support",
      desc: "Enable token-level or frame-level streaming for conversational and vision-based models with real-time response delivery.",
    },
    {
      icon: "/vercel.svg",
      title: "Customizable Deployment Options",
      desc: "Deploy models across cloud, edge, or on-prem environments — optimized for privacy, cost, and performance.",
    },
    {
      icon: "/vercel.svg",
      title: "Monitoring & Usage Analytics",
      desc: "Track API usage, latency, error rates, and model drift through detailed dashboards and automated reports.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Optimized Runtime Engines",
      desc: "Leverage TensorRT, ONNX Runtime, and TorchServe for high-throughput, GPU-accelerated inference delivery.",
      icon: "/vercel.svg",
    },
    {
      title: "Versioned API Management",
      desc: "Maintain multiple model versions seamlessly with traffic splitting, rollback options, and schema versioning.",
      icon: "/vercel.svg",
    },
    {
      title: "Edge & Hybrid Inference",
      desc: "Deploy models closer to end-users at the edge for faster response times and reduced bandwidth consumption.",
      icon: "/vercel.svg",
    },
    {
      title: "Security & Compliance",
      desc: "Ensure every API call adheres to enterprise standards with encryption, access control, and compliance logging.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "99.99%", label: "API Uptime Across All Regions" },
    { value: "<100ms", label: "Average Inference Latency" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Inference Gateway" },
    { color: "#a78bfa", text: "Distributed Model Serving Layer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Model Inference API Platform"
        subtitle="Deliver fast, reliable, and secure AI predictions with our scalable inference API infrastructure built for production environments."
        buttonText="Request Access"
        videoSrc="/modelInferenceAnimation.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="DEPLOYED BY GLOBAL AI TEAMS"
        heading="Enterprise-Grade AI Inference Infrastructure"
        description="Our Model Inference API framework enables real-time prediction serving, elastic scaling, and intelligent monitoring — so your models stay responsive, reliable, and ready for production."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      

      {/* Quote Section */}
      <QuoteSection
        quote="The intelligence of your AI depends not just on the model — but on how fast and reliably it delivers insights."
        author="Sundar Pichai"
        designation="CEO, Google"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="DEPLOY AT SCALE"
        title="Instant Inference, Infinite Scalability"
        subtitle="Deploy any model, anywhere. Our infrastructure automatically optimizes for speed, cost, and reliability — from edge devices to large-scale cloud clusters."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Our inference layer unifies GPU acceleration, intelligent caching, and auto-scaling — ensuring every model prediction is delivered with maximum efficiency and minimum latency."
        imageSrc="/inference-lab.webp"
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
        tagText="PREDICT FASTER"
        title="Scalable APIs for Every AI Model"
        subtitle="Our Model Inference API delivers low-latency, high-throughput predictions — powering intelligent applications with speed, precision, and confidence."
      />
    </>
  );
}
