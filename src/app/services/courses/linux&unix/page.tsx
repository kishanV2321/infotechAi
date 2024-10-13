'use client'
import React, { useState } from 'react'

interface LinixUnixCourse {
    title: string;
    description: string;
}

const linixUnixCourse: LinixUnixCourse[] = [
    {
        title: "Red Hat Enterprise Linux Automation with Ansible (RH294)",
        description: "RH294 course for experienced Linux sys admins to administer enterprise-level systems & prep for RHCE certification (EX300)."
    },
    {
        title: "Introduction to Linux Training",
        description: "Attend this Introduction to Linux course & learn to create, edit & search Linux files; control permissions & ownership; process & format text data & more."
    },
    {
        title: "Linux and UNIX Tools and Utilities Training",
        description: "Learn to build & use Linux/UNIX tools & utilities in this hands-on course. Perform complex search strings & write shell scripts to automate routine tasks."
    },
    {
        title: "Red Hat System Administration I (RH124) Training",
        description: "Learn Linux admin survival skills. Red Hat System Administration I Training teaches core tasks & key command line concepts for aspiring sys admins."
    },
    {
        title: "Linux Administration and Support Training",
        description: "In this Linux administration & support course, you gain the skills to install, design, configure & support a Linux server. Attend in-class or online."
    }
]

function LinuxUnix() {
    const [active, setActive] = useState(1);
    return (
        <>
            {/* Hero Section */}
            <div className='w-full mt-20'>
                <div className='box-content bg-slate-800 px-4'>
                    <div className='mx-auto flex min-h-[260px] flex-col justify-center gap-4  max-w-xl md::max-w-5xl lg:max-w-6xl'>
                        <p className='text-sm text-slate-300 '>
                            {`Home / Course / `}
                            <span className='text-yellow-300'>{`Linix & Unix`}</span>
                        </p>
                        <p className="text-3xl text-white">
                            Linix & Unix
                        </p>
                        <p className="max-w-[870px] text-slate-200">
                            Linix & Unix
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
                        {linixUnixCourse.map((course,index) => (
                            <div key={index} className='md:p-4'>
                                <div className="block max-w-md h-60 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                    <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight dark:text-white">{course.title}</h5>
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

export default LinuxUnix