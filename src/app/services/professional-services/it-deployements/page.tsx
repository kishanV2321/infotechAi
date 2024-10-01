'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function ItDeployment() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">IT Deployments Support and Service</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in IT Deployments Support and Service.</p>
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
                                Global Deployment Services Capabilities
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, our IT Deployment Services are specifically designed for large-scale and multi-site implementations of IT hardware, including servers, storage, networking, wireless solutions, and end-user devices. Whether your project involves data centers, corporate offices, retail stores, warehouses, or manufacturing environments, we provide comprehensive deployment solutions that cater to your unique requirements. Our expertise allows us to handle a wide range of projects, from technology refreshes and rack-and-stack initiatives to the implementation of new hardware on a global scale.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our dedicated team ensures that each deployment is executed seamlessly, minimizing downtime and disruption to your operations. We work closely with your organization to plan and implement strategies that optimize efficiency and enhance performance across your IT infrastructure. With Info Tech AI&apos;s IT Deployment Services, you can be confident that your technology investments will be deployed effectively, enabling your business to leverage the latest advancements and stay competitive in today&apos;s fast-paced digital landscape.
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

export default ItDeployment