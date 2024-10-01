'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function VMware() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">VMware Technical Support</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in VMware Technical Support.</p>
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
                                Third Party Technical VMware Support
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, our third-party technical support for VMware offers a comprehensive alternative to manufacturer services, ensuring that your VMware environment remains stable and efficient. We provide an improved and collaborative approach to addressing software, operating system, hypervisor, and compatibility issues affecting your supported VMware devices. Our team of experienced technicians is dedicated to reviewing, advising, and resolving any concerns promptly, allowing you to focus on your core business objectives without disruptions.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                By choosing Info Tech AI for your VMware support needs, you can save 30-40% compared to existing Broadcom/VMware licenses while receiving top-tier service. Our commitment to delivering exceptional support means that you gain access to a wealth of knowledge and expertise, ensuring that your VMware infrastructure operates at peak performance. Trust Info Tech AI to be your reliable partner in navigating the complexities of your VMware environment, providing you with the peace of mind and cost savings that come from expert support.
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

export default VMware