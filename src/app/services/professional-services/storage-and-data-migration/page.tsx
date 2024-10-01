'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function StorageAndDataMigration() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Storage & Data Migration Support</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">Managed by our expert engineers to meet your business requirements.</p>
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
                                Data and Storage Migration Services
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, our expert-level data and storage migration services empower businesses to fully leverage their new hardware investments with minimal disruption. Our team of skilled engineers employs a phased methodology to thoroughly understand the unique requirements and objectives of each data migration project. We begin each project with a simple questionnaire followed by a detailed assessment of your existing storage environment. This ensures we have a clear grasp of the project scope, associated costs, and the most effective toolset to meet your business needs.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our tailored approach to data migration not only streamlines the process but also enhances the overall efficiency of your IT operations. By carefully planning and executing each phase of the migration, we minimize downtime and ensure data integrity throughout the transition. With Info Tech AI&apos;s data and storage migration services, you can trust that your critical information will be moved securely and efficiently, allowing you to focus on driving your business forward with confidence in your upgraded infrastructure.
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

export default StorageAndDataMigration