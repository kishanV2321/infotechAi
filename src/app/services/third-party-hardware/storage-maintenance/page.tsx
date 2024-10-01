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
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/data_center_support_946b4315-302e-4f04-bbfb-1995b76ab24e.png?updatedAt=1727778917062')] bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Storage Maintenance & Support</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in Storage Support and Maintenance.</p>
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
                                Storage Hardware Support
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, we understand that your storage systems are critical to your business operations. Our dedicated team is committed to maximizing the uptime of your equipment through tailored storage maintenance and support solutions. We provide flexible service level agreements designed to align with your organization’s unique storage lifecycle management needs, ensuring that you receive the right level of service at the right time. With our proactive monitoring and preventative maintenance strategies, we aim to minimize disruptions and keep your data accessible when you need it most.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                In addition to our customized maintenance plans, we offer 24/7 support through our global call centers, ensuring that expert assistance is always just a phone call away. Whether you face unexpected issues or require guidance on optimizing your storage solutions, our knowledgeable technicians are ready to help. With Info Tech AI by your side, you can focus on driving your business forward, knowing that your storage systems are in capable hands.
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

export default StotageMaintenace