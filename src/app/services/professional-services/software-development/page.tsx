'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function SoftwareDevelopment() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/software_development_service_4fb6b0e7-5b58-41d6-8457-7a00d82c30db.png?updatedAt=1727778920538')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-6 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Software Development Service</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">Your Vision, Our Code</p>
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
                                Get Unique Customized Solutions With Our Custom Software Developemnt Company
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, we specialize in delivering customized software solutions that align perfectly with your unique business identity. As a leading provider of custom software services, we offer a comprehensive range of solutions designed to meet your specific needs and business objectives. Our dedicated team of skilled software developers is equipped to assist you throughout your project, ensuring that the latest technological advancements are integrated seamlessly into your software.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Customization is key to establishing a distinct business identity and fostering user loyalty. By opting for custom software development, you gain multiple advantages, including increased flexibility and enhanced functionality tailored to your operations. At Info Tech AI, we take the time to understand your unique requirements, enabling us to provide top-tier customized solutions across various business domains. Our commitment to leveraging the latest technological stack ensures that you receive innovative solutions that propel your business forward.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">As one of the top custom software development companies, we pride ourselves on our ability to listen carefully to your needs and gather in-depth information to deliver tailored solutions. Our specialized approach not only ensures that we meet your business requirements but also helps you save costs through improved integration and greater ownership and control. With Info Tech AI, you can trust that our expertise and dedication will translate into software solutions that empower your business and drive success in an ever-evolving digital landscape.</p>
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

export default SoftwareDevelopment