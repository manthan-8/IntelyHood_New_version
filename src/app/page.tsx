import WhyChooseUs from "@/components/About";
import Clients from "@/components/Client";
import Feature from "@/components/Feature";
import HeroSection from "@/components/Hero";
import AnimatedTimeline from "@/components/Timeline";
import { ServiceCard } from "@/components/Service";
import Hero from "@/components/HeroSection";
import { Contact } from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Feature />
      <ServiceCard />
      <AnimatedTimeline />
      <Clients />
      {/* <Contact /> */}
    </>
  );
}
