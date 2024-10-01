'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function ITinfraSupportAndService() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/data_center_support_f16bca0a-8d6b-4858-b5f6-c6183d6a0580.png?updatedAt=1727778917041')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">IT Infrastructure Support and Services</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">Secure, optimize, streamline, and upgrade your IT infrastructure!</p>
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
                                Your Trusted Partner for IT Infrastructure Support and Maintenance.
                            </h1>
                            <p className="text-base font-medium lg:w-[95%] ">
                                Revolutionize your IT landscape with Info Tech AI&apos;s comprehensive IT infrastructure support services. We provide all-encompassing solutions for your hardware, software, network, storage, firewall, and backup needs, ensuring seamless integration and unmatched reliability. Our expert team is dedicated to keeping your business running smoothly by providing end-to-end support for traditional on-premise setups, cloud-based environments, edge computing, and software-defined infrastructures (SDI). No matter how complex your IT environment, our infrastructure support services are tailored to meet the unique demands of your business, ensuring optimal performance and security.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Our IT Infrastructure Support services offer businesses the expertise and assurance needed to manage their technology environments with confidence. From cloud security and network device management to configuration changes and proof of concept (POC) implementations, our team is well-equipped to handle every aspect of your infrastructure. We understand the growing challenges around cybersecurity, and our services are designed to proactively address these concerns. Our approach covers everything from monitoring and managing your infrastructure to implementing new security protocols, ensuring that your business remains protected from emerging threats.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                By leveraging our IT support services, you can delegate the complexities of managing your IT environment to our team of experts, allowing you to focus on your core business activities. Our services include comprehensive monitoring, maintenance, risk management, troubleshooting, and optimization of critical IT components such as physical servers, storage systems, public/private/hybrid clouds, and more. Whether you need support for on-premise infrastructure or cloud-based environments, Info Tech AI ensures that your IT systems are secure, flexible, and aligned with industry best practices.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">As a trusted partner, Info Tech AI works closely with you to understand your business goals and tailor our services to meet your specific requirements. We are committed to helping you mitigate cybersecurity risks, enhance network performance, and maximize uptime, ensuring that your IT infrastructure remains resilient in an ever-changing technological landscape. With our dedicated IT infrastructure support, you can rest assured that your technology is in capable hands, enabling your business to thrive in a competitive digital world.</p>
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

export default ITinfraSupportAndService