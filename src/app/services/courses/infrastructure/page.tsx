'use client'
import React, { useState } from 'react'

interface InfraStructureCourse {
    title: string;
    description: string;
}

const infrastructureCourse: InfraStructureCourse[] = [
    {
        title: "COBIT® 2019 Training",
        description: "Complete COBIT® 2019 Training & gain best practices for the governance and management of enterprise information and technology."
    },
    {
        title: "Implementing and Operating Cisco Security Core Technologies (SCOR) Training",
        description: "Learning Tree's SCOR training helps you prepare for the Cisco® CCNP® Security and CCIE® Security certifications and for senior-level security roles."
    },
    {
        title: "Understanding Cisco Cybersecurity Operations Fundamentals Training (CBROPS)",
        description: "Learn about TCP/IP protocol suite devices, operations, and vulnerabilities in this 5-day Cisco course."
    },
    {
        title: "Administering Collaboration Environments Training (CLACE)",
        description: "Master collaboration platform administration with our CLACE course. Learn to optimize user experience, ensure security, and troubleshoot issues effectively."
    }
]

function Infrastructure() {
    const [active, setActive] = useState(1);
    return (
        <>
            {/* Hero Section */}
            <div className='w-full mt-20'>
                <div className='box-content bg-slate-800 px-4'>
                    <div className='mx-auto flex min-h-[260px] flex-col justify-center gap-4  max-w-xl md::max-w-5xl lg:max-w-6xl'>
                        <p className='text-sm text-slate-300 '>
                            {`Home / Course / `}
                            <span className='text-yellow-300'>{`Infrastructure`}</span>
                        </p>
                        <p className="text-3xl text-white">
                            Infrastructure
                        </p>
                        <p className="max-w-[870px] text-slate-200">
                            Infrastructure
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
                        {infrastructureCourse.map((course, index) => (
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

export default Infrastructure