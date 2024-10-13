"use client";

import React, { useState } from "react";
import { HoveredLink, MenuItem } from "./ui/navbar-menu";
import { HiArrowRight } from "react-icons/hi";
import NavbarItem from "./NavbarItem";
import Image from 'next/image';
import Link from 'next/link';
import { ImCross } from "react-icons/im";
import Button from "./Button";
import Dig4Ind from "../asset/dig4india_logo.png"

interface NavbarProps {
    isMenuOpen: Boolean;
    toggleMenu: () => void;
    className?: String;
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

function Navbar({ className, toggleMenu, isMenuOpen }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);


    return (
        <>
            <div className="bg-black fixed z-50 w-full top-0 start-0 border-b border-x-current h-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="#" className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <Image src={Dig4Ind} alt="Info TechAi" width={60} height={60} />
                        <span className="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-white">Digital4India</span>
                    </Link>


                    <div className="flex md:order-2 space-x-2 sm:space-x-6 rtl:space-x-reverse">
                        {/* contact us button */}
                        <Button active={true} linkto={"/contact"}>
                            Contact Us
                        </Button>

                        {/* small screen navbar menu button */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-black rounded-lg lg:hidden hover:bg-white border-2 border-white"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            ) : (
                                <ImCross />
                            )}
                        </button>
                    </div>



                    <div className="items-center justify-between w-full lg:flex lg:w-auto md:order-1 hidden">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
                            <li>
                                <Link
                                    href="/"
                                >
                                    <MenuItem setActive={setActive} active={active} item="Home">
                                    </MenuItem>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                >
                                    <MenuItem setActive={setActive} active={active} item="About">
                                    </MenuItem>
                                </Link>
                            </li>

                            <li>
                                <div onMouseEnter={() => setActive("Services")}
                                    onMouseLeave={() => setActive(null)} >
                                    <Link href="#">
                                        <div className="flex">
                                            <MenuItem setActive={setActive} active={active} item="Services">
                                                <div className="flex flex-row space-x-8 ">
                                                    <div className="flex flex-col space-y-4 text-sm text-white">
                                                        <div className="flex flex-row items-center font-extrabold text-yellow-400">
                                                            Go to Job Courses<HiArrowRight className="ml-1" /></div>
                                                        <div className="mt-5"></div>
                                                        <hr />
                                                        {courses.map((course, index) => (
                                                            <div key={index} className="hover:underline">
                                                                <HoveredLink href={course.slug}>
                                                                    {course.title}
                                                                </HoveredLink>
                                                            </div>
                                                        ))}

                                                    </div>

                                                    <div className="flex flex-col space-y-4 text-sm text-white">
                                                        <div>
                                                            <div className="font-extrabold">
                                                                Infrastructure Support</div>
                                                            <div className="flex flex-row items-center font-extrabold">& Services <HiArrowRight className="ml-1" /></div>
                                                        </div>
                                                        <hr />
                                                        {infrastructureServices.map((infraservice, index) => (
                                                            <div key={index} className="hover:underline">
                                                                <HoveredLink href={infraservice.slug}>
                                                                    {infraservice.title}
                                                                </HoveredLink>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex flex-col space-y-4 text-sm text-white">
                                                        <div className="flex flex-row items-center font-extrabold">
                                                            Professional Services <HiArrowRight className="ml-1" /></div>
                                                        <div className="mt-5"></div>
                                                        <hr />
                                                        {professionalServices.map((service, index) => (
                                                            <div key={index} className="hover:underline">
                                                                <HoveredLink href={service.slug}>
                                                                    {service.title}
                                                                </HoveredLink>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </MenuItem>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* small screen navbar menu */}
            {isMenuOpen &&
                <div className="mt-20" >
                    <NavbarItem toggleMenu={toggleMenu} />
                </div>
            }
        </>
    )
}

export default Navbar