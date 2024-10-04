'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function ServerMaintenance() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/storage,server,_network_maintenanace_c1d7627e-1f9b-4f3c-8928-1154ca10f7ad.png?updatedAt=1727778920724')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Server Maintenance Service</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in Server Maintenance Service.</p>
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
                                Server Maintenance
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Digital4India, our server maintenance contracts are designed to provide the comprehensive support you need to ensure your server equipment operates efficiently and reliably. We understand that your servers are the backbone of your IT infrastructure, which is why we offer tailored maintenance solutions that prioritize performance and uptime. Our expert team is dedicated to monitoring and maintaining your server systems, addressing potential issues before they impact your business.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                In addition to standard server maintenance, we also offer third-party support and both basic and enhanced operating system (OS) support services for a range of select operating systems. This means you can count on us to provide the necessary attention and expertise to keep your servers running smoothly, allowing you to focus on your core business operations with confidence. With Digital4India, you can rest assured that your server hardware is in capable hands.
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

export default ServerMaintenance