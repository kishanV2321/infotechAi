'use client'

import Engineers from "@/components/Engineers";
import Footer from "@/components/Footer";
import Herosection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import OurCommitment from "@/components/OurCommitment";

export default function Home() {

  return (
    <main className="min-h-screen bg-black/[.96] antialiased ">
      <Herosection />
      <Services />
      <OurCommitment />
      <Testimonials />
      <Engineers />
    </main>

  );
}
