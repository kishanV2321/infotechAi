'use client'

import CustomerFeedback from "@/components/CustomerFeedback";
import Engineers from "@/components/Engineers";
import Footer from "@/components/Footer";
import Herosection from "@/components/HeroSection";
import HowWeDevelop from "@/components/HowWeDevelop";
import Services from "@/components/Services";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  // Modify body overflow when the component is mounted (client-side)
  // useEffect(() => {
  //   document.body.style.overflow = "hidden"; // Prevent scrolling
  //   return () => {
  //     document.body.style.overflow = "auto"; // Reset scrolling when the component is unmounted
  //   };
  // }, []);

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
