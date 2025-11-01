import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import ModelTrainingFlow from "../../components/PageComponents/PageModelTrainingFlow";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";

export default function genai() {
    
  const handleDemoClick = () => {
    alert("Demo booked successfully!");
  };

    const logos = [
    { src: "/window.svg", alt: "Meta" },
    { src: "/window.svg", alt: "Cohere" },
    { src: "/vercel.svg", alt: "Adept" },
    { src: "/genAi.jpg", alt: "NTT" },
  ];
   const cards = [
    {
      title: "Language Competency",
      desc: "Native English (US or UK based) and support for over 80 languages",
      icon: "/vercel.svg",
    },
    {
      title: "Coding and STEM Expertise",
      desc: "Ranges from undergraduate to PhD",
      icon: "/vercel.svg",
    },
    {
      title: "Other Domains",
      desc: "Including Law, Medicine, Finance, Agriculture, etc.",
      icon: "/vercel.svg",
    },
    {
      title: "Math Expertise",
      desc: "Primarily PhD graduates with Math related degrees",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "20+", label: "Speciality Domains" },
    { value: "80+", label: "Languages" },
  ];

  const legends = [
    { color: "#a78bfa", text: "Scale Smart workspace also available" },
    { color: "#6b7280", text: "Notable Scale Global Presence" },
  ];

 const featuresData = [
  {
    icon: "/Screenshot 2025-10-31 at 12.01.54 PM.png",
    title: "Ops Center for Data Integrity",
    desc: "Gain real-time visibility and control over every step of dataset creation, validation, and optimization.",
  },
  {
    icon: "/Screenshot 2025-10-31 at 12.01.58 PM.png",
    title: "Global Expert Network",
    desc: "Tap into a vetted ecosystem of linguists, engineers, and domain specialists — delivering data precision across every language, industry, and modality.",
  },
  {
    icon: "/Screenshot 2025-10-31 at 12.02.02 PM.png",
    title: "Model Performance Boost",
    desc: "Empower your Generative AI with advanced, high-quality data pipelines built for scalability and precision.",
  },
  {
    icon: "/Screenshot 2025-10-31 at 12.02.06 PM.png",
    title: "Data Efficiency at Scale",
    desc: "Accelerate dataset generation with intelligent automation and human-in-the-loop efficiency.",
  },
  {
    icon: "/Screenshot 2025-10-31 at 12.02.09 PM.png",
    title: "Continuous Model Evaluation",
    desc: "Identify blind spots and enhance model resilience through proactive benchmarking and red-teaming.",
  },
  {
    icon: "/Screenshot 2025-10-31 at 12.02.12 PM.png",
    title: "Responsible AI Development",
    desc: "Ensure every dataset aligns with ethical standards — prioritizing fairness, transparency, and data privacy.",
  },
];
   
  return (
    <div className="flex flex-col">
      
        <PageHeroSection
        title="Generative AI Data Engine"
        subtitle="Powering the Next Wave of Intelligent Systems"
        buttonText="Book a Demo"
        videoSrc="/A_hypercinematic_8second_202510301704.mp4"
      />
      
      <LogosSection
      tagText="PRODUCT OVERVIEW"
      heading="Generative AI Data Engine"
      description="Unleash the full potential of your AI with hyper-curated, high-fidelity datasets — engineered by a fusion of human expertise and AI automation. Our Generative AI Data Engine accelerates dataset creation, ensuring every model you build is smarter, faster, and more adaptive."
    />
    <ModelTrainingFlow
        title="Model Training Flow"
        imageSrc="/Generated Image October 31, 2025 - 5_47PM.png"
        note="Pre-Training, Post-Training, and Deployment are managed by customers"
      />

       <QuoteSection
        quote="In the world of Generative AI, the quality of your model depends entirely on the quality of your data. Our platform provides meticulously curated, domain-specific datasets designed to fuel your AI’s growth and performance. With precision, scalability, and adaptability at its core, we help you train high-performing models that generate accurate, context-aware, and innovative outcomes — turning your data into true intelligence."
        author=""
        designation=""
      />

       <InfoSplitSection
        title="Generative AI Data Engine seamlessly integrates advanced automation with human-in-the-loop intelligence to deliver high-fidelity, domain-optimized training data — precisely aligned with your AI vision, accelerating innovation and model excellence at scale."
        imageSrc="/Generated Image October 31, 2025 - 11_56AM.png"
      />
      <ImproveDataSection
        tagText="BUILD AI"
        title="Improve Your Models By Improving Your Data"
        subtitle="High-quality training data, curated by subject matter experts, is crucial for developing powerful, accurate, Generative AI models."
      />

     <FeaturesSection features={featuresData} />
      
    {/* <QuoteSection
        quote="The Future of AI Starts Here"
        author="Reimagine what’s possible when data, automation, and intelligence converge.
Your next breakthrough model begins with the right data engine."
        designation=""
      /> */}



    </div>
  );
}