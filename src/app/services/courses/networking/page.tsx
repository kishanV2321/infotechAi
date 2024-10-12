'use client'
import React, { useState } from 'react'

interface NetworkingCourse {
    title: string;
    description: string;
}

const networkingCourse: NetworkingCourse[] = [
    {
        title: "CompTIA Network+® Training",
        description: "This CompTIA Network+® Training course prepares you for the CompTIA Exam N10-009, covering network management and troubleshooting procedures."
    },
    {
        title: "Architecting on AWS",
        description: "Architecting on AWS covers the fundamentals of building an IT infrastructure on AWS & preps you for the AWS Certified Solutions Architect - Associate exam."
    },
    {
        title: "Introduction to Networking Training",
        description: "This hands-on Introduction to Networking course provides you with a knowledge of IP addressing, TCP/IP operation & LAN solutions. Attend in-class or online."
    },
    {
        title: "CCNA Certification Training",
        description: "The Cisco Implementing & Administering Cisco Solutions CCNA certification training course teaches a broad range of fundamental knowledge for all IT careers."
    },
    {
        title: "VMware vSphere Training",
        description: "Learning Tree's VMware vSphere course provides attendees the foundation for the majority of VMware technologies in the software-defined data center."
    },
    {
        title: "Network Configuration and Troubleshooting Training",
        description: "In this hands-on networking course, gain the skills to configure, maintain & troubleshoot multiple network configurations. Attend in-class or online."
    },
    {
        title: "Advanced Architecting on AWS",
        description: "This Advanced Architecting on AWS course covers how to build complex solutions & preps you for the AWS Certified Solutions Architect - Professional exam."
    },
    {
        title: "Cloud Operations on AWS",
        description: "This AWS SysOps Administrator course will prepare systems administrators to take the official exam and become an AWS Certified SysOps Administrator - Associate."
    }
]

function Networking() {
    const [active, setActive] = useState(1);
    return (
        <>
            {/* Hero Section */}
            <div className='w-full mt-20'>
                <div className='box-content bg-slate-800 px-4'>
                    <div className='mx-auto flex min-h-[260px] flex-col justify-center gap-4  max-w-xl md::max-w-5xl lg:max-w-6xl'>
                        <p className='text-sm text-slate-300 '>
                            {`Home / Course / `}
                            <span className='text-yellow-300'>{`Networking`}</span>
                        </p>
                        <p className="text-3xl text-white">
                            Networking
                        </p>
                        <p className="max-w-[870px] text-slate-200">
                            Networking
                        </p>
                    </div>
                </div>
            </div>

            {/* Section */}
            <div className='w-full bg-slate-900'>
                <div className='mx-auto flex flex-col justify-center px-4 py-12 max-w-xl md::max-w-5xl lg:max-w-6xl'>
                    <div className='text-lg md:text-2xl text-white'>Courses to get you started</div>
                    <div className='my-4 flex border-b border-b-slate-500 text-sm'>
                        <p
                            className={`px-4 py-2 ${active === 1 ? "border-b border-b-yellow-300 text-yellow-300" : "text-slate-300"} cursor-pointer`}
                            onClick={() => setActive(1)}
                        >
                            Most Popular
                        </p>
                        <p
                            className={`px-4 py-2 ${active === 2
                                ? "border-b border-b-yellow-300 text-yellow-300"
                                : "text-slate-300"
                                } cursor-pointer`}
                            onClick={() => setActive(2)}
                        >
                            New
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                        {networkingCourse.map((course, index) => (
                            <div key={index} className='md:p-4'>
                                <div className="block max-w-md h-60 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{course.title}</h5>
                                    <p className="font-normal dark:text-gray-400">{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Networking