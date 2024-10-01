'use client'
import React from 'react'
import Button from '@/components/Button'
import HowWeDevelop from '@/components/HowWeDevelop'
import WhyChooseUs from '@/components/WhyChooseUs'
import { GlobeDemo } from '@/components/GlobeDemo'

function HarewareMonitoring() {
    return (
        <>
            <section className="w-full">
                <div className="w-full h-[420px] bg-[url('https://ik.imagekit.io/kvimages/it-services-images/55295.jpg?updatedAt=1719040473372')] bg-cover bg-no-repeat bg-center relative">
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col items-center mx-auto px-4 mt-12 md:px-8 text-center">
                            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">IT Infrastructure Training</h1>
                            <p className="text-white text-lg md:text-2xl mb-6">The Best in IT Infrastructure Training.</p>
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
                                Empower Your Team with Comprehensive Knowledge and Skills for a Robust IT Environment
                            </h1>
                            <p className="text-base font-medium lg:w-[95%]">
                                At Info Tech AI, we believe that a well-trained team is essential for maintaining a robust IT infrastructure. Our IT infrastructure training programs are tailored to provide your staff with the essential knowledge and hands-on experience needed to effectively manage and optimize your IT systems. Covering a wide array of topics, including network management, server maintenance, and cybersecurity best practices, our training ensures that your team is equipped to address the unique challenges of your organization. We combine theoretical knowledge with practical applications to prepare your staff for real-world scenarios, empowering them to make informed decisions that enhance operational efficiency.
                            </p>
                            <p className="text-base font-medium lg:w-[95%]">
                                In addition to enhancing technical skills, our training programs foster a culture of continuous learning and innovation within your organization. By investing in your team&apos;s development, you not only improve their confidence and capabilities but also contribute to your company&apos;s long-term success. With Info Tech AI&apos;s IT infrastructure training, your staff will be better positioned to leverage technology effectively, ensuring that your IT systems are reliable, secure, and aligned with your business goals. Let us help you cultivate a skilled workforce that can drive your organization&apos;s IT initiatives forward.
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

export default HarewareMonitoring