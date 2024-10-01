'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function HowWeDevelop() {
    
    return (
        <div className="py-12 bg-gradient-to-br from-[#132f53] via-[#000000] to-[#54175a]">
            <div>
                <div className="text-center">
                    <p className="mt-2 mx-6 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">What It Means For You</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>

        </div>
    )
}

export const projects = [
    {
        title: "Proactive Fault Protection",
        description:
            "Our comprehensive monitoring solutions identify IT infrastructure faults 24/7, ensuring uninterrupted operations without customer intervention.",
        link: "#",
    },
    {
        title: "Faster Issue Resolution",
        description:
            "Informed alerts enable prepared responses, increasing the rate of first-time fixes and minimizing system downtime.",
        link: "#",
    },
    {
        title: "Fully Supported Monitoring",
        description:
            "We support a wide range of IT components, including servers, storage, and networking equipment from all major OEM vendors.",
        link: "#",
    },
    {
        title: "Swift Response and Resolution",
        description:
            "Issues detected prompt instant ticket generation for immediate action, ensuring quick repairs and minimal disruption.",
        link: "#",
    },
    {
        title: "Enhanced Security Measures",
        description:
            "Security measures tailored to your organization ensure sensitive data remains secure and uncompromised during monitoring.",
        link: "#",
    },
    {
        title: "Seamless Implementation Process",
        description:
            "Our monitoring solutions include consultative implementation for smooth integration with your existing IT staff and systems.",
        link: "#",
    },
    {
        title: "Accurate Incident Reporting",
        description:
            "Every ticket generated includes essential details like equipment type, serial numbers, and fault descriptions for efficient management.",
        link: "#",
    },
    {
        title: "Non-Disruptive Monitoring",
        description:
            "Automated detection and ticketing allow your IT team to focus on strategic initiatives rather than routine monitoring tasks.",
        link: "#",
    },
    {
        title: "Comprehensive Product Support",
        description:
            "We support a broad spectrum of IT infrastructure, covering all server, storage, and networking equipment from trusted OEM partners.",
        link: "#",
    },
];


export default HowWeDevelop