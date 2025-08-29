import { WhyChooseUs } from "@/components/About";
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
    </div>
  );
}
