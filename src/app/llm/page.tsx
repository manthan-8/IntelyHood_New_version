import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function LLMTrainingData() {
  // --- Logos Section ---
  const logos = [
    { src: "/openai.svg", alt: "OpenAI" },
    { src: "/anthropic.svg", alt: "Anthropic" },
    { src: "/nvidia.svg", alt: "NVIDIA" },
    { src: "/google.svg", alt: "Google DeepMind" },
  ];

  // --- Collection Section ---
  const collectionData = [
    {
      image: "/Generated Image October 31, 2025 - 12_31PM.png",
      title: "Language & Knowledge Labs",
      description:
        "Curating linguistic, semantic, and domain-specific text data — from scientific research and enterprise documents to conversational logs.",
    },
    {
      image: "/Generated Image October 31, 2025 - 12_31PM (1).png",
      title: "Prompt & Response Generation",
      description:
        "Automated systems generate and refine diverse prompt–response pairs, supporting creative, analytical, and technical reasoning.",
    },
    {
      image: "/Generated Image October 31, 2025 - 12_32PM.png",
      title: "Human Feedback & RLHF",
      description:
        "Integrating human-in-the-loop feedback pipelines to align model behavior with human intent, values, and contextual nuance.",
    },
  ];

  // --- Features Section ---
  const featuresData = [
    {
      icon: "/Generated Image October 31, 2025 - 12_12PM.png",
      title: "High-Fidelity Text Datasets",
      desc: "We source and curate domain-specific datasets from verified, multilingual corpora to maximize linguistic precision and factual grounding.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 12_31PM (1).png",
      title: "Human-Centered Curation",
      desc: "Linguists, domain experts, and researchers continuously review data to ensure contextual accuracy, tone, and ethical representation.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 12_31PM.png",
      title: "Model Evaluation & Benchmarking",
      desc: "Integrated evaluation suite detects hallucinations, bias, and performance gaps across reasoning, summarization, and dialogue tasks.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 12_32PM.png",
      title: "Multilingual Adaptation",
      desc: "Data pipelines designed for 60+ languages — optimized for global deployment across legal, healthcare, and enterprise sectors.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 12_37PM.png",
      title: "Accelerated Model Training",
      desc: "Delivering structured, clean, and deduplicated data optimized for GPU/TPU acceleration — reducing cost and training cycles.",
    },
    {
      icon: "/Generated Image October 31, 2025 - 12_38PM.png",
      title: "Ethical AI Development",
      desc: "Every dataset is privacy-compliant, bias-tested, and aligned with responsible AI standards for transparent model behavior.",
    },
  ];

  // --- Cards Section ---
  const cards = [
    {
      title: "Expert-Led Data Annotation",
      desc: "Our expert linguists and data scientists deliver fine-grained text classification, summarization, and reasoning annotation.",
      icon: "/vercel.svg",
    },
    {
      title: "Automated Quality Control",
      desc: "AI-assisted validation and deduplication pipelines guarantee only the highest-quality text data reaches your models.",
      icon: "/vercel.svg",
    },
    {
      title: "Scalable Data Infrastructure",
      desc: "Purpose-built architecture supports billions of tokens daily — enabling rapid dataset refresh and LLM fine-tuning cycles.",
      icon: "/vercel.svg",
    },
    {
      title: "Global Expert Network",
      desc: "Collaborate with linguists, coders, and cultural specialists across 80+ regions to ensure linguistic and cultural diversity.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "200B+", label: "Tokens Curated for LLM Training" },
    { value: "100+", label: "Enterprise AI Partners Worldwide" },
  ];

  const legends = [
    { color: "#60a5fa", text: "AI Language Data Infrastructure" },
    { color: "#a78bfa", text: "Global Human-in-the-Loop Network" },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title="LLM Training Data Engine"
        subtitle="Empower your models with precision-curated, high-fidelity language data — combining automation, human expertise, and responsible AI design."
        buttonText="Request a Demo"
        videoSrc="/llmAnimation.webm"
      />
      
            {/* Collection Section */}
      <CollectionSection data={collectionData} />

      {/* Logos */}
      <LogosSection
        tagText="TRUSTED BY INDUSTRY LEADERS"
        heading="Powering the Most Advanced Large Language Models"
        description="We enable world-class AI organizations with tailored, multilingual, and ethically aligned datasets for pre-training, fine-tuning, and continuous model improvement."
      />

      {/* Features Section */}
      <FeaturesSection features={featuresData} />
      


      {/* Quote Section */}
      {/* <QuoteSection
        quote="High-quality, well-curated data isn’t just fuel for AI — it’s the architecture of intelligence itself."
        author="Dario Amodei"
        designation="Co-Founder, Anthropic"
      /> */}

      {/* Improve Data Section */}
      <ImproveDataSection
        tagText="BUILD YOUR FOUNDATION"
        title="High-Quality Data is the Backbone of LLMs"
        subtitle="Our hybrid data engine blends automation, human review, and advanced quality control to generate clean, contextual, and bias-mitigated text datasets optimized for generative performance."
      />

      {/* Split Info Section */}
      <InfoSplitSection
        title="From raw data to aligned intelligence — our pipeline spans data sourcing, de-duplication, semantic annotation, RLHF feedback, and model evaluation. Every step ensures transparency, ethics, and linguistic depth."
        imageSrc="/Generated Image October 31, 2025 - 12_37PM.png"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      {/* Cards + Stats Section */}
      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/Generated Image October 31, 2025 - 12_38PM.png"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      {/* Closing Section */}
      <ImproveDataSection
        tagText="INNOVATE"
        title="Data That Defines the Next Generation of LLMs"
        subtitle="LLM Training Data Engine transforms linguistic complexity into structured intelligence — enabling AI systems that reason, respond, and evolve with human-level understanding."
      />
    </>
  );
}
