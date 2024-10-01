'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function CloudSupport() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 pt-6 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Cloud Support and Service</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">Get Your Enterprise IT Infrastructure on the only vertically auto-scalable secure cloud platform.
                            </p>
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
                                Cloud Support & Services
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                In today&apos;s digital landscape, public cloud computing has become an integral part of our daily lives, whether we&apos;re booking a ride, chatting with friends, or utilizing various applications for business purposes. As organizations increasingly recognize the value of cloud solutions, approximately 78% of IT professionals rely on public cloud services to enhance their operations. The Indian public cloud services market is booming, with spending expected to grow at a remarkable CAGR of 29%, escalating from INR 384 billion in 2020 to INR 1,103.4 billion by 2025. This growth reflects a fundamental shift in how businesses are approaching their IT infrastructure.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                As the demand for scalable, secure, and reliable public cloud services rises, many businesses find that traditional on-premise IT infrastructure is no longer sufficient. Whether dealing with undersized or oversized private clouds, organizations face recurring financial challenges that can hinder growth. More than six out of ten enterprises are transitioning their workloads to the cloud to reduce capital expenditures and increase operational flexibility. However, moving to the public cloud can be a daunting process without the right guidance and support.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Info Tech AI is here to facilitate your transition to a public cloud platform that seamlessly integrates with your existing on-premise or private cloud environments. Our comprehensive cloud solutions are designed to be agile and adaptable, enabling your business to meet dynamic needs while effectively managing costs. As a leading managed cloud service provider, we cater to over 700 clients, delivering tailored solutions that empower businesses to harness the full potential of the cloud.</p>
                            <p className="text-base font-medium lg:w-[95%]">
                                Imagine a future where your IT infrastructure not only meets current demands but also anticipates future needs, all while self-monitoring, predicting, and responding to challenges. Our Cloud Support and Services for platforms like Azure, AWS, and Google Cloud Platform (GCP) equip your organization with cutting-edge technology and expert guidance. Let Info Tech AI be your trusted partner in navigating the complexities of cloud computing, so you can focus on driving innovation and achieving your business goals.</p>
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

export default CloudSupport