import { WhyChooseUs } from "@/components/About";
import HeroSection from "@/components/Hero";
import AIShowcase from "@/components/Pricing";
import { ServiceCard } from "@/components/Service";

export default function Home() {
  return (
    <div >
      
      <HeroSection />
      <ServiceCard />
      <WhyChooseUs />
      <AIShowcase />
    </div>
  );
}
