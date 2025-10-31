import PageHeroSection from "../../components/PageComponents/PageHeroSection";
import LogosSection from "../../components/PageComponents/PageLogoSection";
import QuoteSection from "../../components/PageComponents/PageQuoteSection";
import InfoSplitSection from "../../components/PageComponents/PageInfoSplitSection";
import ImproveDataSection from "../../components/PageComponents/PageImproveDataSection";
import FeaturesSection from "../../components/PageComponents/PageFeatures";

export default function physicalai() {
    const logos = [
        { src: "/window.svg", alt: "Boston Dynamics" },
        { src: "/window.svg", alt: "NVIDIA" },
        { src: "/vercel.svg", alt: "Tesla" },
        { src: "/genAi.jpg", alt: "NTT Data" },
    ];

    const collectionData = [
        {
            image: "/robotics-lab.webp",
            title: "Robotics Labs",
            description:
                "Precision-controlled environments for motion, sensor, and perception data collection.",
        },
        {
            image: "/edge-sensors.webp",
            title: "Edge & Sensor Networks",
            description:
                "Distributed IoT and computer vision data pipelines from real-world devices.",
        },
        {
            image: "/industrial-ai.webp",
            title: "Industrial & Manufacturing",
            description:
                "AI data collected from production lines, quality control systems, and smart factories.",
        },
    ];

    const featuresData = [
        {
            icon: "/Screenshot 2025-10-31 at 1.27.07 PM.png",
            title: "Real-World Data at Scale",
            desc: "Collect, process, and refine multimodal data — from sensors, cameras, and robotics — with global reach and precision.",
        },
        {
            icon: "/Screenshot 2025-10-31 at 1.27.12 PM.png",
            title: "Human-in-the-Loop Precision",
            desc: "Combine automated pipelines with domain experts for labeling, QA, and continuous improvement.",
        },
        {
            icon: "/Screenshot 2025-10-31 at 1.27.16 PM.png",
            title: "Simulation + Reality Integration",
            desc: "Leverage digital twins and physics-based simulations to complement physical-world datasets.",
        },
        {
            icon: "/Screenshot 2025-10-31 at 1.27.19 PM.png",
            title: "Autonomy-Ready Data",
            desc: "Purpose-built for robotics, autonomous vehicles, drones, and smart devices that rely on accurate, dynamic data.",
        },
        {
            icon: "/Screenshot 2025-10-31 at 1.27.26 PM.png",
            title: "Accelerated Model Training",
            desc: "Feed your models with real-time, structured, and verified data streams optimized for faster training cycles.",
        },
        {
            icon: "/Screenshot 2025-10-31 at 1.27.31 PM.png",
            title: "Responsible AI at the Edge",
            desc: "Designed for safety, privacy, and ethical AI deployment in the physical world.",
        },
    ];

    const cards = [
        {
            title: "Robotics Expertise",
            desc: "Collaborate with engineers experienced in robotics, motion planning, and embedded AI systems.",
            icon: "/vercel.svg",
        },
        {
            title: "Sensor Fusion Specialists",
            desc: "Experts in combining multimodal data — visual, audio, LIDAR, GPS, and telemetry — for model accuracy.",
            icon: "/vercel.svg",
        },
        {
            title: "Industrial & Autonomous Domains",
            desc: "Extensive experience across autonomous vehicles, drones, logistics, and smart manufacturing.",
            icon: "/vercel.svg",
        },
        {
            title: "Data Annotation Excellence",
            desc: "Human-in-the-loop annotation with precision QA for complex, dynamic real-world scenarios.",
            icon: "/vercel.svg",
        },
    ];

    const stats = [
        { value: "10M+", label: "Sensor Data Points Processed Daily" },
        { value: "40+", label: "Active Robotics & Industrial Partners" },
    ];

    const legends = [
        { color: "#a78bfa", text: "AI Smart Workspace Integration" },
        { color: "#6b7280", text: "Global Physical Data Network Presence" },
    ];

    return (
        <>
            <PageHeroSection
                title="Physical AI Data Engine"
                subtitle="Bridging the Physical and Digital Worlds with Intelligent Data."
                buttonText="Book a Demo"
                imageSrc=""
            />

            <LogosSection
                tagText="PRODUCT OVERVIEW"
                heading="Physical AI Data Engine"
                description="Physical AI Data Engine captures and curates high-quality real-world data to train AI models that interact, perceive, and make decisions in the physical world."
            />
            
            
            <FeaturesSection features={featuresData} />

            <QuoteSection
                quote="The future of intelligence is physical. AI must not only understand the world — it must move through it, interact with it, and learn from it in real time."
                author="Sam Altman"
                designation="CEO, OpenAI"
            />

            <ImproveDataSection
                tagText="BUILD AI"
                title="Smarter Data for Smarter Machines"
                subtitle="Physical AI depends on diverse, accurate, and dynamic datasets collected from real-world environments — enabling robots, drones, and devices to truly understand and respond to the world around them."
            />

            <InfoSplitSection
                title="Our hybrid model integrates automated pipelines, simulation tools, and expert review to deliver verified physical data for enterprise-scale AI applications — from autonomous systems to industrial robotics."
                imageSrc="/Generated Image October 31, 2025 - 12_12PM.png"
                reverse
                backgroundColor="bg-[#0a0a0a]"
                gradientFrom="from-gray-900"
                gradientTo="to-black"
            />

            <ImproveDataSection
                tagText="INNOVATE"
                title="From Sensors to Intelligence"
                subtitle="Manthan transforms raw physical-world data into structured, model-ready intelligence — empowering breakthroughs in robotics, computer vision, and edge AI."
            />
        </>
    );
}
