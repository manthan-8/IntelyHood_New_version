import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";
import CollectionSection from "../../components/PageComponents/Collection";
import CardsSection from "../../components/PageComponents/Card";

export default function CustomerSuccess() {
  const logos = [
    { src: "/zendesk.svg", alt: "Zendesk" },
    { src: "/hubspot.svg", alt: "HubSpot" },
    { src: "/intercom.svg", alt: "Intercom" },
    { src: "/slack.svg", alt: "Slack" },
  ];

  const collectionData = [
    {
      image: "/customer-insights.webp",
      title: "Customer Insights & Analytics",
      description:
        "Understand customer behavior deeply using AI-driven analytics and real-time feedback systems.",
    },
    {
      image: "/omnichannel-support.webp",
      title: "Omnichannel Engagement",
      description:
        "Deliver consistent and personalized experiences across web, mobile, chat, and social platforms.",
    },
    {
      image: "/retention-strategies.webp",
      title: "Retention & Loyalty Programs",
      description:
        "Boost customer lifetime value with predictive retention models and personalized loyalty strategies.",
    },
  ];

  const featuresData = [
    {
      icon: "/vercel.svg",
      title: "Data-Driven Decision Making",
      desc: "Leverage analytics and customer data to improve engagement and satisfaction.",
    },
    {
      icon: "/vercel.svg",
      title: "AI-Powered Support",
      desc: "Use intelligent chatbots and automation to deliver faster, smarter, and more personalized responses.",
    },
    {
      icon: "/vercel.svg",
      title: "Feedback Loops",
      desc: "Gather, analyze, and act on customer feedback to continuously improve products and services.",
    },
    {
      icon: "/vercel.svg",
      title: "Customer Journey Mapping",
      desc: "Visualize and optimize the complete customer lifecycle from acquisition to retention.",
    },
    {
      icon: "/vercel.svg",
      title: "CRM Integration",
      desc: "Integrate seamlessly with Salesforce, HubSpot, and other CRM tools to centralize insights.",
    },
    {
      icon: "/vercel.svg",
      title: "24/7 Support Enablement",
      desc: "Empower your support team with automation and real-time dashboards for better performance.",
    },
  ];

  const cards = [
    {
      title: "Customer Experience Analytics",
      desc: "Uncover trends and improve satisfaction through real-time engagement analytics.",
      icon: "/vercel.svg",
    },
    {
      title: "AI Chatbots",
      desc: "Enhance user interactions with conversational AI built for accuracy and empathy.",
      icon: "/vercel.svg",
    },
    {
      title: "Retention Optimization",
      desc: "Identify churn risks and take proactive measures with data-backed insights.",
      icon: "/vercel.svg",
    },
    {
      title: "Feedback Management",
      desc: "Collect and analyze feedback efficiently to close experience gaps.",
      icon: "/vercel.svg",
    },
  ];

  const stats = [
    { value: "92%", label: "Average Customer Retention Rate" },
    { value: "3x", label: "Faster Response Time" },
  ];

  const legends = [
    { color: "#FF7E67", text: "Customer Insights" },
    { color: "#FFC947", text: "Engagement & Retention" },
  ];

  return (
    <>
      <PageHeroSection
        title="Customer Success Solutions"
        subtitle="Empower your teams to deliver exceptional experiences and long-term customer loyalty through smart engagement tools."
        buttonText="Explore Solutions"
        videoSrc="/customerSuccessHero.webm"
      />
      
      <CollectionSection data={collectionData} />

      <LogosSection
        tagText="TRUSTED BY CUSTOMER-FIRST BRANDS"
        heading="Turn Customers Into Advocates"
        description="We help businesses deliver personalized, consistent, and delightful experiences that drive retention and advocacy."
      />

      <FeaturesSection features={featuresData} />

      <QuoteSection
        quote="Customer success is about more than service — it’s about creating value at every interaction."
        author="Brian Halligan"
        designation="CEO, HubSpot"
      />

      <ImproveDataSection
        tagText="EMPOWER YOUR CUSTOMER EXPERIENCE"
        title="Make Every Interaction Meaningful"
        subtitle="We help you understand, engage, and retain your customers with intelligent, data-driven success strategies."
      />

      <InfoSplitSection
        title="Our customer success framework combines technology, analytics, and empathy to turn every customer into a long-term partner."
        imageSrc="/customer-support-team.webp"
        reverse
        backgroundColor="bg-[#0a0a0a]"
        gradientFrom="from-gray-900"
        gradientTo="to-black"
      />

      <CardsSection
        cards={cards}
        stats={stats}
        mapImageSrc="/global-map-light.svg"
        legends={legends}
        backgroundColor="bg-black"
        textColor="text-white"
      />

      <ImproveDataSection
        tagText="DRIVE GROWTH THROUGH SATISFACTION"
        title="Deliver Experiences That Keep Customers Coming Back"
        subtitle="Empower your customer success teams with modern, data-driven tools designed to build trust, loyalty, and long-term relationships."
      />
    </>
  );
}
