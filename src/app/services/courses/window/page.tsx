'use client'
import React, { useState } from 'react'

interface WindowCourse {
    title: string;
    description: string;
}

const windowCourse: WindowCourse[] = [
    {
        title: "Microsoft 365 Endpoint Administrator Training (MD-102)",
        description: "Master endpoint deployment with Microsoft 365 Endpoint Administrator Training (MD-102). Gain essential skills for update strategies."
    },
    {
        title: "The Power of PowerShell",
        description: "Learn PowerShell basics in 1 day. Administer Microsoft workstations & servers with command syntax & scripting language."
    },
    {
        title: "Introduction to Microsoft Configuration Manager",
        description: "Learn to manage enterprise Windows systems with Microsoft's Configuration Manager for secure, up-to-date systems."
    },
    {
        title: "Automating Administration with PowerShell Training (AZ-040)",
        description: "Learning Tree's AZ-040 Powershell training teaches attendees how to use Windows PowerShell to administer and automate Windows server administration."
    }
]

function Windows() {
    const [active, setActive] = useState(1);
    return (
        <>
            {/* Hero Section */}
            <div className='w-full mt-20'>
                <div className='box-content bg-slate-800 px-4'>
                    <div className='mx-auto flex min-h-[260px] flex-col justify-center gap-4  max-w-xl md::max-w-5xl lg:max-w-6xl'>
                        <p className='text-sm text-slate-300 '>
                            {`Home / Course / `}
                            <span className='text-yellow-300'>{`Windows`}</span>
                        </p>
                        <p className="text-3xl text-white">
                            Windows
                        </p>
                        <p className="max-w-[870px] text-slate-200">
                            Windows
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
                        {windowCourse.map((course, index) => (
                            <div key={index} className='md:p-4'>
                                <div className="block max-w-md h-64 md:h-60 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

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

export default Windows