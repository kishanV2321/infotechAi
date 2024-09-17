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
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">We offer a wide range of supoort & services</p>
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
            {/* <div className="mt-16 text-center">
                <h2 className="text-lg sm:text-xl mx-4 text-teal-600 font-semibold tracking-wide uppercase">Benefits of Working with
                    Us</h2>
                <p className="mt-2 mx-6 sm:mx-20 text-sm leading-8 font-medium sm:font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">Imagine a robust infrastructure where hardware, software, network, storage, firewall, and backup systems seamlessly integrate, ensuring your business runs smoothly and efficiently, 24/7.</p>
            </div> */}
        </div>
    )
}

export default Services