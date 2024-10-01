'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function BaseLevelSupport() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/18847.jpg?updatedAt=1719040681447')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Data Center Support & Service</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in Datacenter Support & Service.</p>
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
                                Data Centers for Connected Communities
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                Unlock the full potential of your IT infrastructure with Info Tech AI's state-of-the-art datacenter support services. From initial setup to ongoing maintenance, we provide comprehensive, end-to-end solutions to ensure your data is always secure, accessible, and efficiently managed. Whether you need to scale your operations or enhance your existing infrastructure, our datacenter support offers a robust foundation that keeps your business running smoothly while safeguarding your critical data.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our colocation services, built on the PlatformDIGITAL® foundation, provide you with scalable, secure facilities to deploy and manage your critical data. With over 300 data centers across the India, we offer unmatched access to a dynamic ecosystem of services, networks, and partners. Whether your business requires seamless expansion or enhanced data security, our colocation services provide the flexibility to grow while maintaining optimal performance and resilience.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Furthermore, our interconnection services deliver unparalleled global connectivity, ensuring that your data can seamlessly interact with partners, providers, and customers worldwide. This virtual and physical connectivity enhances disaster recovery strategies and boosts the security and performance of your mission-critical applications. With our Build-to-Suit services, you also have the ability to fully customize your colocation environment, with eco-friendly designs that align with your sustainability goals. Info Tech AI’s datacenter support gives your business the infrastructure it needs to stay ahead in the fast-evolving digital landscape.</p>
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

export default BaseLevelSupport