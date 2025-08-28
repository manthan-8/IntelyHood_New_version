import { WhyChooseUs } from "@/components/About";
import { ServiceCard } from "@/components/Service";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Patchline</h1>
      <ServiceCard />
      <WhyChooseUs />
    </div>
  );
}
