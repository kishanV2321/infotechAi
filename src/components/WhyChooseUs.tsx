"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Comprehensive IT Solutions Tailored to Your Needs",
        description:
            "With years of experience, we deliver customized IT services that optimize your infrastructure and drive business success across various industries.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-comprehensiveIT.webp?updatedAt=1716978587720"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="comprehensive IT solutions"
                />
            </div>
        ),
    },
    {
        title: "Expert Team Dedicated to Your Success",
        description:
            "Our team of seasoned professionals brings extensive knowledge and expertise, ensuring effective support and seamless integration of IT services.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-expertTeam.webp?updatedAt=1716978587470"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="expert IT team"
                />
            </div>
        ),
    },
    {
        title: "Proactive Monitoring and Support",
        description:
            "Our proactive fault detection and monitoring ensure minimal downtime, allowing your operations to run smoothly and efficiently at all times.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-proactiveMonitoring.webp?updatedAt=1716978587554"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="proactive IT monitoring"
                />
            </div>
        ),
    },
    {
        title: "Customized Solutions for Every Business",
        description:
            "We understand that every business is unique. Our flexible solutions are designed to meet your specific needs and scale as you grow.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://ik.imagekit.io/kvimages/TechService/ill-customizedSolutions.webp?updatedAt=1716978587554"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="customized IT solutions"
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