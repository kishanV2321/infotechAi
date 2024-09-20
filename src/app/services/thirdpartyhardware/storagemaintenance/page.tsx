'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function StotageMaintenace() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[520px] bg-[url('https://ik.imagekit.io/kvimages/Carousel/img-4.jpg?updatedAt=1704363047379')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
                    <div className="flex flex-col items-center mx-auto px-4 pt-6 md:px-8 text-center">
                        <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Storage Maintenance & Support</h1>
                        <p className="text-white text-lg md:text-2xl mb-6">The Best in Storage Support and Maintenance.</p>
                        <div className='w-fit'>
                            <Button active={true} linkto={"/"}>Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>


            <div className='bg-slate-900 flex flex-col items-center gap-10 lg:flex-row justify-center text-white'>
                <div className="my-24 flex w-[90%] lg:w-[70%] flex-col gap-10">
                    <h1 className="bg-gradient-to-br from-[#833AB4] via-[#1dbefd] to-[#fc45d4] bg-clip-text text-4xl md:text-6xl font-semibold text-transparent text-center pb-4">
                        Storage Hardware Support
                    </h1>
                    <p className="text-base md:text-lg font-medium text-center">
                        Since 1991, Park Place Technologies has provided exceptional global service and support for data center storage hardware for OEMs like EMC, Hitachi, and NetApp. Your equipment’s uptime is our top priority. That is why we offer flexible service level agreements to meet your organization’s storage lifecycle management needs as well as live, global call centers available 24 hours a day, 7 days a week.
                    </p>
                    <p className="text-base md:text-lg font-medium text-center">
                        As experienced educators ourselves, we witnessed firsthand the
                        limitations and challenges of traditional education systems. We
                        believed that education should not be confined to the walls of a
                        classroom or restricted by geographical boundaries. We
                        envisioned a platform that could bridge these gaps and empower
                        individuals from all walks of life to unlock their full
                        potential.
                    </p>
                </div>
            </div>

            <div>
                <HowWeDevelop />
            </div>

            <div>
                <WhyChooseUs />
            </div>

            <div>
                <GlobeDemo />
            </div>
        </>
    )
}

export default StotageMaintenace