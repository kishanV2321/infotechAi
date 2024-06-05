'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function HowWeDevelop() {
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <p className="mt-2 mx-6 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">How We Develop
Web Apps Using Agiles</p>
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
        title: "Sprint planning",
        description:
            "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
        link: "#",
    },
    {
        title: "Tech architecture",
        description:
            "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
        link: "#",
    },
    {
        title: "Stand-ups & weekly demos",
        description:
            "Stand ups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
        link: "#",
    },
    {
        title: "Code reviews",
        description:
            "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
        link: "#",
    },
    {
        title: "Deploy",
        description:
            "Deploying code is the process of moving code changes from a development environment to a production environment, where it becomes accessible to users. ",
        link: "#",
    },
    {
        title: "Manage",
        description:
            "Deploying code is the process of moving code changes from a development environment to a production environment, where it becomes accessible to users. ",
        link: "#",
    },
];


export default HowWeDevelop