'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function NetworkMaintenance() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/4380747.jpg?updatedAt=1719040473057')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Network Maintenance Service</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in Network Maintenance Service.</p>
                            {/* <div className='w-fit'>
                                <Button active={true} linkto={"/"}>Learn More</Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-slate-900'>
                <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white'>
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#1dbefd] to-[#fc45d4] bg-clip-text text-4xl md:text-6xl font-semibold text-transparent lg:w-[70%]">
                                Network Maintenance
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, we specialize in delivering top-tier support and maintenance for your network hardware, ensuring seamless connectivity and performance across your organization. Whether it's your wireless access point, fiber channel switch, firewall appliance, or any other critical network component that has reached the end of its initial warranty, our expert team is here to provide world-class optimization and support services.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our cost-effective network equipment maintenance services not only enhance the reliability of your infrastructure but also help you consolidate support across various OEMs. By choosing Info Tech AI, you can potentially save 30-40% on your network maintenance costs while ensuring that your systems are always running at their best. Let us handle the complexities of your network hardware support, so you can focus on what matters most: driving your business forward.
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

export default NetworkMaintenance