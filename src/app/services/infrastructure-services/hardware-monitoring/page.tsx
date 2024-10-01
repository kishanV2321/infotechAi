'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function HarewareMonitoring() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Hardware Monitoring™ for Data Centers</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">Maximize your Uptime.</p>
                            {/* <div className='w-fit'>
                                <Button active={true} linkto={"/"}>Learn More</Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-slate-900'>
                <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white'>
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between lg:justify-center">
                        <div className='my-24 flex lg:w-[80%] flex-col gap-10'>
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#1dbefd] to-[#fc45d4] bg-clip-text text-4xl md:text-6xl font-semibold text-transparent lg:w-[80%]">
                                Maximize Your Uptime with Data Center Hardware Monitoring
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                Maximize Your Uptime with Info Tech AI&apos;s Hardware Monitoring™. Our innovative monitoring solution is designed to provide comprehensive oversight of your data center&apos;s hardware, ensuring that you maintain optimal performance at all times. With our fully automated maintenance service, we streamline the hardware support process, allowing data centers to enhance uptime and operational efficiency like never before.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Info Tech AI&apos;s Hardware Monitoring™ proactively identifies hardware events, automatically opens incident tickets, and triages issues as they arise. Once an event is detected, our skilled engineers are dispatched immediately to your data center to resolve the issue promptly. This proactive approach minimizes downtime and ensures that your data center remains fully operational, providing you with peace of mind and allowing you to focus on your core business objectives. With Info Tech AI, you can trust that your hardware is continuously monitored and expertly managed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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

export default HarewareMonitoring