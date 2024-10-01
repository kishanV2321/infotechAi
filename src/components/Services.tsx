"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import serviceData from "../data/services.json"
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

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
        <div className="py-12 bg-black">
            <div>
                <div className="text-center">
                    <h2 className="text-lg md:text-2xl text-teal-600 font-semibold tracking-wide uppercase">Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">We offer a wide range of supoort & services</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {serviceData.services.map((service) => (
                        <div key={service.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] text-white overflow-hidden h-full max-w-sm">
                                <div>
                                    <Link href={`/services/${service.slug}`}>
                                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                            <p className="text-lg sm:text-xl text-white mt-4 mb-2 ">{service.title}</p>
                                            <p className="text-sm text-neutral-200 flex-grow">{service.description}</p>
                                            <div className="flex justify-center items-center w-full text-xs pt-2 "><IoIosArrowForward /> Learn More</div>
                                        </div>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>

            </div >     
        </div >
    )
}

export default Services