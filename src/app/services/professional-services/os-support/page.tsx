'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function OSsupport() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/os_support_and_service_95131c78-6844-4e2b-b057-94c1dc62ae11.png?updatedAt=1727778919455')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">OS Support and Management</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">With Microsoft Windows enjoy the ease of installation and also the benefits of virtualization, scalability of Windows.</p>
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
                                With the right partner you make the right choice of tending to the various support needs for your organization
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                Unlock the full potential of your operating systems with Digital4India specialized support and management services. Whether you rely on Linux, Windows, or databases such as Oracle and MS SQL, our tailored solutions ensure that your systems run at optimal performance with robust security. We provide comprehensive OS support, offering everything from installation and configuration to ongoing maintenance and performance monitoring, ensuring that your systems remain efficient and secure.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our expert team collaborates with you to deliver OS support services designed to meet your specific needs. Whether it’s integrating with Windows Azure, Azure Stack, or adopting the latest technologies in the market, we ensure that your infrastructure is optimized to drive maximum productivity. With proactive management and advanced troubleshooting, we help you mitigate risks and minimize downtime, so you can focus on growing your business with the confidence that your operating systems are in capable hands.
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

export default OSsupport