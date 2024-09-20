'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Kishan Verma',
      designation: 'Front-end',
      image:
        'https://ik.imagekit.io/kvimages/TeamMember/profile%20kv.png?updatedAt=1716986017946',
    },
    {
      id: 2,
      name: 'Abhsihek',
      designation: 'Java Backend',
      image:
        'https://ik.imagekit.io/kvimages/TeamMember/kishan.jpg?updatedAt=1716986017541',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
        '',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:
        '',
    },
  ];

function Engineers() {
  
  return (
    <div className="bg-black relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Engineers</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">We assist you in innovating and making digital technology work for you perennially. Our team of digital experts assists you with human-centric design, development, testing, and consulting to help you transform everyday experiences.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Engineers