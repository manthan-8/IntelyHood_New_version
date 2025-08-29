import { WhyChooseUs } from "@/components/About";
import Feature from "@/components/Feature";
import HeroSection from "@/components/Hero";
import AnimatedTimeline from "@/components/Timeline";
import { ServiceCard } from "@/components/Service";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <ServiceCard />
      <WhyChooseUs />
      <Feature />
      <AnimatedTimeline />
    </div>
  );
}
