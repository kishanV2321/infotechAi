'use client'
import React, { useState } from 'react'

interface DevOpsCourse {
    title: string;
    description: string;
}

const devOpsCourse: DevOpsCourse[] = [
    {
        title: "SecDevOps Foundation® (SDOF) Certification Training",
        description: "The SecDevOps Foundation® (SDOF) Certification Training course will help you prepare for and successfully attain the SecDevOps Foundation Certification."
    },
    {
        title: "Introduction to Kubernetes Training",
        description: "Enroll in this hands-on Kubernetes course and learn to deploy containerized applications on Kubernetes and scale those applications to handle dynamic traffic."
    },
    {
        title: "Introduction to Docker Training",
        description: "Learn Docker in this interactive, hands-on Docker training course."
    },
    {
        title: "DevOps Foundation® (DOFD) Certification Training",
        description: "The DevOps Foundation® (DOFD) Certification training includes a collection of basic DevOps terms and concepts, highlights all aspects of DevOps, and more."
    },
    {
        title: "SecDevOps Practitioner® (SDOP) Certification Training",
        description: "This SecDevOps Practitioner® (SDOP) Certification course builds on foundational SecDevOps knowledge while providing practical, hands-on experience."
    },
    {
        title: "DevOps Foundations Training (ICP-FDO Certification)",
        description: "In this DevOps Foundations Training, learn about the proven Lean-Agile principles and gain the knowledge you need to earn the ICAgile (ICP-FDO) certification."
    },
    {
        title: "DevOps Leader® (DOL) Certification Training",
        description: "DevOps Leader® (DOL) Certification Training provides the insights, techniques & innovative approaches for leaders involved in a DevOps cultural transformation."
    },
    {
        title: "DevOps Engineering Foundation® (DOEF) Certification Training",
        description: "DevOps Engineer® training is a DOEF certification course providing foundational knowledge, principles, and practices of DevOps from a technical perspective."
    }
]

function DevOps() {
    const [active, setActive] = useState(1);
    return (
        <>
            {/* Hero Section */}
            <div className='w-full mt-20'>
                <div className='box-content bg-slate-800 px-4'>
                    <div className='mx-auto flex min-h-[260px] flex-col justify-center gap-4  max-w-xl md::max-w-5xl lg:max-w-6xl'>
                        <p className='text-sm text-slate-300 '>
                            {`Home / Course / `}
                            <span className='text-yellow-300'>{`DevOps`}</span>
                        </p>
                        <p className="text-3xl text-white">
                            DevOps
                        </p>
                        <p className="max-w-[870px] text-slate-200">
                            Devops
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
                        {devOpsCourse.map((course, index) => (
                            <div key={index} className='md:p-4'>
                                <div className="block max-w-md h-72 md:h-60 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

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

export default DevOps