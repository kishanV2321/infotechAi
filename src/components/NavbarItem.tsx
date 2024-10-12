"use client";

import React, { useState } from 'react'
import { HiArrowRight } from "react-icons/hi";
import { VscArrowDown } from "react-icons/vsc";
import { HoveredLink } from "./ui/navbar-menu";


interface NavbarItemProps {
    toggleMenu: () => void;
}

const courses = [
    {
        title: "DevOps",
        slug: "/services/courses/devops"
    },
    {
        title: "Infrastructure",
        slug: "/services/courses/infrastructure"
    },
    {
        title: "Linux & Unix",
        slug: "/services/courses/linux&unix"
    },
    {
        title: "Networking",
        slug: "/services/courses/networking"
    },
    {
        title: "Windows",
        slug: "/services/courses/window"
    },
]

const infrastructureServices = [
    {
        title: "Storage Maintenanace",
        slug: "/services/infrastructure-services/storage-maintenance"
    },
    {
        title: "Server Maintenanace",
        slug: "/services/infrastructure-services/server-maintenance"
    },
    {
        title: "Network Maintenanace",
        slug: "/services/infrastructure-services/network-maintenance"
    },
    {
        title: "Hardware Monitoring",
        slug: "/services/infrastructure-services/hardware-monitoring"
    },
    {
        title: "VMware Technical Support",
        slug: "/services/infrastructure-services/vmware-technical-support"
    },
]

const professionalServices = [
    {
        title: "Wireless Transformation",
        slug: "/services/professional-services/wireless-transformation"
    },
    {
        title: "Storage & Data Migration",
        slug: "/services/professional-services/storage-and-data-migration"
    },
    {
        title: "Cloud Support",
        slug: "/services/professional-services/cloud-support"
    },
    {
        title: "OS Support",
        slug: "/services/professional-services/os-support"
    },
    {
        title: "IT Deployments",
        slug: "/services/professional-services/it-deployments"
    },
    {
        title: "Software Development",
        slug: "/services/professional-services/software-development"
    },
]

function NavbarItem({ toggleMenu }: NavbarItemProps) {
    const [isOpenService, setOpenService] = useState<string | null>(null);

    const toggle = (service: string) => {
        setOpenService(service)
    }


    return (
        <div className='w-screen abs lg:w-3/12 h-screen z-20 bg-black p-4 text-white'>
            <div className='flex flex-col space-y-3'>
                <HoveredLink href={"/"} onClick={toggleMenu}>
                    <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">Home</h2>
                </HoveredLink>
                <hr />
                <HoveredLink href={"/about"} onClick={toggleMenu}>
                    <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">About Us</h2>
                </HoveredLink>
                <hr />
                <HoveredLink href={"/services"} onClick={toggleMenu}>
                    <h2 className="flex flex-row items-center text-lg text-teal-600 font-semibold tracking-wide uppercase">Services <VscArrowDown className='ml-1' /></h2>
                </HoveredLink>
                <hr />
            </div>

            <div className="flex flex-col space-y-3 mt-4 text-base">
                <div className="flex flex-row items-center font-semibold text-lg text-yellow-300" onClick={() => toggle("thirdpartyhardware")}>
                    Go To Job Courses <HiArrowRight className="ml-1" />
                </div>
                <hr />
                {isOpenService === "thirdpartyhardware" &&
                    <>
                        {courses.map((course, index) => (
                            <div key={index}>
                                <HoveredLink onClick={toggleMenu} href={course.slug}>
                                    {course.title}
                                </HoveredLink>
                            </div>
                        ))}
                    </>
                }
            </div>

            <div className="flex flex-col space-y-3 mt-4 text-base">
                <div className="flex flex-row items-center font-semibold text-lg"
                    onClick={() => toggle("infrastructuremanage")}>
                    Infrastructure Managed Services <HiArrowRight className="ml-1" /></div>
                <hr />
                {isOpenService === "infrastructuremanage" &&
                    <>
                        {infrastructureServices.map((infraservice, index) => (
                            <div key={index}>
                                <HoveredLink onClick={toggleMenu} href={infraservice.slug}>
                                    {infraservice.title}
                                </HoveredLink>
                            </div>
                        ))}
                    </>}
            </div>

            <div className="flex flex-col space-y-3 mt-4 text-base">
                <div className="flex flex-row items-center font-semibold text-lg"
                    onClick={() => toggle("professionalservice")}>
                    Professional Services <HiArrowRight className="ml-1" />
                </div>
                <hr />
                {isOpenService === "professionalservice" &&
                    <>
                        {professionalServices.map((service, index) => (
                            <div key={index}>
                                <HoveredLink onClick={toggleMenu} href={service.slug}>
                                    {service.title}
                                </HoveredLink>
                            </div>
                        ))}
                    </>}
            </div>
        </div >
    )
}

export default NavbarItem