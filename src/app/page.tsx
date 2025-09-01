import { WhyChooseUs } from "@/components/About";
import Clients from "@/components/Client";
import Feature from "@/components/Feature";
import HeroSection from "@/components/Hero";
import AnimatedTimeline from "@/components/Timeline";
import { ServiceCard } from "@/components/Service";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCard />
      <WhyChooseUs />
      <Feature />
      <AnimatedTimeline />
      <Clients />
    </>
  );
}
