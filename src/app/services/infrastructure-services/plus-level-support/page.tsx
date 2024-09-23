'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function PlusLevelSupport() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[520px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 pt-6 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Full Level Support</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in Full Level Support and Service.</p>
                            <div className='w-fit'>
                                <Button active={true} linkto={"/"}>Learn More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='bg-slate-900 flex flex-col items-center gap-10 lg:flex-row justify-center text-white'>
                <div className="my-24 flex w-[90%] lg:w-[70%] flex-col gap-10">
                    <h1 className="bg-gradient-to-br from-[#833AB4] via-[#1dbefd] to-[#fc45d4] bg-clip-text text-4xl md:text-6xl font-semibold text-transparent text-center pb-4">
                        Cloud Support and Service
                    </h1>
                    <p className="text-base md:text-lg font-medium text-center">
                        Since 1991, Park Place Technologies has provided exceptional global service and support for data center storage hardware for OEMs like EMC, Hitachi, and NetApp. Your equipments uptime is our top priority. That is why we offer flexible service level agreements to meet your organizations storage lifecycle management needs as well as live, global call centers available 24 hours a day, 7 days a week.
                    </p>
                    <p className="text-base md:text-lg font-medium text-center">
                        Imagine a future where IT infrastructures can monitor themselves, predict and respond to future business needs, and protect and heal themselves. Our Cloud Support and Service for Azure, AWS, and GCP empowers your business with cutting-edge cloud technology and expert guidance.
                    </p>
                </div>
            </div>

            <div>
                <HowWeDevelop />
            </div>

            <div>
                <WhyChooseUs />
            </div>

            <div className=''>
                <GlobeDemo />
            </div>
        </>
    )
}

export default PlusLevelSupport