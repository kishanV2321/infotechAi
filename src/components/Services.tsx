"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import serviceData from "../data/services.json"
import Link from "next/link";

//define types in typescript
// interface Service{
//             id: number,
//             title: string,
//             slug: string,
//             description: string,
//             price: number,
//             instructor: string,
//             isFeatured: true,
//             image: string
// }

function Services() {
    
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">We offer a wide range of Development services</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {serviceData.services.map((service)=> (
                    <div key={service.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{service.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{service.description}</p>
                                {/* <Link href={`/services/${service.slug}`}>
                                Learn More
                                </Link> */}
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

            </div>
            <div className="mt-20 text-center">
                <Link href={"/contact"}>
                    <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                    Contact Us
                </button>
                </Link>
            </div>
            <div className="mt-16 text-center">
                <h2 className="text-xl text-teal-600 font-semibold tracking-wide uppercase">Benefits of Working with
                    Us</h2>
                <p className="mt-2 mx-4 sm:mx-20 text-base leading-8 font-medium sm:font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">Building scalable web apps using modern frameworks, structured architecture patterns, and user-centric UI/UX designs are the things that differentiate us from our competitors. In a nutshell, our custom web application development services are a promised commitment to quality and on-time delivery.</p>
            </div>
        </div>
    )
}

export default Services