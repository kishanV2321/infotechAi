"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Progressive web applications using modern frameworks",
        description:
            "We have over a decade of experience in building world-class B2B and B2C applications focusing on M&E, Healthcare, Fintech, Transportation, RTC, AdTech, e-Learning, and data analytics.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-fremework.webp?updatedAt=1716978587720"
                    width={300}
                    height={300}
                    className="h-full w-full object-ceontain"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Structured architectural patterns for developing systems at scale",
        description:
            "We help build large scale web applications adhering to Google’s definition of “progressiveness”, making them fast even on 2G networks, offline-available and easily installable across devices.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-progressivess.webp?updatedAt=1716978587470"
                    width={300}
                    height={300}
                    className="h-full w-full object-ceontain"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Great web apps start with great front-end",
        description:
            "Slow load times, poor performance, and dated UX design can impact your bottom line. Your business depends on providing differentiated and engaging experiences.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/iil-webapp-great.webp?updatedAt=1716978587554"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="linear board demo"
                />
            </div>
        ),
    }, {
        title: "Navigate web complexities with experienced consultants",
        description:
            "There are a lot of firms that can build web apps. But there are few who can develop world-class web apps that will drive results. Our team coaches you through every tech decision critical to you.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-newesttechno.webp?updatedAt=1716978926545"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="linear board demo"
                />
            </div>
        ),
    },

];

function WhyChooseUs() {

    return (
        <div className="bg-slate-900">
            <div className=" bg-gradient-to-br from-[#7e1fbd] via-[#4a56fd] to-[#fc45d4] bg-clip-text text-4xl md:text-6xl font-semibold text-transparent text-center py-12">
                Why Choose Us
            </div>
            <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs