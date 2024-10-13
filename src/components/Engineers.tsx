'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Profile1 from "../asset/employee/girl_profile.jpg"
import Profile2 from "../asset/employee/ajeet_pic.jpg"
import Profile3 from "../asset/employee/profile.png"
import Profile4 from "../asset/employee/profile_kv.png"

const instructors = [
    {
      id: 1,
      name: 'Shalu Rani',
      designation: 'MD(IT Infra Adviser)',
      image: Profile1,
    },
    {
      id: 2,
      name: 'Ajeet Kumar',
      designation: 'IT Consultant',
      image: Profile2,
    },
    {
      id: 3,
      name: 'Nitin Kumar',
      designation: 'Cloud Specialist',
      image: Profile3,
    },
    {
      id: 4,
      name: 'Kishan Verma',
      designation: 'IT Developer',
      image: Profile4,
    },
  ];

function Engineers() {
  
  return (
    <div className="bg-black relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Engineers</h2>
            <p className="text-base md:text-lg text-white text-center mb-4 px-3">We empower your organization to harness innovative IT solutions that drive success. Our team of experts provides tailored design, development, support, and consulting services, helping you transform your technology landscape for optimal performance and reliability.</p>
            <div className="flex flex-row items-center justify-center mt-4 mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Engineers