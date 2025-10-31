import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function DistributedTraining() {
  // --- Logos Section ---
  const logos = [
    { src: "/nvidia.svg", alt: "NVIDIA" },
    { src: "/google.svg", alt: "Google Cloud" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/azure.svg", alt: "Microsoft Azure" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/gpu-clusters.webp",
      title: "Distributed GPU Clusters",
      description:
        "Run massive model training workloads across synchronized GPU clusters, designed for stability, speed, and resource efficiency.",
    },
    {
      image: "/parallel-compute.webp",
      title: "Parallelized Compute Pipelines",
      description:
        "Leverage advanced data and model parallelization to optimize training throughput while minimizing communication overhead.",
    },
    {
      image: "/scaling-infra.webp",
      title: "Dynamic Scaling Infrastructure",
      description:
        "Intelligently scale up or down compute resources in real time — achieving optimal performance across thousands of nodes.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "High-Performance Distributed Systems",
      desc: "Optimized compute clusters designed for seamless scaling of large language and vision models across multi-GPU environments.",
    },
    {
      icon: "/vercel.svg",
      title: "Data & Model Parallelism",
      desc: "Maximize efficiency through hybrid parallelism — combining tensor, pipeline, and data parallel techniques for balanced workload distribution.",
    },
    {
      icon: "/vercel.svg",
      title: "Fault Tolerance & Recovery",
      desc: "Our resilient architecture includes automatic checkpointing, job retries, and synchronization rollback mechanisms to prevent data loss.",
    },
    {
      icon: "/vercel.svg",
      title: "Optimized Communication Layer",
      desc: "Low-latency data transfer using NCCL, InfiniBand, and RDMA ensures consistent synchronization across multi-node clusters.",
    },
    {
      icon: "/vercel.svg",
      title: "Resource-Aware Scheduling",
      desc: "Intelligent scheduling engines allocate compute resources dynamically, preventing bottlenecks and ensuring workload balance.",
    },
    {
      icon: "/vercel.svg",
      title: "Cross-Cloud Integration",
      desc: "Unified training orchestration across AWS, Azure, and GCP — enabling flexible, hybrid distributed learning environments.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Multi-Node Synchronization",
      desc: "Ensure consistent model weight updates across clusters using frameworks like DeepSpeed, Megatron-LM, and PyTorch DDP.",
      icon: "/vercel.svg",
    },
    {
      title: "Elastic Training Management",
      desc: "Add or remove nodes dynamically without interrupting training jobs, optimizing resource usage and reducing compute costs.",
      icon: "/vercel.svg",
    },
    {
      title: "GPU Utilization Optimization",
      desc: "Fine-tuned memory and compute balancing deliver up to 40% faster training performance across multi-GPU workloads.",
      icon: "/vercel.svg",
    },
    {
      title: "Seamless Monitoring & Debugging",
      desc: "Real-time telemetry and visual dashboards provide deep visibility into node health, performance, and synchronization latency.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "10,000+", label: "GPUs Trained Concurrently" },
    { value: "95%", label: "System Uptime During Distributed Runs" },
  ];

  const legends = [
    { color: "#60a5fa", text: "Distributed Compute Network" },
    { color: "#a78bfa", text: "AI Training Orchestration Layer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="Distributed Training Infrastructure"
        subtitle="Train massive AI models efficiently using scalable, fault-tolerant, and performance-optimized distributed systems."
        buttonText="Get a Demo"
        videoSrc="/distributedTrainingAnimation.webm"
      />

      {/* Collection Section */}
      <CollectionSection data={collectionData} />
      
      {/* Logos */}
      <LogosSection
        tagText="POWERED BY GLOBAL CLOUD PARTNERS"
        heading="Optimized for Large-Scale Model Training"
        description="Our distributed training ecosystem empowers AI organizations to accelerate experimentation, reduce training time, and scale models efficiently across multi-cloud GPU environments."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />


      {/* Quote Section */}
      <QuoteSection
        quote="Scaling large models isn’t just about adding GPUs — it’s about designing systems that think in parallel."
        author="Andrew Ng"
        designation="Founder, DeepLearning.AI"
      />

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="SCALE SMARTLY"
        title="Optimized Distributed Systems for Next-Gen AI"
        subtitle="Our infrastructure automatically balances workloads, monitors performance, and ensures seamless communication between distributed compute nodes."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="Our distributed training engine combines dynamic resource allocation, synchronized checkpointing, and multi-cloud orchestration — ensuring your large-scale AI training runs are efficient, resilient, and cost-effective."
        imageSrc="/distributed-system-lab.webp"
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
        title="Train Smarter, Scale Faster"
        subtitle="Our Distributed Training Platform transforms complex compute orchestration into an intelligent, automated process — enabling efficient scaling of large AI models with precision and speed."
      />
    </>
  );
}
