import CustomerFeedback from "@/components/CustomerFeedback";
import Engineers from "@/components/Engineers";
import Footer from "@/components/Footer";
import Herosection from "@/components/HeroSection";
import HowWeDevelop from "@/components/HowWeDevelop";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased ">
      <Herosection />
      <Services />
      <CustomerFeedback />
      <HowWeDevelop />
      <Engineers />
      <Footer />
    </main>

  );
}
