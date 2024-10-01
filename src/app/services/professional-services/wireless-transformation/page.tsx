'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function WirelessTransformation() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Wireless Site Surveys & Network Refresh Deployment</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">Network site surveys and enterprise WiFi deployment for optimized wireless access and performance.</p>
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
                                Platform-Neutral Wireless Surveys and AP Deployments
                            </h1>
                            <p className="ttext-base font-medium lg:w-[95%]">
                                At Info Tech AI, our network refresh service is designed to guide organizations through the process of wireless modernization using our comprehensive three-phase approach: Assessment & Design, Build & Ship, and Deployment. This global solution provides you with a single vendor for all your wireless needs, ensuring a seamless experience from start to finish. We deliver end-to-end services that include wireless site surveys, complete with coverage heatmaps, optimized wireless architecture designs, and the installation of new cabling and access points (APs), followed by validation surveys to confirm performance.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our platform-neutral approach sets us apart; we are not tied to any specific manufacturer, allowing us to align our solutions with your unique goals and budget. This flexibility means you can choose only the service components that best fit your needs, enabling effective cost management without sacrificing quality. With Info Tech AI, you can trust that our expert team will deliver a customized wireless solution that enhances connectivity and performance for your organization, all while adhering to your financial requirements.
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

export default WirelessTransformation