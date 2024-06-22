'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function HowWeDevelop() {
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <p className="mt-2 mx-6 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">We offer a wide range of services to our clients</p>
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
        title: "Privacy first design",
        description:
            "Holistic approach to privacy--our own data centers across the globe, no trackers, and no sub-processors",
        link: "#",
    },
    {
        title: "Choice of deployment models",
        description:
            "Availability of on-premises and cloud models along with the flexibility of migration between them",
        link: "#",
    },
    {
        title: "360° approach to IT service management",
        description:
            "Deep native integrations with ManageEngine‘s wide spectrum of IT products",
        link: "#",
    },
    {
        title: "Preliminary assessment of support feasibility",
        description:
            "We assess the impact of our technical infrastructure support by comparing actual and expected TCOs. ",
        link: "#",
    },
    {
        title: "Focus on long-term IT support",
        description:
            "We ensure high service scalability and successfully manage long-term IT support projects.",
        link: "#",
    },
    {
        title: "Smart approach to cost optimization",
        description:
            "We can reduce your IT infrastructure costs by implementing the Infrastructure as Code approach, configuring optimal cloud consumption.",
        link: "#",
    },
];


export default HowWeDevelop