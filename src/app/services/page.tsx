'use client'

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import serviceData from "@/data/services.json"

function Service() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-4xl text-center font-sans font-semibold mb-8 text-white">All Services ({serviceData.services.length})</h1>

            <div className="flex flex-wrap justify-center">
                {serviceData.services.map((service) => (
                    <CardContainer key={service.id} className="inter-var m-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {service.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {service.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={service.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={`/services/${service.slug}`}
                                    // target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Read More →
                                </CardItem>
                                {/* <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    $499
                                </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default Service