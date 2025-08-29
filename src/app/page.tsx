import { WhyChooseUs } from "@/components/About";
import Clients from "@/components/Client";
import Feature from "@/components/Feature";
import HeroSection from "@/components/Hero";
import { ServiceCard } from "@/components/Service";

export default function Home() {
  return (
    <div >
      
      <HeroSection />
      <ServiceCard />
      <WhyChooseUs />
      <Feature />
      <Clients />
    </div>
  );
}
